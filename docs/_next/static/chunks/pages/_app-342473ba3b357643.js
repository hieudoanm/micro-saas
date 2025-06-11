(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		699: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => t1 });
			var s,
				i,
				n = r(5640);
			function a(e) {
				let t = {
					subscribe(t) {
						let r = null,
							s = !1,
							i = !1,
							n = !1;
						function a() {
							if (null === r) {
								n = !0;
								return;
							}
							!i && ((i = !0), 'function' == typeof r ? r() : r && r.unsubscribe());
						}
						return (
							(r = e({
								next(e) {
									s || t.next?.(e);
								},
								error(e) {
									s || ((s = !0), t.error?.(e), a());
								},
								complete() {
									s || ((s = !0), t.complete?.(), a());
								},
							})),
							n && a(),
							{ unsubscribe: a }
						);
					},
					pipe: (...e) => e.reduce(o, t),
				};
				return t;
			}
			function o(e, t) {
				return t(e);
			}
			r(8834), Symbol();
			let u = () => {},
				c = (e) => {
					Object.freeze && Object.freeze(e);
				},
				l = (e) =>
					(function e(t, r, s) {
						let i = r.join('.');
						return (
							s[i] ??
								(s[i] = new Proxy(u, {
									get(i, n) {
										if ('string' == typeof n && 'then' !== n) return e(t, [...r, n], s);
									},
									apply(e, s, i) {
										let n = r[r.length - 1],
											a = { args: i, path: r };
										return (
											'call' === n
												? (a = { args: i.length >= 2 ? [i[1]] : [], path: r.slice(0, -1) })
												: 'apply' === n && (a = { args: i.length >= 2 ? i[1] : [], path: r.slice(0, -1) }),
											c(a.args),
											c(a.path),
											t(a)
										);
									},
								})),
							s[i]
						);
					})(e, [], Object.create(null)),
				h = (e) =>
					new Proxy(u, {
						get(t, r) {
							if ('then' !== r) return e(r);
						},
					}),
				f = {
					INTERNAL_SERVER_ERROR: -32603,
					BAD_GATEWAY: -32603,
					SERVICE_UNAVAILABLE: -32603,
					GATEWAY_TIMEOUT: -32603,
				};
			f.BAD_GATEWAY, f.SERVICE_UNAVAILABLE, f.GATEWAY_TIMEOUT, f.INTERNAL_SERVER_ERROR;
			let d = Symbol();
			function p(e, ...t) {
				let r = Object.assign(Object.create(null), e);
				for (let e of t)
					for (let t in e) {
						if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
						r[t] = e[t];
					}
				return r;
			}
			function y(e) {
				return !!e && !Array.isArray(e) && 'object' == typeof e;
			}
			function m(e) {
				return Object.assign(Object.create(null), e);
			}
			let b = 'function' == typeof Symbol && !!Symbol.asyncIterator;
			function g(e) {
				return b && y(e) && Symbol.asyncIterator in e;
			}
			let v = {
				PARSE_ERROR: 400,
				BAD_REQUEST: 400,
				UNAUTHORIZED: 401,
				PAYMENT_REQUIRED: 402,
				FORBIDDEN: 403,
				NOT_FOUND: 404,
				METHOD_NOT_SUPPORTED: 405,
				TIMEOUT: 408,
				CONFLICT: 409,
				PRECONDITION_FAILED: 412,
				PAYLOAD_TOO_LARGE: 413,
				UNSUPPORTED_MEDIA_TYPE: 415,
				UNPROCESSABLE_CONTENT: 422,
				TOO_MANY_REQUESTS: 429,
				CLIENT_CLOSED_REQUEST: 499,
				INTERNAL_SERVER_ERROR: 500,
				NOT_IMPLEMENTED: 501,
				BAD_GATEWAY: 502,
				SERVICE_UNAVAILABLE: 503,
				GATEWAY_TIMEOUT: 504,
			};
			function O(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			class w extends Error {}
			function E(e) {
				if (e instanceof R || (e instanceof Error && 'TRPCError' === e.name)) return e;
				let t = new R({ code: 'INTERNAL_SERVER_ERROR', cause: e });
				return e instanceof Error && e.stack && (t.stack = e.stack), t;
			}
			class R extends Error {
				constructor(e) {
					let t = (function (e) {
						if (e instanceof Error) return e;
						let t = typeof e;
						if ('undefined' !== t && 'function' !== t && null !== e) {
							if ('object' !== t) return Error(String(e));
							if (y(e)) return Object.assign(new w(), e);
						}
					})(e.cause);
					super(e.message ?? t?.message ?? e.code, { cause: t }),
						O(this, 'cause', void 0),
						O(this, 'code', void 0),
						(this.code = e.code),
						(this.name = 'TRPCError'),
						this.cause ?? (this.cause = t);
				}
			}
			let S = ({ shape: e }) => e,
				C = {
					input: { serialize: (e) => e, deserialize: (e) => e },
					output: { serialize: (e) => e, deserialize: (e) => e },
				};
			class P extends Error {
				constructor() {
					super('Unable to transform response from server');
				}
			}
			let Q = Symbol('lazy'),
				q = {
					_ctx: null,
					_errorShape: null,
					_meta: null,
					queries: {},
					mutations: {},
					subscriptions: {},
					errorFormatter: S,
					transformer: C,
				},
				D = ['then', 'call', 'apply'];
			function x(e) {
				return function (t) {
					let r = new Set(Object.keys(t).filter((e) => D.includes(e)));
					if (r.size > 0) throw Error('Reserved words used in `router({})` call: ' + Array.from(r).join(', '));
					let s = m({}),
						i = m({}),
						n = (function e(t, r = []) {
							let n = m({});
							for (let [o, u] of Object.entries(t ?? {})) {
								var a;
								if ('function' == typeof u && Q in u) {
									i[[...r, o].join('.')] = (function t(r) {
										return {
											ref: r.ref,
											load: (function (e) {
												let t = Symbol(),
													r = t;
												return () => (r === t && (r = e()), r);
											})(async () => {
												let s = await r.ref(),
													n = [...r.path, r.key],
													a = n.join('.');
												for (let [o, u] of ((r.aggregate[r.key] = e(s._def.record, n)),
												delete i[a],
												Object.entries(s._def.lazy)))
													i[[...n, o].join('.')] = t({ ref: u.ref, path: n, key: o, aggregate: r.aggregate[r.key] });
											}),
										};
									})({ path: r, ref: u, key: o, aggregate: n });
									continue;
								}
								if (y((a = u)) && y(a._def) && 'router' in a._def) {
									n[o] = e(u._def.record, [...r, o]);
									continue;
								}
								if (
									!(function (e) {
										return 'function' == typeof e;
									})(u)
								) {
									n[o] = e(u, [...r, o]);
									continue;
								}
								let t = [...r, o].join('.');
								if (s[t]) throw Error(`Duplicate key: ${t}`);
								(s[t] = u), (n[o] = u);
							}
							return n;
						})(t),
						a = { _config: e, router: !0, procedures: s, lazy: i, ...q, record: n };
					return { ...n, _def: a, createCaller: T()({ _def: a }) };
				};
			}
			async function _(e, t) {
				let { _def: r } = e,
					s = r.procedures[t];
				for (; !s; ) {
					let e = Object.keys(r.lazy).find((e) => t.startsWith(e));
					if (!e) return null;
					let i = r.lazy[e];
					await i.load(), (s = r.procedures[t]);
				}
				return s;
			}
			function T() {
				return function (e) {
					let { _def: t } = e;
					return function (r, s) {
						return l(async ({ path: i, args: n }) => {
							let a,
								o = i.join('.');
							if (1 === i.length && '_def' === i[0]) return t;
							let u = await _(e, o);
							try {
								if (!u) throw new R({ code: 'NOT_FOUND', message: `No procedure found on path "${i}"` });
								return (
									(a = 'function' == typeof r ? await Promise.resolve(r()) : r),
									await u({ path: o, getRawInput: async () => n[0], ctx: a, type: u._def.type, signal: s?.signal })
								);
							} catch (e) {
								throw (s?.onError?.({ ctx: a, error: E(e), input: n[0], path: o, type: u?._def.type ?? 'unknown' }), e);
							}
						});
					};
				};
			}
			function I(...e) {
				let t = p({}, ...e.map((e) => e._def.record));
				return x({
					errorFormatter: e.reduce((e, t) => {
						if (t._def._config.errorFormatter && t._def._config.errorFormatter !== S) {
							if (e !== S && e !== t._def._config.errorFormatter)
								throw Error('You seem to have several error formatters');
							return t._def._config.errorFormatter;
						}
						return e;
					}, S),
					transformer: e.reduce((e, t) => {
						if (t._def._config.transformer && t._def._config.transformer !== C) {
							if (e !== C && e !== t._def._config.transformer) throw Error('You seem to have several transformers');
							return t._def._config.transformer;
						}
						return e;
					}, C),
					isDev: e.every((e) => e._def._config.isDev),
					allowOutsideOfServer: e.every((e) => e._def._config.allowOutsideOfServer),
					isServer: e.every((e) => e._def._config.isServer),
					$types: e[0]?._def._config.$types,
				})(t);
			}
			function A(e) {
				let t = null,
					r = d;
				return {
					read: async () => (
						r !== d ||
							(t ??
								(t = e().catch((e) => {
									if (e instanceof R) throw e;
									throw new R({
										code: 'BAD_REQUEST',
										message: e instanceof Error ? e.message : 'Invalid input',
										cause: e,
									});
								})),
							(r = await t),
							(t = null)),
						r
					),
					result: () => (r !== d ? r : void 0),
				};
			}
			new WeakMap(),
				Symbol.toStringTag,
				(s = Symbol).dispose ?? (s.dispose = Symbol()),
				(i = Symbol).asyncDispose ?? (i.asyncDispose = Symbol()),
				Symbol();
			function M(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			Symbol('ping');
			function k(e) {
				var t =
					'function' == typeof SuppressedError
						? SuppressedError
						: function (e, t, r) {
								var s = Error(r);
								return (s.name = 'SuppressedError'), (s.error = e), (s.suppressed = t), s;
							};
				return (k = function (e) {
					function r(r) {
						(e.error = e.hasError ? new t(r, e.error, 'An error was suppressed during disposal.') : r),
							(e.hasError = !0);
					}
					var s,
						i = 0;
					return (function t() {
						for (; (s = e.stack.pop()); )
							try {
								if (!s.async && 1 === i) return (i = 0), e.stack.push(s), Promise.resolve().then(t);
								if (s.dispose) {
									var n = s.dispose.call(s.value);
									if (s.async)
										return (
											(i |= 2),
											Promise.resolve(n).then(t, function (e) {
												return r(e), t();
											})
										);
								} else i |= 1;
							} catch (e) {
								r(e);
							}
						if (1 === i) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					})();
				})(e);
			}
			class F extends Error {
				constructor(e) {
					super('Max depth reached at path: ' + e.join('.')), M(this, 'path', void 0), (this.path = e);
				}
			}
			Symbol();
			function U(e) {
				var t =
					'function' == typeof SuppressedError
						? SuppressedError
						: function (e, t, r) {
								var s = Error(r);
								return (s.name = 'SuppressedError'), (s.error = e), (s.suppressed = t), s;
							};
				return (U = function (e) {
					function r(r) {
						(e.error = e.hasError ? new t(r, e.error, 'An error was suppressed during disposal.') : r),
							(e.hasError = !0);
					}
					var s,
						i = 0;
					return (function t() {
						for (; (s = e.stack.pop()); )
							try {
								if (!s.async && 1 === i) return (i = 0), e.stack.push(s), Promise.resolve().then(t);
								if (s.dispose) {
									var n = s.dispose.call(s.value);
									if (s.async)
										return (
											(i |= 2),
											Promise.resolve(n).then(t, function (e) {
												return r(e), t();
											})
										);
								} else i |= 1;
							} catch (e) {
								r(e);
							}
						if (1 === i) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					})();
				})(e);
			}
			let j = 'middlewareMarker';
			class N extends Error {
				constructor(e) {
					super(e[0]?.message),
						(function (e, t, r) {
							t in e
								? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
								: (e[t] = r);
						})(this, 'issues', void 0),
						(this.name = 'SchemaError'),
						(this.issues = e);
				}
			}
			function L(e) {
				let t = '~standard' in e;
				if ('function' == typeof e && 'function' == typeof e.assert) return e.assert.bind(e);
				if ('function' == typeof e && !t) return e;
				if ('function' == typeof e.parseAsync) return e.parseAsync.bind(e);
				if ('function' == typeof e.parse) return e.parse.bind(e);
				if ('function' == typeof e.validateSync) return e.validateSync.bind(e);
				if ('function' == typeof e.create) return e.create.bind(e);
				if ('function' == typeof e.assert) return (t) => (e.assert(t), t);
				if (t)
					return async (t) => {
						let r = await e['~standard'].validate(t);
						if (r.issues) throw new N(r.issues);
						return r.value;
					};
				throw Error('Could not find a validator fn');
			}
			function K(e, t) {
				let { middlewares: r = [], inputs: s, meta: i, ...n } = t;
				return H({
					...p(e, n),
					inputs: [...e.inputs, ...(s ?? [])],
					middlewares: [...e.middlewares, ...r],
					meta: e.meta && i ? { ...e.meta, ...i } : (i ?? e.meta),
				});
			}
			function H(e = {}) {
				let t = { procedure: !0, inputs: [], middlewares: [], ...e };
				return {
					_def: t,
					input(e) {
						let r = L(e);
						return K(t, {
							inputs: [e],
							middlewares: [
								(function (e) {
									let t = async function (t) {
										let r,
											s = await t.getRawInput();
										try {
											r = await e(s);
										} catch (e) {
											throw new R({ code: 'BAD_REQUEST', cause: e });
										}
										let i = y(t.input) && y(r) ? { ...t.input, ...r } : r;
										return t.next({ input: i });
									};
									return (t._type = 'input'), t;
								})(r),
							],
						});
					},
					output(e) {
						let r = L(e);
						return K(t, {
							output: e,
							middlewares: [
								(function (e) {
									let t = async function ({ next: t }) {
										let r = await t();
										if (!r.ok) return r;
										try {
											let t = await e(r.data);
											return { ...r, data: t };
										} catch (e) {
											throw new R({ message: 'Output validation failed', code: 'INTERNAL_SERVER_ERROR', cause: e });
										}
									};
									return (t._type = 'output'), t;
								})(r),
							],
						});
					},
					meta: (e) => K(t, { meta: e }),
					use: (e) => K(t, { middlewares: '_middlewares' in e ? e._middlewares : [e] }),
					unstable_concat: (e) => K(t, e._def),
					concat: (e) => K(t, e._def),
					query: (e) => G({ ...t, type: 'query' }, e),
					mutation: (e) => G({ ...t, type: 'mutation' }, e),
					subscription: (e) => G({ ...t, type: 'subscription' }, e),
					experimental_caller: (e) => K(t, { caller: e }),
				};
			}
			function G(e, t) {
				let r = K(e, {
						resolver: t,
						middlewares: [
							async function (e) {
								return { marker: j, ok: !0, data: await t(e), ctx: e.ctx };
							},
						],
					}),
					s = { ...r._def, type: e.type, experimental_caller: !!r._def.caller, meta: r._def.meta, $types: null },
					i = (function (e) {
						async function t(t) {
							if (!t || !('getRawInput' in t)) throw Error(W);
							let r = await z(0, e, t);
							if (!r)
								throw new R({
									code: 'INTERNAL_SERVER_ERROR',
									message: 'No result from middlewares - did you forget to `return next()`?',
								});
							if (!r.ok) throw r.error;
							return r.data;
						}
						return (t._def = e), (t.procedure = !0), (t.meta = e.meta), t;
					})(r._def),
					n = r._def.caller;
				if (!n) return i;
				let a = async (...e) => await n({ args: e, invoke: i, _def: s });
				return (a._def = s), a;
			}
			let W = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
			async function z(e, t, r) {
				try {
					let s = t.middlewares[e];
					return await s({
						...r,
						meta: t.meta,
						input: r.input,
						next: (s) =>
							z(e + 1, t, {
								...r,
								ctx: s?.ctx ? { ...r.ctx, ...s.ctx } : r.ctx,
								input: s && 'input' in s ? s.input : r.input,
								getRawInput: s?.getRawInput ?? r.getRawInput,
							}),
					});
				} catch (e) {
					return { ok: !1, error: E(e), marker: j };
				}
			}
			let B =
				'undefined' == typeof window ||
				'Deno' in window ||
				globalThis.process?.env?.NODE_ENV === 'test' ||
				!!globalThis.process?.env?.JEST_WORKER_ID ||
				!!globalThis.process?.env?.VITEST_WORKER_ID;
			class $ {
				context() {
					return new $();
				}
				meta() {
					return new $();
				}
				create(e) {
					var t;
					let r = {
						...e,
						transformer: 'input' in (t = e?.transformer ?? C) ? t : { input: t, output: t },
						isDev: e?.isDev ?? globalThis.process?.env.NODE_ENV !== 'production',
						allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
						errorFormatter: e?.errorFormatter ?? S,
						isServer: e?.isServer ?? B,
						$types: null,
					};
					if (!(e?.isServer ?? B) && e?.allowOutsideOfServer !== !0)
						throw Error(
							"You're trying to use @trpc/server in a non-server environment. This is not supported by default.",
						);
					return {
						_config: r,
						procedure: H({ meta: e?.defaultMeta }),
						middleware: function (e) {
							return (function e(t) {
								return {
									_middlewares: t,
									unstable_pipe: (r) => e([...t, ...('_middlewares' in r ? r._middlewares : [r])]),
								};
							})([e]);
						},
						router: x(r),
						mergeRouters: I,
						createCallerFactory: T(),
					};
				}
			}
			new $();
			function V(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			class Y extends Error {
				static from(e, t = {}) {
					return e instanceof Y
						? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
						: y(e) && y(e.error) && 'number' == typeof e.error.code && 'string' == typeof e.error.message
							? new Y(e.error.message, { ...t, result: e })
							: new Y('string' == typeof e ? e : y(e) && 'string' == typeof e.message ? e.message : 'Unknown error', {
									...t,
									cause: e,
								});
				}
				constructor(e, t) {
					let r = t?.cause;
					super(e, { cause: r }),
						V(this, 'cause', void 0),
						V(this, 'shape', void 0),
						V(this, 'data', void 0),
						V(this, 'meta', void 0),
						(this.meta = t?.meta),
						(this.cause = r),
						(this.shape = t?.result?.error),
						(this.data = t?.result?.error.data),
						(this.name = 'TRPCClientError'),
						Object.setPrototypeOf(this, Y.prototype);
				}
			}
			function J(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			class X {
				$request(e) {
					var t;
					return ((t = { links: this.links, op: { ...e, context: e.context ?? {}, id: ++this.requestId } }),
					a((e) =>
						(function e(r = 0, s = t.op) {
							let i = t.links[r];
							if (!i) throw Error('No more links to execute - did you forget to add an ending link?');
							return i({ op: s, next: (t) => e(r + 1, t) });
						})().subscribe(e),
					)).pipe((e) => {
						let t = 0,
							r = null,
							s = [];
						return a(
							(i) => (
								t++,
								s.push(i),
								r ||
									(r = e.subscribe({
										next(e) {
											for (let t of s) t.next?.(e);
										},
										error(e) {
											for (let t of s) t.error?.(e);
										},
										complete() {
											for (let e of s) e.complete?.();
										},
									})),
								{
									unsubscribe() {
										if (0 == --t && r) {
											let e = r;
											(r = null), e.unsubscribe();
										}
										let e = s.findIndex((e) => e === i);
										e > -1 && s.splice(e, 1);
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
								return new Promise((r, s) => {
									let i = !1;
									function n() {
										i || ((i = !0), a.unsubscribe());
									}
									t.signal.addEventListener('abort', () => {
										s(t.signal.reason);
									});
									let a = e.subscribe({
										next(e) {
											(i = !0), r(e), n();
										},
										error(e) {
											s(e);
										},
										complete() {
											t.abort(), n();
										},
									});
								});
							})(t)
						).result.data;
					} catch (e) {
						throw Y.from(e);
					}
				}
				query(e, t, r) {
					return this.requestAsPromise({ type: 'query', path: e, input: t, context: r?.context, signal: r?.signal });
				}
				mutation(e, t, r) {
					return this.requestAsPromise({ type: 'mutation', path: e, input: t, context: r?.context, signal: r?.signal });
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
							switch (e.result.type) {
								case 'state':
									r.onConnectionStateChange?.(e.result);
									break;
								case 'started':
									r.onStarted?.({ context: e.context });
									break;
								case 'stopped':
									r.onStopped?.();
									break;
								case 'data':
								case void 0:
									r.onData?.(e.result.data);
							}
						},
						error(e) {
							r.onError?.(e);
						},
						complete() {
							r.onComplete?.();
						},
					});
				}
				constructor(e) {
					J(this, 'links', void 0),
						J(this, 'runtime', void 0),
						J(this, 'requestId', void 0),
						(this.requestId = 0),
						(this.runtime = {}),
						(this.links = e.links.map((e) => e(this.runtime)));
				}
			}
			let Z = Symbol.for('trpc_untypedClient'),
				ee = { query: 'query', mutate: 'mutation', subscribe: 'subscription' },
				et = (e) => ee[e];
			function er(e) {
				let t = l(({ path: t, args: r }) => {
					let s = [...t],
						i = et(s.pop()),
						n = s.join('.');
					return e[i](n, ...r);
				});
				return h((r) => (r === Z ? e : t[r]));
			}
			function es(e) {
				return er(new X(e));
			}
			let ei = () => {
				throw Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
			};
			function en(e) {
				let t = null,
					r = null,
					s = () => {
						clearTimeout(r), (r = null), (t = null);
					};
				function i() {
					let r = (function (t) {
						let r = [[]],
							s = 0;
						for (;;) {
							let i = t[s];
							if (!i) break;
							let n = r[r.length - 1];
							if (i.aborted) {
								i.reject?.(Error('Aborted')), s++;
								continue;
							}
							if (e.validate(n.concat(i).map((e) => e.key))) {
								n.push(i), s++;
								continue;
							}
							if (0 === n.length) {
								i.reject?.(Error('Input is too big for a single dispatch')), s++;
								continue;
							}
							r.push([]);
						}
						return r;
					})(t);
					for (let t of (s(), r)) {
						if (!t.length) continue;
						let r = { items: t };
						for (let e of t) e.batch = r;
						e.fetch(r.items.map((e) => e.key))
							.then(async (e) => {
								for (let t of (await Promise.all(
									e.map(async (e, t) => {
										let s = r.items[t];
										try {
											let t = await Promise.resolve(e);
											s.resolve?.(t);
										} catch (e) {
											s.reject?.(e);
										}
										(s.batch = null), (s.reject = null), (s.resolve = null);
									}),
								),
								r.items))
									t.reject?.(Error('Missing result')), (t.batch = null);
							})
							.catch((e) => {
								for (let t of r.items) t.reject?.(e), (t.batch = null);
							});
					}
				}
				return {
					load: function (e) {
						let s = { aborted: !1, key: e, batch: null, resolve: ei, reject: ei },
							n = new Promise((e, r) => {
								(s.reject = r), (s.resolve = e), t ?? (t = []), t.push(s);
							});
						return r ?? (r = setTimeout(i)), n;
					},
				};
			}
			let ea = (e) => 'function' == typeof e;
			function eo(e) {
				return e
					? 'input' in e
						? e
						: { input: e, output: e }
					: {
							input: { serialize: (e) => e, deserialize: (e) => e },
							output: { serialize: (e) => e, deserialize: (e) => e },
						};
			}
			let eu = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
			function ec(e) {
				return 'input' in e
					? e.transformer.input.serialize(e.input)
					: (function (e) {
							let t = {};
							for (let r = 0; r < e.length; r++) {
								let s = e[r];
								t[r] = s;
							}
							return t;
						})(e.inputs.map((t) => e.transformer.input.serialize(t)));
			}
			let el = (e) => {
					let t = e.url.split('?'),
						r = t[0].replace(/\/$/, '') + '/' + e.path,
						s = [];
					if (
						(t[1] && s.push(t[1]), 'inputs' in e && s.push('batch=1'), 'query' === e.type || 'subscription' === e.type)
					) {
						let t = ec(e);
						void 0 !== t && 'POST' !== e.methodOverride && s.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
					}
					return s.length && (r += '?' + s.join('&')), r;
				},
				eh = (e) => {
					if ('query' === e.type && 'POST' !== e.methodOverride) return;
					let t = ec(e);
					return void 0 !== t ? JSON.stringify(t) : void 0;
				},
				ef = (e) => em({ ...e, contentTypeHeader: 'application/json', getUrl: el, getBody: eh });
			class ed extends Error {
				constructor() {
					let e = 'AbortError';
					super(e), (this.name = e), (this.message = e);
				}
			}
			let ep = (e) => {
				if (e?.aborted) {
					if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
						throw new DOMException('AbortError', 'AbortError');
					throw new ed();
				}
			};
			async function ey(e) {
				ep(e.signal);
				let t = e.getUrl(e),
					r = e.getBody(e),
					{ type: s } = e,
					i = await (async () => {
						let t = await e.headers();
						return Symbol.iterator in t ? Object.fromEntries(t) : t;
					})(),
					n = {
						...(e.contentTypeHeader ? { 'content-type': e.contentTypeHeader } : {}),
						...(e.trpcAcceptHeader ? { 'trpc-accept': e.trpcAcceptHeader } : void 0),
						...i,
					};
				return (function (e) {
					if (e) return e;
					if ('undefined' != typeof window && ea(window.fetch)) return window.fetch;
					if ('undefined' != typeof globalThis && ea(globalThis.fetch)) return globalThis.fetch;
					throw Error('No fetch implementation found');
				})(e.fetch)(t, { method: e.methodOverride ?? eu[s], signal: e.signal, body: r, headers: n });
			}
			async function em(e) {
				let t = {},
					r = await ey(e);
				t.response = r;
				let s = await r.json();
				return (t.responseJSON = s), { json: s, meta: t };
			}
			let eb = {
					css: { query: ['72e3ff', '3fb0d8'], mutation: ['c5a3fc', '904dfc'], subscription: ['ff49e1', 'd83fbe'] },
					ansi: {
						regular: {
							query: ['\x1b[30;46m', '\x1b[97;46m'],
							mutation: ['\x1b[30;45m', '\x1b[97;45m'],
							subscription: ['\x1b[30;42m', '\x1b[97;42m'],
						},
						bold: {
							query: ['\x1b[1;30;46m', '\x1b[1;97;46m'],
							mutation: ['\x1b[1;30;45m', '\x1b[1;97;45m'],
							subscription: ['\x1b[1;30;42m', '\x1b[1;97;42m'],
						},
					},
				},
				eg = (e, ...t) => ('function' == typeof e ? e(...t) : e);
			async function ev(e) {
				let t = await eg(e.url);
				if (!e.connectionParams) return t;
				let r = t.includes('?') ? '&' : '?';
				return t + `${r}connectionParams=1`;
			}
			async function eO(e) {
				return JSON.stringify({ method: 'connectionParams', data: await eg(e) });
			}
			function ew(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			class eE {
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
					if (this.openPromise) return this.openPromise;
					this.id = ++eE.connectCount;
					let e = ev(this.urlOptions).then((e) => new this.WebSocketPonyfill(e));
					this.openPromise = e.then(async (e) => {
						(this.ws = e),
							e.addEventListener('message', function ({ data: e }) {
								'PING' === e && this.send('PONG');
							}),
							this.keepAliveOpts.enabled &&
								(function (e, { intervalMs: t, pongTimeoutMs: r }) {
									let s, i;
									function n() {
										s = setTimeout(() => {
											e.send('PING'),
												(i = setTimeout(() => {
													e.close();
												}, r));
										}, t);
									}
									e.addEventListener('open', n),
										e.addEventListener('message', ({ data: e }) => {
											clearTimeout(s), n(), 'PONG' === e && (clearTimeout(i), clearTimeout(s), n());
										}),
										e.addEventListener('close', () => {
											clearTimeout(s), clearTimeout(i);
										});
								})(e, this.keepAliveOpts),
							e.addEventListener('close', () => {
								this.ws === e && (this.ws = null);
							}),
							await (function (e) {
								let t,
									r,
									{
										promise: s,
										resolve: i,
										reject: n,
									} = {
										promise: new Promise((e, s) => {
											(t = e), (r = s);
										}),
										resolve: t,
										reject: r,
									};
								return (
									e.addEventListener('open', () => {
										e.removeEventListener('error', n), i();
									}),
									e.addEventListener('error', n),
									s
								);
							})(e),
							this.urlOptions.connectionParams && e.send(await eO(this.urlOptions.connectionParams));
					});
					try {
						await this.openPromise;
					} finally {
						this.openPromise = null;
					}
				}
				async close() {
					try {
						await this.openPromise;
					} finally {
						this.ws?.close();
					}
				}
				constructor(e) {
					if (
						(ew(this, 'id', ++eE.connectCount),
						ew(this, 'WebSocketPonyfill', void 0),
						ew(this, 'urlOptions', void 0),
						ew(this, 'keepAliveOpts', void 0),
						ew(
							this,
							'wsObservable',
							(function (e) {
								let t = null,
									r = [],
									s = (e) => {
										void 0 !== t && e.next(t), r.push(e);
									},
									i = (e) => {
										r.splice(r.indexOf(e), 1);
									},
									n = a(
										(e) => (
											s(e),
											() => {
												i(e);
											}
										),
									);
								return (
									(n.next = (e) => {
										if (t !== e) for (let s of ((t = e), r)) s.next(e);
									}),
									(n.get = () => t),
									n
								);
							})(0),
						),
						ew(this, 'openPromise', null),
						(this.WebSocketPonyfill = e.WebSocketPonyfill ?? WebSocket),
						!this.WebSocketPonyfill)
					)
						throw Error(
							"No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill",
						);
					(this.urlOptions = e.urlOptions), (this.keepAliveOpts = e.keepAlive);
				}
			}
			ew(eE, 'connectCount', 0);
			var eR = r(148),
				eS = eR.createContext(void 0),
				eC = (e) => {
					let t = eR.useContext(eS);
					if (e) return e;
					if (!t) throw Error('No QueryClient set, use QueryClientProvider to set one');
					return t;
				},
				eP = ({ client: e, children: t }) => (
					eR.useEffect(
						() => (
							e.mount(),
							() => {
								e.unmount();
							}
						),
						[e],
					),
					(0, n.jsx)(eS.Provider, { value: e, children: t })
				),
				eQ = 'undefined' == typeof window || 'Deno' in globalThis;
			function eq() {}
			function eD(e) {
				return 'number' == typeof e && e >= 0 && e !== 1 / 0;
			}
			function ex(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function e_(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function eT(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function eI(e, t) {
				let { type: r = 'all', exact: s, fetchStatus: i, predicate: n, queryKey: a, stale: o } = e;
				if (a) {
					if (s) {
						if (t.queryHash !== eM(a, t.options)) return !1;
					} else if (!eF(t.queryKey, a)) return !1;
				}
				if ('all' !== r) {
					let e = t.isActive();
					if (('active' === r && !e) || ('inactive' === r && e)) return !1;
				}
				return ('boolean' != typeof o || t.isStale() === o) && (!i || i === t.state.fetchStatus) && (!n || !!n(t));
			}
			function eA(e, t) {
				let { exact: r, status: s, predicate: i, mutationKey: n } = e;
				if (n) {
					if (!t.options.mutationKey) return !1;
					if (r) {
						if (ek(t.options.mutationKey) !== ek(n)) return !1;
					} else if (!eF(t.options.mutationKey, n)) return !1;
				}
				return (!s || t.state.status === s) && (!i || !!i(t));
			}
			function eM(e, t) {
				return (t?.queryKeyHashFn || ek)(e);
			}
			function ek(e) {
				return JSON.stringify(e, (e, t) =>
					eL(t)
						? Object.keys(t)
								.sort()
								.reduce((e, r) => ((e[r] = t[r]), e), {})
						: t,
				);
			}
			function eF(e, t) {
				return (
					e === t ||
					(typeof e == typeof t &&
						!!e &&
						!!t &&
						'object' == typeof e &&
						'object' == typeof t &&
						Object.keys(t).every((r) => eF(e[r], t[r])))
				);
			}
			function eU(e, t) {
				if (e === t) return e;
				let r = eN(e) && eN(t);
				if (r || (eL(e) && eL(t))) {
					let s = r ? e : Object.keys(e),
						i = s.length,
						n = r ? t : Object.keys(t),
						a = n.length,
						o = r ? [] : {},
						u = new Set(s),
						c = 0;
					for (let s = 0; s < a; s++) {
						let i = r ? s : n[s];
						((!r && u.has(i)) || r) && void 0 === e[i] && void 0 === t[i]
							? ((o[i] = void 0), c++)
							: ((o[i] = eU(e[i], t[i])), o[i] === e[i] && void 0 !== e[i] && c++);
					}
					return i === a && c === i ? e : o;
				}
				return t;
			}
			function ej(e, t) {
				if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
				for (let r in e) if (e[r] !== t[r]) return !1;
				return !0;
			}
			function eN(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function eL(e) {
				if (!eK(e)) return !1;
				let t = e.constructor;
				if (void 0 === t) return !0;
				let r = t.prototype;
				return !!eK(r) && !!r.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(e) === Object.prototype;
			}
			function eK(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function eH(e, t, r) {
				return 'function' == typeof r.structuralSharing
					? r.structuralSharing(e, t)
					: !1 !== r.structuralSharing
						? eU(e, t)
						: t;
			}
			function eG(e, t, r = 0) {
				let s = [...e, t];
				return r && s.length > r ? s.slice(1) : s;
			}
			function eW(e, t, r = 0) {
				let s = [t, ...e];
				return r && s.length > r ? s.slice(0, -1) : s;
			}
			var ez = Symbol();
			function eB(e, t) {
				return !e.queryFn && t?.initialPromise
					? () => t.initialPromise
					: e.queryFn && e.queryFn !== ez
						? e.queryFn
						: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
			}
			function e$(e, t) {
				return 'function' == typeof e ? e(...t) : !!e;
			}
			function eV() {
				let e,
					t,
					r = new Promise((r, s) => {
						(e = r), (t = s);
					});
				function s(e) {
					Object.assign(r, e), delete r.resolve, delete r.reject;
				}
				return (
					(r.status = 'pending'),
					r.catch(() => {}),
					(r.resolve = (t) => {
						s({ status: 'fulfilled', value: t }), e(t);
					}),
					(r.reject = (e) => {
						s({ status: 'rejected', reason: e }), t(e);
					}),
					r
				);
			}
			function eY(e) {
				return e;
			}
			function eJ(e, t, r) {
				if ('object' != typeof t || null === t) return;
				let s = e.getMutationCache(),
					i = e.getQueryCache(),
					n = r?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? eY,
					a = t.mutations || [],
					o = t.queries || [];
				a.forEach(({ state: t, ...i }) => {
					s.build(e, { ...e.getDefaultOptions().hydrate?.mutations, ...r?.defaultOptions?.mutations, ...i }, t);
				}),
					o.forEach(({ queryKey: t, state: s, queryHash: a, meta: o, promise: u, dehydratedAt: c }) => {
						let l = u
								? (function (e) {
										let t;
										if ((e.then((e) => ((t = e), e), eq)?.catch(eq), void 0 !== t)) return { data: t };
									})(u)
								: void 0,
							h = void 0 === s.data ? l?.data : s.data,
							f = void 0 === h ? h : n(h),
							d = i.get(a),
							p = d?.state.status === 'pending',
							y = d?.state.fetchStatus === 'fetching';
						if (d) {
							let e = l && void 0 !== c && c > d.state.dataUpdatedAt;
							if (s.dataUpdatedAt > d.state.dataUpdatedAt || e) {
								let { fetchStatus: e, ...t } = s;
								d.setState({ ...t, data: f });
							}
						} else
							d = i.build(
								e,
								{
									...e.getDefaultOptions().hydrate?.queries,
									...r?.defaultOptions?.queries,
									queryKey: t,
									queryHash: a,
									meta: o,
								},
								{ ...s, data: f, fetchStatus: 'idle', status: void 0 !== f ? 'success' : s.status },
							);
						u &&
							!p &&
							!y &&
							(void 0 === c || c > d.state.dataUpdatedAt) &&
							d.fetch(void 0, { initialPromise: Promise.resolve(u).then(n) });
					});
			}
			var eX = ({ children: e, options: t = {}, state: r, queryClient: s }) => {
				let i = eC(s),
					n = eR.useRef(t);
				n.current = t;
				let a = eR.useMemo(() => {
					if (r) {
						if ('object' != typeof r) return;
						let e = i.getQueryCache(),
							t = r.queries || [],
							s = [],
							a = [];
						for (let r of t) {
							let t = e.get(r.queryHash);
							t
								? (r.state.dataUpdatedAt > t.state.dataUpdatedAt ||
										(r.promise &&
											'pending' !== t.state.status &&
											'fetching' !== t.state.fetchStatus &&
											void 0 !== r.dehydratedAt &&
											r.dehydratedAt > t.state.dataUpdatedAt)) &&
									a.push(r)
								: s.push(r);
						}
						if ((s.length > 0 && eJ(i, { queries: s }, n.current), a.length > 0)) return a;
					}
				}, [i, r]);
				return (
					eR.useEffect(() => {
						a && eJ(i, { queries: a }, n.current);
					}, [i, a]),
					e
				);
			};
			let eZ = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
				e0 = eR.createContext?.(null);
			function e1(e, t, r) {
				let s = e.flatMap((e) => e.split('.'));
				if (!t && (!r || 'any' === r)) return s.length ? [s] : [];
				if ('infinite' === r && y(t) && ('direction' in t || 'cursor' in t)) {
					let { cursor: e, direction: r, ...i } = t;
					return [s, { input: i, type: 'infinite' }];
				}
				return [s, { ...(void 0 !== t && t !== ez && { input: t }), ...(r && 'any' !== r && { type: r }) }];
			}
			function e2(e) {
				return e1(e, void 0, 'any');
			}
			let e3 = (e) => {
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
			};
			function e4(e) {
				let t = e instanceof X ? e : e[Z];
				return l((e) => {
					let r = e.path,
						s = r.join('.'),
						[i, n] = e.args;
					return { queryKey: e1(r, i, 'query'), queryFn: () => t.query(s, i, n?.trpc), ...n };
				});
			}
			var e9 = class {
					constructor() {
						(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
					}
					subscribe(e) {
						return (
							this.listeners.add(e),
							this.onSubscribe(),
							() => {
								this.listeners.delete(e), this.onUnsubscribe();
							}
						);
					}
					hasListeners() {
						return this.listeners.size > 0;
					}
					onSubscribe() {}
					onUnsubscribe() {}
				},
				e5 = new (class extends e9 {
					#e;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!eQ && window.addEventListener) {
									let t = () => e();
									return (
										window.addEventListener('visibilitychange', t, !1),
										() => {
											window.removeEventListener('visibilitychange', t);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#r = e),
							this.#t?.(),
							(this.#t = e((e) => {
								'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
							}));
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
				e6 = (e) => setTimeout(e, 0),
				e7 = (function () {
					let e = [],
						t = 0,
						r = (e) => {
							e();
						},
						s = (e) => {
							e();
						},
						i = e6,
						n = (s) => {
							t
								? e.push(s)
								: i(() => {
										r(s);
									});
						},
						a = () => {
							let t = e;
							(e = []),
								t.length &&
									i(() => {
										s(() => {
											t.forEach((e) => {
												r(e);
											});
										});
									});
						};
					return {
						batch: (e) => {
							let r;
							t++;
							try {
								r = e();
							} finally {
								--t || a();
							}
							return r;
						},
						batchCalls:
							(e) =>
							(...t) => {
								n(() => {
									e(...t);
								});
							},
						schedule: n,
						setNotifyFunction: (e) => {
							r = e;
						},
						setBatchNotifyFunction: (e) => {
							s = e;
						},
						setScheduler: (e) => {
							i = e;
						},
					};
				})(),
				e8 = new (class extends e9 {
					#s = !0;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!eQ && window.addEventListener) {
									let t = () => e(!0),
										r = () => e(!1);
									return (
										window.addEventListener('online', t, !1),
										window.addEventListener('offline', r, !1),
										() => {
											window.removeEventListener('online', t), window.removeEventListener('offline', r);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#r = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
					}
					setOnline(e) {
						this.#s !== e &&
							((this.#s = e),
							this.listeners.forEach((t) => {
								t(e);
							}));
					}
					isOnline() {
						return this.#s;
					}
				})();
			function te(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function tt(e) {
				return (e ?? 'online') !== 'online' || e8.isOnline();
			}
			var tr = class extends Error {
				constructor(e) {
					super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent);
				}
			};
			function ts(e) {
				return e instanceof tr;
			}
			function ti(e) {
				let t,
					r = !1,
					s = 0,
					i = !1,
					n = eV(),
					a = () => e5.isFocused() && ('always' === e.networkMode || e8.isOnline()) && e.canRun(),
					o = () => tt(e.networkMode) && e.canRun(),
					u = (r) => {
						i || ((i = !0), e.onSuccess?.(r), t?.(), n.resolve(r));
					},
					c = (r) => {
						i || ((i = !0), e.onError?.(r), t?.(), n.reject(r));
					},
					l = () =>
						new Promise((r) => {
							(t = (e) => {
								(i || a()) && r(e);
							}),
								e.onPause?.();
						}).then(() => {
							(t = void 0), i || e.onContinue?.();
						}),
					h = () => {
						let t;
						if (i) return;
						let n = 0 === s ? e.initialPromise : void 0;
						try {
							t = n ?? e.fn();
						} catch (e) {
							t = Promise.reject(e);
						}
						Promise.resolve(t)
							.then(u)
							.catch((t) => {
								if (i) return;
								let n = e.retry ?? 3 * !eQ,
									o = e.retryDelay ?? te,
									u = 'function' == typeof o ? o(s, t) : o,
									f = !0 === n || ('number' == typeof n && s < n) || ('function' == typeof n && n(s, t));
								if (r || !f) return void c(t);
								s++,
									e.onFail?.(s, t),
									new Promise((e) => {
										setTimeout(e, u);
									})
										.then(() => (a() ? void 0 : l()))
										.then(() => {
											r ? c(t) : h();
										});
							});
					};
				return {
					promise: n,
					cancel: (t) => {
						i || (c(new tr(t)), e.abort?.());
					},
					continue: () => (t?.(), n),
					cancelRetry: () => {
						r = !0;
					},
					continueRetry: () => {
						r = !1;
					},
					canStart: o,
					start: () => (o() ? h() : l().then(h), n),
				};
			}
			var tn = class {
					#i;
					destroy() {
						this.clearGcTimeout();
					}
					scheduleGc() {
						this.clearGcTimeout(),
							eD(this.gcTime) &&
								(this.#i = setTimeout(() => {
									this.optionalRemove();
								}, this.gcTime));
					}
					updateGcTime(e) {
						this.gcTime = Math.max(this.gcTime || 0, e ?? (eQ ? 1 / 0 : 3e5));
					}
					clearGcTimeout() {
						this.#i && (clearTimeout(this.#i), (this.#i = void 0));
					}
				},
				ta = class extends tn {
					#n;
					#a;
					#o;
					#u;
					#c;
					#l;
					#h;
					constructor(e) {
						super(),
							(this.#h = !1),
							(this.#l = e.defaultOptions),
							this.setOptions(e.options),
							(this.observers = []),
							(this.#u = e.client),
							(this.#o = this.#u.getQueryCache()),
							(this.queryKey = e.queryKey),
							(this.queryHash = e.queryHash),
							(this.#n = (function (e) {
								let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
									r = void 0 !== t,
									s = r
										? 'function' == typeof e.initialDataUpdatedAt
											? e.initialDataUpdatedAt()
											: e.initialDataUpdatedAt
										: 0;
								return {
									data: t,
									dataUpdateCount: 0,
									dataUpdatedAt: r ? (s ?? Date.now()) : 0,
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
							(this.state = e.state ?? this.#n),
							this.scheduleGc();
					}
					get meta() {
						return this.options.meta;
					}
					get promise() {
						return this.#c?.promise;
					}
					setOptions(e) {
						(this.options = { ...this.#l, ...e }), this.updateGcTime(this.options.gcTime);
					}
					optionalRemove() {
						this.observers.length || 'idle' !== this.state.fetchStatus || this.#o.remove(this);
					}
					setData(e, t) {
						let r = eH(this.state.data, e, this.options);
						return this.#f({ data: r, type: 'success', dataUpdatedAt: t?.updatedAt, manual: t?.manual }), r;
					}
					setState(e, t) {
						this.#f({ type: 'setState', state: e, setStateOptions: t });
					}
					cancel(e) {
						let t = this.#c?.promise;
						return this.#c?.cancel(e), t ? t.then(eq).catch(eq) : Promise.resolve();
					}
					destroy() {
						super.destroy(), this.cancel({ silent: !0 });
					}
					reset() {
						this.destroy(), this.setState(this.#n);
					}
					isActive() {
						return this.observers.some((e) => !1 !== eT(e.options.enabled, this));
					}
					isDisabled() {
						return this.getObserversCount() > 0
							? !this.isActive()
							: this.options.queryFn === ez || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
					}
					isStatic() {
						return (
							this.getObserversCount() > 0 && this.observers.some((e) => 'static' === e_(e.options.staleTime, this))
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
							('static' !== e && (!!this.state.isInvalidated || !ex(this.state.dataUpdatedAt, e)))
						);
					}
					onFocus() {
						let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
						e?.refetch({ cancelRefetch: !1 }), this.#c?.continue();
					}
					onOnline() {
						let e = this.observers.find((e) => e.shouldFetchOnReconnect());
						e?.refetch({ cancelRefetch: !1 }), this.#c?.continue();
					}
					addObserver(e) {
						this.observers.includes(e) ||
							(this.observers.push(e),
							this.clearGcTimeout(),
							this.#o.notify({ type: 'observerAdded', query: this, observer: e }));
					}
					removeObserver(e) {
						this.observers.includes(e) &&
							((this.observers = this.observers.filter((t) => t !== e)),
							this.observers.length ||
								(this.#c && (this.#h ? this.#c.cancel({ revert: !0 }) : this.#c.cancelRetry()), this.scheduleGc()),
							this.#o.notify({ type: 'observerRemoved', query: this, observer: e }));
					}
					getObserversCount() {
						return this.observers.length;
					}
					invalidate() {
						this.state.isInvalidated || this.#f({ type: 'invalidate' });
					}
					fetch(e, t) {
						if ('idle' !== this.state.fetchStatus) {
							if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
							else if (this.#c) return this.#c.continueRetry(), this.#c.promise;
						}
						if ((e && this.setOptions(e), !this.options.queryFn)) {
							let e = this.observers.find((e) => e.options.queryFn);
							e && this.setOptions(e.options);
						}
						let r = new AbortController(),
							s = (e) => {
								Object.defineProperty(e, 'signal', { enumerable: !0, get: () => ((this.#h = !0), r.signal) });
							},
							i = () => {
								let e = eB(this.options, t),
									r = (() => {
										let e = { client: this.#u, queryKey: this.queryKey, meta: this.meta };
										return s(e), e;
									})();
								return ((this.#h = !1), this.options.persister) ? this.options.persister(e, r, this) : e(r);
							},
							n = (() => {
								let e = {
									fetchOptions: t,
									options: this.options,
									queryKey: this.queryKey,
									client: this.#u,
									state: this.state,
									fetchFn: i,
								};
								return s(e), e;
							})();
						this.options.behavior?.onFetch(n, this),
							(this.#a = this.state),
							('idle' === this.state.fetchStatus || this.state.fetchMeta !== n.fetchOptions?.meta) &&
								this.#f({ type: 'fetch', meta: n.fetchOptions?.meta });
						let a = (e) => {
							(ts(e) && e.silent) || this.#f({ type: 'error', error: e }),
								ts(e) || (this.#o.config.onError?.(e, this), this.#o.config.onSettled?.(this.state.data, e, this)),
								this.scheduleGc();
						};
						return (
							(this.#c = ti({
								initialPromise: t?.initialPromise,
								fn: n.fetchFn,
								abort: r.abort.bind(r),
								onSuccess: (e) => {
									if (void 0 === e) return void a(Error(`${this.queryHash} data is undefined`));
									try {
										this.setData(e);
									} catch (e) {
										a(e);
										return;
									}
									this.#o.config.onSuccess?.(e, this),
										this.#o.config.onSettled?.(e, this.state.error, this),
										this.scheduleGc();
								},
								onError: a,
								onFail: (e, t) => {
									this.#f({ type: 'failed', failureCount: e, error: t });
								},
								onPause: () => {
									this.#f({ type: 'pause' });
								},
								onContinue: () => {
									this.#f({ type: 'continue' });
								},
								retry: n.options.retry,
								retryDelay: n.options.retryDelay,
								networkMode: n.options.networkMode,
								canRun: () => !0,
							})),
							this.#c.start()
						);
					}
					#f(e) {
						(this.state = ((t) => {
							switch (e.type) {
								case 'failed':
									return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
								case 'pause':
									return { ...t, fetchStatus: 'paused' };
								case 'continue':
									return { ...t, fetchStatus: 'fetching' };
								case 'fetch':
									return { ...t, ...to(t.data, this.options), fetchMeta: e.meta ?? null };
								case 'success':
									return {
										...t,
										data: e.data,
										dataUpdateCount: t.dataUpdateCount + 1,
										dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
										error: null,
										isInvalidated: !1,
										status: 'success',
										...(!e.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
									};
								case 'error':
									let r = e.error;
									if (ts(r) && r.revert && this.#a) return { ...this.#a, fetchStatus: 'idle' };
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
						})(this.state)),
							e7.batch(() => {
								this.observers.forEach((e) => {
									e.onQueryUpdate();
								}),
									this.#o.notify({ query: this, type: 'updated', action: e });
							});
					}
				};
			function to(e, t) {
				return {
					fetchFailureCount: 0,
					fetchFailureReason: null,
					fetchStatus: tt(t.networkMode) ? 'fetching' : 'paused',
					...(void 0 === e && { error: null, status: 'pending' }),
				};
			}
			var tu = class extends e9 {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#u = e),
						(this.#d = null),
						(this.#p = eV()),
						this.options.experimental_prefetchInRender ||
							this.#p.reject(Error('experimental_prefetchInRender feature flag is not enabled')),
						this.bindMethods(),
						this.setOptions(t);
				}
				#u;
				#y = void 0;
				#m = void 0;
				#b = void 0;
				#g;
				#v;
				#p;
				#d;
				#O;
				#w;
				#E;
				#R;
				#S;
				#C;
				#P = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#y.addObserver(this), tc(this.#y, this.options) ? this.#Q() : this.updateResult(), this.#q());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return tl(this.#y, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return tl(this.#y, this.options, this.options.refetchOnWindowFocus);
				}
				destroy() {
					(this.listeners = new Set()), this.#D(), this.#x(), this.#y.removeObserver(this);
				}
				setOptions(e) {
					let t = this.options,
						r = this.#y;
					if (
						((this.options = this.#u.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							'boolean' != typeof this.options.enabled &&
							'function' != typeof this.options.enabled &&
							'boolean' != typeof eT(this.options.enabled, this.#y))
					)
						throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
					this.#_(),
						this.#y.setOptions(this.options),
						t._defaulted &&
							!ej(this.options, t) &&
							this.#u.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.#y, observer: this });
					let s = this.hasListeners();
					s && th(this.#y, r, this.options, t) && this.#Q(),
						this.updateResult(),
						s &&
							(this.#y !== r ||
								eT(this.options.enabled, this.#y) !== eT(t.enabled, this.#y) ||
								e_(this.options.staleTime, this.#y) !== e_(t.staleTime, this.#y)) &&
							this.#T();
					let i = this.#I();
					s &&
						(this.#y !== r || eT(this.options.enabled, this.#y) !== eT(t.enabled, this.#y) || i !== this.#C) &&
						this.#A(i);
				}
				getOptimisticResult(e) {
					var t, r;
					let s = this.#u.getQueryCache().build(this.#u, e),
						i = this.createResult(s, e);
					return (
						(t = this),
						(r = i),
						ej(t.getCurrentResult(), r) || ((this.#b = i), (this.#v = this.options), (this.#g = this.#y.state)),
						i
					);
				}
				getCurrentResult() {
					return this.#b;
				}
				trackResult(e, t) {
					return new Proxy(e, { get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)) });
				}
				trackProp(e) {
					this.#P.add(e);
				}
				getCurrentQuery() {
					return this.#y;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					let t = this.#u.defaultQueryOptions(e),
						r = this.#u.getQueryCache().build(this.#u, t);
					return r.fetch().then(() => this.createResult(r, t));
				}
				fetch(e) {
					return this.#Q({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(() => (this.updateResult(), this.#b));
				}
				#Q(e) {
					this.#_();
					let t = this.#y.fetch(this.options, e);
					return e?.throwOnError || (t = t.catch(eq)), t;
				}
				#T() {
					this.#D();
					let e = e_(this.options.staleTime, this.#y);
					if (eQ || this.#b.isStale || !eD(e)) return;
					let t = ex(this.#b.dataUpdatedAt, e);
					this.#R = setTimeout(() => {
						this.#b.isStale || this.updateResult();
					}, t + 1);
				}
				#I() {
					return (
						('function' == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#y)
							: this.options.refetchInterval) ?? !1
					);
				}
				#A(e) {
					this.#x(),
						(this.#C = e),
						!eQ &&
							!1 !== eT(this.options.enabled, this.#y) &&
							eD(this.#C) &&
							0 !== this.#C &&
							(this.#S = setInterval(() => {
								(this.options.refetchIntervalInBackground || e5.isFocused()) && this.#Q();
							}, this.#C));
				}
				#q() {
					this.#T(), this.#A(this.#I());
				}
				#D() {
					this.#R && (clearTimeout(this.#R), (this.#R = void 0));
				}
				#x() {
					this.#S && (clearInterval(this.#S), (this.#S = void 0));
				}
				createResult(e, t) {
					let r,
						s = this.#y,
						i = this.options,
						n = this.#b,
						a = this.#g,
						o = this.#v,
						u = e !== s ? e.state : this.#m,
						{ state: c } = e,
						l = { ...c },
						h = !1;
					if (t._optimisticResults) {
						let r = this.hasListeners(),
							n = !r && tc(e, t),
							a = r && th(e, s, t, i);
						(n || a) && (l = { ...l, ...to(c.data, e.options) }),
							'isRestoring' === t._optimisticResults && (l.fetchStatus = 'idle');
					}
					let { error: f, errorUpdatedAt: d, status: p } = l;
					r = l.data;
					let y = !1;
					if (void 0 !== t.placeholderData && void 0 === r && 'pending' === p) {
						let e;
						n?.isPlaceholderData && t.placeholderData === o?.placeholderData
							? ((e = n.data), (y = !0))
							: (e =
									'function' == typeof t.placeholderData
										? t.placeholderData(this.#E?.state.data, this.#E)
										: t.placeholderData),
							void 0 !== e && ((p = 'success'), (r = eH(n?.data, e, t)), (h = !0));
					}
					if (t.select && void 0 !== r && !y)
						if (n && r === a?.data && t.select === this.#O) r = this.#w;
						else
							try {
								(this.#O = t.select), (r = t.select(r)), (r = eH(n?.data, r, t)), (this.#w = r), (this.#d = null);
							} catch (e) {
								this.#d = e;
							}
					this.#d && ((f = this.#d), (r = this.#w), (d = Date.now()), (p = 'error'));
					let m = 'fetching' === l.fetchStatus,
						b = 'pending' === p,
						g = 'error' === p,
						v = b && m,
						O = void 0 !== r,
						w = {
							status: p,
							fetchStatus: l.fetchStatus,
							isPending: b,
							isSuccess: 'success' === p,
							isError: g,
							isInitialLoading: v,
							isLoading: v,
							data: r,
							dataUpdatedAt: l.dataUpdatedAt,
							error: f,
							errorUpdatedAt: d,
							failureCount: l.fetchFailureCount,
							failureReason: l.fetchFailureReason,
							errorUpdateCount: l.errorUpdateCount,
							isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
							isFetchedAfterMount: l.dataUpdateCount > u.dataUpdateCount || l.errorUpdateCount > u.errorUpdateCount,
							isFetching: m,
							isRefetching: m && !b,
							isLoadingError: g && !O,
							isPaused: 'paused' === l.fetchStatus,
							isPlaceholderData: h,
							isRefetchError: g && O,
							isStale: tf(e, t),
							refetch: this.refetch,
							promise: this.#p,
						};
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								'error' === w.status ? e.reject(w.error) : void 0 !== w.data && e.resolve(w.data);
							},
							r = () => {
								t((this.#p = w.promise = eV()));
							},
							i = this.#p;
						switch (i.status) {
							case 'pending':
								e.queryHash === s.queryHash && t(i);
								break;
							case 'fulfilled':
								('error' === w.status || w.data !== i.value) && r();
								break;
							case 'rejected':
								('error' !== w.status || w.error !== i.reason) && r();
						}
					}
					return w;
				}
				updateResult() {
					let e = this.#b,
						t = this.createResult(this.#y, this.options);
					(this.#g = this.#y.state),
						(this.#v = this.options),
						void 0 !== this.#g.data && (this.#E = this.#y),
						ej(t, e) ||
							((this.#b = t),
							this.#M({
								listeners: (() => {
									if (!e) return !0;
									let { notifyOnChangeProps: t } = this.options,
										r = 'function' == typeof t ? t() : t;
									if ('all' === r || (!r && !this.#P.size)) return !0;
									let s = new Set(r ?? this.#P);
									return (
										this.options.throwOnError && s.add('error'),
										Object.keys(this.#b).some((t) => this.#b[t] !== e[t] && s.has(t))
									);
								})(),
							}));
				}
				#_() {
					let e = this.#u.getQueryCache().build(this.#u, this.options);
					if (e === this.#y) return;
					let t = this.#y;
					(this.#y = e), (this.#m = e.state), this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#q();
				}
				#M(e) {
					e7.batch(() => {
						e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#b);
							}),
							this.#u.getQueryCache().notify({ query: this.#y, type: 'observerResultsUpdated' });
					});
				}
			};
			function tc(e, t) {
				return (
					(!1 !== eT(t.enabled, e) &&
						void 0 === e.state.data &&
						('error' !== e.state.status || !1 !== t.retryOnMount)) ||
					(void 0 !== e.state.data && tl(e, t, t.refetchOnMount))
				);
			}
			function tl(e, t, r) {
				if (!1 !== eT(t.enabled, e) && 'static' !== e_(t.staleTime, e)) {
					let s = 'function' == typeof r ? r(e) : r;
					return 'always' === s || (!1 !== s && tf(e, t));
				}
				return !1;
			}
			function th(e, t, r, s) {
				return (e !== t || !1 === eT(s.enabled, e)) && (!r.suspense || 'error' !== e.state.status) && tf(e, r);
			}
			function tf(e, t) {
				return !1 !== eT(t.enabled, e) && e.isStaleByTime(e_(t.staleTime, e));
			}
			var td = eR.createContext(
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
				tp = () => eR.useContext(td),
				ty = (e, t) => {
					(e.suspense || e.throwOnError || e.experimental_prefetchInRender) && !t.isReset() && (e.retryOnMount = !1);
				},
				tm = (e) => {
					eR.useEffect(() => {
						e.clearReset();
					}, [e]);
				},
				tb = ({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
					e.isError && !t.isReset() && !e.isFetching && s && ((i && void 0 === e.data) || e$(r, [e.error, s])),
				tg = eR.createContext(!1),
				tv = () => eR.useContext(tg);
			tg.Provider;
			var tO = (e, t) => void 0 === t.state.data,
				tw = (e) => {
					if (e.suspense) {
						let t = (e) => ('static' === e ? e : Math.max(e ?? 1e3, 1e3)),
							r = e.staleTime;
						(e.staleTime = 'function' == typeof r ? (...e) => t(r(...e)) : t(r)),
							'number' == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3));
					}
				},
				tE = (e, t) => e.isLoading && e.isFetching && !t,
				tR = (e, t) => e?.suspense && t.isPending,
				tS = (e, t, r) =>
					t.fetchOptimistic(e).catch(() => {
						r.clearReset();
					});
			function tC(e, t, r) {
				let s = tv(),
					i = tp(),
					n = eC(r),
					a = n.defaultQueryOptions(e);
				n.getDefaultOptions().queries?._experimental_beforeQuery?.(a),
					(a._optimisticResults = s ? 'isRestoring' : 'optimistic'),
					tw(a),
					ty(a, i),
					tm(i);
				let o = !n.getQueryCache().get(a.queryHash),
					[u] = eR.useState(() => new t(n, a)),
					c = u.getOptimisticResult(a),
					l = !s && !1 !== e.subscribed;
				if (
					(eR.useSyncExternalStore(
						eR.useCallback(
							(e) => {
								let t = l ? u.subscribe(e7.batchCalls(e)) : eq;
								return u.updateResult(), t;
							},
							[u, l],
						),
						() => u.getCurrentResult(),
						() => u.getCurrentResult(),
					),
					eR.useEffect(() => {
						u.setOptions(a);
					}, [a, u]),
					tR(a, c))
				)
					throw tS(a, u, i);
				if (
					tb({
						result: c,
						errorResetBoundary: i,
						throwOnError: a.throwOnError,
						query: n.getQueryCache().get(a.queryHash),
						suspense: a.suspense,
					})
				)
					throw c.error;
				if (
					(n.getDefaultOptions().queries?._experimental_afterQuery?.(a, c),
					a.experimental_prefetchInRender && !eQ && tE(c, s))
				) {
					let e = o ? tS(a, u, i) : n.getQueryCache().get(a.queryHash)?.promise;
					e?.catch(eq).finally(() => {
						u.updateResult();
					});
				}
				return a.notifyOnChangeProps ? c : u.trackResult(c);
			}
			var tP = class extends tn {
				#k;
				#F;
				#c;
				constructor(e) {
					super(),
						(this.mutationId = e.mutationId),
						(this.#F = e.mutationCache),
						(this.#k = []),
						(this.state = e.state || tQ()),
						this.setOptions(e.options),
						this.scheduleGc();
				}
				setOptions(e) {
					(this.options = e), this.updateGcTime(this.options.gcTime);
				}
				get meta() {
					return this.options.meta;
				}
				addObserver(e) {
					this.#k.includes(e) ||
						(this.#k.push(e),
						this.clearGcTimeout(),
						this.#F.notify({ type: 'observerAdded', mutation: this, observer: e }));
				}
				removeObserver(e) {
					(this.#k = this.#k.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#F.notify({ type: 'observerRemoved', mutation: this, observer: e });
				}
				optionalRemove() {
					this.#k.length || ('pending' === this.state.status ? this.scheduleGc() : this.#F.remove(this));
				}
				continue() {
					return this.#c?.continue() ?? this.execute(this.state.variables);
				}
				async execute(e) {
					let t = () => {
						this.#f({ type: 'continue' });
					};
					this.#c = ti({
						fn: () =>
							this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error('No mutationFn found')),
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
						canRun: () => this.#F.canRun(this),
					});
					let r = 'pending' === this.state.status,
						s = !this.#c.canStart();
					try {
						if (r) t();
						else {
							this.#f({ type: 'pending', variables: e, isPaused: s }), await this.#F.config.onMutate?.(e, this);
							let t = await this.options.onMutate?.(e);
							t !== this.state.context && this.#f({ type: 'pending', context: t, variables: e, isPaused: s });
						}
						let i = await this.#c.start();
						return (
							await this.#F.config.onSuccess?.(i, e, this.state.context, this),
							await this.options.onSuccess?.(i, e, this.state.context),
							await this.#F.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
							await this.options.onSettled?.(i, null, e, this.state.context),
							this.#f({ type: 'success', data: i }),
							i
						);
					} catch (t) {
						try {
							throw (
								(await this.#F.config.onError?.(t, e, this.state.context, this),
								await this.options.onError?.(t, e, this.state.context),
								await this.#F.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
								await this.options.onSettled?.(void 0, t, e, this.state.context),
								t)
							);
						} finally {
							this.#f({ type: 'error', error: t });
						}
					} finally {
						this.#F.runNext(this);
					}
				}
				#f(e) {
					(this.state = ((t) => {
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
						e7.batch(() => {
							this.#k.forEach((t) => {
								t.onMutationUpdate(e);
							}),
								this.#F.notify({ mutation: this, type: 'updated', action: e });
						});
				}
			};
			function tQ() {
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
			var tq = class extends e9 {
				#u;
				#b = void 0;
				#U;
				#j;
				constructor(e, t) {
					super(), (this.#u = e), this.setOptions(t), this.bindMethods(), this.#N();
				}
				bindMethods() {
					(this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
				}
				setOptions(e) {
					let t = this.options;
					(this.options = this.#u.defaultMutationOptions(e)),
						ej(this.options, t) ||
							this.#u.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.#U, observer: this }),
						t?.mutationKey && this.options.mutationKey && ek(t.mutationKey) !== ek(this.options.mutationKey)
							? this.reset()
							: this.#U?.state.status === 'pending' && this.#U.setOptions(this.options);
				}
				onUnsubscribe() {
					this.hasListeners() || this.#U?.removeObserver(this);
				}
				onMutationUpdate(e) {
					this.#N(), this.#M(e);
				}
				getCurrentResult() {
					return this.#b;
				}
				reset() {
					this.#U?.removeObserver(this), (this.#U = void 0), this.#N(), this.#M();
				}
				mutate(e, t) {
					return (
						(this.#j = t),
						this.#U?.removeObserver(this),
						(this.#U = this.#u.getMutationCache().build(this.#u, this.options)),
						this.#U.addObserver(this),
						this.#U.execute(e)
					);
				}
				#N() {
					let e = this.#U?.state ?? tQ();
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
				#M(e) {
					e7.batch(() => {
						if (this.#j && this.hasListeners()) {
							let t = this.#b.variables,
								r = this.#b.context;
							e?.type === 'success'
								? (this.#j.onSuccess?.(e.data, t, r), this.#j.onSettled?.(e.data, null, t, r))
								: e?.type === 'error' && (this.#j.onError?.(e.error, t, r), this.#j.onSettled?.(void 0, e.error, t, r));
						}
						this.listeners.forEach((e) => {
							e(this.#b);
						});
					});
				}
			};
			function tD(e) {
				return {
					onFetch: (t, r) => {
						let s = t.options,
							i = t.fetchOptions?.meta?.fetchMore?.direction,
							n = t.state.data?.pages || [],
							a = t.state.data?.pageParams || [],
							o = { pages: [], pageParams: [] },
							u = 0,
							c = async () => {
								let r = !1,
									c = (e) => {
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
										});
									},
									l = eB(t.options, t.fetchOptions),
									h = async (e, s, i) => {
										if (r) return Promise.reject();
										if (null == s && e.pages.length) return Promise.resolve(e);
										let n = (() => {
												let e = {
													client: t.client,
													queryKey: t.queryKey,
													pageParam: s,
													direction: i ? 'backward' : 'forward',
													meta: t.options.meta,
												};
												return c(e), e;
											})(),
											a = await l(n),
											{ maxPages: o } = t.options,
											u = i ? eW : eG;
										return { pages: u(e.pages, a, o), pageParams: u(e.pageParams, s, o) };
									};
								if (i && n.length) {
									let e = 'backward' === i,
										t = { pages: n, pageParams: a },
										r = (e ? t_ : tx)(s, t);
									o = await h(t, r, e);
								} else {
									let t = e ?? n.length;
									do {
										let e = 0 === u ? (a[0] ?? s.initialPageParam) : tx(s, o);
										if (u > 0 && null == e) break;
										(o = await h(o, e)), u++;
									} while (u < t);
								}
								return o;
							};
						t.options.persister
							? (t.fetchFn = () =>
									t.options.persister?.(
										c,
										{ client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
										r,
									))
							: (t.fetchFn = c);
					},
				};
			}
			function tx(e, { pages: t, pageParams: r }) {
				let s = t.length - 1;
				return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0;
			}
			function t_(e, { pages: t, pageParams: r }) {
				return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
			}
			var tT = class extends tu {
				constructor(e, t) {
					super(e, t);
				}
				bindMethods() {
					super.bindMethods(),
						(this.fetchNextPage = this.fetchNextPage.bind(this)),
						(this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
				}
				setOptions(e) {
					super.setOptions({ ...e, behavior: tD() });
				}
				getOptimisticResult(e) {
					return (e.behavior = tD()), super.getOptimisticResult(e);
				}
				fetchNextPage(e) {
					return this.fetch({ ...e, meta: { fetchMore: { direction: 'forward' } } });
				}
				fetchPreviousPage(e) {
					return this.fetch({ ...e, meta: { fetchMore: { direction: 'backward' } } });
				}
				createResult(e, t) {
					var r, s;
					let { state: i } = e,
						n = super.createResult(e, t),
						{ isFetching: a, isRefetching: o, isError: u, isRefetchError: c } = n,
						l = i.fetchMeta?.fetchMore?.direction,
						h = u && 'forward' === l,
						f = a && 'forward' === l,
						d = u && 'backward' === l,
						p = a && 'backward' === l;
					return {
						...n,
						fetchNextPage: this.fetchNextPage,
						fetchPreviousPage: this.fetchPreviousPage,
						hasNextPage: !!(r = i.data) && null != tx(t, r),
						hasPreviousPage: !!(s = i.data) && !!t.getPreviousPageParam && null != t_(t, s),
						isFetchNextPageError: h,
						isFetchingNextPage: f,
						isFetchPreviousPageError: d,
						isFetchingPreviousPage: p,
						isRefetchError: c && !h && !d,
						isRefetching: o && !f && !p,
					};
				}
			};
			function tI(e, t) {
				let r = new Set(t);
				return e.filter((e) => !r.has(e));
			}
			var tA = class extends e9 {
				#u;
				#L;
				#K;
				#H;
				#k;
				#G;
				#W;
				#z;
				#B = [];
				constructor(e, t, r) {
					super(), (this.#u = e), (this.#H = r), (this.#K = []), (this.#k = []), (this.#L = []), this.setQueries(t);
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
					(this.listeners = new Set()),
						this.#k.forEach((e) => {
							e.destroy();
						});
				}
				setQueries(e, t) {
					(this.#K = e),
						(this.#H = t),
						e7.batch(() => {
							let e = this.#k,
								t = this.#V(this.#K);
							(this.#B = t), t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions));
							let r = t.map((e) => e.observer),
								s = r.map((e) => e.getCurrentResult()),
								i = r.some((t, r) => t !== e[r]);
							(e.length !== r.length || i) &&
								((this.#k = r),
								(this.#L = s),
								this.hasListeners() &&
									(tI(e, r).forEach((e) => {
										e.destroy();
									}),
									tI(r, e).forEach((e) => {
										e.subscribe((t) => {
											this.#$(e, t);
										});
									}),
									this.#M()));
						});
				}
				getCurrentResult() {
					return this.#L;
				}
				getQueries() {
					return this.#k.map((e) => e.getCurrentQuery());
				}
				getObservers() {
					return this.#k;
				}
				getOptimisticResult(e, t) {
					let r = this.#V(e),
						s = r.map((e) => e.observer.getOptimisticResult(e.defaultedQueryOptions));
					return [s, (e) => this.#Y(e ?? s, t), () => this.#J(s, r)];
				}
				#J(e, t) {
					return t.map((r, s) => {
						let i = e[s];
						return r.defaultedQueryOptions.notifyOnChangeProps
							? i
							: r.observer.trackResult(i, (e) => {
									t.forEach((t) => {
										t.observer.trackProp(e);
									});
								});
					});
				}
				#Y(e, t) {
					return t
						? ((this.#G && this.#L === this.#z && t === this.#W) ||
								((this.#W = t), (this.#z = this.#L), (this.#G = eU(this.#G, t(e)))),
							this.#G)
						: e;
				}
				#V(e) {
					let t = new Map(this.#k.map((e) => [e.options.queryHash, e])),
						r = [];
					return (
						e.forEach((e) => {
							let s = this.#u.defaultQueryOptions(e),
								i = t.get(s.queryHash);
							i
								? r.push({ defaultedQueryOptions: s, observer: i })
								: r.push({ defaultedQueryOptions: s, observer: new tu(this.#u, s) });
						}),
						r
					);
				}
				#$(e, t) {
					let r = this.#k.indexOf(e);
					-1 !== r &&
						((this.#L = (function (e, t, r) {
							let s = e.slice(0);
							return (s[t] = r), s;
						})(this.#L, r, t)),
						this.#M());
				}
				#M() {
					if (this.hasListeners()) {
						let e = this.#G,
							t = this.#J(this.#L, this.#B);
						e !== this.#Y(t, this.#H?.combine) &&
							e7.batch(() => {
								this.listeners.forEach((e) => {
									e(this.#L);
								});
							});
					}
				}
			};
			function tM({ queries: e, ...t }, r) {
				let s = eC(r),
					i = tv(),
					n = tp(),
					a = eR.useMemo(
						() =>
							e.map((e) => {
								let t = s.defaultQueryOptions(e);
								return (t._optimisticResults = i ? 'isRestoring' : 'optimistic'), t;
							}),
						[e, s, i],
					);
				a.forEach((e) => {
					tw(e), ty(e, n);
				}),
					tm(n);
				let [o] = eR.useState(() => new tA(s, a, t)),
					[u, c, l] = o.getOptimisticResult(a, t.combine),
					h = !i && !1 !== t.subscribed;
				eR.useSyncExternalStore(
					eR.useCallback((e) => (h ? o.subscribe(e7.batchCalls(e)) : eq), [o, h]),
					() => o.getCurrentResult(),
					() => o.getCurrentResult(),
				),
					eR.useEffect(() => {
						o.setQueries(a, t);
					}, [a, t, o]);
				let f = u.some((e, t) => tR(a[t], e))
					? u.flatMap((e, t) => {
							let r = a[t];
							if (r) {
								let t = new tu(s, r);
								if (tR(r, e)) return tS(r, t, n);
								tE(e, i) && tS(r, t, n);
							}
							return [];
						})
					: [];
				if (f.length > 0) throw Promise.all(f);
				let d = u.find((e, t) => {
					let r = a[t];
					return (
						r &&
						tb({
							result: e,
							errorResetBoundary: n,
							throwOnError: r.throwOnError,
							query: s.getQueryCache().get(r.queryHash),
							suspense: r.suspense,
						})
					);
				});
				if (d?.error) throw d.error;
				return c(l());
			}
			function tk(e, t, r) {
				let s = e[0],
					i = e[1]?.input;
				return (
					r && (i = { ...(i ?? {}), ...(r.pageParam ? { cursor: r.pageParam } : {}), direction: r.direction }),
					[s.join('.'), i, t?.trpc]
				);
			}
			function tF(e) {
				return { path: e.path.join('.') };
			}
			function tU(e) {
				let t = tF(e);
				return eR.useMemo(() => t, [t]);
			}
			async function tj(e, t, r) {
				let s = t.getQueryCache().build(t, { queryKey: r });
				s.setState({ data: [], status: 'success' });
				let i = [];
				for await (let t of e) i.push(t), s.setState({ data: [...i] });
				return i;
			}
			let tN = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
			function tL(e) {
				let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
					r = e?.context ?? e0;
				function s() {
					let e = eR.useContext(r);
					if (!e) throw Error('Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?');
					return e;
				}
				function i(e, t) {
					let { queryClient: r, ssrState: i } = s();
					return i && 'mounted' !== i && r.getQueryCache().find({ queryKey: e })?.state.status === 'error'
						? { retryOnMount: !1, ...t }
						: t;
				}
				let n = { data: void 0, error: null, status: 'idle' },
					a = { data: void 0, error: null, status: 'connecting' };
				return {
					Provider: (e) => {
						let { abortOnUnmount: t = !1, queryClient: s, ssrContext: i } = e,
							[n, a] = eR.useState(e.ssrState ?? !1),
							o = e.client instanceof X ? e.client : e.client[Z],
							u = eR.useMemo(
								() =>
									(function (e) {
										let { client: t, queryClient: r } = e,
											s = t instanceof X ? t : t[Z];
										return {
											infiniteQueryOptions: (e, t, r) => {
												let i = t[1]?.input === ez,
													n = async (e) => {
														let i = {
															...r,
															trpc: {
																...r?.trpc,
																...(r?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
															},
														};
														return await s.query(...tk(t, i, { direction: e.direction, pageParam: e.pageParam }));
													};
												return Object.assign(
													{
														...r,
														initialData: r?.initialData,
														queryKey: t,
														queryFn: i ? ez : n,
														initialPageParam: r?.initialCursor ?? null,
													},
													{ trpc: tF({ path: e }) },
												);
											},
											queryOptions: (e, t, i) => {
												let n = t[1]?.input === ez,
													a = async (e) => {
														let n = {
																...i,
																trpc: {
																	...i?.trpc,
																	...(i?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
																},
															},
															a = await s.query(...tk(t, n));
														return g(a) ? tj(a, r, t) : a;
													};
												return Object.assign(
													{ ...i, initialData: i?.initialData, queryKey: t, queryFn: n ? ez : a },
													{ trpc: tF({ path: e }) },
												);
											},
											fetchQuery: (e, t) => r.fetchQuery({ ...t, queryKey: e, queryFn: () => s.query(...tk(e, t)) }),
											fetchInfiniteQuery: (e, t) =>
												r.fetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: r, direction: i }) =>
														s.query(...tk(e, t, { pageParam: r, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											prefetchQuery: (e, t) =>
												r.prefetchQuery({ ...t, queryKey: e, queryFn: () => s.query(...tk(e, t)) }),
											prefetchInfiniteQuery: (e, t) =>
												r.prefetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: r, direction: i }) =>
														s.query(...tk(e, t, { pageParam: r, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											ensureQueryData: (e, t) =>
												r.ensureQueryData({ ...t, queryKey: e, queryFn: () => s.query(...tk(e, t)) }),
											invalidateQueries: (e, t, s) => r.invalidateQueries({ ...t, queryKey: e }, s),
											resetQueries: (e, t, s) => r.resetQueries({ ...t, queryKey: e }, s),
											refetchQueries: (e, t, s) => r.refetchQueries({ ...t, queryKey: e }, s),
											cancelQuery: (e, t) => r.cancelQueries({ queryKey: e }, t),
											setQueryData: (e, t, s) => r.setQueryData(e, t, s),
											setQueriesData: (e, t, s, i) => r.setQueriesData({ ...t, queryKey: e }, s, i),
											getQueryData: (e) => r.getQueryData(e),
											setInfiniteQueryData: (e, t, s) => r.setQueryData(e, t, s),
											getInfiniteQueryData: (e) => r.getQueryData(e),
											setMutationDefaults: (t, i) => {
												let n = t[0];
												return r.setMutationDefaults(
													t,
													'function' == typeof i
														? i({ canonicalMutationFn: (t) => s.mutation(...tk([n, { input: t }], e)) })
														: i,
												);
											},
											getMutationDefaults: (e) => r.getMutationDefaults(e),
											isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
										};
									})({ client: o, queryClient: s }),
								[o, s],
							),
							c = eR.useMemo(
								() => ({ abortOnUnmount: t, queryClient: s, client: o, ssrContext: i ?? null, ssrState: n, ...u }),
								[t, o, u, s, i, n],
							);
						return (
							eR.useEffect(() => {
								a((e) => !!e && 'mounted');
							}, []),
							eR.createElement(r.Provider, { value: c }, e.children)
						);
					},
					createClient: es,
					useContext: s,
					useUtils: s,
					useQuery: function (t, r, n) {
						let { abortOnUnmount: a, client: o, ssrState: u, queryClient: c, prefetchQuery: l } = s(),
							h = e1(t, r, 'query'),
							f = c.getQueryDefaults(h),
							d = r === ez;
						'undefined' != typeof window ||
							'prepass' !== u ||
							n?.trpc?.ssr === !1 ||
							(n?.enabled ?? f?.enabled) === !1 ||
							d ||
							c.getQueryCache().find({ queryKey: h }) ||
							l(h, n);
						let p = i(h, { ...f, ...n }),
							y = n?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
							m = tC(
								{
									...p,
									queryKey: h,
									queryFn: d
										? r
										: async (e) => {
												let t = { ...p, trpc: { ...p?.trpc, ...(y ? { signal: e.signal } : { signal: null }) } },
													r = await o.query(...tk(h, t));
												return g(r) ? tj(r, c, h) : r;
											},
								},
								tu,
								c,
							);
						return (m.trpc = tU({ path: t })), m;
					},
					usePrefetchQuery: function (t, r, i) {
						let n = s(),
							a = e1(t, r, 'query'),
							o = r === ez,
							u = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? n.abortOnUnmount;
						!(function (e, t) {
							let r = eC(void 0);
							r.getQueryState(e.queryKey) || r.prefetchQuery(e);
						})({
							...i,
							queryKey: a,
							queryFn: o
								? r
								: (e) => {
										let t = { trpc: { ...i?.trpc, ...(u ? { signal: e.signal } : {}) } };
										return n.client.query(...tk(a, t));
									},
						});
					},
					useSuspenseQuery: function (t, r, i) {
						var n, a;
						let o = s(),
							u = e1(t, r, 'query'),
							c = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? o.abortOnUnmount,
							l =
								((n = {
									...i,
									queryKey: u,
									queryFn: (e) => {
										let t = { ...i, trpc: { ...i?.trpc, ...(c ? { signal: e.signal } : { signal: null }) } };
										return o.client.query(...tk(u, t));
									},
								}),
								(a = o.queryClient),
								tC({ ...n, enabled: !0, suspense: !0, throwOnError: tO, placeholderData: void 0 }, tu, a));
						return (l.trpc = tU({ path: t })), [l.data, l];
					},
					useQueries: (e, t) => {
						let { ssrState: r, queryClient: i, prefetchQuery: n, client: a } = s(),
							o = e(e4(a));
						if ('undefined' == typeof window && 'prepass' === r)
							for (let e of o)
								e.trpc?.ssr === !1 || i.getQueryCache().find({ queryKey: e.queryKey }) || n(e.queryKey, e);
						return tM({ queries: o.map((e) => ({ ...e, queryKey: e.queryKey })), combine: t?.combine }, i);
					},
					useSuspenseQueries: (e) => {
						var t;
						let { queryClient: r, client: i } = s(),
							n =
								((t = { queries: e(e4(i)).map((e) => ({ ...e, queryFn: e.queryFn, queryKey: e.queryKey })) }),
								tM(
									{
										...t,
										queries: t.queries.map((e) => ({
											...e,
											suspense: !0,
											throwOnError: tO,
											enabled: !0,
											placeholderData: void 0,
										})),
									},
									r,
								));
						return [n.map((e) => e.data), n];
					},
					useMutation: function (e, r) {
						let { client: i, queryClient: n } = s(),
							a = e2(e),
							o = n.defaultMutationOptions(n.getMutationDefaults(a)),
							u = (function (e, t) {
								let r = eC(t),
									[s] = eR.useState(() => new tq(r, e));
								eR.useEffect(() => {
									s.setOptions(e);
								}, [s, e]);
								let i = eR.useSyncExternalStore(
										eR.useCallback((e) => s.subscribe(e7.batchCalls(e)), [s]),
										() => s.getCurrentResult(),
										() => s.getCurrentResult(),
									),
									n = eR.useCallback(
										(e, t) => {
											s.mutate(e, t).catch(eq);
										},
										[s],
									);
								if (i.error && e$(s.options.throwOnError, [i.error])) throw i.error;
								return { ...i, mutate: n, mutateAsync: i.mutate };
							})(
								{
									...r,
									mutationKey: a,
									mutationFn: (t) => i.mutation(...tk([e, { input: t }], r)),
									onSuccess: (...e) =>
										t({
											originalFn: () => r?.onSuccess?.(...e) ?? o?.onSuccess?.(...e),
											queryClient: n,
											meta: r?.meta ?? o?.meta ?? {},
										}),
								},
								n,
							);
						return (u.trpc = tU({ path: e })), u;
					},
					useSubscription: function (e, t, r) {
						let i = r?.enabled ?? t !== ez,
							o = ek(e1(e, t, 'any')),
							{ client: u } = s(),
							c = eR.useRef(r);
						eR.useEffect(() => {
							c.current = r;
						});
						let [l] = eR.useState(new Set([])),
							h = eR.useCallback(
								(e) => {
									l.add(e);
								},
								[l],
							),
							f = eR.useRef(null),
							d = eR.useCallback(
								(e) => {
									let t = y.current,
										r = (y.current = e(t)),
										s = !1;
									for (let e of l)
										if (t[e] !== r[e]) {
											s = !0;
											break;
										}
									s && b(tN(r, h));
								},
								[h, l],
							),
							p = eR.useCallback(() => {
								if ((f.current?.unsubscribe(), !i)) return void d(() => ({ ...n, reset: p }));
								d(() => ({ ...a, reset: p })),
									(f.current = u.subscription(e.join('.'), t ?? void 0, {
										onStarted: () => {
											c.current.onStarted?.(), d((e) => ({ ...e, status: 'pending', error: null }));
										},
										onData: (e) => {
											c.current.onData?.(e), d((t) => ({ ...t, status: 'pending', data: e, error: null }));
										},
										onError: (e) => {
											c.current.onError?.(e), d((t) => ({ ...t, status: 'error', error: e }));
										},
										onConnectionStateChange: (e) => {
											d((t) => {
												switch (e.state) {
													case 'idle':
														return { ...t, status: e.state, error: null, data: void 0 };
													case 'connecting':
														return { ...t, error: e.error, status: e.state };
													case 'pending':
														return t;
												}
											});
										},
										onComplete: () => {
											c.current.onComplete?.(), d((e) => ({ ...e, status: 'idle', error: null, data: void 0 }));
										},
									}));
							}, [u, o, i, d]);
						eR.useEffect(
							() => (
								p(),
								() => {
									f.current?.unsubscribe();
								}
							),
							[p],
						);
						let y = eR.useRef(i ? { ...a, reset: p } : { ...n, reset: p }),
							[m, b] = eR.useState(tN(y.current, h));
						return m;
					},
					useInfiniteQuery: function (e, t, r) {
						let { client: n, ssrState: a, prefetchInfiniteQuery: o, queryClient: u, abortOnUnmount: c } = s(),
							l = e1(e, t, 'infinite'),
							h = u.getQueryDefaults(l),
							f = t === ez;
						'undefined' != typeof window ||
							'prepass' !== a ||
							r?.trpc?.ssr === !1 ||
							(r?.enabled ?? h?.enabled) === !1 ||
							f ||
							u.getQueryCache().find({ queryKey: l }) ||
							o(l, { ...h, ...r });
						let d = i(l, { ...h, ...r }),
							p = r?.trpc?.abortOnUnmount ?? c,
							y = tC(
								{
									...d,
									initialPageParam: r.initialCursor ?? null,
									persister: r.persister,
									queryKey: l,
									queryFn: f
										? t
										: (e) => {
												let t = { ...d, trpc: { ...d?.trpc, ...(p ? { signal: e.signal } : { signal: null }) } };
												return n.query(
													...tk(l, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
												);
											},
								},
								tT,
								u,
							);
						return (y.trpc = tU({ path: e })), y;
					},
					usePrefetchInfiniteQuery: function (e, t, r) {
						let n = s(),
							a = e1(e, t, 'infinite'),
							o = n.queryClient.getQueryDefaults(a),
							u = t === ez,
							c = i(a, { ...o, ...r }),
							l = r?.trpc?.abortOnUnmount ?? n.abortOnUnmount;
						!(function (e, t) {
							let r = eC(void 0);
							r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
						})({
							...r,
							initialPageParam: r.initialCursor ?? null,
							queryKey: a,
							queryFn: u
								? t
								: (e) => {
										let t = { ...c, trpc: { ...c?.trpc, ...(l ? { signal: e.signal } : {}) } };
										return n.client.query(
											...tk(a, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
										);
									},
						});
					},
					useSuspenseInfiniteQuery: function (e, t, r) {
						var n, a;
						let o = s(),
							u = e1(e, t, 'infinite'),
							c = o.queryClient.getQueryDefaults(u),
							l = i(u, { ...c, ...r }),
							h = r?.trpc?.abortOnUnmount ?? o.abortOnUnmount,
							f =
								((n = {
									...r,
									initialPageParam: r.initialCursor ?? null,
									queryKey: u,
									queryFn: (e) => {
										let t = { ...l, trpc: { ...l?.trpc, ...(h ? { signal: e.signal } : {}) } };
										return o.client.query(
											...tk(u, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
										);
									},
								}),
								(a = o.queryClient),
								tC({ ...n, enabled: !0, suspense: !0, throwOnError: tO }, tT, a));
						return (f.trpc = tU({ path: e })), [f.data, f];
					},
				};
			}
			var tK = class extends e9 {
					constructor(e = {}) {
						super(), (this.config = e), (this.#K = new Map());
					}
					#K;
					build(e, t, r) {
						let s = t.queryKey,
							i = t.queryHash ?? eM(s, t),
							n = this.get(i);
						return (
							n ||
								((n = new ta({
									client: e,
									queryKey: s,
									queryHash: i,
									options: e.defaultQueryOptions(t),
									state: r,
									defaultOptions: e.getQueryDefaults(s),
								})),
								this.add(n)),
							n
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
						e7.batch(() => {
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
						return this.getAll().find((e) => eI(t, e));
					}
					findAll(e = {}) {
						let t = this.getAll();
						return Object.keys(e).length > 0 ? t.filter((t) => eI(e, t)) : t;
					}
					notify(e) {
						e7.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					onFocus() {
						e7.batch(() => {
							this.getAll().forEach((e) => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						e7.batch(() => {
							this.getAll().forEach((e) => {
								e.onOnline();
							});
						});
					}
				},
				tH = class extends e9 {
					constructor(e = {}) {
						super(), (this.config = e), (this.#X = new Set()), (this.#Z = new Map()), (this.#ee = 0);
					}
					#X;
					#Z;
					#ee;
					build(e, t, r) {
						let s = new tP({
							mutationCache: this,
							mutationId: ++this.#ee,
							options: e.defaultMutationOptions(t),
							state: r,
						});
						return this.add(s), s;
					}
					add(e) {
						this.#X.add(e);
						let t = tG(e);
						if ('string' == typeof t) {
							let r = this.#Z.get(t);
							r ? r.push(e) : this.#Z.set(t, [e]);
						}
						this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						if (this.#X.delete(e)) {
							let t = tG(e);
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
						let t = tG(e);
						if ('string' != typeof t) return !0;
						{
							let r = this.#Z.get(t),
								s = r?.find((e) => 'pending' === e.state.status);
							return !s || s === e;
						}
					}
					runNext(e) {
						let t = tG(e);
						if ('string' != typeof t) return Promise.resolve();
						{
							let r = this.#Z.get(t)?.find((t) => t !== e && t.state.isPaused);
							return r?.continue() ?? Promise.resolve();
						}
					}
					clear() {
						e7.batch(() => {
							this.#X.forEach((e) => {
								this.notify({ type: 'removed', mutation: e });
							}),
								this.#X.clear(),
								this.#Z.clear();
						});
					}
					getAll() {
						return Array.from(this.#X);
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => eA(t, e));
					}
					findAll(e = {}) {
						return this.getAll().filter((t) => eA(e, t));
					}
					notify(e) {
						e7.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						let e = this.getAll().filter((e) => e.state.isPaused);
						return e7.batch(() => Promise.all(e.map((e) => e.continue().catch(eq))));
					}
				};
			function tG(e) {
				return e.options.scope?.id;
			}
			var tW = class {
				#et;
				#F;
				#l;
				#er;
				#es;
				#ei;
				#en;
				#ea;
				constructor(e = {}) {
					(this.#et = e.queryCache || new tK()),
						(this.#F = e.mutationCache || new tH()),
						(this.#l = e.defaultOptions || {}),
						(this.#er = new Map()),
						(this.#es = new Map()),
						(this.#ei = 0);
				}
				mount() {
					this.#ei++,
						1 === this.#ei &&
							((this.#en = e5.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onFocus());
							})),
							(this.#ea = e8.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onOnline());
							})));
				}
				unmount() {
					this.#ei--, 0 === this.#ei && (this.#en?.(), (this.#en = void 0), this.#ea?.(), (this.#ea = void 0));
				}
				isFetching(e) {
					return this.#et.findAll({ ...e, fetchStatus: 'fetching' }).length;
				}
				isMutating(e) {
					return this.#F.findAll({ ...e, status: 'pending' }).length;
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state.data;
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						r = this.#et.build(this, t),
						s = r.state.data;
					return void 0 === s
						? this.fetchQuery(e)
						: (e.revalidateIfStale && r.isStaleByTime(e_(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(s));
				}
				getQueriesData(e) {
					return this.#et.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
				}
				setQueryData(e, t, r) {
					let s = this.defaultQueryOptions({ queryKey: e }),
						i = this.#et.get(s.queryHash),
						n = i?.state.data,
						a = 'function' == typeof t ? t(n) : t;
					if (void 0 !== a) return this.#et.build(this, s).setData(a, { ...r, manual: !0 });
				}
				setQueriesData(e, t, r) {
					return e7.batch(() => this.#et.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]));
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state;
				}
				removeQueries(e) {
					let t = this.#et;
					e7.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e);
						});
					});
				}
				resetQueries(e, t) {
					let r = this.#et;
					return e7.batch(
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
					return Promise.all(e7.batch(() => this.#et.findAll(e).map((e) => e.cancel(r))))
						.then(eq)
						.catch(eq);
				}
				invalidateQueries(e, t = {}) {
					return e7.batch(() =>
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
						e7.batch(() =>
							this.#et
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, r);
									return r.throwOnError || (t = t.catch(eq)), 'paused' === e.state.fetchStatus ? Promise.resolve() : t;
								}),
						),
					).then(eq);
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e);
					void 0 === t.retry && (t.retry = !1);
					let r = this.#et.build(this, t);
					return r.isStaleByTime(e_(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(eq).catch(eq);
				}
				fetchInfiniteQuery(e) {
					return (e.behavior = tD(e.pages)), this.fetchQuery(e);
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(eq).catch(eq);
				}
				ensureInfiniteQueryData(e) {
					return (e.behavior = tD(e.pages)), this.ensureQueryData(e);
				}
				resumePausedMutations() {
					return e8.isOnline() ? this.#F.resumePausedMutations() : Promise.resolve();
				}
				getQueryCache() {
					return this.#et;
				}
				getMutationCache() {
					return this.#F;
				}
				getDefaultOptions() {
					return this.#l;
				}
				setDefaultOptions(e) {
					this.#l = e;
				}
				setQueryDefaults(e, t) {
					this.#er.set(ek(e), { queryKey: e, defaultOptions: t });
				}
				getQueryDefaults(e) {
					let t = [...this.#er.values()],
						r = {};
					return (
						t.forEach((t) => {
							eF(e, t.queryKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				setMutationDefaults(e, t) {
					this.#es.set(ek(e), { mutationKey: e, defaultOptions: t });
				}
				getMutationDefaults(e) {
					let t = [...this.#es.values()],
						r = {};
					return (
						t.forEach((t) => {
							eF(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e;
					let t = { ...this.#l.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
					return (
						t.queryHash || (t.queryHash = eM(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
						t.queryFn === ez && (t.enabled = !1),
						t
					);
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#l.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							};
				}
				clear() {
					this.#et.clear(), this.#F.clear();
				}
			};
			let tz = (e) => e.queryClient ?? new tW(e.queryClientConfig);
			r(7595);
			let tB = () => '',
				t$ = (function (e) {
					let t = tL(e),
						r = (function (e) {
							let { config: t } = e,
								r = eo(e.transformer);
							return (s) => {
								let i = tL(e),
									n = (n) => {
										let [a] = (0, eR.useState)(() => {
												if (n.trpc) return n.trpc;
												let r = t({}),
													s = tz(r),
													a = i.createClient(r);
												return {
													abortOnUnmount: r.abortOnUnmount,
													queryClient: s,
													trpcClient: a,
													ssrState: !!e.ssr && 'mounting',
													ssrContext: null,
												};
											}),
											{ queryClient: o, trpcClient: u, ssrState: c, ssrContext: l } = a,
											h = n.pageProps?.trpcState,
											f = eR.useMemo(() => (h ? r.input.deserialize(h) : h), [h]);
										return eR.createElement(
											i.Provider,
											{ abortOnUnmount: a.abortOnUnmount ?? !1, client: u, queryClient: o, ssrState: c, ssrContext: l },
											eR.createElement(eP, { client: o }, eR.createElement(eX, { state: f }, eR.createElement(s, n))),
										);
									};
								e.ssr
									? e.ssrPrepass({ parent: e, AppOrPage: s, WithTRPC: n })
									: s.getInitialProps &&
										(n.getInitialProps = async (e) => {
											let t,
												r = !!e.Component,
												i = {},
												n = await s.getInitialProps(e);
											return (t = i = { ...(r ? (n.pageProps ?? {}) : n), ...i }), r ? { pageProps: t } : t;
										});
								let a = s.displayName ?? s.name ?? 'Component';
								return (n.displayName = `withTRPC(${a})`), n;
							};
						})(e),
						s = l(({ path: e, args: r }) => {
							let s = [...e],
								i = s.pop();
							if ('useMutation' === i) return t[i](s, ...r);
							if ('_def' === i) return { path: s };
							let [n, ...a] = r,
								o = a[0] ?? {};
							return t[i](s, n, o);
						});
					return h((e) =>
						'useContext' === e || 'useUtils' === e
							? () => {
									let e = t.useUtils();
									return (0, eR.useMemo)(
										() =>
											(function (e) {
												var t;
												let r = er(e.client),
													s =
														((t = e),
														l((e) => {
															let r = [...e.path],
																s = r.pop(),
																i = [...e.args],
																n = i.shift(),
																a = e1(r, n, e3(s));
															return {
																infiniteQueryOptions: () => t.infiniteQueryOptions(r, a, i[0]),
																queryOptions: () => t.queryOptions(r, a, ...i),
																fetch: () => t.fetchQuery(a, ...i),
																fetchInfinite: () => t.fetchInfiniteQuery(a, i[0]),
																prefetch: () => t.prefetchQuery(a, ...i),
																prefetchInfinite: () => t.prefetchInfiniteQuery(a, i[0]),
																ensureData: () => t.ensureQueryData(a, ...i),
																invalidate: () => t.invalidateQueries(a, ...i),
																reset: () => t.resetQueries(a, ...i),
																refetch: () => t.refetchQueries(a, ...i),
																cancel: () => t.cancelQuery(a, ...i),
																setData: () => {
																	t.setQueryData(a, i[0], i[1]);
																},
																setQueriesData: () => t.setQueriesData(a, i[0], i[1], i[2]),
																setInfiniteData: () => {
																	t.setInfiniteQueryData(a, i[0], i[1]);
																},
																getData: () => t.getQueryData(a),
																getInfiniteData: () => t.getInfiniteQueryData(a),
																setMutationDefaults: () => t.setMutationDefaults(e2(r), n),
																getMutationDefaults: () => t.getMutationDefaults(e2(r)),
																isMutating: () => t.isMutating({ mutationKey: e2(r) }),
															}[s]();
														}));
												return h((t) => ('client' === t ? r : eZ.includes(t) ? e[t] : s[t]));
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
										: s[e],
					);
				})({
					config: () => ({
						links: [
							(function (e) {
								let t = {
										url: e.url.toString(),
										fetch: e.fetch,
										transformer: eo(e.transformer),
										methodOverride: e.methodOverride,
									},
									r = e.maxURLLength ?? 1 / 0,
									s = e.maxItems ?? 1 / 0;
								return () => {
									let i = (i) => ({
											validate(e) {
												if (r === 1 / 0 && s === 1 / 0) return !0;
												if (e.length > s) return !1;
												let n = e.map((e) => e.path).join(','),
													a = e.map((e) => e.input);
												return el({ ...t, type: i, path: n, inputs: a, signal: null }).length <= r;
											},
											async fetch(r) {
												let s = r.map((e) => e.path).join(','),
													n = r.map((e) => e.input),
													a = (function (...e) {
														let t = new AbortController(),
															r = e.length,
															s = 0,
															i = () => {
																++s === r && t.abort();
															};
														for (let t of e) t?.aborted ? i() : t?.addEventListener('abort', i, { once: !0 });
														return t.signal;
													})(...r.map((e) => e.signal)),
													o = await ef({
														...t,
														path: s,
														inputs: n,
														type: i,
														headers: () =>
															e.headers ? ('function' == typeof e.headers ? e.headers({ opList: r }) : e.headers) : {},
														signal: a,
													});
												return (Array.isArray(o.json) ? o.json : r.map(() => o.json)).map((e) => ({
													meta: o.meta,
													json: e,
												}));
											},
										}),
										n = { query: en(i('query')), mutation: en(i('mutation')) };
									return ({ op: e }) =>
										a((r) => {
											let s;
											if ('subscription' === e.type)
												throw Error(
													'Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`',
												);
											return (
												n[e.type]
													.load(e)
													.then((e) => {
														s = e;
														let i = (function (e, t) {
															let r;
															try {
																r = (function (e, t) {
																	if ('error' in e) {
																		let r = t.deserialize(e.error);
																		return { ok: !1, error: { ...e, error: r } };
																	}
																	return {
																		ok: !0,
																		result: {
																			...e.result,
																			...((!e.result.type || 'data' === e.result.type) && {
																				type: 'data',
																				data: t.deserialize(e.result.data),
																			}),
																		},
																	};
																})(e, t);
															} catch {
																throw new P();
															}
															if (
																(!r.ok && (!y(r.error.error) || 'number' != typeof r.error.error.code)) ||
																(r.ok && !y(r.result))
															)
																throw new P();
															return r;
														})(e.json, t.transformer.output);
														if (!i.ok) return void r.error(Y.from(i.error, { meta: e.meta }));
														r.next({ context: e.meta, result: i.result }), r.complete();
													})
													.catch((e) => {
														r.error(Y.from(e, { meta: s?.meta }));
													}),
												() => {}
											);
										});
								};
							})({ url: ''.concat(tB(), '/api/trpc'), headers: async () => ({}) }),
						],
					}),
					ssr: !1,
				});
			var tV = r(2252),
				tY = r.n(tV),
				tJ = r(6620),
				tX = r.n(tJ),
				tZ = r(2611),
				t0 = r.n(tZ);
			let t1 = t$.withTRPC((e) => {
				let { Component: t, pageProps: r } = e;
				return (0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsx)(t0(), { children: (0, n.jsx)('title', { children: '@micro/saas' }) }),
						(0, n.jsx)('div', {
							className: ''.concat(tY().className, ' ').concat(tX().className, ' '),
							children: (0, n.jsx)(t, { ...r }),
						}),
					],
				});
			});
		},
		2252: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_920e35',
				variable: '__variable_920e35',
			};
		},
		2379: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(699);
				},
			]);
		},
		2611: (e, t, r) => {
			e.exports = r(9142);
		},
		6620: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_5170de',
				variable: '__variable_5170de',
			};
		},
		8834: () => {},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [593, 792], () => (t(2379), t(7203))), (_N_E = e.O());
	},
]);
