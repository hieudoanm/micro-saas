(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		642: (e, t) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'errorOnce', {
					enumerable: !0,
					get: function () {
						return s;
					},
				});
			let s = (e) => {};
		},
		1229: (e, t, s) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useIntersection', {
					enumerable: !0,
					get: function () {
						return o;
					},
				});
			let r = s(148),
				l = s(2016),
				a = 'function' == typeof IntersectionObserver,
				n = new Map(),
				i = [];
			function o(e) {
				let { rootRef: t, rootMargin: s, disabled: o } = e,
					u = o || !a,
					[d, c] = (0, r.useState)(!1),
					f = (0, r.useRef)(null),
					p = (0, r.useCallback)((e) => {
						f.current = e;
					}, []);
				return (
					(0, r.useEffect)(() => {
						if (a) {
							if (u || d) return;
							let e = f.current;
							if (e && e.tagName)
								return (function (e, t, s) {
									let {
										id: r,
										observer: l,
										elements: a,
									} = (function (e) {
										let t,
											s = { root: e.root || null, margin: e.rootMargin || '' },
											r = i.find((e) => e.root === s.root && e.margin === s.margin);
										if (r && (t = n.get(r))) return t;
										let l = new Map();
										return (
											(t = {
												id: s,
												observer: new IntersectionObserver((e) => {
													e.forEach((e) => {
														let t = l.get(e.target),
															s = e.isIntersecting || e.intersectionRatio > 0;
														t && s && t(s);
													});
												}, e),
												elements: l,
											}),
											i.push(s),
											n.set(s, t),
											t
										);
									})(s);
									return (
										a.set(e, t),
										l.observe(e),
										function () {
											if ((a.delete(e), l.unobserve(e), 0 === a.size)) {
												l.disconnect(), n.delete(r);
												let e = i.findIndex((e) => e.root === r.root && e.margin === r.margin);
												e > -1 && i.splice(e, 1);
											}
										}
									);
								})(e, (e) => e && c(e), { root: null == t ? void 0 : t.current, rootMargin: s });
						} else if (!d) {
							let e = (0, l.requestIdleCallback)(() => c(!0));
							return () => (0, l.cancelIdleCallback)(e);
						}
					}, [u, s, t, d, f.current]),
					[
						p,
						d,
						(0, r.useCallback)(() => {
							c(!1);
						}, []),
					]
				);
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		3822: (e, t, s) => {
			'use strict';
			function r(e, t, s, r) {
				return !1;
			}
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'getDomainLocale', {
					enumerable: !0,
					get: function () {
						return r;
					},
				}),
				s(7120),
				('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
					void 0 === t.default.__esModule &&
					(Object.defineProperty(t.default, '__esModule', { value: !0 }),
					Object.assign(t.default, t),
					(e.exports = t.default));
		},
		4238: (e, t, s) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				!(function (e, t) {
					for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
				})(t, {
					default: function () {
						return w;
					},
					useLinkStatus: function () {
						return y;
					},
				});
			let r = s(8781),
				l = s(5640),
				a = r._(s(148)),
				n = s(412),
				i = s(4086),
				o = s(2047),
				u = s(1153),
				d = s(3578),
				c = s(8651),
				f = s(1229),
				p = s(3822),
				x = s(9499),
				m = s(5264);
			s(642);
			let h = new Set();
			function g(e, t, s, r) {
				if ((0, i.isLocalURL)(t)) {
					if (!r.bypassPrefetchedCheck) {
						let l = t + '%' + s + '%' + (void 0 !== r.locale ? r.locale : 'locale' in e ? e.locale : void 0);
						if (h.has(l)) return;
						h.add(l);
					}
					e.prefetch(t, s, r).catch((e) => {});
				}
			}
			function j(e) {
				return 'string' == typeof e ? e : (0, o.formatUrl)(e);
			}
			let b = a.default.forwardRef(function (e, t) {
					let s,
						r,
						{
							href: o,
							as: h,
							children: b,
							prefetch: v = null,
							passHref: y,
							replace: w,
							shallow: N,
							scroll: _,
							locale: S,
							onClick: k,
							onNavigate: C,
							onMouseEnter: M,
							onTouchStart: q,
							legacyBehavior: O = !1,
							...P
						} = e;
					(s = b), O && ('string' == typeof s || 'number' == typeof s) && (s = (0, l.jsx)('a', { children: s }));
					let L = a.default.useContext(c.RouterContext),
						T = !1 !== v,
						{ href: E, as: R } = a.default.useMemo(() => {
							if (!L) {
								let e = j(o);
								return { href: e, as: h ? j(h) : e };
							}
							let [e, t] = (0, n.resolveHref)(L, o, !0);
							return { href: e, as: h ? (0, n.resolveHref)(L, h) : t || e };
						}, [L, o, h]),
						D = a.default.useRef(E),
						I = a.default.useRef(R);
					O && (r = a.default.Children.only(s));
					let F = O ? r && 'object' == typeof r && r.ref : t,
						[J, A, U] = (0, f.useIntersection)({ rootMargin: '200px' }),
						G = a.default.useCallback(
							(e) => {
								(I.current !== R || D.current !== E) && (U(), (I.current = R), (D.current = E)), J(e);
							},
							[R, E, U, J],
						),
						K = (0, m.useMergedRef)(G, F);
					a.default.useEffect(() => {
						L && A && T && g(L, E, R, { locale: S });
					}, [R, E, A, S, T, null == L ? void 0 : L.locale, L]);
					let W = {
						ref: K,
						onClick(e) {
							O || 'function' != typeof k || k(e),
								O && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
								L &&
									(e.defaultPrevented ||
										(function (e, t, s, r, l, a, n, o, u) {
											let { nodeName: d } = e.currentTarget;
											if (
												!(
													('A' === d.toUpperCase() &&
														(function (e) {
															let t = e.currentTarget.getAttribute('target');
															return (
																(t && '_self' !== t) ||
																e.metaKey ||
																e.ctrlKey ||
																e.shiftKey ||
																e.altKey ||
																(e.nativeEvent && 2 === e.nativeEvent.which)
															);
														})(e)) ||
													e.currentTarget.hasAttribute('download')
												)
											) {
												if (!(0, i.isLocalURL)(s)) {
													l && (e.preventDefault(), location.replace(s));
													return;
												}
												e.preventDefault(),
													(() => {
														if (u) {
															let e = !1;
															if (
																(u({
																	preventDefault: () => {
																		e = !0;
																	},
																}),
																e)
															)
																return;
														}
														let e = null == n || n;
														'beforePopState' in t
															? t[l ? 'replace' : 'push'](s, r, { shallow: a, locale: o, scroll: e })
															: t[l ? 'replace' : 'push'](r || s, { scroll: e });
													})();
											}
										})(e, L, E, R, w, N, _, S, C));
						},
						onMouseEnter(e) {
							O || 'function' != typeof M || M(e),
								O && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
								L && g(L, E, R, { locale: S, priority: !0, bypassPrefetchedCheck: !0 });
						},
						onTouchStart: function (e) {
							O || 'function' != typeof q || q(e),
								O && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
								L && g(L, E, R, { locale: S, priority: !0, bypassPrefetchedCheck: !0 });
						},
					};
					if ((0, u.isAbsoluteUrl)(R)) W.href = R;
					else if (!O || y || ('a' === r.type && !('href' in r.props))) {
						let e = void 0 !== S ? S : null == L ? void 0 : L.locale;
						W.href =
							((null == L ? void 0 : L.isLocaleDomain) &&
								(0, p.getDomainLocale)(R, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales)) ||
							(0, x.addBasePath)((0, d.addLocale)(R, e, null == L ? void 0 : L.defaultLocale));
					}
					return O ? a.default.cloneElement(r, W) : (0, l.jsx)('a', { ...P, ...W, children: s });
				}),
				v = (0, a.createContext)({ pending: !1 }),
				y = () => (0, a.useContext)(v),
				w = b;
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		4353: (e, t, s) => {
			'use strict';
			s.r(t), s.d(t, { default: () => b });
			var r = s(5640);
			let l = (e) => {
					let { children: t = (0, r.jsx)(r.Fragment, {}) } = e;
					return (0, r.jsx)('button', {
						className:
							'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
						children: t,
					});
				},
				a = (e) => {
					let { children: t = (0, r.jsx)(r.Fragment, {}) } = e;
					return (0, r.jsx)('button', {
						className:
							'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
						children: t,
					});
				},
				n = () =>
					(0, r.jsx)('section', {
						className: 'container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto w-full max-w-2xl space-y-4 md:space-y-8',
							children: [
								(0, r.jsx)('h2', { className: 'text-center text-3xl font-extrabold', children: 'Call to Action' }),
								(0, r.jsx)('p', {
									className: 'text-center text-base md:text-lg',
									children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.',
								}),
								(0, r.jsx)('div', {
									className: 'flex w-full items-center justify-center',
									children: (0, r.jsx)(a, { children: 'Get Started' }),
								}),
							],
						}),
					});
			var i = s(148);
			let o = () => {
					let [e, t] = (0, i.useState)('');
					return (
						(0, i.useEffect)(() => {
							t(window.origin);
						}, []),
						(0, r.jsx)('section', {
							className: 'flex flex-col gap-y-8 py-8 md:gap-y-16 md:py-16',
							children: (0, r.jsx)('div', {
								className: 'container mx-auto px-4 md:px-8',
								children: (0, r.jsxs)('div', {
									className:
										'overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
									children: [
										(0, r.jsxs)('div', {
											className: 'flex items-center gap-x-4 border-b border-neutral-800 p-2 md:p-4',
											children: [
												(0, r.jsxs)('div', {
													className: 'flex gap-x-2',
													children: [
														(0, r.jsx)('span', { className: 'h-3 w-3 rounded-full bg-red-500' }),
														(0, r.jsx)('span', { className: 'h-3 w-3 rounded-full bg-yellow-500' }),
														(0, r.jsx)('span', { className: 'h-3 w-3 rounded-full bg-green-500' }),
													],
												}),
												(0, r.jsx)('div', {
													className:
														'grow items-center truncate rounded border border-neutral-800 px-2 py-1 text-sm text-neutral-100',
													children: e,
												}),
											],
										}),
										(0, r.jsx)('div', { className: 'aspect-[9/16] w-full md:aspect-[16/9]' }),
									],
								}),
							}),
						})
					);
				},
				u = () =>
					(0, r.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8',
						children: [
							(0, r.jsx)('h2', {
								className: 'text-center text-3xl font-extrabold',
								children: 'Frequently Asked Questions',
							}),
							(0, r.jsx)('div', {
								className:
									'divide-y divide-neutral-800 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
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
									let { id: t = '', question: s = '', answer: l = '' } = e;
									return (0, r.jsxs)(
										'details',
										{
											className: 'group',
											children: [
												(0, r.jsxs)('summary', {
													className: 'flex cursor-pointer list-none items-center justify-between px-4 py-3',
													children: [
														(0, r.jsx)('span', {
															className: 'font-semibold text-neutral-900 dark:text-neutral-100',
															children: s,
														}),
														(0, r.jsxs)('span', {
															className:
																'text-lg text-neutral-600 transition-all duration-300 group-open:rotate-180 dark:text-neutral-400',
															children: [
																(0, r.jsx)('span', { className: 'group-open:hidden', children: '+' }),
																(0, r.jsx)('span', { className: 'hidden group-open:inline', children: '-' }),
															],
														}),
													],
												}),
												(0, r.jsx)('div', {
													className: 'px-4 pb-4 text-neutral-600 dark:text-neutral-400',
													children: l,
												}),
											],
										},
										t,
									);
								}),
							}),
						],
					}),
				d = () =>
					(0, r.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
						children: [
							(0, r.jsxs)('div', {
								className: 'flex flex-col gap-y-4',
								children: [
									(0, r.jsx)('h2', { className: 'text-center text-3xl font-extrabold', children: 'Features' }),
									(0, r.jsx)('h3', {
										className: 'text-center',
										children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
									}),
								],
							}),
							(0, r.jsx)('div', {
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
									let { id: t = '', emoji: s = '', title: l = '', description: a = '' } = e;
									return (0, r.jsx)(
										'div',
										{
											className: 'col-span-1',
											children: (0, r.jsxs)('div', {
												className:
													'flex flex-col items-center justify-center gap-y-2 rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 shadow shadow-neutral-100/10 transition-all hover:scale-110 md:gap-y-4',
												children: [
													(0, r.jsx)('span', { className: 'text-4xl', children: s }),
													(0, r.jsx)('h3', { className: 'text-bold text-xl', children: l }),
													(0, r.jsx)('p', { className: 'text-center text-sm text-neutral-400', children: a }),
												],
											}),
										},
										t,
									);
								}),
							}),
						],
					});
			var c = s(5089),
				f = s.n(c);
			let p = new Date().getFullYear(),
				x = () =>
					(0, r.jsx)('footer', {
						className: 'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, r.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, r.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, r.jsxs)('div', {
										className: 'flex flex-col gap-y-1',
										children: [
											(0, r.jsxs)('p', { children: ['\xa9 ', p, ' micro/saas.'] }),
											(0, r.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, r.jsxs)('div', {
										className: 'flex flex-col gap-y-1 text-right',
										children: [
											(0, r.jsx)(f(), { href: 'https://github.com', target: '_blank', children: 'GitHub' }),
											(0, r.jsx)(f(), { href: 'https://x.com', target: '_blank', children: 'Twitter' }),
										],
									}),
								],
							}),
						}),
					}),
				m = () =>
					(0, r.jsx)('section', {
						className: 'container mx-auto px-4 py-8 md:px-8 md:py-16',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8',
							children: [
								(0, r.jsx)('h1', {
									className: 'text-center text-5xl font-black md:text-6xl',
									children: (0, r.jsx)('span', {
										className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
										children: 'micro/saas',
									}),
								}),
								(0, r.jsx)('p', {
									className: 'text-center text-base md:text-lg',
									children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.',
								}),
								(0, r.jsx)('div', {
									className: 'flex w-full items-center justify-center',
									children: (0, r.jsx)(a, { children: 'Get Started' }),
								}),
							],
						}),
					}),
				h = () =>
					(0, r.jsx)('nav', {
						className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, r.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, r.jsxs)('div', {
								className: 'flex items-center justify-between',
								children: [
									(0, r.jsx)('code', { className: 'text-xl font-black', children: 'micro/saas' }),
									(0, r.jsx)(l, { children: 'Get Started' }),
								],
							}),
						}),
					}),
				g = () =>
					(0, r.jsx)('div', {
						className:
							'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
						children: (0, r.jsx)('div', {
							className:
								'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
						}),
					}),
				j = () =>
					(0, r.jsx)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 py-8 md:gap-y-16 md:px-8 md:py-16',
						children: (0, r.jsx)('div', {
							className: 'mx-auto w-full max-w-2xl',
							children: (0, r.jsxs)('div', {
								className: 'flex flex-col items-center justify-center gap-y-4 md:gap-y-8',
								children: [
									(0, r.jsx)('p', {
										className: 'text-center text-2xl font-medium',
										children: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta.”',
									}),
									(0, r.jsx)('p', { children: '- First Last, Full Stack Engineer -' }),
								],
							}),
						}),
					}),
				b = () =>
					(0, r.jsxs)('div', {
						className: 'flex flex-col gap-y-8 md:gap-y-16',
						children: [
							(0, r.jsx)(g, {}),
							(0, r.jsx)(h, {}),
							(0, r.jsxs)('main', {
								className: 'flex flex-col gap-y-8 md:gap-y-16',
								children: [
									(0, r.jsx)(m, {}),
									(0, r.jsx)(d, {}),
									(0, r.jsx)(o, {}),
									(0, r.jsx)(j, {}),
									(0, r.jsx)(u, {}),
									(0, r.jsx)(n, {}),
								],
							}),
							(0, r.jsx)(x, {}),
						],
					});
		},
		5089: (e, t, s) => {
			e.exports = s(4238);
		},
		5264: (e, t, s) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useMergedRef', {
					enumerable: !0,
					get: function () {
						return l;
					},
				});
			let r = s(148);
			function l(e, t) {
				let s = (0, r.useRef)(null),
					l = (0, r.useRef)(null);
				return (0, r.useCallback)(
					(r) => {
						if (null === r) {
							let e = s.current;
							e && ((s.current = null), e());
							let t = l.current;
							t && ((l.current = null), t());
						} else e && (s.current = a(e, r)), t && (l.current = a(t, r));
					},
					[e, t],
				);
			}
			function a(e, t) {
				if ('function' != typeof e)
					return (
						(e.current = t),
						() => {
							e.current = null;
						}
					);
				{
					let s = e(t);
					return 'function' == typeof s ? s : () => e(null);
				}
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		7757: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(4353);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [636, 593, 792], () => t(7757)), (_N_E = e.O());
	},
]);
