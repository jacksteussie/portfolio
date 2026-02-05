<div class="min-h-screen px-6 py-12">
	<div class="max-w-4xl mx-auto">
		<!-- Header -->
		<header class="mb-16 text-center">
			<a href="/" class="inline-block mb-8 text-lg hover:underline" style="color: var(--color-primary); opacity: 0.8">
				← Back to Home
			</a>
			<h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">Resume</h1>
			<p class="text-xl mb-6" style="color: var(--color-primary); opacity: 0.7">
				Jack Steussie • Full Stack Developer
			</p>
			<a
				href="#"
				class="download-btn inline-block px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
				style="background: var(--color-box); color: var(--color-text-on-box)"
			>
				Download PDF
			</a>
		</header>

		<!-- Experience Section -->
		<section class="mb-16">
			<h2 class="text-4xl font-bold mb-8" style="color: var(--color-primary)">Experience</h2>
			<div class="space-y-8">
				{#each [
					{
						title: 'Senior Full Stack Developer',
						company: 'Tech Company',
						period: '2022 - Present',
						description: 'Led development of key features for web applications using modern frameworks. Mentored junior developers and improved code quality standards across the team.'
					},
					{
						title: 'Full Stack Developer',
						company: 'Another Company',
						period: '2020 - 2022',
						description: 'Built and maintained multiple client projects using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and automated testing.'
					},
					{
						title: 'Junior Developer',
						company: 'Startup Inc',
						period: '2019 - 2020',
						description: 'Developed features for SaaS platform. Collaborated with designers and product team to deliver user-friendly solutions.'
					}
				] as job}
					<div
						class="resume-card p-6 rounded-xl"
						style="background: var(--color-box)"
					>
						<h3 class="text-2xl font-bold mb-2" style="color: var(--color-text-on-box)">
							{job.title}
						</h3>
						<p class="text-lg mb-2" style="color: var(--color-text-on-box); opacity: 0.9">
							{job.company}
						</p>
						<p class="text-sm mb-4" style="color: var(--color-text-on-box); opacity: 0.7">
							{job.period}
						</p>
						<p class="leading-relaxed" style="color: var(--color-text-on-box); opacity: 0.85">
							{job.description}
						</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Education Section -->
		<section class="mb-16">
			<h2 class="text-4xl font-bold mb-8" style="color: var(--color-primary)">Education</h2>
			<div
				class="resume-card p-6 rounded-xl"
				style="background: var(--color-box)"
			>
				<h3 class="text-2xl font-bold mb-2" style="color: var(--color-text-on-box)">
					Bachelor of Science in Computer Science
				</h3>
				<p class="text-lg mb-2" style="color: var(--color-text-on-box); opacity: 0.9">
					University Name
				</p>
				<p class="text-sm" style="color: var(--color-text-on-box); opacity: 0.7">
					2015 - 2019
				</p>
			</div>
		</section>

		<!-- Skills Section -->
		<section>
			<h2 class="text-4xl font-bold mb-8" style="color: var(--color-primary)">Skills</h2>
			<div class="grid md:grid-cols-2 gap-6">
				{#each [
					{
						category: 'Frontend',
						skills: ['JavaScript', 'TypeScript', 'React', 'Svelte', 'Tailwind CSS', 'HTML/CSS']
					},
					{
						category: 'Backend',
						skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
					},
					{
						category: 'Tools & DevOps',
						skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Linux']
					},
					{
						category: 'Other',
						skills: ['Agile', 'Unit Testing', 'System Design', 'Team Leadership', 'Technical Writing']
					}
				] as skillGroup}
					<div
						class="resume-card p-6 rounded-xl"
						style="background: var(--color-box)"
					>
						<h3 class="text-xl font-bold mb-4" style="color: var(--color-text-on-box)">
							{skillGroup.category}
						</h3>
						<ul class="space-y-2">
							{#each skillGroup.skills as skill}
								<li style="color: var(--color-text-on-box); opacity: 0.85">
									• {skill}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.resume-card {
		animation: fadeIn 0.6s ease-out;
	}

	.download-btn {
		background: var(--color-box) !important;
		color: var(--color-text-on-box) !important;
	}

	.download-btn:hover {
		background: var(--color-box) !important;
		color: var(--color-text-on-box) !important;
	}
</style>
