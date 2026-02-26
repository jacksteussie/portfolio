<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { theme } from '$lib/theme.svelte';

	const links = [
		{ name: 'Home', path: `${base}/` },
		{ name: 'Projects', path: `${base}/projects` },
		{ name: 'Resume', path: `${base}/resume` }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 py-4 px-6" style="background: var(--color-background)">
	<div class="max-w-6xl mx-auto flex justify-between items-center">
		<a href="{base}/" class="text-xl font-bold" style="color: var(--color-primary)">
			JS
		</a>
		<div class="flex items-center gap-6">
			<ul class="flex gap-6">
				{#each links as link}
					<li>
						<a
							href={link.path}
							class="nav-link text-base transition-all duration-300 hover:scale-110"
							class:active={$page.url.pathname === link.path}
							style="color: var(--color-primary); opacity: {$page.url.pathname === link.path ? 1 : 0.7}"
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>

			<button
				onclick={() => theme.toggle()}
				class="p-2 rounded-full transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
				aria-label="Toggle theme"
				style="color: var(--color-primary)"
			>
				{#if theme.current === 'light'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2" />
						<path d="M12 20v2" />
						<path d="m4.93 4.93 1.41 1.41" />
						<path d="m17.66 17.66 1.41 1.41" />
						<path d="M2 12h2" />
						<path d="M20 12h2" />
						<path d="m6.34 17.66-1.41 1.41" />
						<path d="m19.07 4.93-1.41 1.41" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Spacer to prevent content from hiding under fixed nav -->
<div class="h-16"></div>

<style>
	.nav-link:hover {
		opacity: 1 !important;
	}

	.nav-link.active {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
</style>
