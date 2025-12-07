(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	91468,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = e.r(2879)._(e.r(24412)).default.createContext({});
	},
	18037,
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
	96874,
	(e) => {
		'use strict';
		var t = e.i(28626);
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
	5806,
	(e) => {
		'use strict';
		var t = e.i(28626);
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
	21662,
	53992,
	(e) => {
		'use strict';
		var t = e.i(28626),
			r = e.i(3300),
			n = e.i(80844);
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
	3300,
	(e) => {
		'use strict';
		e.s(['APP_NAME', 0, 'micro/saas']);
	},
	43641,
	(e, t, r) => {
		var n = {
				229: function (e) {
					var t,
						r,
						n,
						o = (e.exports = {});
					function u() {
						throw Error('setTimeout has not been defined');
					}
					function l() {
						throw Error('clearTimeout has not been defined');
					}
					try {
						t = 'function' == typeof setTimeout ? setTimeout : u;
					} catch (e) {
						t = u;
					}
					try {
						r = 'function' == typeof clearTimeout ? clearTimeout : l;
					} catch (e) {
						r = l;
					}
					function a(e) {
						if (t === setTimeout) return setTimeout(e, 0);
						if ((t === u || !t) && setTimeout)
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
						s = !1,
						c = -1;
					function f() {
						s &&
							n &&
							((s = !1),
							n.length ? (i = n.concat(i)) : (c = -1),
							i.length && d());
					}
					function d() {
						if (!s) {
							var e = a(f);
							s = !0;
							for (var t = i.length; t; ) {
								for (n = i, i = []; ++c < t; ) n && n[c].run();
								((c = -1), (t = i.length));
							}
							((n = null),
								(s = !1),
								(function (e) {
									if (r === clearTimeout) return clearTimeout(e);
									if ((r === l || !r) && clearTimeout)
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
						(i.push(new p(e, t)), 1 !== i.length || s || a(d));
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
		function u(e) {
			var t = o[e];
			if (void 0 !== t) return t.exports;
			var r = (o[e] = { exports: {} }),
				l = !0;
			try {
				(n[e](r, r.exports, u), (l = !1));
			} finally {
				l && delete o[e];
			}
			return r.exports;
		}
		((u.ab =
			'/ROOT/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_@opentelemetry+api@1.4.1_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/process/'),
			(t.exports = u(229)));
	},
	53288,
	(e, t, r) => {
		'use strict';
		var n, o;
		t.exports =
			(null == (n = e.g.process) ? void 0 : n.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(43641);
	},
	2879,
	(e, t, r) => {
		'use strict';
		r._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	91639,
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
				for (var u in ((r = {}), t)) 'key' !== u && (r[u] = t[u]);
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
	28626,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(91639);
	},
	70307,
	(e, t, r) => {
		'use strict';
		var n = e.i(53288),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			l = Symbol.for('react.fragment'),
			a = Symbol.for('react.strict_mode'),
			i = Symbol.for('react.profiler'),
			s = Symbol.for('react.consumer'),
			c = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			d = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			m = Symbol.for('react.lazy'),
			y = Symbol.for('react.activity'),
			h = Symbol.iterator,
			b = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			g = Object.assign,
			x = {};
		function v(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = x),
				(this.updater = r || b));
		}
		function _() {}
		function j(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = x),
				(this.updater = r || b));
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
			(_.prototype = v.prototype));
		var w = (j.prototype = new _());
		((w.constructor = j), g(w, v.prototype), (w.isPureReactComponent = !0));
		var E = Array.isArray;
		function P() {}
		var S = { H: null, A: null, T: null, S: null },
			N = Object.prototype.hasOwnProperty;
		function O(e, t, r) {
			var n = r.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== n ? n : null,
				props: r,
			};
		}
		function k(e) {
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
				l = 0;
			return (
				!(function e(t, r, n, l, a) {
					var i,
						s,
						c,
						f = typeof t;
					('undefined' === f || 'boolean' === f) && (t = null);
					var d = !1;
					if (null === t) d = !0;
					else
						switch (f) {
							case 'bigint':
							case 'string':
							case 'number':
								d = !0;
								break;
							case 'object':
								switch (t.$$typeof) {
									case o:
									case u:
										d = !0;
										break;
									case m:
										return e((d = t._init)(t._payload), r, n, l, a);
								}
						}
					if (d)
						return (
							(a = a(t)),
							(d = '' === l ? '.' + T(t, 0) : l),
							E(a)
								? ((n = ''),
									null != d && (n = d.replace(C, '$&/') + '/'),
									e(a, r, n, '', function (e) {
										return e;
									}))
								: null != a &&
									(k(a) &&
										((i = a),
										(s =
											n +
											(null == a.key || (t && t.key === a.key)
												? ''
												: ('' + a.key).replace(C, '$&/') + '/') +
											d),
										(a = O(i.type, s, i.props))),
									r.push(a)),
							1
						);
					d = 0;
					var p = '' === l ? '.' : l + ':';
					if (E(t))
						for (var y = 0; y < t.length; y++)
							((f = p + T((l = t[y]), y)), (d += e(l, r, n, f, a)));
					else if (
						'function' ==
						typeof (y =
							null === (c = t) || 'object' != typeof c
								? null
								: 'function' == typeof (c = (h && c[h]) || c['@@iterator'])
									? c
									: null)
					)
						for (t = y.call(t), y = 0; !(l = t.next()).done; )
							((f = p + T((l = l.value), y++)), (d += e(l, r, n, f, a)));
					else if ('object' === f) {
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
													? e.then(P, P)
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
								l,
								a,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (r = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: r) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
				})(e, n, '', '', function (e) {
					return t.call(r, e, l++);
				}),
				n
			);
		}
		function M(e) {
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
		var A =
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
		((r.Activity = y),
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
					if (!k(e))
						throw Error(
							'React.Children.only expected to receive a single React element child.',
						);
					return e;
				},
			}),
			(r.Component = v),
			(r.Fragment = l),
			(r.Profiler = i),
			(r.PureComponent = j),
			(r.StrictMode = a),
			(r.Suspense = d),
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
					for (u in (void 0 !== t.key && (o = '' + t.key), t))
						N.call(t, u) &&
							'key' !== u &&
							'__self' !== u &&
							'__source' !== u &&
							('ref' !== u || void 0 !== t.ref) &&
							(n[u] = t[u]);
				var u = arguments.length - 2;
				if (1 === u) n.children = r;
				else if (1 < u) {
					for (var l = Array(u), a = 0; a < u; a++) l[a] = arguments[a + 2];
					n.children = l;
				}
				return O(e.type, o, n);
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
					(e.Consumer = { $$typeof: s, _context: e }),
					e
				);
			}),
			(r.createElement = function (e, t, r) {
				var n,
					o = {},
					u = null;
				if (null != t)
					for (n in (void 0 !== t.key && (u = '' + t.key), t))
						N.call(t, n) &&
							'key' !== n &&
							'__self' !== n &&
							'__source' !== n &&
							(o[n] = t[n]);
				var l = arguments.length - 2;
				if (1 === l) o.children = r;
				else if (1 < l) {
					for (var a = Array(l), i = 0; i < l; i++) a[i] = arguments[i + 2];
					o.children = a;
				}
				if (e && e.defaultProps)
					for (n in (l = e.defaultProps)) void 0 === o[n] && (o[n] = l[n]);
				return O(e, u, o);
			}),
			(r.createRef = function () {
				return { current: null };
			}),
			(r.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(r.isValidElement = k),
			(r.lazy = function (e) {
				return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: M };
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
							n.then(P, A));
				} catch (e) {
					A(e);
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
			(r.version = '19.2.1'));
	},
	24412,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(70307);
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
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var l in e)
				if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
					var a = u ? Object.getOwnPropertyDescriptor(e, l) : null;
					a && (a.get || a.set)
						? Object.defineProperty(o, l, a)
						: (o[l] = e[l]);
				}
			return ((o.default = e), r && r.set(e, o), o);
		};
	},
	15715,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			DecodeError: function () {
				return b;
			},
			MiddlewareNotFoundError: function () {
				return _;
			},
			MissingStaticPage: function () {
				return v;
			},
			NormalizeError: function () {
				return g;
			},
			PageNotFoundError: function () {
				return x;
			},
			SP: function () {
				return y;
			},
			ST: function () {
				return h;
			},
			WEB_VITALS: function () {
				return u;
			},
			execOnce: function () {
				return l;
			},
			getDisplayName: function () {
				return f;
			},
			getLocationOrigin: function () {
				return s;
			},
			getURL: function () {
				return c;
			},
			isAbsoluteUrl: function () {
				return i;
			},
			isResSent: function () {
				return d;
			},
			loadGetInitialProps: function () {
				return m;
			},
			normalizeRepeatedSlashes: function () {
				return p;
			},
			stringifyError: function () {
				return j;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let u = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function l(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => a.test(e);
		function s() {
			let { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ':' + r : ''}`;
		}
		function c() {
			let { href: e } = window.location,
				t = s();
			return e.substring(t.length);
		}
		function f(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function d(e) {
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
			if (r && d(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return n;
		}
		let y = 'undefined' != typeof performance,
			h =
				y &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class b extends Error {}
		class g extends Error {}
		class x extends Error {
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
		class _ extends Error {
			constructor() {
				(super(),
					(this.code = 'ENOENT'),
					(this.message = 'Cannot find the middleware module'));
			}
		}
		function j(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	77001,
	(e) => {
		'use strict';
		var t = e.i(28626);
		e.s([
			'Button',
			0,
			({
				size: e = 'md',
				type: r = 'button',
				disabled: n = !1,
				onClick: o = () => {},
				children: u = (0, t.jsx)(t.Fragment, {}),
			}) =>
				'sm' === e
					? (0, t.jsx)('button', {
							type: r,
							disabled: n,
							onClick: o,
							className:
								'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm',
							children: u,
						})
					: 'lg' === e
						? (0, t.jsx)('button', {
								type: r,
								disabled: n,
								onClick: o,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
								children: u,
							})
						: (0, t.jsx)('button', {
								type: r,
								disabled: n,
								onClick: o,
								className:
									'cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
								children: u,
							}),
			'OutlineButton',
			0,
			({
				size: e = 'md',
				type: r = 'button',
				disabled: n = !1,
				onClick: o = () => {},
				children: u = (0, t.jsx)(t.Fragment, {}),
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
								children: u,
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
									children: u,
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
									children: u,
								}),
							}),
		]);
	},
	59838,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useIntersection', {
				enumerable: !0,
				get: function () {
					return i;
				},
			}));
		let n = e.r(24412),
			o = e.r(73358),
			u = 'function' == typeof IntersectionObserver,
			l = new Map(),
			a = [];
		function i({ rootRef: e, rootMargin: t, disabled: r }) {
			let i = r || !u,
				[s, c] = (0, n.useState)(!1),
				f = (0, n.useRef)(null),
				d = (0, n.useCallback)((e) => {
					f.current = e;
				}, []);
			return (
				(0, n.useEffect)(() => {
					if (u) {
						if (i || s) return;
						let r = f.current;
						if (r && r.tagName)
							return (function (e, t, r) {
								let {
									id: n,
									observer: o,
									elements: u,
								} = (function (e) {
									let t,
										r = { root: e.root || null, margin: e.rootMargin || '' },
										n = a.find(
											(e) => e.root === r.root && e.margin === r.margin,
										);
									if (n && (t = l.get(n))) return t;
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
										a.push(r),
										l.set(r, t),
										t
									);
								})(r);
								return (
									u.set(e, t),
									o.observe(e),
									function () {
										if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
											(o.disconnect(), l.delete(n));
											let e = a.findIndex(
												(e) => e.root === n.root && e.margin === n.margin,
											);
											e > -1 && a.splice(e, 1);
										}
									}
								);
							})(r, (e) => e && c(e), { root: e?.current, rootMargin: t });
					} else if (!s) {
						let e = (0, o.requestIdleCallback)(() => c(!0));
						return () => (0, o.cancelIdleCallback)(e);
					}
				}, [i, t, e, s, f.current]),
				[
					d,
					s,
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
	81573,
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
			e.r(1340),
			('function' == typeof r.default ||
				('object' == typeof r.default && null !== r.default)) &&
				void 0 === r.default.__esModule &&
				(Object.defineProperty(r.default, '__esModule', { value: !0 }),
				Object.assign(r.default, r),
				(t.exports = r.default)));
	},
	38546,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useMergedRef', {
				enumerable: !0,
				get: function () {
					return o;
				},
			}));
		let n = e.r(24412);
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
					} else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
				},
				[e, t],
			);
		}
		function u(e, t) {
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
	86156,
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
	639,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			default: function () {
				return E;
			},
			useLinkStatus: function () {
				return w;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let u = e.r(87602),
			l = e.r(28626),
			a = u._(e.r(24412)),
			i = e.r(1724),
			s = e.r(50460),
			c = e.r(85651),
			f = e.r(15715),
			d = e.r(9807),
			p = e.r(15759),
			m = e.r(59838),
			y = e.r(81573),
			h = e.r(74335),
			b = e.r(38546);
		e.r(86156);
		let g = new Set();
		function x(e, t, r, n) {
			if ('undefined' != typeof window && (0, s.isLocalURL)(t)) {
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
		let _ = a.default.forwardRef(function (e, t) {
				let r,
					n,
					{
						href: o,
						as: u,
						children: c,
						prefetch: g = null,
						passHref: _,
						replace: j,
						shallow: w,
						scroll: E,
						locale: P,
						onClick: S,
						onNavigate: N,
						onMouseEnter: O,
						onTouchStart: k,
						legacyBehavior: C = !1,
						...T
					} = e;
				((r = c),
					C &&
						('string' == typeof r || 'number' == typeof r) &&
						(r = (0, l.jsx)('a', { children: r })));
				let R = a.default.useContext(p.RouterContext),
					M = !1 !== g,
					{ href: A, as: I } = a.default.useMemo(() => {
						if (!R) {
							let e = v(o);
							return { href: e, as: u ? v(u) : e };
						}
						let [e, t] = (0, i.resolveHref)(R, o, !0);
						return { href: e, as: u ? (0, i.resolveHref)(R, u) : t || e };
					}, [R, o, u]),
					H = a.default.useRef(A),
					L = a.default.useRef(I);
				C && (n = a.default.Children.only(r));
				let $ = C ? n && 'object' == typeof n && n.ref : t,
					[F, U, D] = (0, m.useIntersection)({ rootMargin: '200px' }),
					B = a.default.useCallback(
						(e) => {
							((L.current !== I || H.current !== A) &&
								(D(), (L.current = I), (H.current = A)),
								F(e));
						},
						[I, A, D, F],
					),
					q = (0, b.useMergedRef)(B, $);
				a.default.useEffect(() => {
					!R || (U && M && x(R, A, I, { locale: P }));
				}, [I, A, U, P, M, R?.locale, R]);
				let z = {
					ref: q,
					onClick(e) {
						(C || 'function' != typeof S || S(e),
							C &&
								n.props &&
								'function' == typeof n.props.onClick &&
								n.props.onClick(e),
							!R ||
								e.defaultPrevented ||
								(function (e, t, r, n, o, u, l, a, i) {
									let c,
										{ nodeName: f } = e.currentTarget;
									if (
										!(
											('A' === f.toUpperCase() &&
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
										if (!(0, s.isLocalURL)(r)) {
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
												let e = l ?? !0;
												'beforePopState' in t
													? t[o ? 'replace' : 'push'](r, n, {
															shallow: u,
															locale: a,
															scroll: e,
														})
													: t[o ? 'replace' : 'push'](n || r, { scroll: e });
											})());
									}
								})(e, R, A, I, j, w, E, P, N));
					},
					onMouseEnter(e) {
						(C || 'function' != typeof O || O(e),
							C &&
								n.props &&
								'function' == typeof n.props.onMouseEnter &&
								n.props.onMouseEnter(e),
							R &&
								x(R, A, I, {
									locale: P,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
					onTouchStart: function (e) {
						(C || 'function' != typeof k || k(e),
							C &&
								n.props &&
								'function' == typeof n.props.onTouchStart &&
								n.props.onTouchStart(e),
							R &&
								x(R, A, I, {
									locale: P,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
				};
				if ((0, f.isAbsoluteUrl)(I)) z.href = I;
				else if (!C || _ || ('a' === n.type && !('href' in n.props))) {
					let e = void 0 !== P ? P : R?.locale;
					z.href =
						(R?.isLocaleDomain &&
							(0, y.getDomainLocale)(I, e, R?.locales, R?.domainLocales)) ||
						(0, h.addBasePath)((0, d.addLocale)(I, e, R?.defaultLocale));
				}
				return C
					? a.default.cloneElement(n, z)
					: (0, l.jsx)('a', { ...T, ...z, children: r });
			}),
			j = (0, a.createContext)({ pending: !1 }),
			w = () => (0, a.useContext)(j),
			E = _;
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	80844,
	(e, t, r) => {
		t.exports = e.r(639);
	},
	32376,
	41495,
	(e) => {
		'use strict';
		var t = e.i(28626);
		e.s(
			[
				'Input',
				0,
				({
					type: e = 'text',
					id: r = '',
					name: n = '',
					placeholder: o = '',
					value: u = '',
					onChange: l = () => {},
					required: a = !1,
					readOnly: i = !1,
					disabled: s = !1,
				}) =>
					(0, t.jsx)('div', {
						className:
							'overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]',
						children: (0, t.jsx)('input', {
							type: e,
							id: r,
							name: n,
							placeholder: o,
							className:
								'w-full rounded-full bg-neutral-900 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base',
							value: u,
							onChange: l,
							required: a,
							readOnly: i,
							disabled: s,
						}),
					}),
			],
			32376,
		);
		var r = t,
			n = e.i(80844),
			o = e.i(96874),
			u = e.i(5806);
		let l = () =>
			(0, t.jsx)(o.NavbarContainer, {
				children: (0, t.jsx)(n.default, {
					href: '/',
					className: 'text-xl font-black',
					children: (0, t.jsx)(u.Linear, { children: 'micro/saas' }),
				}),
			});
		var a = e.i(21662),
			i = e.i(53992),
			s = e.i(3300);
		e.s(
			[
				'AuthTemplate',
				0,
				({ children: e = (0, r.jsx)(r.Fragment, {}) }) =>
					(0, r.jsxs)('div', {
						className: 'flex h-screen w-screen flex-col',
						children: [
							(0, r.jsx)(i.RadialGradientBackground, {}),
							(0, r.jsx)(l, {}),
							(0, r.jsx)('div', {
								className: 'grow',
								children: (0, r.jsx)('div', {
									className:
										'flex h-full w-full w-screen items-center justify-center p-4 md:p-8',
									children: (0, r.jsx)('div', {
										className:
											'w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow shadow-neutral-100/10',
										children: (0, r.jsxs)('div', {
											className: 'flex flex-col gap-y-8',
											children: [
												(0, r.jsx)('h1', {
													className:
														'text-center text-3xl font-black md:text-4xl',
													children: (0, r.jsx)(u.Linear, {
														children: s.APP_NAME,
													}),
												}),
												e,
											],
										}),
									}),
								}),
							}),
							(0, r.jsx)(a.Footer, {}),
						],
					}),
			],
			41495,
		);
	},
	25796,
	(e, t, r) => {
		t.exports = e.r(29790);
	},
	89822,
	(e) => {
		'use strict';
		var t = e.i(28626),
			r = e.i(77001),
			n = e.i(32376),
			o = e.i(41495),
			u = e.i(48063),
			l = e.i(80844),
			a = e.i(25796),
			i = e.i(24412);
		e.s([
			'default',
			0,
			() => {
				let { push: e } = (0, a.useRouter)(),
					[
						{ loading: s = !1, name: c = '', email: f = '', password: d = '' },
						p,
					] = (0, i.useState)({
						loading: !1,
						name: '',
						email: '',
						password: '',
					}),
					m = async (t) => {
						t.preventDefault();
						let { success: r } = await u.trpcClient.auth.user.signUp.mutate({
							email: f,
							password: d,
						});
						r
							? (alert('Sign Up Successfully'), e('/auth/sign-in'))
							: alert('Failed to Sign Up');
					};
				return (0, t.jsx)(o.AuthTemplate, {
					children: (0, t.jsxs)('form', {
						onSubmit: m,
						className: 'flex flex-col gap-y-4',
						children: [
							(0, t.jsx)(n.Input, {
								id: 'name',
								type: 'name',
								name: 'name',
								placeholder: 'Name',
								value: c,
								onChange: (e) => {
									p((t) => ({ ...t, name: e.target.value }));
								},
								required: !0,
							}),
							(0, t.jsx)(n.Input, {
								id: 'email',
								type: 'email',
								name: 'email',
								placeholder: 'Email',
								value: f,
								onChange: (e) => {
									p((t) => ({ ...t, email: e.target.value }));
								},
								required: !0,
							}),
							(0, t.jsx)(n.Input, {
								id: 'password',
								type: 'password',
								name: 'password',
								placeholder: 'Password',
								value: d,
								onChange: (e) => {
									p((t) => ({ ...t, password: e.target.value }));
								},
								required: !0,
							}),
							(0, t.jsx)(r.Button, {
								type: 'submit',
								children: s ? 'Loading' : 'Sign Up',
							}),
							(0, t.jsx)(l.default, {
								href: '/auth/sign-in',
								children: (0, t.jsx)(r.OutlineButton, { children: 'Sign In' }),
							}),
						],
					}),
				});
			},
		]);
	},
	18247,
	(e, t, r) => {
		let n = '/auth/sign-up';
		((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(89822)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push([n]);
				}));
	},
	31001,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/444dd0cccbd112df.js'].map((t) => e.l(t)),
			).then(() => t(92461)),
		);
	},
	24377,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/505b6e63c12df0e5.js'].map((t) => e.l(t)),
			).then(() => t(29817)),
		);
	},
]);
