self.__BUILD_MANIFEST = {
	'/': ['static/chunks/e4bdd388541c8dc3.js'],
	'/_error': ['static/chunks/527f74934648e78f.js'],
	'/auth/password/forget': ['static/chunks/a2014270e795f572.js'],
	'/auth/password/reset': ['static/chunks/af6b6f7059ad6ab5.js'],
	'/auth/sign-in': ['static/chunks/3f6139b5c765b18d.js'],
	'/auth/sign-up': ['static/chunks/e269a7ad939ed446.js'],
	__rewrites: {
		afterFiles: [],
		beforeFiles: [],
		fallback: [],
	},
	sortedPages: [
		'/',
		'/_app',
		'/_error',
		'/api/trpc/[trpc]',
		'/auth/password/forget',
		'/auth/password/reset',
		'/auth/sign-in',
		'/auth/sign-up',
	],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
