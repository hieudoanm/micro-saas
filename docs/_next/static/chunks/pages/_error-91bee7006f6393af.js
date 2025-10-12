(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[731],
	{
		3963: (e, t, r) => {
			'use strict';
			r.d(t, { $: () => d, r: () => s });
			var l = r(7765);
			let d = (e) => {
					let {
						size: t = 'md',
						type: r = 'button',
						disabled: d = !1,
						onClick: s = () => {},
						children: n = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === t
						? (0, l.jsx)('button', {
								type: r,
								disabled: d,
								onClick: s,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: n,
							})
						: 'lg' === t
							? (0, l.jsx)('button', {
									type: r,
									disabled: d,
									onClick: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: n,
								})
							: (0, l.jsx)('button', {
									type: r,
									disabled: d,
									onClick: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: n,
								});
				},
				s = (e) => {
					let {
						size: t = 'md',
						type: r = 'button',
						disabled: d = !1,
						onClick: s = () => {},
						children: n = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === t
						? (0, l.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, l.jsx)('button', {
									type: r,
									disabled: d,
									onClick: s,
									className:
										'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
									children: n,
								}),
							})
						: 'lg' === t
							? (0, l.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, l.jsx)('button', {
										type: r,
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
										type: r,
										disabled: d,
										onClick: s,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: n,
									}),
								});
				};
		},
		6664: (e, t, r) => {
			'use strict';
			(r.r(t), r.d(t, { default: () => o }));
			var l = r(7765),
				d = r(3963),
				s = r(2844),
				n = r.n(s);
			let o = () =>
				(0, l.jsx)('div', {
					className:
						'flex min-h-screen items-center justify-center bg-white px-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
					children: (0, l.jsxs)('div', {
						className: 'text-center',
						children: [
							(0, l.jsx)('h1', {
								className: 'text-9xl font-extrabold',
								children: '404',
							}),
							(0, l.jsx)('p', {
								className: 'mt-4 text-2xl font-semibold',
								children: 'Page Not Found',
							}),
							(0, l.jsx)('p', {
								className: 'mt-2',
								children: "Sorry, the page you're looking for doesn't exist.",
							}),
							(0, l.jsx)(n(), {
								href: '/',
								children: (0, l.jsx)(d.$, { children: 'Go Home' }),
							}),
						],
					}),
				});
		},
		6832: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_error',
				function () {
					return r(6664);
				},
			]);
		},
	},
	(e) => {
		(e.O(0, [844, 636, 593, 792], () => e((e.s = 6832))), (_N_E = e.O()));
	},
]);
