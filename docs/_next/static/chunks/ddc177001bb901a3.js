(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	48063,
	(e) => {
		'use strict';
		let t, r, n, s, i, o, u, a, l, c, h, d, p, f, y, m, b;
		var v,
			g,
			O,
			x,
			w,
			P,
			j,
			S,
			C = Object.create,
			Q = Object.defineProperty,
			_ = Object.getOwnPropertyDescriptor,
			q = Object.getOwnPropertyNames,
			R = Object.getPrototypeOf,
			E = Object.prototype.hasOwnProperty,
			D = (e, t) =>
				function () {
					return (
						t || (0, e[q(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				},
			M = (e, t, r) => (
				(r = null != e ? C(R(e)) : {}),
				((e, t, r, n) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var s, i = q(t), o = 0, u = i.length; o < u; o++)
							((s = i[o]),
								E.call(e, s) ||
									s === r ||
									Q(e, s, {
										get: ((e) => t[e]).bind(null, s),
										enumerable: !(n = _(t, s)) || n.enumerable,
									}));
					return e;
				})(
					!t && e && e.__esModule
						? r
						: Q(r, 'default', { value: e, enumerable: !0 }),
					e,
				)
			),
			I = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
					e,
					t,
				) {
					function r(e) {
						return (
							(t.exports = r =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (e) {
											return typeof e;
										}
									: function (e) {
											return e &&
												'function' == typeof Symbol &&
												e.constructor === Symbol &&
												e !== Symbol.prototype
												? 'symbol'
												: typeof e;
										}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports),
							r(e)
						);
					}
					((t.exports = r),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			T = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
					e,
					t,
				) {
					var r = I().default;
					((t.exports = function (e, t) {
						if ('object' != r(e) || !e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var s = n.call(e, t || 'default');
							if ('object' != r(s)) return s;
							throw TypeError('@@toPrimitive must return a primitive value.');
						}
						return ('string' === t ? String : Number)(e);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			k = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
					e,
					t,
				) {
					var r = I().default,
						n = T();
					((t.exports = function (e) {
						var t = n(e, 'string');
						return 'symbol' == r(t) ? t : t + '';
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			F = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
					e,
					t,
				) {
					var r = k();
					((t.exports = function (e, t, n) {
						return (
							(t = r(t)) in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
									})
								: (e[t] = n),
							e
						);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			A = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
					e,
					t,
				) {
					var r = F();
					function n(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							(t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n));
						}
						return r;
					}
					((t.exports = function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var s = null != arguments[t] ? arguments[t] : {};
							t % 2
								? n(Object(s), !0).forEach(function (t) {
										r(e, t, s[t]);
									})
								: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											e,
											Object.getOwnPropertyDescriptors(s),
										)
									: n(Object(s)).forEach(function (t) {
											Object.defineProperty(
												e,
												t,
												Object.getOwnPropertyDescriptor(s, t),
											);
										});
						}
						return e;
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			});
		function U(e) {
			let t = {
				subscribe(t) {
					let r = null,
						n = !1,
						s = !1,
						i = !1;
					function o() {
						if (null === r) {
							i = !0;
							return;
						}
						!s &&
							((s = !0), 'function' == typeof r ? r() : r && r.unsubscribe());
					}
					return (
						(r = e({
							next(e) {
								var r;
								n || null == (r = t.next) || r.call(t, e);
							},
							error(e) {
								var r;
								n || ((n = !0), null == (r = t.error) || r.call(t, e), o());
							},
							complete() {
								var e;
								n || ((n = !0), null == (e = t.complete) || e.call(t), o());
							},
						})),
						i && o(),
						{ unsubscribe: o }
					);
				},
				pipe: (...e) => e.reduce(K, t),
			};
			return t;
		}
		function K(e, t) {
			return t(e);
		}
		function L(e) {
			return !!e && !Array.isArray(e) && 'object' == typeof e;
		}
		let N = 'function' == typeof Symbol && !!Symbol.asyncIterator;
		function H(e) {
			return N && L(e) && Symbol.asyncIterator in e;
		}
		var G = M(F(), 1),
			W = M(A(), 1),
			z = class e extends Error {
				constructor(t, r) {
					var n, s;
					const i = null == r ? void 0 : r.cause;
					(super(t, { cause: i }),
						(0, G.default)(this, 'cause', void 0),
						(0, G.default)(this, 'shape', void 0),
						(0, G.default)(this, 'data', void 0),
						(0, G.default)(this, 'meta', void 0),
						(this.meta = null == r ? void 0 : r.meta),
						(this.cause = i),
						(this.shape =
							null == r || null == (n = r.result) ? void 0 : n.error),
						(this.data =
							null == r || null == (s = r.result) ? void 0 : s.error.data),
						(this.name = 'TRPCClientError'),
						Object.setPrototypeOf(this, e.prototype));
				}
				static from(t, r = {}) {
					return t instanceof z
						? (r.meta &&
								(t.meta = (0, W.default)((0, W.default)({}, t.meta), r.meta)),
							t)
						: L(t) &&
							  L(t.error) &&
							  'number' == typeof t.error.code &&
							  'string' == typeof t.error.message
							? new e(
									t.error.message,
									(0, W.default)((0, W.default)({}, r), {}, { result: t }),
								)
							: new e(
									'string' == typeof t
										? t
										: L(t) && 'string' == typeof t.message
											? t.message
											: 'Unknown error',
									(0, W.default)((0, W.default)({}, r), {}, { cause: t }),
								);
				}
			};
		function $(e) {
			return e
				? 'input' in e
					? e
					: { input: e, output: e }
				: {
						input: { serialize: (e) => e, deserialize: (e) => e },
						output: { serialize: (e) => e, deserialize: (e) => e },
					};
		}
		var B = M(A());
		let J = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
		function Y(e) {
			return 'input' in e
				? e.transformer.input.serialize(e.input)
				: (function (e) {
						let t = {};
						for (let r = 0; r < e.length; r++) {
							let n = e[r];
							t[r] = n;
						}
						return t;
					})(e.inputs.map((t) => e.transformer.input.serialize(t)));
		}
		let V = (e) => {
				let t = e.url.split('?'),
					r = t[0].replace(/\/$/, '') + '/' + e.path,
					n = [];
				if (
					(t[1] && n.push(t[1]),
					'inputs' in e && n.push('batch=1'),
					'query' === e.type || 'subscription' === e.type)
				) {
					let t = Y(e);
					void 0 !== t &&
						'POST' !== e.methodOverride &&
						n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
				}
				return (n.length && (r += '?' + n.join('&')), r);
			},
			X = (e) => {
				if ('query' === e.type && 'POST' !== e.methodOverride) return;
				let t = Y(e);
				return void 0 !== t ? JSON.stringify(t) : void 0;
			};
		var Z = class extends Error {
			constructor() {
				const e = 'AbortError';
				(super(e), (this.name = e), (this.message = e));
			}
		};
		async function ee(e) {
			var t,
				r,
				n = e.signal;
			if (null == n ? void 0 : n.aborted) {
				if (
					(null == (r = n.throwIfAborted) || r.call(n),
					'undefined' != typeof DOMException)
				)
					throw new DOMException('AbortError', 'AbortError');
				throw new Z();
			}
			let s = e.getUrl(e),
				i = e.getBody(e),
				o = null != (t = e.methodOverride) ? t : J[e.type],
				u = await (async () => {
					let t = await e.headers();
					return Symbol.iterator in t ? Object.fromEntries(t) : t;
				})(),
				a = (0, B.default)(
					(0, B.default)(
						(0, B.default)(
							{},
							e.contentTypeHeader && 'GET' !== o
								? { 'content-type': e.contentTypeHeader }
								: {},
						),
						e.trpcAcceptHeader ? { 'trpc-accept': e.trpcAcceptHeader } : void 0,
					),
					u,
				);
			return (function (e) {
				if (e) return e;
				if ('undefined' != typeof window && 'function' == typeof window.fetch)
					return window.fetch;
				if (
					'undefined' != typeof globalThis &&
					'function' == typeof globalThis.fetch
				)
					return globalThis.fetch;
				throw Error('No fetch implementation found');
			})(e.fetch)(s, { method: o, signal: e.signal, body: i, headers: a });
		}
		async function et(e) {
			let t = {},
				r = await ee(e);
			t.response = r;
			let n = await r.json();
			return ((t.responseJSON = n), { json: n, meta: t });
		}
		var er = Object.create,
			en = Object.defineProperty,
			es = Object.getOwnPropertyDescriptor,
			ei = Object.getOwnPropertyNames,
			eo = Object.getPrototypeOf,
			eu = Object.prototype.hasOwnProperty,
			ea = (e, t) =>
				function () {
					return (
						t || (0, e[ei(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				},
			el = (e, t, r) => (
				(r = null != e ? er(eo(e)) : {}),
				((e, t, r, n) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var s, i = ei(t), o = 0, u = i.length; o < u; o++)
							((s = i[o]),
								eu.call(e, s) ||
									s === r ||
									en(e, s, {
										get: ((e) => t[e]).bind(null, s),
										enumerable: !(n = es(t, s)) || n.enumerable,
									}));
					return e;
				})(
					!t && e && e.__esModule
						? r
						: en(r, 'default', { value: e, enumerable: !0 }),
					e,
				)
			);
		let ec = () => {},
			eh = (e) => {
				Object.freeze && Object.freeze(e);
			},
			ed = (e) =>
				(function e(t, r, n) {
					let s = r.join('.');
					return (
						null != n[s] ||
							(n[s] = new Proxy(ec, {
								get(s, i) {
									if ('string' == typeof i && 'then' !== i)
										return e(t, [...r, i], n);
								},
								apply(e, n, s) {
									let i = r[r.length - 1],
										o = { args: s, path: r };
									return (
										'call' === i
											? (o = {
													args: s.length >= 2 ? [s[1]] : [],
													path: r.slice(0, -1),
												})
											: 'apply' === i &&
												(o = {
													args: s.length >= 2 ? s[1] : [],
													path: r.slice(0, -1),
												}),
										eh(o.args),
										eh(o.path),
										t(o)
									);
								},
							})),
						n[s]
					);
				})(e, [], Object.create(null)),
			ep = (e) =>
				new Proxy(ec, {
					get(t, r) {
						if ('then' !== r) return e(r);
					},
				});
		var ef = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
					e,
					t,
				) {
					function r(e) {
						return (
							(t.exports = r =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (e) {
											return typeof e;
										}
									: function (e) {
											return e &&
												'function' == typeof Symbol &&
												e.constructor === Symbol &&
												e !== Symbol.prototype
												? 'symbol'
												: typeof e;
										}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports),
							r(e)
						);
					}
					((t.exports = r),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			ey = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
					e,
					t,
				) {
					var r = ef().default;
					((t.exports = function (e, t) {
						if ('object' != r(e) || !e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var s = n.call(e, t || 'default');
							if ('object' != r(s)) return s;
							throw TypeError('@@toPrimitive must return a primitive value.');
						}
						return ('string' === t ? String : Number)(e);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			em = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
					e,
					t,
				) {
					var r = ef().default,
						n = ey();
					((t.exports = function (e) {
						var t = n(e, 'string');
						return 'symbol' == r(t) ? t : t + '';
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			eb = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
					e,
					t,
				) {
					var r = em();
					((t.exports = function (e, t, n) {
						return (
							(t = r(t)) in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
									})
								: (e[t] = n),
							e
						);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			ev = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
					e,
					t,
				) {
					var r = eb();
					function n(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							(t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n));
						}
						return r;
					}
					((t.exports = function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var s = null != arguments[t] ? arguments[t] : {};
							t % 2
								? n(Object(s), !0).forEach(function (t) {
										r(e, t, s[t]);
									})
								: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											e,
											Object.getOwnPropertyDescriptors(s),
										)
									: n(Object(s)).forEach(function (t) {
											Object.defineProperty(
												e,
												t,
												Object.getOwnPropertyDescriptor(s, t),
											);
										});
						}
						return e;
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			});
		(el(ev(), 1), el(eb(), 1));
		var eg = el(ev(), 1),
			eO = class extends Error {
				constructor() {
					super('Unable to transform response from server');
				}
			};
		(el(ev(), 1), Symbol(), M(A(), 1));
		let ex = () => {
			throw Error(
				'Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new',
			);
		};
		function ew(e) {
			let t = null,
				r = null;
			function n() {
				let n = (function (t) {
					let r = [[]],
						n = 0;
					for (;;) {
						var s, i;
						let o = t[n];
						if (!o) break;
						let u = r[r.length - 1];
						if (o.aborted) {
							(null == (s = o.reject) || s.call(o, Error('Aborted')), n++);
							continue;
						}
						if (e.validate(u.concat(o).map((e) => e.key))) {
							(u.push(o), n++);
							continue;
						}
						if (0 === u.length) {
							(null == (i = o.reject) ||
								i.call(o, Error('Input is too big for a single dispatch')),
								n++);
							continue;
						}
						r.push([]);
					}
					return r;
				})(t);
				for (let s of (clearTimeout(r), (r = null), (t = null), n)) {
					if (!s.length) continue;
					let t = { items: s };
					for (let e of s) e.batch = t;
					e.fetch(t.items.map((e) => e.key))
						.then(async (e) => {
							for (let n of (await Promise.all(
								e.map(async (e, r) => {
									var n, s;
									let i = t.items[r];
									try {
										let t = await Promise.resolve(e);
										null == (n = i.resolve) || n.call(i, t);
									} catch (e) {
										null == (s = i.reject) || s.call(i, e);
									}
									((i.batch = null), (i.reject = null), (i.resolve = null));
								}),
							),
							t.items)) {
								var r;
								(null == (r = n.reject) || r.call(n, Error('Missing result')),
									(n.batch = null));
							}
						})
						.catch((e) => {
							for (let n of t.items) {
								var r;
								(null == (r = n.reject) || r.call(n, e), (n.batch = null));
							}
						});
				}
			}
			return {
				load: function (e) {
					let s = { aborted: !1, key: e, batch: null, resolve: ex, reject: ex },
						i = new Promise((e, r) => {
							((s.reject = r),
								(s.resolve = e),
								null != t || (t = []),
								t.push(s));
						});
					return (null != r || (r = setTimeout(n)), i);
				},
			};
		}
		var eP = M(A(), 1);
		(Symbol(), M(A(), 1));
		let ej = (e, ...t) => ('function' == typeof e ? e(...t) : e);
		async function eS(e) {
			let t = await ej(e.url);
			if (!e.connectionParams) return t;
			let r = t.includes('?') ? '&' : '?';
			return t + `${r}connectionParams=1`;
		}
		async function eC(e) {
			return JSON.stringify({ method: 'connectionParams', data: await ej(e) });
		}
		(M(F(), 1), M(F(), 1));
		var eQ = M(F(), 1),
			e_ = class e {
				constructor(t) {
					var r;
					if (
						((0, eQ.default)(this, 'id', ++e.connectCount),
						(0, eQ.default)(this, 'WebSocketPonyfill', void 0),
						(0, eQ.default)(this, 'urlOptions', void 0),
						(0, eQ.default)(this, 'keepAliveOpts', void 0),
						(0, eQ.default)(
							this,
							'wsObservable',
							(function (e) {
								let t = null,
									r = [],
									n = U(
										(e) => (
											void 0 !== t && e.next(t),
											r.push(e),
											() => {
												r.splice(r.indexOf(e), 1);
											}
										),
									);
								return (
									(n.next = (e) => {
										if (t !== e) for (let n of ((t = e), r)) n.next(e);
									}),
									(n.get = () => t),
									n
								);
							})(0),
						),
						(0, eQ.default)(this, 'openPromise', null),
						(this.WebSocketPonyfill =
							null != (r = t.WebSocketPonyfill) ? r : WebSocket),
						!this.WebSocketPonyfill)
					)
						throw Error(
							"No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill",
						);
					((this.urlOptions = t.urlOptions),
						(this.keepAliveOpts = t.keepAlive));
				}
				get ws() {
					return this.wsObservable.get();
				}
				set ws(e) {
					this.wsObservable.next(e);
				}
				isOpen() {
					return (
						!!this.ws &&
						this.ws.readyState === this.WebSocketPonyfill.OPEN &&
						!this.openPromise
					);
				}
				isClosed() {
					return (
						!!this.ws &&
						(this.ws.readyState === this.WebSocketPonyfill.CLOSING ||
							this.ws.readyState === this.WebSocketPonyfill.CLOSED)
					);
				}
				async open() {
					var t = this;
					if (t.openPromise) return t.openPromise;
					t.id = ++e.connectCount;
					let r = eS(t.urlOptions).then((e) => new t.WebSocketPonyfill(e));
					t.openPromise = r.then(async (e) => {
						((t.ws = e),
							e.addEventListener('message', function ({ data: e }) {
								'PING' === e && this.send('PONG');
							}),
							t.keepAliveOpts.enabled &&
								(function (e, { intervalMs: t, pongTimeoutMs: r }) {
									let n, s;
									function i() {
										n = setTimeout(() => {
											(e.send('PING'),
												(s = setTimeout(() => {
													e.close();
												}, r)));
										}, t);
									}
									(e.addEventListener('open', i),
										e.addEventListener('message', ({ data: e }) => {
											(clearTimeout(n),
												i(),
												'PONG' === e &&
													(clearTimeout(s), clearTimeout(n), i()));
										}),
										e.addEventListener('close', () => {
											(clearTimeout(n), clearTimeout(s));
										}));
								})(e, t.keepAliveOpts),
							e.addEventListener('close', () => {
								t.ws === e && (t.ws = null);
							}),
							await (function (e) {
								let t,
									r,
									{
										promise: n,
										resolve: s,
										reject: i,
									} = {
										promise: new Promise((e, n) => {
											((t = e), (r = n));
										}),
										resolve: t,
										reject: r,
									};
								return (
									e.addEventListener('open', () => {
										(e.removeEventListener('error', i), s());
									}),
									e.addEventListener('error', i),
									n
								);
							})(e),
							t.urlOptions.connectionParams &&
								e.send(await eC(t.urlOptions.connectionParams)));
					});
					try {
						await t.openPromise;
					} finally {
						t.openPromise = null;
					}
				}
				async close() {
					var e;
					try {
						await this.openPromise;
					} finally {
						null == (e = this.ws) || e.close();
					}
				}
			};
		((0, eQ.default)(e_, 'connectCount', 0), M(F(), 1), M(A(), 1), el(ev(), 1));
		var eq = el(eb(), 1);
		let eR = new WeakMap(),
			eE = () => {};
		t = Symbol.toStringTag;
		var eD = class e {
			constructor(e) {
				((0, eq.default)(this, 'promise', void 0),
					(0, eq.default)(this, 'subscribers', []),
					(0, eq.default)(this, 'settlement', null),
					(0, eq.default)(this, t, 'Unpromise'),
					'function' == typeof e
						? (this.promise = new Promise(e))
						: (this.promise = e));
				const r = this.promise.then((e) => {
					let { subscribers: t } = this;
					((this.subscribers = null),
						(this.settlement = { status: 'fulfilled', value: e }),
						null == t ||
							t.forEach(({ resolve: t }) => {
								t(e);
							}));
				});
				'catch' in r &&
					r.catch((e) => {
						let { subscribers: t } = this;
						((this.subscribers = null),
							(this.settlement = { status: 'rejected', reason: e }),
							null == t ||
								t.forEach(({ reject: t }) => {
									t(e);
								}));
					});
			}
			subscribe() {
				let e,
					t,
					{ settlement: r } = this;
				if (null === r) {
					var n;
					let r, s;
					if (null === this.subscribers)
						throw Error('Unpromise settled but still has subscribers');
					let i = {
						promise: new Promise((e, t) => {
							((r = e), (s = t));
						}),
						resolve: r,
						reject: s,
					};
					((this.subscribers = ((n = this.subscribers), [...n, i])),
						(e = i.promise),
						(t = () => {
							null !== this.subscribers &&
								(this.subscribers = (function (e, t) {
									let r = e.indexOf(t);
									if (-1 !== r) return [...e.slice(0, r), ...e.slice(r + 1)];
									return e;
								})(this.subscribers, i));
						}));
				} else {
					let { status: n } = r;
					((e =
						'fulfilled' === n
							? Promise.resolve(r.value)
							: Promise.reject(r.reason)),
						(t = eE));
				}
				return Object.assign(e, { unsubscribe: t });
			}
			then(e, t) {
				let r = this.subscribe(),
					{ unsubscribe: n } = r;
				return Object.assign(r.then(e, t), { unsubscribe: n });
			}
			catch(e) {
				let t = this.subscribe(),
					{ unsubscribe: r } = t;
				return Object.assign(t.catch(e), { unsubscribe: r });
			}
			finally(e) {
				let t = this.subscribe(),
					{ unsubscribe: r } = t;
				return Object.assign(t.finally(e), { unsubscribe: r });
			}
			static proxy(t) {
				let r = e.getSubscribablePromise(t);
				return void 0 !== r ? r : e.createSubscribablePromise(t);
			}
			static createSubscribablePromise(t) {
				let r = new e(t);
				return (eR.set(t, r), eR.set(r, r), r);
			}
			static getSubscribablePromise(e) {
				return eR.get(e);
			}
			static resolve(t) {
				let r =
					'object' == typeof t &&
					null !== t &&
					'then' in t &&
					'function' == typeof t.then
						? t
						: Promise.resolve(t);
				return e.proxy(r).subscribe();
			}
			static async any(t) {
				let r = (Array.isArray(t) ? t : [...t]).map(e.resolve);
				try {
					return await Promise.any(r);
				} finally {
					r.forEach(({ unsubscribe: e }) => {
						e();
					});
				}
			}
			static async race(t) {
				let r = (Array.isArray(t) ? t : [...t]).map(e.resolve);
				try {
					return await Promise.race(r);
				} finally {
					r.forEach(({ unsubscribe: e }) => {
						e();
					});
				}
			}
			static async raceReferences(e) {
				let t = e.map(eM);
				try {
					return await Promise.race(t);
				} finally {
					for (let e of t) e.unsubscribe();
				}
			}
		};
		function eM(e) {
			return eD.proxy(e).then(() => [e]);
		}
		(null != (P = Symbol).dispose || (P.dispose = Symbol()),
			null != (j = Symbol).asyncDispose || (j.asyncDispose = Symbol()),
			Symbol());
		var eI = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js'(
					e,
					t,
				) {
					((t.exports = function () {
						var e =
								'function' == typeof SuppressedError
									? SuppressedError
									: function (e, t) {
											var r = Error();
											return (
												(r.name = 'SuppressedError'),
												(r.error = e),
												(r.suppressed = t),
												r
											);
										},
							t = {},
							r = [];
						function n(e, t) {
							if (null != t) {
								if (Object(t) !== t)
									throw TypeError(
										'using declarations can only be used with objects, functions, null, or undefined.',
									);
								if (e)
									var n =
										t[Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')];
								if (
									void 0 === n &&
									((n = t[Symbol.dispose || Symbol.for('Symbol.dispose')]), e)
								)
									var s = n;
								if ('function' != typeof n)
									throw TypeError('Object is not disposable.');
								(s &&
									(n = function () {
										try {
											s.call(t);
										} catch (e) {
											return Promise.reject(e);
										}
									}),
									r.push({ v: t, d: n, a: e }));
							} else e && r.push({ d: t, a: e });
							return t;
						}
						return {
							e: t,
							u: n.bind(null, !1),
							a: n.bind(null, !0),
							d: function () {
								var n,
									s = this.e,
									i = 0;
								function o() {
									for (; (n = r.pop()); )
										try {
											if (!n.a && 1 === i)
												return ((i = 0), r.push(n), Promise.resolve().then(o));
											if (n.d) {
												var e = n.d.call(n.v);
												if (n.a)
													return ((i |= 2), Promise.resolve(e).then(o, u));
											} else i |= 1;
										} catch (e) {
											return u(e);
										}
									if (1 === i)
										return s !== t ? Promise.reject(s) : Promise.resolve();
									if (s !== t) throw s;
								}
								function u(r) {
									return ((s = s !== t ? new e(r, s) : r), o());
								}
								return o();
							},
						};
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			eT = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js'(
					e,
					t,
				) {
					((t.exports = function (e, t) {
						((this.v = e), (this.k = t));
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			ek = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js'(
					e,
					t,
				) {
					var r = eT();
					((t.exports = function (e) {
						return new r(e, 0);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			eF = ea({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js'(
					e,
					t,
				) {
					var r = eT();
					function n(e) {
						var t, n;
						function s(t, n) {
							try {
								var o = e[t](n),
									u = o.value,
									a = u instanceof r;
								Promise.resolve(a ? u.v : u).then(
									function (r) {
										if (a) {
											var n = 'return' === t ? 'return' : 'next';
											if (!u.k || r.done) return s(n, r);
											r = e[n](r).value;
										}
										i(o.done ? 'return' : 'normal', r);
									},
									function (e) {
										s('throw', e);
									},
								);
							} catch (e) {
								i('throw', e);
							}
						}
						function i(e, r) {
							switch (e) {
								case 'return':
									t.resolve({ value: r, done: !0 });
									break;
								case 'throw':
									t.reject(r);
									break;
								default:
									t.resolve({ value: r, done: !1 });
							}
							(t = t.next) ? s(t.key, t.arg) : (n = null);
						}
						((this._invoke = function (e, r) {
							return new Promise(function (i, o) {
								var u = { key: e, arg: r, resolve: i, reject: o, next: null };
								n ? (n = n.next = u) : ((t = n = u), s(e, r));
							});
						}),
							'function' != typeof e.return && (this.return = void 0));
					}
					((n.prototype[
						('function' == typeof Symbol && Symbol.asyncIterator) ||
							'@@asyncIterator'
					] = function () {
						return this;
					}),
						(n.prototype.next = function (e) {
							return this._invoke('next', e);
						}),
						(n.prototype.throw = function (e) {
							return this._invoke('throw', e);
						}),
						(n.prototype.return = function (e) {
							return this._invoke('return', e);
						}),
						(t.exports = function (e) {
							return function () {
								return new n(e.apply(this, arguments));
							};
						}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			});
		(el(eI(), 1),
			el(ek(), 1),
			el(eF(), 1),
			el(eI(), 1),
			el(ek(), 1),
			el(eF(), 1),
			el(eI(), 1),
			el(ek(), 1),
			el(eF(), 1),
			Symbol('ping'));
		var eA = ea({
			'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js'(
				e,
				t,
			) {
				function r(e) {
					function t(e) {
						if (Object(e) !== e)
							return Promise.reject(TypeError(e + ' is not an object.'));
						var t = e.done;
						return Promise.resolve(e.value).then(function (e) {
							return { value: e, done: t };
						});
					}
					return (
						((r = function (e) {
							((this.s = e), (this.n = e.next));
						}).prototype = {
							s: null,
							n: null,
							next: function () {
								return t(this.n.apply(this.s, arguments));
							},
							return: function (e) {
								var r = this.s.return;
								return void 0 === r
									? Promise.resolve({ value: e, done: !0 })
									: t(r.apply(this.s, arguments));
							},
							throw: function (e) {
								var r = this.s.return;
								return void 0 === r
									? Promise.reject(e)
									: t(r.apply(this.s, arguments));
							},
						}),
						new r(e)
					);
				}
				((t.exports = function (e) {
					var t,
						n,
						s,
						i = 2;
					for (
						'undefined' != typeof Symbol &&
						((n = Symbol.asyncIterator), (s = Symbol.iterator));
						i--;

					) {
						if (n && null != (t = e[n])) return t.call(e);
						if (s && null != (t = e[s])) return new r(t.call(e));
						((n = '@@asyncIterator'), (s = '@@iterator'));
					}
					throw TypeError('Object is not async iterable');
				}),
					(t.exports.__esModule = !0),
					(t.exports.default = t.exports));
			},
		});
		(el(ek(), 1), el(eF(), 1), el(eI(), 1), el(eA(), 1));
		var eU = ea({
			'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncGeneratorDelegate.js'(
				e,
				t,
			) {
				var r = eT();
				((t.exports = function (e) {
					var t = {},
						n = !1;
					function s(t, s) {
						return (
							(n = !0),
							{
								done: !1,
								value: new r(
									(s = new Promise(function (r) {
										r(e[t](s));
									})),
									1,
								),
							}
						);
					}
					return (
						(t[
							('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator'
						] = function () {
							return this;
						}),
						(t.next = function (e) {
							return n ? ((n = !1), e) : s('next', e);
						}),
						'function' == typeof e.throw &&
							(t.throw = function (e) {
								if (n) throw ((n = !1), e);
								return s('throw', e);
							}),
						'function' == typeof e.return &&
							(t.return = function (e) {
								return n ? ((n = !1), e) : s('return', e);
							}),
						t
					);
				}),
					(t.exports.__esModule = !0),
					(t.exports.default = t.exports));
			},
		});
		(el(eA(), 1),
			el(ek(), 1),
			el(eF(), 1),
			el(eU(), 1),
			el(eI(), 1),
			el(eF(), 1),
			el(ev(), 1));
		var eK = M(F(), 1),
			eL = M(A(), 1),
			eN = class {
				constructor(e) {
					((0, eK.default)(this, 'links', void 0),
						(0, eK.default)(this, 'runtime', void 0),
						(0, eK.default)(this, 'requestId', void 0),
						(this.requestId = 0),
						(this.runtime = {}),
						(this.links = e.links.map((e) => e(this.runtime))));
				}
				$request(e) {
					var t, r;
					return ((r = {
						links: this.links,
						op: (0, eL.default)(
							(0, eL.default)({}, e),
							{},
							{
								context: null != (t = e.context) ? t : {},
								id: ++this.requestId,
							},
						),
					}),
					U((e) =>
						(function e(t = 0, n = r.op) {
							let s = r.links[t];
							if (!s)
								throw Error(
									'No more links to execute - did you forget to add an ending link?',
								);
							return s({ op: n, next: (r) => e(t + 1, r) });
						})().subscribe(e),
					)).pipe((e) => {
						let t = 0,
							r = null,
							n = [];
						return U(
							(s) => (
								t++,
								n.push(s),
								r ||
									(r = e.subscribe({
										next(e) {
											for (let r of n) {
												var t;
												null == (t = r.next) || t.call(r, e);
											}
										},
										error(e) {
											for (let r of n) {
												var t;
												null == (t = r.error) || t.call(r, e);
											}
										},
										complete() {
											for (let t of n) {
												var e;
												null == (e = t.complete) || e.call(t);
											}
										},
									})),
								{
									unsubscribe() {
										if (0 == --t && r) {
											let e = r;
											((r = null), e.unsubscribe());
										}
										let e = n.findIndex((e) => e === s);
										e > -1 && n.splice(e, 1);
									},
								}
							),
						);
					});
				}
				async requestAsPromise(e) {
					try {
						let t,
							r = this.$request(e);
						return (
							await ((t = new AbortController()),
							new Promise((e, n) => {
								let s = !1;
								function i() {
									s || ((s = !0), o.unsubscribe());
								}
								t.signal.addEventListener('abort', () => {
									n(t.signal.reason);
								});
								let o = r.subscribe({
									next(t) {
										((s = !0), e(t), i());
									},
									error(e) {
										n(e);
									},
									complete() {
										(t.abort(), i());
									},
								});
							}))
						).result.data;
					} catch (e) {
						throw z.from(e);
					}
				}
				query(e, t, r) {
					return this.requestAsPromise({
						type: 'query',
						path: e,
						input: t,
						context: null == r ? void 0 : r.context,
						signal: null == r ? void 0 : r.signal,
					});
				}
				mutation(e, t, r) {
					return this.requestAsPromise({
						type: 'mutation',
						path: e,
						input: t,
						context: null == r ? void 0 : r.context,
						signal: null == r ? void 0 : r.signal,
					});
				}
				subscription(e, t, r) {
					return this.$request({
						type: 'subscription',
						path: e,
						input: t,
						context: r.context,
						signal: r.signal,
					}).subscribe({
						next(e) {
							var t, n, s, i;
							switch (e.result.type) {
								case 'state':
									null == (t = r.onConnectionStateChange) ||
										t.call(r, e.result);
									break;
								case 'started':
									null == (n = r.onStarted) ||
										n.call(r, { context: e.context });
									break;
								case 'stopped':
									null == (s = r.onStopped) || s.call(r);
									break;
								case 'data':
								case void 0:
									null == (i = r.onData) || i.call(r, e.result.data);
							}
						},
						error(e) {
							var t;
							null == (t = r.onError) || t.call(r, e);
						},
						complete() {
							var e;
							null == (e = r.onComplete) || e.call(r);
						},
					});
				}
			};
		let eH = Symbol.for('trpc_untypedClient'),
			eG = { query: 'query', mutate: 'mutation', subscribe: 'subscription' };
		function eW(e) {
			let t = ed(({ path: t, args: r }) => {
				let n = [...t],
					s = eG[n.pop()],
					i = n.join('.');
				return e[s](i, ...r);
			});
			return ep((r) => (r === eH ? e : t[r]));
		}
		function ez(e) {
			return eW(new eN(e));
		}
		(M(A(), 1),
			M(A(), 1),
			M(
				D({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js'(
						e,
						t,
					) {
						function r(e) {
							function t(e) {
								if (Object(e) !== e)
									return Promise.reject(TypeError(e + ' is not an object.'));
								var t = e.done;
								return Promise.resolve(e.value).then(function (e) {
									return { value: e, done: t };
								});
							}
							return (
								((r = function (e) {
									((this.s = e), (this.n = e.next));
								}).prototype = {
									s: null,
									n: null,
									next: function () {
										return t(this.n.apply(this.s, arguments));
									},
									return: function (e) {
										var r = this.s.return;
										return void 0 === r
											? Promise.resolve({ value: e, done: !0 })
											: t(r.apply(this.s, arguments));
									},
									throw: function (e) {
										var r = this.s.return;
										return void 0 === r
											? Promise.reject(e)
											: t(r.apply(this.s, arguments));
									},
								}),
								new r(e)
							);
						}
						((t.exports = function (e) {
							var t,
								n,
								s,
								i = 2;
							for (
								'undefined' != typeof Symbol &&
								((n = Symbol.asyncIterator), (s = Symbol.iterator));
								i--;

							) {
								if (n && null != (t = e[n])) return t.call(e);
								if (s && null != (t = e[s])) return new r(t.call(e));
								((n = '@@asyncIterator'), (s = '@@iterator'));
							}
							throw TypeError('Object is not async iterable');
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				})(),
				1,
			),
			M(A(), 1));
		var e$ = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js'(
					e,
					t,
				) {
					((t.exports = function () {
						var e =
								'function' == typeof SuppressedError
									? SuppressedError
									: function (e, t) {
											var r = Error();
											return (
												(r.name = 'SuppressedError'),
												(r.error = e),
												(r.suppressed = t),
												r
											);
										},
							t = {},
							r = [];
						function n(e, t) {
							if (null != t) {
								if (Object(t) !== t)
									throw TypeError(
										'using declarations can only be used with objects, functions, null, or undefined.',
									);
								if (e)
									var n =
										t[Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')];
								if (
									void 0 === n &&
									((n = t[Symbol.dispose || Symbol.for('Symbol.dispose')]), e)
								)
									var s = n;
								if ('function' != typeof n)
									throw TypeError('Object is not disposable.');
								(s &&
									(n = function () {
										try {
											s.call(t);
										} catch (e) {
											return Promise.reject(e);
										}
									}),
									r.push({ v: t, d: n, a: e }));
							} else e && r.push({ d: t, a: e });
							return t;
						}
						return {
							e: t,
							u: n.bind(null, !1),
							a: n.bind(null, !0),
							d: function () {
								var n,
									s = this.e,
									i = 0;
								function o() {
									for (; (n = r.pop()); )
										try {
											if (!n.a && 1 === i)
												return ((i = 0), r.push(n), Promise.resolve().then(o));
											if (n.d) {
												var e = n.d.call(n.v);
												if (n.a)
													return ((i |= 2), Promise.resolve(e).then(o, u));
											} else i |= 1;
										} catch (e) {
											return u(e);
										}
									if (1 === i)
										return s !== t ? Promise.reject(s) : Promise.resolve();
									if (s !== t) throw s;
								}
								function u(r) {
									return ((s = s !== t ? new e(r, s) : r), o());
								}
								return o();
							},
						};
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			eB = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js'(
					e,
					t,
				) {
					((t.exports = function (e, t) {
						((this.v = e), (this.k = t));
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			eJ = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js'(
					e,
					t,
				) {
					var r = eB();
					((t.exports = function (e) {
						return new r(e, 0);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			eY = D({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js'(
					e,
					t,
				) {
					var r = eB();
					function n(e) {
						var t, n;
						function s(t, n) {
							try {
								var o = e[t](n),
									u = o.value,
									a = u instanceof r;
								Promise.resolve(a ? u.v : u).then(
									function (r) {
										if (a) {
											var n = 'return' === t ? 'return' : 'next';
											if (!u.k || r.done) return s(n, r);
											r = e[n](r).value;
										}
										i(o.done ? 'return' : 'normal', r);
									},
									function (e) {
										s('throw', e);
									},
								);
							} catch (e) {
								i('throw', e);
							}
						}
						function i(e, r) {
							switch (e) {
								case 'return':
									t.resolve({ value: r, done: !0 });
									break;
								case 'throw':
									t.reject(r);
									break;
								default:
									t.resolve({ value: r, done: !1 });
							}
							(t = t.next) ? s(t.key, t.arg) : (n = null);
						}
						((this._invoke = function (e, r) {
							return new Promise(function (i, o) {
								var u = { key: e, arg: r, resolve: i, reject: o, next: null };
								n ? (n = n.next = u) : ((t = n = u), s(e, r));
							});
						}),
							'function' != typeof e.return && (this.return = void 0));
					}
					((n.prototype[
						('function' == typeof Symbol && Symbol.asyncIterator) ||
							'@@asyncIterator'
					] = function () {
						return this;
					}),
						(n.prototype.next = function (e) {
							return this._invoke('next', e);
						}),
						(n.prototype.throw = function (e) {
							return this._invoke('throw', e);
						}),
						(n.prototype.return = function (e) {
							return this._invoke('return', e);
						}),
						(t.exports = function (e) {
							return function () {
								return new n(e.apply(this, arguments));
							};
						}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			});
		(M(e$(), 1), M(eJ(), 1), M(eY(), 1), M(A(), 1));
		var eV = Object.create,
			eX = Object.defineProperty,
			eZ = Object.getOwnPropertyDescriptor,
			e0 = Object.getOwnPropertyNames,
			e1 = Object.getPrototypeOf,
			e2 = Object.prototype.hasOwnProperty,
			e7 = (e, t) =>
				function () {
					return (
						t || (0, e[e0(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				},
			e3 = e7({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
					e,
					t,
				) {
					function r(e) {
						return (
							(t.exports = r =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (e) {
											return typeof e;
										}
									: function (e) {
											return e &&
												'function' == typeof Symbol &&
												e.constructor === Symbol &&
												e !== Symbol.prototype
												? 'symbol'
												: typeof e;
										}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports),
							r(e)
						);
					}
					((t.exports = r),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			e4 = e7({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
					e,
					t,
				) {
					var r = e3().default;
					((t.exports = function (e, t) {
						if ('object' != r(e) || !e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var s = n.call(e, t || 'default');
							if ('object' != r(s)) return s;
							throw TypeError('@@toPrimitive must return a primitive value.');
						}
						return ('string' === t ? String : Number)(e);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			e6 = e7({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
					e,
					t,
				) {
					var r = e3().default,
						n = e4();
					((t.exports = function (e) {
						var t = n(e, 'string');
						return 'symbol' == r(t) ? t : t + '';
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			e8 = e7({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
					e,
					t,
				) {
					var r = e6();
					((t.exports = function (e, t, n) {
						return (
							(t = r(t)) in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
									})
								: (e[t] = n),
							e
						);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			e9 = e7({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
					e,
					t,
				) {
					var r = e8();
					function n(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							(t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n));
						}
						return r;
					}
					((t.exports = function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var s = null != arguments[t] ? arguments[t] : {};
							t % 2
								? n(Object(s), !0).forEach(function (t) {
										r(e, t, s[t]);
									})
								: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											e,
											Object.getOwnPropertyDescriptors(s),
										)
									: n(Object(s)).forEach(function (t) {
											Object.defineProperty(
												e,
												t,
												Object.getOwnPropertyDescriptor(s, t),
											);
										});
						}
						return e;
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			e5 = e.i(36960);
		e.i(41640);
		var te = {
				setTimeout: (e, t) => setTimeout(e, t),
				clearTimeout: (e) => clearTimeout(e),
				setInterval: (e, t) => setInterval(e, t),
				clearInterval: (e) => clearInterval(e),
			},
			tt = new (class {
				#e = te;
				#t = !1;
				setTimeoutProvider(e) {
					this.#e = e;
				}
				setTimeout(e, t) {
					return this.#e.setTimeout(e, t);
				}
				clearTimeout(e) {
					this.#e.clearTimeout(e);
				}
				setInterval(e, t) {
					return this.#e.setInterval(e, t);
				}
				clearInterval(e) {
					this.#e.clearInterval(e);
				}
			})(),
			tr = 'undefined' == typeof window || 'Deno' in globalThis;
		function tn() {}
		function ts(e) {
			return 'number' == typeof e && e >= 0 && e !== 1 / 0;
		}
		function ti(e, t) {
			return Math.max(e + (t || 0) - Date.now(), 0);
		}
		function to(e, t) {
			return 'function' == typeof e ? e(t) : e;
		}
		function tu(e, t) {
			return 'function' == typeof e ? e(t) : e;
		}
		function ta(e, t) {
			let {
				type: r = 'all',
				exact: n,
				fetchStatus: s,
				predicate: i,
				queryKey: o,
				stale: u,
			} = e;
			if (o) {
				if (n) {
					if (t.queryHash !== tc(o, t.options)) return !1;
				} else if (!td(t.queryKey, o)) return !1;
			}
			if ('all' !== r) {
				let e = t.isActive();
				if (('active' === r && !e) || ('inactive' === r && e)) return !1;
			}
			return (
				('boolean' != typeof u || t.isStale() === u) &&
				(!s || s === t.state.fetchStatus) &&
				(!i || !!i(t))
			);
		}
		function tl(e, t) {
			let { exact: r, status: n, predicate: s, mutationKey: i } = e;
			if (i) {
				if (!t.options.mutationKey) return !1;
				if (r) {
					if (th(t.options.mutationKey) !== th(i)) return !1;
				} else if (!td(t.options.mutationKey, i)) return !1;
			}
			return (!n || t.state.status === n) && (!s || !!s(t));
		}
		function tc(e, t) {
			return (t?.queryKeyHashFn || th)(e);
		}
		function th(e) {
			return JSON.stringify(e, (e, t) =>
				tb(t)
					? Object.keys(t)
							.sort()
							.reduce((e, r) => ((e[r] = t[r]), e), {})
					: t,
			);
		}
		function td(e, t) {
			return (
				e === t ||
				(typeof e == typeof t &&
					!!e &&
					!!t &&
					'object' == typeof e &&
					'object' == typeof t &&
					Object.keys(t).every((r) => td(e[r], t[r])))
			);
		}
		var tp = Object.prototype.hasOwnProperty;
		function tf(e, t) {
			if (e === t) return e;
			let r = tm(e) && tm(t);
			if (!r && !(tb(e) && tb(t))) return t;
			let n = (r ? e : Object.keys(e)).length,
				s = r ? t : Object.keys(t),
				i = s.length,
				o = r ? Array(i) : {},
				u = 0;
			for (let a = 0; a < i; a++) {
				let i = r ? a : s[a],
					l = e[i],
					c = t[i];
				if (l === c) {
					((o[i] = l), (r ? a < n : tp.call(e, i)) && u++);
					continue;
				}
				if (
					null === l ||
					null === c ||
					'object' != typeof l ||
					'object' != typeof c
				) {
					o[i] = c;
					continue;
				}
				let h = tf(l, c);
				((o[i] = h), h === l && u++);
			}
			return n === i && u === n ? e : o;
		}
		function ty(e, t) {
			if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
			for (let r in e) if (e[r] !== t[r]) return !1;
			return !0;
		}
		function tm(e) {
			return Array.isArray(e) && e.length === Object.keys(e).length;
		}
		function tb(e) {
			if (!tv(e)) return !1;
			let t = e.constructor;
			if (void 0 === t) return !0;
			let r = t.prototype;
			return (
				!!tv(r) &&
				!!r.hasOwnProperty('isPrototypeOf') &&
				Object.getPrototypeOf(e) === Object.prototype
			);
		}
		function tv(e) {
			return '[object Object]' === Object.prototype.toString.call(e);
		}
		function tg(e, t, r) {
			return 'function' == typeof r.structuralSharing
				? r.structuralSharing(e, t)
				: !1 !== r.structuralSharing
					? tf(e, t)
					: t;
		}
		function tO(e, t, r = 0) {
			let n = [...e, t];
			return r && n.length > r ? n.slice(1) : n;
		}
		function tx(e, t, r = 0) {
			let n = [t, ...e];
			return r && n.length > r ? n.slice(0, -1) : n;
		}
		var tw = Symbol();
		function tP(e, t) {
			return !e.queryFn && t?.initialPromise
				? () => t.initialPromise
				: e.queryFn && e.queryFn !== tw
					? e.queryFn
					: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
		}
		function tj(e, t) {
			return 'function' == typeof e ? e(...t) : !!e;
		}
		function tS() {
			let e,
				t,
				r = new Promise((r, n) => {
					((e = r), (t = n));
				});
			function n(e) {
				(Object.assign(r, e), delete r.resolve, delete r.reject);
			}
			return (
				(r.status = 'pending'),
				r.catch(() => {}),
				(r.resolve = (t) => {
					(n({ status: 'fulfilled', value: t }), e(t));
				}),
				(r.reject = (e) => {
					(n({ status: 'rejected', reason: e }), t(e));
				}),
				r
			);
		}
		function tC(e) {
			return e;
		}
		function tQ(e, t, r) {
			if ('object' != typeof t || null === t) return;
			let n = e.getMutationCache(),
				s = e.getQueryCache(),
				i =
					r?.defaultOptions?.deserializeData ??
					e.getDefaultOptions().hydrate?.deserializeData ??
					tC,
				o = t.mutations || [],
				u = t.queries || [];
			(o.forEach(({ state: t, ...s }) => {
				n.build(
					e,
					{
						...e.getDefaultOptions().hydrate?.mutations,
						...r?.defaultOptions?.mutations,
						...s,
					},
					t,
				);
			}),
				u.forEach(
					({
						queryKey: t,
						state: n,
						queryHash: o,
						meta: u,
						promise: a,
						dehydratedAt: l,
					}) => {
						let c = a
								? (function (e) {
										let t;
										if (
											(e.then((e) => ((t = e), e), tn)?.catch(tn), void 0 !== t)
										)
											return { data: t };
									})(a)
								: void 0,
							h = void 0 === n.data ? c?.data : n.data,
							d = void 0 === h ? h : i(h),
							p = s.get(o),
							f = p?.state.status === 'pending',
							y = p?.state.fetchStatus === 'fetching';
						if (p) {
							let e = c && void 0 !== l && l > p.state.dataUpdatedAt;
							if (n.dataUpdatedAt > p.state.dataUpdatedAt || e) {
								let { fetchStatus: e, ...t } = n;
								p.setState({ ...t, data: d });
							}
						} else
							p = s.build(
								e,
								{
									...e.getDefaultOptions().hydrate?.queries,
									...r?.defaultOptions?.queries,
									queryKey: t,
									queryHash: o,
									meta: u,
								},
								{
									...n,
									data: d,
									fetchStatus: 'idle',
									status: void 0 !== d ? 'success' : n.status,
								},
							);
						a &&
							!f &&
							!y &&
							(void 0 === l || l > p.state.dataUpdatedAt) &&
							p
								.fetch(void 0, { initialPromise: Promise.resolve(a).then(i) })
								.catch(tn);
					},
				));
		}
		var t_ = e.i(94601),
			tq = e5.createContext(void 0),
			tR = (e) => {
				let t = e5.useContext(tq);
				if (e) return e;
				if (!t)
					throw Error('No QueryClient set, use QueryClientProvider to set one');
				return t;
			},
			tE = ({ client: e, children: t }) => (
				e5.useEffect(
					() => (
						e.mount(),
						() => {
							e.unmount();
						}
					),
					[e],
				),
				(0, t_.jsx)(tq.Provider, { value: e, children: t })
			),
			tD = ({ children: e, options: t = {}, state: r, queryClient: n }) => {
				let s = tR(n),
					i = e5.useRef(t);
				e5.useEffect(() => {
					i.current = t;
				});
				let o = e5.useMemo(() => {
					if (r) {
						if ('object' != typeof r) return;
						let e = s.getQueryCache(),
							t = r.queries || [],
							n = [],
							o = [];
						for (let r of t) {
							let t = e.get(r.queryHash);
							t
								? (r.state.dataUpdatedAt > t.state.dataUpdatedAt ||
										(r.promise &&
											'pending' !== t.state.status &&
											'fetching' !== t.state.fetchStatus &&
											void 0 !== r.dehydratedAt &&
											r.dehydratedAt > t.state.dataUpdatedAt)) &&
									o.push(r)
								: n.push(r);
						}
						if (
							(n.length > 0 && tQ(s, { queries: n }, i.current), o.length > 0)
						)
							return o;
					}
				}, [s, r]);
				return (
					e5.useEffect(() => {
						o && tQ(s, { queries: o }, i.current);
					}, [s, o]),
					e
				);
			},
			tM = Object.create,
			tI = Object.defineProperty,
			tT = Object.getOwnPropertyDescriptor,
			tk = Object.getOwnPropertyNames,
			tF = Object.getPrototypeOf,
			tA = Object.prototype.hasOwnProperty,
			tU = (e, t) =>
				function () {
					return (
						t || (0, e[tk(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				},
			tK = (e, t, r) => (
				(r = null != e ? tM(tF(e)) : {}),
				((e, t, r, n) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var s, i = tk(t), o = 0, u = i.length; o < u; o++)
							((s = i[o]),
								tA.call(e, s) ||
									s === r ||
									tI(e, s, {
										get: ((e) => t[e]).bind(null, s),
										enumerable: !(n = tT(t, s)) || n.enumerable,
									}));
					return e;
				})(
					!t && e && e.__esModule
						? r
						: tI(r, 'default', { value: e, enumerable: !0 }),
					e,
				)
			),
			tL = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js'(
					e,
					t,
				) {
					((t.exports = function (e, t) {
						if (null == e) return {};
						var r = {};
						for (var n in e)
							if ({}.hasOwnProperty.call(e, n)) {
								if (t.includes(n)) continue;
								r[n] = e[n];
							}
						return r;
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			tN = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js'(
					e,
					t,
				) {
					var r = tL();
					((t.exports = function (e, t) {
						if (null == e) return {};
						var n,
							s,
							i = r(e, t);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(e);
							for (s = 0; s < o.length; s++)
								((n = o[s]),
									t.includes(n) ||
										({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
						}
						return i;
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			tH = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
					e,
					t,
				) {
					function r(e) {
						return (
							(t.exports = r =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (e) {
											return typeof e;
										}
									: function (e) {
											return e &&
												'function' == typeof Symbol &&
												e.constructor === Symbol &&
												e !== Symbol.prototype
												? 'symbol'
												: typeof e;
										}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports),
							r(e)
						);
					}
					((t.exports = r),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			tG = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
					e,
					t,
				) {
					var r = tH().default;
					((t.exports = function (e, t) {
						if ('object' != r(e) || !e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var s = n.call(e, t || 'default');
							if ('object' != r(s)) return s;
							throw TypeError('@@toPrimitive must return a primitive value.');
						}
						return ('string' === t ? String : Number)(e);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			tW = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
					e,
					t,
				) {
					var r = tH().default,
						n = tG();
					((t.exports = function (e) {
						var t = n(e, 'string');
						return 'symbol' == r(t) ? t : t + '';
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			tz = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
					e,
					t,
				) {
					var r = tW();
					((t.exports = function (e, t, n) {
						return (
							(t = r(t)) in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
									})
								: (e[t] = n),
							e
						);
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			t$ = tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
					e,
					t,
				) {
					var r = tz();
					function n(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							(t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n));
						}
						return r;
					}
					((t.exports = function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var s = null != arguments[t] ? arguments[t] : {};
							t % 2
								? n(Object(s), !0).forEach(function (t) {
										r(e, t, s[t]);
									})
								: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											e,
											Object.getOwnPropertyDescriptors(s),
										)
									: n(Object(s)).forEach(function (t) {
											Object.defineProperty(
												e,
												t,
												Object.getOwnPropertyDescriptor(s, t),
											);
										});
						}
						return e;
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			}),
			tB = tK(tN(), 1),
			tJ = tK(t$(), 1);
		let tY = ['cursor', 'direction'];
		function tV(e, t, r) {
			let n = e.flatMap((e) => e.split('.'));
			if (!t && (!r || 'any' === r)) return n.length ? [n] : [];
			if ('infinite' === r && L(t) && ('direction' in t || 'cursor' in t)) {
				let { cursor: e, direction: r } = t;
				return [n, { input: (0, tB.default)(t, tY), type: 'infinite' }];
			}
			return [
				n,
				(0, tJ.default)(
					(0, tJ.default)({}, void 0 !== t && t !== tw && { input: t }),
					r && 'any' !== r && { type: r },
				),
			];
		}
		function tX(e) {
			return tV(e, void 0, 'any');
		}
		var tZ =
				((r = []),
				(n = 0),
				(s = (e) => {
					e();
				}),
				(i = (e) => {
					e();
				}),
				(o = function (e) {
					setTimeout(e, 0);
				}),
				{
					batch: (e) => {
						let t;
						n++;
						try {
							t = e();
						} finally {
							let e;
							--n ||
								((e = r),
								(r = []),
								e.length &&
									o(() => {
										i(() => {
											e.forEach((e) => {
												s(e);
											});
										});
									}));
						}
						return t;
					},
					batchCalls:
						(e) =>
						(...t) => {
							u(() => {
								e(...t);
							});
						},
					schedule: (u = (e) => {
						n
							? r.push(e)
							: o(() => {
									s(e);
								});
					}),
					setNotifyFunction: (e) => {
						s = e;
					},
					setBatchNotifyFunction: (e) => {
						i = e;
					},
					setScheduler: (e) => {
						o = e;
					},
				}),
			t0 = class {
				constructor() {
					((this.listeners = new Set()),
						(this.subscribe = this.subscribe.bind(this)));
				}
				subscribe(e) {
					return (
						this.listeners.add(e),
						this.onSubscribe(),
						() => {
							(this.listeners.delete(e), this.onUnsubscribe());
						}
					);
				}
				hasListeners() {
					return this.listeners.size > 0;
				}
				onSubscribe() {}
				onUnsubscribe() {}
			},
			t1 = new (class extends t0 {
				#r;
				#n;
				#s;
				constructor() {
					(super(),
						(this.#s = (e) => {
							if (!tr && window.addEventListener) {
								let t = () => e();
								return (
									window.addEventListener('visibilitychange', t, !1),
									() => {
										window.removeEventListener('visibilitychange', t);
									}
								);
							}
						}));
				}
				onSubscribe() {
					this.#n || this.setEventListener(this.#s);
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#n?.(), (this.#n = void 0));
				}
				setEventListener(e) {
					((this.#s = e),
						this.#n?.(),
						(this.#n = e((e) => {
							'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
						})));
				}
				setFocused(e) {
					this.#r !== e && ((this.#r = e), this.onFocus());
				}
				onFocus() {
					let e = this.isFocused();
					this.listeners.forEach((t) => {
						t(e);
					});
				}
				isFocused() {
					return 'boolean' == typeof this.#r
						? this.#r
						: globalThis.document?.visibilityState !== 'hidden';
				}
			})(),
			t2 = new (class extends t0 {
				#i = !0;
				#n;
				#s;
				constructor() {
					(super(),
						(this.#s = (e) => {
							if (!tr && window.addEventListener) {
								let t = () => e(!0),
									r = () => e(!1);
								return (
									window.addEventListener('online', t, !1),
									window.addEventListener('offline', r, !1),
									() => {
										(window.removeEventListener('online', t),
											window.removeEventListener('offline', r));
									}
								);
							}
						}));
				}
				onSubscribe() {
					this.#n || this.setEventListener(this.#s);
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#n?.(), (this.#n = void 0));
				}
				setEventListener(e) {
					((this.#s = e),
						this.#n?.(),
						(this.#n = e(this.setOnline.bind(this))));
				}
				setOnline(e) {
					this.#i !== e &&
						((this.#i = e),
						this.listeners.forEach((t) => {
							t(e);
						}));
				}
				isOnline() {
					return this.#i;
				}
			})();
		function t7(e) {
			return Math.min(1e3 * 2 ** e, 3e4);
		}
		function t3(e) {
			return (e ?? 'online') !== 'online' || t2.isOnline();
		}
		var t4 = class extends Error {
			constructor(e) {
				(super('CancelledError'),
					(this.revert = e?.revert),
					(this.silent = e?.silent));
			}
		};
		function t6(e) {
			let t,
				r = !1,
				n = 0,
				s = tS(),
				i = () =>
					t1.isFocused() &&
					('always' === e.networkMode || t2.isOnline()) &&
					e.canRun(),
				o = () => t3(e.networkMode) && e.canRun(),
				u = (e) => {
					'pending' === s.status && (t?.(), s.resolve(e));
				},
				a = (e) => {
					'pending' === s.status && (t?.(), s.reject(e));
				},
				l = () =>
					new Promise((r) => {
						((t = (e) => {
							('pending' !== s.status || i()) && r(e);
						}),
							e.onPause?.());
					}).then(() => {
						((t = void 0), 'pending' === s.status && e.onContinue?.());
					}),
				c = () => {
					let t;
					if ('pending' !== s.status) return;
					let o = 0 === n ? e.initialPromise : void 0;
					try {
						t = o ?? e.fn();
					} catch (e) {
						t = Promise.reject(e);
					}
					Promise.resolve(t)
						.then(u)
						.catch((t) => {
							if ('pending' !== s.status) return;
							let o = e.retry ?? 3 * !tr,
								u = e.retryDelay ?? t7,
								h = 'function' == typeof u ? u(n, t) : u,
								d =
									!0 === o ||
									('number' == typeof o && n < o) ||
									('function' == typeof o && o(n, t));
							r || !d
								? a(t)
								: (n++,
									e.onFail?.(n, t),
									new Promise((e) => {
										tt.setTimeout(e, h);
									})
										.then(() => (i() ? void 0 : l()))
										.then(() => {
											r ? a(t) : c();
										}));
						});
				};
			return {
				promise: s,
				status: () => s.status,
				cancel: (t) => {
					if ('pending' === s.status) {
						let r = new t4(t);
						(a(r), e.onCancel?.(r));
					}
				},
				continue: () => (t?.(), s),
				cancelRetry: () => {
					r = !0;
				},
				continueRetry: () => {
					r = !1;
				},
				canStart: o,
				start: () => (o() ? c() : l().then(c), s),
			};
		}
		var t8 = class {
				#o;
				destroy() {
					this.clearGcTimeout();
				}
				scheduleGc() {
					(this.clearGcTimeout(),
						ts(this.gcTime) &&
							(this.#o = tt.setTimeout(() => {
								this.optionalRemove();
							}, this.gcTime)));
				}
				updateGcTime(e) {
					this.gcTime = Math.max(this.gcTime || 0, e ?? (tr ? 1 / 0 : 3e5));
				}
				clearGcTimeout() {
					this.#o && (tt.clearTimeout(this.#o), (this.#o = void 0));
				}
			},
			t9 = class extends t8 {
				#u;
				#a;
				#l;
				#c;
				#h;
				#d;
				#p;
				constructor(e) {
					(super(),
						(this.#p = !1),
						(this.#d = e.defaultOptions),
						this.setOptions(e.options),
						(this.observers = []),
						(this.#c = e.client),
						(this.#l = this.#c.getQueryCache()),
						(this.queryKey = e.queryKey),
						(this.queryHash = e.queryHash),
						(this.#u = re(this.options)),
						(this.state = e.state ?? this.#u),
						this.scheduleGc());
				}
				get meta() {
					return this.options.meta;
				}
				get promise() {
					return this.#h?.promise;
				}
				setOptions(e) {
					if (
						((this.options = { ...this.#d, ...e }),
						this.updateGcTime(this.options.gcTime),
						this.state && void 0 === this.state.data)
					) {
						let e = re(this.options);
						void 0 !== e.data &&
							(this.setData(e.data, { updatedAt: e.dataUpdatedAt, manual: !0 }),
							(this.#u = e));
					}
				}
				optionalRemove() {
					this.observers.length ||
						'idle' !== this.state.fetchStatus ||
						this.#l.remove(this);
				}
				setData(e, t) {
					let r = tg(this.state.data, e, this.options);
					return (
						this.#f({
							data: r,
							type: 'success',
							dataUpdatedAt: t?.updatedAt,
							manual: t?.manual,
						}),
						r
					);
				}
				setState(e, t) {
					this.#f({ type: 'setState', state: e, setStateOptions: t });
				}
				cancel(e) {
					let t = this.#h?.promise;
					return (
						this.#h?.cancel(e),
						t ? t.then(tn).catch(tn) : Promise.resolve()
					);
				}
				destroy() {
					(super.destroy(), this.cancel({ silent: !0 }));
				}
				reset() {
					(this.destroy(), this.setState(this.#u));
				}
				isActive() {
					return this.observers.some((e) => !1 !== tu(e.options.enabled, this));
				}
				isDisabled() {
					return this.getObserversCount() > 0
						? !this.isActive()
						: this.options.queryFn === tw ||
								this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
				}
				isStatic() {
					return (
						this.getObserversCount() > 0 &&
						this.observers.some(
							(e) => 'static' === to(e.options.staleTime, this),
						)
					);
				}
				isStale() {
					return this.getObserversCount() > 0
						? this.observers.some((e) => e.getCurrentResult().isStale)
						: void 0 === this.state.data || this.state.isInvalidated;
				}
				isStaleByTime(e = 0) {
					return (
						void 0 === this.state.data ||
						('static' !== e &&
							(!!this.state.isInvalidated || !ti(this.state.dataUpdatedAt, e)))
					);
				}
				onFocus() {
					let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
					(e?.refetch({ cancelRefetch: !1 }), this.#h?.continue());
				}
				onOnline() {
					let e = this.observers.find((e) => e.shouldFetchOnReconnect());
					(e?.refetch({ cancelRefetch: !1 }), this.#h?.continue());
				}
				addObserver(e) {
					this.observers.includes(e) ||
						(this.observers.push(e),
						this.clearGcTimeout(),
						this.#l.notify({
							type: 'observerAdded',
							query: this,
							observer: e,
						}));
				}
				removeObserver(e) {
					this.observers.includes(e) &&
						((this.observers = this.observers.filter((t) => t !== e)),
						this.observers.length ||
							(this.#h &&
								(this.#p
									? this.#h.cancel({ revert: !0 })
									: this.#h.cancelRetry()),
							this.scheduleGc()),
						this.#l.notify({
							type: 'observerRemoved',
							query: this,
							observer: e,
						}));
				}
				getObserversCount() {
					return this.observers.length;
				}
				invalidate() {
					this.state.isInvalidated || this.#f({ type: 'invalidate' });
				}
				async fetch(e, t) {
					let r;
					if (
						'idle' !== this.state.fetchStatus &&
						this.#h?.status() !== 'rejected'
					) {
						if (void 0 !== this.state.data && t?.cancelRefetch)
							this.cancel({ silent: !0 });
						else if (this.#h) return (this.#h.continueRetry(), this.#h.promise);
					}
					if ((e && this.setOptions(e), !this.options.queryFn)) {
						let e = this.observers.find((e) => e.options.queryFn);
						e && this.setOptions(e.options);
					}
					let n = new AbortController(),
						s = (e) => {
							Object.defineProperty(e, 'signal', {
								enumerable: !0,
								get: () => ((this.#p = !0), n.signal),
							});
						},
						i = () => {
							let e,
								r = tP(this.options, t),
								n =
									(s(
										(e = {
											client: this.#c,
											queryKey: this.queryKey,
											meta: this.meta,
										}),
									),
									e);
							return ((this.#p = !1), this.options.persister)
								? this.options.persister(r, n, this)
								: r(n);
						},
						o =
							(s(
								(r = {
									fetchOptions: t,
									options: this.options,
									queryKey: this.queryKey,
									client: this.#c,
									state: this.state,
									fetchFn: i,
								}),
							),
							r);
					(this.options.behavior?.onFetch(o, this),
						(this.#a = this.state),
						('idle' === this.state.fetchStatus ||
							this.state.fetchMeta !== o.fetchOptions?.meta) &&
							this.#f({ type: 'fetch', meta: o.fetchOptions?.meta }),
						(this.#h = t6({
							initialPromise: t?.initialPromise,
							fn: o.fetchFn,
							onCancel: (e) => {
								(e instanceof t4 &&
									e.revert &&
									this.setState({ ...this.#a, fetchStatus: 'idle' }),
									n.abort());
							},
							onFail: (e, t) => {
								this.#f({ type: 'failed', failureCount: e, error: t });
							},
							onPause: () => {
								this.#f({ type: 'pause' });
							},
							onContinue: () => {
								this.#f({ type: 'continue' });
							},
							retry: o.options.retry,
							retryDelay: o.options.retryDelay,
							networkMode: o.options.networkMode,
							canRun: () => !0,
						})));
					try {
						let e = await this.#h.start();
						if (void 0 === e)
							throw Error(`${this.queryHash} data is undefined`);
						return (
							this.setData(e),
							this.#l.config.onSuccess?.(e, this),
							this.#l.config.onSettled?.(e, this.state.error, this),
							e
						);
					} catch (e) {
						if (e instanceof t4) {
							if (e.silent) return this.#h.promise;
							else if (e.revert) {
								if (void 0 === this.state.data) throw e;
								return this.state.data;
							}
						}
						throw (
							this.#f({ type: 'error', error: e }),
							this.#l.config.onError?.(e, this),
							this.#l.config.onSettled?.(this.state.data, e, this),
							e
						);
					} finally {
						this.scheduleGc();
					}
				}
				#f(e) {
					let t = (t) => {
						switch (e.type) {
							case 'failed':
								return {
									...t,
									fetchFailureCount: e.failureCount,
									fetchFailureReason: e.error,
								};
							case 'pause':
								return { ...t, fetchStatus: 'paused' };
							case 'continue':
								return { ...t, fetchStatus: 'fetching' };
							case 'fetch':
								return {
									...t,
									...t5(t.data, this.options),
									fetchMeta: e.meta ?? null,
								};
							case 'success':
								let r = {
									...t,
									data: e.data,
									dataUpdateCount: t.dataUpdateCount + 1,
									dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
									error: null,
									isInvalidated: !1,
									status: 'success',
									...(!e.manual && {
										fetchStatus: 'idle',
										fetchFailureCount: 0,
										fetchFailureReason: null,
									}),
								};
								return ((this.#a = e.manual ? r : void 0), r);
							case 'error':
								let n = e.error;
								return {
									...t,
									error: n,
									errorUpdateCount: t.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: t.fetchFailureCount + 1,
									fetchFailureReason: n,
									fetchStatus: 'idle',
									status: 'error',
								};
							case 'invalidate':
								return { ...t, isInvalidated: !0 };
							case 'setState':
								return { ...t, ...e.state };
						}
					};
					((this.state = t(this.state)),
						tZ.batch(() => {
							(this.observers.forEach((e) => {
								e.onQueryUpdate();
							}),
								this.#l.notify({ query: this, type: 'updated', action: e }));
						}));
				}
			};
		function t5(e, t) {
			return {
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchStatus: t3(t.networkMode) ? 'fetching' : 'paused',
				...(void 0 === e && { error: null, status: 'pending' }),
			};
		}
		function re(e) {
			let t =
					'function' == typeof e.initialData ? e.initialData() : e.initialData,
				r = void 0 !== t,
				n = r
					? 'function' == typeof e.initialDataUpdatedAt
						? e.initialDataUpdatedAt()
						: e.initialDataUpdatedAt
					: 0;
			return {
				data: t,
				dataUpdateCount: 0,
				dataUpdatedAt: r ? (n ?? Date.now()) : 0,
				error: null,
				errorUpdateCount: 0,
				errorUpdatedAt: 0,
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchMeta: null,
				isInvalidated: !1,
				status: r ? 'success' : 'pending',
				fetchStatus: 'idle',
			};
		}
		var rt = class extends t0 {
				constructor(e = {}) {
					(super(), (this.config = e), (this.#y = new Map()));
				}
				#y;
				build(e, t, r) {
					let n = t.queryKey,
						s = t.queryHash ?? tc(n, t),
						i = this.get(s);
					return (
						i ||
							((i = new t9({
								client: e,
								queryKey: n,
								queryHash: s,
								options: e.defaultQueryOptions(t),
								state: r,
								defaultOptions: e.getQueryDefaults(n),
							})),
							this.add(i)),
						i
					);
				}
				add(e) {
					this.#y.has(e.queryHash) ||
						(this.#y.set(e.queryHash, e),
						this.notify({ type: 'added', query: e }));
				}
				remove(e) {
					let t = this.#y.get(e.queryHash);
					t &&
						(e.destroy(),
						t === e && this.#y.delete(e.queryHash),
						this.notify({ type: 'removed', query: e }));
				}
				clear() {
					tZ.batch(() => {
						this.getAll().forEach((e) => {
							this.remove(e);
						});
					});
				}
				get(e) {
					return this.#y.get(e);
				}
				getAll() {
					return [...this.#y.values()];
				}
				find(e) {
					let t = { exact: !0, ...e };
					return this.getAll().find((e) => ta(t, e));
				}
				findAll(e = {}) {
					let t = this.getAll();
					return Object.keys(e).length > 0 ? t.filter((t) => ta(e, t)) : t;
				}
				notify(e) {
					tZ.batch(() => {
						this.listeners.forEach((t) => {
							t(e);
						});
					});
				}
				onFocus() {
					tZ.batch(() => {
						this.getAll().forEach((e) => {
							e.onFocus();
						});
					});
				}
				onOnline() {
					tZ.batch(() => {
						this.getAll().forEach((e) => {
							e.onOnline();
						});
					});
				}
			},
			rr = class extends t8 {
				#c;
				#m;
				#b;
				#h;
				constructor(e) {
					(super(),
						(this.#c = e.client),
						(this.mutationId = e.mutationId),
						(this.#b = e.mutationCache),
						(this.#m = []),
						(this.state = e.state || rn()),
						this.setOptions(e.options),
						this.scheduleGc());
				}
				setOptions(e) {
					((this.options = e), this.updateGcTime(this.options.gcTime));
				}
				get meta() {
					return this.options.meta;
				}
				addObserver(e) {
					this.#m.includes(e) ||
						(this.#m.push(e),
						this.clearGcTimeout(),
						this.#b.notify({
							type: 'observerAdded',
							mutation: this,
							observer: e,
						}));
				}
				removeObserver(e) {
					((this.#m = this.#m.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#b.notify({
							type: 'observerRemoved',
							mutation: this,
							observer: e,
						}));
				}
				optionalRemove() {
					this.#m.length ||
						('pending' === this.state.status
							? this.scheduleGc()
							: this.#b.remove(this));
				}
				continue() {
					return this.#h?.continue() ?? this.execute(this.state.variables);
				}
				async execute(e) {
					let t = () => {
							this.#f({ type: 'continue' });
						},
						r = {
							client: this.#c,
							meta: this.options.meta,
							mutationKey: this.options.mutationKey,
						};
					this.#h = t6({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(e, r)
								: Promise.reject(Error('No mutationFn found')),
						onFail: (e, t) => {
							this.#f({ type: 'failed', failureCount: e, error: t });
						},
						onPause: () => {
							this.#f({ type: 'pause' });
						},
						onContinue: t,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#b.canRun(this),
					});
					let n = 'pending' === this.state.status,
						s = !this.#h.canStart();
					try {
						if (n) t();
						else {
							(this.#f({ type: 'pending', variables: e, isPaused: s }),
								await this.#b.config.onMutate?.(e, this, r));
							let t = await this.options.onMutate?.(e, r);
							t !== this.state.context &&
								this.#f({
									type: 'pending',
									context: t,
									variables: e,
									isPaused: s,
								});
						}
						let i = await this.#h.start();
						return (
							await this.#b.config.onSuccess?.(
								i,
								e,
								this.state.context,
								this,
								r,
							),
							await this.options.onSuccess?.(i, e, this.state.context, r),
							await this.#b.config.onSettled?.(
								i,
								null,
								this.state.variables,
								this.state.context,
								this,
								r,
							),
							await this.options.onSettled?.(i, null, e, this.state.context, r),
							this.#f({ type: 'success', data: i }),
							i
						);
					} catch (t) {
						try {
							throw (
								await this.#b.config.onError?.(
									t,
									e,
									this.state.context,
									this,
									r,
								),
								await this.options.onError?.(t, e, this.state.context, r),
								await this.#b.config.onSettled?.(
									void 0,
									t,
									this.state.variables,
									this.state.context,
									this,
									r,
								),
								await this.options.onSettled?.(
									void 0,
									t,
									e,
									this.state.context,
									r,
								),
								t
							);
						} finally {
							this.#f({ type: 'error', error: t });
						}
					} finally {
						this.#b.runNext(this);
					}
				}
				#f(e) {
					((this.state = ((t) => {
						switch (e.type) {
							case 'failed':
								return {
									...t,
									failureCount: e.failureCount,
									failureReason: e.error,
								};
							case 'pause':
								return { ...t, isPaused: !0 };
							case 'continue':
								return { ...t, isPaused: !1 };
							case 'pending':
								return {
									...t,
									context: e.context,
									data: void 0,
									failureCount: 0,
									failureReason: null,
									error: null,
									isPaused: e.isPaused,
									status: 'pending',
									variables: e.variables,
									submittedAt: Date.now(),
								};
							case 'success':
								return {
									...t,
									data: e.data,
									failureCount: 0,
									failureReason: null,
									error: null,
									status: 'success',
									isPaused: !1,
								};
							case 'error':
								return {
									...t,
									data: void 0,
									error: e.error,
									failureCount: t.failureCount + 1,
									failureReason: e.error,
									isPaused: !1,
									status: 'error',
								};
						}
					})(this.state)),
						tZ.batch(() => {
							(this.#m.forEach((t) => {
								t.onMutationUpdate(e);
							}),
								this.#b.notify({ mutation: this, type: 'updated', action: e }));
						}));
				}
			};
		function rn() {
			return {
				context: void 0,
				data: void 0,
				error: null,
				failureCount: 0,
				failureReason: null,
				isPaused: !1,
				status: 'idle',
				variables: void 0,
				submittedAt: 0,
			};
		}
		var rs = class extends t0 {
			constructor(e = {}) {
				(super(),
					(this.config = e),
					(this.#v = new Set()),
					(this.#g = new Map()),
					(this.#O = 0));
			}
			#v;
			#g;
			#O;
			build(e, t, r) {
				let n = new rr({
					client: e,
					mutationCache: this,
					mutationId: ++this.#O,
					options: e.defaultMutationOptions(t),
					state: r,
				});
				return (this.add(n), n);
			}
			add(e) {
				this.#v.add(e);
				let t = ri(e);
				if ('string' == typeof t) {
					let r = this.#g.get(t);
					r ? r.push(e) : this.#g.set(t, [e]);
				}
				this.notify({ type: 'added', mutation: e });
			}
			remove(e) {
				if (this.#v.delete(e)) {
					let t = ri(e);
					if ('string' == typeof t) {
						let r = this.#g.get(t);
						if (r)
							if (r.length > 1) {
								let t = r.indexOf(e);
								-1 !== t && r.splice(t, 1);
							} else r[0] === e && this.#g.delete(t);
					}
				}
				this.notify({ type: 'removed', mutation: e });
			}
			canRun(e) {
				let t = ri(e);
				if ('string' != typeof t) return !0;
				{
					let r = this.#g.get(t),
						n = r?.find((e) => 'pending' === e.state.status);
					return !n || n === e;
				}
			}
			runNext(e) {
				let t = ri(e);
				if ('string' != typeof t) return Promise.resolve();
				{
					let r = this.#g.get(t)?.find((t) => t !== e && t.state.isPaused);
					return r?.continue() ?? Promise.resolve();
				}
			}
			clear() {
				tZ.batch(() => {
					(this.#v.forEach((e) => {
						this.notify({ type: 'removed', mutation: e });
					}),
						this.#v.clear(),
						this.#g.clear());
				});
			}
			getAll() {
				return Array.from(this.#v);
			}
			find(e) {
				let t = { exact: !0, ...e };
				return this.getAll().find((e) => tl(t, e));
			}
			findAll(e = {}) {
				return this.getAll().filter((t) => tl(e, t));
			}
			notify(e) {
				tZ.batch(() => {
					this.listeners.forEach((t) => {
						t(e);
					});
				});
			}
			resumePausedMutations() {
				let e = this.getAll().filter((e) => e.state.isPaused);
				return tZ.batch(() =>
					Promise.all(e.map((e) => e.continue().catch(tn))),
				);
			}
		};
		function ri(e) {
			return e.options.scope?.id;
		}
		function ro(e) {
			return {
				onFetch: (t, r) => {
					let n = t.options,
						s = t.fetchOptions?.meta?.fetchMore?.direction,
						i = t.state.data?.pages || [],
						o = t.state.data?.pageParams || [],
						u = { pages: [], pageParams: [] },
						a = 0,
						l = async () => {
							let r = !1,
								l = tP(t.options, t.fetchOptions),
								c = async (e, n, s) => {
									let i;
									if (r) return Promise.reject();
									if (null == n && e.pages.length) return Promise.resolve(e);
									let o =
											(Object.defineProperty(
												(i = {
													client: t.client,
													queryKey: t.queryKey,
													pageParam: n,
													direction: s ? 'backward' : 'forward',
													meta: t.options.meta,
												}),
												'signal',
												{
													enumerable: !0,
													get: () => (
														t.signal.aborted
															? (r = !0)
															: t.signal.addEventListener('abort', () => {
																	r = !0;
																}),
														t.signal
													),
												},
											),
											i),
										u = await l(o),
										{ maxPages: a } = t.options,
										c = s ? tx : tO;
									return {
										pages: c(e.pages, u, a),
										pageParams: c(e.pageParams, n, a),
									};
								};
							if (s && i.length) {
								let e = 'backward' === s,
									t = { pages: i, pageParams: o },
									r = (e ? ra : ru)(n, t);
								u = await c(t, r, e);
							} else {
								let t = e ?? i.length;
								do {
									let e = 0 === a ? (o[0] ?? n.initialPageParam) : ru(n, u);
									if (a > 0 && null == e) break;
									((u = await c(u, e)), a++);
								} while (a < t);
							}
							return u;
						};
					t.options.persister
						? (t.fetchFn = () =>
								t.options.persister?.(
									l,
									{
										client: t.client,
										queryKey: t.queryKey,
										meta: t.options.meta,
										signal: t.signal,
									},
									r,
								))
						: (t.fetchFn = l);
				},
			};
		}
		function ru(e, { pages: t, pageParams: r }) {
			let n = t.length - 1;
			return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
		}
		function ra(e, { pages: t, pageParams: r }) {
			return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
		}
		var rl = class {
				#x;
				#b;
				#d;
				#w;
				#P;
				#j;
				#S;
				#C;
				constructor(e = {}) {
					((this.#x = e.queryCache || new rt()),
						(this.#b = e.mutationCache || new rs()),
						(this.#d = e.defaultOptions || {}),
						(this.#w = new Map()),
						(this.#P = new Map()),
						(this.#j = 0));
				}
				mount() {
					(this.#j++,
						1 === this.#j &&
							((this.#S = t1.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#x.onFocus());
							})),
							(this.#C = t2.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#x.onOnline());
							}))));
				}
				unmount() {
					(this.#j--,
						0 === this.#j &&
							(this.#S?.(),
							(this.#S = void 0),
							this.#C?.(),
							(this.#C = void 0)));
				}
				isFetching(e) {
					return this.#x.findAll({ ...e, fetchStatus: 'fetching' }).length;
				}
				isMutating(e) {
					return this.#b.findAll({ ...e, status: 'pending' }).length;
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#x.get(t.queryHash)?.state.data;
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						r = this.#x.build(this, t),
						n = r.state.data;
					return void 0 === n
						? this.fetchQuery(e)
						: (e.revalidateIfStale &&
								r.isStaleByTime(to(t.staleTime, r)) &&
								this.prefetchQuery(t),
							Promise.resolve(n));
				}
				getQueriesData(e) {
					return this.#x
						.findAll(e)
						.map(({ queryKey: e, state: t }) => [e, t.data]);
				}
				setQueryData(e, t, r) {
					let n = this.defaultQueryOptions({ queryKey: e }),
						s = this.#x.get(n.queryHash),
						i = s?.state.data,
						o = 'function' == typeof t ? t(i) : t;
					if (void 0 !== o)
						return this.#x.build(this, n).setData(o, { ...r, manual: !0 });
				}
				setQueriesData(e, t, r) {
					return tZ.batch(() =>
						this.#x
							.findAll(e)
							.map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]),
					);
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#x.get(t.queryHash)?.state;
				}
				removeQueries(e) {
					let t = this.#x;
					tZ.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e);
						});
					});
				}
				resetQueries(e, t) {
					let r = this.#x;
					return tZ.batch(
						() => (
							r.findAll(e).forEach((e) => {
								e.reset();
							}),
							this.refetchQueries({ type: 'active', ...e }, t)
						),
					);
				}
				cancelQueries(e, t = {}) {
					let r = { revert: !0, ...t };
					return Promise.all(
						tZ.batch(() => this.#x.findAll(e).map((e) => e.cancel(r))),
					)
						.then(tn)
						.catch(tn);
				}
				invalidateQueries(e, t = {}) {
					return tZ.batch(() =>
						(this.#x.findAll(e).forEach((e) => {
							e.invalidate();
						}),
						e?.refetchType === 'none')
							? Promise.resolve()
							: this.refetchQueries(
									{ ...e, type: e?.refetchType ?? e?.type ?? 'active' },
									t,
								),
					);
				}
				refetchQueries(e, t = {}) {
					let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
					return Promise.all(
						tZ.batch(() =>
							this.#x
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, r);
									return (
										r.throwOnError || (t = t.catch(tn)),
										'paused' === e.state.fetchStatus ? Promise.resolve() : t
									);
								}),
						),
					).then(tn);
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e);
					void 0 === t.retry && (t.retry = !1);
					let r = this.#x.build(this, t);
					return r.isStaleByTime(to(t.staleTime, r))
						? r.fetch(t)
						: Promise.resolve(r.state.data);
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(tn).catch(tn);
				}
				fetchInfiniteQuery(e) {
					return ((e.behavior = ro(e.pages)), this.fetchQuery(e));
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(tn).catch(tn);
				}
				ensureInfiniteQueryData(e) {
					return ((e.behavior = ro(e.pages)), this.ensureQueryData(e));
				}
				resumePausedMutations() {
					return t2.isOnline()
						? this.#b.resumePausedMutations()
						: Promise.resolve();
				}
				getQueryCache() {
					return this.#x;
				}
				getMutationCache() {
					return this.#b;
				}
				getDefaultOptions() {
					return this.#d;
				}
				setDefaultOptions(e) {
					this.#d = e;
				}
				setQueryDefaults(e, t) {
					this.#w.set(th(e), { queryKey: e, defaultOptions: t });
				}
				getQueryDefaults(e) {
					let t = [...this.#w.values()],
						r = {};
					return (
						t.forEach((t) => {
							td(e, t.queryKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				setMutationDefaults(e, t) {
					this.#P.set(th(e), { mutationKey: e, defaultOptions: t });
				}
				getMutationDefaults(e) {
					let t = [...this.#P.values()],
						r = {};
					return (
						t.forEach((t) => {
							td(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e;
					let t = {
						...this.#d.queries,
						...this.getQueryDefaults(e.queryKey),
						...e,
						_defaulted: !0,
					};
					return (
						t.queryHash || (t.queryHash = tc(t.queryKey, t)),
						void 0 === t.refetchOnReconnect &&
							(t.refetchOnReconnect = 'always' !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
						t.queryFn === tw && (t.enabled = !1),
						t
					);
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#d.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							};
				}
				clear() {
					(this.#x.clear(), this.#b.clear());
				}
			},
			rc = class extends t0 {
				constructor(e, t) {
					(super(),
						(this.options = t),
						(this.#c = e),
						(this.#Q = null),
						(this.#_ = tS()),
						this.bindMethods(),
						this.setOptions(t));
				}
				#c;
				#q = void 0;
				#R = void 0;
				#E = void 0;
				#D;
				#M;
				#_;
				#Q;
				#I;
				#T;
				#k;
				#F;
				#A;
				#U;
				#K = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#q.addObserver(this),
						rh(this.#q, this.options) ? this.#L() : this.updateResult(),
						this.#N());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return rd(this.#q, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return rd(this.#q, this.options, this.options.refetchOnWindowFocus);
				}
				destroy() {
					((this.listeners = new Set()),
						this.#H(),
						this.#G(),
						this.#q.removeObserver(this));
				}
				setOptions(e) {
					let t = this.options,
						r = this.#q;
					if (
						((this.options = this.#c.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							'boolean' != typeof this.options.enabled &&
							'function' != typeof this.options.enabled &&
							'boolean' != typeof tu(this.options.enabled, this.#q))
					)
						throw Error(
							'Expected enabled to be a boolean or a callback that returns a boolean',
						);
					(this.#W(),
						this.#q.setOptions(this.options),
						t._defaulted &&
							!ty(this.options, t) &&
							this.#c
								.getQueryCache()
								.notify({
									type: 'observerOptionsUpdated',
									query: this.#q,
									observer: this,
								}));
					let n = this.hasListeners();
					(n && rp(this.#q, r, this.options, t) && this.#L(),
						this.updateResult(),
						n &&
							(this.#q !== r ||
								tu(this.options.enabled, this.#q) !== tu(t.enabled, this.#q) ||
								to(this.options.staleTime, this.#q) !==
									to(t.staleTime, this.#q)) &&
							this.#z());
					let s = this.#$();
					n &&
						(this.#q !== r ||
							tu(this.options.enabled, this.#q) !== tu(t.enabled, this.#q) ||
							s !== this.#U) &&
						this.#B(s);
				}
				getOptimisticResult(e) {
					var t, r;
					let n = this.#c.getQueryCache().build(this.#c, e),
						s = this.createResult(n, e);
					return (
						(t = this),
						(r = s),
						ty(t.getCurrentResult(), r) ||
							((this.#E = s),
							(this.#M = this.options),
							(this.#D = this.#q.state)),
						s
					);
				}
				getCurrentResult() {
					return this.#E;
				}
				trackResult(e, t) {
					return new Proxy(e, {
						get: (e, r) => (
							this.trackProp(r),
							t?.(r),
							'promise' === r &&
								(this.trackProp('data'),
								this.options.experimental_prefetchInRender ||
									'pending' !== this.#_.status ||
									this.#_.reject(
										Error(
											'experimental_prefetchInRender feature flag is not enabled',
										),
									)),
							Reflect.get(e, r)
						),
					});
				}
				trackProp(e) {
					this.#K.add(e);
				}
				getCurrentQuery() {
					return this.#q;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					let t = this.#c.defaultQueryOptions(e),
						r = this.#c.getQueryCache().build(this.#c, t);
					return r.fetch().then(() => this.createResult(r, t));
				}
				fetch(e) {
					return this.#L({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
						() => (this.updateResult(), this.#E),
					);
				}
				#L(e) {
					this.#W();
					let t = this.#q.fetch(this.options, e);
					return (e?.throwOnError || (t = t.catch(tn)), t);
				}
				#z() {
					this.#H();
					let e = to(this.options.staleTime, this.#q);
					if (tr || this.#E.isStale || !ts(e)) return;
					let t = ti(this.#E.dataUpdatedAt, e);
					this.#F = tt.setTimeout(() => {
						this.#E.isStale || this.updateResult();
					}, t + 1);
				}
				#$() {
					return (
						('function' == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#q)
							: this.options.refetchInterval) ?? !1
					);
				}
				#B(e) {
					(this.#G(),
						(this.#U = e),
						!tr &&
							!1 !== tu(this.options.enabled, this.#q) &&
							ts(this.#U) &&
							0 !== this.#U &&
							(this.#A = tt.setInterval(() => {
								(this.options.refetchIntervalInBackground || t1.isFocused()) &&
									this.#L();
							}, this.#U)));
				}
				#N() {
					(this.#z(), this.#B(this.#$()));
				}
				#H() {
					this.#F && (tt.clearTimeout(this.#F), (this.#F = void 0));
				}
				#G() {
					this.#A && (tt.clearInterval(this.#A), (this.#A = void 0));
				}
				createResult(e, t) {
					let r,
						n = this.#q,
						s = this.options,
						i = this.#E,
						o = this.#D,
						u = this.#M,
						a = e !== n ? e.state : this.#R,
						{ state: l } = e,
						c = { ...l },
						h = !1;
					if (t._optimisticResults) {
						let r = this.hasListeners(),
							i = !r && rh(e, t),
							o = r && rp(e, n, t, s);
						((i || o) && (c = { ...c, ...t5(l.data, e.options) }),
							'isRestoring' === t._optimisticResults &&
								(c.fetchStatus = 'idle'));
					}
					let { error: d, errorUpdatedAt: p, status: f } = c;
					r = c.data;
					let y = !1;
					if (void 0 !== t.placeholderData && void 0 === r && 'pending' === f) {
						let e;
						(i?.isPlaceholderData && t.placeholderData === u?.placeholderData
							? ((e = i.data), (y = !0))
							: (e =
									'function' == typeof t.placeholderData
										? t.placeholderData(this.#k?.state.data, this.#k)
										: t.placeholderData),
							void 0 !== e &&
								((f = 'success'), (r = tg(i?.data, e, t)), (h = !0)));
					}
					if (t.select && void 0 !== r && !y)
						if (i && r === o?.data && t.select === this.#I) r = this.#T;
						else
							try {
								((this.#I = t.select),
									(r = t.select(r)),
									(r = tg(i?.data, r, t)),
									(this.#T = r),
									(this.#Q = null));
							} catch (e) {
								this.#Q = e;
							}
					this.#Q &&
						((d = this.#Q), (r = this.#T), (p = Date.now()), (f = 'error'));
					let m = 'fetching' === c.fetchStatus,
						b = 'pending' === f,
						v = 'error' === f,
						g = b && m,
						O = void 0 !== r,
						x = {
							status: f,
							fetchStatus: c.fetchStatus,
							isPending: b,
							isSuccess: 'success' === f,
							isError: v,
							isInitialLoading: g,
							isLoading: g,
							data: r,
							dataUpdatedAt: c.dataUpdatedAt,
							error: d,
							errorUpdatedAt: p,
							failureCount: c.fetchFailureCount,
							failureReason: c.fetchFailureReason,
							errorUpdateCount: c.errorUpdateCount,
							isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
							isFetchedAfterMount:
								c.dataUpdateCount > a.dataUpdateCount ||
								c.errorUpdateCount > a.errorUpdateCount,
							isFetching: m,
							isRefetching: m && !b,
							isLoadingError: v && !O,
							isPaused: 'paused' === c.fetchStatus,
							isPlaceholderData: h,
							isRefetchError: v && O,
							isStale: rf(e, t),
							refetch: this.refetch,
							promise: this.#_,
							isEnabled: !1 !== tu(t.enabled, e),
						};
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								'error' === x.status
									? e.reject(x.error)
									: void 0 !== x.data && e.resolve(x.data);
							},
							r = () => {
								t((this.#_ = x.promise = tS()));
							},
							s = this.#_;
						switch (s.status) {
							case 'pending':
								e.queryHash === n.queryHash && t(s);
								break;
							case 'fulfilled':
								('error' === x.status || x.data !== s.value) && r();
								break;
							case 'rejected':
								('error' !== x.status || x.error !== s.reason) && r();
						}
					}
					return x;
				}
				updateResult() {
					let e = this.#E,
						t = this.createResult(this.#q, this.options);
					if (
						((this.#D = this.#q.state),
						(this.#M = this.options),
						void 0 !== this.#D.data && (this.#k = this.#q),
						ty(t, e))
					)
						return;
					this.#E = t;
					let r = () => {
						if (!e) return !0;
						let { notifyOnChangeProps: t } = this.options,
							r = 'function' == typeof t ? t() : t;
						if ('all' === r || (!r && !this.#K.size)) return !0;
						let n = new Set(r ?? this.#K);
						return (
							this.options.throwOnError && n.add('error'),
							Object.keys(this.#E).some((t) => this.#E[t] !== e[t] && n.has(t))
						);
					};
					this.#J({ listeners: r() });
				}
				#W() {
					let e = this.#c.getQueryCache().build(this.#c, this.options);
					if (e === this.#q) return;
					let t = this.#q;
					((this.#q = e),
						(this.#R = e.state),
						this.hasListeners() &&
							(t?.removeObserver(this), e.addObserver(this)));
				}
				onQueryUpdate() {
					(this.updateResult(), this.hasListeners() && this.#N());
				}
				#J(e) {
					tZ.batch(() => {
						(e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#E);
							}),
							this.#c
								.getQueryCache()
								.notify({ query: this.#q, type: 'observerResultsUpdated' }));
					});
				}
			};
		function rh(e, t) {
			return (
				(!1 !== tu(t.enabled, e) &&
					void 0 === e.state.data &&
					('error' !== e.state.status || !1 !== t.retryOnMount)) ||
				(void 0 !== e.state.data && rd(e, t, t.refetchOnMount))
			);
		}
		function rd(e, t, r) {
			if (!1 !== tu(t.enabled, e) && 'static' !== to(t.staleTime, e)) {
				let n = 'function' == typeof r ? r(e) : r;
				return 'always' === n || (!1 !== n && rf(e, t));
			}
			return !1;
		}
		function rp(e, t, r, n) {
			return (
				(e !== t || !1 === tu(n.enabled, e)) &&
				(!r.suspense || 'error' !== e.state.status) &&
				rf(e, r)
			);
		}
		function rf(e, t) {
			return !1 !== tu(t.enabled, e) && e.isStaleByTime(to(t.staleTime, e));
		}
		var ry = class extends rc {
				constructor(e, t) {
					super(e, t);
				}
				bindMethods() {
					(super.bindMethods(),
						(this.fetchNextPage = this.fetchNextPage.bind(this)),
						(this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
				}
				setOptions(e) {
					super.setOptions({ ...e, behavior: ro() });
				}
				getOptimisticResult(e) {
					return ((e.behavior = ro()), super.getOptimisticResult(e));
				}
				fetchNextPage(e) {
					return this.fetch({
						...e,
						meta: { fetchMore: { direction: 'forward' } },
					});
				}
				fetchPreviousPage(e) {
					return this.fetch({
						...e,
						meta: { fetchMore: { direction: 'backward' } },
					});
				}
				createResult(e, t) {
					var r, n;
					let { state: s } = e,
						i = super.createResult(e, t),
						{
							isFetching: o,
							isRefetching: u,
							isError: a,
							isRefetchError: l,
						} = i,
						c = s.fetchMeta?.fetchMore?.direction,
						h = a && 'forward' === c,
						d = o && 'forward' === c,
						p = a && 'backward' === c,
						f = o && 'backward' === c;
					return {
						...i,
						fetchNextPage: this.fetchNextPage,
						fetchPreviousPage: this.fetchPreviousPage,
						hasNextPage: !!(r = s.data) && null != ru(t, r),
						hasPreviousPage:
							!!(n = s.data) && !!t.getPreviousPageParam && null != ra(t, n),
						isFetchNextPageError: h,
						isFetchingNextPage: d,
						isFetchPreviousPageError: p,
						isFetchingPreviousPage: f,
						isRefetchError: l && !h && !p,
						isRefetching: u && !d && !f,
					};
				}
			},
			rm = e5.createContext(
				((a = !1),
				{
					clearReset: () => {
						a = !1;
					},
					reset: () => {
						a = !0;
					},
					isReset: () => a,
				}),
			),
			rb = (e, t) => {
				(e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
					!t.isReset() &&
					(e.retryOnMount = !1);
			},
			rv = (e) => {
				e5.useEffect(() => {
					e.clearReset();
				}, [e]);
			},
			rg = ({
				result: e,
				errorResetBoundary: t,
				throwOnError: r,
				query: n,
				suspense: s,
			}) =>
				e.isError &&
				!t.isReset() &&
				!e.isFetching &&
				n &&
				((s && void 0 === e.data) || tj(r, [e.error, n])),
			rO = e5.createContext(!1);
		rO.Provider;
		var rx = (e, t) => void 0 === t.state.data,
			rw = (e) => {
				if (e.suspense) {
					let t = (e) => ('static' === e ? e : Math.max(e ?? 1e3, 1e3)),
						r = e.staleTime;
					((e.staleTime = 'function' == typeof r ? (...e) => t(r(...e)) : t(r)),
						'number' == typeof e.gcTime &&
							(e.gcTime = Math.max(e.gcTime, 1e3)));
				}
			},
			rP = (e, t) => e.isLoading && e.isFetching && !t,
			rj = (e, t) => e?.suspense && t.isPending,
			rS = (e, t, r) =>
				t.fetchOptimistic(e).catch(() => {
					r.clearReset();
				});
		function rC(e, t, r) {
			let n = e5.useContext(rO),
				s = e5.useContext(rm),
				i = tR(r),
				o = i.defaultQueryOptions(e);
			(i.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
				(o._optimisticResults = n ? 'isRestoring' : 'optimistic'),
				rw(o),
				rb(o, s),
				rv(s));
			let u = !i.getQueryCache().get(o.queryHash),
				[a] = e5.useState(() => new t(i, o)),
				l = a.getOptimisticResult(o),
				c = !n && !1 !== e.subscribed;
			if (
				(e5.useSyncExternalStore(
					e5.useCallback(
						(e) => {
							let t = c ? a.subscribe(tZ.batchCalls(e)) : tn;
							return (a.updateResult(), t);
						},
						[a, c],
					),
					() => a.getCurrentResult(),
					() => a.getCurrentResult(),
				),
				e5.useEffect(() => {
					a.setOptions(o);
				}, [o, a]),
				rj(o, l))
			)
				throw rS(o, a, s);
			if (
				rg({
					result: l,
					errorResetBoundary: s,
					throwOnError: o.throwOnError,
					query: i.getQueryCache().get(o.queryHash),
					suspense: o.suspense,
				})
			)
				throw l.error;
			if (
				(i.getDefaultOptions().queries?._experimental_afterQuery?.(o, l),
				o.experimental_prefetchInRender && !tr && rP(l, n))
			) {
				let e = u ? rS(o, a, s) : i.getQueryCache().get(o.queryHash)?.promise;
				e?.catch(tn).finally(() => {
					a.updateResult();
				});
			}
			return o.notifyOnChangeProps ? l : a.trackResult(l);
		}
		var rQ = class extends t0 {
			#c;
			#E = void 0;
			#Y;
			#V;
			constructor(e, t) {
				(super(),
					(this.#c = e),
					this.setOptions(t),
					this.bindMethods(),
					this.#X());
			}
			bindMethods() {
				((this.mutate = this.mutate.bind(this)),
					(this.reset = this.reset.bind(this)));
			}
			setOptions(e) {
				let t = this.options;
				((this.options = this.#c.defaultMutationOptions(e)),
					ty(this.options, t) ||
						this.#c
							.getMutationCache()
							.notify({
								type: 'observerOptionsUpdated',
								mutation: this.#Y,
								observer: this,
							}),
					t?.mutationKey &&
					this.options.mutationKey &&
					th(t.mutationKey) !== th(this.options.mutationKey)
						? this.reset()
						: this.#Y?.state.status === 'pending' &&
							this.#Y.setOptions(this.options));
			}
			onUnsubscribe() {
				this.hasListeners() || this.#Y?.removeObserver(this);
			}
			onMutationUpdate(e) {
				(this.#X(), this.#J(e));
			}
			getCurrentResult() {
				return this.#E;
			}
			reset() {
				(this.#Y?.removeObserver(this),
					(this.#Y = void 0),
					this.#X(),
					this.#J());
			}
			mutate(e, t) {
				return (
					(this.#V = t),
					this.#Y?.removeObserver(this),
					(this.#Y = this.#c.getMutationCache().build(this.#c, this.options)),
					this.#Y.addObserver(this),
					this.#Y.execute(e)
				);
			}
			#X() {
				let e = this.#Y?.state ?? rn();
				this.#E = {
					...e,
					isPending: 'pending' === e.status,
					isSuccess: 'success' === e.status,
					isError: 'error' === e.status,
					isIdle: 'idle' === e.status,
					mutate: this.mutate,
					reset: this.reset,
				};
			}
			#J(e) {
				tZ.batch(() => {
					if (this.#V && this.hasListeners()) {
						let t = this.#E.variables,
							r = this.#E.context,
							n = {
								client: this.#c,
								meta: this.options.meta,
								mutationKey: this.options.mutationKey,
							};
						e?.type === 'success'
							? (this.#V.onSuccess?.(e.data, t, r, n),
								this.#V.onSettled?.(e.data, null, t, r, n))
							: e?.type === 'error' &&
								(this.#V.onError?.(e.error, t, r, n),
								this.#V.onSettled?.(void 0, e.error, t, r, n));
					}
					this.listeners.forEach((e) => {
						e(this.#E);
					});
				});
			}
		};
		function r_(e, t) {
			let r = new Set(t);
			return e.filter((e) => !r.has(e));
		}
		var rq = class extends t0 {
			#c;
			#Z;
			#y;
			#ee;
			#m;
			#et;
			#er;
			#en;
			#es = [];
			constructor(e, t, r) {
				(super(),
					(this.#c = e),
					(this.#ee = r),
					(this.#y = []),
					(this.#m = []),
					(this.#Z = []),
					this.setQueries(t));
			}
			onSubscribe() {
				1 === this.listeners.size &&
					this.#m.forEach((e) => {
						e.subscribe((t) => {
							this.#ei(e, t);
						});
					});
			}
			onUnsubscribe() {
				this.listeners.size || this.destroy();
			}
			destroy() {
				((this.listeners = new Set()),
					this.#m.forEach((e) => {
						e.destroy();
					}));
			}
			setQueries(e, t) {
				((this.#y = e),
					(this.#ee = t),
					tZ.batch(() => {
						let e = this.#m,
							t = this.#eo(this.#y);
						((this.#es = t),
							t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions)));
						let r = t.map((e) => e.observer),
							n = r.map((e) => e.getCurrentResult()),
							s = e.length !== r.length,
							i = r.some((t, r) => t !== e[r]),
							o = s || i,
							u =
								!!o ||
								n.some((e, t) => {
									let r = this.#Z[t];
									return !r || !ty(e, r);
								});
						(o || u) &&
							(o && (this.#m = r),
							(this.#Z = n),
							this.hasListeners() &&
								(o &&
									(r_(e, r).forEach((e) => {
										e.destroy();
									}),
									r_(r, e).forEach((e) => {
										e.subscribe((t) => {
											this.#ei(e, t);
										});
									})),
								this.#J()));
					}));
			}
			getCurrentResult() {
				return this.#Z;
			}
			getQueries() {
				return this.#m.map((e) => e.getCurrentQuery());
			}
			getObservers() {
				return this.#m;
			}
			getOptimisticResult(e, t) {
				let r = this.#eo(e),
					n = r.map((e) =>
						e.observer.getOptimisticResult(e.defaultedQueryOptions),
					);
				return [n, (e) => this.#eu(e ?? n, t), () => this.#ea(n, r)];
			}
			#ea(e, t) {
				return t.map((r, n) => {
					let s = e[n];
					return r.defaultedQueryOptions.notifyOnChangeProps
						? s
						: r.observer.trackResult(s, (e) => {
								t.forEach((t) => {
									t.observer.trackProp(e);
								});
							});
				});
			}
			#eu(e, t) {
				return t
					? ((this.#et && this.#Z === this.#en && t === this.#er) ||
							((this.#er = t),
							(this.#en = this.#Z),
							(this.#et = tf(this.#et, t(e)))),
						this.#et)
					: e;
			}
			#eo(e) {
				let t = new Map(this.#m.map((e) => [e.options.queryHash, e])),
					r = [];
				return (
					e.forEach((e) => {
						let n = this.#c.defaultQueryOptions(e),
							s = t.get(n.queryHash);
						s
							? r.push({ defaultedQueryOptions: n, observer: s })
							: r.push({
									defaultedQueryOptions: n,
									observer: new rc(this.#c, n),
								});
					}),
					r
				);
			}
			#ei(e, t) {
				let r = this.#m.indexOf(e);
				if (-1 !== r) {
					var n;
					let e;
					((this.#Z = ((n = this.#Z), ((e = n.slice(0))[r] = t), e)),
						this.#J());
				}
			}
			#J() {
				if (this.hasListeners()) {
					let e = this.#et,
						t = this.#ea(this.#Z, this.#es);
					e !== this.#eu(t, this.#ee?.combine) &&
						tZ.batch(() => {
							this.listeners.forEach((e) => {
								e(this.#Z);
							});
						});
				}
			}
		};
		function rR({ queries: e, ...t }, r) {
			let n = tR(r),
				s = e5.useContext(rO),
				i = e5.useContext(rm),
				o = e5.useMemo(
					() =>
						e.map((e) => {
							let t = n.defaultQueryOptions(e);
							return (
								(t._optimisticResults = s ? 'isRestoring' : 'optimistic'),
								t
							);
						}),
					[e, n, s],
				);
			(o.forEach((e) => {
				(rw(e), rb(e, i));
			}),
				rv(i));
			let [u] = e5.useState(() => new rq(n, o, t)),
				[a, l, c] = u.getOptimisticResult(o, t.combine),
				h = !s && !1 !== t.subscribed;
			(e5.useSyncExternalStore(
				e5.useCallback((e) => (h ? u.subscribe(tZ.batchCalls(e)) : tn), [u, h]),
				() => u.getCurrentResult(),
				() => u.getCurrentResult(),
			),
				e5.useEffect(() => {
					u.setQueries(o, t);
				}, [o, t, u]));
			let d = a.some((e, t) => rj(o[t], e))
				? a.flatMap((e, t) => {
						let r = o[t];
						if (r) {
							let t = new rc(n, r);
							if (rj(r, e)) return rS(r, t, i);
							rP(e, s) && rS(r, t, i);
						}
						return [];
					})
				: [];
			if (d.length > 0) throw Promise.all(d);
			let p = a.find((e, t) => {
				let r = o[t];
				return (
					r &&
					rg({
						result: e,
						errorResetBoundary: i,
						throwOnError: r.throwOnError,
						query: n.getQueryCache().get(r.queryHash),
						suspense: r.suspense,
					})
				);
			});
			if (p?.error) throw p.error;
			return l(c());
		}
		let rE = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
			rD = null == (S = e5.createContext) ? void 0 : S.call(e5, null);
		var rM = tK(t$(), 1);
		function rI(e) {
			let t = e instanceof eN ? e : e[eH];
			return ed((e) => {
				let r = e.path,
					n = r.join('.'),
					[s, i] = e.args;
				return (0, rM.default)(
					{
						queryKey: tV(r, s, 'query'),
						queryFn: () => t.query(n, s, null == i ? void 0 : i.trpc),
					},
					i,
				);
			});
		}
		var rT = tK(t$(), 1);
		function rk(e, t, r) {
			var n, s;
			let i = e[0],
				o = null == (n = e[1]) ? void 0 : n.input;
			return (
				r &&
					(o = (0, rT.default)(
						(0, rT.default)(
							(0, rT.default)({}, null != (s = o) ? s : {}),
							r.pageParam ? { cursor: r.pageParam } : {},
						),
						{},
						{ direction: r.direction },
					)),
				[i.join('.'), o, null == t ? void 0 : t.trpc]
			);
		}
		var rF = tK(
			tU({
				'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js'(
					e,
					t,
				) {
					function r(e) {
						function t(e) {
							if (Object(e) !== e)
								return Promise.reject(TypeError(e + ' is not an object.'));
							var t = e.done;
							return Promise.resolve(e.value).then(function (e) {
								return { value: e, done: t };
							});
						}
						return (
							((r = function (e) {
								((this.s = e), (this.n = e.next));
							}).prototype = {
								s: null,
								n: null,
								next: function () {
									return t(this.n.apply(this.s, arguments));
								},
								return: function (e) {
									var r = this.s.return;
									return void 0 === r
										? Promise.resolve({ value: e, done: !0 })
										: t(r.apply(this.s, arguments));
								},
								throw: function (e) {
									var r = this.s.return;
									return void 0 === r
										? Promise.reject(e)
										: t(r.apply(this.s, arguments));
								},
							}),
							new r(e)
						);
					}
					((t.exports = function (e) {
						var t,
							n,
							s,
							i = 2;
						for (
							'undefined' != typeof Symbol &&
							((n = Symbol.asyncIterator), (s = Symbol.iterator));
							i--;

						) {
							if (n && null != (t = e[n])) return t.call(e);
							if (s && null != (t = e[s])) return new r(t.call(e));
							((n = '@@asyncIterator'), (s = '@@iterator'));
						}
						throw TypeError('Object is not async iterable');
					}),
						(t.exports.__esModule = !0),
						(t.exports.default = t.exports));
				},
			})(),
			1,
		);
		function rA(e) {
			return { path: e.path.join('.') };
		}
		function rU(e) {
			let t = rA(e);
			return e5.useMemo(() => t, [t]);
		}
		async function rK(e, t, r) {
			let n = t.getQueryCache().build(t, { queryKey: r });
			n.setState({ data: [], status: 'success' });
			let s = [];
			var i = !1,
				o = !1;
			try {
				for (
					var u, a, l = (0, rF.default)(e);
					(i = !(a = await l.next()).done);
					i = !1
				) {
					let e = a.value;
					(s.push(e), n.setState({ data: [...s] }));
				}
			} catch (e) {
				((o = !0), (u = e));
			} finally {
				try {
					i && null != l.return && (await l.return());
				} finally {
					if (o) throw u;
				}
			}
			return s;
		}
		var rL = tK(t$(), 1),
			rN = tK(t$());
		let rH = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
		function rG(e) {
			var t, r, n;
			let s =
					null !=
					(t =
						null == e ||
						null == (r = e.overrides) ||
						null == (r = r.useMutation)
							? void 0
							: r.onSuccess)
						? t
						: (e) => e.originalFn(),
				i = null != (n = null == e ? void 0 : e.context) ? n : rD;
			function o() {
				let e = e5.useContext(i);
				if (!e)
					throw Error(
						'Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?',
					);
				return e;
			}
			function u(e, t) {
				var r;
				let { queryClient: n, ssrState: s } = o();
				return s &&
					'mounted' !== s &&
					(null == (r = n.getQueryCache().find({ queryKey: e }))
						? void 0
						: r.state.status) === 'error'
					? (0, rN.default)({ retryOnMount: !1 }, t)
					: t;
			}
			let a = { data: void 0, error: null, status: 'idle' },
				l = { data: void 0, error: null, status: 'connecting' };
			return {
				Provider: (e) => {
					var t;
					let { abortOnUnmount: r = !1, queryClient: n, ssrContext: s } = e,
						[o, u] = e5.useState(null != (t = e.ssrState) && t),
						a = e.client instanceof eN ? e.client : e.client[eH],
						l = e5.useMemo(
							() =>
								(function (e) {
									let { client: t, queryClient: r } = e,
										n = t instanceof eN ? t : t[eH];
									return {
										infiniteQueryOptions: (e, t, r) => {
											var s, i;
											let o = (null == (s = t[1]) ? void 0 : s.input) === tw,
												u = async (e) => {
													var s;
													let i = (0, rL.default)(
														(0, rL.default)({}, r),
														{},
														{
															trpc: (0, rL.default)(
																(0, rL.default)(
																	{},
																	null == r ? void 0 : r.trpc,
																),
																(
																	null == r || null == (s = r.trpc)
																		? void 0
																		: s.abortOnUnmount
																)
																	? { signal: e.signal }
																	: { signal: null },
															),
														},
													);
													return await n.query(
														...rk(t, i, {
															direction: e.direction,
															pageParam: e.pageParam,
														}),
													);
												};
											return Object.assign(
												(0, rL.default)(
													(0, rL.default)({}, r),
													{},
													{
														initialData: null == r ? void 0 : r.initialData,
														queryKey: t,
														queryFn: o ? tw : u,
														initialPageParam:
															null != (i = null == r ? void 0 : r.initialCursor)
																? i
																: null,
													},
												),
												{ trpc: rA({ path: e }) },
											);
										},
										queryOptions: (e, t, s) => {
											var i;
											let o = (null == (i = t[1]) ? void 0 : i.input) === tw,
												u = async (e) => {
													var i;
													let o = (0, rL.default)(
															(0, rL.default)({}, s),
															{},
															{
																trpc: (0, rL.default)(
																	(0, rL.default)(
																		{},
																		null == s ? void 0 : s.trpc,
																	),
																	(
																		null == s || null == (i = s.trpc)
																			? void 0
																			: i.abortOnUnmount
																	)
																		? { signal: e.signal }
																		: { signal: null },
																),
															},
														),
														u = await n.query(...rk(t, o));
													return H(u) ? rK(u, r, t) : u;
												};
											return Object.assign(
												(0, rL.default)(
													(0, rL.default)({}, s),
													{},
													{
														initialData: null == s ? void 0 : s.initialData,
														queryKey: t,
														queryFn: o ? tw : u,
													},
												),
												{ trpc: rA({ path: e }) },
											);
										},
										fetchQuery: (e, t) =>
											r.fetchQuery(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e, queryFn: () => n.query(...rk(e, t)) },
												),
											),
										fetchInfiniteQuery: (e, t) => {
											var s;
											return r.fetchInfiniteQuery(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{
														queryKey: e,
														queryFn: ({ pageParam: r, direction: s }) =>
															n.query(
																...rk(e, t, { pageParam: r, direction: s }),
															),
														initialPageParam:
															null != (s = null == t ? void 0 : t.initialCursor)
																? s
																: null,
													},
												),
											);
										},
										prefetchQuery: (e, t) =>
											r.prefetchQuery(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e, queryFn: () => n.query(...rk(e, t)) },
												),
											),
										prefetchInfiniteQuery: (e, t) => {
											var s;
											return r.prefetchInfiniteQuery(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{
														queryKey: e,
														queryFn: ({ pageParam: r, direction: s }) =>
															n.query(
																...rk(e, t, { pageParam: r, direction: s }),
															),
														initialPageParam:
															null != (s = null == t ? void 0 : t.initialCursor)
																? s
																: null,
													},
												),
											);
										},
										ensureQueryData: (e, t) =>
											r.ensureQueryData(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e, queryFn: () => n.query(...rk(e, t)) },
												),
											),
										invalidateQueries: (e, t, n) =>
											r.invalidateQueries(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e },
												),
												n,
											),
										resetQueries: (e, t, n) =>
											r.resetQueries(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e },
												),
												n,
											),
										refetchQueries: (e, t, n) =>
											r.refetchQueries(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e },
												),
												n,
											),
										cancelQuery: (e, t) => r.cancelQueries({ queryKey: e }, t),
										setQueryData: (e, t, n) => r.setQueryData(e, t, n),
										setQueriesData: (e, t, n, s) =>
											r.setQueriesData(
												(0, rL.default)(
													(0, rL.default)({}, t),
													{},
													{ queryKey: e },
												),
												n,
												s,
											),
										getQueryData: (e) => r.getQueryData(e),
										setInfiniteQueryData: (e, t, n) => r.setQueryData(e, t, n),
										getInfiniteQueryData: (e) => r.getQueryData(e),
										setMutationDefaults: (t, s) => {
											let i = t[0];
											return r.setMutationDefaults(
												t,
												'function' == typeof s
													? s({
															canonicalMutationFn: (t) =>
																n.mutation(...rk([i, { input: t }], e)),
														})
													: s,
											);
										},
										getMutationDefaults: (e) => r.getMutationDefaults(e),
										isMutating: (e) =>
											r.isMutating(
												(0, rL.default)(
													(0, rL.default)({}, e),
													{},
													{ exact: !0 },
												),
											),
									};
								})({ client: a, queryClient: n }),
							[a, n],
						),
						c = e5.useMemo(
							() =>
								(0, rN.default)(
									{
										abortOnUnmount: r,
										queryClient: n,
										client: a,
										ssrContext: null != s ? s : null,
										ssrState: o,
									},
									l,
								),
							[r, a, l, n, s, o],
						);
					return (
						e5.useEffect(() => {
							u((e) => !!e && 'mounted');
						}, []),
						(0, t_.jsx)(i.Provider, { value: c, children: e.children })
					);
				},
				createClient: ez,
				useContext: o,
				useUtils: o,
				useQuery: function (t, r, n) {
					var s, i, a, l, c;
					let {
							abortOnUnmount: h,
							client: d,
							ssrState: p,
							queryClient: f,
							prefetchQuery: y,
						} = o(),
						m = tV(t, r, 'query'),
						b = f.getQueryDefaults(m),
						v = r === tw;
					'undefined' != typeof window ||
						'prepass' !== p ||
						(null == n || null == (s = n.trpc) ? void 0 : s.ssr) === !1 ||
						(null != (i = null == n ? void 0 : n.enabled)
							? i
							: null == b
								? void 0
								: b.enabled) === !1 ||
						v ||
						f.getQueryCache().find({ queryKey: m }) ||
						y(m, n);
					let g = u(m, (0, rN.default)((0, rN.default)({}, b), n)),
						O =
							null !=
							(a =
								null !=
								(l =
									null == n || null == (c = n.trpc) ? void 0 : c.abortOnUnmount)
									? l
									: null == e
										? void 0
										: e.abortOnUnmount)
								? a
								: h,
						x = rC(
							(0, rN.default)(
								(0, rN.default)({}, g),
								{},
								{
									queryKey: m,
									queryFn: v
										? r
										: async (e) => {
												let t = (0, rN.default)(
														(0, rN.default)({}, g),
														{},
														{
															trpc: (0, rN.default)(
																(0, rN.default)(
																	{},
																	null == g ? void 0 : g.trpc,
																),
																O ? { signal: e.signal } : { signal: null },
															),
														},
													),
													r = await d.query(...rk(m, t));
												return H(r) ? rK(r, f, m) : r;
											},
								},
							),
							rc,
							f,
						);
					return ((x.trpc = rU({ path: t })), x);
				},
				usePrefetchQuery: function (t, r, n) {
					var s, i, u, a;
					let l,
						c = o(),
						h = tV(t, r, 'query'),
						d = r === tw,
						p =
							null !=
							(s =
								null !=
								(i =
									null == n || null == (u = n.trpc) ? void 0 : u.abortOnUnmount)
									? i
									: null == e
										? void 0
										: e.abortOnUnmount)
								? s
								: c.abortOnUnmount;
					((a = (0, rN.default)(
						(0, rN.default)({}, n),
						{},
						{
							queryKey: h,
							queryFn: d
								? r
								: (e) => {
										let t = {
											trpc: (0, rN.default)(
												(0, rN.default)({}, null == n ? void 0 : n.trpc),
												p ? { signal: e.signal } : {},
											),
										};
										return c.client.query(...rk(h, t));
									},
						},
					)),
						(l = tR(void 0)).getQueryState(a.queryKey) || l.prefetchQuery(a));
				},
				useSuspenseQuery: function (t, r, n) {
					var s, i, u, a, l;
					let c = o(),
						h = tV(t, r, 'query'),
						d =
							null !=
							(s =
								null !=
								(i =
									null == n || null == (u = n.trpc) ? void 0 : u.abortOnUnmount)
									? i
									: null == e
										? void 0
										: e.abortOnUnmount)
								? s
								: c.abortOnUnmount,
						p =
							((a = (0, rN.default)(
								(0, rN.default)({}, n),
								{},
								{
									queryKey: h,
									queryFn: (e) => {
										let t = (0, rN.default)(
											(0, rN.default)({}, n),
											{},
											{
												trpc: (0, rN.default)(
													(0, rN.default)({}, null == n ? void 0 : n.trpc),
													d ? { signal: e.signal } : { signal: null },
												),
											},
										);
										return c.client.query(...rk(h, t));
									},
								},
							)),
							(l = c.queryClient),
							rC(
								{
									...a,
									enabled: !0,
									suspense: !0,
									throwOnError: rx,
									placeholderData: void 0,
								},
								rc,
								l,
							));
					return ((p.trpc = rU({ path: t })), [p.data, p]);
				},
				useQueries: (e, t) => {
					let {
							ssrState: r,
							queryClient: n,
							prefetchQuery: s,
							client: i,
						} = o(),
						u = e(rI(i));
					if ('undefined' == typeof window && 'prepass' === r)
						for (let e of u) {
							var a;
							(null == (a = e.trpc) ? void 0 : a.ssr) === !1 ||
								n.getQueryCache().find({ queryKey: e.queryKey }) ||
								s(e.queryKey, e);
						}
					return rR(
						{
							queries: u.map((e) =>
								(0, rN.default)(
									(0, rN.default)({}, e),
									{},
									{ queryKey: e.queryKey },
								),
							),
							combine: null == t ? void 0 : t.combine,
						},
						n,
					);
				},
				useSuspenseQueries: (e) => {
					var t;
					let { queryClient: r, client: n } = o(),
						s =
							((t = {
								queries: e(rI(n)).map((e) =>
									(0, rN.default)(
										(0, rN.default)({}, e),
										{},
										{ queryFn: e.queryFn, queryKey: e.queryKey },
									),
								),
							}),
							rR(
								{
									...t,
									queries: t.queries.map((e) => ({
										...e,
										suspense: !0,
										throwOnError: rx,
										enabled: !0,
										placeholderData: void 0,
									})),
								},
								r,
							));
					return [s.map((e) => e.data), s];
				},
				useMutation: function (e, t) {
					let { client: r, queryClient: n } = o(),
						i = tX(e),
						u = n.defaultMutationOptions(n.getMutationDefaults(i)),
						a = (function (e, t) {
							let r = tR(t),
								[n] = e5.useState(() => new rQ(r, e));
							e5.useEffect(() => {
								n.setOptions(e);
							}, [n, e]);
							let s = e5.useSyncExternalStore(
									e5.useCallback((e) => n.subscribe(tZ.batchCalls(e)), [n]),
									() => n.getCurrentResult(),
									() => n.getCurrentResult(),
								),
								i = e5.useCallback(
									(e, t) => {
										n.mutate(e, t).catch(tn);
									},
									[n],
								);
							if (s.error && tj(n.options.throwOnError, [s.error]))
								throw s.error;
							return { ...s, mutate: i, mutateAsync: s.mutate };
						})(
							(0, rN.default)(
								(0, rN.default)({}, t),
								{},
								{
									mutationKey: i,
									mutationFn: (n) => r.mutation(...rk([e, { input: n }], t)),
									onSuccess(...e) {
										var r, i;
										return s({
											originalFn: () => {
												var r, n, s;
												return null !=
													(r =
														null == t || null == (n = t.onSuccess)
															? void 0
															: n.call(t, ...e))
													? r
													: null == u || null == (s = u.onSuccess)
														? void 0
														: s.call(u, ...e);
											},
											queryClient: n,
											meta:
												null !=
												(r =
													null != (i = null == t ? void 0 : t.meta)
														? i
														: null == u
															? void 0
															: u.meta)
													? r
													: {},
										});
									},
								},
							),
							n,
						);
					return ((a.trpc = rU({ path: e })), a);
				},
				useSubscription: function (e, t, r) {
					var n;
					let s = null != (n = null == r ? void 0 : r.enabled) ? n : t !== tw,
						i = th(tV(e, t, 'any')),
						{ client: u } = o(),
						c = e5.useRef(r);
					e5.useEffect(() => {
						c.current = r;
					});
					let [h] = e5.useState(new Set([])),
						d = e5.useCallback(
							(e) => {
								h.add(e);
							},
							[h],
						),
						p = e5.useRef(null),
						f = e5.useCallback(
							(e) => {
								let t = m.current,
									r = (m.current = e(t)),
									n = !1;
								for (let e of h)
									if (t[e] !== r[e]) {
										n = !0;
										break;
									}
								n && v(rH(r, d));
							},
							[d, h],
						),
						y = e5.useCallback(() => {
							var r;
							(null == (r = p.current) || r.unsubscribe(), s)
								? (f(() =>
										(0, rN.default)((0, rN.default)({}, l), {}, { reset: y }),
									),
									(p.current = u.subscription(
										e.join('.'),
										null != t ? t : void 0,
										{
											onStarted: () => {
												var e, t;
												(null == (e = (t = c.current).onStarted) || e.call(t),
													f((e) =>
														(0, rN.default)(
															(0, rN.default)({}, e),
															{},
															{ status: 'pending', error: null },
														),
													));
											},
											onData: (e) => {
												var t, r;
												(null == (t = (r = c.current).onData) || t.call(r, e),
													f((t) =>
														(0, rN.default)(
															(0, rN.default)({}, t),
															{},
															{ status: 'pending', data: e, error: null },
														),
													));
											},
											onError: (e) => {
												var t, r;
												(null == (t = (r = c.current).onError) || t.call(r, e),
													f((t) =>
														(0, rN.default)(
															(0, rN.default)({}, t),
															{},
															{ status: 'error', error: e },
														),
													));
											},
											onConnectionStateChange: (e) => {
												f((t) => {
													switch (e.state) {
														case 'idle':
															return (0, rN.default)(
																(0, rN.default)({}, t),
																{},
																{ status: e.state, error: null, data: void 0 },
															);
														case 'connecting':
															return (0, rN.default)(
																(0, rN.default)({}, t),
																{},
																{ error: e.error, status: e.state },
															);
														case 'pending':
															return t;
													}
												});
											},
											onComplete: () => {
												var e, t;
												(null == (e = (t = c.current).onComplete) || e.call(t),
													f((e) =>
														(0, rN.default)(
															(0, rN.default)({}, e),
															{},
															{ status: 'idle', error: null, data: void 0 },
														),
													));
											},
										},
									)))
								: f(() =>
										(0, rN.default)((0, rN.default)({}, a), {}, { reset: y }),
									);
						}, [u, i, s, f]);
					e5.useEffect(
						() => (
							y(),
							() => {
								var e;
								null == (e = p.current) || e.unsubscribe();
							}
						),
						[y],
					);
					let m = e5.useRef(
							s
								? (0, rN.default)((0, rN.default)({}, l), {}, { reset: y })
								: (0, rN.default)((0, rN.default)({}, a), {}, { reset: y }),
						),
						[b, v] = e5.useState(rH(m.current, d));
					return b;
				},
				useInfiniteQuery: function (e, t, r) {
					var n, s, i, a, l;
					let {
							client: c,
							ssrState: h,
							prefetchInfiniteQuery: d,
							queryClient: p,
							abortOnUnmount: f,
						} = o(),
						y = tV(e, t, 'infinite'),
						m = p.getQueryDefaults(y),
						b = t === tw;
					'undefined' != typeof window ||
						'prepass' !== h ||
						(null == r || null == (n = r.trpc) ? void 0 : n.ssr) === !1 ||
						(null != (s = null == r ? void 0 : r.enabled)
							? s
							: null == m
								? void 0
								: m.enabled) === !1 ||
						b ||
						p.getQueryCache().find({ queryKey: y }) ||
						d(y, (0, rN.default)((0, rN.default)({}, m), r));
					let v = u(y, (0, rN.default)((0, rN.default)({}, m), r)),
						g =
							null !=
							(i =
								null == r || null == (a = r.trpc) ? void 0 : a.abortOnUnmount)
								? i
								: f,
						O = rC(
							(0, rN.default)(
								(0, rN.default)({}, v),
								{},
								{
									initialPageParam: null != (l = r.initialCursor) ? l : null,
									persister: r.persister,
									queryKey: y,
									queryFn: b
										? t
										: (e) => {
												var t;
												let n = (0, rN.default)(
													(0, rN.default)({}, v),
													{},
													{
														trpc: (0, rN.default)(
															(0, rN.default)({}, null == v ? void 0 : v.trpc),
															g ? { signal: e.signal } : { signal: null },
														),
													},
												);
												return c.query(
													...rk(y, n, {
														pageParam:
															null != (t = e.pageParam) ? t : r.initialCursor,
														direction: e.direction,
													}),
												);
											},
								},
							),
							ry,
							p,
						);
					return ((O.trpc = rU({ path: e })), O);
				},
				usePrefetchInfiniteQuery: function (e, t, r) {
					var n, s, i, a;
					let l,
						c = o(),
						h = tV(e, t, 'infinite'),
						d = c.queryClient.getQueryDefaults(h),
						p = t === tw,
						f = u(h, (0, rN.default)((0, rN.default)({}, d), r)),
						y =
							null !=
							(n =
								null == r || null == (s = r.trpc) ? void 0 : s.abortOnUnmount)
								? n
								: c.abortOnUnmount;
					((a = (0, rN.default)(
						(0, rN.default)({}, r),
						{},
						{
							initialPageParam: null != (i = r.initialCursor) ? i : null,
							queryKey: h,
							queryFn: p
								? t
								: (e) => {
										var t;
										let n = (0, rN.default)(
											(0, rN.default)({}, f),
											{},
											{
												trpc: (0, rN.default)(
													(0, rN.default)({}, null == f ? void 0 : f.trpc),
													y ? { signal: e.signal } : {},
												),
											},
										);
										return c.client.query(
											...rk(h, n, {
												pageParam:
													null != (t = e.pageParam) ? t : r.initialCursor,
												direction: e.direction,
											}),
										);
									},
						},
					)),
						(l = tR(void 0)).getQueryState(a.queryKey) ||
							l.prefetchInfiniteQuery(a));
				},
				useSuspenseInfiniteQuery: function (e, t, r) {
					var n, s, i, a, l;
					let c = o(),
						h = tV(e, t, 'infinite'),
						d = c.queryClient.getQueryDefaults(h),
						p = u(h, (0, rN.default)((0, rN.default)({}, d), r)),
						f =
							null !=
							(n =
								null == r || null == (s = r.trpc) ? void 0 : s.abortOnUnmount)
								? n
								: c.abortOnUnmount,
						y =
							((a = (0, rN.default)(
								(0, rN.default)({}, r),
								{},
								{
									initialPageParam: null != (i = r.initialCursor) ? i : null,
									queryKey: h,
									queryFn: (e) => {
										var t;
										let n = (0, rN.default)(
											(0, rN.default)({}, p),
											{},
											{
												trpc: (0, rN.default)(
													(0, rN.default)({}, null == p ? void 0 : p.trpc),
													f ? { signal: e.signal } : {},
												),
											},
										);
										return c.client.query(
											...rk(h, n, {
												pageParam:
													null != (t = e.pageParam) ? t : r.initialCursor,
												direction: e.direction,
											}),
										);
									},
								},
							)),
							(l = c.queryClient),
							rC({ ...a, enabled: !0, suspense: !0, throwOnError: rx }, ry, l));
					return ((y.trpc = rU({ path: e })), [y.data, y]);
				},
			};
		}
		var rW =
			((h = null != (l = e9()) ? eV(e1(l)) : {}),
			((e, t, r, n) => {
				if ((t && 'object' == typeof t) || 'function' == typeof t)
					for (var s, i = e0(t), o = 0, u = i.length; o < u; o++)
						((s = i[o]),
							e2.call(e, s) ||
								s === r ||
								eX(e, s, {
									get: ((e) => t[e]).bind(null, s),
									enumerable: !(n = eZ(t, s)) || n.enumerable,
								}));
				return e;
			})(
				!c && l && l.__esModule
					? h
					: eX(h, 'default', { value: l, enumerable: !0 }),
				l,
			));
		let rz =
				((d = {
					url: (x = v =
						{ url: '/api/trpc', headers: async () => ({}) }).url.toString(),
					fetch: x.fetch,
					transformer: $(x.transformer),
					methodOverride: x.methodOverride,
				}),
				(p = null != (g = v.maxURLLength) ? g : 1 / 0),
				(f = null != (O = v.maxItems) ? O : 1 / 0),
				() => {
					let e = (e) => ({
							validate(t) {
								if (p === 1 / 0 && f === 1 / 0) return !0;
								if (t.length > f) return !1;
								let r = t.map((e) => e.path).join(','),
									n = t.map((e) => e.input);
								return (
									V(
										(0, eP.default)(
											(0, eP.default)({}, d),
											{},
											{ type: e, path: r, inputs: n, signal: null },
										),
									).length <= p
								);
							},
							async fetch(t) {
								let r,
									n = t.map((e) => e.path).join(','),
									s = t.map((e) => e.input),
									i = (function (...e) {
										let t = new AbortController(),
											r = e.length,
											n = 0,
											s = () => {
												++n === r && t.abort();
											};
										for (let t of e)
											(null == t ? void 0 : t.aborted)
												? s()
												: null == t ||
													t.addEventListener('abort', s, { once: !0 });
										return t.signal;
									})(...t.map((e) => e.signal)),
									o = await ((r = (0, eP.default)(
										(0, eP.default)({}, d),
										{},
										{
											path: n,
											inputs: s,
											type: e,
											headers: () =>
												v.headers
													? 'function' == typeof v.headers
														? v.headers({ opList: t })
														: v.headers
													: {},
											signal: i,
										},
									)),
									et(
										(0, B.default)(
											(0, B.default)({}, r),
											{},
											{
												contentTypeHeader: 'application/json',
												getUrl: V,
												getBody: X,
											},
										),
									));
								return (
									Array.isArray(o.json) ? o.json : t.map(() => o.json)
								).map((e) => ({ meta: o.meta, json: e }));
							},
						}),
						t = { query: ew(e('query')), mutation: ew(e('mutation')) };
					return ({ op: e }) =>
						U((r) => {
							let n;
							if ('subscription' === e.type)
								throw Error(
									'Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`',
								);
							return (
								t[e.type]
									.load(e)
									.then((e) => {
										n = e;
										let t = (function (e, t) {
											let r;
											try {
												r = (function (e, t) {
													if ('error' in e) {
														let r = t.deserialize(e.error);
														return {
															ok: !1,
															error: (0, eg.default)(
																(0, eg.default)({}, e),
																{},
																{ error: r },
															),
														};
													}
													return {
														ok: !0,
														result: (0, eg.default)(
															(0, eg.default)({}, e.result),
															(!e.result.type || 'data' === e.result.type) && {
																type: 'data',
																data: t.deserialize(e.result.data),
															},
														),
													};
												})(e, t);
											} catch (e) {
												throw new eO();
											}
											if (
												(!r.ok &&
													(!L(r.error.error) ||
														'number' != typeof r.error.error.code)) ||
												(r.ok && !L(r.result))
											)
												throw new eO();
											return r;
										})(e.json, d.transformer.output);
										t.ok
											? (r.next({ context: e.meta, result: t.result }),
												r.complete())
											: r.error(z.from(t.error, { meta: e.meta }));
									})
									.catch((e) => {
										r.error(z.from(e, { meta: null == n ? void 0 : n.meta }));
									}),
								() => {}
							);
						});
				}),
			r$ =
				((y = rG((w = { config: () => ({ links: [rz] }), ssr: !1 }))),
				(m = (function (e) {
					let { config: t } = e,
						r = $(e.transformer);
					return (n) => {
						var s, i;
						let o = rG(e),
							u = (s) => {
								var i, u;
								let [a] = (0, e5.useState)(() => {
										var r;
										if (s.trpc) return s.trpc;
										let n = t({}),
											i =
												null != (r = n.queryClient)
													? r
													: new rl(n.queryClientConfig),
											u = o.createClient(n);
										return {
											abortOnUnmount: n.abortOnUnmount,
											queryClient: i,
											trpcClient: u,
											ssrState: !!e.ssr && 'mounting',
											ssrContext: null,
										};
									}),
									{
										queryClient: l,
										trpcClient: c,
										ssrState: h,
										ssrContext: d,
									} = a,
									p = null == (i = s.pageProps) ? void 0 : i.trpcState,
									f = e5.default.useMemo(
										() => (p ? r.input.deserialize(p) : p),
										[p],
									);
								return (0, t_.jsx)(o.Provider, {
									abortOnUnmount: null != (u = a.abortOnUnmount) && u,
									client: c,
									queryClient: l,
									ssrState: h,
									ssrContext: d,
									children: (0, t_.jsx)(tE, {
										client: l,
										children: (0, t_.jsx)(tD, {
											state: f,
											children: (0, t_.jsx)(n, (0, rW.default)({}, s)),
										}),
									}),
								});
							};
						e.ssr
							? e.ssrPrepass({ parent: e, AppOrPage: n, WithTRPC: u })
							: n.getInitialProps &&
								(u.getInitialProps = async (e) => {
									var t;
									let r,
										s = !!e.Component,
										i = {},
										o = await n.getInitialProps(e),
										u = s ? (null != (t = o.pageProps) ? t : {}) : o;
									return (
										(r = i = (0, rW.default)((0, rW.default)({}, u), i)),
										s ? { pageProps: r } : r
									);
								});
						let a =
							null != (s = null != (i = n.displayName) ? i : n.name)
								? s
								: 'Component';
						return ((u.displayName = `withTRPC(${a})`), u);
					};
				})(w)),
				(b = ed(({ path: e, args: t }) => {
					var r;
					let n = [...e],
						s = n.pop();
					if ('useMutation' === s) return y[s](n, ...t);
					if ('_def' === s) return { path: n };
					let [i, ...o] = t,
						u = null != (r = o[0]) ? r : {};
					return y[s](n, i, u);
				})),
				ep((e) =>
					'useContext' === e || 'useUtils' === e
						? () => {
								let e = y.useUtils();
								return (0, e5.useMemo)(() => {
									let t, r;
									return (
										(t = eW(e.client)),
										(r = ed((t) => {
											let r = [...t.path],
												n = r.pop(),
												s = [...t.args],
												i = s.shift(),
												o = tV(
													r,
													i,
													((e) => {
														switch (e) {
															case 'queryOptions':
															case 'fetch':
															case 'ensureData':
															case 'prefetch':
															case 'getData':
															case 'setData':
															case 'setQueriesData':
																return 'query';
															case 'infiniteQueryOptions':
															case 'fetchInfinite':
															case 'prefetchInfinite':
															case 'getInfiniteData':
															case 'setInfiniteData':
																return 'infinite';
															case 'setMutationDefaults':
															case 'getMutationDefaults':
															case 'isMutating':
															case 'cancel':
															case 'invalidate':
															case 'refetch':
															case 'reset':
																return 'any';
														}
													})(n),
												);
											return {
												infiniteQueryOptions: () =>
													e.infiniteQueryOptions(r, o, s[0]),
												queryOptions: () => e.queryOptions(r, o, ...s),
												fetch: () => e.fetchQuery(o, ...s),
												fetchInfinite: () => e.fetchInfiniteQuery(o, s[0]),
												prefetch: () => e.prefetchQuery(o, ...s),
												prefetchInfinite: () =>
													e.prefetchInfiniteQuery(o, s[0]),
												ensureData: () => e.ensureQueryData(o, ...s),
												invalidate: () => e.invalidateQueries(o, ...s),
												reset: () => e.resetQueries(o, ...s),
												refetch: () => e.refetchQueries(o, ...s),
												cancel: () => e.cancelQuery(o, ...s),
												setData: () => {
													e.setQueryData(o, s[0], s[1]);
												},
												setQueriesData: () =>
													e.setQueriesData(o, s[0], s[1], s[2]),
												setInfiniteData: () => {
													e.setInfiniteQueryData(o, s[0], s[1]);
												},
												getData: () => e.getQueryData(o),
												getInfiniteData: () => e.getInfiniteQueryData(o),
												setMutationDefaults: () =>
													e.setMutationDefaults(tX(r), i),
												getMutationDefaults: () => e.getMutationDefaults(tX(r)),
												isMutating: () => e.isMutating({ mutationKey: tX(r) }),
											}[n]();
										})),
										ep((n) =>
											'client' === n ? t : rE.includes(n) ? e[n] : r[n],
										)
									);
								}, [e]);
							}
						: 'useQueries' === e
							? y.useQueries
							: 'useSuspenseQueries' === e
								? y.useSuspenseQueries
								: 'withTRPC' === e
									? m
									: b[e],
				)),
			rB = ez({ links: [rz] });
		e.s(['trpcClient', 0, rB, 'trpcHook', 0, r$], 48063);
	},
]);
