<script lang="ts">
	import { base } from '$app/paths';

	const profile =
		'Detail-oriented, hardworking, and conscientious software engineer with academic and professional experience applying machine learning, artificial intelligence, and software to solve real-world business problems.';

	const experience = [
		{
			role: 'Software Engineer',
			company: 'Skycubed',
			location: 'San Diego, California',
			dates: 'February 2024 - Present',
			description:
				'Developed proprietary software for DoD clients within an R&D lab environment focused on analyzing cyber readiness of the warfighter and its associated assets. Maintained an active Secret clearance while pursuing Top-Secret clearance. Leveraged a modern technology stack including React, Golang, Docker, Python, various Microsoft Azure Government services, Terraform, and GitLab/GitHub CI/CD pipelines, alongside Palantir\'s Maven Smart Systems.',
			tech: ['React', 'Go', 'Docker', 'Python', 'Azure Government', 'Terraform', 'GitLab', 'GitHub', 'CI/CD', "Maven Smart Systems"]
		},
		{
			role: 'Lead Software Engineer',
			company: 'Triton Funds LLC',
			location: 'San Diego, California',
			dates: 'June 2023 - January 2024',
			description:
				'Spearheaded the end-to-end design and development of a proprietary financial data pipeline, independently architecting a solution that automated the identification of investment opportunities and company valuations using LLMs. Collaborated with company leaders and team members throughout the process, leading task distribution, code review, version control, and system architecture decisions. Integrated NLP and AI models, multi-source data APIs, AWS DynamoDB for storage, and LLMs to extract insights from SEC filings at scale. Engineered Python-based web sockets to consume high-volume daily filing streams and automated fund notifications via AWS Lambda.',
			tech: ['Python', 'NLP', 'LLMs', 'AWS DynamoDB', 'AWS Lambda', 'WebSockets', 'Data APIs']
		},
		{
			role: 'Data Science Intern',
			company: 'Relay Health',
			location: 'Remote',
			dates: 'January 2023 - June 2023',
			description:
				'Worked with company leaders to develop data pipelines and automated data reporting systems. Responsibilities included data analysis and system architecture design and implementation. I created an automated reporting pipeline that included daily activity reports, optimized user group assignments, and an activity-based segmentation model to identify high-risk users.'
		},
		{
			role: 'Data Science Intern',
			company: 'UniGroup CA',
			location: 'Remote',
			dates: 'June 2021 - August 2021',
			description:
				'Participated in the data science career acceleration program. Foundational components included differential calculus, integral calculus, linear algebra, and statistics. Machine learning modules included linear regression, classification, decision trees, and neural networks using PyTorch.'
		}
	];

	const projects = [
		{
			name: 'QuantVision.ai',
			description:
				'Founded and built QuantVision.ai, a financial data platform centralizing company filings and financials, designed to scale into a comprehensive analysis solution for emerging and seasoned analysts.'
		},
		{
			name: 'Brain MRI Computer Vision Classifier',
			description:
				'Built binary classifier for brain tumor MRIs in PyTorch using a pretrained ResNet-152 model.'
		},
		{
			name: 'Machine Learning Models and Feature Selection Comparison',
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
		'Amazon Web Services',
		'Microsoft Azure',
		'Machine Learning',
		'Large Language Models',
		'Agentic AI',
		'Linux',
		'Data Pipelines',
		'Data Visualization',
		'Statistical Analysis',
		'Maven Smart Systems'
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
							<div>
								<h3 class="text-2xl font-bold" style="color: var(--color-text-on-box)">{role.role}</h3>
								<p class="text-lg" style="color: var(--color-text-on-box); opacity: 0.9">
									{role.company} • {role.location}
								</p>
							</div>
							<p class="text-sm md:text-base font-medium" style="color: var(--color-text-on-box); opacity: 0.8">
								{role.dates}
							</p>
						</div>
						<p class="leading-relaxed mb-4" style="color: var(--color-text-on-box); opacity: 0.9">{role.description}</p>
						{#if role.tech}
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
						<h3 class="text-xl font-bold mb-2" style="color: var(--color-text-on-box)">{project.name}</h3>
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
</style>
