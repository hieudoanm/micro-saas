(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[436],
	{
		991: (e, r, t) => {
			e.exports = t(9303);
		},
		1111: (e, r, t) => {
			'use strict';
			t.d(r, { w: () => i });
			var l = t(5640),
				a = t(9428),
				s = t(3242),
				d = t.n(s);
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
											(0, l.jsxs)('p', { children: ['\xa9 ', n, ' ', a.C, '.'] }),
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
		1991: (e, r, t) => {
			'use strict';
			t.d(r, { q: () => a });
			var l = t(5640);
			let a = () =>
				(0, l.jsx)('div', {
					className:
						'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
					children: (0, l.jsx)('div', {
						className:
							'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
					}),
				});
		},
		2353: (e, r, t) => {
			'use strict';
			t.d(r, { TT: () => s, WG: () => d, fV: () => a });
			var l = t(5640);
			let a = (e) => {
					let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsx)('h2', { className: 'text-2xl font-extrabold md:text-3xl', children: r });
				},
				s = (e) => {
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
		2355: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/auth/sign-up',
				function () {
					return t(3079);
				},
			]);
		},
		3079: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => c });
			var l = t(5640),
				a = t(9650),
				s = t(7906),
				d = t(3782),
				n = t(7857),
				i = t(3242),
				o = t.n(i),
				u = t(991),
				x = t(148);
			let c = () => {
				let { push: e } = (0, u.useRouter)(),
					[{ loading: r = !1, name: t = '', email: i = '', password: c = '' }, m] = (0, x.useState)({
						loading: !1,
						name: '',
						email: '',
						password: '',
					}),
					p = async (r) => {
						r.preventDefault();
						let { success: t } = await n.r.auth.user.signUp.mutate({ email: i, password: c });
						t ? (alert('Sign Up Successfully'), e('/auth/sign-in')) : alert('Failed to Sign Up');
					};
				return (0, l.jsx)(d.$, {
					children: (0, l.jsxs)('form', {
						onSubmit: p,
						className: 'flex flex-col gap-y-4',
						children: [
							(0, l.jsx)(s.p, {
								id: 'name',
								type: 'name',
								name: 'name',
								placeholder: 'Name',
								value: t,
								onChange: (e) => {
									m((r) => ({ ...r, name: e.target.value }));
								},
								required: !0,
							}),
							(0, l.jsx)(s.p, {
								id: 'email',
								type: 'email',
								name: 'email',
								placeholder: 'Email',
								value: i,
								onChange: (e) => {
									m((r) => ({ ...r, email: e.target.value }));
								},
								required: !0,
							}),
							(0, l.jsx)(s.p, {
								id: 'password',
								type: 'password',
								name: 'password',
								placeholder: 'Password',
								value: c,
								onChange: (e) => {
									m((r) => ({ ...r, password: e.target.value }));
								},
								required: !0,
							}),
							(0, l.jsx)(a.$, { type: 'submit', children: r ? 'Loading' : 'Sign Up' }),
							(0, l.jsx)(o(), { href: '/auth/sign-in', children: (0, l.jsx)(a.r, { children: 'Sign In' }) }),
						],
					}),
				});
			};
		},
		3782: (e, r, t) => {
			'use strict';
			t.d(r, { $: () => c });
			var l = t(5640),
				a = t(3242),
				s = t.n(a),
				d = t(4053),
				n = t(2353);
			let i = () =>
				(0, l.jsx)(d.o, {
					children: (0, l.jsx)(s(), {
						href: '/',
						className: 'text-xl font-black',
						children: (0, l.jsx)(n.WG, { children: 'micro/saas' }),
					}),
				});
			var o = t(1111),
				u = t(1991),
				x = t(9428);
			let c = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsxs)('div', {
					className: 'flex h-screen w-screen flex-col',
					children: [
						(0, l.jsx)(u.q, {}),
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
												children: (0, l.jsx)(n.WG, { children: x.C }),
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
		4053: (e, r, t) => {
			'use strict';
			t.d(r, { o: () => a });
			var l = t(5640);
			let a = (e) => {
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
		7906: (e, r, t) => {
			'use strict';
			t.d(r, { p: () => a });
			var l = t(5640);
			let a = (e) => {
				let {
					type: r = 'text',
					id: t = '',
					name: a = '',
					placeholder: s = '',
					value: d = '',
					onChange: n = () => {},
					required: i = !1,
					readOnly: o = !1,
					disabled: u = !1,
				} = e;
				return (0, l.jsx)('div', {
					className: 'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
					children: (0, l.jsx)('input', {
						type: r,
						id: t,
						name: a,
						placeholder: s,
						className:
							'w-full rounded-full bg-neutral-900 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
						value: d,
						onChange: n,
						required: i,
						readOnly: o,
						disabled: u,
					}),
				});
			};
		},
		9650: (e, r, t) => {
			'use strict';
			t.d(r, { $: () => a, r: () => s });
			var l = t(5640);
			let a = (e) => {
					let {
						size: r = 'md',
						type: t = 'button',
						disabled: a = !1,
						onClick: s = () => {},
						children: d = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === r
						? (0, l.jsx)('button', {
								type: t,
								disabled: a,
								onClick: s,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: d,
							})
						: 'lg' === r
							? (0, l.jsx)('button', {
									type: t,
									disabled: a,
									onClick: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: d,
								})
							: (0, l.jsx)('button', {
									type: t,
									disabled: a,
									onClick: s,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: d,
								});
				},
				s = (e) => {
					let {
						size: r = 'md',
						type: t = 'button',
						disabled: a = !1,
						onClick: s = () => {},
						children: d = (0, l.jsx)(l.Fragment, {}),
					} = e;
					return 'sm' === r
						? (0, l.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, l.jsx)('button', {
									type: t,
									disabled: a,
									onClick: s,
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
										disabled: a,
										onClick: s,
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
										disabled: a,
										onClick: s,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: d,
									}),
								});
				};
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [242, 636, 593, 792], () => r(2355)), (_N_E = e.O());
	},
]);
