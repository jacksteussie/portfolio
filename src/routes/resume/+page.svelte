<script lang="ts">
	import { base } from '$app/paths';
	import skycubedLogo from '$lib/assets/experience-logos/skycubed.jpeg?url';
	import tritonLogo from '$lib/assets/experience-logos/triton.jpeg?url';
	import relayLogo from '$lib/assets/experience-logos/relay.png?url';
	import unigroupLogo from '$lib/assets/experience-logos/unigroup.svg?url';
	import northgateLogo from '$lib/assets/experience-logos/northgatefunds.svg?url';
	import burnstackLogo from '$lib/assets/project-logos/burnstack.svg?url';
	import quantvisionLogo from '$lib/assets/project-logos/quantvision.svg?url';

	interface ExperienceEntry {
		role: string;
		company: string;
		companyLink?: string;
		location: string;
		dates: string;
		logo?: string;
		employmentType?: string;
		description?: string;
		tech?: string[];
	}

	interface ResumeProjectEntry {
		name: string;
		description: string;
		logo?: string;
	}

	const profile =
		'Full-stack software engineer with experience architecting and deploying AI/ML-powered data systems in mission-critical R&D environments, specializing in translating complex analytical workflows into scalable production applications.';

	const experience: ExperienceEntry[] = [
		{
			role: 'Software Engineering Advisor',
			company: 'Northgate Funds',
			companyLink: 'https://northgatefunds.com/',
			location: 'California, United States · Remote',
			dates: 'Oct 2025 - Present',
			logo: northgateLogo
		},
		{
			role: 'Software Engineer',
			company: 'Skycubed',
			companyLink: 'https://www.skycubed.com/',
			location: 'San Diego, California',
			dates: 'February 2024 - Present',
			logo: skycubedLogo,
			description:
				'Developed proprietary software for DoD clients within a mission-critical R&D lab environment, serving as the technical translator between domain experts and engineering teams to convert complex data pipelines and analysis workflows into scalable production systems. Owned the design and implementation of the platform ontology within Palantir\'s Maven Smart Systems, leading and mentoring the team on ontological data modeling and the downstream AI integration opportunities it unlocks. Designed and deployed full-stack applications and data pipelines that abstracted sophisticated cyber readiness analysis into intuitive interfaces, accelerating the research and analysis cycle for non-engineering stakeholders. Leveraged a modern technology stack including React, Golang, Docker, Python, various Microsoft Azure Government services, Terraform, and GitLab/GitHub CI/CD pipelines. Maintained an active Secret clearance while pursuing Top-Secret clearance. Additionally, took internal initiative to lead and author a technical proposal for a new contract opportunity, conducting independent research literature review to inform model selection and architecture decisions, and designing and prototyping a deep learning pipeline using a Siamese U-Net model with ResNet backbone to automatically detect and score structural damage from satellite imagery. Proposed a high-level system design spanning cloud infrastructure, geospatial visualization, and multi-modal data integration including auxiliary ML models for supplemental data sources.',
			tech: ['React', 'Go', 'Docker', 'Python', 'Azure Government', 'Terraform', 'GitLab', 'GitHub', 'CI/CD', 'Palantir Maven Smart Systems']
		},
		{
			role: 'Lead Software Engineer',
			company: 'Triton Funds LLC',
			location: 'San Diego, California',
			dates: 'June 2023 - January 2024',
			logo: tritonLogo,
			description:
				'Owned all architecture and implementation decisions end to end for a proprietary financial data pipeline, engineering a solution that automated the identification of investment opportunities and company valuations using LLMs. Collaborated with company leaders and team members throughout the process, leading task distribution, code review, version control, and system architecture decisions. Integrated NLP and AI models, multi-source data APIs, AWS DynamoDB for storage, and LLMs to extract insights from SEC filings at scale. Engineered Python-based web sockets to consume high-volume daily filing streams and automated fund notifications via AWS Lambda.',
			tech: ['Python', 'NLP', 'LLMs', 'AWS DynamoDB', 'AWS Lambda', 'WebSockets', 'Data APIs']
		},
		{
			role: 'Data Science Intern',
			company: 'Relay Health',
			companyLink: 'https://www.joinrelay.app/',
			location: 'Remote',
			dates: 'January 2023 - June 2023',
			logo: relayLogo,
			description:
				'Partnered with company leaders to develop data pipelines and automated data reporting systems, contributing to data analysis and system architecture design and implementation. Delivered an automated reporting pipeline encompassing daily activity reports, optimized user group assignments, and an activity-based segmentation model to identify high-risk users.'
		},
		{
			role: 'Data Science Intern',
			company: 'UniGroup CA',
			companyLink: 'https://www.unigroup.com/',
			location: 'Remote',
			dates: 'June 2021 - August 2021',
			logo: unigroupLogo,
			description:
				'Completed an intensive data science training program working alongside professional data scientists, gaining hands-on experience applying machine learning concepts including linear regression, classification, decision trees, and neural networks using PyTorch to real-world datasets.'
		}
	];

	const projects: ResumeProjectEntry[] = [
		{
			name: 'Burnstack.ai',
			logo: burnstackLogo,
			description:
				'Startup cost command center SaaS that centralizes cloud and AI spend (OpenAI, Anthropic, OpenRouter, Supabase, Tavily), with secure multi-tenant workspaces, encrypted provider integrations, automated sync/ingestion pipelines, and invoice-based cost import for reliable burn tracking.'
		},
		{
			name: 'QuantVision.ai',
			logo: quantvisionLogo,
			description:
				'Founded and architected QuantVision.ai, a financial data platform centralizing company filings and financials, designed to scale into a comprehensive analysis solution for emerging and seasoned analysts. Serves terabytes of company filings via AWS S3 and structured financial data via a managed PostgreSQL instance, with infrastructure designed to scale into a production-ready platform. Technology stack included a full Typescript/Next.js frontend and backend with several backend microservices written with Python\'s FastAPI and Golang, with the main webapp hosted on Vercel and microservices on Google Cloud. Currently developing an agentic AI with LangChain\'s DeepAgents package that interfaces with a Neo4j knowledge graph containing industry and company relationships and Elasticsearch for full text and vector search to aid in proposal creation and investment theses.'
		},
		{
			name: 'Brain MRI Computer Vision Classifier',
			description:
				'Built binary classifier for brain tumor MRIs in PyTorch using a pretrained ResNet-152 model.'
		},
		{
			name: 'Machine Learning Models and Feature Selection Comparison and Analysis',
			description:
				'Implemented an empirical comparison of supervised learning algorithms using a machine learning pipeline that automated feature selection, hyperparameter tuning, and model comparison.'
		}
	];

	const education = [
		{
			degree: 'M.S. Computer Science (Machine Learning Concentration)',
			year: '2028',
			school: 'Georgia Institute of Technology'
		},
		{
			degree: 'B.S. Cognitive Science (Machine Learning Concentration)',
			year: '2022',
			school: 'University of California, San Diego',
			details: 'Minors: Computer Science, Mathematics'
		}
	];

	const expertise = [
		'System Architecture & Design',
		'Software Development',
		'Machine Learning',
		'Large Language Models',
		'Agentic AI',
		'Linux',
		'Data Pipelines',
		'Data Visualization',
		'Statistical Analysis',
		'Palantir Maven Smart Systems',
		'Docker Containerization'
	];

	const technicalSkills = [
		'Python',
		'Golang',
		'Typescript & React',
		'SQL',
		'Bash',
		'FastAPI',
		'Pandas',
		'PyTorch',
		'XGBoost',
		'LangChain/DeepAgents',
		'Scikit-Learn',
		'CI/CD',
		'Terraform',
		'Docker',
		'Amazon Web Services',
		'Microsoft Azure',
		'Tableau',
		'Power BI'
	];
</script>

<div class="min-h-screen px-6 py-12">
	<div class="max-w-5xl mx-auto">
		<header class="mb-12 text-center page-header-box">
			<a href="{base}/" class="inline-block mb-8 text-lg hover:underline" style="color: var(--color-primary); opacity: 0.8">
				← Back to Home
			</a>
			<h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">Resume</h1>
			<p class="text-2xl font-light mb-3" style="color: var(--color-primary); opacity: 0.9">Full Stack Software Engineer</p>
			<p class="text-lg max-w-3xl mx-auto leading-relaxed" style="color: var(--color-primary); opacity: 0.75">
				{profile}
			</p>
		</header>

		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-5 section-title" style="color: var(--color-primary)">Experience</h2>
			<div class="space-y-5">
				{#each experience as role}
					<article class="p-6 rounded-xl resume-card">
						<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
							<div class="flex items-start gap-4">
								{#if role.logo}
									<div class="experience-logo">
										<img src={role.logo} alt="{role.company} logo" class="experience-logo-img" />
									</div>
								{/if}
								<div>
									<h3 class="text-2xl font-bold" style="color: var(--color-text-on-box)">{role.role}</h3>
									<p class="text-lg" style="color: var(--color-text-on-box); opacity: 0.9">
										{#if role.companyLink}
											<a
												href={role.companyLink}
												target="_blank"
												rel="noopener noreferrer"
												class="company-link"
												style="color: var(--color-text-on-box)"
											>
												{role.company}
											</a>
										{:else}
											{role.company}
										{/if}
										{#if role.employmentType} • {role.employmentType}{/if} • {role.location}
									</p>
								</div>
							</div>
							<p class="text-sm md:text-base font-medium" style="color: var(--color-text-on-box); opacity: 0.8">
								{role.dates}
							</p>
						</div>
						{#if role.description}
							<p class="leading-relaxed mb-4" style="color: var(--color-text-on-box); opacity: 0.9">
								{role.description}
							</p>
						{/if}
						{#if role.tech && role.tech.length > 0}
							<div class="flex flex-wrap gap-2">
								{#each role.tech as tech}
									<span class="px-3 py-1 rounded-lg text-sm skill-chip">{tech}</span>
								{/each}
							</div>
						{/if}
					</article>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-5 section-title" style="color: var(--color-primary)">Projects</h2>
			<div class="grid md:grid-cols-3 gap-4">
				{#each projects as project}
					<article class="p-5 rounded-xl resume-card">
						<div class="flex items-center gap-3 mb-2">
							{#if project.logo}
								<div class="project-logo-shell">
									<img src={project.logo} alt="{project.name} logo" class="project-logo-img" />
								</div>
							{/if}
							<h3 class="text-xl font-bold" style="color: var(--color-text-on-box)">{project.name}</h3>
						</div>
						<p class="leading-relaxed text-sm" style="color: var(--color-text-on-box); opacity: 0.9">{project.description}</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-5 section-title" style="color: var(--color-primary)">Education</h2>
			<div class="grid md:grid-cols-2 gap-4">
				{#each education as school}
					<article class="p-5 rounded-xl resume-card">
						<p class="text-sm font-medium mb-1" style="color: var(--color-text-on-box); opacity: 0.8">{school.year}</p>
						<h3 class="text-xl font-bold mb-1" style="color: var(--color-text-on-box)">{school.degree}</h3>
						<p class="mb-1" style="color: var(--color-text-on-box); opacity: 0.9">{school.school}</p>
						{#if school.details}
							<p class="text-sm" style="color: var(--color-text-on-box); opacity: 0.8">{school.details}</p>
						{/if}
					</article>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="text-3xl font-bold mb-5 section-title" style="color: var(--color-primary)">Areas of Expertise</h2>
			<div class="flex flex-wrap gap-3">
				{#each expertise as area}
					<span class="px-4 py-2 rounded-lg text-sm font-medium skill-chip">{area}</span>
				{/each}
			</div>
		</section>

		<section class="mt-12">
			<h2 class="text-3xl font-bold mb-5 section-title" style="color: var(--color-primary)">Technical Skills</h2>
			<div class="flex flex-wrap gap-3">
				{#each technicalSkills as skill}
					<span class="px-4 py-2 rounded-lg text-sm font-medium skill-chip">{skill}</span>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	.resume-card {
		background: var(--color-box);
		border: 1px solid rgba(255, 255, 255, 0.15);
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
	}

	.section-title {
		letter-spacing: 0.01em;
	}

	.skill-chip {
		background: var(--color-background);
		color: var(--color-primary);
	}

	.experience-logo {
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

	.experience-logo-img {
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

	.project-logo-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.company-link {
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.company-link:hover {
		opacity: 0.85;
	}
</style>
