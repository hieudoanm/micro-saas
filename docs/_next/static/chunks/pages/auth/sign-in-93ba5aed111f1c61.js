(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[190],
	{
		1988: (e, r, s) => {
			'use strict';
			s.d(r, { w: () => n });
			var t = s(5640),
				l = s(5089),
				a = s.n(l);
			let d = new Date().getFullYear(),
				n = () =>
					(0, t.jsx)('footer', {
						className: 'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, t.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, t.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, t.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row',
										children: [
											(0, t.jsxs)('p', { children: ['\xa9 ', d, ' micro/saas.'] }),
											(0, t.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, t.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, t.jsx)(a(), {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, t.jsx)(a(), {
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
		1999: (e, r, s) => {
			'use strict';
			s.d(r, { m: () => c });
			var t = s(5640),
				l = s(1988),
				a = s(8004),
				d = s(5089),
				n = s.n(d);
			let i = () =>
					(0, t.jsx)('nav', {
						className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, t.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, t.jsx)('div', {
								className: 'flex items-center justify-between',
								children: (0, t.jsx)(n(), {
									href: '/',
									className: 'text-xl font-black',
									children: (0, t.jsx)('span', {
										className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
										children: 'micro/saas',
									}),
								}),
							}),
						}),
					}),
				c = (e) => {
					let { children: r = (0, t.jsx)(t.Fragment, {}) } = e;
					return (0, t.jsxs)('div', {
						className: 'flex h-screen w-screen flex-col',
						children: [
							(0, t.jsx)(a.q, {}),
							(0, t.jsx)(i, {}),
							(0, t.jsx)('div', {
								className: 'grow',
								children: (0, t.jsx)('div', {
									className: 'flex h-full w-full w-screen items-center justify-center p-4 md:p-8',
									children: (0, t.jsx)('div', {
										className:
											'w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow shadow-neutral-100/10',
										children: (0, t.jsxs)('div', {
											className: 'flex flex-col gap-y-8',
											children: [
												(0, t.jsx)('h1', {
													className: 'text-center text-3xl font-black md:text-4xl',
													children: (0, t.jsx)('span', {
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
							(0, t.jsx)(l.w, {}),
						],
					});
				};
		},
		3489: (e, r, s) => {
			'use strict';
			s.d(r, { $: () => l, r: () => a });
			var t = s(5640);
			let l = (e) => {
					let { size: r = 'md', type: s = 'button', children: l = (0, t.jsx)(t.Fragment, {}) } = e;
					return 'sm' === r
						? (0, t.jsx)('button', {
								type: s,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: l,
							})
						: 'lg' === r
							? (0, t.jsx)('button', {
									type: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
									children: l,
								})
							: (0, t.jsx)('button', {
									type: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: l,
								});
				},
				a = (e) => {
					let { type: r = 'button', children: s = (0, t.jsx)(t.Fragment, {}) } = e;
					return (0, t.jsx)('div', {
						className: 'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
						children: (0, t.jsx)('button', {
							type: r,
							className:
								'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
							children: s,
						}),
					});
				};
		},
		7644: (e, r, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/auth/sign-in',
				function () {
					return s(8546);
				},
			]);
		},
		8004: (e, r, s) => {
			'use strict';
			s.d(r, { q: () => l });
			var t = s(5640);
			let l = () =>
				(0, t.jsx)('div', {
					className:
						'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
					children: (0, t.jsx)('div', {
						className:
							'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
					}),
				});
		},
		8546: (e, r, s) => {
			'use strict';
			s.r(r), s.d(r, { default: () => i });
			var t = s(5640),
				l = s(1999),
				a = s(3489),
				d = s(5089),
				n = s.n(d);
			let i = () =>
				(0, t.jsx)(l.m, {
					children: (0, t.jsxs)('form', {
						className: 'flex flex-col gap-y-4',
						children: [
							(0, t.jsx)('input', {
								id: 'email',
								type: 'email',
								name: 'email',
								placeholder: 'Email',
								className: 'w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none',
							}),
							(0, t.jsx)('input', {
								id: 'password',
								type: 'password',
								name: 'password',
								placeholder: 'Password',
								className: 'w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none',
							}),
							(0, t.jsx)('div', {
								className: 'px-4',
								children: (0, t.jsx)(n(), {
									href: '/auth/password/forget',
									className: 'border-b border-dotted',
									children: 'Forget Password',
								}),
							}),
							(0, t.jsx)(a.$, { children: 'Sign In' }),
							(0, t.jsx)(n(), { href: '/auth/sign-up', children: (0, t.jsx)(a.r, { children: 'Sign Up' }) }),
						],
					}),
				});
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [89, 636, 593, 792], () => r(7644)), (_N_E = e.O());
	},
]);
