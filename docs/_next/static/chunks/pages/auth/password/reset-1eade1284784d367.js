(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[882],
	{
		1988: (e, r, t) => {
			'use strict';
			t.d(r, { w: () => o });
			var s = t(5640),
				l = t(2123),
				a = t(5089),
				d = t.n(a);
			let n = new Date().getFullYear(),
				o = () =>
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
											(0, s.jsxs)('p', { children: ['\xa9 ', n, ' ', l.C, '.'] }),
											(0, s.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, s.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, s.jsx)(d(), {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, s.jsx)(d(), {
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
			t.d(r, { m: () => u });
			var s = t(5640),
				l = t(1988),
				a = t(8004),
				d = t(5089),
				n = t.n(d),
				o = t(8248),
				i = t(2942);
			let x = () =>
				(0, s.jsx)(o.o, {
					children: (0, s.jsx)(n(), {
						href: '/',
						className: 'text-xl font-black',
						children: (0, s.jsx)(i.WG, { children: 'micro/saas' }),
					}),
				});
			var c = t(2123);
			let u = (e) => {
				let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
				return (0, s.jsxs)('div', {
					className: 'flex h-screen w-screen flex-col',
					children: [
						(0, s.jsx)(a.q, {}),
						(0, s.jsx)(x, {}),
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
												children: (0, s.jsx)(i.WG, { children: c.C }),
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
		2942: (e, r, t) => {
			'use strict';
			t.d(r, { TT: () => a, WG: () => d, fV: () => l });
			var s = t(5640);
			let l = (e) => {
					let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsx)('h2', { className: 'text-2xl font-extrabold md:text-3xl', children: r });
				},
				a = (e) => {
					let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsx)('h6', { className: 'text-sm font-normal md:text-base', children: r });
				},
				d = (e) => {
					let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsx)('span', {
						className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
						children: r,
					});
				};
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
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
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
					let { size: r = 'md', type: t = 'button', children: l = (0, s.jsx)(s.Fragment, {}) } = e;
					return 'sm' === r
						? (0, s.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, s.jsx)('button', {
									type: t,
									className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
									children: l,
								}),
							})
						: 'lg' === r
							? (0, s.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, s.jsx)('button', {
										type: t,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
										children: l,
									}),
								})
							: (0, s.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, s.jsx)('button', {
										type: t,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: l,
									}),
								});
				};
		},
		3643: (e, r, t) => {
			'use strict';
			t.d(r, { p: () => l });
			var s = t(5640);
			let l = (e) => {
				let {
					type: r = 'text',
					id: t = '',
					name: l = '',
					placeholder: a = '',
					value: d = '',
					onChange: n = () => {},
					required: o = !1,
					readOnly: i = !1,
					disabled: x = !1,
				} = e;
				return (0, s.jsx)('input', {
					type: r,
					id: t,
					name: l,
					placeholder: a,
					className: 'w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none',
					value: d,
					onChange: n,
					required: o,
					readOnly: i,
					disabled: x,
				});
			};
		},
		4066: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/auth/password/reset',
				function () {
					return t(6124);
				},
			]);
		},
		6124: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => o });
			var s = t(5640),
				l = t(1999),
				a = t(3489),
				d = t(3643),
				n = t(148);
			let o = () => {
				let [{ password: e = '', confirmPassword: r = '' }, t] = (0, n.useState)({ password: '', confirmPassword: '' });
				return (0, s.jsx)(l.m, {
					children: (0, s.jsxs)('form', {
						className: 'flex flex-col gap-y-4',
						children: [
							(0, s.jsx)(d.p, {
								id: 'password',
								type: 'password',
								name: 'password',
								placeholder: 'Password',
								value: e,
								onChange: (e) => {
									t((r) => ({ ...r, password: e.target.value }));
								},
							}),
							(0, s.jsx)(d.p, {
								id: 'password',
								type: 'confirmPassword',
								name: 'confirmPassword',
								placeholder: 'Confirm Password',
								value: r,
								onChange: (e) => {
									t((r) => ({ ...r, confirmPassword: e.target.value }));
								},
							}),
							(0, s.jsx)(a.$, { children: 'Reset Password' }),
						],
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
		8248: (e, r, t) => {
			'use strict';
			t.d(r, { o: () => l });
			var s = t(5640);
			let l = (e) => {
				let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
				return (0, s.jsx)('nav', {
					className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
					children: (0, s.jsx)('div', {
						className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
						children: (0, s.jsx)('div', { className: 'flex items-center justify-between gap-x-4', children: r }),
					}),
				});
			};
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [89, 636, 593, 792], () => r(4066)), (_N_E = e.O());
	},
]);
