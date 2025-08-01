(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		300: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_920e35',
				variable: '__variable_920e35',
			};
		},
		676: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(5242);
				},
			]);
		},
		3164: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_5170de',
				variable: '__variable_5170de',
			};
		},
		3226: (e, t, r) => {
			'use strict';
			r.d(t, { r: () => rb, t: () => rm });
			var n,
				s = Object.create,
				i = Object.defineProperty,
				o = Object.getOwnPropertyDescriptor,
				u = Object.getOwnPropertyNames,
				a = Object.getPrototypeOf,
				l = Object.prototype.hasOwnProperty,
				c = (e, t) =>
					function () {
						return (t || (0, e[u(e)[0]])((t = { exports: {} }).exports, t), t.exports);
					},
				h = (e, t, r) => (
					(r = null != e ? s(a(e)) : {}),
					((e, t, r, n) => {
						if ((t && 'object' == typeof t) || 'function' == typeof t)
							for (var s, a = u(t), c = 0, h = a.length; c < h; c++)
								((s = a[c]),
									l.call(e, s) ||
										s === r ||
										i(e, s, { get: ((e) => t[e]).bind(null, s), enumerable: !(n = o(t, s)) || n.enumerable }));
						return e;
					})(!t && e && e.__esModule ? r : i(r, 'default', { value: e, enumerable: !0 }), e)
				),
				d = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
						e,
						t,
					) {
						function r(e) {
							return (
								(t.exports = r =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function (e) {
												return typeof e;
											}
										: function (e) {
												return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
													? 'symbol'
													: typeof e;
											}),
								(t.exports.__esModule = !0),
								(t.exports.default = t.exports),
								r(e)
							);
						}
						((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
					},
				}),
				p = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
						e,
						t,
					) {
						var r = d().default;
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
				f = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
						e,
						t,
					) {
						var r = d().default,
							n = p();
						((t.exports = function (e) {
							var t = n(e, 'string');
							return 'symbol' == r(t) ? t : t + '';
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				y = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
						e,
						t,
					) {
						var r = f();
						((t.exports = function (e, t, n) {
							return (
								(t = r(t)) in e
									? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
									: (e[t] = n),
								e
							);
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				m = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
						e,
						t,
					) {
						var r = y();
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
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
										: n(Object(s)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
											});
							}
							return e;
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				});
			function b(e) {
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
							!s && ((s = !0), 'function' == typeof r ? r() : r && r.unsubscribe());
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
					pipe: (...e) => e.reduce(v, t),
				};
				return t;
			}
			function v(e, t) {
				return t(e);
			}
			let g = {
				INTERNAL_SERVER_ERROR: -32603,
				BAD_GATEWAY: -32603,
				SERVICE_UNAVAILABLE: -32603,
				GATEWAY_TIMEOUT: -32603,
			};
			function O(e) {
				return !!e && !Array.isArray(e) && 'object' == typeof e;
			}
			(g.BAD_GATEWAY, g.SERVICE_UNAVAILABLE, g.GATEWAY_TIMEOUT, g.INTERNAL_SERVER_ERROR);
			let x = 'function' == typeof Symbol && !!Symbol.asyncIterator;
			function w(e) {
				return x && O(e) && Symbol.asyncIterator in e;
			}
			var P = h(y(), 1),
				j = h(m(), 1),
				S = class e extends Error {
					constructor(t, r) {
						var n, s;
						let i = null == r ? void 0 : r.cause;
						(super(t, { cause: i }),
							(0, P.default)(this, 'cause', void 0),
							(0, P.default)(this, 'shape', void 0),
							(0, P.default)(this, 'data', void 0),
							(0, P.default)(this, 'meta', void 0),
							(this.meta = null == r ? void 0 : r.meta),
							(this.cause = i),
							(this.shape = null == r || null == (n = r.result) ? void 0 : n.error),
							(this.data = null == r || null == (s = r.result) ? void 0 : s.error.data),
							(this.name = 'TRPCClientError'),
							Object.setPrototypeOf(this, e.prototype));
					}
					static from(t, r = {}) {
						return t instanceof S
							? (r.meta && (t.meta = (0, j.default)((0, j.default)({}, t.meta), r.meta)), t)
							: O(t) && O(t.error) && 'number' == typeof t.error.code && 'string' == typeof t.error.message
								? new e(t.error.message, (0, j.default)((0, j.default)({}, r), {}, { result: t }))
								: new e(
										'string' == typeof t ? t : O(t) && 'string' == typeof t.message ? t.message : 'Unknown error',
										(0, j.default)((0, j.default)({}, r), {}, { cause: t }),
									);
					}
				};
			function C(e) {
				return e
					? 'input' in e
						? e
						: { input: e, output: e }
					: {
							input: { serialize: (e) => e, deserialize: (e) => e },
							output: { serialize: (e) => e, deserialize: (e) => e },
						};
			}
			var R = h(m(), 1);
			let Q = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
			function _(e) {
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
			let q = (e) => {
					let t = e.url.split('?'),
						r = t[0].replace(/\/$/, '') + '/' + e.path,
						n = [];
					if (
						(t[1] && n.push(t[1]), 'inputs' in e && n.push('batch=1'), 'query' === e.type || 'subscription' === e.type)
					) {
						let t = _(e);
						void 0 !== t && 'POST' !== e.methodOverride && n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
					}
					return (n.length && (r += '?' + n.join('&')), r);
				},
				E = (e) => {
					if ('query' === e.type && 'POST' !== e.methodOverride) return;
					let t = _(e);
					return void 0 !== t ? JSON.stringify(t) : void 0;
				};
			var D = class extends Error {
				constructor() {
					let e = 'AbortError';
					(super(e), (this.name = e), (this.message = e));
				}
			};
			async function M(e) {
				var t,
					r,
					n = e.signal;
				if (null == n ? void 0 : n.aborted) {
					if ((null == (r = n.throwIfAborted) || r.call(n), 'undefined' != typeof DOMException))
						throw new DOMException('AbortError', 'AbortError');
					throw new D();
				}
				let s = e.getUrl(e),
					i = e.getBody(e),
					{ type: o } = e,
					u = await (async () => {
						let t = await e.headers();
						return Symbol.iterator in t ? Object.fromEntries(t) : t;
					})(),
					a = (0, R.default)(
						(0, R.default)(
							(0, R.default)({}, e.contentTypeHeader ? { 'content-type': e.contentTypeHeader } : {}),
							e.trpcAcceptHeader ? { 'trpc-accept': e.trpcAcceptHeader } : void 0,
						),
						u,
					);
				return (function (e) {
					if (e) return e;
					if ('undefined' != typeof window && 'function' == typeof window.fetch) return window.fetch;
					if ('undefined' != typeof globalThis && 'function' == typeof globalThis.fetch) return globalThis.fetch;
					throw Error('No fetch implementation found');
				})(e.fetch)(s, { method: null != (t = e.methodOverride) ? t : Q[o], signal: e.signal, body: i, headers: a });
			}
			async function I(e) {
				let t = {},
					r = await M(e);
				t.response = r;
				let n = await r.json();
				return ((t.responseJSON = n), { json: n, meta: t });
			}
			h(m(), 1);
			var T = Object.create,
				k = Object.defineProperty,
				A = Object.getOwnPropertyDescriptor,
				F = Object.getOwnPropertyNames,
				U = Object.getPrototypeOf,
				L = Object.prototype.hasOwnProperty,
				N = (e, t) =>
					function () {
						return (t || (0, e[F(e)[0]])((t = { exports: {} }).exports, t), t.exports);
					},
				K = (e, t, r) => (
					(r = null != e ? T(U(e)) : {}),
					((e, t, r, n) => {
						if ((t && 'object' == typeof t) || 'function' == typeof t)
							for (var s, i = F(t), o = 0, u = i.length; o < u; o++)
								((s = i[o]),
									L.call(e, s) ||
										s === r ||
										k(e, s, { get: ((e) => t[e]).bind(null, s), enumerable: !(n = A(t, s)) || n.enumerable }));
						return e;
					})(!t && e && e.__esModule ? r : k(r, 'default', { value: e, enumerable: !0 }), e)
				);
			let G = () => {},
				H = (e) => {
					Object.freeze && Object.freeze(e);
				},
				W = (e) =>
					(function e(t, r, n) {
						let s = r.join('.');
						return (
							null != n[s] ||
								(n[s] = new Proxy(G, {
									get(s, i) {
										if ('string' == typeof i && 'then' !== i) return e(t, [...r, i], n);
									},
									apply(e, n, s) {
										let i = r[r.length - 1],
											o = { args: s, path: r };
										return (
											'call' === i
												? (o = { args: s.length >= 2 ? [s[1]] : [], path: r.slice(0, -1) })
												: 'apply' === i && (o = { args: s.length >= 2 ? s[1] : [], path: r.slice(0, -1) }),
											H(o.args),
											H(o.path),
											t(o)
										);
									},
								})),
							n[s]
						);
					})(e, [], Object.create(null)),
				z = (e) =>
					new Proxy(G, {
						get(t, r) {
							if ('then' !== r) return e(r);
						},
					});
			var B = N({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
						e,
						t,
					) {
						function r(e) {
							return (
								(t.exports = r =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function (e) {
												return typeof e;
											}
										: function (e) {
												return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
													? 'symbol'
													: typeof e;
											}),
								(t.exports.__esModule = !0),
								(t.exports.default = t.exports),
								r(e)
							);
						}
						((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
					},
				}),
				$ = N({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
						e,
						t,
					) {
						var r = B().default;
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
				J = N({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
						e,
						t,
					) {
						var r = B().default,
							n = $();
						((t.exports = function (e) {
							var t = n(e, 'string');
							return 'symbol' == r(t) ? t : t + '';
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				V = N({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
						e,
						t,
					) {
						var r = J();
						((t.exports = function (e, t, n) {
							return (
								(t = r(t)) in e
									? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
									: (e[t] = n),
								e
							);
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				Y = N({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
						e,
						t,
					) {
						var r = V();
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
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
										: n(Object(s)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
											});
							}
							return e;
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				});
			(K(Y(), 1), K(V(), 1));
			var X = K(Y(), 1),
				Z = class extends Error {
					constructor() {
						super('Unable to transform response from server');
					}
				};
			(K(Y(), 1), Symbol('lazy'), Symbol());
			let ee = () => {
				throw Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
			};
			function et(e) {
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
								(null == (i = o.reject) || i.call(o, Error('Input is too big for a single dispatch')), n++);
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
									(null == (r = n.reject) || r.call(n, Error('Missing result')), (n.batch = null));
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
						let s = { aborted: !1, key: e, batch: null, resolve: ee, reject: ee },
							i = new Promise((e, r) => {
								((s.reject = r), (s.resolve = e), null != t || (t = []), t.push(s));
							});
						return (null != r || (r = setTimeout(n)), i);
					},
				};
			}
			var er = h(m(), 1);
			(h(m(), 1), Symbol());
			let en = (e, ...t) => ('function' == typeof e ? e(...t) : e);
			async function es(e) {
				let t = await en(e.url);
				if (!e.connectionParams) return t;
				let r = t.includes('?') ? '&' : '?';
				return t + `${r}connectionParams=1`;
			}
			async function ei(e) {
				return JSON.stringify({ method: 'connectionParams', data: await en(e) });
			}
			(h(y(), 1), h(y(), 1));
			var eo = h(y(), 1),
				eu = class e {
					constructor(t) {
						var r;
						if (
							((0, eo.default)(this, 'id', ++e.connectCount),
							(0, eo.default)(this, 'WebSocketPonyfill', void 0),
							(0, eo.default)(this, 'urlOptions', void 0),
							(0, eo.default)(this, 'keepAliveOpts', void 0),
							(0, eo.default)(
								this,
								'wsObservable',
								(function (e) {
									let t = null,
										r = [],
										n = b(
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
							(0, eo.default)(this, 'openPromise', null),
							(this.WebSocketPonyfill = null != (r = t.WebSocketPonyfill) ? r : WebSocket),
							!this.WebSocketPonyfill)
						)
							throw Error(
								"No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill",
							);
						((this.urlOptions = t.urlOptions), (this.keepAliveOpts = t.keepAlive));
					}
					get ws() {
						return this.wsObservable.get();
					}
					set ws(e) {
						this.wsObservable.next(e);
					}
					isOpen() {
						return !!this.ws && this.ws.readyState === this.WebSocketPonyfill.OPEN && !this.openPromise;
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
						let r = es(t.urlOptions).then((e) => new t.WebSocketPonyfill(e));
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
												(clearTimeout(n), i(), 'PONG' === e && (clearTimeout(s), clearTimeout(n), i()));
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
								t.urlOptions.connectionParams && e.send(await ei(t.urlOptions.connectionParams)));
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
			((0, eo.default)(eu, 'connectCount', 0), h(y(), 1), h(m(), 1));
			var ea = h(y(), 1),
				el = h(m(), 1),
				ec = class {
					constructor(e) {
						((0, ea.default)(this, 'links', void 0),
							(0, ea.default)(this, 'runtime', void 0),
							(0, ea.default)(this, 'requestId', void 0),
							(this.requestId = 0),
							(this.runtime = {}),
							(this.links = e.links.map((e) => e(this.runtime))));
					}
					$request(e) {
						var t, r;
						return ((r = {
							links: this.links,
							op: (0, el.default)(
								(0, el.default)({}, e),
								{},
								{ context: null != (t = e.context) ? t : {}, id: ++this.requestId },
							),
						}),
						b((e) =>
							(function e(t = 0, n = r.op) {
								let s = r.links[t];
								if (!s) throw Error('No more links to execute - did you forget to add an ending link?');
								return s({ op: n, next: (r) => e(t + 1, r) });
							})().subscribe(e),
						)).pipe((e) => {
							let t = 0,
								r = null,
								n = [];
							return b(
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
							let t = this.$request(e);
							return (
								await (function (e) {
									let t = new AbortController();
									return new Promise((r, n) => {
										let s = !1;
										function i() {
											s || ((s = !0), o.unsubscribe());
										}
										t.signal.addEventListener('abort', () => {
											n(t.signal.reason);
										});
										let o = e.subscribe({
											next(e) {
												((s = !0), r(e), i());
											},
											error(e) {
												n(e);
											},
											complete() {
												(t.abort(), i());
											},
										});
									});
								})(t)
							).result.data;
						} catch (e) {
							throw S.from(e);
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
										null == (t = r.onConnectionStateChange) || t.call(r, e.result);
										break;
									case 'started':
										null == (n = r.onStarted) || n.call(r, { context: e.context });
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
			let eh = Symbol.for('trpc_untypedClient'),
				ed = { query: 'query', mutate: 'mutation', subscribe: 'subscription' };
			function ep(e) {
				let t = W(({ path: t, args: r }) => {
					let n = [...t],
						s = ed[n.pop()],
						i = n.join('.');
					return e[s](i, ...r);
				});
				return z((r) => (r === eh ? e : t[r]));
			}
			function ef(e) {
				return ep(new ec(e));
			}
			(h(m(), 1),
				h(m(), 1),
				h(
					c({
						'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js'(
							e,
							t,
						) {
							function r(e) {
								function t(e) {
									if (Object(e) !== e) return Promise.reject(TypeError(e + ' is not an object.'));
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
											return void 0 === r ? Promise.resolve({ value: e, done: !0 }) : t(r.apply(this.s, arguments));
										},
										throw: function (e) {
											var r = this.s.return;
											return void 0 === r ? Promise.reject(e) : t(r.apply(this.s, arguments));
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
								for ('undefined' != typeof Symbol && ((n = Symbol.asyncIterator), (s = Symbol.iterator)); i--; ) {
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
				h(m(), 1));
			var ey = c({
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
												return ((r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r);
											},
								t = {},
								r = [];
							function n(e, t) {
								if (null != t) {
									if (Object(t) !== t)
										throw TypeError('using declarations can only be used with objects, functions, null, or undefined.');
									if (e) var n = t[Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')];
									if (void 0 === n && ((n = t[Symbol.dispose || Symbol.for('Symbol.dispose')]), e)) var s = n;
									if ('function' != typeof n) throw TypeError('Object is not disposable.');
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
												if (!n.a && 1 === i) return ((i = 0), r.push(n), Promise.resolve().then(o));
												if (n.d) {
													var e = n.d.call(n.v);
													if (n.a) return ((i |= 2), Promise.resolve(e).then(o, u));
												} else i |= 1;
											} catch (e) {
												return u(e);
											}
										if (1 === i) return s !== t ? Promise.reject(s) : Promise.resolve();
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
				em = c({
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
				eb = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js'(
						e,
						t,
					) {
						var r = em();
						((t.exports = function (e) {
							return new r(e, 0);
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				ev = c({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js'(
						e,
						t,
					) {
						var r = em();
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
						((n.prototype[('function' == typeof Symbol && Symbol.asyncIterator) || '@@asyncIterator'] = function () {
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
			(h(ey(), 1), h(eb(), 1), h(ev(), 1), h(m(), 1));
			var eg = Object.create,
				eO = Object.defineProperty,
				ex = Object.getOwnPropertyDescriptor,
				ew = Object.getOwnPropertyNames,
				eP = Object.getPrototypeOf,
				ej = Object.prototype.hasOwnProperty,
				eS = (e, t) =>
					function () {
						return (t || (0, e[ew(e)[0]])((t = { exports: {} }).exports, t), t.exports);
					},
				eC = eS({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
						e,
						t,
					) {
						function r(e) {
							return (
								(t.exports = r =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function (e) {
												return typeof e;
											}
										: function (e) {
												return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
													? 'symbol'
													: typeof e;
											}),
								(t.exports.__esModule = !0),
								(t.exports.default = t.exports),
								r(e)
							);
						}
						((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
					},
				}),
				eR = eS({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
						e,
						t,
					) {
						var r = eC().default;
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
				eQ = eS({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
						e,
						t,
					) {
						var r = eC().default,
							n = eR();
						((t.exports = function (e) {
							var t = n(e, 'string');
							return 'symbol' == r(t) ? t : t + '';
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				e_ = eS({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
						e,
						t,
					) {
						var r = eQ();
						((t.exports = function (e, t, n) {
							return (
								(t = r(t)) in e
									? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
									: (e[t] = n),
								e
							);
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				eq = eS({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
						e,
						t,
					) {
						var r = e_();
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
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
										: n(Object(s)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
											});
							}
							return e;
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				eE = r(148),
				eD = r.t(eE, 2),
				eM = r(5640),
				eI = eE.createContext(void 0),
				eT = (e) => {
					let t = eE.useContext(eI);
					if (e) return e;
					if (!t) throw Error('No QueryClient set, use QueryClientProvider to set one');
					return t;
				},
				ek = ({ client: e, children: t }) => (
					eE.useEffect(
						() => (
							e.mount(),
							() => {
								e.unmount();
							}
						),
						[e],
					),
					(0, eM.jsx)(eI.Provider, { value: e, children: t })
				),
				eA = 'undefined' == typeof window || 'Deno' in globalThis;
			function eF() {}
			function eU(e) {
				return 'number' == typeof e && e >= 0 && e !== 1 / 0;
			}
			function eL(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function eN(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function eK(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function eG(e, t) {
				let { type: r = 'all', exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: u } = e;
				if (o) {
					if (n) {
						if (t.queryHash !== eW(o, t.options)) return !1;
					} else if (!eB(t.queryKey, o)) return !1;
				}
				if ('all' !== r) {
					let e = t.isActive();
					if (('active' === r && !e) || ('inactive' === r && e)) return !1;
				}
				return ('boolean' != typeof u || t.isStale() === u) && (!s || s === t.state.fetchStatus) && (!i || !!i(t));
			}
			function eH(e, t) {
				let { exact: r, status: n, predicate: s, mutationKey: i } = e;
				if (i) {
					if (!t.options.mutationKey) return !1;
					if (r) {
						if (ez(t.options.mutationKey) !== ez(i)) return !1;
					} else if (!eB(t.options.mutationKey, i)) return !1;
				}
				return (!n || t.state.status === n) && (!s || !!s(t));
			}
			function eW(e, t) {
				return (t?.queryKeyHashFn || ez)(e);
			}
			function ez(e) {
				return JSON.stringify(e, (e, t) =>
					eY(t)
						? Object.keys(t)
								.sort()
								.reduce((e, r) => ((e[r] = t[r]), e), {})
						: t,
				);
			}
			function eB(e, t) {
				return (
					e === t ||
					(typeof e == typeof t &&
						!!e &&
						!!t &&
						'object' == typeof e &&
						'object' == typeof t &&
						Object.keys(t).every((r) => eB(e[r], t[r])))
				);
			}
			function e$(e, t) {
				if (e === t) return e;
				let r = eV(e) && eV(t);
				if (r || (eY(e) && eY(t))) {
					let n = r ? e : Object.keys(e),
						s = n.length,
						i = r ? t : Object.keys(t),
						o = i.length,
						u = r ? [] : {},
						a = new Set(n),
						l = 0;
					for (let n = 0; n < o; n++) {
						let s = r ? n : i[n];
						((!r && a.has(s)) || r) && void 0 === e[s] && void 0 === t[s]
							? ((u[s] = void 0), l++)
							: ((u[s] = e$(e[s], t[s])), u[s] === e[s] && void 0 !== e[s] && l++);
					}
					return s === o && l === s ? e : u;
				}
				return t;
			}
			function eJ(e, t) {
				if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
				for (let r in e) if (e[r] !== t[r]) return !1;
				return !0;
			}
			function eV(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function eY(e) {
				if (!eX(e)) return !1;
				let t = e.constructor;
				if (void 0 === t) return !0;
				let r = t.prototype;
				return !!eX(r) && !!r.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(e) === Object.prototype;
			}
			function eX(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function eZ(e, t, r) {
				return 'function' == typeof r.structuralSharing
					? r.structuralSharing(e, t)
					: !1 !== r.structuralSharing
						? e$(e, t)
						: t;
			}
			function e0(e, t, r = 0) {
				let n = [...e, t];
				return r && n.length > r ? n.slice(1) : n;
			}
			function e1(e, t, r = 0) {
				let n = [t, ...e];
				return r && n.length > r ? n.slice(0, -1) : n;
			}
			var e2 = Symbol();
			function e7(e, t) {
				return !e.queryFn && t?.initialPromise
					? () => t.initialPromise
					: e.queryFn && e.queryFn !== e2
						? e.queryFn
						: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
			}
			function e3(e, t) {
				return 'function' == typeof e ? e(...t) : !!e;
			}
			function e5() {
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
			function e6(e) {
				return e;
			}
			function e4(e, t, r) {
				if ('object' != typeof t || null === t) return;
				let n = e.getMutationCache(),
					s = e.getQueryCache(),
					i = r?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? e6,
					o = t.mutations || [],
					u = t.queries || [];
				(o.forEach(({ state: t, ...s }) => {
					n.build(e, { ...e.getDefaultOptions().hydrate?.mutations, ...r?.defaultOptions?.mutations, ...s }, t);
				}),
					u.forEach(({ queryKey: t, state: n, queryHash: o, meta: u, promise: a, dehydratedAt: l }) => {
						let c = a
								? (function (e) {
										let t;
										if ((e.then((e) => ((t = e), e), eF)?.catch(eF), void 0 !== t)) return { data: t };
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
								{ ...n, data: d, fetchStatus: 'idle', status: void 0 !== d ? 'success' : n.status },
							);
						a &&
							!f &&
							!y &&
							(void 0 === l || l > p.state.dataUpdatedAt) &&
							p.fetch(void 0, { initialPromise: Promise.resolve(a).then(i) });
					}));
			}
			var e8 = ({ children: e, options: t = {}, state: r, queryClient: n }) => {
					let s = eT(n),
						i = eE.useRef(t);
					i.current = t;
					let o = eE.useMemo(() => {
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
							if ((n.length > 0 && e4(s, { queries: n }, i.current), o.length > 0)) return o;
						}
					}, [s, r]);
					return (
						eE.useEffect(() => {
							o && e4(s, { queries: o }, i.current);
						}, [s, o]),
						e
					);
				},
				e9 = Object.create,
				te = Object.defineProperty,
				tt = Object.getOwnPropertyDescriptor,
				tr = Object.getOwnPropertyNames,
				tn = Object.getPrototypeOf,
				ts = Object.prototype.hasOwnProperty,
				ti = (e, t) =>
					function () {
						return (t || (0, e[tr(e)[0]])((t = { exports: {} }).exports, t), t.exports);
					},
				to = (e, t, r) => (
					(r = null != e ? e9(tn(e)) : {}),
					((e, t, r, n) => {
						if ((t && 'object' == typeof t) || 'function' == typeof t)
							for (var s, i = tr(t), o = 0, u = i.length; o < u; o++)
								((s = i[o]),
									ts.call(e, s) ||
										s === r ||
										te(e, s, { get: ((e) => t[e]).bind(null, s), enumerable: !(n = tt(t, s)) || n.enumerable }));
						return e;
					})(!t && e && e.__esModule ? r : te(r, 'default', { value: e, enumerable: !0 }), e)
				),
				tu = ti({
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
				ta = ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js'(
						e,
						t,
					) {
						var r = tu();
						((t.exports = function (e, t) {
							if (null == e) return {};
							var n,
								s,
								i = r(e, t);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(e);
								for (s = 0; s < o.length; s++)
									((n = o[s]), t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
							}
							return i;
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				tl = ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js'(
						e,
						t,
					) {
						function r(e) {
							return (
								(t.exports = r =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function (e) {
												return typeof e;
											}
										: function (e) {
												return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
													? 'symbol'
													: typeof e;
											}),
								(t.exports.__esModule = !0),
								(t.exports.default = t.exports),
								r(e)
							);
						}
						((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
					},
				}),
				tc = ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js'(
						e,
						t,
					) {
						var r = tl().default;
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
				th = ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js'(
						e,
						t,
					) {
						var r = tl().default,
							n = tc();
						((t.exports = function (e) {
							var t = n(e, 'string');
							return 'symbol' == r(t) ? t : t + '';
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				td = ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js'(
						e,
						t,
					) {
						var r = th();
						((t.exports = function (e, t, n) {
							return (
								(t = r(t)) in e
									? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
									: (e[t] = n),
								e
							);
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				tp = ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js'(
						e,
						t,
					) {
						var r = td();
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
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
										: n(Object(s)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
											});
							}
							return e;
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports));
					},
				}),
				tf = to(ta(), 1),
				ty = to(tp(), 1);
			let tm = ['cursor', 'direction'];
			function tb(e, t, r) {
				let n = e.flatMap((e) => e.split('.'));
				if (!t && (!r || 'any' === r)) return n.length ? [n] : [];
				if ('infinite' === r && O(t) && ('direction' in t || 'cursor' in t)) {
					let { cursor: e, direction: r } = t;
					return [n, { input: (0, tf.default)(t, tm), type: 'infinite' }];
				}
				return [
					n,
					(0, ty.default)(
						(0, ty.default)({}, void 0 !== t && t !== e2 && { input: t }),
						r && 'any' !== r && { type: r },
					),
				];
			}
			function tv(e) {
				return tb(e, void 0, 'any');
			}
			var tg = class {
					constructor() {
						((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
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
				tO = new (class extends tg {
					#e;
					#t;
					#r;
					constructor() {
						(super(),
							(this.#r = (e) => {
								if (!eA && window.addEventListener) {
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
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						((this.#r = e),
							this.#t?.(),
							(this.#t = e((e) => {
								'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
							})));
					}
					setFocused(e) {
						this.#e !== e && ((this.#e = e), this.onFocus());
					}
					onFocus() {
						let e = this.isFocused();
						this.listeners.forEach((t) => {
							t(e);
						});
					}
					isFocused() {
						return 'boolean' == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== 'hidden';
					}
				})(),
				tx = (e) => setTimeout(e, 0),
				tw = (function () {
					let e = [],
						t = 0,
						r = (e) => {
							e();
						},
						n = (e) => {
							e();
						},
						s = tx,
						i = (n) => {
							t
								? e.push(n)
								: s(() => {
										r(n);
									});
						};
					return {
						batch: (i) => {
							let o;
							t++;
							try {
								o = i();
							} finally {
								--t ||
									(() => {
										let t = e;
										((e = []),
											t.length &&
												s(() => {
													n(() => {
														t.forEach((e) => {
															r(e);
														});
													});
												}));
									})();
							}
							return o;
						},
						batchCalls:
							(e) =>
							(...t) => {
								i(() => {
									e(...t);
								});
							},
						schedule: i,
						setNotifyFunction: (e) => {
							r = e;
						},
						setBatchNotifyFunction: (e) => {
							n = e;
						},
						setScheduler: (e) => {
							s = e;
						},
					};
				})(),
				tP = new (class extends tg {
					#n = !0;
					#t;
					#r;
					constructor() {
						(super(),
							(this.#r = (e) => {
								if (!eA && window.addEventListener) {
									let t = () => e(!0),
										r = () => e(!1);
									return (
										window.addEventListener('online', t, !1),
										window.addEventListener('offline', r, !1),
										() => {
											(window.removeEventListener('online', t), window.removeEventListener('offline', r));
										}
									);
								}
							}));
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						((this.#r = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
					}
					setOnline(e) {
						this.#n !== e &&
							((this.#n = e),
							this.listeners.forEach((t) => {
								t(e);
							}));
					}
					isOnline() {
						return this.#n;
					}
				})();
			function tj(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function tS(e) {
				return (e ?? 'online') !== 'online' || tP.isOnline();
			}
			var tC = class extends Error {
				constructor(e) {
					(super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent));
				}
			};
			function tR(e) {
				return e instanceof tC;
			}
			function tQ(e) {
				let t,
					r = !1,
					n = 0,
					s = !1,
					i = e5(),
					o = () => tO.isFocused() && ('always' === e.networkMode || tP.isOnline()) && e.canRun(),
					u = () => tS(e.networkMode) && e.canRun(),
					a = (r) => {
						s || ((s = !0), e.onSuccess?.(r), t?.(), i.resolve(r));
					},
					l = (r) => {
						s || ((s = !0), e.onError?.(r), t?.(), i.reject(r));
					},
					c = () =>
						new Promise((r) => {
							((t = (e) => {
								(s || o()) && r(e);
							}),
								e.onPause?.());
						}).then(() => {
							((t = void 0), s || e.onContinue?.());
						}),
					h = () => {
						let t;
						if (s) return;
						let i = 0 === n ? e.initialPromise : void 0;
						try {
							t = i ?? e.fn();
						} catch (e) {
							t = Promise.reject(e);
						}
						Promise.resolve(t)
							.then(a)
							.catch((t) => {
								if (s) return;
								let i = e.retry ?? 3 * !eA,
									u = e.retryDelay ?? tj,
									a = 'function' == typeof u ? u(n, t) : u,
									d = !0 === i || ('number' == typeof i && n < i) || ('function' == typeof i && i(n, t));
								if (r || !d) return void l(t);
								(n++,
									e.onFail?.(n, t),
									new Promise((e) => {
										setTimeout(e, a);
									})
										.then(() => (o() ? void 0 : c()))
										.then(() => {
											r ? l(t) : h();
										}));
							});
					};
				return {
					promise: i,
					cancel: (t) => {
						s || (l(new tC(t)), e.abort?.());
					},
					continue: () => (t?.(), i),
					cancelRetry: () => {
						r = !0;
					},
					continueRetry: () => {
						r = !1;
					},
					canStart: u,
					start: () => (u() ? h() : c().then(h), i),
				};
			}
			var t_ = class {
					#s;
					destroy() {
						this.clearGcTimeout();
					}
					scheduleGc() {
						(this.clearGcTimeout(),
							eU(this.gcTime) &&
								(this.#s = setTimeout(() => {
									this.optionalRemove();
								}, this.gcTime)));
					}
					updateGcTime(e) {
						this.gcTime = Math.max(this.gcTime || 0, e ?? (eA ? 1 / 0 : 3e5));
					}
					clearGcTimeout() {
						this.#s && (clearTimeout(this.#s), (this.#s = void 0));
					}
				},
				tq = class extends t_ {
					#i;
					#o;
					#u;
					#a;
					#l;
					#c;
					#h;
					constructor(e) {
						(super(),
							(this.#h = !1),
							(this.#c = e.defaultOptions),
							this.setOptions(e.options),
							(this.observers = []),
							(this.#a = e.client),
							(this.#u = this.#a.getQueryCache()),
							(this.queryKey = e.queryKey),
							(this.queryHash = e.queryHash),
							(this.#i = (function (e) {
								let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
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
							})(this.options)),
							(this.state = e.state ?? this.#i),
							this.scheduleGc());
					}
					get meta() {
						return this.options.meta;
					}
					get promise() {
						return this.#l?.promise;
					}
					setOptions(e) {
						((this.options = { ...this.#c, ...e }), this.updateGcTime(this.options.gcTime));
					}
					optionalRemove() {
						this.observers.length || 'idle' !== this.state.fetchStatus || this.#u.remove(this);
					}
					setData(e, t) {
						let r = eZ(this.state.data, e, this.options);
						return (this.#d({ data: r, type: 'success', dataUpdatedAt: t?.updatedAt, manual: t?.manual }), r);
					}
					setState(e, t) {
						this.#d({ type: 'setState', state: e, setStateOptions: t });
					}
					cancel(e) {
						let t = this.#l?.promise;
						return (this.#l?.cancel(e), t ? t.then(eF).catch(eF) : Promise.resolve());
					}
					destroy() {
						(super.destroy(), this.cancel({ silent: !0 }));
					}
					reset() {
						(this.destroy(), this.setState(this.#i));
					}
					isActive() {
						return this.observers.some((e) => !1 !== eK(e.options.enabled, this));
					}
					isDisabled() {
						return this.getObserversCount() > 0
							? !this.isActive()
							: this.options.queryFn === e2 || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
					}
					isStatic() {
						return (
							this.getObserversCount() > 0 && this.observers.some((e) => 'static' === eN(e.options.staleTime, this))
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
							('static' !== e && (!!this.state.isInvalidated || !eL(this.state.dataUpdatedAt, e)))
						);
					}
					onFocus() {
						let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
						(e?.refetch({ cancelRefetch: !1 }), this.#l?.continue());
					}
					onOnline() {
						let e = this.observers.find((e) => e.shouldFetchOnReconnect());
						(e?.refetch({ cancelRefetch: !1 }), this.#l?.continue());
					}
					addObserver(e) {
						this.observers.includes(e) ||
							(this.observers.push(e),
							this.clearGcTimeout(),
							this.#u.notify({ type: 'observerAdded', query: this, observer: e }));
					}
					removeObserver(e) {
						this.observers.includes(e) &&
							((this.observers = this.observers.filter((t) => t !== e)),
							this.observers.length ||
								(this.#l && (this.#h ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()), this.scheduleGc()),
							this.#u.notify({ type: 'observerRemoved', query: this, observer: e }));
					}
					getObserversCount() {
						return this.observers.length;
					}
					invalidate() {
						this.state.isInvalidated || this.#d({ type: 'invalidate' });
					}
					fetch(e, t) {
						if ('idle' !== this.state.fetchStatus) {
							if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
							else if (this.#l) return (this.#l.continueRetry(), this.#l.promise);
						}
						if ((e && this.setOptions(e), !this.options.queryFn)) {
							let e = this.observers.find((e) => e.options.queryFn);
							e && this.setOptions(e.options);
						}
						let r = new AbortController(),
							n = (e) => {
								Object.defineProperty(e, 'signal', { enumerable: !0, get: () => ((this.#h = !0), r.signal) });
							},
							s = () => {
								let e = e7(this.options, t),
									r = (() => {
										let e = { client: this.#a, queryKey: this.queryKey, meta: this.meta };
										return (n(e), e);
									})();
								return ((this.#h = !1), this.options.persister) ? this.options.persister(e, r, this) : e(r);
							},
							i = (() => {
								let e = {
									fetchOptions: t,
									options: this.options,
									queryKey: this.queryKey,
									client: this.#a,
									state: this.state,
									fetchFn: s,
								};
								return (n(e), e);
							})();
						(this.options.behavior?.onFetch(i, this),
							(this.#o = this.state),
							('idle' === this.state.fetchStatus || this.state.fetchMeta !== i.fetchOptions?.meta) &&
								this.#d({ type: 'fetch', meta: i.fetchOptions?.meta }));
						let o = (e) => {
							((tR(e) && e.silent) || this.#d({ type: 'error', error: e }),
								tR(e) || (this.#u.config.onError?.(e, this), this.#u.config.onSettled?.(this.state.data, e, this)),
								this.scheduleGc());
						};
						return (
							(this.#l = tQ({
								initialPromise: t?.initialPromise,
								fn: i.fetchFn,
								abort: r.abort.bind(r),
								onSuccess: (e) => {
									if (void 0 === e) return void o(Error(`${this.queryHash} data is undefined`));
									try {
										this.setData(e);
									} catch (e) {
										o(e);
										return;
									}
									(this.#u.config.onSuccess?.(e, this),
										this.#u.config.onSettled?.(e, this.state.error, this),
										this.scheduleGc());
								},
								onError: o,
								onFail: (e, t) => {
									this.#d({ type: 'failed', failureCount: e, error: t });
								},
								onPause: () => {
									this.#d({ type: 'pause' });
								},
								onContinue: () => {
									this.#d({ type: 'continue' });
								},
								retry: i.options.retry,
								retryDelay: i.options.retryDelay,
								networkMode: i.options.networkMode,
								canRun: () => !0,
							})),
							this.#l.start()
						);
					}
					#d(e) {
						let t = (t) => {
							switch (e.type) {
								case 'failed':
									return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
								case 'pause':
									return { ...t, fetchStatus: 'paused' };
								case 'continue':
									return { ...t, fetchStatus: 'fetching' };
								case 'fetch':
									return { ...t, ...tE(t.data, this.options), fetchMeta: e.meta ?? null };
								case 'success':
									return (
										(this.#o = void 0),
										{
											...t,
											data: e.data,
											dataUpdateCount: t.dataUpdateCount + 1,
											dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
											error: null,
											isInvalidated: !1,
											status: 'success',
											...(!e.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
										}
									);
								case 'error':
									let r = e.error;
									if (tR(r) && r.revert && this.#o) return { ...this.#o, fetchStatus: 'idle' };
									return {
										...t,
										error: r,
										errorUpdateCount: t.errorUpdateCount + 1,
										errorUpdatedAt: Date.now(),
										fetchFailureCount: t.fetchFailureCount + 1,
										fetchFailureReason: r,
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
							tw.batch(() => {
								(this.observers.forEach((e) => {
									e.onQueryUpdate();
								}),
									this.#u.notify({ query: this, type: 'updated', action: e }));
							}));
					}
				};
			function tE(e, t) {
				return {
					fetchFailureCount: 0,
					fetchFailureReason: null,
					fetchStatus: tS(t.networkMode) ? 'fetching' : 'paused',
					...(void 0 === e && { error: null, status: 'pending' }),
				};
			}
			var tD = class extends tg {
				constructor(e, t) {
					(super(),
						(this.options = t),
						(this.#a = e),
						(this.#p = null),
						(this.#f = e5()),
						this.options.experimental_prefetchInRender ||
							this.#f.reject(Error('experimental_prefetchInRender feature flag is not enabled')),
						this.bindMethods(),
						this.setOptions(t));
				}
				#a;
				#y = void 0;
				#m = void 0;
				#b = void 0;
				#v;
				#g;
				#f;
				#p;
				#O;
				#x;
				#w;
				#P;
				#j;
				#S;
				#C = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#y.addObserver(this), tM(this.#y, this.options) ? this.#R() : this.updateResult(), this.#Q());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return tI(this.#y, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return tI(this.#y, this.options, this.options.refetchOnWindowFocus);
				}
				destroy() {
					((this.listeners = new Set()), this.#_(), this.#q(), this.#y.removeObserver(this));
				}
				setOptions(e) {
					let t = this.options,
						r = this.#y;
					if (
						((this.options = this.#a.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							'boolean' != typeof this.options.enabled &&
							'function' != typeof this.options.enabled &&
							'boolean' != typeof eK(this.options.enabled, this.#y))
					)
						throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
					(this.#E(),
						this.#y.setOptions(this.options),
						t._defaulted &&
							!eJ(this.options, t) &&
							this.#a.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.#y, observer: this }));
					let n = this.hasListeners();
					(n && tT(this.#y, r, this.options, t) && this.#R(),
						this.updateResult(),
						n &&
							(this.#y !== r ||
								eK(this.options.enabled, this.#y) !== eK(t.enabled, this.#y) ||
								eN(this.options.staleTime, this.#y) !== eN(t.staleTime, this.#y)) &&
							this.#D());
					let s = this.#M();
					n &&
						(this.#y !== r || eK(this.options.enabled, this.#y) !== eK(t.enabled, this.#y) || s !== this.#S) &&
						this.#I(s);
				}
				getOptimisticResult(e) {
					var t, r;
					let n = this.#a.getQueryCache().build(this.#a, e),
						s = this.createResult(n, e);
					return (
						(t = this),
						(r = s),
						eJ(t.getCurrentResult(), r) || ((this.#b = s), (this.#g = this.options), (this.#v = this.#y.state)),
						s
					);
				}
				getCurrentResult() {
					return this.#b;
				}
				trackResult(e, t) {
					return new Proxy(e, { get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)) });
				}
				trackProp(e) {
					this.#C.add(e);
				}
				getCurrentQuery() {
					return this.#y;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					let t = this.#a.defaultQueryOptions(e),
						r = this.#a.getQueryCache().build(this.#a, t);
					return r.fetch().then(() => this.createResult(r, t));
				}
				fetch(e) {
					return this.#R({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(() => (this.updateResult(), this.#b));
				}
				#R(e) {
					this.#E();
					let t = this.#y.fetch(this.options, e);
					return (e?.throwOnError || (t = t.catch(eF)), t);
				}
				#D() {
					this.#_();
					let e = eN(this.options.staleTime, this.#y);
					if (eA || this.#b.isStale || !eU(e)) return;
					let t = eL(this.#b.dataUpdatedAt, e);
					this.#P = setTimeout(() => {
						this.#b.isStale || this.updateResult();
					}, t + 1);
				}
				#M() {
					return (
						('function' == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#y)
							: this.options.refetchInterval) ?? !1
					);
				}
				#I(e) {
					(this.#q(),
						(this.#S = e),
						!eA &&
							!1 !== eK(this.options.enabled, this.#y) &&
							eU(this.#S) &&
							0 !== this.#S &&
							(this.#j = setInterval(() => {
								(this.options.refetchIntervalInBackground || tO.isFocused()) && this.#R();
							}, this.#S)));
				}
				#Q() {
					(this.#D(), this.#I(this.#M()));
				}
				#_() {
					this.#P && (clearTimeout(this.#P), (this.#P = void 0));
				}
				#q() {
					this.#j && (clearInterval(this.#j), (this.#j = void 0));
				}
				createResult(e, t) {
					let r,
						n = this.#y,
						s = this.options,
						i = this.#b,
						o = this.#v,
						u = this.#g,
						a = e !== n ? e.state : this.#m,
						{ state: l } = e,
						c = { ...l },
						h = !1;
					if (t._optimisticResults) {
						let r = this.hasListeners(),
							i = !r && tM(e, t),
							o = r && tT(e, n, t, s);
						((i || o) && (c = { ...c, ...tE(l.data, e.options) }),
							'isRestoring' === t._optimisticResults && (c.fetchStatus = 'idle'));
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
										? t.placeholderData(this.#w?.state.data, this.#w)
										: t.placeholderData),
							void 0 !== e && ((f = 'success'), (r = eZ(i?.data, e, t)), (h = !0)));
					}
					if (t.select && void 0 !== r && !y)
						if (i && r === o?.data && t.select === this.#O) r = this.#x;
						else
							try {
								((this.#O = t.select), (r = t.select(r)), (r = eZ(i?.data, r, t)), (this.#x = r), (this.#p = null));
							} catch (e) {
								this.#p = e;
							}
					this.#p && ((d = this.#p), (r = this.#x), (p = Date.now()), (f = 'error'));
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
							isFetchedAfterMount: c.dataUpdateCount > a.dataUpdateCount || c.errorUpdateCount > a.errorUpdateCount,
							isFetching: m,
							isRefetching: m && !b,
							isLoadingError: v && !O,
							isPaused: 'paused' === c.fetchStatus,
							isPlaceholderData: h,
							isRefetchError: v && O,
							isStale: tk(e, t),
							refetch: this.refetch,
							promise: this.#f,
							isEnabled: !1 !== eK(t.enabled, e),
						};
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								'error' === x.status ? e.reject(x.error) : void 0 !== x.data && e.resolve(x.data);
							},
							r = () => {
								t((this.#f = x.promise = e5()));
							},
							s = this.#f;
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
					let e = this.#b,
						t = this.createResult(this.#y, this.options);
					if (
						((this.#v = this.#y.state),
						(this.#g = this.options),
						void 0 !== this.#v.data && (this.#w = this.#y),
						eJ(t, e))
					)
						return;
					this.#b = t;
					let r = () => {
						if (!e) return !0;
						let { notifyOnChangeProps: t } = this.options,
							r = 'function' == typeof t ? t() : t;
						if ('all' === r || (!r && !this.#C.size)) return !0;
						let n = new Set(r ?? this.#C);
						return (
							this.options.throwOnError && n.add('error'),
							Object.keys(this.#b).some((t) => this.#b[t] !== e[t] && n.has(t))
						);
					};
					this.#T({ listeners: r() });
				}
				#E() {
					let e = this.#a.getQueryCache().build(this.#a, this.options);
					if (e === this.#y) return;
					let t = this.#y;
					((this.#y = e), (this.#m = e.state), this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
				}
				onQueryUpdate() {
					(this.updateResult(), this.hasListeners() && this.#Q());
				}
				#T(e) {
					tw.batch(() => {
						(e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#b);
							}),
							this.#a.getQueryCache().notify({ query: this.#y, type: 'observerResultsUpdated' }));
					});
				}
			};
			function tM(e, t) {
				return (
					(!1 !== eK(t.enabled, e) &&
						void 0 === e.state.data &&
						('error' !== e.state.status || !1 !== t.retryOnMount)) ||
					(void 0 !== e.state.data && tI(e, t, t.refetchOnMount))
				);
			}
			function tI(e, t, r) {
				if (!1 !== eK(t.enabled, e) && 'static' !== eN(t.staleTime, e)) {
					let n = 'function' == typeof r ? r(e) : r;
					return 'always' === n || (!1 !== n && tk(e, t));
				}
				return !1;
			}
			function tT(e, t, r, n) {
				return (e !== t || !1 === eK(n.enabled, e)) && (!r.suspense || 'error' !== e.state.status) && tk(e, r);
			}
			function tk(e, t) {
				return !1 !== eK(t.enabled, e) && e.isStaleByTime(eN(t.staleTime, e));
			}
			var tA = eE.createContext(
					(function () {
						let e = !1;
						return {
							clearReset: () => {
								e = !1;
							},
							reset: () => {
								e = !0;
							},
							isReset: () => e,
						};
					})(),
				),
				tF = () => eE.useContext(tA),
				tU = (e, t) => {
					(e.suspense || e.throwOnError || e.experimental_prefetchInRender) && !t.isReset() && (e.retryOnMount = !1);
				},
				tL = (e) => {
					eE.useEffect(() => {
						e.clearReset();
					}, [e]);
				},
				tN = ({ result: e, errorResetBoundary: t, throwOnError: r, query: n, suspense: s }) =>
					e.isError && !t.isReset() && !e.isFetching && n && ((s && void 0 === e.data) || e3(r, [e.error, n])),
				tK = eE.createContext(!1),
				tG = () => eE.useContext(tK);
			tK.Provider;
			var tH = (e, t) => void 0 === t.state.data,
				tW = (e) => {
					if (e.suspense) {
						let t = (e) => ('static' === e ? e : Math.max(e ?? 1e3, 1e3)),
							r = e.staleTime;
						((e.staleTime = 'function' == typeof r ? (...e) => t(r(...e)) : t(r)),
							'number' == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3)));
					}
				},
				tz = (e, t) => e.isLoading && e.isFetching && !t,
				tB = (e, t) => e?.suspense && t.isPending,
				t$ = (e, t, r) =>
					t.fetchOptimistic(e).catch(() => {
						r.clearReset();
					});
			function tJ(e, t, r) {
				let n = tG(),
					s = tF(),
					i = eT(r),
					o = i.defaultQueryOptions(e);
				(i.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
					(o._optimisticResults = n ? 'isRestoring' : 'optimistic'),
					tW(o),
					tU(o, s),
					tL(s));
				let u = !i.getQueryCache().get(o.queryHash),
					[a] = eE.useState(() => new t(i, o)),
					l = a.getOptimisticResult(o),
					c = !n && !1 !== e.subscribed;
				if (
					(eE.useSyncExternalStore(
						eE.useCallback(
							(e) => {
								let t = c ? a.subscribe(tw.batchCalls(e)) : eF;
								return (a.updateResult(), t);
							},
							[a, c],
						),
						() => a.getCurrentResult(),
						() => a.getCurrentResult(),
					),
					eE.useEffect(() => {
						a.setOptions(o);
					}, [o, a]),
					tB(o, l))
				)
					throw t$(o, a, s);
				if (
					tN({
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
					o.experimental_prefetchInRender && !eA && tz(l, n))
				) {
					let e = u ? t$(o, a, s) : i.getQueryCache().get(o.queryHash)?.promise;
					e?.catch(eF).finally(() => {
						a.updateResult();
					});
				}
				return o.notifyOnChangeProps ? l : a.trackResult(l);
			}
			var tV = class extends t_ {
				#k;
				#A;
				#l;
				constructor(e) {
					(super(),
						(this.mutationId = e.mutationId),
						(this.#A = e.mutationCache),
						(this.#k = []),
						(this.state = e.state || tY()),
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
					this.#k.includes(e) ||
						(this.#k.push(e),
						this.clearGcTimeout(),
						this.#A.notify({ type: 'observerAdded', mutation: this, observer: e }));
				}
				removeObserver(e) {
					((this.#k = this.#k.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#A.notify({ type: 'observerRemoved', mutation: this, observer: e }));
				}
				optionalRemove() {
					this.#k.length || ('pending' === this.state.status ? this.scheduleGc() : this.#A.remove(this));
				}
				continue() {
					return this.#l?.continue() ?? this.execute(this.state.variables);
				}
				async execute(e) {
					let t = () => {
						this.#d({ type: 'continue' });
					};
					this.#l = tQ({
						fn: () =>
							this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error('No mutationFn found')),
						onFail: (e, t) => {
							this.#d({ type: 'failed', failureCount: e, error: t });
						},
						onPause: () => {
							this.#d({ type: 'pause' });
						},
						onContinue: t,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#A.canRun(this),
					});
					let r = 'pending' === this.state.status,
						n = !this.#l.canStart();
					try {
						if (r) t();
						else {
							(this.#d({ type: 'pending', variables: e, isPaused: n }), await this.#A.config.onMutate?.(e, this));
							let t = await this.options.onMutate?.(e);
							t !== this.state.context && this.#d({ type: 'pending', context: t, variables: e, isPaused: n });
						}
						let s = await this.#l.start();
						return (
							await this.#A.config.onSuccess?.(s, e, this.state.context, this),
							await this.options.onSuccess?.(s, e, this.state.context),
							await this.#A.config.onSettled?.(s, null, this.state.variables, this.state.context, this),
							await this.options.onSettled?.(s, null, e, this.state.context),
							this.#d({ type: 'success', data: s }),
							s
						);
					} catch (t) {
						try {
							throw (
								await this.#A.config.onError?.(t, e, this.state.context, this),
								await this.options.onError?.(t, e, this.state.context),
								await this.#A.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
								await this.options.onSettled?.(void 0, t, e, this.state.context),
								t
							);
						} finally {
							this.#d({ type: 'error', error: t });
						}
					} finally {
						this.#A.runNext(this);
					}
				}
				#d(e) {
					((this.state = ((t) => {
						switch (e.type) {
							case 'failed':
								return { ...t, failureCount: e.failureCount, failureReason: e.error };
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
						tw.batch(() => {
							(this.#k.forEach((t) => {
								t.onMutationUpdate(e);
							}),
								this.#A.notify({ mutation: this, type: 'updated', action: e }));
						}));
				}
			};
			function tY() {
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
			var tX = class extends tg {
				#a;
				#b = void 0;
				#F;
				#U;
				constructor(e, t) {
					(super(), (this.#a = e), this.setOptions(t), this.bindMethods(), this.#L());
				}
				bindMethods() {
					((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
				}
				setOptions(e) {
					let t = this.options;
					((this.options = this.#a.defaultMutationOptions(e)),
						eJ(this.options, t) ||
							this.#a.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.#F, observer: this }),
						t?.mutationKey && this.options.mutationKey && ez(t.mutationKey) !== ez(this.options.mutationKey)
							? this.reset()
							: this.#F?.state.status === 'pending' && this.#F.setOptions(this.options));
				}
				onUnsubscribe() {
					this.hasListeners() || this.#F?.removeObserver(this);
				}
				onMutationUpdate(e) {
					(this.#L(), this.#T(e));
				}
				getCurrentResult() {
					return this.#b;
				}
				reset() {
					(this.#F?.removeObserver(this), (this.#F = void 0), this.#L(), this.#T());
				}
				mutate(e, t) {
					return (
						(this.#U = t),
						this.#F?.removeObserver(this),
						(this.#F = this.#a.getMutationCache().build(this.#a, this.options)),
						this.#F.addObserver(this),
						this.#F.execute(e)
					);
				}
				#L() {
					let e = this.#F?.state ?? tY();
					this.#b = {
						...e,
						isPending: 'pending' === e.status,
						isSuccess: 'success' === e.status,
						isError: 'error' === e.status,
						isIdle: 'idle' === e.status,
						mutate: this.mutate,
						reset: this.reset,
					};
				}
				#T(e) {
					tw.batch(() => {
						if (this.#U && this.hasListeners()) {
							let t = this.#b.variables,
								r = this.#b.context;
							e?.type === 'success'
								? (this.#U.onSuccess?.(e.data, t, r), this.#U.onSettled?.(e.data, null, t, r))
								: e?.type === 'error' && (this.#U.onError?.(e.error, t, r), this.#U.onSettled?.(void 0, e.error, t, r));
						}
						this.listeners.forEach((e) => {
							e(this.#b);
						});
					});
				}
			};
			function tZ(e) {
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
									l = e7(t.options, t.fetchOptions),
									c = async (e, n, s) => {
										if (r) return Promise.reject();
										if (null == n && e.pages.length) return Promise.resolve(e);
										let i = (() => {
												let e = {
													client: t.client,
													queryKey: t.queryKey,
													pageParam: n,
													direction: s ? 'backward' : 'forward',
													meta: t.options.meta,
												};
												return (
													Object.defineProperty(e, 'signal', {
														enumerable: !0,
														get: () => (
															t.signal.aborted
																? (r = !0)
																: t.signal.addEventListener('abort', () => {
																		r = !0;
																	}),
															t.signal
														),
													}),
													e
												);
											})(),
											o = await l(i),
											{ maxPages: u } = t.options,
											a = s ? e1 : e0;
										return { pages: a(e.pages, o, u), pageParams: a(e.pageParams, n, u) };
									};
								if (s && i.length) {
									let e = 'backward' === s,
										t = { pages: i, pageParams: o },
										r = (e ? t1 : t0)(n, t);
									u = await c(t, r, e);
								} else {
									let t = e ?? i.length;
									do {
										let e = 0 === a ? (o[0] ?? n.initialPageParam) : t0(n, u);
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
										{ client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
										r,
									))
							: (t.fetchFn = l);
					},
				};
			}
			function t0(e, { pages: t, pageParams: r }) {
				let n = t.length - 1;
				return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
			}
			function t1(e, { pages: t, pageParams: r }) {
				return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
			}
			var t2 = class extends tD {
				constructor(e, t) {
					super(e, t);
				}
				bindMethods() {
					(super.bindMethods(),
						(this.fetchNextPage = this.fetchNextPage.bind(this)),
						(this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
				}
				setOptions(e) {
					super.setOptions({ ...e, behavior: tZ() });
				}
				getOptimisticResult(e) {
					return ((e.behavior = tZ()), super.getOptimisticResult(e));
				}
				fetchNextPage(e) {
					return this.fetch({ ...e, meta: { fetchMore: { direction: 'forward' } } });
				}
				fetchPreviousPage(e) {
					return this.fetch({ ...e, meta: { fetchMore: { direction: 'backward' } } });
				}
				createResult(e, t) {
					var r, n;
					let { state: s } = e,
						i = super.createResult(e, t),
						{ isFetching: o, isRefetching: u, isError: a, isRefetchError: l } = i,
						c = s.fetchMeta?.fetchMore?.direction,
						h = a && 'forward' === c,
						d = o && 'forward' === c,
						p = a && 'backward' === c,
						f = o && 'backward' === c;
					return {
						...i,
						fetchNextPage: this.fetchNextPage,
						fetchPreviousPage: this.fetchPreviousPage,
						hasNextPage: !!(r = s.data) && null != t0(t, r),
						hasPreviousPage: !!(n = s.data) && !!t.getPreviousPageParam && null != t1(t, n),
						isFetchNextPageError: h,
						isFetchingNextPage: d,
						isFetchPreviousPageError: p,
						isFetchingPreviousPage: f,
						isRefetchError: l && !h && !p,
						isRefetching: u && !d && !f,
					};
				}
			};
			function t7(e, t) {
				let r = new Set(t);
				return e.filter((e) => !r.has(e));
			}
			var t3 = class extends tg {
				#a;
				#N;
				#K;
				#G;
				#k;
				#H;
				#W;
				#z;
				#B = [];
				constructor(e, t, r) {
					(super(), (this.#a = e), (this.#G = r), (this.#K = []), (this.#k = []), (this.#N = []), this.setQueries(t));
				}
				onSubscribe() {
					1 === this.listeners.size &&
						this.#k.forEach((e) => {
							e.subscribe((t) => {
								this.#$(e, t);
							});
						});
				}
				onUnsubscribe() {
					this.listeners.size || this.destroy();
				}
				destroy() {
					((this.listeners = new Set()),
						this.#k.forEach((e) => {
							e.destroy();
						}));
				}
				setQueries(e, t) {
					((this.#K = e),
						(this.#G = t),
						tw.batch(() => {
							let e = this.#k,
								t = this.#J(this.#K);
							((this.#B = t), t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions)));
							let r = t.map((e) => e.observer),
								n = r.map((e) => e.getCurrentResult()),
								s = r.some((t, r) => t !== e[r]);
							(e.length !== r.length || s) &&
								((this.#k = r),
								(this.#N = n),
								this.hasListeners() &&
									(t7(e, r).forEach((e) => {
										e.destroy();
									}),
									t7(r, e).forEach((e) => {
										e.subscribe((t) => {
											this.#$(e, t);
										});
									}),
									this.#T()));
						}));
				}
				getCurrentResult() {
					return this.#N;
				}
				getQueries() {
					return this.#k.map((e) => e.getCurrentQuery());
				}
				getObservers() {
					return this.#k;
				}
				getOptimisticResult(e, t) {
					let r = this.#J(e),
						n = r.map((e) => e.observer.getOptimisticResult(e.defaultedQueryOptions));
					return [n, (e) => this.#V(e ?? n, t), () => this.#Y(n, r)];
				}
				#Y(e, t) {
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
				#V(e, t) {
					return t
						? ((this.#H && this.#N === this.#z && t === this.#W) ||
								((this.#W = t), (this.#z = this.#N), (this.#H = e$(this.#H, t(e)))),
							this.#H)
						: e;
				}
				#J(e) {
					let t = new Map(this.#k.map((e) => [e.options.queryHash, e])),
						r = [];
					return (
						e.forEach((e) => {
							let n = this.#a.defaultQueryOptions(e),
								s = t.get(n.queryHash);
							s
								? r.push({ defaultedQueryOptions: n, observer: s })
								: r.push({ defaultedQueryOptions: n, observer: new tD(this.#a, n) });
						}),
						r
					);
				}
				#$(e, t) {
					let r = this.#k.indexOf(e);
					-1 !== r &&
						((this.#N = (function (e, t, r) {
							let n = e.slice(0);
							return ((n[t] = r), n);
						})(this.#N, r, t)),
						this.#T());
				}
				#T() {
					if (this.hasListeners()) {
						let e = this.#H,
							t = this.#Y(this.#N, this.#B);
						e !== this.#V(t, this.#G?.combine) &&
							tw.batch(() => {
								this.listeners.forEach((e) => {
									e(this.#N);
								});
							});
					}
				}
			};
			function t5({ queries: e, ...t }, r) {
				let n = eT(r),
					s = tG(),
					i = tF(),
					o = eE.useMemo(
						() =>
							e.map((e) => {
								let t = n.defaultQueryOptions(e);
								return ((t._optimisticResults = s ? 'isRestoring' : 'optimistic'), t);
							}),
						[e, n, s],
					);
				(o.forEach((e) => {
					(tW(e), tU(e, i));
				}),
					tL(i));
				let [u] = eE.useState(() => new t3(n, o, t)),
					[a, l, c] = u.getOptimisticResult(o, t.combine),
					h = !s && !1 !== t.subscribed;
				(eE.useSyncExternalStore(
					eE.useCallback((e) => (h ? u.subscribe(tw.batchCalls(e)) : eF), [u, h]),
					() => u.getCurrentResult(),
					() => u.getCurrentResult(),
				),
					eE.useEffect(() => {
						u.setQueries(o, t);
					}, [o, t, u]));
				let d = a.some((e, t) => tB(o[t], e))
					? a.flatMap((e, t) => {
							let r = o[t];
							if (r) {
								let t = new tD(n, r);
								if (tB(r, e)) return t$(r, t, i);
								tz(e, s) && t$(r, t, i);
							}
							return [];
						})
					: [];
				if (d.length > 0) throw Promise.all(d);
				let p = a.find((e, t) => {
					let r = o[t];
					return (
						r &&
						tN({
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
			var t6 = class extends tg {
					constructor(e = {}) {
						(super(), (this.config = e), (this.#K = new Map()));
					}
					#K;
					build(e, t, r) {
						let n = t.queryKey,
							s = t.queryHash ?? eW(n, t),
							i = this.get(s);
						return (
							i ||
								((i = new tq({
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
						this.#K.has(e.queryHash) || (this.#K.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
					}
					remove(e) {
						let t = this.#K.get(e.queryHash);
						t && (e.destroy(), t === e && this.#K.delete(e.queryHash), this.notify({ type: 'removed', query: e }));
					}
					clear() {
						tw.batch(() => {
							this.getAll().forEach((e) => {
								this.remove(e);
							});
						});
					}
					get(e) {
						return this.#K.get(e);
					}
					getAll() {
						return [...this.#K.values()];
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => eG(t, e));
					}
					findAll(e = {}) {
						let t = this.getAll();
						return Object.keys(e).length > 0 ? t.filter((t) => eG(e, t)) : t;
					}
					notify(e) {
						tw.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					onFocus() {
						tw.batch(() => {
							this.getAll().forEach((e) => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						tw.batch(() => {
							this.getAll().forEach((e) => {
								e.onOnline();
							});
						});
					}
				},
				t4 = class extends tg {
					constructor(e = {}) {
						(super(), (this.config = e), (this.#X = new Set()), (this.#Z = new Map()), (this.#ee = 0));
					}
					#X;
					#Z;
					#ee;
					build(e, t, r) {
						let n = new tV({
							mutationCache: this,
							mutationId: ++this.#ee,
							options: e.defaultMutationOptions(t),
							state: r,
						});
						return (this.add(n), n);
					}
					add(e) {
						this.#X.add(e);
						let t = t8(e);
						if ('string' == typeof t) {
							let r = this.#Z.get(t);
							r ? r.push(e) : this.#Z.set(t, [e]);
						}
						this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						if (this.#X.delete(e)) {
							let t = t8(e);
							if ('string' == typeof t) {
								let r = this.#Z.get(t);
								if (r)
									if (r.length > 1) {
										let t = r.indexOf(e);
										-1 !== t && r.splice(t, 1);
									} else r[0] === e && this.#Z.delete(t);
							}
						}
						this.notify({ type: 'removed', mutation: e });
					}
					canRun(e) {
						let t = t8(e);
						if ('string' != typeof t) return !0;
						{
							let r = this.#Z.get(t),
								n = r?.find((e) => 'pending' === e.state.status);
							return !n || n === e;
						}
					}
					runNext(e) {
						let t = t8(e);
						if ('string' != typeof t) return Promise.resolve();
						{
							let r = this.#Z.get(t)?.find((t) => t !== e && t.state.isPaused);
							return r?.continue() ?? Promise.resolve();
						}
					}
					clear() {
						tw.batch(() => {
							(this.#X.forEach((e) => {
								this.notify({ type: 'removed', mutation: e });
							}),
								this.#X.clear(),
								this.#Z.clear());
						});
					}
					getAll() {
						return Array.from(this.#X);
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => eH(t, e));
					}
					findAll(e = {}) {
						return this.getAll().filter((t) => eH(e, t));
					}
					notify(e) {
						tw.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						let e = this.getAll().filter((e) => e.state.isPaused);
						return tw.batch(() => Promise.all(e.map((e) => e.continue().catch(eF))));
					}
				};
			function t8(e) {
				return e.options.scope?.id;
			}
			var t9 = class {
				#et;
				#A;
				#c;
				#er;
				#en;
				#es;
				#ei;
				#eo;
				constructor(e = {}) {
					((this.#et = e.queryCache || new t6()),
						(this.#A = e.mutationCache || new t4()),
						(this.#c = e.defaultOptions || {}),
						(this.#er = new Map()),
						(this.#en = new Map()),
						(this.#es = 0));
				}
				mount() {
					(this.#es++,
						1 === this.#es &&
							((this.#ei = tO.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onFocus());
							})),
							(this.#eo = tP.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onOnline());
							}))));
				}
				unmount() {
					(this.#es--, 0 === this.#es && (this.#ei?.(), (this.#ei = void 0), this.#eo?.(), (this.#eo = void 0)));
				}
				isFetching(e) {
					return this.#et.findAll({ ...e, fetchStatus: 'fetching' }).length;
				}
				isMutating(e) {
					return this.#A.findAll({ ...e, status: 'pending' }).length;
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state.data;
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						r = this.#et.build(this, t),
						n = r.state.data;
					return void 0 === n
						? this.fetchQuery(e)
						: (e.revalidateIfStale && r.isStaleByTime(eN(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(n));
				}
				getQueriesData(e) {
					return this.#et.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
				}
				setQueryData(e, t, r) {
					let n = this.defaultQueryOptions({ queryKey: e }),
						s = this.#et.get(n.queryHash),
						i = s?.state.data,
						o = 'function' == typeof t ? t(i) : t;
					if (void 0 !== o) return this.#et.build(this, n).setData(o, { ...r, manual: !0 });
				}
				setQueriesData(e, t, r) {
					return tw.batch(() => this.#et.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]));
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state;
				}
				removeQueries(e) {
					let t = this.#et;
					tw.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e);
						});
					});
				}
				resetQueries(e, t) {
					let r = this.#et;
					return tw.batch(
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
					return Promise.all(tw.batch(() => this.#et.findAll(e).map((e) => e.cancel(r))))
						.then(eF)
						.catch(eF);
				}
				invalidateQueries(e, t = {}) {
					return tw.batch(() =>
						(this.#et.findAll(e).forEach((e) => {
							e.invalidate();
						}),
						e?.refetchType === 'none')
							? Promise.resolve()
							: this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? 'active' }, t),
					);
				}
				refetchQueries(e, t = {}) {
					let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
					return Promise.all(
						tw.batch(() =>
							this.#et
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, r);
									return (
										r.throwOnError || (t = t.catch(eF)),
										'paused' === e.state.fetchStatus ? Promise.resolve() : t
									);
								}),
						),
					).then(eF);
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e);
					void 0 === t.retry && (t.retry = !1);
					let r = this.#et.build(this, t);
					return r.isStaleByTime(eN(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(eF).catch(eF);
				}
				fetchInfiniteQuery(e) {
					return ((e.behavior = tZ(e.pages)), this.fetchQuery(e));
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(eF).catch(eF);
				}
				ensureInfiniteQueryData(e) {
					return ((e.behavior = tZ(e.pages)), this.ensureQueryData(e));
				}
				resumePausedMutations() {
					return tP.isOnline() ? this.#A.resumePausedMutations() : Promise.resolve();
				}
				getQueryCache() {
					return this.#et;
				}
				getMutationCache() {
					return this.#A;
				}
				getDefaultOptions() {
					return this.#c;
				}
				setDefaultOptions(e) {
					this.#c = e;
				}
				setQueryDefaults(e, t) {
					this.#er.set(ez(e), { queryKey: e, defaultOptions: t });
				}
				getQueryDefaults(e) {
					let t = [...this.#er.values()],
						r = {};
					return (
						t.forEach((t) => {
							eB(e, t.queryKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				setMutationDefaults(e, t) {
					this.#en.set(ez(e), { mutationKey: e, defaultOptions: t });
				}
				getMutationDefaults(e) {
					let t = [...this.#en.values()],
						r = {};
					return (
						t.forEach((t) => {
							eB(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e;
					let t = { ...this.#c.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
					return (
						t.queryHash || (t.queryHash = eW(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
						t.queryFn === e2 && (t.enabled = !1),
						t
					);
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#c.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							};
				}
				clear() {
					(this.#et.clear(), this.#A.clear());
				}
			};
			let re = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
				rt = null == (n = eE.createContext) ? void 0 : n.call(eD, null);
			var rr = to(tp(), 1);
			function rn(e) {
				let t = e instanceof ec ? e : e[eh];
				return W((e) => {
					let r = e.path,
						n = r.join('.'),
						[s, i] = e.args;
					return (0, rr.default)(
						{ queryKey: tb(r, s, 'query'), queryFn: () => t.query(n, s, null == i ? void 0 : i.trpc) },
						i,
					);
				});
			}
			var rs = to(tp(), 1);
			function ri(e, t, r) {
				var n, s;
				let i = e[0],
					o = null == (n = e[1]) ? void 0 : n.input;
				return (
					r &&
						(o = (0, rs.default)(
							(0, rs.default)(
								(0, rs.default)({}, null != (s = o) ? s : {}),
								r.pageParam ? { cursor: r.pageParam } : {},
							),
							{},
							{ direction: r.direction },
						)),
					[i.join('.'), o, null == t ? void 0 : t.trpc]
				);
			}
			var ro = to(
				ti({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js'(
						e,
						t,
					) {
						function r(e) {
							function t(e) {
								if (Object(e) !== e) return Promise.reject(TypeError(e + ' is not an object.'));
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
										return void 0 === r ? Promise.resolve({ value: e, done: !0 }) : t(r.apply(this.s, arguments));
									},
									throw: function (e) {
										var r = this.s.return;
										return void 0 === r ? Promise.reject(e) : t(r.apply(this.s, arguments));
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
							for ('undefined' != typeof Symbol && ((n = Symbol.asyncIterator), (s = Symbol.iterator)); i--; ) {
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
			function ru(e) {
				return { path: e.path.join('.') };
			}
			function ra(e) {
				let t = ru(e);
				return eE.useMemo(() => t, [t]);
			}
			async function rl(e, t, r) {
				let n = t.getQueryCache().build(t, { queryKey: r });
				n.setState({ data: [], status: 'success' });
				let s = [];
				var i = !1,
					o = !1;
				try {
					for (var u, a, l = (0, ro.default)(e); (i = !(a = await l.next()).done); i = !1) {
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
			var rc = to(tp(), 1),
				rh = to(tp());
			let rd = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
			function rp(e) {
				var t, r, n;
				let s =
						null != (t = null == e || null == (r = e.overrides) || null == (r = r.useMutation) ? void 0 : r.onSuccess)
							? t
							: (e) => e.originalFn(),
					i = null != (n = null == e ? void 0 : e.context) ? n : rt;
				function o() {
					let e = eE.useContext(i);
					if (!e) throw Error('Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?');
					return e;
				}
				function u(e, t) {
					var r;
					let { queryClient: n, ssrState: s } = o();
					return s &&
						'mounted' !== s &&
						(null == (r = n.getQueryCache().find({ queryKey: e })) ? void 0 : r.state.status) === 'error'
						? (0, rh.default)({ retryOnMount: !1 }, t)
						: t;
				}
				let a = { data: void 0, error: null, status: 'idle' },
					l = { data: void 0, error: null, status: 'connecting' };
				return {
					Provider: (e) => {
						var t;
						let { abortOnUnmount: r = !1, queryClient: n, ssrContext: s } = e,
							[o, u] = eE.useState(null != (t = e.ssrState) && t),
							a = e.client instanceof ec ? e.client : e.client[eh],
							l = eE.useMemo(
								() =>
									(function (e) {
										let { client: t, queryClient: r } = e,
											n = t instanceof ec ? t : t[eh];
										return {
											infiniteQueryOptions: (e, t, r) => {
												var s, i;
												let o = (null == (s = t[1]) ? void 0 : s.input) === e2,
													u = async (e) => {
														var s;
														let i = (0, rc.default)(
															(0, rc.default)({}, r),
															{},
															{
																trpc: (0, rc.default)(
																	(0, rc.default)({}, null == r ? void 0 : r.trpc),
																	(null == r || null == (s = r.trpc) ? void 0 : s.abortOnUnmount)
																		? { signal: e.signal }
																		: { signal: null },
																),
															},
														);
														return await n.query(...ri(t, i, { direction: e.direction, pageParam: e.pageParam }));
													};
												return Object.assign(
													(0, rc.default)(
														(0, rc.default)({}, r),
														{},
														{
															initialData: null == r ? void 0 : r.initialData,
															queryKey: t,
															queryFn: o ? e2 : u,
															initialPageParam: null != (i = null == r ? void 0 : r.initialCursor) ? i : null,
														},
													),
													{ trpc: ru({ path: e }) },
												);
											},
											queryOptions: (e, t, s) => {
												var i;
												let o = (null == (i = t[1]) ? void 0 : i.input) === e2,
													u = async (e) => {
														var i;
														let o = (0, rc.default)(
																(0, rc.default)({}, s),
																{},
																{
																	trpc: (0, rc.default)(
																		(0, rc.default)({}, null == s ? void 0 : s.trpc),
																		(null == s || null == (i = s.trpc) ? void 0 : i.abortOnUnmount)
																			? { signal: e.signal }
																			: { signal: null },
																	),
																},
															),
															u = await n.query(...ri(t, o));
														return w(u) ? rl(u, r, t) : u;
													};
												return Object.assign(
													(0, rc.default)(
														(0, rc.default)({}, s),
														{},
														{ initialData: null == s ? void 0 : s.initialData, queryKey: t, queryFn: o ? e2 : u },
													),
													{ trpc: ru({ path: e }) },
												);
											},
											fetchQuery: (e, t) =>
												r.fetchQuery(
													(0, rc.default)(
														(0, rc.default)({}, t),
														{},
														{ queryKey: e, queryFn: () => n.query(...ri(e, t)) },
													),
												),
											fetchInfiniteQuery: (e, t) => {
												var s;
												return r.fetchInfiniteQuery(
													(0, rc.default)(
														(0, rc.default)({}, t),
														{},
														{
															queryKey: e,
															queryFn: ({ pageParam: r, direction: s }) =>
																n.query(...ri(e, t, { pageParam: r, direction: s })),
															initialPageParam: null != (s = null == t ? void 0 : t.initialCursor) ? s : null,
														},
													),
												);
											},
											prefetchQuery: (e, t) =>
												r.prefetchQuery(
													(0, rc.default)(
														(0, rc.default)({}, t),
														{},
														{ queryKey: e, queryFn: () => n.query(...ri(e, t)) },
													),
												),
											prefetchInfiniteQuery: (e, t) => {
												var s;
												return r.prefetchInfiniteQuery(
													(0, rc.default)(
														(0, rc.default)({}, t),
														{},
														{
															queryKey: e,
															queryFn: ({ pageParam: r, direction: s }) =>
																n.query(...ri(e, t, { pageParam: r, direction: s })),
															initialPageParam: null != (s = null == t ? void 0 : t.initialCursor) ? s : null,
														},
													),
												);
											},
											ensureQueryData: (e, t) =>
												r.ensureQueryData(
													(0, rc.default)(
														(0, rc.default)({}, t),
														{},
														{ queryKey: e, queryFn: () => n.query(...ri(e, t)) },
													),
												),
											invalidateQueries: (e, t, n) =>
												r.invalidateQueries((0, rc.default)((0, rc.default)({}, t), {}, { queryKey: e }), n),
											resetQueries: (e, t, n) =>
												r.resetQueries((0, rc.default)((0, rc.default)({}, t), {}, { queryKey: e }), n),
											refetchQueries: (e, t, n) =>
												r.refetchQueries((0, rc.default)((0, rc.default)({}, t), {}, { queryKey: e }), n),
											cancelQuery: (e, t) => r.cancelQueries({ queryKey: e }, t),
											setQueryData: (e, t, n) => r.setQueryData(e, t, n),
											setQueriesData: (e, t, n, s) =>
												r.setQueriesData((0, rc.default)((0, rc.default)({}, t), {}, { queryKey: e }), n, s),
											getQueryData: (e) => r.getQueryData(e),
											setInfiniteQueryData: (e, t, n) => r.setQueryData(e, t, n),
											getInfiniteQueryData: (e) => r.getQueryData(e),
											setMutationDefaults: (t, s) => {
												let i = t[0];
												return r.setMutationDefaults(
													t,
													'function' == typeof s
														? s({ canonicalMutationFn: (t) => n.mutation(...ri([i, { input: t }], e)) })
														: s,
												);
											},
											getMutationDefaults: (e) => r.getMutationDefaults(e),
											isMutating: (e) => r.isMutating((0, rc.default)((0, rc.default)({}, e), {}, { exact: !0 })),
										};
									})({ client: a, queryClient: n }),
								[a, n],
							),
							c = eE.useMemo(
								() =>
									(0, rh.default)(
										{ abortOnUnmount: r, queryClient: n, client: a, ssrContext: null != s ? s : null, ssrState: o },
										l,
									),
								[r, a, l, n, s, o],
							);
						return (
							eE.useEffect(() => {
								u((e) => !!e && 'mounted');
							}, []),
							(0, eM.jsx)(i.Provider, { value: c, children: e.children })
						);
					},
					createClient: ef,
					useContext: o,
					useUtils: o,
					useQuery: function (t, r, n) {
						var s, i, a, l, c;
						let { abortOnUnmount: h, client: d, ssrState: p, queryClient: f, prefetchQuery: y } = o(),
							m = tb(t, r, 'query'),
							b = f.getQueryDefaults(m),
							v = r === e2;
						'undefined' != typeof window ||
							'prepass' !== p ||
							(null == n || null == (s = n.trpc) ? void 0 : s.ssr) === !1 ||
							(null != (i = null == n ? void 0 : n.enabled) ? i : null == b ? void 0 : b.enabled) === !1 ||
							v ||
							f.getQueryCache().find({ queryKey: m }) ||
							y(m, n);
						let g = u(m, (0, rh.default)((0, rh.default)({}, b), n)),
							O =
								null !=
								(a =
									null != (l = null == n || null == (c = n.trpc) ? void 0 : c.abortOnUnmount)
										? l
										: null == e
											? void 0
											: e.abortOnUnmount)
									? a
									: h,
							x = tJ(
								(0, rh.default)(
									(0, rh.default)({}, g),
									{},
									{
										queryKey: m,
										queryFn: v
											? r
											: async (e) => {
													let t = (0, rh.default)(
															(0, rh.default)({}, g),
															{},
															{
																trpc: (0, rh.default)(
																	(0, rh.default)({}, null == g ? void 0 : g.trpc),
																	O ? { signal: e.signal } : { signal: null },
																),
															},
														),
														r = await d.query(...ri(m, t));
													return w(r) ? rl(r, f, m) : r;
												},
									},
								),
								tD,
								f,
							);
						return ((x.trpc = ra({ path: t })), x);
					},
					usePrefetchQuery: function (t, r, n) {
						var s, i, u;
						let a = o(),
							l = tb(t, r, 'query'),
							c = r === e2,
							h =
								null !=
								(s =
									null != (i = null == n || null == (u = n.trpc) ? void 0 : u.abortOnUnmount)
										? i
										: null == e
											? void 0
											: e.abortOnUnmount)
									? s
									: a.abortOnUnmount;
						!(function (e, t) {
							let r = eT(void 0);
							r.getQueryState(e.queryKey) || r.prefetchQuery(e);
						})(
							(0, rh.default)(
								(0, rh.default)({}, n),
								{},
								{
									queryKey: l,
									queryFn: c
										? r
										: (e) => {
												let t = {
													trpc: (0, rh.default)(
														(0, rh.default)({}, null == n ? void 0 : n.trpc),
														h ? { signal: e.signal } : {},
													),
												};
												return a.client.query(...ri(l, t));
											},
								},
							),
						);
					},
					useSuspenseQuery: function (t, r, n) {
						var s, i, u, a, l;
						let c = o(),
							h = tb(t, r, 'query'),
							d =
								null !=
								(s =
									null != (i = null == n || null == (u = n.trpc) ? void 0 : u.abortOnUnmount)
										? i
										: null == e
											? void 0
											: e.abortOnUnmount)
									? s
									: c.abortOnUnmount,
							p =
								((a = (0, rh.default)(
									(0, rh.default)({}, n),
									{},
									{
										queryKey: h,
										queryFn: (e) => {
											let t = (0, rh.default)(
												(0, rh.default)({}, n),
												{},
												{
													trpc: (0, rh.default)(
														(0, rh.default)({}, null == n ? void 0 : n.trpc),
														d ? { signal: e.signal } : { signal: null },
													),
												},
											);
											return c.client.query(...ri(h, t));
										},
									},
								)),
								(l = c.queryClient),
								tJ({ ...a, enabled: !0, suspense: !0, throwOnError: tH, placeholderData: void 0 }, tD, l));
						return ((p.trpc = ra({ path: t })), [p.data, p]);
					},
					useQueries: (e, t) => {
						let { ssrState: r, queryClient: n, prefetchQuery: s, client: i } = o(),
							u = e(rn(i));
						if ('undefined' == typeof window && 'prepass' === r)
							for (let e of u) {
								var a;
								(null == (a = e.trpc) ? void 0 : a.ssr) === !1 ||
									n.getQueryCache().find({ queryKey: e.queryKey }) ||
									s(e.queryKey, e);
							}
						return t5(
							{
								queries: u.map((e) => (0, rh.default)((0, rh.default)({}, e), {}, { queryKey: e.queryKey })),
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
									queries: e(rn(n)).map((e) =>
										(0, rh.default)((0, rh.default)({}, e), {}, { queryFn: e.queryFn, queryKey: e.queryKey }),
									),
								}),
								t5(
									{
										...t,
										queries: t.queries.map((e) => ({
											...e,
											suspense: !0,
											throwOnError: tH,
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
							i = tv(e),
							u = n.defaultMutationOptions(n.getMutationDefaults(i)),
							a = (function (e, t) {
								let r = eT(t),
									[n] = eE.useState(() => new tX(r, e));
								eE.useEffect(() => {
									n.setOptions(e);
								}, [n, e]);
								let s = eE.useSyncExternalStore(
										eE.useCallback((e) => n.subscribe(tw.batchCalls(e)), [n]),
										() => n.getCurrentResult(),
										() => n.getCurrentResult(),
									),
									i = eE.useCallback(
										(e, t) => {
											n.mutate(e, t).catch(eF);
										},
										[n],
									);
								if (s.error && e3(n.options.throwOnError, [s.error])) throw s.error;
								return { ...s, mutate: i, mutateAsync: s.mutate };
							})(
								(0, rh.default)(
									(0, rh.default)({}, t),
									{},
									{
										mutationKey: i,
										mutationFn: (n) => r.mutation(...ri([e, { input: n }], t)),
										onSuccess(...e) {
											var r, i;
											return s({
												originalFn: () => {
													var r, n, s;
													return null != (r = null == t || null == (n = t.onSuccess) ? void 0 : n.call(t, ...e))
														? r
														: null == u || null == (s = u.onSuccess)
															? void 0
															: s.call(u, ...e);
												},
												queryClient: n,
												meta:
													null != (r = null != (i = null == t ? void 0 : t.meta) ? i : null == u ? void 0 : u.meta)
														? r
														: {},
											});
										},
									},
								),
								n,
							);
						return ((a.trpc = ra({ path: e })), a);
					},
					useSubscription: function (e, t, r) {
						var n;
						let s = null != (n = null == r ? void 0 : r.enabled) ? n : t !== e2,
							i = ez(tb(e, t, 'any')),
							{ client: u } = o(),
							c = eE.useRef(r);
						eE.useEffect(() => {
							c.current = r;
						});
						let [h] = eE.useState(new Set([])),
							d = eE.useCallback(
								(e) => {
									h.add(e);
								},
								[h],
							),
							p = eE.useRef(null),
							f = eE.useCallback(
								(e) => {
									let t = m.current,
										r = (m.current = e(t)),
										n = !1;
									for (let e of h)
										if (t[e] !== r[e]) {
											n = !0;
											break;
										}
									n && v(rd(r, d));
								},
								[d, h],
							),
							y = eE.useCallback(() => {
								var r;
								if ((null == (r = p.current) || r.unsubscribe(), !s))
									return void f(() => (0, rh.default)((0, rh.default)({}, a), {}, { reset: y }));
								(f(() => (0, rh.default)((0, rh.default)({}, l), {}, { reset: y })),
									(p.current = u.subscription(e.join('.'), null != t ? t : void 0, {
										onStarted: () => {
											var e, t;
											(null == (e = (t = c.current).onStarted) || e.call(t),
												f((e) => (0, rh.default)((0, rh.default)({}, e), {}, { status: 'pending', error: null })));
										},
										onData: (e) => {
											var t, r;
											(null == (t = (r = c.current).onData) || t.call(r, e),
												f((t) =>
													(0, rh.default)((0, rh.default)({}, t), {}, { status: 'pending', data: e, error: null }),
												));
										},
										onError: (e) => {
											var t, r;
											(null == (t = (r = c.current).onError) || t.call(r, e),
												f((t) => (0, rh.default)((0, rh.default)({}, t), {}, { status: 'error', error: e })));
										},
										onConnectionStateChange: (e) => {
											f((t) => {
												switch (e.state) {
													case 'idle':
														return (0, rh.default)(
															(0, rh.default)({}, t),
															{},
															{ status: e.state, error: null, data: void 0 },
														);
													case 'connecting':
														return (0, rh.default)((0, rh.default)({}, t), {}, { error: e.error, status: e.state });
													case 'pending':
														return t;
												}
											});
										},
										onComplete: () => {
											var e, t;
											(null == (e = (t = c.current).onComplete) || e.call(t),
												f((e) =>
													(0, rh.default)((0, rh.default)({}, e), {}, { status: 'idle', error: null, data: void 0 }),
												));
										},
									})));
							}, [u, i, s, f]);
						eE.useEffect(
							() => (
								y(),
								() => {
									var e;
									null == (e = p.current) || e.unsubscribe();
								}
							),
							[y],
						);
						let m = eE.useRef(
								s
									? (0, rh.default)((0, rh.default)({}, l), {}, { reset: y })
									: (0, rh.default)((0, rh.default)({}, a), {}, { reset: y }),
							),
							[b, v] = eE.useState(rd(m.current, d));
						return b;
					},
					useInfiniteQuery: function (e, t, r) {
						var n, s, i, a, l;
						let { client: c, ssrState: h, prefetchInfiniteQuery: d, queryClient: p, abortOnUnmount: f } = o(),
							y = tb(e, t, 'infinite'),
							m = p.getQueryDefaults(y),
							b = t === e2;
						'undefined' != typeof window ||
							'prepass' !== h ||
							(null == r || null == (n = r.trpc) ? void 0 : n.ssr) === !1 ||
							(null != (s = null == r ? void 0 : r.enabled) ? s : null == m ? void 0 : m.enabled) === !1 ||
							b ||
							p.getQueryCache().find({ queryKey: y }) ||
							d(y, (0, rh.default)((0, rh.default)({}, m), r));
						let v = u(y, (0, rh.default)((0, rh.default)({}, m), r)),
							g = null != (i = null == r || null == (a = r.trpc) ? void 0 : a.abortOnUnmount) ? i : f,
							O = tJ(
								(0, rh.default)(
									(0, rh.default)({}, v),
									{},
									{
										initialPageParam: null != (l = r.initialCursor) ? l : null,
										persister: r.persister,
										queryKey: y,
										queryFn: b
											? t
											: (e) => {
													var t;
													let n = (0, rh.default)(
														(0, rh.default)({}, v),
														{},
														{
															trpc: (0, rh.default)(
																(0, rh.default)({}, null == v ? void 0 : v.trpc),
																g ? { signal: e.signal } : { signal: null },
															),
														},
													);
													return c.query(
														...ri(y, n, {
															pageParam: null != (t = e.pageParam) ? t : r.initialCursor,
															direction: e.direction,
														}),
													);
												},
									},
								),
								t2,
								p,
							);
						return ((O.trpc = ra({ path: e })), O);
					},
					usePrefetchInfiniteQuery: function (e, t, r) {
						var n, s, i;
						let a = o(),
							l = tb(e, t, 'infinite'),
							c = a.queryClient.getQueryDefaults(l),
							h = t === e2,
							d = u(l, (0, rh.default)((0, rh.default)({}, c), r)),
							p = null != (n = null == r || null == (s = r.trpc) ? void 0 : s.abortOnUnmount) ? n : a.abortOnUnmount;
						!(function (e, t) {
							let r = eT(void 0);
							r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
						})(
							(0, rh.default)(
								(0, rh.default)({}, r),
								{},
								{
									initialPageParam: null != (i = r.initialCursor) ? i : null,
									queryKey: l,
									queryFn: h
										? t
										: (e) => {
												var t;
												let n = (0, rh.default)(
													(0, rh.default)({}, d),
													{},
													{
														trpc: (0, rh.default)(
															(0, rh.default)({}, null == d ? void 0 : d.trpc),
															p ? { signal: e.signal } : {},
														),
													},
												);
												return a.client.query(
													...ri(l, n, {
														pageParam: null != (t = e.pageParam) ? t : r.initialCursor,
														direction: e.direction,
													}),
												);
											},
								},
							),
						);
					},
					useSuspenseInfiniteQuery: function (e, t, r) {
						var n, s, i, a, l;
						let c = o(),
							h = tb(e, t, 'infinite'),
							d = c.queryClient.getQueryDefaults(h),
							p = u(h, (0, rh.default)((0, rh.default)({}, d), r)),
							f = null != (n = null == r || null == (s = r.trpc) ? void 0 : s.abortOnUnmount) ? n : c.abortOnUnmount,
							y =
								((a = (0, rh.default)(
									(0, rh.default)({}, r),
									{},
									{
										initialPageParam: null != (i = r.initialCursor) ? i : null,
										queryKey: h,
										queryFn: (e) => {
											var t;
											let n = (0, rh.default)(
												(0, rh.default)({}, p),
												{},
												{
													trpc: (0, rh.default)(
														(0, rh.default)({}, null == p ? void 0 : p.trpc),
														f ? { signal: e.signal } : {},
													),
												},
											);
											return c.client.query(
												...ri(h, n, {
													pageParam: null != (t = e.pageParam) ? t : r.initialCursor,
													direction: e.direction,
												}),
											);
										},
									},
								)),
								(l = c.queryClient),
								tJ({ ...a, enabled: !0, suspense: !0, throwOnError: tH }, t2, l));
						return ((y.trpc = ra({ path: e })), [y.data, y]);
					},
				};
			}
			var rf = ((e, t, r) => (
				(r = null != e ? eg(eP(e)) : {}),
				((e, t, r, n) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var s, i = ew(t), o = 0, u = i.length; o < u; o++)
							((s = i[o]),
								ej.call(e, s) ||
									s === r ||
									eO(e, s, { get: ((e) => t[e]).bind(null, s), enumerable: !(n = ex(t, s)) || n.enumerable }));
					return e;
				})(!t && e && e.__esModule ? r : eO(r, 'default', { value: e, enumerable: !0 }), e)
			))(eq());
			r(1340);
			let ry = (function (e) {
					var t, r;
					let n = {
							url: e.url.toString(),
							fetch: e.fetch,
							transformer: C(e.transformer),
							methodOverride: e.methodOverride,
						},
						s = null != (t = e.maxURLLength) ? t : 1 / 0,
						i = null != (r = e.maxItems) ? r : 1 / 0;
					return () => {
						let t = (t) => ({
								validate(e) {
									if (s === 1 / 0 && i === 1 / 0) return !0;
									if (e.length > i) return !1;
									let r = e.map((e) => e.path).join(','),
										o = e.map((e) => e.input);
									return (
										q((0, er.default)((0, er.default)({}, n), {}, { type: t, path: r, inputs: o, signal: null }))
											.length <= s
									);
								},
								async fetch(r) {
									let s,
										i = r.map((e) => e.path).join(','),
										o = r.map((e) => e.input),
										u = (function (...e) {
											let t = new AbortController(),
												r = e.length,
												n = 0,
												s = () => {
													++n === r && t.abort();
												};
											for (let t of e)
												(null == t ? void 0 : t.aborted)
													? s()
													: null == t || t.addEventListener('abort', s, { once: !0 });
											return t.signal;
										})(...r.map((e) => e.signal)),
										a = await ((s = (0, er.default)(
											(0, er.default)({}, n),
											{},
											{
												path: i,
												inputs: o,
												type: t,
												headers: () =>
													e.headers ? ('function' == typeof e.headers ? e.headers({ opList: r }) : e.headers) : {},
												signal: u,
											},
										)),
										I(
											(0, R.default)(
												(0, R.default)({}, s),
												{},
												{ contentTypeHeader: 'application/json', getUrl: q, getBody: E },
											),
										));
									return (Array.isArray(a.json) ? a.json : r.map(() => a.json)).map((e) => ({ meta: a.meta, json: e }));
								},
							}),
							r = { query: et(t('query')), mutation: et(t('mutation')) };
						return ({ op: e }) =>
							b((t) => {
								let s;
								if ('subscription' === e.type)
									throw Error('Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`');
								return (
									r[e.type]
										.load(e)
										.then((e) => {
											s = e;
											let r = (function (e, t) {
												let r;
												try {
													r = (function (e, t) {
														if ('error' in e) {
															let r = t.deserialize(e.error);
															return { ok: !1, error: (0, X.default)((0, X.default)({}, e), {}, { error: r }) };
														}
														return {
															ok: !0,
															result: (0, X.default)(
																(0, X.default)({}, e.result),
																(!e.result.type || 'data' === e.result.type) && {
																	type: 'data',
																	data: t.deserialize(e.result.data),
																},
															),
														};
													})(e, t);
												} catch (e) {
													throw new Z();
												}
												if (
													(!r.ok && (!O(r.error.error) || 'number' != typeof r.error.error.code)) ||
													(r.ok && !O(r.result))
												)
													throw new Z();
												return r;
											})(e.json, n.transformer.output);
											if (!r.ok) return void t.error(S.from(r.error, { meta: e.meta }));
											(t.next({ context: e.meta, result: r.result }), t.complete());
										})
										.catch((e) => {
											t.error(S.from(e, { meta: null == s ? void 0 : s.meta }));
										}),
									() => {}
								);
							});
					};
				})({ url: ''.concat('', '/api/trpc'), headers: async () => ({}) }),
				rm = (function (e) {
					let t = rp(e),
						r = (function (e) {
							let { config: t } = e,
								r = C(e.transformer);
							return (n) => {
								var s, i;
								let o = rp(e),
									u = (s) => {
										var i, u;
										let [a] = (0, eE.useState)(() => {
												var r;
												if (s.trpc) return s.trpc;
												let n = t({}),
													i = null != (r = n.queryClient) ? r : new t9(n.queryClientConfig),
													u = o.createClient(n);
												return {
													abortOnUnmount: n.abortOnUnmount,
													queryClient: i,
													trpcClient: u,
													ssrState: !!e.ssr && 'mounting',
													ssrContext: null,
												};
											}),
											{ queryClient: l, trpcClient: c, ssrState: h, ssrContext: d } = a,
											p = null == (i = s.pageProps) ? void 0 : i.trpcState,
											f = eE.useMemo(() => (p ? r.input.deserialize(p) : p), [p]);
										return (0, eM.jsx)(o.Provider, {
											abortOnUnmount: null != (u = a.abortOnUnmount) && u,
											client: c,
											queryClient: l,
											ssrState: h,
											ssrContext: d,
											children: (0, eM.jsx)(ek, {
												client: l,
												children: (0, eM.jsx)(e8, { state: f, children: (0, eM.jsx)(n, (0, rf.default)({}, s)) }),
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
											return ((r = i = (0, rf.default)((0, rf.default)({}, u), i)), s ? { pageProps: r } : r);
										});
								let a = null != (s = null != (i = n.displayName) ? i : n.name) ? s : 'Component';
								return ((u.displayName = `withTRPC(${a})`), u);
							};
						})(e),
						n = W(({ path: e, args: r }) => {
							var n;
							let s = [...e],
								i = s.pop();
							if ('useMutation' === i) return t[i](s, ...r);
							if ('_def' === i) return { path: s };
							let [o, ...u] = r,
								a = null != (n = u[0]) ? n : {};
							return t[i](s, o, a);
						});
					return z((e) =>
						'useContext' === e || 'useUtils' === e
							? () => {
									let e = t.useUtils();
									return (0, eE.useMemo)(
										() =>
											(function (e) {
												let t = ep(e.client),
													r = W((t) => {
														let r = [...t.path],
															n = r.pop(),
															s = [...t.args],
															i = s.shift(),
															o = tb(
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
															infiniteQueryOptions: () => e.infiniteQueryOptions(r, o, s[0]),
															queryOptions: () => e.queryOptions(r, o, ...s),
															fetch: () => e.fetchQuery(o, ...s),
															fetchInfinite: () => e.fetchInfiniteQuery(o, s[0]),
															prefetch: () => e.prefetchQuery(o, ...s),
															prefetchInfinite: () => e.prefetchInfiniteQuery(o, s[0]),
															ensureData: () => e.ensureQueryData(o, ...s),
															invalidate: () => e.invalidateQueries(o, ...s),
															reset: () => e.resetQueries(o, ...s),
															refetch: () => e.refetchQueries(o, ...s),
															cancel: () => e.cancelQuery(o, ...s),
															setData: () => {
																e.setQueryData(o, s[0], s[1]);
															},
															setQueriesData: () => e.setQueriesData(o, s[0], s[1], s[2]),
															setInfiniteData: () => {
																e.setInfiniteQueryData(o, s[0], s[1]);
															},
															getData: () => e.getQueryData(o),
															getInfiniteData: () => e.getInfiniteQueryData(o),
															setMutationDefaults: () => e.setMutationDefaults(tv(r), i),
															getMutationDefaults: () => e.getMutationDefaults(tv(r)),
															isMutating: () => e.isMutating({ mutationKey: tv(r) }),
														}[n]();
													});
												return z((n) => ('client' === n ? t : re.includes(n) ? e[n] : r[n]));
											})(e),
										[e],
									);
								}
							: 'useQueries' === e
								? t.useQueries
								: 'useSuspenseQueries' === e
									? t.useSuspenseQueries
									: 'withTRPC' === e
										? r
										: n[e],
					);
				})({ config: () => ({ links: [ry] }), ssr: !1 }),
				rb = ef({ links: [ry] });
		},
		3510: (e, t, r) => {
			'use strict';
			r.d(t, { J: () => a, v: () => u });
			var n = r(5640),
				s = r(3226),
				i = r(148);
			let o = (0, i.createContext)(void 0),
				u = (e) => {
					let { children: t } = e,
						[{ isAuthenticated: r = !1, isLoading: u = !1, user: a = null }, l] = (0, i.useState)({
							isAuthenticated: !1,
							isLoading: !1,
							user: null,
						}),
						c = async () => {
							l((e) => ({ ...e, isLoading: !0 }));
							try {
								let { user: e } = await s.r.app.user.get.query();
								l((t) => ({ ...t, isAuthenticated: !0, user: e }));
							} catch (e) {
								(console.error(e), l((e) => ({ ...e, isAuthenticated: !1, user: null })));
							} finally {
								l((e) => ({ ...e, isLoading: !1 }));
							}
						},
						h = async () => {
							try {
								let { success: e } = await s.r.auth.user.signOut.mutate();
								e && (alert('Sign Out Successfully'), l((e) => ({ ...e, isAuthenticated: !1, user: null })));
							} catch (e) {
								console.error(e);
							}
						};
					(0, i.useEffect)(() => {
						c();
					}, []);
					let d = (0, i.useMemo)(
						() => ({ isAuthenticated: r, isLoading: u, user: a, refresh: c, signOut: h }),
						[r, u, a, c, h],
					);
					return (0, n.jsx)(o.Provider, { value: d, children: t });
				};
			function a() {
				let e = (0, i.useContext)(o);
				if (!e) throw Error('useUser must be used within a UserProvider');
				return e;
			}
		},
		5242: (e, t, r) => {
			'use strict';
			(r.r(t), r.d(t, { default: () => p }));
			var n = r(5640),
				s = r(8592),
				i = r(3510);
			r(5281);
			var o = r(3226),
				u = r(300),
				a = r.n(u),
				l = r(3164),
				c = r.n(l),
				h = r(8904),
				d = r.n(h);
			let p = o.t.withTRPC((e) => {
				let { Component: t, pageProps: r } = e;
				return (0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsx)(d(), { children: (0, n.jsx)('title', { children: s.C }) }),
						(0, n.jsx)('div', {
							className: ''.concat(a().className, ' ').concat(c().className),
							children: (0, n.jsx)(i.v, { children: (0, n.jsx)(t, { ...r }) }),
						}),
					],
				});
			});
		},
		5281: () => {},
		8592: (e, t, r) => {
			'use strict';
			r.d(t, { C: () => n });
			let n = 'micro/saas';
		},
		8904: (e, t, r) => {
			e.exports = r(1530);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		(e.O(0, [593, 792], () => (t(676), t(8583))), (_N_E = e.O()));
	},
]);
