<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import GeometricBackground from '$lib/components/GeometricBackground.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<GeometricBackground />

<div class="relative z-10">
	<Nav />
	{@render children()}
</div>
