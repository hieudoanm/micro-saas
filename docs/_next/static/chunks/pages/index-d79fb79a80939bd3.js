(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		642: (e, t) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'errorOnce', {
					enumerable: !0,
					get: function () {
						return r;
					},
				});
			let r = (e) => {};
		},
		1229: (e, t, r) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useIntersection', {
					enumerable: !0,
					get: function () {
						return o;
					},
				});
			let s = r(148),
				l = r(2016),
				n = 'function' == typeof IntersectionObserver,
				a = new Map(),
				i = [];
			function o(e) {
				let { rootRef: t, rootMargin: r, disabled: o } = e,
					u = o || !n,
					[d, c] = (0, s.useState)(!1),
					f = (0, s.useRef)(null),
					p = (0, s.useCallback)((e) => {
						f.current = e;
					}, []);
				return (
					(0, s.useEffect)(() => {
						if (n) {
							if (u || d) return;
							let e = f.current;
							if (e && e.tagName)
								return (function (e, t, r) {
									let {
										id: s,
										observer: l,
										elements: n,
									} = (function (e) {
										let t,
											r = { root: e.root || null, margin: e.rootMargin || '' },
											s = i.find((e) => e.root === r.root && e.margin === r.margin);
										if (s && (t = a.get(s))) return t;
										let l = new Map();
										return (
											(t = {
												id: r,
												observer: new IntersectionObserver((e) => {
													e.forEach((e) => {
														let t = l.get(e.target),
															r = e.isIntersecting || e.intersectionRatio > 0;
														t && r && t(r);
													});
												}, e),
												elements: l,
											}),
											i.push(r),
											a.set(r, t),
											t
										);
									})(r);
									return (
										n.set(e, t),
										l.observe(e),
										function () {
											if ((n.delete(e), l.unobserve(e), 0 === n.size)) {
												l.disconnect(), a.delete(s);
												let e = i.findIndex((e) => e.root === s.root && e.margin === s.margin);
												e > -1 && i.splice(e, 1);
											}
										}
									);
								})(e, (e) => e && c(e), { root: null == t ? void 0 : t.current, rootMargin: r });
						} else if (!d) {
							let e = (0, l.requestIdleCallback)(() => c(!0));
							return () => (0, l.cancelIdleCallback)(e);
						}
					}, [u, r, t, d, f.current]),
					[
						p,
						d,
						(0, s.useCallback)(() => {
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
		3822: (e, t, r) => {
			'use strict';
			function s(e, t, r, s) {
				return !1;
			}
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'getDomainLocale', {
					enumerable: !0,
					get: function () {
						return s;
					},
				}),
				r(7120),
				('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
					void 0 === t.default.__esModule &&
					(Object.defineProperty(t.default, '__esModule', { value: !0 }),
					Object.assign(t.default, t),
					(e.exports = t.default));
		},
		4238: (e, t, r) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				!(function (e, t) {
					for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
				})(t, {
					default: function () {
						return w;
					},
					useLinkStatus: function () {
						return y;
					},
				});
			let s = r(8781),
				l = r(5640),
				n = s._(r(148)),
				a = r(412),
				i = r(4086),
				o = r(2047),
				u = r(1153),
				d = r(3578),
				c = r(8651),
				f = r(1229),
				p = r(3822),
				x = r(9499),
				m = r(5264);
			r(642);
			let h = new Set();
			function g(e, t, r, s) {
				if ((0, i.isLocalURL)(t)) {
					if (!s.bypassPrefetchedCheck) {
						let l = t + '%' + r + '%' + (void 0 !== s.locale ? s.locale : 'locale' in e ? e.locale : void 0);
						if (h.has(l)) return;
						h.add(l);
					}
					e.prefetch(t, r, s).catch((e) => {});
				}
			}
			function j(e) {
				return 'string' == typeof e ? e : (0, o.formatUrl)(e);
			}
			let b = n.default.forwardRef(function (e, t) {
					let r,
						s,
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
					(r = b), O && ('string' == typeof r || 'number' == typeof r) && (r = (0, l.jsx)('a', { children: r }));
					let L = n.default.useContext(c.RouterContext),
						T = !1 !== v,
						{ href: E, as: R } = n.default.useMemo(() => {
							if (!L) {
								let e = j(o);
								return { href: e, as: h ? j(h) : e };
							}
							let [e, t] = (0, a.resolveHref)(L, o, !0);
							return { href: e, as: h ? (0, a.resolveHref)(L, h) : t || e };
						}, [L, o, h]),
						D = n.default.useRef(E),
						I = n.default.useRef(R);
					O && (s = n.default.Children.only(r));
					let F = O ? s && 'object' == typeof s && s.ref : t,
						[J, U, A] = (0, f.useIntersection)({ rootMargin: '200px' }),
						K = n.default.useCallback(
							(e) => {
								(I.current !== R || D.current !== E) && (A(), (I.current = R), (D.current = E)), J(e);
							},
							[R, E, A, J],
						),
						W = (0, m.useMergedRef)(K, F);
					n.default.useEffect(() => {
						L && U && T && g(L, E, R, { locale: S });
					}, [R, E, U, S, T, null == L ? void 0 : L.locale, L]);
					let H = {
						ref: W,
						onClick(e) {
							O || 'function' != typeof k || k(e),
								O && s.props && 'function' == typeof s.props.onClick && s.props.onClick(e),
								L &&
									(e.defaultPrevented ||
										(function (e, t, r, s, l, n, a, o, u) {
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
												if (!(0, i.isLocalURL)(r)) {
													l && (e.preventDefault(), location.replace(r));
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
														let e = null == a || a;
														'beforePopState' in t
															? t[l ? 'replace' : 'push'](r, s, { shallow: n, locale: o, scroll: e })
															: t[l ? 'replace' : 'push'](s || r, { scroll: e });
													})();
											}
										})(e, L, E, R, w, N, _, S, C));
						},
						onMouseEnter(e) {
							O || 'function' != typeof M || M(e),
								O && s.props && 'function' == typeof s.props.onMouseEnter && s.props.onMouseEnter(e),
								L && g(L, E, R, { locale: S, priority: !0, bypassPrefetchedCheck: !0 });
						},
						onTouchStart: function (e) {
							O || 'function' != typeof q || q(e),
								O && s.props && 'function' == typeof s.props.onTouchStart && s.props.onTouchStart(e),
								L && g(L, E, R, { locale: S, priority: !0, bypassPrefetchedCheck: !0 });
						},
					};
					if ((0, u.isAbsoluteUrl)(R)) H.href = R;
					else if (!O || y || ('a' === s.type && !('href' in s.props))) {
						let e = void 0 !== S ? S : null == L ? void 0 : L.locale;
						H.href =
							((null == L ? void 0 : L.isLocaleDomain) &&
								(0, p.getDomainLocale)(R, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales)) ||
							(0, x.addBasePath)((0, d.addLocale)(R, e, null == L ? void 0 : L.defaultLocale));
					}
					return O ? n.default.cloneElement(s, H) : (0, l.jsx)('a', { ...P, ...H, children: r });
				}),
				v = (0, n.createContext)({ pending: !1 }),
				y = () => (0, n.useContext)(v),
				w = b;
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		4353: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => b });
			var s = r(5640);
			let l = (e) => {
					let { children: t = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsx)('button', {
						className:
							'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
						children: t,
					});
				},
				n = (e) => {
					let { children: t = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsx)('button', {
						className:
							'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
						children: t,
					});
				},
				a = () =>
					(0, s.jsx)('section', {
						className: 'container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8',
						children: (0, s.jsxs)('div', {
							className: 'mx-auto w-full max-w-2xl space-y-4 md:space-y-8',
							children: [
								(0, s.jsx)('h2', { className: 'text-center text-3xl font-extrabold', children: 'Call to Action' }),
								(0, s.jsx)('p', {
									className: 'text-center text-base md:text-lg',
									children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.',
								}),
								(0, s.jsx)('div', {
									className: 'flex w-full items-center justify-center',
									children: (0, s.jsx)(n, { children: 'Sign Up' }),
								}),
							],
						}),
					});
			var i = r(148);
			let o = () => {
					let [e, t] = (0, i.useState)('');
					return (
						(0, i.useEffect)(() => {
							t(window.origin);
						}, []),
						(0, s.jsx)('section', {
							className: 'flex flex-col gap-y-8 py-8 md:gap-y-16 md:py-16',
							children: (0, s.jsx)('div', {
								className: 'container mx-auto px-4 md:px-8',
								children: (0, s.jsxs)('div', {
									className:
										'overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
									children: [
										(0, s.jsxs)('div', {
											className: 'flex items-center gap-x-4 border-b border-neutral-800 p-2 md:p-4',
											children: [
												(0, s.jsxs)('div', {
													className: 'flex gap-x-2',
													children: [
														(0, s.jsx)('span', { className: 'h-3 w-3 rounded-full bg-red-500' }),
														(0, s.jsx)('span', { className: 'h-3 w-3 rounded-full bg-yellow-500' }),
														(0, s.jsx)('span', { className: 'h-3 w-3 rounded-full bg-green-500' }),
													],
												}),
												(0, s.jsx)('div', {
													className:
														'grow items-center truncate rounded border border-neutral-800 px-2 py-1 text-sm text-neutral-100',
													children: e,
												}),
											],
										}),
										(0, s.jsx)('div', { className: 'aspect-[9/16] w-full md:aspect-[16/9]' }),
									],
								}),
							}),
						})
					);
				},
				u = () =>
					(0, s.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8',
						children: [
							(0, s.jsx)('h2', {
								className: 'text-center text-3xl font-extrabold',
								children: 'Frequently Asked Questions',
							}),
							(0, s.jsx)('div', {
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
									let { id: t = '', question: r = '', answer: l = '' } = e;
									return (0, s.jsxs)(
										'details',
										{
											className: 'group',
											children: [
												(0, s.jsxs)('summary', {
													className: 'flex cursor-pointer list-none items-center justify-between px-4 py-3',
													children: [
														(0, s.jsx)('span', {
															className: 'font-semibold text-neutral-900 dark:text-neutral-100',
															children: r,
														}),
														(0, s.jsxs)('span', {
															className:
																'text-lg text-neutral-600 transition-all duration-300 group-open:rotate-180 dark:text-neutral-400',
															children: [
																(0, s.jsx)('span', { className: 'group-open:hidden', children: '+' }),
																(0, s.jsx)('span', { className: 'hidden group-open:inline', children: '-' }),
															],
														}),
													],
												}),
												(0, s.jsx)('div', {
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
					(0, s.jsxs)('section', {
						className: 'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
						children: [
							(0, s.jsxs)('div', {
								className: 'flex flex-col gap-y-4',
								children: [
									(0, s.jsx)('h2', { className: 'text-center text-3xl font-extrabold', children: 'Features' }),
									(0, s.jsx)('h3', {
										className: 'text-center',
										children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
									}),
								],
							}),
							(0, s.jsx)('div', {
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
									let { id: t = '', emoji: r = '', title: l = '', description: n = '' } = e;
									return (0, s.jsx)(
										'div',
										{
											className: 'col-span-1',
											children: (0, s.jsxs)('div', {
												className:
													'flex flex-col items-center justify-center gap-y-2 rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 shadow shadow-neutral-100/10 transition-all hover:scale-110 md:gap-y-4',
												children: [
													(0, s.jsx)('span', { className: 'text-4xl', children: r }),
													(0, s.jsx)('h3', { className: 'text-bold text-xl', children: l }),
													(0, s.jsx)('p', { className: 'text-center text-sm text-neutral-400', children: n }),
												],
											}),
										},
										t,
									);
								}),
							}),
						],
					});
			var c = r(5089),
				f = r.n(c);
			let p = new Date().getFullYear(),
				x = () =>
					(0, s.jsx)('footer', {
						className: 'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, s.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, s.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, s.jsxs)('div', {
										className: 'flex flex-col gap-y-1',
										children: [
											(0, s.jsxs)('p', { children: ['\xa9 ', p, ' micro/saas.'] }),
											(0, s.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, s.jsxs)('div', {
										className: 'flex flex-col gap-y-1 text-right',
										children: [
											(0, s.jsx)(f(), { href: 'https://github.com', target: '_blank', children: 'GitHub' }),
											(0, s.jsx)(f(), { href: 'https://x.com', target: '_blank', children: 'Twitter' }),
										],
									}),
								],
							}),
						}),
					}),
				m = () =>
					(0, s.jsx)('section', {
						className: 'container mx-auto px-4 py-8 md:px-8 md:py-16',
						children: (0, s.jsxs)('div', {
							className: 'mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8',
							children: [
								(0, s.jsx)('h1', {
									className: 'text-center text-5xl font-black md:text-6xl',
									children: (0, s.jsx)('span', {
										className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
										children: 'micro/saas',
									}),
								}),
								(0, s.jsx)('p', {
									className: 'text-center text-base md:text-lg',
									children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.',
								}),
								(0, s.jsxs)('div', {
									className:
										'mx-auto flex w-full max-w-lg rounded-full border border-neutral-800 bg-neutral-900/40 p-1 shadow shadow-neutral-100/10 md:p-2',
									children: [
										(0, s.jsx)('input', { className: 'grow rounded-full border-0 px-4 py-2 focus:outline-none' }),
										(0, s.jsx)(l, { children: 'Sign Up' }),
									],
								}),
							],
						}),
					}),
				h = () =>
					(0, s.jsx)('nav', {
						className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, s.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, s.jsxs)('div', {
								className: 'flex items-center justify-between',
								children: [
									(0, s.jsx)('code', { className: 'text-xl font-black', children: 'micro/saas' }),
									(0, s.jsx)(l, { children: 'Sign Up' }),
								],
							}),
						}),
					}),
				g = () =>
					(0, s.jsx)('div', {
						className:
							'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
						children: (0, s.jsx)('div', {
							className:
								'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
						}),
					}),
				j = () =>
					(0, s.jsx)('section', {
						className: 'container mx-auto flex flex-col gap-y-8 px-4 py-8 md:gap-y-16 md:px-8 md:py-16',
						children: (0, s.jsx)('div', {
							className: 'mx-auto w-full max-w-2xl',
							children: (0, s.jsxs)('div', {
								className: 'flex flex-col items-center justify-center gap-y-4 md:gap-y-8',
								children: [
									(0, s.jsx)('p', {
										className: 'text-center text-2xl font-medium',
										children: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta.”',
									}),
									(0, s.jsx)('p', { children: '- First Last, Full Stack Engineer -' }),
								],
							}),
						}),
					}),
				b = () =>
					(0, s.jsxs)('div', {
						className: 'flex flex-col gap-y-8 md:gap-y-16',
						children: [
							(0, s.jsx)(g, {}),
							(0, s.jsx)(h, {}),
							(0, s.jsxs)('main', {
								className: 'flex flex-col gap-y-8 md:gap-y-16',
								children: [
									(0, s.jsx)(m, {}),
									(0, s.jsx)(d, {}),
									(0, s.jsx)(o, {}),
									(0, s.jsx)(j, {}),
									(0, s.jsx)(u, {}),
									(0, s.jsx)(a, {}),
								],
							}),
							(0, s.jsx)(x, {}),
						],
					});
		},
		5089: (e, t, r) => {
			e.exports = r(4238);
		},
		5264: (e, t, r) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useMergedRef', {
					enumerable: !0,
					get: function () {
						return l;
					},
				});
			let s = r(148);
			function l(e, t) {
				let r = (0, s.useRef)(null),
					l = (0, s.useRef)(null);
				return (0, s.useCallback)(
					(s) => {
						if (null === s) {
							let e = r.current;
							e && ((r.current = null), e());
							let t = l.current;
							t && ((l.current = null), t());
						} else e && (r.current = n(e, s)), t && (l.current = n(t, s));
					},
					[e, t],
				);
			}
			function n(e, t) {
				if ('function' != typeof e)
					return (
						(e.current = t),
						() => {
							e.current = null;
						}
					);
				{
					let r = e(t);
					return 'function' == typeof r ? r : () => e(null);
				}
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		7757: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return r(4353);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [636, 593, 792], () => t(7757)), (_N_E = e.O());
	},
]);
