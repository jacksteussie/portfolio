import { _ as attr, $ as ensure_array_like, a3 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../../chunks/context.js";
const skycubedLogo = "/app/immutable/assets/skycubed.CF9FO4aT.jpeg";
const tritonLogo = "/app/immutable/assets/triton.CkKwRNTu.jpeg";
const relayLogo = "data:image/jpeg;base64,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";
const unigroupLogo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCABkAGQDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAwQHAgj/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB+qQAAAAAAaNXu3Ps9Lrkr9eOkqXL2rOozfmMjx7mAAGPIOb2WSr+W2TV2d4jLfXvc10vc5CxO/N1WYtWSF6AOWdT+bct+51/bhjNs0W51v0OkV/FakzKVTopLjXAB86fRejTSm842c+fRMQOLZTm2Zi8TnoWk15wmAAAAAAAAAAAAAAP/8QAJBAAAgMBAAEEAQUAAAAAAAAAAgQBAwUGIBESExQAFSIwQFD/2gAIAQEAAQUC/tOfN8Gf0M33st1pjSxWyP8AFvZvxnnsDqJJmeLoaw3J2m8diGe7D1BmNQiUGPiYRaB1HkuvrDpKZV8M0KEWU7YE5L37bQCn61oXMRUGh6l4PKQ3TmMStboKytexXGmoqUPK5tpVE6r9qn1K6v0D8TsLx3tWKNC2/wCvjcy3a4YaBMdBpPSe1M+0aNKL3o0JFKi62xzwdv8Adtdf7oxeHYE1qmZ5/o9LG/VWGxIAstG9f57oty8+M5Xw7LOPP1MDWo6PKZS0OQfPpcTdoNXmR/Er1JOwprex8clC8XUqdFfQ4d/Ovq7DZzYs6rHZmjSi2Qyt3XjLx1Mer/K//8QAIREAAgEDBAMBAAAAAAAAAAAAAAERAhIhAxAgQSIxQFL/2gAIAQMBAT8B50w8Mt67LeUznswM9jW+kpYl4NjSTFSVY3067HIl+MoiB1JDc/B//8QAHxEAAgEEAgMAAAAAAAAAAAAAAAERAhAhMRIgQEJx/9oACAECAQE/Ae9UrKORPaIxZGhO9ej2g2hsWb1Lkj6bEjXgf//EAD0QAAECAwMGCAwHAAAAAAAAAAECAwAEERIhMQUTMkFRYSAiM0JSYnGBBhQVIyRDU5GhwdHwMEBEUJKx4v/aAAgBAQAGPwL80oy5GdF4B1wlp9sIrdaG2Ap02Um6tItNLC07vw/GWxxVaW4wph69YFFb98Kbc5M3H6wJlhxWbOkmt1YEzLgKppIMW8FC5SYKlGyka4tJIUNo4RSoVSYqnVhvEJdbvWBUfSFSr1913ZCmV8krX84zieQcxEdJKhC5Nw+acvbVsMKaCvSGNXTTDSrsy5dXoq4NOcNEwWl3JPwMB9q6/wBxgLTyifukGXc0k4GDLOYpwinPF6TCX03TLNyhtEV/TP49VUFlzlEfEbeCpttKTZHGJ2wXZm9QbqRvh4kJDaRq2xmZcJCQq9XZjDUqwEh26qz74qTQDEw/Moo3JNDjunnQ66puiZhVJdnWd8S8uLJeZFX1jBPV4L9vDPmv8oWRgFJrEy3zwu13QrPg2LRqeqdcJnsnzSAs0vrd21EUytldJQPUMYqhD0wjxLJLXJsc54wiaW36e/xJSW9knpQEVtuHjOL6SuCp4DzEwbQO/WIMs8avBFhxGsjpR4w0C4wPWU4pGxUJTPoUy4NZBNOwiK+UZg9UD/MUyPklycd9vMaI++6EmYX5WywdCXRybPbC5maXn553TX0dw4SmJhAcbVqMZ/Jbxds3pFqy4IsZQyap0DnFBQT8o85kKrm4CPQPBUE6nHEXf184AnZpGTpf2Erj998WJZqzXFZvUrv/AGv/xAAoEAEAAQMDAwQCAwEAAAAAAAABEQAhMUFhgVFx8CCRobHB0TBAUPH/2gAIAQEAAT8h/tR4oRk203btKhsRp5aspB3ir1miXh/jwoS09zmubmIaUUK/LomnnehnFEE70dGmx11z3O5UOE64w0ZfIWCjyThJH1RzrCNBbhcvjrmzBTWmGpCWvRxSA3csbftQM+gabcUmh4RGpjDefl5emojTK9CMnKug+lBvtyrgDi9FoayY8L0N+xvrTEbXM7PFWxWz+qJDbshpOHhV5rSax6OqEzRn2vSb2B1mX1FOJAN2we8FDUYMG6x+aZJSNPd+6OeIaV/QoWECUsFWM7Sb9vjxo0PVL/hjyK6OKSHG59N/cOXSik2S7Z/cVP0jI3EfhpJiBgzgPw8NBMvHVGBJDitSHoXaYD5KRnfYtJ3nr/2o4k4ZyjS354uRuTlMvpYbsOazm/NFOlE9FDyzxUtiQCXwzyKxQ0kjlx3KbYnq2oQVYMr1zFDQWl63XRbzrXAnSPr9WWyWhuOjQsgvsLh+O1YnM94EK4KVoNm/eQKN7zActWIsULzpJj3dqhO/dB4P8v8A/9oADAMBAAIAAwAAABDzzzzzzztvXbzzzzCHfPbzzhAhmjzyu2WN7zzzzzzzzzzzzzzz/8QAJBEBAAIABAYDAQAAAAAAAAAAAQARITFBoRAgUWFx8ECB0fH/2gAIAQMBAT8Q58tQuOhLUI5xEaeWxDkl5tHZhUxzIILff7CqzjeLpPssBLlWD3hh1v3Dqyhv303ePYUAVQmYwZwEPJW8123ze/5EdvwP/8QAIhEBAAICAQIHAAAAAAAAAAAAAQARITFBECAwQFFhgdHw/9oACAECAQE/EPAg0R4ZW0eIIlnbR20ynXJGDjTEtU4Hq6ARcYFQN3FYVdcJHNGKcxTan4Yr7fvT7gAo8h//xAApEAEBAAEEAgEDAwUBAAAAAAABESEAMUFhUYFxIJGhscHRMEBQ4fDx/9oACAEBAAE/EP7qeHYqjd7S8ImZxpunxg4UJXFu89QmbGUUIMuc7Y0xCKWYLHw5MPn+mCwjPu7fHl386moHT4D2IZ8l5NNEQAOjfFz6bmg//FO4Vzy9/OjkdNUAYkSbnZxk0fHIFeKdJk9nGpkgvmSVeDR6jpwOkw/UdxHbkdJMuqwNuv0fCXxoUBKB2jsb7O9AFmnv/fcOp40zdBMGX/l/pp3dpsxa/JZOqedIhJxNxvyI6JFtIzgA+bj5NK3eBD7irJkyk5dRX/De92R4Yfb6Z8C7OOQ9P8PGqZ4Njx+rs+u9UqGlxu/bL8+dBFCUO5+43PXl0k/qQfk2PXy6ypZa3N0fqdXrUMGcB8N8P8PGnQIoIhbT7/8ADXi4/wAt1H/oGsqUq+g84l/39ItI6GpsibIPd0GXZUEDO1tU850Hlnoc4Vdgr5NAfHBKB2EMoD5HnTAirYwCAl3e7ONNPgjAGVXY1YkJGGbGm7gRcHINSx7Yt0HnAuwzg5oISIy7c52cVcZZvPoBmZxYKE9BPWgGUB4xl9tCLYY5Rj0P3jzoyIrJXvclSeDfR16GdGFAAAiccZ1i+dZD2BEvKnZvpLRlPK4W8jsitclzhDAJQUQFJQ5JLrVJKi5x1zLg67V+lfhATLyzzkfJyjrGT0qCPLcKnpySiQPk3JG/BvCgpmChrFBt4H4AGZNc/EFD1f3OpRzDeNDGdq0iRuXDdJ5UxJWY1Loer6lwYFAsMAB9R3XmMrgGQ4TJpY5ZXRLMdrasrRw+WLOVPqjSNosdu0n2aHEvJXigD7NLTpAHMbIExs6KUQLKDlsvwQVgf4v/2Q==";
const northgateLogo = "data:image/jpeg;base64,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";
function _page($$renderer) {
  const experience = [
    {
      role: "Software Engineering Advisor",
      company: "Northgate Funds",
      location: "California, United States · Remote",
      dates: "Oct 2025 - Present",
      logo: northgateLogo
    },
    {
      role: "Software Engineer",
      company: "Skycubed",
      location: "San Diego, California",
      dates: "February 2024 - Present",
      logo: skycubedLogo,
      description: "Developed proprietary software for DoD clients within a mission-critical R&D lab environment, serving as the technical translator between domain experts and engineering teams to convert complex data pipelines and analysis workflows into scalable production systems. Owned the design and implementation of the platform ontology within Palantir's Maven Smart Systems, leading and mentoring the team on ontological data modeling and the downstream AI integration opportunities it unlocks. Designed and deployed full-stack applications and data pipelines that abstracted sophisticated cyber readiness analysis into intuitive interfaces, accelerating the research and analysis cycle for non-engineering stakeholders. Leveraged a modern technology stack including React, Golang, Docker, Python, various Microsoft Azure Government services, Terraform, and GitLab/GitHub CI/CD pipelines. Maintained an active Secret clearance while pursuing Top-Secret clearance. Additionally, took internal initiative to lead and author a technical proposal for a new contract opportunity, conducting independent research literature review to inform model selection and architecture decisions, and designing and prototyping a deep learning pipeline using a Siamese U-Net model with ResNet backbone to automatically detect and score structural damage from satellite imagery. Proposed a high-level system design spanning cloud infrastructure, geospatial visualization, and multi-modal data integration including auxiliary ML models for supplemental data sources.",
      tech: [
        "React",
        "Go",
        "Docker",
        "Python",
        "Azure Government",
        "Terraform",
        "GitLab",
        "GitHub",
        "CI/CD",
        "Palantir Maven Smart Systems"
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "Triton Funds LLC",
      location: "San Diego, California",
      dates: "June 2023 - January 2024",
      logo: tritonLogo,
      description: "Owned all architecture and implementation decisions end to end for a proprietary financial data pipeline, engineering a solution that automated the identification of investment opportunities and company valuations using LLMs. Collaborated with company leaders and team members throughout the process, leading task distribution, code review, version control, and system architecture decisions. Integrated NLP and AI models, multi-source data APIs, AWS DynamoDB for storage, and LLMs to extract insights from SEC filings at scale. Engineered Python-based web sockets to consume high-volume daily filing streams and automated fund notifications via AWS Lambda.",
      tech: [
        "Python",
        "NLP",
        "LLMs",
        "AWS DynamoDB",
        "AWS Lambda",
        "WebSockets",
        "Data APIs"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Relay Health",
      location: "Remote",
      dates: "January 2023 - June 2023",
      logo: relayLogo,
      description: "Partnered with company leaders to develop data pipelines and automated data reporting systems, contributing to data analysis and system architecture design and implementation. Delivered an automated reporting pipeline encompassing daily activity reports, optimized user group assignments, and an activity-based segmentation model to identify high-risk users."
    },
    {
      role: "Data Science Intern",
      company: "UniGroup CA",
      location: "Remote",
      dates: "June 2021 - August 2021",
      logo: unigroupLogo,
      description: "Completed an intensive data science training program working alongside professional data scientists, gaining hands-on experience applying machine learning concepts including linear regression, classification, decision trees, and neural networks using PyTorch to real-world datasets."
    }
  ];
  const projects = [
    {
      name: "QuantVision.ai",
      description: "Founded and architected QuantVision.ai, a financial data platform centralizing company filings and financials, designed to scale into a comprehensive analysis solution for emerging and seasoned analysts. Serves terabytes of company filings via AWS S3 and structured financial data via a managed PostgreSQL instance, with infrastructure designed to scale into a production-ready platform. Technology stack included a full Typescript/Next.js frontend and backend with several backend microservices written with Python's FastAPI and Golang, with the main webapp hosted on Vercel and microservices on Google Cloud. Currently developing an agentic AI with LangChain's DeepAgents package that interfaces with a Neo4j knowledge graph containing industry and company relationships and Elasticsearch for full text and vector search to aid in proposal creation and investment theses."
    },
    {
      name: "Brain MRI Computer Vision Classifier",
      description: "Built binary classifier for brain tumor MRIs in PyTorch using a pretrained ResNet-152 model."
    },
    {
      name: "Machine Learning Models and Feature Selection Comparison and Analysis",
      description: "Implemented an empirical comparison of supervised learning algorithms using a machine learning pipeline that automated feature selection, hyperparameter tuning, and model comparison."
    }
  ];
  const education = [
    {
      degree: "M.S. Computer Science (Machine Learning Concentration)",
      year: "2028",
      school: "Georgia Institute of Technology"
    },
    {
      degree: "B.S. Cognitive Science (Machine Learning Concentration)",
      year: "2022",
      school: "University of California, San Diego",
      details: "Minors: Computer Science, Mathematics"
    }
  ];
  const expertise = [
    "System Architecture & Design",
    "Software Development",
    "Machine Learning",
    "Large Language Models",
    "Agentic AI",
    "Linux",
    "Data Pipelines",
    "Data Visualization",
    "Statistical Analysis",
    "Palantir Maven Smart Systems",
    "Docker Containerization"
  ];
  const technicalSkills = [
    "Python",
    "Golang",
    "Typescript & React",
    "SQL",
    "Bash",
    "FastAPI",
    "Pandas",
    "PyTorch",
    "XGBoost",
    "LangChain/DeepAgents",
    "Scikit-Learn",
    "CI/CD",
    "Terraform",
    "Docker",
    "Amazon Web Services",
    "Microsoft Azure",
    "Tableau",
    "Power BI"
  ];
  $$renderer.push(`<div class="min-h-screen px-6 py-12"><div class="max-w-5xl mx-auto"><header class="mb-12 text-center page-header-box"><a${attr("href", `${stringify(base)}/`)} class="inline-block mb-8 text-lg hover:underline" style="color: var(--color-primary); opacity: 0.8">← Back to Home</a> <h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">Resume</h1> <p class="text-2xl font-light mb-3" style="color: var(--color-primary); opacity: 0.9">Full Stack Software Engineer</p> <p class="text-lg max-w-3xl mx-auto leading-relaxed" style="color: var(--color-primary); opacity: 0.75">Full-stack software engineer with experience architecting and deploying AI/ML-powered data systems in mission-critical R&amp;D environments, specializing in translating complex analytical workflows into scalable production applications.</p></header> <section class="mb-12"><h2 class="text-3xl font-bold mb-5 section-title svelte-1mijfb4" style="color: var(--color-primary)">Experience</h2> <div class="space-y-5"><!--[-->`);
  const each_array = ensure_array_like(experience);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let role = each_array[$$index_1];
    $$renderer.push(`<article class="p-6 rounded-xl resume-card svelte-1mijfb4"><div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3"><div class="flex items-start gap-4">`);
    if (role.logo) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="experience-logo svelte-1mijfb4"><img${attr("src", role.logo)}${attr("alt", `${stringify(role.company)} logo`)} class="experience-logo-img svelte-1mijfb4"/></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> <div><h3 class="text-2xl font-bold" style="color: var(--color-text-on-box)">${escape_html(role.role)}</h3> <p class="text-lg" style="color: var(--color-text-on-box); opacity: 0.9">${escape_html(role.company)}`);
    if (role.employmentType) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`• ${escape_html(role.employmentType)}`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> • ${escape_html(role.location)}</p></div></div> <p class="text-sm md:text-base font-medium" style="color: var(--color-text-on-box); opacity: 0.8">${escape_html(role.dates)}</p></div> `);
    if (role.description) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<p class="leading-relaxed mb-4" style="color: var(--color-text-on-box); opacity: 0.9">${escape_html(role.description)}</p>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> `);
    if (role.tech && role.tech.length > 0) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(role.tech);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tech = each_array_1[$$index];
        $$renderer.push(`<span class="px-3 py-1 rounded-lg text-sm skill-chip svelte-1mijfb4">${escape_html(tech)}</span>`);
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></article>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="mb-12"><h2 class="text-3xl font-bold mb-5 section-title svelte-1mijfb4" style="color: var(--color-primary)">Projects</h2> <div class="grid md:grid-cols-3 gap-4"><!--[-->`);
  const each_array_2 = ensure_array_like(projects);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let project = each_array_2[$$index_2];
    $$renderer.push(`<article class="p-5 rounded-xl resume-card svelte-1mijfb4"><h3 class="text-xl font-bold mb-2" style="color: var(--color-text-on-box)">${escape_html(project.name)}</h3> <p class="leading-relaxed text-sm" style="color: var(--color-text-on-box); opacity: 0.9">${escape_html(project.description)}</p></article>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="mb-12"><h2 class="text-3xl font-bold mb-5 section-title svelte-1mijfb4" style="color: var(--color-primary)">Education</h2> <div class="grid md:grid-cols-2 gap-4"><!--[-->`);
  const each_array_3 = ensure_array_like(education);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let school = each_array_3[$$index_3];
    $$renderer.push(`<article class="p-5 rounded-xl resume-card svelte-1mijfb4"><p class="text-sm font-medium mb-1" style="color: var(--color-text-on-box); opacity: 0.8">${escape_html(school.year)}</p> <h3 class="text-xl font-bold mb-1" style="color: var(--color-text-on-box)">${escape_html(school.degree)}</h3> <p class="mb-1" style="color: var(--color-text-on-box); opacity: 0.9">${escape_html(school.school)}</p> `);
    if (school.details) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<p class="text-sm" style="color: var(--color-text-on-box); opacity: 0.8">${escape_html(school.details)}</p>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></article>`);
  }
  $$renderer.push(`<!--]--></div></section> <section><h2 class="text-3xl font-bold mb-5 section-title svelte-1mijfb4" style="color: var(--color-primary)">Areas of Expertise</h2> <div class="flex flex-wrap gap-3"><!--[-->`);
  const each_array_4 = ensure_array_like(expertise);
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let area = each_array_4[$$index_4];
    $$renderer.push(`<span class="px-4 py-2 rounded-lg text-sm font-medium skill-chip svelte-1mijfb4">${escape_html(area)}</span>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="mt-12"><h2 class="text-3xl font-bold mb-5 section-title svelte-1mijfb4" style="color: var(--color-primary)">Technical Skills</h2> <div class="flex flex-wrap gap-3"><!--[-->`);
  const each_array_5 = ensure_array_like(technicalSkills);
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let skill = each_array_5[$$index_5];
    $$renderer.push(`<span class="px-4 py-2 rounded-lg text-sm font-medium skill-chip svelte-1mijfb4">${escape_html(skill)}</span>`);
  }
  $$renderer.push(`<!--]--></div></section></div></div>`);
}
export {
  _page as default
};
