(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		1111: (e, t, s) => {
			'use strict';
			s.d(t, { w: () => i });
			var a = s(5640),
				r = s(9428),
				l = s(3242),
				n = s.n(l);
			let d = new Date().getFullYear(),
				i = () =>
					(0, a.jsx)('footer', {
						className: 'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, a.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, a.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, a.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row',
										children: [
											(0, a.jsxs)('p', { children: ['\xa9 ', d, ' ', r.C, '.'] }),
											(0, a.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, a.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, a.jsx)(n(), {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, a.jsx)(n(), {
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
		1924: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(2822);
				},
			]);
		},
		1991: (e, t, s) => {
			'use strict';
			s.d(t, { q: () => r });
			var a = s(5640);
			let r = () =>
				(0, a.jsx)('div', {
					className:
						'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
					children: (0, a.jsx)('div', {
						className:
							'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
					}),
				});
		},
		2353: (e, t, s) => {
			'use strict';
			s.d(t, { TT: () => l, WG: () => n, fV: () => r });
			var a = s(5640);
			let r = (e) => {
					let { children: t = (0, a.jsx)(a.Fragment, {}) } = e;
					return (0, a.jsx)('h2', { className: 'text-2xl font-extrabold md:text-3xl', children: t });
				},
				l = (e) => {
					let { children: t = (0, a.jsx)(a.Fragment, {}) } = e;
					return (0, a.jsx)('h6', { className: 'text-sm font-normal md:text-base', children: t });
				},
				n = (e) => {
					let { children: t = (0, a.jsx)(a.Fragment, {}) } = e;
					return (0, a.jsx)('span', {
						className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
						children: t,
					});
				};
		},
		2822: (e, t, s) => {
			'use strict';
			s.r(t), s.d(t, { default: () => k });
			var a = s(5640),
				r = s(1111),
				l = s(1991),
				n = s(9650),
				d = s(2353),
				i = s(3242),
				o = s.n(i);
			let c = (e) => {
				let { title: t = '', description: s = '', action: r = '' } = e;
				return (0, a.jsx)('section', {
					className: 'container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8',
					children: (0, a.jsxs)('div', {
						className: 'mx-auto w-full max-w-2xl space-y-4 md:space-y-8',
						children: [
							(0, a.jsxs)('div', {
								className: 'flex flex-col gap-y-4 text-center',
								children: [(0, a.jsx)(d.fV, { children: t }), (0, a.jsx)(d.TT, { children: s })],
							}),
							(0, a.jsx)('div', {
								className: 'flex w-full items-center justify-center',
								children: (0, a.jsx)(o(), {
									href: '/auth/sign-up',
									children: (0, a.jsx)(n.$, { size: 'lg', children: r }),
								}),
							}),
						],
					}),
				});
			};
			var x = s(148);
			let u = (e) => {
					let { title: t = '', description: s = '' } = e,
						[r, l] = (0, x.useState)('');
					return (
						(0, x.useEffect)(() => {
							l(window.origin);
						}, []),
						(0, a.jsxs)('section', {
							className: 'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
							children: [
								(0, a.jsxs)('div', {
									className: 'flex flex-col gap-y-4 text-center',
									children: [(0, a.jsx)(d.fV, { children: t }), (0, a.jsx)(d.TT, { children: s })],
								}),
								(0, a.jsxs)('div', {
									className:
										'overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
									children: [
										(0, a.jsxs)('div', {
											className: 'flex items-center gap-x-4 border-b border-neutral-800 p-2 md:p-4',
											children: [
												(0, a.jsxs)('div', {
													className: 'flex gap-x-2',
													children: [
														(0, a.jsx)('span', { className: 'h-3 w-3 rounded-full bg-red-500' }),
														(0, a.jsx)('span', { className: 'h-3 w-3 rounded-full bg-yellow-500' }),
														(0, a.jsx)('span', { className: 'h-3 w-3 rounded-full bg-green-500' }),
													],
												}),
												(0, a.jsx)('div', {
													className:
														'grow items-center truncate rounded border border-neutral-800 px-2 py-1 text-sm text-neutral-100',
													children: r,
												}),
											],
										}),
										(0, a.jsx)('div', { className: 'aspect-[9/16] w-full md:aspect-[16/9]' }),
									],
								}),
							],
						})
					);
				},
				p = (e) => {
					let { title: t = '', description: s = '', features: r = {} } = e;
					return (0, a.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
						children: [
							(0, a.jsxs)('div', {
								className: 'flex flex-col gap-y-4 text-center',
								children: [(0, a.jsx)(d.fV, { children: t }), (0, a.jsx)(d.TT, { children: s })],
							}),
							(0, a.jsx)('div', {
								className: 'grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8',
								children: Object.entries(r)
									.map((e) => {
										let [t, s] = e;
										return { id: t, ...s };
									})
									.map((e) => {
										let { id: t = '', emoji: s = '', title: r = '', description: l = '' } = e;
										return (0, a.jsx)(
											'div',
											{
												className: 'col-span-1',
												children: (0, a.jsxs)('div', {
													className:
														'flex flex-col items-center justify-center gap-y-2 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 shadow shadow-neutral-100/10 transition-all hover:scale-110 md:gap-y-4',
													children: [
														(0, a.jsx)('span', { className: 'text-4xl', children: s }),
														(0, a.jsx)('h3', { className: 'text-bold text-xl', children: r }),
														(0, a.jsx)('p', { className: 'text-center text-sm text-neutral-400', children: l }),
													],
												}),
											},
											t,
										);
									}),
							}),
						],
					});
				},
				m = (e) => {
					let { title: t = '', description: s = '', questions: r = {} } = e;
					return (0, a.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8',
						children: [
							(0, a.jsxs)('div', {
								className: 'flex flex-col gap-y-4 text-center',
								children: [(0, a.jsx)(d.fV, { children: t }), (0, a.jsx)(d.TT, { children: s })],
							}),
							(0, a.jsx)('div', {
								className:
									'divide-y divide-neutral-800 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
								children: Object.entries(r)
									.map((e) => {
										let [t, s] = e;
										return { id: t, ...s };
									})
									.map((e, t) => {
										let { id: s = '', question: r = '', answer: l = '' } = e;
										return (0, a.jsxs)(
											'details',
											{
												className: 'group',
												children: [
													(0, a.jsxs)('summary', {
														className: 'flex cursor-pointer list-none items-center justify-between px-4 py-3',
														children: [
															(0, a.jsxs)('span', {
																className: 'font-semibold text-neutral-900 dark:text-neutral-100',
																children: [t + 1, '. ', r],
															}),
															(0, a.jsxs)('span', {
																className:
																	'text-lg text-neutral-600 transition-all duration-300 group-open:rotate-180 dark:text-neutral-400',
																children: [
																	(0, a.jsx)('span', { className: 'group-open:hidden', children: '+' }),
																	(0, a.jsx)('span', { className: 'hidden group-open:inline', children: '-' }),
																],
															}),
														],
													}),
													(0, a.jsx)('div', {
														className: 'px-4 pb-4 text-neutral-600 dark:text-neutral-400',
														children: l,
													}),
												],
											},
											s,
										);
									}),
							}),
						],
					});
				};
			var h = s(9428),
				f = s(331);
			let g = async (e) => {
					try {
						return { data: await e, error: null };
					} catch (e) {
						return { data: null, error: e };
					}
				},
				j = (e) => {
					let { description: t = '' } = e,
						[{ loading: s = !1, prompt: r = 'Explain how AI works in a few words', answer: l = '' }, i] = (0,
						x.useState)({ loading: !1, prompt: 'Explain how AI works in a few words', answer: '' });
					return (0, a.jsx)('section', {
						className: 'border-b border-neutral-800',
						children: (0, a.jsx)('div', {
							className: 'container mx-auto px-4 py-8 md:px-8 md:py-16',
							children: (0, a.jsxs)('div', {
								className: 'mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8',
								children: [
									(0, a.jsx)('h1', {
										className: 'text-center text-5xl font-black md:text-6xl',
										children: (0, a.jsx)(d.WG, { children: h.C }),
									}),
									(0, a.jsx)('p', { className: 'text-center text-base md:text-lg', children: t }),
									(0, a.jsx)('div', {
										className: 'mx-auto w-full max-w-lg rounded-full shadow md:shadow-purple-900',
										children: (0, a.jsx)('div', {
											className:
												'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
											children: (0, a.jsxs)('div', {
												className: 'flex rounded-full bg-neutral-900 p-1 md:p-2',
												children: [
													(0, a.jsx)('input', {
														id: 'prompt',
														className:
															'grow rounded-full border-0 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
														value: r,
														onChange: (e) => {
															i((t) => ({ ...t, prompt: e.target.value }));
														},
													}),
													(0, a.jsx)(n.$, {
														disabled: s,
														onClick: async () => {
															var e, t, s;
															i((e) => ({ ...e, loading: !0 }));
															let { data: a, error: l } = await g(f.r.app.gemini.generate.mutate({ prompt: r }));
															if ((i((e) => ({ ...e, loading: !1 })), l)) {
																console.error(l), alert(l.message);
																return;
															}
															if (!a) return void alert('Invalid Response Data');
															let n =
																null !=
																(s =
																	null == (t = a.candidates.at(0)) || null == (e = t.content.parts.at(0))
																		? void 0
																		: e.text)
																	? s
																	: '';
															if (!n) return void alert('Invalid Answer');
															i((e) => ({ ...e, answer: n }));
														},
														children: s ? 'Loading' : 'Search',
													}),
												],
											}),
										}),
									}),
									!s && l.length > 0 ? (0, a.jsx)('p', { children: l }) : (0, a.jsx)(a.Fragment, {}),
								],
							}),
						}),
					});
				};
			var b = s(6714),
				y = s(4053);
			let w = () => {
					var e;
					let { isAuthenticated: t = !1, user: s, signOut: r } = (0, b.J)();
					return (0, a.jsxs)(y.o, {
						children: [
							(0, a.jsx)(o(), {
								href: '/',
								className: 'text-xl font-black whitespace-nowrap',
								children: (0, a.jsx)(d.WG, { children: h.C }),
							}),
							t &&
								(0, a.jsxs)('div', {
									className: 'flex items-center gap-x-2 md:gap-x-4',
									children: [
										(0, a.jsx)('p', {
											className: 'w-12 truncate text-right md:w-48',
											children: null != (e = null == s ? void 0 : s.email) ? e : '',
										}),
										(0, a.jsx)(n.$, { onClick: r, children: 'Sign Out' }),
									],
								}),
							!t &&
								(0, a.jsxs)('div', {
									className: 'flex items-center gap-x-2 md:gap-x-4',
									children: [
										(0, a.jsx)(o(), { href: '/auth/sign-in', children: (0, a.jsx)(n.r, { children: 'Sign In' }) }),
										(0, a.jsx)(o(), { href: '/auth/sign-up', children: (0, a.jsx)(n.$, { children: 'Sign Up' }) }),
									],
								}),
						],
					});
				},
				v = (e) => {
					let { quote: t = '', source: s = '' } = e;
					return (0, a.jsx)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 py-8 md:gap-y-16 md:px-8 md:py-16',
						children: (0, a.jsx)('div', {
							className: 'mx-auto w-full max-w-2xl',
							children: (0, a.jsxs)('div', {
								className: 'flex flex-col items-center justify-center gap-y-4 md:gap-y-8',
								children: [
									(0, a.jsx)('p', { className: 'text-center text-2xl font-medium', children: t }),
									(0, a.jsxs)('p', { children: ['- ', s, ' -'] }),
								],
							}),
						}),
					});
				},
				N = () => {
					let e = {
						hero: {
							description:
								'Kickstart your SaaS faster with secure authentication and hassle-free subscription payments powered by Paddle.',
						},
						features: {
							title: 'Features',
							description: 'Everything you need to launch and scale your micro SaaS — zero boilerplate, maximum speed.',
							features: {
								authentication: {
									emoji: '\uD83D\uDD11',
									title: 'Complete User Authentication',
									description:
										'Secure sign-up, login, and password recovery built-in. Focus on your product — not reinventing login screens.',
								},
								email: {
									emoji: '✉️',
									title: 'Integrated Email Delivery',
									description:
										'Send transactional emails like verification and password resets with Resend — reliable delivery, zero hassle.',
								},
								payment: {
									emoji: '\uD83D\uDE80',
									title: 'Seamless Paddle Payments',
									description:
										'Integrated subscription billing with Paddle — global taxes, compliance, and invoicing handled for you.',
								},
							},
						},
						demo: { title: 'How to Use', description: 'See it in action — your SaaS, ready to launch in minutes.' },
						testimonials: {
							quote:
								'"This template saved me weeks of boring setup work. I had my app accepting payments on day one! Highly recommended for solo founders and indie hackers."',
							source: 'Alex M, Indie Hacker',
						},
						faq: {
							title: 'Frequently Asked Questions',
							description: "Got questions? We've got answers to help you launch with confidence.",
							questions: {
								'paddle-account': {
									question: 'Do I need a Paddle account to use this template?',
									answer:
										"Yes - you'll need a free Paddle vendor account to connect your product and handle subscription payments.",
								},
								teckstack: {
									question: 'Which tech stack does this template use?',
									answer:
										'This starter kit uses a modern stack: Next.js (or your preferred framework), Prisma for database access, secure API routes, and Paddle for payments.',
								},
								customization: {
									question: 'Can I add custom features later?',
									answer:
										'Absolutely. The template is designed to be modular and extensible — you can easily add new pages, APIs, roles, or billing logic as your SaaS grows.',
								},
								tax: {
									question: 'Does it handle taxes and EU VAT?',
									answer:
										'Yes! Paddle acts as your Merchant of Record and takes care of VAT, taxes, and invoicing — saving you legal and accounting headaches.',
								},
								deployment: {
									question: 'Is there a deployment guide?',
									answer:
										'Yes — the README includes clear steps to deploy on Vercel, Fly.io, or any Node-compatible host.',
								},
							},
						},
						cta: {
							title: 'Get Started for Free',
							description:
								'Join today and see how quickly you can launch your micro SaaS. Sign up in seconds — no credit card required.',
							action: 'Sign Up Now',
						},
					};
					return (0, a.jsxs)('div', {
						className: 'scrollbar-none flex h-screen flex-col gap-y-8 overflow-y-auto md:gap-y-16',
						children: [
							(0, a.jsx)(l.q, {}),
							(0, a.jsx)(w, {}),
							(0, a.jsxs)('main', {
								className: 'flex flex-col gap-y-8 md:gap-y-16',
								children: [
									(0, a.jsx)(j, { description: e.hero.description }),
									(0, a.jsxs)('div', {
										className: 'flex flex-col gap-y-8 md:gap-y-16',
										children: [
											(0, a.jsx)(p, {
												title: e.features.title,
												description: e.features.description,
												features: e.features.features,
											}),
											(0, a.jsx)(u, { title: e.demo.title, description: e.demo.description }),
											(0, a.jsx)(v, { quote: e.testimonials.quote, source: e.testimonials.quote }),
											(0, a.jsx)(m, { title: e.faq.title, description: e.faq.description, questions: e.faq.questions }),
											(0, a.jsx)(c, { title: e.cta.title, description: e.cta.description, action: e.cta.action }),
										],
									}),
								],
							}),
							(0, a.jsx)(r.w, {}),
						],
					});
				},
				k = () => (0, a.jsx)(N, {});
		},
		4053: (e, t, s) => {
			'use strict';
			s.d(t, { o: () => r });
			var a = s(5640);
			let r = (e) => {
				let { children: t = (0, a.jsx)(a.Fragment, {}) } = e;
				return (0, a.jsx)('nav', {
					className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
					children: (0, a.jsx)('div', {
						className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
						children: (0, a.jsx)('div', { className: 'flex items-center justify-between gap-x-4', children: t }),
					}),
				});
			};
		},
		9650: (e, t, s) => {
			'use strict';
			s.d(t, { $: () => r, r: () => l });
			var a = s(5640);
			let r = (e) => {
					let {
						size: t = 'md',
						type: s = 'button',
						disabled: r = !1,
						onClick: l = () => {},
						children: n = (0, a.jsx)(a.Fragment, {}),
					} = e;
					return 'sm' === t
						? (0, a.jsx)('button', {
								type: s,
								disabled: r,
								onClick: l,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: n,
							})
						: 'lg' === t
							? (0, a.jsx)('button', {
									type: s,
									disabled: r,
									onClick: l,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: n,
								})
							: (0, a.jsx)('button', {
									type: s,
									disabled: r,
									onClick: l,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: n,
								});
				},
				l = (e) => {
					let {
						size: t = 'md',
						type: s = 'button',
						disabled: r = !1,
						onClick: l = () => {},
						children: n = (0, a.jsx)(a.Fragment, {}),
					} = e;
					return 'sm' === t
						? (0, a.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, a.jsx)('button', {
									type: s,
									disabled: r,
									onClick: l,
									className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
									children: n,
								}),
							})
						: 'lg' === t
							? (0, a.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, a.jsx)('button', {
										type: s,
										disabled: r,
										onClick: l,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
										children: n,
									}),
								})
							: (0, a.jsx)('div', {
									className:
										'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
									children: (0, a.jsx)('button', {
										type: s,
										disabled: r,
										onClick: l,
										className:
											'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
										children: n,
									}),
								});
				};
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [242, 636, 593, 792], () => t(1924)), (_N_E = e.O());
	},
]);
