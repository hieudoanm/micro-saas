(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[190],
	{
		140: (e, r, t) => {
			'use strict';
			t.d(r, { TT: () => a, WG: () => d, fV: () => s });
			var l = t(5640);
			let s = (e) => {
					let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('h2', { className: 'text-2xl font-extrabold md:text-3xl', children: r });
				},
				a = (e) => {
					let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('h6', { className: 'text-sm font-normal md:text-base', children: r });
				},
				d = (e) => {
					let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('span', {
						className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
						children: r,
					});
				};
		},
		1282: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/auth/sign-in',
				function () {
					return t(8028);
				},
			]);
		},
		4370: (e, r, t) => {
			'use strict';
			t.d(r, { q: () => s });
			var l = t(5640);
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
		5365: (e, r, t) => {
			'use strict';
			t.d(r, { p: () => s });
			var l = t(5640);
			let s = (e) => {
				let {
					type: r = 'text',
					id: t = '',
					name: s = '',
					placeholder: a = '',
					value: d = '',
					onChange: n = () => {},
					required: i = !1,
					readOnly: o = !1,
					disabled: x = !1,
				} = e;
				return (0, l.jsx)('div', {
					className: 'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
					children: (0, l.jsx)('input', {
						type: r,
						id: t,
						name: s,
						placeholder: a,
						className:
							'w-full rounded-full bg-neutral-900 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
						value: d,
						onChange: n,
						required: i,
						readOnly: o,
						disabled: x,
					}),
				});
			};
		},
		5534: (e, r, t) => {
			e.exports = t(463);
		},
		7650: (e, r, t) => {
			'use strict';
			t.d(r, { o: () => s });
			var l = t(5640);
			let s = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('nav', {
					className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
					children: (0, l.jsx)('div', {
						className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
						children: (0, l.jsx)('div', { className: 'flex items-center justify-between gap-x-4', children: r }),
					}),
				});
			};
		},
		8028: (e, r, t) => {
			'use strict';
			(t.r(r), t.d(r, { default: () => m }));
			var l = t(5640),
				s = t(8503),
				a = t(5365),
				d = t(5207),
				n = t(9432),
				i = t(5068),
				o = t(2299),
				x = t.n(o),
				c = t(5534),
				u = t(148);
			let m = () => {
				let { push: e } = (0, c.useRouter)(),
					{ refresh: r } = (0, d.J)(),
					[{ email: t = '', password: o = '' }, m] = (0, u.useState)({ email: '', password: '' }),
					p = async (l) => {
						l.preventDefault();
						let { success: s } = await i.r.auth.user.signIn.mutate({ email: t, password: o });
						s ? (alert('Sign In Successfully'), r(), e('/')) : alert('Failed to Sign In');
					};
				return (0, l.jsx)(n.$, {
					children: (0, l.jsxs)('form', {
						onSubmit: p,
						className: 'flex flex-col gap-y-4',
						children: [
							(0, l.jsx)(a.p, {
								id: 'email',
								type: 'email',
								name: 'email',
								placeholder: 'Email',
								value: t,
								onChange: (e) => {
									m((r) => ({ ...r, email: e.target.value }));
								},
								required: !0,
							}),
							(0, l.jsx)(a.p, {
								id: 'password',
								type: 'password',
								name: 'password',
								placeholder: 'Password',
								value: o,
								onChange: (e) => {
									m((r) => ({ ...r, password: e.target.value }));
								},
								required: !0,
							}),
							(0, l.jsxs)('div', {
								className: 'flex justify-between px-4',
								children: [
									(0, l.jsx)('span', {
										className: 'border-b border-dotted text-sm md:text-base',
										children: 'Remember Me',
									}),
									(0, l.jsx)(x(), {
										href: '/auth/password/forget',
										className: 'border-b border-dotted text-sm md:text-base',
										children: 'Forget Password',
									}),
								],
							}),
							(0, l.jsx)(s.$, { type: 'submit', children: 'Sign In' }),
							(0, l.jsx)(x(), { href: '/auth/sign-up', children: (0, l.jsx)(s.r, { children: 'Sign Up' }) }),
						],
					}),
				});
			};
		},
		8462: (e, r, t) => {
			'use strict';
			t.d(r, { w: () => i });
			var l = t(5640),
				s = t(8609),
				a = t(2299),
				d = t.n(a);
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
		8503: (e, r, t) => {
			'use strict';
			t.d(r, { $: () => s, r: () => a });
			var l = t(5640);
			let s = (e) => {
					let {
						size: r = 'md',
						type: t = 'button',
						disabled: s = !1,
						onClick: a = () => {},
						children: d = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === r
						? (0, l.jsx)('button', {
								type: t,
								disabled: s,
								onClick: a,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: d,
							})
						: 'lg' === r
							? (0, l.jsx)('button', {
									type: t,
									disabled: s,
									onClick: a,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: d,
								})
							: (0, l.jsx)('button', {
									type: t,
									disabled: s,
									onClick: a,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: d,
								});
				},
				a = (e) => {
					let {
						size: r = 'md',
						type: t = 'button',
						disabled: s = !1,
						onClick: a = () => {},
						children: d = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === r
						? (0, l.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, l.jsx)('button', {
									type: t,
									disabled: s,
									onClick: a,
									className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
									children: d,
								}),
							})
						: 'lg' === r
							? (0, l.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, l.jsx)('button', {
										type: t,
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
										type: t,
										disabled: s,
										onClick: a,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: d,
									}),
								});
				};
		},
		9432: (e, r, t) => {
			'use strict';
			t.d(r, { $: () => u });
			var l = t(5640),
				s = t(2299),
				a = t.n(s),
				d = t(7650),
				n = t(140);
			let i = () =>
				(0, l.jsx)(d.o, {
					children: (0, l.jsx)(a(), {
						href: '/',
						className: 'text-xl font-black',
						children: (0, l.jsx)(n.WG, { children: 'micro/saas' }),
					}),
				});
			var o = t(8462),
				x = t(4370),
				c = t(8609);
			let u = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsxs)('div', {
					className: 'flex h-screen w-screen flex-col',
					children: [
						(0, l.jsx)(x.q, {}),
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
												children: (0, l.jsx)(n.WG, { children: c.C }),
											}),
											r,
										],
									}),
								}),
							}),
						}),
						(0, l.jsx)(o.w, {}),
					],
				});
			};
		},
	},
	(e) => {
		(e.O(0, [299, 636, 593, 792], () => e((e.s = 1282))), (_N_E = e.O()));
	},
]);
