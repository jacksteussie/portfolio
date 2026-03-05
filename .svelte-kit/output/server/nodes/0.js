import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["app/immutable/nodes/0.CsLY35qY.js","app/immutable/chunks/DpRq2_5t.js","app/immutable/chunks/ghmXt1ob.js","app/immutable/chunks/21LMHoYK.js","app/immutable/chunks/Dh-xClIk.js","app/immutable/chunks/BEO_wB6v.js","app/immutable/chunks/L4L5n4Qr.js","app/immutable/chunks/YiAJB0eN.js","app/immutable/chunks/zLimZR3m.js","app/immutable/chunks/CNPn0WId.js","app/immutable/chunks/B-oiFmH3.js","app/immutable/chunks/BGhV3ald.js","app/immutable/chunks/sKEOLr9G.js","app/immutable/chunks/Cw2ra6mF.js","app/immutable/chunks/BrK09D4w.js","app/immutable/chunks/CjkYC-eq.js"];
export const stylesheets = ["app/immutable/assets/0.DMOy3RuQ.css"];
export const fonts = [];
