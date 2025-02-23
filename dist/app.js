"use strict";

function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, t(e)
}

var e = c(require("fs")), r = c(require("path")), n = c(require("os")), o = require("child_process"),
    a = c(require("util")), i = c(require("crypto"));

function c(t) {
    return t && t.__esModule ? t : {default: t}
}

function u(t, e) {
    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!r) {
        if (Array.isArray(t) || (r = h(t)) || e && t && "number" == typeof t.length) {
            r && (t = r);
            var n = 0, o = function () {
            };
            return {
                s: o, n: function () {
                    return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                }, e: function (t) {
                    throw t
                }, f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var a, i = !0, c = !1;
    return {
        s: function () {
            r = r.call(t)
        }, n: function () {
            var t = r.next();
            return i = t.done, t
        }, e: function (t) {
            c = !0, a = t
        }, f: function () {
            try {
                i || null == r.return || r.return()
            } finally {
                if (c) throw a
            }
        }
    }
}

function s() {
    s = function () {
        return r
    };
    var e, r = {}, n = Object.prototype, o = n.hasOwnProperty, a = Object.defineProperty || function (t, e, r) {
            t[e] = r.value
        }, i = "function" == typeof Symbol ? Symbol : {}, c = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator", f = i.toStringTag || "@@toStringTag";

    function l(t, e, r) {
        return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
    }

    try {
        l({}, "")
    } catch (e) {
        l = function (t, e, r) {
            return t[e] = r
        }
    }

    function h(t, e, r, n) {
        var o = e && e.prototype instanceof g ? e : g, i = Object.create(o.prototype), c = new N(n || []);
        return a(i, "_invoke", {value: T(t, r, c)}), i
    }

    function p(t, e, r) {
        try {
            return {type: "normal", arg: t.call(e, r)}
        } catch (t) {
            return {type: "throw", arg: t}
        }
    }

    r.wrap = h;
    var y = "suspendedStart", d = "suspendedYield", v = "executing", b = "completed", m = {};

    function g() {
    }

    function w() {
    }

    function x() {
    }

    var L = {};
    l(L, c, (function () {
        return this
    }));
    var k = Object.getPrototypeOf, E = k && k(k(F([])));
    E && E !== n && o.call(E, c) && (L = E);
    var S = x.prototype = g.prototype = Object.create(L);

    function j(t) {
        ["next", "throw", "return"].forEach((function (e) {
            l(t, e, (function (t) {
                return this._invoke(e, t)
            }))
        }))
    }

    function O(e, r) {
        function n(a, i, c, u) {
            var s = p(e[a], e, i);
            if ("throw" !== s.type) {
                var f = s.arg, l = f.value;
                return l && "object" == t(l) && o.call(l, "__await") ? r.resolve(l.__await).then((function (t) {
                    n("next", t, c, u)
                }), (function (t) {
                    n("throw", t, c, u)
                })) : r.resolve(l).then((function (t) {
                    f.value = t, c(f)
                }), (function (t) {
                    return n("throw", t, c, u)
                }))
            }
            u(s.arg)
        }

        var i;
        a(this, "_invoke", {
            value: function (t, e) {
                function o() {
                    return new r((function (r, o) {
                        n(t, e, r, o)
                    }))
                }

                return i = i ? i.then(o, o) : o()
            }
        })
    }

    function T(t, r, n) {
        var o = y;
        return function (a, i) {
            if (o === v) throw Error("Generator is already running");
            if (o === b) {
                if ("throw" === a) throw i;
                return {value: e, done: !0}
            }
            for (n.method = a, n.arg = i; ;) {
                var c = n.delegate;
                if (c) {
                    var u = _(c, n);
                    if (u) {
                        if (u === m) continue;
                        return u
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                    if (o === y) throw o = b, n.arg;
                    n.dispatchException(n.arg)
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = v;
                var s = p(t, r, n);
                if ("normal" === s.type) {
                    if (o = n.done ? b : d, s.arg === m) continue;
                    return {value: s.arg, done: n.done}
                }
                "throw" === s.type && (o = b, n.method = "throw", n.arg = s.arg)
            }
        }
    }

    function _(t, r) {
        var n = r.method, o = t.iterator[n];
        if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, _(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), m;
        var a = p(o, t.iterator, r.arg);
        if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, m;
        var i = a.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, m) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, m)
    }

    function A(t) {
        var e = {tryLoc: t[0]};
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
    }

    function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
    }

    function N(t) {
        this.tryEntries = [{tryLoc: "root"}], t.forEach(A, this), this.reset(!0)
    }

    function F(r) {
        if (r || "" === r) {
            var n = r[c];
            if (n) return n.call(r);
            if ("function" == typeof r.next) return r;
            if (!isNaN(r.length)) {
                var a = -1, i = function t() {
                    for (; ++a < r.length;) if (o.call(r, a)) return t.value = r[a], t.done = !1, t;
                    return t.value = e, t.done = !0, t
                };
                return i.next = i
            }
        }
        throw new TypeError(t(r) + " is not iterable")
    }

    return w.prototype = x, a(S, "constructor", {value: x, configurable: !0}), a(x, "constructor", {
        value: w,
        configurable: !0
    }), w.displayName = l(x, f, "GeneratorFunction"), r.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
    }, r.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, l(t, f, "GeneratorFunction")), t.prototype = Object.create(S), t
    }, r.awrap = function (t) {
        return {__await: t}
    }, j(O.prototype), l(O.prototype, u, (function () {
        return this
    })), r.AsyncIterator = O, r.async = function (t, e, n, o, a) {
        void 0 === a && (a = Promise);
        var i = new O(h(t, e, n, o), a);
        return r.isGeneratorFunction(e) ? i : i.next().then((function (t) {
            return t.done ? t.value : i.next()
        }))
    }, j(S), l(S, f, "Generator"), l(S, c, (function () {
        return this
    })), l(S, "toString", (function () {
        return "[object Generator]"
    })), r.keys = function (t) {
        var e = Object(t), r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
            for (; r.length;) {
                var n = r.pop();
                if (n in e) return t.value = n, t.done = !1, t
            }
            return t.done = !0, t
        }
    }, r.values = F, N.prototype = {
        constructor: N, reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t) for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
        }, stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
        }, dispatchException: function (t) {
            if (this.done) throw t;
            var r = this;

            function n(n, o) {
                return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
            }

            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a], c = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                    var u = o.call(i, "catchLoc"), s = o.call(i, "finallyLoc");
                    if (u && s) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                    } else if (u) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    } else {
                        if (!s) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                    }
                }
            }
        }, abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                    var a = n;
                    break
                }
            }
            a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
            var i = a ? a.completion : {};
            return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
        }, complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
        }, finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), m
            }
        }, catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        P(r)
                    }
                    return o
                }
            }
            throw Error("illegal catch attempt")
        }, delegateYield: function (t, r, n) {
            return this.delegate = {
                iterator: F(t),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = e), m
        }
    }, r
}

function f(t, e) {
    return d(t) || y(t, e) || h(t, e) || l()
}

function l() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function h(t, e) {
    if (t) {
        if ("string" == typeof t) return p(t, e);
        var r = {}.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(t, e) : void 0
    }
}

function p(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
    return n
}

function y(t, e) {
    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != r) {
        var n, o, a, i, c = [], u = !0, s = !1;
        try {
            if (a = (r = r.call(t)).next, 0 === e) {
                if (Object(r) !== r) return;
                u = !1
            } else for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== e); u = !0) ;
        } catch (t) {
            s = !0, o = t
        } finally {
            try {
                if (!u && null != r.return && (i = r.return(), Object(i) !== i)) return
            } finally {
                if (s) throw o
            }
        }
        return c
    }
}

function d(t) {
    if (Array.isArray(t)) return t
}

function v(t, e, r, n, o, a, i) {
    try {
        var c = t[a](i), u = c.value
    } catch (t) {
        return void r(t)
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o)
}

function b(t) {
    return function () {
        var e = this, r = arguments;
        return new Promise((function (n, o) {
            var a = t.apply(e, r);

            function i(t) {
                v(a, n, o, i, c, "next", t)
            }

            function c(t) {
                v(a, n, o, i, c, "throw", t)
            }

            i(void 0)
        }))
    }
}

var m = {
    token: "32f1bda98cd41779b193a6ae2c0059b0:043cbb30a451ebf1b51cf9703c2a696be1905f6243e7abf9809b02fdab304e6ca9493f89a1d48ce636b443212753a7e595c6cbc270b4e197bf248f4bbc3a2b0cdb8c34d9fa718b2cea5b153a9596fb08dead4a07c31b23f65eeef4a634ae3aad",
    time: "2025-03-19T21:10:10.112Z"
}, g = a.default.promisify(o.exec);

function w() {
    return x.apply(this, arguments)
}

function x() {
    return (x = b(s().mark((function t() {
        return s().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    if ("linux" !== n.default.type().toLowerCase()) {
                        t.next = 5;
                        break
                    }
                    return t.abrupt("return", !0);
                case 5:
                    throw A(1001);
                case 6:
                case"end":
                    return t.stop()
            }
        }), t)
    })))).apply(this, arguments)
}

function L() {
    return k.apply(this, arguments)
}

function k() {
    return (k = b(s().mark((function t() {
        var r;
        return s().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    return r = "", t.prev = 1, t.next = 4, e.default.readFileSync("/etc/os-release");
                case 4:
                    t.t0 = t.sent, r = t.t0 + "", t.next = 11;
                    break;
                case 8:
                    throw t.prev = 8, t.t1 = t.catch(1), A(1003);
                case 11:
                    if (!r.toLowerCase().includes("ubuntu")) {
                        t.next = 15;
                        break
                    }
                    return t.abrupt("return", !0);
                case 15:
                    throw A(1002);
                case 16:
                case"end":
                    return t.stop()
            }
        }), t, null, [[1, 8]])
    })))).apply(this, arguments)
}

function E() {
    return S.apply(this, arguments)
}

function S() {
    return (S = b(s().mark((function t() {
        var e, n, o;
        return s().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    return t.prev = 0, t.next = 3, g('find /root /home -type f -name "prefs.xml" 2>/dev/null || true');
                case 3:
                    if (e = t.sent, (n = e.stdout).trim()) {
                        t.next = 7;
                        break
                    }
                    throw A(1004);
                case 7:
                    if ((o = n.trim().split("\n").filter((function (t) {
                        return t.includes(r.default.join("mongochef", "enterprise", "prefs.xml"))
                    }))).length) {
                        t.next = 11;
                        break
                    }
                    throw A(1004);
                case 11:
                    return t.abrupt("return", o);
                case 14:
                    throw t.prev = 14, t.t0 = t.catch(0), t.t0;
                case 17:
                case"end":
                    return t.stop()
            }
        }), t, null, [[0, 14]])
    })))).apply(this, arguments)
}

function j(t, e) {
    return O.apply(this, arguments)
}

function O() {
    return (O = b(s().mark((function t(r, n) {
        var o, a;
        return s().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    return t.prev = 0, o = !1, t.next = 4, e.default.readFileSync(r);
                case 4:
                    if (t.t0 = t.sent, a = (a = (t.t0 + "").split("\n")).map((function (t) {
                        if (t.includes("soduz3vqhnnja46uvu3szq--")) {
                            var e;
                            try {
                                e = t.split('value="')[1].split('"')[0]
                            } catch (t) {
                            }
                            e && (t = t.replace(e, n), o = !0)
                        }
                        return t
                    })), o) {
                        t.next = 9;
                        break
                    }
                    throw A(1005);
                case 9:
                    return a = a.join("\n"), t.next = 12, e.default.writeFileSync(r, a);
                case 12:
                    return t.abrupt("return", !0);
                case 15:
                    throw t.prev = 15, t.t1 = t.catch(0), t.t1;
                case 18:
                case"end":
                    return t.stop()
            }
        }), t, null, [[0, 15]])
    })))).apply(this, arguments)
}

function T(t) {
    var e = Buffer.from("oTFg6Y5LV9gTBHa6V3B27MnzHxS7rSBAJH3cKuEAWVCzkNRAluhe9Lyn744zHVTQ").slice(0, 32),
        r = f(t.split(":"), 2), n = r[0], o = r[1], a = Buffer.from(n, "hex"),
        c = i.default.createDecipheriv("aes-256-cbc", e, a), u = c.update(o, "hex", "utf8");
    return u += c.final("utf8"), JSON.parse(u)
}

function _(t, e) {
    var r = Math.abs(new Date(e) - new Date(t));
    return Math.floor(r / 864e5)
}

var A = function (t) {
    var e = {
        1001: {message: "This system is not running Linux. Please ensure you're using a Linux-based environment."},
        1002: {message: "This system is not running Ubuntu. Please verify that you're using an Ubuntu distribution."},
        1003: {message: "Unable to read operating system information. The system may not be running Linux."},
        1004: {message: "Studio 3T management file not found. Please check that the file exists and is accessible."},
        1005: {message: "Authentication token not found for replacing in your system."},
        1006: {message: "The provided token has expired or the system time is incorrect. Please check the token's validity or system time."}
    }, r = e[t] || {}, n = new Error;
    return n.message = r.message || "invalid error", n.code = t, n
};

function P() {
    return N.apply(this, arguments)
}

function N() {
    return (N = b(s().mark((function t() {
        var e, r, n, o, a, i, c, f, l;
        return s().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    if (t.prev = 0, e = T("3cd9461495b5c2e56cf30f8521877859:775ba463e56ebdd9415cb40a971cc5bc080316d83f75c14524c1876a3eb7d9c3ed3292875b01d414cf7fc31b3813ec433553aed424d055479e5f5d2b5e0539016a67b167f75c3acc148b5d01c26afb300e6cdae5fb223d6183f23d21b9d9a32fbad6b7c8f7b411e39067aebd07b9a03389c0b6a1e21ac7167f8278501611e333"), r = e.token, n = e.expTime, o = new Date(n), a = new Date, !(o < a)) {
                        t.next = 6;
                        break
                    }
                    throw A(1006);
                case 6:
                    return t.next = 8, w();
                case 8:
                    return t.next = 10, L();
                case 10:
                    return t.next = 12, E();
                case 12:
                    i = t.sent, c = u(i), t.prev = 14, c.s();
                case 16:
                    if ((f = c.n()).done) {
                        t.next = 22;
                        break
                    }
                    return l = f.value, t.next = 20, j(l, r);
                case 20:
                    t.next = 16;
                    break;
                case 22:
                    t.next = 27;
                    break;
                case 24:
                    t.prev = 24, t.t0 = t.catch(14), c.e(t.t0);
                case 27:
                    return t.prev = 27, c.f(), t.finish(27);
                case 30:
                    t.next = 36;
                    break;
                case 33:
                    t.prev = 33, t.t1 = t.catch(0);
                case 36:
                case"end":
                    return t.stop()
            }
        }), t, null, [[0, 33], [14, 24, 27, 30]])
    })))).apply(this, arguments)
}

P();
//# sourceMappingURL=app.js.map
