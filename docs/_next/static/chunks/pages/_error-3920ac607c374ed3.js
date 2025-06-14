(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[731],
	{
		4889: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => o });
			var l = t(5640),
				d = t(9650),
				s = t(3242),
				n = t.n(s);
			let o = () =>
				(0, l.jsx)('div', {
					className:
						'flex min-h-screen items-center justify-center bg-white px-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
					children: (0, l.jsxs)('div', {
						className: 'text-center',
						children: [
							(0, l.jsx)('h1', { className: 'text-9xl font-extrabold', children: '404' }),
							(0, l.jsx)('p', { className: 'mt-4 text-2xl font-semibold', children: 'Page Not Found' }),
							(0, l.jsx)('p', { className: 'mt-2', children: "Sorry, the page you're looking for doesn't exist." }),
							(0, l.jsx)(n(), { href: '/', children: (0, l.jsx)(d.$, { children: 'Go Home' }) }),
						],
					}),
				});
		},
		7038: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_error',
				function () {
					return t(4889);
				},
			]);
		},
		9650: (e, r, t) => {
			'use strict';
			t.d(r, { $: () => d, r: () => s });
			var l = t(5640);
			let d = (e) => {
					let {
						size: r = 'md',
						type: t = 'button',
						disabled: d = !1,
						onClick: s = () => {},
						children: n = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === r
						? (0, l.jsx)('button', {
								type: t,
								disabled: d,
								onClick: s,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: n,
							})
						: 'lg' === r
							? (0, l.jsx)('button', {
									type: t,
									disabled: d,
									onClick: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: n,
								})
							: (0, l.jsx)('button', {
									type: t,
									disabled: d,
									onClick: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: n,
								});
				},
				s = (e) => {
					let {
						size: r = 'md',
						type: t = 'button',
						disabled: d = !1,
						onClick: s = () => {},
						children: n = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === r
						? (0, l.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, l.jsx)('button', {
									type: t,
									disabled: d,
									onClick: s,
									className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
									children: n,
								}),
							})
						: 'lg' === r
							? (0, l.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, l.jsx)('button', {
										type: t,
										disabled: d,
										onClick: s,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
										children: n,
									}),
								})
							: (0, l.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, l.jsx)('button', {
										type: t,
										disabled: d,
										onClick: s,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: n,
									}),
								});
				};
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [242, 636, 593, 792], () => r(7038)), (_N_E = e.O());
	},
]);
