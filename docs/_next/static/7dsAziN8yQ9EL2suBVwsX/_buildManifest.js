self.__BUILD_MANIFEST = {
	'/': ['static/chunks/61c929ab44d2ebec.js'],
	'/_error': ['static/chunks/e16dcf0df92be8ea.js'],
	'/auth/password/forget': ['static/chunks/408f6d9fb27e950a.js'],
	'/auth/password/reset': ['static/chunks/28965960585c1614.js'],
	'/auth/sign-in': ['static/chunks/a71947021f8163cf.js'],
	'/auth/sign-up': ['static/chunks/d3caf09ce1af26d8.js'],
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
