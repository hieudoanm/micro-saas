(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[834],
	{
		914: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => i });
			var s = t(5640),
				l = t(1999),
				a = t(3489),
				d = t(5089),
				n = t.n(d);
			let i = () =>
				(0, s.jsx)(l.m, {
					children: (0, s.jsxs)('form', {
						className: 'flex flex-col gap-y-4',
						children: [
							(0, s.jsx)('input', {
								id: 'email',
								type: 'email',
								name: 'email',
								placeholder: 'Email',
								className: 'w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none',
							}),
							(0, s.jsx)(a.$, { children: 'Recover Password' }),
							(0, s.jsx)(n(), { href: '/auth/sign-in', children: (0, s.jsx)(a.r, { children: 'Back to Sign In' }) }),
						],
					}),
				});
		},
		1988: (e, r, t) => {
			'use strict';
			t.d(r, { w: () => n });
			var s = t(5640),
				l = t(5089),
				a = t.n(l);
			let d = new Date().getFullYear(),
				n = () =>
					(0, s.jsx)('footer', {
						className: 'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, s.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, s.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, s.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row',
										children: [
											(0, s.jsxs)('p', { children: ['\xa9 ', d, ' micro/saas.'] }),
											(0, s.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, s.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, s.jsx)(a(), {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, s.jsx)(a(), {
												href: 'https://x.com',
												target: '_blank',
												className: 'text-right',
												children: 'Twitter',
											}),
										],
									}),
								],
							}),
						}),
					});
		},
		1999: (e, r, t) => {
			'use strict';
			t.d(r, { m: () => c });
			var s = t(5640),
				l = t(1988),
				a = t(8004),
				d = t(5089),
				n = t.n(d);
			let i = () =>
					(0, s.jsx)('nav', {
						className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, s.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, s.jsx)('div', {
								className: 'flex items-center justify-between',
								children: (0, s.jsx)(n(), {
									href: '/',
									className: 'text-xl font-black',
									children: (0, s.jsx)('span', {
										className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
										children: 'micro/saas',
									}),
								}),
							}),
						}),
					}),
				c = (e) => {
					let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsxs)('div', {
						className: 'flex h-screen w-screen flex-col',
						children: [
							(0, s.jsx)(a.q, {}),
							(0, s.jsx)(i, {}),
							(0, s.jsx)('div', {
								className: 'grow',
								children: (0, s.jsx)('div', {
									className: 'flex h-full w-full w-screen items-center justify-center p-4 md:p-8',
									children: (0, s.jsx)('div', {
										className:
											'w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow shadow-neutral-100/10',
										children: (0, s.jsxs)('div', {
											className: 'flex flex-col gap-y-8',
											children: [
												(0, s.jsx)('h1', {
													className: 'text-center text-3xl font-black md:text-4xl',
													children: (0, s.jsx)('span', {
														className:
															'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
														children: 'micro/saas',
													}),
												}),
												r,
											],
										}),
									}),
								}),
							}),
							(0, s.jsx)(l.w, {}),
						],
					});
				};
		},
		2e3: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/auth/password/forget',
				function () {
					return t(914);
				},
			]);
		},
		3489: (e, r, t) => {
			'use strict';
			t.d(r, { $: () => l, r: () => a });
			var s = t(5640);
			let l = (e) => {
					let { size: r = 'md', type: t = 'button', children: l = (0, s.jsx)(s.Fragment, {}) } = e;
					return 'sm' === r
						? (0, s.jsx)('button', {
								type: t,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: l,
							})
						: 'lg' === r
							? (0, s.jsx)('button', {
									type: t,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
									children: l,
								})
							: (0, s.jsx)('button', {
									type: t,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: l,
								});
				},
				a = (e) => {
					let { type: r = 'button', children: t = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsx)('div', {
						className: 'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
						children: (0, s.jsx)('button', {
							type: r,
							className:
								'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
							children: t,
						}),
					});
				};
		},
		8004: (e, r, t) => {
			'use strict';
			t.d(r, { q: () => l });
			var s = t(5640);
			let l = () =>
				(0, s.jsx)('div', {
					className:
						'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
					children: (0, s.jsx)('div', {
						className:
							'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
					}),
				});
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [89, 636, 593, 792], () => r(2e3)), (_N_E = e.O());
	},
]);
