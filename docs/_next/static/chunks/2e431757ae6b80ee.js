(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	54508,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = e.r(2879)._(e.r(36960)).default.createContext({});
	},
	7891,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'warnOnce', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = (e) => {};
	},
	21662,
	53992,
	(e) => {
		'use strict';
		var t = e.i(94601),
			r = e.i(3300),
			n = e.i(70285);
		let o = new Date().getFullYear();
		(e.s(
			[
				'Footer',
				0,
				() =>
					(0, t.jsx)('footer', {
						className:
							'border-t border-neutral-800 shadow shadow-neutral-100/10',
						children: (0, t.jsx)('div', {
							className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
							children: (0, t.jsxs)('div', {
								className: 'flex items-start justify-between',
								children: [
									(0, t.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row',
										children: [
											(0, t.jsxs)('p', {
												children: ['© ', o, ' ', r.APP_NAME, '.'],
											}),
											(0, t.jsx)('p', { children: 'All Rights Reserved.' }),
										],
									}),
									(0, t.jsxs)('div', {
										className: 'flex flex-col gap-1 md:flex-row md:gap-4',
										children: [
											(0, t.jsx)(n.default, {
												href: 'https://github.com',
												target: '_blank',
												className: 'text-right',
												children: 'GitHub',
											}),
											(0, t.jsx)(n.default, {
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
					}),
			],
			21662,
		),
			e.s(
				[
					'RadialGradientBackground',
					0,
					() =>
						(0, t.jsx)('div', {
							className:
								'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
							children: (0, t.jsx)('div', {
								className:
									'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
							}),
						}),
				],
				53992,
			));
	},
	5806,
	(e) => {
		'use strict';
		var t = e.i(94601);
		e.s([
			'Heading2',
			0,
			({ children: e = (0, t.jsx)(t.Fragment, {}) }) =>
				(0, t.jsx)('h2', {
					className: 'text-2xl font-extrabold md:text-3xl',
					children: e,
				}),
			'Heading6',
			0,
			({ children: e = (0, t.jsx)(t.Fragment, {}) }) =>
				(0, t.jsx)('h6', {
					className: 'text-sm font-normal md:text-base',
					children: e,
				}),
			'Linear',
			0,
			({ children: e = (0, t.jsx)(t.Fragment, {}) }) =>
				(0, t.jsx)('span', {
					className:
						'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
					children: e,
				}),
		]);
	},
	96874,
	(e) => {
		'use strict';
		var t = e.i(94601);
		e.s([
			'NavbarContainer',
			0,
			({ children: e = (0, t.jsx)(t.Fragment, {}) }) =>
				(0, t.jsx)('nav', {
					className: 'border-b border-neutral-800 shadow shadow-neutral-100/10',
					children: (0, t.jsx)('div', {
						className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
						children: (0, t.jsx)('div', {
							className: 'flex items-center justify-between gap-x-4',
							children: e,
						}),
					}),
				}),
		]);
	},
	3300,
	(e) => {
		'use strict';
		e.s(['APP_NAME', 0, 'micro/saas']);
	},
	89045,
	(e, t, r) => {
		var n = {
				229: function (e) {
					var t,
						r,
						n,
						o = (e.exports = {});
					function a() {
						throw Error('setTimeout has not been defined');
					}
					function s() {
						throw Error('clearTimeout has not been defined');
					}
					try {
						t = 'function' == typeof setTimeout ? setTimeout : a;
					} catch (e) {
						t = a;
					}
					try {
						r = 'function' == typeof clearTimeout ? clearTimeout : s;
					} catch (e) {
						r = s;
					}
					function l(e) {
						if (t === setTimeout) return setTimeout(e, 0);
						if ((t === a || !t) && setTimeout)
							return ((t = setTimeout), setTimeout(e, 0));
						try {
							return t(e, 0);
						} catch (r) {
							try {
								return t.call(null, e, 0);
							} catch (r) {
								return t.call(this, e, 0);
							}
						}
					}
					var i = [],
						u = !1,
						c = -1;
					function d() {
						u &&
							n &&
							((u = !1),
							n.length ? (i = n.concat(i)) : (c = -1),
							i.length && f());
					}
					function f() {
						if (!u) {
							var e = l(d);
							u = !0;
							for (var t = i.length; t; ) {
								for (n = i, i = []; ++c < t; ) n && n[c].run();
								((c = -1), (t = i.length));
							}
							((n = null),
								(u = !1),
								(function (e) {
									if (r === clearTimeout) return clearTimeout(e);
									if ((r === s || !r) && clearTimeout)
										return ((r = clearTimeout), clearTimeout(e));
									try {
										r(e);
									} catch (t) {
										try {
											return r.call(null, e);
										} catch (t) {
											return r.call(this, e);
										}
									}
								})(e));
						}
					}
					function p(e, t) {
						((this.fun = e), (this.array = t));
					}
					function m() {}
					((o.nextTick = function (e) {
						var t = Array(arguments.length - 1);
						if (arguments.length > 1)
							for (var r = 1; r < arguments.length; r++)
								t[r - 1] = arguments[r];
						(i.push(new p(e, t)), 1 !== i.length || u || l(f));
					}),
						(p.prototype.run = function () {
							this.fun.apply(null, this.array);
						}),
						(o.title = 'browser'),
						(o.browser = !0),
						(o.env = {}),
						(o.argv = []),
						(o.version = ''),
						(o.versions = {}),
						(o.on = m),
						(o.addListener = m),
						(o.once = m),
						(o.off = m),
						(o.removeListener = m),
						(o.removeAllListeners = m),
						(o.emit = m),
						(o.prependListener = m),
						(o.prependOnceListener = m),
						(o.listeners = function (e) {
							return [];
						}),
						(o.binding = function (e) {
							throw Error('process.binding is not supported');
						}),
						(o.cwd = function () {
							return '/';
						}),
						(o.chdir = function (e) {
							throw Error('process.chdir is not supported');
						}),
						(o.umask = function () {
							return 0;
						}));
				},
			},
			o = {};
		function a(e) {
			var t = o[e];
			if (void 0 !== t) return t.exports;
			var r = (o[e] = { exports: {} }),
				s = !0;
			try {
				(n[e](r, r.exports, a), (s = !1));
			} finally {
				s && delete o[e];
			}
			return r.exports;
		}
		((a.ab =
			'/ROOT/node_modules/.pnpm/next@16.0.0_@babel+core@7.27.4_@opentelemetry+api@1.4.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
			(t.exports = a(229)));
	},
	41640,
	(e, t, r) => {
		'use strict';
		var n, o;
		t.exports =
			(null == (n = e.g.process) ? void 0 : n.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(89045);
	},
	2879,
	(e, t, r) => {
		'use strict';
		r._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	86234,
	(e, t, r) => {
		'use strict';
		var n = Symbol.for('react.transitional.element');
		function o(e, t, r) {
			var o = null;
			if (
				(void 0 !== r && (o = '' + r),
				void 0 !== t.key && (o = '' + t.key),
				'key' in t)
			)
				for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
			else r = t;
			return {
				$$typeof: n,
				type: e,
				key: o,
				ref: void 0 !== (t = r.ref) ? t : null,
				props: r,
			};
		}
		((r.Fragment = Symbol.for('react.fragment')), (r.jsx = o), (r.jsxs = o));
	},
	94601,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(86234);
	},
	14513,
	(e, t, r) => {
		'use strict';
		var n = e.i(41640),
			o = Symbol.for('react.transitional.element'),
			a = Symbol.for('react.portal'),
			s = Symbol.for('react.fragment'),
			l = Symbol.for('react.strict_mode'),
			i = Symbol.for('react.profiler'),
			u = Symbol.for('react.consumer'),
			c = Symbol.for('react.context'),
			d = Symbol.for('react.forward_ref'),
			f = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			m = Symbol.for('react.lazy'),
			x = Symbol.for('react.activity'),
			h = Symbol.iterator,
			y = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			g = Object.assign,
			b = {};
		function v(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = b),
				(this.updater = r || y));
		}
		function j() {}
		function w(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = b),
				(this.updater = r || y));
		}
		((v.prototype.isReactComponent = {}),
			(v.prototype.setState = function (e, t) {
				if ('object' != typeof e && 'function' != typeof e && null != e)
					throw Error(
						'takes an object of state variables to update or a function which returns an object of state variables.',
					);
				this.updater.enqueueSetState(this, e, t, 'setState');
			}),
			(v.prototype.forceUpdate = function (e) {
				this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
			}),
			(j.prototype = v.prototype));
		var _ = (w.prototype = new j());
		((_.constructor = w), g(_, v.prototype), (_.isPureReactComponent = !0));
		var N = Array.isArray;
		function E() {}
		var S = { H: null, A: null, T: null, S: null },
			k = Object.prototype.hasOwnProperty;
		function P(e, t, r) {
			var n = r.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== n ? n : null,
				props: r,
			};
		}
		function O(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var C = /\/+/g;
		function T(e, t) {
			var r, n;
			return 'object' == typeof e && null !== e && null != e.key
				? ((r = '' + e.key),
					(n = { '=': '=0', ':': '=2' }),
					'$' +
						r.replace(/[=:]/g, function (e) {
							return n[e];
						}))
				: t.toString(36);
		}
		function R(e, t, r) {
			if (null == e) return e;
			var n = [],
				s = 0;
			return (
				!(function e(t, r, n, s, l) {
					var i,
						u,
						c,
						d = typeof t;
					('undefined' === d || 'boolean' === d) && (t = null);
					var f = !1;
					if (null === t) f = !0;
					else
						switch (d) {
							case 'bigint':
							case 'string':
							case 'number':
								f = !0;
								break;
							case 'object':
								switch (t.$$typeof) {
									case o:
									case a:
										f = !0;
										break;
									case m:
										return e((f = t._init)(t._payload), r, n, s, l);
								}
						}
					if (f)
						return (
							(l = l(t)),
							(f = '' === s ? '.' + T(t, 0) : s),
							N(l)
								? ((n = ''),
									null != f && (n = f.replace(C, '$&/') + '/'),
									e(l, r, n, '', function (e) {
										return e;
									}))
								: null != l &&
									(O(l) &&
										((i = l),
										(u =
											n +
											(null == l.key || (t && t.key === l.key)
												? ''
												: ('' + l.key).replace(C, '$&/') + '/') +
											f),
										(l = P(i.type, u, i.props))),
									r.push(l)),
							1
						);
					f = 0;
					var p = '' === s ? '.' : s + ':';
					if (N(t))
						for (var x = 0; x < t.length; x++)
							((d = p + T((s = t[x]), x)), (f += e(s, r, n, d, l)));
					else if (
						'function' ==
						typeof (x =
							null === (c = t) || 'object' != typeof c
								? null
								: 'function' == typeof (c = (h && c[h]) || c['@@iterator'])
									? c
									: null)
					)
						for (t = x.call(t), x = 0; !(s = t.next()).done; )
							((d = p + T((s = s.value), x++)), (f += e(s, r, n, d, l)));
					else if ('object' === d) {
						if ('function' == typeof t.then)
							return e(
								(function (e) {
									switch (e.status) {
										case 'fulfilled':
											return e.value;
										case 'rejected':
											throw e.reason;
										default:
											switch (
												('string' == typeof e.status
													? e.then(E, E)
													: ((e.status = 'pending'),
														e.then(
															function (t) {
																'pending' === e.status &&
																	((e.status = 'fulfilled'), (e.value = t));
															},
															function (t) {
																'pending' === e.status &&
																	((e.status = 'rejected'), (e.reason = t));
															},
														)),
												e.status)
											) {
												case 'fulfilled':
													return e.value;
												case 'rejected':
													throw e.reason;
											}
									}
									throw e;
								})(t),
								r,
								n,
								s,
								l,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (r = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: r) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return f;
				})(e, n, '', '', function (e) {
					return t.call(r, e, s++);
				}),
				n
			);
		}
		function A(e) {
			if (-1 === e._status) {
				var t = e._result;
				((t = t()).then(
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 1), (e._result = t));
					},
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 2), (e._result = t));
					},
				),
					-1 === e._status && ((e._status = 0), (e._result = t)));
			}
			if (1 === e._status) return e._result.default;
			throw e._result;
		}
		var M =
			'function' == typeof reportError
				? reportError
				: function (e) {
						if (
							'object' == typeof window &&
							'function' == typeof window.ErrorEvent
						) {
							var t = new window.ErrorEvent('error', {
								bubbles: !0,
								cancelable: !0,
								message:
									'object' == typeof e &&
									null !== e &&
									'string' == typeof e.message
										? String(e.message)
										: String(e),
								error: e,
							});
							if (!window.dispatchEvent(t)) return;
						} else if (
							'object' == typeof n.default &&
							'function' == typeof n.default.emit
						)
							return void n.default.emit('uncaughtException', e);
						console.error(e);
					};
		((r.Activity = x),
			(r.Children = {
				map: R,
				forEach: function (e, t, r) {
					R(
						e,
						function () {
							t.apply(this, arguments);
						},
						r,
					);
				},
				count: function (e) {
					var t = 0;
					return (
						R(e, function () {
							t++;
						}),
						t
					);
				},
				toArray: function (e) {
					return (
						R(e, function (e) {
							return e;
						}) || []
					);
				},
				only: function (e) {
					if (!O(e))
						throw Error(
							'React.Children.only expected to receive a single React element child.',
						);
					return e;
				},
			}),
			(r.Component = v),
			(r.Fragment = s),
			(r.Profiler = i),
			(r.PureComponent = w),
			(r.StrictMode = l),
			(r.Suspense = f),
			(r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
			(r.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return S.H.useMemoCache(e);
				},
			}),
			(r.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(r.cacheSignal = function () {
				return null;
			}),
			(r.cloneElement = function (e, t, r) {
				if (null == e)
					throw Error(
						'The argument must be a React element, but you passed ' + e + '.',
					);
				var n = g({}, e.props),
					o = e.key;
				if (null != t)
					for (a in (void 0 !== t.key && (o = '' + t.key), t))
						k.call(t, a) &&
							'key' !== a &&
							'__self' !== a &&
							'__source' !== a &&
							('ref' !== a || void 0 !== t.ref) &&
							(n[a] = t[a]);
				var a = arguments.length - 2;
				if (1 === a) n.children = r;
				else if (1 < a) {
					for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
					n.children = s;
				}
				return P(e.type, o, n);
			}),
			(r.createContext = function (e) {
				return (
					((e = {
						$$typeof: c,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
					}).Provider = e),
					(e.Consumer = { $$typeof: u, _context: e }),
					e
				);
			}),
			(r.createElement = function (e, t, r) {
				var n,
					o = {},
					a = null;
				if (null != t)
					for (n in (void 0 !== t.key && (a = '' + t.key), t))
						k.call(t, n) &&
							'key' !== n &&
							'__self' !== n &&
							'__source' !== n &&
							(o[n] = t[n]);
				var s = arguments.length - 2;
				if (1 === s) o.children = r;
				else if (1 < s) {
					for (var l = Array(s), i = 0; i < s; i++) l[i] = arguments[i + 2];
					o.children = l;
				}
				if (e && e.defaultProps)
					for (n in (s = e.defaultProps)) void 0 === o[n] && (o[n] = s[n]);
				return P(e, a, o);
			}),
			(r.createRef = function () {
				return { current: null };
			}),
			(r.forwardRef = function (e) {
				return { $$typeof: d, render: e };
			}),
			(r.isValidElement = O),
			(r.lazy = function (e) {
				return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: A };
			}),
			(r.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(r.startTransition = function (e) {
				var t = S.T,
					r = {};
				S.T = r;
				try {
					var n = e(),
						o = S.S;
					(null !== o && o(r, n),
						'object' == typeof n &&
							null !== n &&
							'function' == typeof n.then &&
							n.then(E, M));
				} catch (e) {
					M(e);
				} finally {
					(null !== t && null !== r.types && (t.types = r.types), (S.T = t));
				}
			}),
			(r.unstable_useCacheRefresh = function () {
				return S.H.useCacheRefresh();
			}),
			(r.use = function (e) {
				return S.H.use(e);
			}),
			(r.useActionState = function (e, t, r) {
				return S.H.useActionState(e, t, r);
			}),
			(r.useCallback = function (e, t) {
				return S.H.useCallback(e, t);
			}),
			(r.useContext = function (e) {
				return S.H.useContext(e);
			}),
			(r.useDebugValue = function () {}),
			(r.useDeferredValue = function (e, t) {
				return S.H.useDeferredValue(e, t);
			}),
			(r.useEffect = function (e, t) {
				return S.H.useEffect(e, t);
			}),
			(r.useEffectEvent = function (e) {
				return S.H.useEffectEvent(e);
			}),
			(r.useId = function () {
				return S.H.useId();
			}),
			(r.useImperativeHandle = function (e, t, r) {
				return S.H.useImperativeHandle(e, t, r);
			}),
			(r.useInsertionEffect = function (e, t) {
				return S.H.useInsertionEffect(e, t);
			}),
			(r.useLayoutEffect = function (e, t) {
				return S.H.useLayoutEffect(e, t);
			}),
			(r.useMemo = function (e, t) {
				return S.H.useMemo(e, t);
			}),
			(r.useOptimistic = function (e, t) {
				return S.H.useOptimistic(e, t);
			}),
			(r.useReducer = function (e, t, r) {
				return S.H.useReducer(e, t, r);
			}),
			(r.useRef = function (e) {
				return S.H.useRef(e);
			}),
			(r.useState = function (e) {
				return S.H.useState(e);
			}),
			(r.useSyncExternalStore = function (e, t, r) {
				return S.H.useSyncExternalStore(e, t, r);
			}),
			(r.useTransition = function () {
				return S.H.useTransition();
			}),
			(r.version = '19.2.0'));
	},
	36960,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(14513);
	},
	87602,
	(e, t, r) => {
		'use strict';
		function n(e) {
			if ('function' != typeof WeakMap) return null;
			var t = new WeakMap(),
				r = new WeakMap();
			return (n = function (e) {
				return e ? r : t;
			})(e);
		}
		r._ = function (e, t) {
			if (!t && e && e.__esModule) return e;
			if (null === e || ('object' != typeof e && 'function' != typeof e))
				return { default: e };
			var r = n(t);
			if (r && r.has(e)) return r.get(e);
			var o = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var s in e)
				if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
					var l = a ? Object.getOwnPropertyDescriptor(e, s) : null;
					l && (l.get || l.set)
						? Object.defineProperty(o, s, l)
						: (o[s] = e[s]);
				}
			return ((o.default = e), r && r.set(e, o), o);
		};
	},
	74159,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			DecodeError: function () {
				return y;
			},
			MiddlewareNotFoundError: function () {
				return j;
			},
			MissingStaticPage: function () {
				return v;
			},
			NormalizeError: function () {
				return g;
			},
			PageNotFoundError: function () {
				return b;
			},
			SP: function () {
				return x;
			},
			ST: function () {
				return h;
			},
			WEB_VITALS: function () {
				return a;
			},
			execOnce: function () {
				return s;
			},
			getDisplayName: function () {
				return d;
			},
			getLocationOrigin: function () {
				return u;
			},
			getURL: function () {
				return c;
			},
			isAbsoluteUrl: function () {
				return i;
			},
			isResSent: function () {
				return f;
			},
			loadGetInitialProps: function () {
				return m;
			},
			normalizeRepeatedSlashes: function () {
				return p;
			},
			stringifyError: function () {
				return w;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let a = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function s(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => l.test(e);
		function u() {
			let { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ':' + r : ''}`;
		}
		function c() {
			let { href: e } = window.location,
				t = u();
			return e.substring(t.length);
		}
		function d(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function f(e) {
			return e.finished || e.headersSent;
		}
		function p(e) {
			let t = e.split('?');
			return (
				t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
				(t[1] ? `?${t.slice(1).join('?')}` : '')
			);
		}
		async function m(e, t) {
			let r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await m(t.Component, t.ctx) }
					: {};
			let n = await e.getInitialProps(t);
			if (r && f(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return n;
		}
		let x = 'undefined' != typeof performance,
			h =
				x &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class y extends Error {}
		class g extends Error {}
		class b extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = `Cannot find module for page: ${e}`));
			}
		}
		class v extends Error {
			constructor(e, t) {
				(super(),
					(this.message = `Failed to load static file for page: ${e} ${t}`));
			}
		}
		class j extends Error {
			constructor() {
				(super(),
					(this.code = 'ENOENT'),
					(this.message = 'Cannot find the middleware module'));
			}
		}
		function w(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	6493,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useIntersection', {
				enumerable: !0,
				get: function () {
					return i;
				},
			}));
		let n = e.r(36960),
			o = e.r(18649),
			a = 'function' == typeof IntersectionObserver,
			s = new Map(),
			l = [];
		function i({ rootRef: e, rootMargin: t, disabled: r }) {
			let i = r || !a,
				[u, c] = (0, n.useState)(!1),
				d = (0, n.useRef)(null),
				f = (0, n.useCallback)((e) => {
					d.current = e;
				}, []);
			return (
				(0, n.useEffect)(() => {
					if (a) {
						if (i || u) return;
						let r = d.current;
						if (r && r.tagName)
							return (function (e, t, r) {
								let {
									id: n,
									observer: o,
									elements: a,
								} = (function (e) {
									let t,
										r = { root: e.root || null, margin: e.rootMargin || '' },
										n = l.find(
											(e) => e.root === r.root && e.margin === r.margin,
										);
									if (n && (t = s.get(n))) return t;
									let o = new Map();
									return (
										(t = {
											id: r,
											observer: new IntersectionObserver((e) => {
												e.forEach((e) => {
													let t = o.get(e.target),
														r = e.isIntersecting || e.intersectionRatio > 0;
													t && r && t(r);
												});
											}, e),
											elements: o,
										}),
										l.push(r),
										s.set(r, t),
										t
									);
								})(r);
								return (
									a.set(e, t),
									o.observe(e),
									function () {
										if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
											(o.disconnect(), s.delete(n));
											let e = l.findIndex(
												(e) => e.root === n.root && e.margin === n.margin,
											);
											e > -1 && l.splice(e, 1);
										}
									}
								);
							})(r, (e) => e && c(e), { root: e?.current, rootMargin: t });
					} else if (!u) {
						let e = (0, o.requestIdleCallback)(() => c(!0));
						return () => (0, o.cancelIdleCallback)(e);
					}
				}, [i, t, e, u, d.current]),
				[
					f,
					u,
					(0, n.useCallback)(() => {
						c(!1);
					}, []),
				]
			);
		}
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	99793,
	(e, t, r) => {
		'use strict';
		function n(e, t, r, n) {
			return !1;
		}
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'getDomainLocale', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}),
			e.r(34041),
			('function' == typeof r.default ||
				('object' == typeof r.default && null !== r.default)) &&
				void 0 === r.default.__esModule &&
				(Object.defineProperty(r.default, '__esModule', { value: !0 }),
				Object.assign(r.default, r),
				(t.exports = r.default)));
	},
	48976,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useMergedRef', {
				enumerable: !0,
				get: function () {
					return o;
				},
			}));
		let n = e.r(36960);
		function o(e, t) {
			let r = (0, n.useRef)(null),
				o = (0, n.useRef)(null);
			return (0, n.useCallback)(
				(n) => {
					if (null === n) {
						let e = r.current;
						e && ((r.current = null), e());
						let t = o.current;
						t && ((o.current = null), t());
					} else (e && (r.current = a(e, n)), t && (o.current = a(t, n)));
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
				let r = e(t);
				return 'function' == typeof r ? r : () => e(null);
			}
		}
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	93106,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'errorOnce', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = (e) => {};
	},
	62611,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			default: function () {
				return N;
			},
			useLinkStatus: function () {
				return _;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let a = e.r(87602),
			s = e.r(94601),
			l = a._(e.r(36960)),
			i = e.r(59145),
			u = e.r(98128),
			c = e.r(62623),
			d = e.r(74159),
			f = e.r(74624),
			p = e.r(32228),
			m = e.r(6493),
			x = e.r(99793),
			h = e.r(15158),
			y = e.r(48976);
		e.r(93106);
		let g = new Set();
		function b(e, t, r, n) {
			if ('undefined' != typeof window && (0, u.isLocalURL)(t)) {
				if (!n.bypassPrefetchedCheck) {
					let o =
						t +
						'%' +
						r +
						'%' +
						(void 0 !== n.locale
							? n.locale
							: 'locale' in e
								? e.locale
								: void 0);
					if (g.has(o)) return;
					g.add(o);
				}
				e.prefetch(t, r, n).catch((e) => {});
			}
		}
		function v(e) {
			return 'string' == typeof e ? e : (0, c.formatUrl)(e);
		}
		let j = l.default.forwardRef(function (e, t) {
				let r,
					n,
					{
						href: o,
						as: a,
						children: c,
						prefetch: g = null,
						passHref: j,
						replace: w,
						shallow: _,
						scroll: N,
						locale: E,
						onClick: S,
						onNavigate: k,
						onMouseEnter: P,
						onTouchStart: O,
						legacyBehavior: C = !1,
						...T
					} = e;
				((r = c),
					C &&
						('string' == typeof r || 'number' == typeof r) &&
						(r = (0, s.jsx)('a', { children: r })));
				let R = l.default.useContext(p.RouterContext),
					A = !1 !== g,
					{ href: M, as: H } = l.default.useMemo(() => {
						if (!R) {
							let e = v(o);
							return { href: e, as: a ? v(a) : e };
						}
						let [e, t] = (0, i.resolveHref)(R, o, !0);
						return { href: e, as: a ? (0, i.resolveHref)(R, a) : t || e };
					}, [R, o, a]),
					I = l.default.useRef(M),
					L = l.default.useRef(H);
				C && (n = l.default.Children.only(r));
				let $ = C ? n && 'object' == typeof n && n.ref : t,
					[U, F, D] = (0, m.useIntersection)({ rootMargin: '200px' }),
					q = l.default.useCallback(
						(e) => {
							((L.current !== H || I.current !== M) &&
								(D(), (L.current = H), (I.current = M)),
								U(e));
						},
						[H, M, D, U],
					),
					B = (0, y.useMergedRef)(q, $);
				l.default.useEffect(() => {
					!R || (F && A && b(R, M, H, { locale: E }));
				}, [H, M, F, E, A, R?.locale, R]);
				let z = {
					ref: B,
					onClick(e) {
						(C || 'function' != typeof S || S(e),
							C &&
								n.props &&
								'function' == typeof n.props.onClick &&
								n.props.onClick(e),
							!R ||
								e.defaultPrevented ||
								(function (e, t, r, n, o, a, s, l, i) {
									let c,
										{ nodeName: d } = e.currentTarget;
									if (
										!(
											('A' === d.toUpperCase() &&
												(((c = e.currentTarget.getAttribute('target')) &&
													'_self' !== c) ||
													e.metaKey ||
													e.ctrlKey ||
													e.shiftKey ||
													e.altKey ||
													(e.nativeEvent && 2 === e.nativeEvent.which))) ||
											e.currentTarget.hasAttribute('download')
										)
									) {
										if (!(0, u.isLocalURL)(r)) {
											o && (e.preventDefault(), location.replace(r));
											return;
										}
										(e.preventDefault(),
											(() => {
												if (i) {
													let e = !1;
													if (
														(i({
															preventDefault: () => {
																e = !0;
															},
														}),
														e)
													)
														return;
												}
												let e = s ?? !0;
												'beforePopState' in t
													? t[o ? 'replace' : 'push'](r, n, {
															shallow: a,
															locale: l,
															scroll: e,
														})
													: t[o ? 'replace' : 'push'](n || r, { scroll: e });
											})());
									}
								})(e, R, M, H, w, _, N, E, k));
					},
					onMouseEnter(e) {
						(C || 'function' != typeof P || P(e),
							C &&
								n.props &&
								'function' == typeof n.props.onMouseEnter &&
								n.props.onMouseEnter(e),
							R &&
								b(R, M, H, {
									locale: E,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
					onTouchStart: function (e) {
						(C || 'function' != typeof O || O(e),
							C &&
								n.props &&
								'function' == typeof n.props.onTouchStart &&
								n.props.onTouchStart(e),
							R &&
								b(R, M, H, {
									locale: E,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
				};
				if ((0, d.isAbsoluteUrl)(H)) z.href = H;
				else if (!C || j || ('a' === n.type && !('href' in n.props))) {
					let e = void 0 !== E ? E : R?.locale;
					z.href =
						(R?.isLocaleDomain &&
							(0, x.getDomainLocale)(H, e, R?.locales, R?.domainLocales)) ||
						(0, h.addBasePath)((0, f.addLocale)(H, e, R?.defaultLocale));
				}
				return C
					? l.default.cloneElement(n, z)
					: (0, s.jsx)('a', { ...T, ...z, children: r });
			}),
			w = (0, l.createContext)({ pending: !1 }),
			_ = () => (0, l.useContext)(w),
			N = j;
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	70285,
	(e, t, r) => {
		t.exports = e.r(62611);
	},
	77001,
	(e) => {
		'use strict';
		var t = e.i(94601);
		e.s([
			'Button',
			0,
			({
				size: e = 'md',
				type: r = 'button',
				disabled: n = !1,
				onClick: o = () => {},
				children: a = (0, t.jsx)(t.Fragment, {}),
			}) =>
				'sm' === e
					? (0, t.jsx)('button', {
							type: r,
							disabled: n,
							onClick: o,
							className:
								'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
							children: a,
						})
					: 'lg' === e
						? (0, t.jsx)('button', {
								type: r,
								disabled: n,
								onClick: o,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
								children: a,
							})
						: (0, t.jsx)('button', {
								type: r,
								disabled: n,
								onClick: o,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
								children: a,
							}),
			'OutlineButton',
			0,
			({
				size: e = 'md',
				type: r = 'button',
				disabled: n = !1,
				onClick: o = () => {},
				children: a = (0, t.jsx)(t.Fragment, {}),
			}) =>
				'sm' === e
					? (0, t.jsx)('div', {
							className:
								'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
							children: (0, t.jsx)('button', {
								type: r,
								disabled: n,
								onClick: o,
								className:
									'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm',
								children: a,
							}),
						})
					: 'lg' === e
						? (0, t.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, t.jsx)('button', {
									type: r,
									disabled: n,
									onClick: o,
									className:
										'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
									children: a,
								}),
							})
						: (0, t.jsx)('div', {
								className:
									'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
								children: (0, t.jsx)('button', {
									type: r,
									disabled: n,
									onClick: o,
									className:
										'w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
									children: a,
								}),
							}),
		]);
	},
	5980,
	(e) => {
		'use strict';
		var t = e.i(94601),
			r = e.i(48063),
			n = e.i(36960);
		let o = (0, n.createContext)(void 0);
		function a() {
			let e = (0, n.useContext)(o);
			if (!e) throw Error('useUser must be used within a UserProvider');
			return e;
		}
		e.s([
			'UserProvider',
			0,
			({ children: e }) => {
				let [
						{ isAuthenticated: a = !1, isLoading: s = !1, user: l = null },
						i,
					] = (0, n.useState)({
						isAuthenticated: !1,
						isLoading: !1,
						user: null,
					}),
					u = async () => {
						i((e) => ({ ...e, isLoading: !0 }));
						try {
							let { user: e } = await r.trpcClient.app.user.get.query();
							i((t) => ({ ...t, isAuthenticated: !0, user: e }));
						} catch (e) {
							(console.error(e),
								i((e) => ({ ...e, isAuthenticated: !1, user: null })));
						} finally {
							i((e) => ({ ...e, isLoading: !1 }));
						}
					},
					c = async () => {
						try {
							let { success: e } =
								await r.trpcClient.auth.user.signOut.mutate();
							e &&
								(alert('Sign Out Successfully'),
								i((e) => ({ ...e, isAuthenticated: !1, user: null })));
						} catch (e) {
							console.error(e);
						}
					};
				(0, n.useEffect)(() => {
					u();
				}, []);
				let d = (0, n.useMemo)(
					() => ({
						isAuthenticated: a,
						isLoading: s,
						user: l,
						refresh: u,
						signOut: c,
					}),
					[a, s, l, u, c],
				);
				return (0, t.jsx)(o.Provider, { value: d, children: e });
			},
			'useUser',
			() => a,
		]);
	},
	87856,
	(e) => {
		'use strict';
		var t = e.i(94601),
			r = e.i(21662),
			n = e.i(53992),
			o = e.i(77001),
			a = e.i(5806),
			s = e.i(70285);
		let l = ({ title: e = '', description: r = '', action: n = '' }) =>
			(0, t.jsx)('section', {
				className:
					'container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8',
				children: (0, t.jsxs)('div', {
					className: 'mx-auto w-full max-w-2xl space-y-4 md:space-y-8',
					children: [
						(0, t.jsxs)('div', {
							className: 'flex flex-col gap-y-4 text-center',
							children: [
								(0, t.jsx)(a.Heading2, { children: e }),
								(0, t.jsx)(a.Heading6, { children: r }),
							],
						}),
						(0, t.jsx)('div', {
							className: 'flex w-full items-center justify-center',
							children: (0, t.jsx)(s.default, {
								href: '/auth/sign-up',
								children: (0, t.jsx)(o.Button, { size: 'lg', children: n }),
							}),
						}),
					],
				}),
			});
		var i = e.i(36960);
		let u = ({ title: e = '', description: r = '' }) => {
				let [n, o] = (0, i.useState)('');
				return (
					(0, i.useEffect)(() => {
						o(window.origin);
					}, []),
					(0, t.jsxs)('section', {
						className:
							'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
						children: [
							(0, t.jsxs)('div', {
								className: 'flex flex-col gap-y-4 text-center',
								children: [
									(0, t.jsx)(a.Heading2, { children: e }),
									(0, t.jsx)(a.Heading6, { children: r }),
								],
							}),
							(0, t.jsxs)('div', {
								className:
									'overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
								children: [
									(0, t.jsxs)('div', {
										className:
											'flex items-center gap-x-4 border-b border-neutral-800 p-2 md:p-4',
										children: [
											(0, t.jsxs)('div', {
												className: 'flex gap-x-2',
												children: [
													(0, t.jsx)('span', {
														className: 'h-3 w-3 rounded-full bg-red-500',
													}),
													(0, t.jsx)('span', {
														className: 'h-3 w-3 rounded-full bg-yellow-500',
													}),
													(0, t.jsx)('span', {
														className: 'h-3 w-3 rounded-full bg-green-500',
													}),
												],
											}),
											(0, t.jsx)('div', {
												className:
													'grow items-center truncate rounded border border-neutral-800 px-2 py-1 text-sm text-neutral-100',
												children: n,
											}),
										],
									}),
									(0, t.jsx)('div', {
										className: 'aspect-[9/16] w-full md:aspect-[16/9]',
									}),
								],
							}),
						],
					})
				);
			},
			c = ({ title: e = '', description: r = '', features: n = {} }) =>
				(0, t.jsxs)('section', {
					className:
						'container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8',
					children: [
						(0, t.jsxs)('div', {
							className: 'flex flex-col gap-y-4 text-center',
							children: [
								(0, t.jsx)(a.Heading2, { children: e }),
								(0, t.jsx)(a.Heading6, { children: r }),
							],
						}),
						(0, t.jsx)('div', {
							className: 'grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8',
							children: Object.entries(n)
								.map(([e, t]) => ({ id: e, ...t }))
								.map(
									({
										id: e = '',
										emoji: r = '',
										title: n = '',
										description: o = '',
									}) =>
										(0, t.jsx)(
											'div',
											{
												className: 'col-span-1',
												children: (0, t.jsxs)('div', {
													className:
														'flex flex-col items-center justify-center gap-y-2 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 shadow shadow-neutral-100/10 transition-all hover:scale-110 md:gap-y-4',
													children: [
														(0, t.jsx)('span', {
															className: 'text-4xl',
															children: r,
														}),
														(0, t.jsx)('h3', {
															className: 'text-bold text-xl',
															children: n,
														}),
														(0, t.jsx)('p', {
															className: 'text-center text-sm text-neutral-400',
															children: o,
														}),
													],
												}),
											},
											e,
										),
								),
						}),
					],
				}),
			d = ({ title: e = '', description: r = '', questions: n = {} }) =>
				(0, t.jsxs)('section', {
					className:
						'container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8',
					children: [
						(0, t.jsxs)('div', {
							className: 'flex flex-col gap-y-4 text-center',
							children: [
								(0, t.jsx)(a.Heading2, { children: e }),
								(0, t.jsx)(a.Heading6, { children: r }),
							],
						}),
						(0, t.jsx)('div', {
							className:
								'divide-y divide-neutral-800 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10',
							children: Object.entries(n)
								.map(([e, t]) => ({ id: e, ...t }))
								.map(({ id: e = '', question: r = '', answer: n = '' }, o) =>
									(0, t.jsxs)(
										'details',
										{
											className: 'group',
											children: [
												(0, t.jsxs)('summary', {
													className:
														'flex cursor-pointer list-none items-center justify-between px-4 py-3',
													children: [
														(0, t.jsxs)('span', {
															className:
																'font-semibold text-neutral-900 dark:text-neutral-100',
															children: [o + 1, '. ', r],
														}),
														(0, t.jsxs)('span', {
															className:
																'text-lg text-neutral-600 transition-all duration-300 group-open:rotate-180 dark:text-neutral-400',
															children: [
																(0, t.jsx)('span', {
																	className: 'group-open:hidden',
																	children: '+',
																}),
																(0, t.jsx)('span', {
																	className: 'hidden group-open:inline',
																	children: '-',
																}),
															],
														}),
													],
												}),
												(0, t.jsx)('div', {
													className:
														'px-4 pb-4 text-neutral-600 dark:text-neutral-400',
													children: n,
												}),
											],
										},
										e,
									),
								),
						}),
					],
				});
		var f = e.i(3300),
			p = e.i(48063);
		let m = async (e) => {
				try {
					return { data: await e, error: null };
				} catch (e) {
					return { data: null, error: e };
				}
			},
			x = ({ description: e = '' }) => {
				let [
					{
						loading: r = !1,
						prompt: n = 'Explain how AI works in a few words',
						answer: s = '',
					},
					l,
				] = (0, i.useState)({
					loading: !1,
					prompt: 'Explain how AI works in a few words',
					answer: '',
				});
				return (0, t.jsx)('section', {
					className: 'border-b border-neutral-800 pb-8 md:pb-16',
					children: (0, t.jsx)('div', {
						className: 'container mx-auto px-4 py-8 md:px-8 md:py-16',
						children: (0, t.jsxs)('div', {
							className:
								'mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8',
							children: [
								(0, t.jsx)('h1', {
									className: 'text-center text-5xl font-black md:text-6xl',
									children: (0, t.jsx)(a.Linear, { children: f.APP_NAME }),
								}),
								(0, t.jsx)('p', {
									className: 'text-center text-base md:text-lg',
									children: e,
								}),
								(0, t.jsx)('div', {
									className:
										'mx-auto w-full max-w-lg rounded-full shadow md:shadow-purple-900',
									children: (0, t.jsx)('div', {
										className:
											'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
										children: (0, t.jsxs)('div', {
											className: 'flex rounded-full bg-neutral-900 p-1 md:p-2',
											children: [
												(0, t.jsx)('input', {
													id: 'prompt',
													className:
														'grow rounded-full border-0 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
													value: n,
													onChange: (e) => {
														l((t) => ({ ...t, prompt: e.target.value }));
													},
												}),
												(0, t.jsx)(o.Button, {
													disabled: r,
													onClick: async () => {
														l((e) => ({ ...e, loading: !0 }));
														let { data: e, error: t } = await m(
															p.trpcClient.app.gemini.generate.mutate({
																prompt: n,
															}),
														);
														if ((l((e) => ({ ...e, loading: !1 })), t)) {
															(console.error(t), alert(t.message));
															return;
														}
														if (!e) return void alert('Invalid Response Data');
														let r =
															e.candidates.at(0)?.content.parts.at(0)?.text ??
															'';
														r
															? l((e) => ({ ...e, answer: r }))
															: alert('Invalid Answer');
													},
													children: r ? 'Loading' : 'Search',
												}),
											],
										}),
									}),
								}),
								!r && s.length > 0
									? (0, t.jsx)('p', { children: s })
									: (0, t.jsx)(t.Fragment, {}),
							],
						}),
					}),
				});
			};
		var h = e.i(5980),
			y = e.i(96874);
		let g = () => {
				let { isAuthenticated: e = !1, user: r, signOut: n } = (0, h.useUser)();
				return (0, t.jsxs)(y.NavbarContainer, {
					children: [
						(0, t.jsx)(s.default, {
							href: '/',
							className: 'text-xl font-black whitespace-nowrap',
							children: (0, t.jsx)(a.Linear, { children: f.APP_NAME }),
						}),
						e &&
							(0, t.jsxs)('div', {
								className: 'flex items-center gap-x-2 md:gap-x-4',
								children: [
									(0, t.jsx)('p', {
										className: 'w-12 truncate text-right md:w-48',
										children: r?.email ?? '',
									}),
									(0, t.jsx)(o.Button, { onClick: n, children: 'Sign Out' }),
								],
							}),
						!e &&
							(0, t.jsxs)('div', {
								className: 'flex items-center gap-x-2 md:gap-x-4',
								children: [
									(0, t.jsx)(s.default, {
										href: '/auth/sign-in',
										children: (0, t.jsx)(o.OutlineButton, {
											children: 'Sign In',
										}),
									}),
									(0, t.jsx)(s.default, {
										href: '/auth/sign-up',
										children: (0, t.jsx)(o.Button, { children: 'Sign Up' }),
									}),
								],
							}),
					],
				});
			},
			b = ({ quote: e = '', source: r = '' }) =>
				(0, t.jsx)('section', {
					className:
						'container mx-auto flex flex-col gap-y-8 px-4 py-8 md:gap-y-16 md:px-8 md:py-16',
					children: (0, t.jsx)('div', {
						className: 'mx-auto w-full max-w-2xl',
						children: (0, t.jsxs)('div', {
							className:
								'flex flex-col items-center justify-center gap-y-4 md:gap-y-8',
							children: [
								(0, t.jsx)('p', {
									className: 'text-center text-2xl font-medium',
									children: e,
								}),
								(0, t.jsxs)('p', { children: ['- ', r, ' -'] }),
							],
						}),
					}),
				}),
			v = () => {
				let e = 'Features',
					o =
						'Everything you need to launch and scale your micro SaaS — zero boilerplate, maximum speed.',
					a = {
						authentication: {
							emoji: '🔑',
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
							emoji: '🚀',
							title: 'Seamless Paddle Payments',
							description:
								'Integrated subscription billing with Paddle — global taxes, compliance, and invoicing handled for you.',
						},
					},
					s = 'How to Use',
					i = 'See it in action — your SaaS, ready to launch in minutes.',
					f =
						'"This template saved me weeks of boring setup work. I had my app accepting payments on day one! Highly recommended for solo founders and indie hackers."',
					p = 'Frequently Asked Questions',
					m =
						"Got questions? We've got answers to help you launch with confidence.",
					h = {
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
					y = 'Get Started for Free',
					v =
						'Join today and see how quickly you can launch your micro SaaS. Sign up in seconds — no credit card required.',
					j = 'Sign Up Now';
				return (0, t.jsxs)('div', {
					className:
						'scrollbar-none flex h-screen flex-col gap-y-8 overflow-y-auto md:gap-y-16',
					children: [
						(0, t.jsx)(n.RadialGradientBackground, {}),
						(0, t.jsx)(g, {}),
						(0, t.jsxs)('main', {
							className: 'flex flex-col gap-y-8 md:gap-y-16',
							children: [
								(0, t.jsx)(x, {
									description:
										'Kickstart your SaaS faster with secure authentication and hassle-free subscription payments powered by Paddle.',
								}),
								(0, t.jsxs)('div', {
									className: 'flex flex-col gap-y-8 md:gap-y-16',
									children: [
										(0, t.jsx)(c, { title: e, description: o, features: a }),
										(0, t.jsx)(u, { title: s, description: i }),
										(0, t.jsx)(b, { quote: f, source: f }),
										(0, t.jsx)(d, { title: p, description: m, questions: h }),
										(0, t.jsx)(l, { title: y, description: v, action: j }),
									],
								}),
							],
						}),
						(0, t.jsx)(r.Footer, {}),
					],
				});
			};
		e.s(['default', 0, () => (0, t.jsx)(v, {})], 87856);
	},
	55075,
	(e, t, r) => {
		((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(87856)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push(['/']);
				}));
	},
	30830,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/618fb8cba5791a6d.js'].map((t) => e.l(t)),
			).then(() => t(65358)),
		);
	},
	41165,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/e4fc12354b51efc8.js'].map((t) => e.l(t)),
			).then(() => t(81475)),
		);
	},
]);
