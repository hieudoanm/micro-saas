self.__BUILD_MANIFEST = {
	'/': ['static/chunks/c60a513ee9f588b1.js'],
	'/_error': ['static/chunks/3623dde5d4e2f430.js'],
	'/auth/password/forget': ['static/chunks/9312ac57482871e6.js'],
	'/auth/password/reset': ['static/chunks/d3522db06ad2650a.js'],
	'/auth/sign-in': ['static/chunks/c4c59b5759a18e4f.js'],
	'/auth/sign-up': ['static/chunks/b1857edba0d409ce.js'],
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
