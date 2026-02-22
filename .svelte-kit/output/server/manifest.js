export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","CNAME","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"app/immutable/entry/start.1YaY3fjM.js",app:"app/immutable/entry/app.DoYLgpce.js",imports:["app/immutable/entry/start.1YaY3fjM.js","app/immutable/chunks/BlyA0P6a.js","app/immutable/chunks/D-4vs94e.js","app/immutable/chunks/uJLhDCOu.js","app/immutable/chunks/DxfsFN2h.js","app/immutable/entry/app.DoYLgpce.js","app/immutable/chunks/D-4vs94e.js","app/immutable/chunks/BA_QmenR.js","app/immutable/chunks/uJLhDCOu.js","app/immutable/chunks/UZcOjStO.js","app/immutable/chunks/CmDdsy7p.js","app/immutable/chunks/BLz49Wa-.js","app/immutable/chunks/F7cTIuOk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/projects","/resume"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
