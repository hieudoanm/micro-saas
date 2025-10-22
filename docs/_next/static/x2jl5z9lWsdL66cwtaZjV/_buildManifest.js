self.__BUILD_MANIFEST = {
	'/': ['static/chunks/e8afae3e63c890e4.js'],
	'/_error': ['static/chunks/68772f8ba8f920ea.js'],
	'/auth/password/forget': ['static/chunks/ef7ab706efbb8b7d.js'],
	'/auth/password/reset': ['static/chunks/85769370abbc76d4.js'],
	'/auth/sign-in': ['static/chunks/7dad0a71919c0a2d.js'],
	'/auth/sign-up': ['static/chunks/d8b210b603287fa7.js'],
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
