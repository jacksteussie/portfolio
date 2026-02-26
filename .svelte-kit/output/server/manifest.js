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
		client: {start:"app/immutable/entry/start.CHHdpkNQ.js",app:"app/immutable/entry/app.DEWAdbdR.js",imports:["app/immutable/entry/start.CHHdpkNQ.js","app/immutable/chunks/CSpnd3DL.js","app/immutable/chunks/ghmXt1ob.js","app/immutable/chunks/21LMHoYK.js","app/immutable/chunks/CSr-UOd2.js","app/immutable/entry/app.DEWAdbdR.js","app/immutable/chunks/ghmXt1ob.js","app/immutable/chunks/DpRq2_5t.js","app/immutable/chunks/21LMHoYK.js","app/immutable/chunks/zLimZR3m.js","app/immutable/chunks/Dh-xClIk.js","app/immutable/chunks/L4L5n4Qr.js","app/immutable/chunks/sKEOLr9G.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
