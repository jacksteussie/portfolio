<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="min-h-screen px-6 py-12">
	<div class="max-w-6xl mx-auto">
		<!-- Header -->
		<header class="mb-16 text-center page-header-box">
			<a href="{base}/" class="inline-block mb-8 text-lg hover:underline" style="color: var(--color-primary); opacity: 0.8">
				← Back to Home
			</a>
			<h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">Projects</h1>
			<p class="text-xl" style="color: var(--color-primary); opacity: 0.7">
				A showcase of my recent work and contributions
			</p>
		</header>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{
					title: 'Burnstack.ai',
					description:
						'Startup cost command center SaaS that centralizes cloud and AI spend (OpenAI, Anthropic, OpenRouter, Supabase, Tavily), with secure multi-tenant workspaces, encrypted provider integrations, automated sync/ingestion pipelines, and invoice-based cost import for reliable burn tracking.',
					tech: [],
					link: 'https://burnstack.ai',
					tags: ['Next.js', 'Tailwind', 'TypeScript'],
					status: 'To Be Released'
				},
				{
					title: 'QuantVision.ai',
					description: 'A SaaS platform for company financials and stock market analytics integrated with advanced agentic AI capabilities.',
					tech: ["Next.js", "Python", "Tailwind", "Google Cloud", "LangChain DeepAgents", "LangFuse"],
					link: 'https://quantvision.ai',
					tags: ['Startup'],
					status: 'To Be Released'
				},
			] as project, i}
				<div
					class="project-card p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
					style="background: var(--color-box); animation-delay: {i * 0.1}s"
				>
					<div class="flex items-start justify-between mb-3">
						<h3 class="text-2xl font-bold" style="color: var(--color-text-on-box)">
							{project.title}
						</h3>
						{#if project.status}
							<span
								class="px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
								style="background: var(--color-background); color: var(--color-primary); opacity: 0.8"
							>
								{project.status}
							</span>
						{/if}
					</div>
					<p class="leading-relaxed mb-4" style="color: var(--color-text-on-box); opacity: 0.85">
						{project.description}
					</p>
					{#if project.tags && project.tags.length > 0}
						<div class="flex flex-wrap gap-2 mb-3">
							{#each project.tags as tag}
								<span
									class="px-3 py-1 rounded-full text-xs font-semibold"
									style="background: var(--color-text-on-box); color: var(--color-box); opacity: 0.9"
								>
									{tag}
								</span>
							{/each}
						</div>
					{/if}
					{#if project.tech && project.tech.length > 0}
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tech as tech}
								<span
									class="px-3 py-1 rounded-lg text-sm"
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
							class="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105"
							style="color: var(--color-text-on-box); opacity: 0.9"
						>
							View Project
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.project-card {
		animation: fadeInUp 0.6s ease-out both;
	}

	.project-card:hover {
		transform: scale(1.05) translateY(-5px);
	}
</style>
