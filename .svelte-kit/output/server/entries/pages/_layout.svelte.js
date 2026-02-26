import { _ as attr, $ as ensure_array_like, a0 as attr_class, a1 as store_get, a2 as attr_style, a3 as stringify, a4 as unsubscribe_stores, a5 as head } from "../../chunks/index.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { b as base } from "../../chunks/utils.js";
const favicon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBhMGEwYSIvPgogIDx0ZXh0IHg9IjUwIiB5PSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjYwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2Y1ZjVmNSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SlM8L3RleHQ+Cjwvc3ZnPgo=";
class Theme {
  current = "light";
  constructor() {
    this.init();
  }
  toggle() {
    this.current = this.current === "light" ? "dark" : "light";
  }
  apply() {
  }
  init() {
  }
}
const theme = new Theme();
function GeometricBackground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    theme.current === "dark" ? "255, 255, 255" : "0, 0, 0";
    $$renderer2.push(`<canvas class="fixed inset-0 pointer-events-none -z-10"></canvas>`);
  });
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const links = [
      { name: "Home", path: `${base}/` },
      { name: "Projects", path: `${base}/projects` },
      { name: "Resume", path: `${base}/resume` }
    ];
    $$renderer2.push(`<nav class="fixed top-0 left-0 right-0 z-50 py-4 px-6" style="background: var(--color-background)"><div class="max-w-6xl mx-auto flex justify-between items-center"><a${attr("href", `${stringify(base)}/`)} class="text-xl font-bold" style="color: var(--color-primary)">JS</a> <div class="flex items-center gap-6"><ul class="flex gap-6"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.path)}${attr_class("nav-link text-base transition-all duration-300 hover:scale-110 svelte-1h32yp1", void 0, {
        "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === link.path
      })}${attr_style(`color: var(--color-primary); opacity: ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === link.path ? 1 : 0.7)}`)}>${escape_html(link.name)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <button class="p-2 rounded-full transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5" aria-label="Toggle theme" style="color: var(--color-primary)">`);
    if (theme.current === "light") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div></div></nav> <div class="h-16"></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    GeometricBackground($$renderer2);
    $$renderer2.push(`<!----> <div class="relative z-10">`);
    Nav($$renderer2);
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
