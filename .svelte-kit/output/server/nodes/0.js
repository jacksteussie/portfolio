import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["app/immutable/nodes/0.Cni2-Rc9.js","app/immutable/chunks/BA_QmenR.js","app/immutable/chunks/D-4vs94e.js","app/immutable/chunks/CmDdsy7p.js","app/immutable/chunks/iIEvPCGV.js","app/immutable/chunks/CKmXT38V.js","app/immutable/chunks/uJLhDCOu.js","app/immutable/chunks/BLz49Wa-.js","app/immutable/chunks/CA7N0nMg.js","app/immutable/chunks/DXOE0ndY.js","app/immutable/chunks/Lb4jSBv3.js","app/immutable/chunks/F7cTIuOk.js","app/immutable/chunks/BqwHUTL5.js","app/immutable/chunks/BlyA0P6a.js","app/immutable/chunks/DxfsFN2h.js"];
export const stylesheets = ["app/immutable/assets/0.CC53Thtd.css"];
export const fonts = [];
