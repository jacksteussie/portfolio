<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import GeometricBackground from '$lib/components/GeometricBackground.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { theme } from '$lib/theme.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="fixed inset-0 -z-20 transition-colors duration-300" style="background: var(--color-background)"></div>

<GeometricBackground />

<div class="relative z-10">
	<Nav />
	{@render children()}
</div>
