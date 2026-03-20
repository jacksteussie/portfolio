<script lang="ts">
	import { base } from '$app/paths';
	import burnstackLogo from '$lib/assets/project-logos/burnstack.svg?url';
	import quantvisionLogo from '$lib/assets/project-logos/quantvision.svg?url';
	import llmfitLogo from '$lib/assets/project-logos/llmfit.png?url';

	const logoSrc = (url?: string) => {
		if (!url) return '';
		if (url.startsWith('data:') || url.startsWith('http://') || url.startsWith('https://'))
			return url;
		if (url.startsWith('/')) return `.${url}`;
		return url;
	};
</script>

<div class="min-h-screen px-6 py-12">
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<header class="page-header-box mb-16 text-center">
			<a
				href="{base}/"
				class="mb-8 inline-block text-lg hover:underline"
				style="color: var(--color-primary); opacity: 0.8"
			>
				← Back to Home
			</a>
			<h1 class="mb-4 text-6xl font-bold" style="color: var(--color-primary)">Projects</h1>
			<p class="text-xl" style="color: var(--color-primary); opacity: 0.7">
				A showcase of my recent work and contributions
			</p>
		</header>

		<!-- Projects Grid -->
		<div class="grid gap-8 md:grid-cols-2">
			{#each [{ title: 'Burnstack.ai', logo: burnstackLogo, description: 'Startup cost command center SaaS that centralizes cloud and AI spend (OpenAI, Anthropic, OpenRouter, Supabase, Tavily), with secure multi-tenant workspaces, encrypted provider integrations, automated sync/ingestion pipelines, and invoice-based cost import for reliable burn tracking.', tech: ['Next.js', 'Tailwind', 'TypeScript'], link: 'https://burnstack.ai', tags: ['Startup'], status: 'To Be Released' }, { title: 'QuantVision.ai', logo: quantvisionLogo, description: 'A SaaS platform for company financials and stock market analytics integrated with advanced agentic AI capabilities.', tech: ['Next.js', 'Python', 'Tailwind', 'Google Cloud', 'LangChain DeepAgents', 'LangFuse'], link: 'https://quantvision-lilac.vercel.app/', tags: ['Startup'], status: 'To Be Released' }, { title: 'LLMfit.io', logo: llmfitLogo, description: 'A site to aid users looking to see if their hardware will be able to run a specific LLM model locally.', tech: [], link: 'https://llmfit.io', tags: [], status: 'Live' }] as project, i}
				<div class="entrance-wrapper" style="animation-delay: {i * 0.1}s">
					<div
						class="project-card hover-lift flex h-full flex-col rounded-xl p-6"
						style="background: var(--color-box)"
					>
						<div class="mb-3 flex flex-wrap items-start justify-between gap-3">
							<div class="flex min-w-0 flex-1 items-center gap-3 pr-2">
								{#if project.logo}
									<div class="project-logo-shell">
										<img
											src={logoSrc(project.logo)}
											alt="{project.title} logo"
											class="project-logo"
											width="56"
											height="56"
										/>
									</div>
								{/if}
								<h3 class="min-w-0 text-2xl font-bold" style="color: var(--color-text-on-box)">
									{project.title}
								</h3>
							</div>
							{#if project.status}
								<span
									class="shrink-0 rounded-lg px-3 py-1 text-xs font-medium whitespace-nowrap"
									style="background: var(--color-background); color: var(--color-primary); opacity: 0.8"
								>
									{project.status}
								</span>
							{/if}
						</div>
						<p class="mb-4 leading-relaxed" style="color: var(--color-text-on-box); opacity: 0.85">
							{project.description}
						</p>
						<div class="mt-auto pt-2">
							{#if project.tags && project.tags.length > 0}
								<div class="mb-3 flex flex-wrap gap-2">
									{#each project.tags as tag}
										<span
											class="rounded-full px-3 py-1 text-xs font-semibold"
											style="background: var(--color-text-on-box); color: var(--color-box); opacity: 0.9"
										>
											{tag}
										</span>
									{/each}
								</div>
							{/if}
							{#if project.tech && project.tech.length > 0}
								<div class="mb-4 flex flex-wrap gap-2">
									{#each project.tech as tech}
										<span
											class="rounded-lg px-3 py-1 text-sm"
											style="background: var(--color-background); color: var(--color-primary)"
										>
											{tech}
										</span>
									{/each}
								</div>
							{/if}
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 self-start text-sm font-medium opacity-90 transition-opacity hover:opacity-100"
									style="color: var(--color-text-on-box)"
								>
									View Project
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.entrance-wrapper {
		animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.project-logo-shell {
		width: 3.5rem;
		height: 3.5rem;
		flex-shrink: 0;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.95);
		padding: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
	}

	.project-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.project-logo-shell {
		width: 3.5rem;
		height: 3.5rem;
		flex-shrink: 0;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.95);
		padding: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
	}

	.project-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.page-header-box {
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease,
			color 0.3s ease;
	}

	:global(.dark) .page-header-box {
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}
</style>
