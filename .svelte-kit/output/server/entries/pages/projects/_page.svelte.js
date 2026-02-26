import { _ as attr, $ as ensure_array_like, a2 as attr_style, a3 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import { b as burnstackLogo, q as quantvisionLogo } from "../../../chunks/quantvision.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  $$renderer.push(`<div class="min-h-screen px-6 py-12"><div class="max-w-6xl mx-auto"><header class="mb-16 text-center page-header-box svelte-rqn88j"><a${attr("href", `${stringify(base)}/`)} class="inline-block mb-8 text-lg hover:underline" style="color: var(--color-primary); opacity: 0.8">← Back to Home</a> <h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">Projects</h1> <p class="text-xl" style="color: var(--color-primary); opacity: 0.7">A showcase of my recent work and contributions</p></header> <div class="grid md:grid-cols-2 gap-8"><!--[-->`);
  const each_array = ensure_array_like([
    {
      title: "Burnstack.ai",
      logo: burnstackLogo,
      description: "Startup cost command center SaaS that centralizes cloud and AI spend (OpenAI, Anthropic, OpenRouter, Supabase, Tavily), with secure multi-tenant workspaces, encrypted provider integrations, automated sync/ingestion pipelines, and invoice-based cost import for reliable burn tracking.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      link: "https://burnstack.ai",
      tags: ["Startup"],
      status: "To Be Released"
    },
    {
      title: "QuantVision.ai",
      logo: quantvisionLogo,
      description: "A SaaS platform for company financials and stock market analytics integrated with advanced agentic AI capabilities.",
      tech: [
        "Next.js",
        "Python",
        "Tailwind",
        "Google Cloud",
        "LangChain DeepAgents",
        "LangFuse"
      ],
      link: "https://quantvision.ai",
      tags: ["Startup"],
      status: "To Be Released"
    }
  ]);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    $$renderer.push(`<div class="project-card flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl svelte-rqn88j"${attr_style(`background: var(--color-box); animation-delay: ${stringify(i * 0.1)}s`)}><div class="flex flex-wrap items-start justify-between gap-3 mb-3"><div class="flex items-center gap-3 min-w-0 flex-1 pr-2">`);
    if (project.logo) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="project-logo-shell svelte-rqn88j" style="width: 3.5rem; height: 3.5rem"><img${attr("src", project.logo)}${attr("alt", `${stringify(project.title)} logo`)} class="project-logo svelte-rqn88j" width="56" height="56" style="width: 100%; height: 100%; object-fit: contain"/></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> <h3 class="text-2xl font-bold min-w-0" style="color: var(--color-text-on-box)">${escape_html(project.title)}</h3></div> `);
    if (project.status) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<span class="px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0" style="background: var(--color-background); color: var(--color-primary); opacity: 0.8">${escape_html(project.status)}</span>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></div> <p class="leading-relaxed mb-4" style="color: var(--color-text-on-box); opacity: 0.85">${escape_html(project.description)}</p> <div class="mt-auto pt-2">`);
    if (project.tags && project.tags.length > 0) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="flex flex-wrap gap-2 mb-3"><!--[-->`);
      const each_array_1 = ensure_array_like(project.tags);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$renderer.push(`<span class="px-3 py-1 rounded-full text-xs font-semibold" style="background: var(--color-text-on-box); color: var(--color-box); opacity: 0.9">${escape_html(tag)}</span>`);
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> `);
    if (project.tech && project.tech.length > 0) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
      const each_array_2 = ensure_array_like(project.tech);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let tech = each_array_2[$$index_1];
        $$renderer.push(`<span class="px-3 py-1 rounded-lg text-sm" style="background: var(--color-background); color: var(--color-primary)">${escape_html(tech)}</span>`);
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> `);
    if (project.link) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<a${attr("href", project.link)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 self-start text-sm font-medium transition-all duration-300 hover:scale-105" style="color: var(--color-text-on-box); opacity: 0.9">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div>`);
}
export {
  _page as default
};
