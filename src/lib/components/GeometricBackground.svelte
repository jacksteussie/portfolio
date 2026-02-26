<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme.svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let shapes: Shape[] = [];
	let animationId: number;
	const SHAPE_COUNT = 28;

	let primaryRGB = $derived(theme.current === 'dark' ? '255, 255, 255' : '0, 0, 0');

	interface Shape {
		x: number;
		y: number;
		size: number;
		rotation: number;
		rotationSpeed: number;
		dx: number;
		dy: number;
		type: 'triangle' | 'square' | 'circle' | 'hexagon';
		opacity: number;
	}
	interface Vec2 {
		x: number;
		y: number;
	}

	interface Projection {
		min: number;
		max: number;
	}

	interface CollisionManifold {
		normal: Vec2;
		overlap: number;
	}

	function createShape(): Shape {
		const types: Shape['type'][] = ['triangle', 'square', 'circle', 'hexagon'];
		return {
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			size: Math.random() * 60 + 20,
			rotation: Math.random() * Math.PI * 2,
			rotationSpeed: (Math.random() - 0.5) * 0.02,
			dx: (Math.random() - 0.5) * 0.5,
			dy: (Math.random() - 0.5) * 0.5,
			type: types[Math.floor(Math.random() * types.length)],
			opacity: Math.random() * 0.3 + 0.6
		};
	}

	function getBoundingRadius(shape: Shape) {
		switch (shape.type) {
			case 'triangle':
			case 'square':
				return shape.size * Math.SQRT1_2;
			case 'circle':
			case 'hexagon':
			default:
				return shape.size / 2;
		}
	}

	function getMass(shape: Shape) {
		const radius = shape.size / 2;
		switch (shape.type) {
			case 'triangle':
				return (shape.size * shape.size) / 2;
			case 'square':
				return shape.size * shape.size;
			case 'hexagon':
				return (3 * Math.sqrt(3) * radius * radius) / 2;
			case 'circle':
			default:
				return Math.PI * radius * radius;
		}
	}

	function dot(a: Vec2, b: Vec2) {
		return a.x * b.x + a.y * b.y;
	}

	function normalize(vector: Vec2) {
		const magnitude = Math.hypot(vector.x, vector.y);
		if (magnitude === 0) {
			return { x: 1, y: 0 };
		}
		return { x: vector.x / magnitude, y: vector.y / magnitude };
	}

	function orientAxis(axis: Vec2, from: Vec2, to: Vec2) {
		const centerVector = { x: to.x - from.x, y: to.y - from.y };
		return dot(axis, centerVector) >= 0 ? axis : { x: -axis.x, y: -axis.y };
	}

	function getPolygonLocalVertices(shape: Shape): Vec2[] {
		const half = shape.size / 2;
		switch (shape.type) {
			case 'triangle':
				return [
					{ x: 0, y: -half },
					{ x: -half, y: half },
					{ x: half, y: half }
				];
			case 'square':
				return [
					{ x: -half, y: -half },
					{ x: half, y: -half },
					{ x: half, y: half },
					{ x: -half, y: half }
				];
			case 'hexagon': {
				const vertices: Vec2[] = [];
				for (let i = 0; i < 6; i++) {
					const angle = (Math.PI / 3) * i;
					vertices.push({ x: half * Math.cos(angle), y: half * Math.sin(angle) });
				}
				return vertices;
			}
			default:
				return [];
		}
	}

	function getPolygonVertices(shape: Shape): Vec2[] {
		if (shape.type === 'circle') return [];
		const cosRotation = Math.cos(shape.rotation);
		const sinRotation = Math.sin(shape.rotation);
		return getPolygonLocalVertices(shape).map((point) => ({
			x: shape.x + point.x * cosRotation - point.y * sinRotation,
			y: shape.y + point.x * sinRotation + point.y * cosRotation
		}));
	}

	function getAxes(vertices: Vec2[]): Vec2[] {
		const axes: Vec2[] = [];
		for (let i = 0; i < vertices.length; i++) {
			const current = vertices[i];
			const next = vertices[(i + 1) % vertices.length];
			const edge = { x: next.x - current.x, y: next.y - current.y };
			axes.push(normalize({ x: -edge.y, y: edge.x }));
		}
		return axes;
	}

	function projectPolygon(vertices: Vec2[], axis: Vec2): Projection {
		let min = dot(vertices[0], axis);
		let max = min;
		for (let i = 1; i < vertices.length; i++) {
			const projection = dot(vertices[i], axis);
			if (projection < min) min = projection;
			if (projection > max) max = projection;
		}
		return { min, max };
	}

	function projectCircle(circle: Shape, axis: Vec2): Projection {
		const centerProjection = dot({ x: circle.x, y: circle.y }, axis);
		const radius = circle.size / 2;
		return {
			min: centerProjection - radius,
			max: centerProjection + radius
		};
	}

	function getOverlap(a: Projection, b: Projection) {
		return Math.min(a.max, b.max) - Math.max(a.min, b.min);
	}

	function detectCircleCircleCollision(a: Shape, b: Shape): CollisionManifold | null {
		const dx = b.x - a.x;
		const dy = b.y - a.y;
		const distance = Math.hypot(dx, dy);
		const minDistance = a.size / 2 + b.size / 2;
		if (distance >= minDistance) return null;

		const safeDistance = distance || 0.001;
		return {
			normal: { x: dx / safeDistance, y: dy / safeDistance },
			overlap: minDistance - safeDistance
		};
	}

	function detectPolygonPolygonCollision(a: Shape, b: Shape): CollisionManifold | null {
		const verticesA = getPolygonVertices(a);
		const verticesB = getPolygonVertices(b);
		const axes = [...getAxes(verticesA), ...getAxes(verticesB)];

		let smallestOverlap = Infinity;
		let collisionNormal: Vec2 = { x: 1, y: 0 };

		for (const axis of axes) {
			const projectionA = projectPolygon(verticesA, axis);
			const projectionB = projectPolygon(verticesB, axis);
			const overlap = getOverlap(projectionA, projectionB);
			if (overlap <= 0) return null;

			if (overlap < smallestOverlap) {
				smallestOverlap = overlap;
				collisionNormal = orientAxis(axis, { x: a.x, y: a.y }, { x: b.x, y: b.y });
			}
		}

		return { normal: collisionNormal, overlap: smallestOverlap };
	}

	function detectCirclePolygonCollision(circle: Shape, polygon: Shape): CollisionManifold | null {
		const polygonVertices = getPolygonVertices(polygon);
		const axes = getAxes(polygonVertices);

		let closestVertex = polygonVertices[0];
		let closestDistance = Infinity;
		for (const vertex of polygonVertices) {
			const distance = Math.hypot(vertex.x - circle.x, vertex.y - circle.y);
			if (distance < closestDistance) {
				closestDistance = distance;
				closestVertex = vertex;
			}
		}

		const circleToVertex = normalize({ x: closestVertex.x - circle.x, y: closestVertex.y - circle.y });
		axes.push(circleToVertex);

		let smallestOverlap = Infinity;
		let collisionNormal: Vec2 = { x: 1, y: 0 };

		for (const axis of axes) {
			const projectionCircle = projectCircle(circle, axis);
			const projectionPolygon = projectPolygon(polygonVertices, axis);
			const overlap = getOverlap(projectionCircle, projectionPolygon);
			if (overlap <= 0) return null;

			if (overlap < smallestOverlap) {
				smallestOverlap = overlap;
				collisionNormal = orientAxis(axis, { x: circle.x, y: circle.y }, { x: polygon.x, y: polygon.y });
			}
		}

		return { normal: collisionNormal, overlap: smallestOverlap };
	}

	function detectCollision(a: Shape, b: Shape): CollisionManifold | null {
		if (a.type === 'circle' && b.type === 'circle') {
			return detectCircleCircleCollision(a, b);
		}

		if (a.type === 'circle') {
			return detectCirclePolygonCollision(a, b);
		}

		if (b.type === 'circle') {
			const manifold = detectCirclePolygonCollision(b, a);
			if (!manifold) return null;
			return {
				normal: { x: -manifold.normal.x, y: -manifold.normal.y },
				overlap: manifold.overlap
			};
		}

		return detectPolygonPolygonCollision(a, b);
	}

	function getShapeBounds(shape: Shape) {
		if (shape.type === 'circle') {
			const radius = shape.size / 2;
			return {
				minX: shape.x - radius,
				maxX: shape.x + radius,
				minY: shape.y - radius,
				maxY: shape.y + radius
			};
		}

		const vertices = getPolygonVertices(shape);
		let minX = vertices[0].x;
		let maxX = vertices[0].x;
		let minY = vertices[0].y;
		let maxY = vertices[0].y;
		for (let i = 1; i < vertices.length; i++) {
			minX = Math.min(minX, vertices[i].x);
			maxX = Math.max(maxX, vertices[i].x);
			minY = Math.min(minY, vertices[i].y);
			maxY = Math.max(maxY, vertices[i].y);
		}
		return { minX, maxX, minY, maxY };
	}

	function drawTriangle(x: number, y: number, size: number) {
		ctx.beginPath();
		ctx.moveTo(x, y - size / 2);
		ctx.lineTo(x - size / 2, y + size / 2);
		ctx.lineTo(x + size / 2, y + size / 2);
		ctx.closePath();
		ctx.stroke();
	}

	function drawSquare(x: number, y: number, size: number) {
		ctx.strokeRect(x - size / 2, y - size / 2, size, size);
	}

	function drawCircle(x: number, y: number, size: number) {
		ctx.beginPath();
		ctx.arc(x, y, size / 2, 0, Math.PI * 2);
		ctx.stroke();
	}

	function drawHexagon(x: number, y: number, size: number) {
		ctx.beginPath();
		for (let i = 0; i < 6; i++) {
			const angle = (Math.PI / 3) * i;
			const hx = x + (size / 2) * Math.cos(angle);
			const hy = y + (size / 2) * Math.sin(angle);
			if (i === 0) ctx.moveTo(hx, hy);
			else ctx.lineTo(hx, hy);
		}
		ctx.closePath();
		ctx.stroke();
	}

	function resolveWallCollision(shape: Shape) {
		const bounds = getShapeBounds(shape);

		if (bounds.minX < 0) {
			shape.x -= bounds.minX;
			shape.dx = Math.abs(shape.dx);
		} else if (bounds.maxX > canvas.width) {
			shape.x -= bounds.maxX - canvas.width;
			shape.dx = -Math.abs(shape.dx);
		}

		if (bounds.minY < 0) {
			shape.y -= bounds.minY;
			shape.dy = Math.abs(shape.dy);
		} else if (bounds.maxY > canvas.height) {
			shape.y -= bounds.maxY - canvas.height;
			shape.dy = -Math.abs(shape.dy);
		}
	}

	function resolveShapeCollisions() {
		const restitution = 0.92;

		for (let i = 0; i < shapes.length; i++) {
			for (let j = i + 1; j < shapes.length; j++) {
				const a = shapes[i];
				const b = shapes[j];

				const dx = b.x - a.x;
				const dy = b.y - a.y;
				const distanceSquared = dx * dx + dy * dy;
				const maxDistance = getBoundingRadius(a) + getBoundingRadius(b);
				if (distanceSquared > maxDistance * maxDistance) {
					continue;
				}

				const manifold = detectCollision(a, b);
				if (!manifold) continue;

				const nx = manifold.normal.x;
				const ny = manifold.normal.y;
				const massA = getMass(a);
				const massB = getMass(b);
				const totalMass = massA + massB;
				const separationA = manifold.overlap * (massB / totalMass);
				const separationB = manifold.overlap * (massA / totalMass);

				a.x -= nx * separationA;
				a.y -= ny * separationA;
				b.x += nx * separationB;
				b.y += ny * separationB;

				const rvx = b.dx - a.dx;
				const rvy = b.dy - a.dy;
				const velocityAlongNormal = rvx * nx + rvy * ny;

				if (velocityAlongNormal > 0) {
					continue;
				}

				const inverseMassA = 1 / massA;
				const inverseMassB = 1 / massB;
				const impulse = (-(1 + restitution) * velocityAlongNormal) / (inverseMassA + inverseMassB);

				a.dx -= impulse * inverseMassA * nx;
				a.dy -= impulse * inverseMassA * ny;
				b.dx += impulse * inverseMassB * nx;
				b.dy += impulse * inverseMassB * ny;
			}
		}

		shapes.forEach((shape) => {
			resolveWallCollision(shape);
		});
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		shapes.forEach((shape) => {
			shape.x += shape.dx;
			shape.y += shape.dy;
			shape.rotation += shape.rotationSpeed;
			resolveWallCollision(shape);
		});

		resolveShapeCollisions();

		shapes.forEach((shape) => {
			ctx.save();
			ctx.translate(shape.x, shape.y);
			ctx.rotate(shape.rotation);
			ctx.translate(-shape.x, -shape.y);

			ctx.strokeStyle = `rgba(${primaryRGB}, ${shape.opacity})`;
			ctx.lineWidth = 1;

			switch (shape.type) {
				case 'triangle':
					drawTriangle(shape.x, shape.y, shape.size);
					break;
				case 'square':
					drawSquare(shape.x, shape.y, shape.size);
					break;
				case 'circle':
					drawCircle(shape.x, shape.y, shape.size);
					break;
				case 'hexagon':
					drawHexagon(shape.x, shape.y, shape.size);
					break;
			}

			ctx.restore();
		});

		animationId = requestAnimationFrame(animate);
	}

	function resize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		resize();

		for (let i = 0; i < SHAPE_COUNT; i++) {
			shapes.push(createShape());
		}

		animate();

		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvas} class="fixed inset-0 pointer-events-none -z-10"></canvas>
