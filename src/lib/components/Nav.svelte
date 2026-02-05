<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const links = [
		{ name: 'Home', path: `${base}/` },
		{ name: 'Projects', path: `${base}/projects` },
		{ name: 'Resume', path: `${base}/resume` }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 py-6 px-6" style="background: var(--color-background)">
	<div class="max-w-6xl mx-auto flex justify-between items-center">
		<a href="{base}/" class="text-2xl font-bold" style="color: var(--color-primary)">
			JS
		</a>
		<ul class="flex gap-8">
			{#each links as link}
				<li>
					<a
						href={link.path}
						class="nav-link text-lg transition-all duration-300 hover:scale-110"
						class:active={$page.url.pathname === link.path}
						style="color: var(--color-primary); opacity: {$page.url.pathname === link.path ? 1 : 0.7}"
					>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- Spacer to prevent content from hiding under fixed nav -->
<div class="h-24"></div>

<style>
	.nav-link:hover {
		opacity: 1 !important;
	}

	.nav-link.active {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
</style>
