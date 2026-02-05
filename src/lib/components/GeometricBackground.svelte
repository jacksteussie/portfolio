<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let shapes: Shape[] = [];
	let animationId: number;

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
			opacity: Math.random() * 0.15 + 0.05
		};
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

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		shapes.forEach((shape) => {
			ctx.save();
			ctx.translate(shape.x, shape.y);
			ctx.rotate(shape.rotation);
			ctx.translate(-shape.x, -shape.y);

			ctx.strokeStyle = `rgba(var(--color-primary-rgb), ${shape.opacity})`;
			ctx.lineWidth = 2;

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

			shape.x += shape.dx;
			shape.y += shape.dy;
			shape.rotation += shape.rotationSpeed;

			if (shape.x < -50) shape.x = canvas.width + 50;
			if (shape.x > canvas.width + 50) shape.x = -50;
			if (shape.y < -50) shape.y = canvas.height + 50;
			if (shape.y > canvas.height + 50) shape.y = -50;
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

		for (let i = 0; i < 15; i++) {
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

<style>
	:global(:root) {
		--color-primary-rgb: 0, 0, 0;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--color-primary-rgb: 255, 255, 255;
		}
	}
</style>
