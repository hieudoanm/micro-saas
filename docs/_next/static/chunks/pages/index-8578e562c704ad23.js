(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		754: (e, s, t) => {
			'use strict';
			t.r(s), t.d(s, { default: () => f });
			var a = t(5640),
				l = t(1988),
				i = t(8004),
				r = t(3489);
			let n = () =>
				(0, a.jsx)('section', {
					className: 'container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8',
					children: (0, a.jsxs)('div', {
						className: 'mx-auto w-full max-w-2xl space-y-4 md:space-y-8',
						children: [
							(0, a.jsx)('h2', { className: 'text-center text-3xl font-extrabold', children: 'Call to Action' }),
							(0, a.jsx)('p', {
								className: 'text-center text-base md:text-lg',
								children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.',
							}),
							(0, a.jsx)('div', {
								className: 'flex w-full items-center justify-center',
								children: (0, a.jsx)(r.$, { size: 'lg', children: 'Sign Up' }),
							}),
						],
					}),
				});
			var d = t(148);
			let c = () => {
					let [e, s] = (0, d.useState)('');
					return (
						(0, d.useEffect)(() => {
							s(window.origin);
						}, []),
						(0, a.jsx)('section', {
							className: 'flex flex-col gap-y-8 py-8 md:gap-y-16 md:py-16',
							children: (0, a.jsx)('div', {
								className: 'container mx-auto px-4 md:px-8',
								children: (0, a.jsxs)('div', {
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
													children: e,
												}),
											],
										}),
										(0, a.jsx)('div', { className: 'aspect-[9/16] w-full md:aspect-[16/9]' }),
									],
								}),
							}),
						})
					);
				},
				o = () =>
					(0, a.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8',
						children: [
							(0, a.jsx)('h2', {
								className: 'text-center text-3xl font-extrabold',
								children: 'Frequently Asked Questions',
							}),
							(0, a.jsx)('div', {
								className:
									'divide-y divide-neutral-800 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
								children: [
									{
										id: 'question-1',
										question: 'What is Tailwind CSS?',
										answer:
											'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
									},
									{
										id: 'question-2',
										question: 'Do I need JavaScript?',
										answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
									},
									{
										id: 'question-3',
										question: 'What is Tailwind CSS?',
										answer:
											'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
									},
									{
										id: 'question-4',
										question: 'Do I need JavaScript?',
										answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
									},
									{
										id: 'question-5',
										question: 'What is Tailwind CSS?',
										answer:
											'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
									},
									{
										id: 'question-6',
										question: 'Do I need JavaScript?',
										answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
									},
									{
										id: 'question-7',
										question: 'What is Tailwind CSS?',
										answer:
											'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
									},
									{
										id: 'question-8',
										question: 'Do I need JavaScript?',
										answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
									},
								].map((e) => {
									let { id: s = '', question: t = '', answer: l = '' } = e;
									return (0, a.jsxs)(
										'details',
										{
											className: 'group',
											children: [
												(0, a.jsxs)('summary', {
													className: 'flex cursor-pointer list-none items-center justify-between px-4 py-3',
													children: [
														(0, a.jsx)('span', {
															className: 'font-semibold text-neutral-900 dark:text-neutral-100',
															children: t,
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
					}),
				x = () =>
					(0, a.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
						children: [
							(0, a.jsxs)('div', {
								className: 'flex flex-col gap-y-4',
								children: [
									(0, a.jsx)('h2', { className: 'text-center text-3xl font-extrabold', children: 'Features' }),
									(0, a.jsx)('h3', {
										className: 'text-center',
										children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
									}),
								],
							}),
							(0, a.jsx)('div', {
								className: 'grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8',
								children: [
									{
										id: 'feature-1',
										emoji: '\uD83D\uDE80',
										title: 'Feature 1',
										description:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
									},
									{
										id: 'feature-2',
										emoji: '\uD83D\uDE80',
										title: 'Feature 2',
										description:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
									},
									{
										id: 'feature-3',
										emoji: '\uD83D\uDE80',
										title: 'Feature 3',
										description:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
									},
								].map((e) => {
									let { id: s = '', emoji: t = '', title: l = '', description: i = '' } = e;
									return (0, a.jsx)(
										'div',
										{
											className: 'col-span-1',
											children: (0, a.jsxs)('div', {
												className:
													'flex flex-col items-center justify-center gap-y-2 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 shadow shadow-neutral-100/10 transition-all hover:scale-110 md:gap-y-4',
												children: [
													(0, a.jsx)('span', { className: 'text-4xl', children: t }),
													(0, a.jsx)('h3', { className: 'text-bold text-xl', children: l }),
													(0, a.jsx)('p', { className: 'text-center text-sm text-neutral-400', children: i }),
												],
											}),
										},
										s,
									);
								}),
							}),
						],
					}),
				u = () =>
					(0, a.jsx)('section', {
						className: 'container mx-auto px-4 py-8 md:px-8 md:py-16',
						children: (0, a.jsxs)('div', {
							className: 'mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8',
							children: [
								(0, a.jsx)('h1', {
									className: 'text-center text-5xl font-black md:text-6xl',
									children: (0, a.jsx)('span', {
										className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
										children: 'micro/saas',
									}),
								}),
								(0, a.jsx)('p', {
									className: 'text-center text-base md:text-lg',
									children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.',
								}),
								(0, a.jsx)('div', {
									className: 'mx-auto w-full max-w-lg rounded-full',
									children: (0, a.jsx)('div', {
										className:
											'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
										children: (0, a.jsxs)('div', {
											className: 'flex rounded-full bg-neutral-900 p-1 md:p-2',
											children: [
												(0, a.jsx)('input', {
													className:
														'grow rounded-full border-0 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
												}),
												(0, a.jsx)(r.$, { children: 'Sign Up' }),
											],
										}),
									}),
								}),
							],
						}),
					});
			var m = t(5089),
				p = t.n(m);
			let h = () =>
					(0, a.jsx)('nav', {
						className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, a.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, a.jsxs)('div', {
								className: 'flex items-center justify-between gap-x-4',
								children: [
									(0, a.jsx)(p(), {
										href: '/',
										className: 'text-xl font-black',
										children: (0, a.jsx)('span', {
											className:
												'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
											children: 'micro/saas',
										}),
									}),
									(0, a.jsxs)('div', {
										className: 'flex items-center gap-x-2 md:gap-x-4',
										children: [
											(0, a.jsx)(p(), { href: '/auth/sign-in', children: 'Sign In' }),
											(0, a.jsx)(p(), { href: '/auth/sign-up', children: (0, a.jsx)(r.$, { children: 'Sign Up' }) }),
										],
									}),
								],
							}),
						}),
					}),
				g = () =>
					(0, a.jsx)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 py-8 md:gap-y-16 md:px-8 md:py-16',
						children: (0, a.jsx)('div', {
							className: 'mx-auto w-full max-w-2xl',
							children: (0, a.jsxs)('div', {
								className: 'flex flex-col items-center justify-center gap-y-4 md:gap-y-8',
								children: [
									(0, a.jsx)('p', {
										className: 'text-center text-2xl font-medium',
										children: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta.”',
									}),
									(0, a.jsx)('p', { children: '- First Last, Full Stack Engineer -' }),
								],
							}),
						}),
					}),
				f = () =>
					(0, a.jsxs)('div', {
						className: 'flex flex-col gap-y-8 md:gap-y-16',
						children: [
							(0, a.jsx)(i.q, {}),
							(0, a.jsx)(h, {}),
							(0, a.jsxs)('main', {
								className: 'flex flex-col gap-y-8 md:gap-y-16',
								children: [
									(0, a.jsx)(u, {}),
									(0, a.jsx)(x, {}),
									(0, a.jsx)(c, {}),
									(0, a.jsx)(g, {}),
									(0, a.jsx)(o, {}),
									(0, a.jsx)(n, {}),
								],
							}),
							(0, a.jsx)(l.w, {}),
						],
					});
		},
		1988: (e, s, t) => {
			'use strict';
			t.d(s, { w: () => n });
			var a = t(5640),
				l = t(5089),
				i = t.n(l);
			let r = new Date().getFullYear(),
				n = () =>
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
											(0, a.jsxs)('p', { children: ['\xa9 ', r, ' micro/saas.'] }),
											(0, a.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, a.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, a.jsx)(i(), {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, a.jsx)(i(), {
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
		3489: (e, s, t) => {
			'use strict';
			t.d(s, { $: () => l, r: () => i });
			var a = t(5640);
			let l = (e) => {
					let { size: s = 'md', type: t = 'button', children: l = (0, a.jsx)(a.Fragment, {}) } = e;
					return 'sm' === s
						? (0, a.jsx)('button', {
								type: t,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
								children: l,
							})
						: 'lg' === s
							? (0, a.jsx)('button', {
									type: t,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
									children: l,
								})
							: (0, a.jsx)('button', {
									type: t,
									className:
										'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: l,
								});
				},
				i = (e) => {
					let { type: s = 'button', children: t = (0, a.jsx)(a.Fragment, {}) } = e;
					return (0, a.jsx)('div', {
						className: 'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
						children: (0, a.jsx)('button', {
							type: s,
							className:
								'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
							children: t,
						}),
					});
				};
		},
		7757: (e, s, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return t(754);
				},
			]);
		},
		8004: (e, s, t) => {
			'use strict';
			t.d(s, { q: () => l });
			var a = t(5640);
			let l = () =>
				(0, a.jsx)('div', {
					className:
						'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
					children: (0, a.jsx)('div', {
						className:
							'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
					}),
				});
		},
	},
	(e) => {
		var s = (s) => e((e.s = s));
		e.O(0, [89, 636, 593, 792], () => s(7757)), (_N_E = e.O());
	},
]);
