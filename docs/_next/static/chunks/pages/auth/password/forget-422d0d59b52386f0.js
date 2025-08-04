(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[834],
	{
		140: (e, t, r) => {
			'use strict';
			r.d(t, { TT: () => a, WG: () => d, fV: () => s });
			var l = r(5640);
			let s = (e) => {
					let { children: t = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('h2', { className: 'text-2xl font-extrabold md:text-3xl', children: t });
				},
				a = (e) => {
					let { children: t = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('h6', { className: 'text-sm font-normal md:text-base', children: t });
				},
				d = (e) => {
					let { children: t = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('span', {
						className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
						children: t,
					});
				};
		},
		940: (e, t, r) => {
			'use strict';
			(r.r(t), r.d(t, { default: () => c }));
			var l = r(5640),
				s = r(8503),
				a = r(5365),
				d = r(9432),
				n = r(2299),
				i = r.n(n),
				x = r(148);
			let c = () => {
				let [{ email: e = '' }, t] = (0, x.useState)({ email: '' });
				return (0, l.jsx)(d.$, {
					children: (0, l.jsxs)('form', {
						className: 'flex flex-col gap-y-4',
						children: [
							(0, l.jsx)(a.p, {
								id: 'email',
								type: 'email',
								name: 'email',
								placeholder: 'Email',
								value: e,
								onChange: (e) => {
									t((t) => ({ ...t, email: e.target.value }));
								},
							}),
							(0, l.jsx)(s.$, { type: 'submit', children: 'Recover Password' }),
							(0, l.jsx)(i(), { href: '/auth/sign-in', children: (0, l.jsx)(s.r, { children: 'Back to Sign In' }) }),
						],
					}),
				});
			};
		},
		4370: (e, t, r) => {
			'use strict';
			r.d(t, { q: () => s });
			var l = r(5640);
			let s = () =>
				(0, l.jsx)('div', {
					className:
						'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
					children: (0, l.jsx)('div', {
						className:
							'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
					}),
				});
		},
		5365: (e, t, r) => {
			'use strict';
			r.d(t, { p: () => s });
			var l = r(5640);
			let s = (e) => {
				let {
					type: t = 'text',
					id: r = '',
					name: s = '',
					placeholder: a = '',
					value: d = '',
					onChange: n = () => {},
					required: i = !1,
					readOnly: x = !1,
					disabled: c = !1,
				} = e;
				return (0, l.jsx)('div', {
					className: 'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
					children: (0, l.jsx)('input', {
						type: t,
						id: r,
						name: s,
						placeholder: a,
						className:
							'w-full rounded-full bg-neutral-900 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
						value: d,
						onChange: n,
						required: i,
						readOnly: x,
						disabled: c,
					}),
				});
			};
		},
		7650: (e, t, r) => {
			'use strict';
			r.d(t, { o: () => s });
			var l = r(5640);
			let s = (e) => {
				let { children: t = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('nav', {
					className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
					children: (0, l.jsx)('div', {
						className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
						children: (0, l.jsx)('div', { className: 'flex items-center justify-between gap-x-4', children: t }),
					}),
				});
			};
		},
		8462: (e, t, r) => {
			'use strict';
			r.d(t, { w: () => i });
			var l = r(5640),
				s = r(8609),
				a = r(2299),
				d = r.n(a);
			let n = new Date().getFullYear(),
				i = () =>
					(0, l.jsx)('footer', {
						className: 'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, l.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, l.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, l.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row',
										children: [
											(0, l.jsxs)('p', { children: ['\xa9 ', n, ' ', s.C, '.'] }),
											(0, l.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, l.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, l.jsx)(d(), {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, l.jsx)(d(), {
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
		8503: (e, t, r) => {
			'use strict';
			r.d(t, { $: () => s, r: () => a });
			var l = r(5640);
			let s = (e) => {
					let {
						size: t = 'md',
						type: r = 'button',
						disabled: s = !1,
						onClick: a = () => {},
						children: d = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === t
						? (0, l.jsx)('button', {
								type: r,
								disabled: s,
								onClick: a,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: d,
							})
						: 'lg' === t
							? (0, l.jsx)('button', {
									type: r,
									disabled: s,
									onClick: a,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: d,
								})
							: (0, l.jsx)('button', {
									type: r,
									disabled: s,
									onClick: a,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: d,
								});
				},
				a = (e) => {
					let {
						size: t = 'md',
						type: r = 'button',
						disabled: s = !1,
						onClick: a = () => {},
						children: d = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === t
						? (0, l.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, l.jsx)('button', {
									type: r,
									disabled: s,
									onClick: a,
									className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
									children: d,
								}),
							})
						: 'lg' === t
							? (0, l.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, l.jsx)('button', {
										type: r,
										disabled: s,
										onClick: a,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
										children: d,
									}),
								})
							: (0, l.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, l.jsx)('button', {
										type: r,
										disabled: s,
										onClick: a,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: d,
									}),
								});
				};
		},
		9432: (e, t, r) => {
			'use strict';
			r.d(t, { $: () => u });
			var l = r(5640),
				s = r(2299),
				a = r.n(s),
				d = r(7650),
				n = r(140);
			let i = () =>
				(0, l.jsx)(d.o, {
					children: (0, l.jsx)(a(), {
						href: '/',
						className: 'text-xl font-black',
						children: (0, l.jsx)(n.WG, { children: 'micro/saas' }),
					}),
				});
			var x = r(8462),
				c = r(4370),
				o = r(8609);
			let u = (e) => {
				let { children: t = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsxs)('div', {
					className: 'flex h-screen w-screen flex-col',
					children: [
						(0, l.jsx)(c.q, {}),
						(0, l.jsx)(i, {}),
						(0, l.jsx)('div', {
							className: 'grow',
							children: (0, l.jsx)('div', {
								className: 'flex h-full w-full w-screen items-center justify-center p-4 md:p-8',
								children: (0, l.jsx)('div', {
									className:
										'w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow shadow-neutral-100/10',
									children: (0, l.jsxs)('div', {
										className: 'flex flex-col gap-y-8',
										children: [
											(0, l.jsx)('h1', {
												className: 'text-center text-3xl font-black md:text-4xl',
												children: (0, l.jsx)(n.WG, { children: o.C }),
											}),
											t,
										],
									}),
								}),
							}),
						}),
						(0, l.jsx)(x.w, {}),
					],
				});
			};
		},
		9750: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/auth/password/forget',
				function () {
					return r(940);
				},
			]);
		},
	},
	(e) => {
		(e.O(0, [299, 636, 593, 792], () => e((e.s = 9750))), (_N_E = e.O()));
	},
]);
