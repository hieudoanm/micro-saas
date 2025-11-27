self.__BUILD_MANIFEST = {
	'/': ['static/chunks/62eba020d66e9e23.js'],
	'/_error': ['static/chunks/9bc0f7c574272d8c.js'],
	'/auth/password/forget': ['static/chunks/34b456974f36ee2a.js'],
	'/auth/password/reset': ['static/chunks/3011e19feef09992.js'],
	'/auth/sign-in': ['static/chunks/e7ec300c2e04022a.js'],
	'/auth/sign-up': ['static/chunks/b4ea14b342631abc.js'],
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
