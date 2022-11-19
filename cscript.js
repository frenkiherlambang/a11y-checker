var waveconfig = { debug: !1, extensionUrl: "", platform: "extension", browser: "chrome" };
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        a = Object.getPrototypeOf,
        i = n.slice,
        r = n.flat
            ? function (e) {
                  return n.flat.call(e);
              }
            : function (e) {
                  return n.concat.apply([], e);
              },
        s = n.push,
        o = n.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        u = d.toString,
        p = u.call(Object),
        h = {},
        g = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        m = function (e) {
            return null != e && e === e.window;
        },
        f = e.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var a,
            i,
            r = (n = n || f).createElement("script");
        if (((r.text = e), t)) for (a in v) (i = t[a] || (t.getAttribute && t.getAttribute(a))) && r.setAttribute(a, i);
        n.head.appendChild(r).parentNode.removeChild(r);
    }
    function y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var w = "3.5.1",
        k = function (e, t) {
            return new k.fn.init(e, t);
        };
    function x(e) {
        var t = !!e && "length" in e && e.length,
            n = y(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (k.fn = k.prototype = {
        jquery: w,
        constructor: k,
        length: 0,
        toArray: function () {
            return i.call(this);
        },
        get: function (e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return k.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                k.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                k.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                k.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (k.extend = k.fn.extend = function () {
            var e,
                t,
                n,
                a,
                i,
                r,
                s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && ((c = s), (s = arguments[o] || {}), o++), "object" == typeof s || g(s) || (s = {}), o === l && ((s = this), o--); o < l; o++)
                if (null != (e = arguments[o]))
                    for (t in e)
                        (a = e[t]),
                            "__proto__" !== t &&
                                s !== a &&
                                (c && a && (k.isPlainObject(a) || (i = Array.isArray(a)))
                                    ? ((n = s[t]), (r = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}), (i = !1), (s[t] = k.extend(c, r, a)))
                                    : void 0 !== a && (s[t] = a));
            return s;
        }),
        k.extend({
            expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e) || ((t = a(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || u.call(n) !== p)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    a = 0;
                if (x(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
                else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (x(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : o.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, a = 0, i = e.length; a < n; a++) e[i++] = t[a];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var a = [], i = 0, r = e.length, s = !n; i < r; i++) !t(e[i], i) !== s && a.push(e[i]);
                return a;
            },
            map: function (e, t, n) {
                var a,
                    i,
                    s = 0,
                    o = [];
                if (x(e)) for (a = e.length; s < a; s++) null != (i = t(e[s], s, n)) && o.push(i);
                else for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
                return r(o);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (k.fn[Symbol.iterator] = n[Symbol.iterator]),
        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    var _ = (function (e) {
        var t,
            n,
            a,
            i,
            r,
            s,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            g,
            m,
            f,
            v,
            b,
            y,
            w = "sizzle" + 1 * new Date(),
            k = e.document,
            x = 0,
            _ = 0,
            A = le(),
            j = le(),
            C = le(),
            z = le(),
            q = function (e, t) {
                return e === t && (u = !0), 0;
            },
            T = {}.hasOwnProperty,
            I = [],
            L = I.pop,
            E = I.push,
            W = I.push,
            G = I.slice,
            S = function (e, t) {
                for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
                return -1;
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            D = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            $ = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)",
            H = new RegExp(P + "+", "g"),
            M = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            O = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            F = new RegExp(P + "|>"),
            U = new RegExp($),
            X = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + D),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i"),
            },
            J = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                p();
            },
            se = we(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            W.apply((I = G.call(k.childNodes)), k.childNodes), I[k.childNodes.length].nodeType;
        } catch (t) {
            W = {
                apply: I.length
                    ? function (e, t) {
                          E.apply(e, G.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, a = 0; (e[n++] = t[a++]); );
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, a, i) {
            var r,
                o,
                c,
                d,
                u,
                g,
                v,
                b = t && t.ownerDocument,
                k = t ? t.nodeType : 9;
            if (((a = a || []), "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))) return a;
            if (!i && (p(t), (t = t || h), m)) {
                if (11 !== k && (u = Z.exec(e)))
                    if ((r = u[1])) {
                        if (9 === k) {
                            if (!(c = t.getElementById(r))) return a;
                            if (c.id === r) return a.push(c), a;
                        } else if (b && (c = b.getElementById(r)) && y(t, c) && c.id === r) return a.push(c), a;
                    } else {
                        if (u[2]) return W.apply(a, t.getElementsByTagName(e)), a;
                        if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return W.apply(a, t.getElementsByClassName(r)), a;
                    }
                if (n.qsa && !z[e + " "] && (!f || !f.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                    if (((v = e), (b = t), 1 === k && (F.test(e) || O.test(e)))) {
                        for (((b = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((d = t.getAttribute("id")) ? (d = d.replace(ae, ie)) : t.setAttribute("id", (d = w))), o = (g = s(e)).length; o--; )
                            g[o] = (d ? "#" + d : ":scope") + " " + ye(g[o]);
                        v = g.join(",");
                    }
                    try {
                        return W.apply(a, b.querySelectorAll(v)), a;
                    } catch (t) {
                        z(e, !0);
                    } finally {
                        d === w && t.removeAttribute("id");
                    }
                }
            }
            return l(e.replace(M, "$1"), t, a, i);
        }
        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > a.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
        }
        function ce(e) {
            return (e[w] = !0), e;
        }
        function de(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) a.attrHandle[n[i]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (a) return a;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function he(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function ge(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function me(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function fe(e) {
            return ce(function (t) {
                return (
                    (t = +t),
                    ce(function (n, a) {
                        for (var i, r = e([], n.length, t), s = r.length; s--; ) n[(i = r[s])] && (n[i] = !(a[i] = n[i]));
                    })
                );
            });
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = oe.support = {}),
        (r = oe.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !J.test(t || (n && n.nodeName) || "HTML");
        }),
        (p = oe.setDocument = function (e) {
            var t,
                i,
                s = e ? e.ownerDocument || e : k;
            return (
                s != h &&
                    9 === s.nodeType &&
                    s.documentElement &&
                    ((g = (h = s).documentElement),
                    (m = !r(h)),
                    k != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                    (n.scope = de(function (e) {
                        return g.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (n.attributes = de(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = de(function (e) {
                        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (n.getElementsByClassName = Q.test(h.getElementsByClassName)),
                    (n.getById = de(function (e) {
                        return (g.appendChild(e).id = w), !h.getElementsByName || !h.getElementsByName(w).length;
                    })),
                    n.getById
                        ? ((a.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (a.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && m) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((a.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t;
                              };
                          }),
                          (a.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && m) {
                                  var n,
                                      a,
                                      i,
                                      r = t.getElementById(e);
                                  if (r) {
                                      if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                      for (i = t.getElementsByName(e), a = 0; (r = i[a++]); ) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                  }
                                  return [];
                              }
                          })),
                    (a.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  a = [],
                                  i = 0,
                                  r = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  for (; (n = r[i++]); ) 1 === n.nodeType && a.push(n);
                                  return a;
                              }
                              return r;
                          }),
                    (a.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                        }),
                    (v = []),
                    (f = []),
                    (n.qsa = Q.test(h.querySelectorAll)) &&
                        (de(function (e) {
                            var t;
                            (g.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + P + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || f.push("\\[" + P + "*(?:value|" + N + ")"),
                                e.querySelectorAll("[id~=" + w + "-]").length || f.push("~="),
                                (t = h.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || f.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || f.push(":checked"),
                                e.querySelectorAll("a#" + w + "+*").length || f.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                f.push("[\\r\\n\\f]");
                        }),
                        de(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = h.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && f.push("name" + P + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && f.push(":enabled", ":disabled"),
                                (g.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                f.push(",.*:");
                        })),
                    (n.matchesSelector = Q.test((b = g.matches || g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector))) &&
                        de(function (e) {
                            (n.disconnectedMatch = b.call(e, "*")), b.call(e, "[s!='']:x"), v.push("!=", $);
                        }),
                    (f = f.length && new RegExp(f.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Q.test(g.compareDocumentPosition)),
                    (y =
                        t || Q.test(g.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      a = t && t.parentNode;
                                  return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (q = t
                        ? function (e, t) {
                              if (e === t) return (u = !0), 0;
                              var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  a ||
                                  (1 & (a = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === a)
                                      ? e == h || (e.ownerDocument == k && y(k, e))
                                          ? -1
                                          : t == h || (t.ownerDocument == k && y(k, t))
                                          ? 1
                                          : d
                                          ? S(d, e) - S(d, t)
                                          : 0
                                      : 4 & a
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (u = !0), 0;
                              var n,
                                  a = 0,
                                  i = e.parentNode,
                                  r = t.parentNode,
                                  s = [e],
                                  o = [t];
                              if (!i || !r) return e == h ? -1 : t == h ? 1 : i ? -1 : r ? 1 : d ? S(d, e) - S(d, t) : 0;
                              if (i === r) return pe(e, t);
                              for (n = e; (n = n.parentNode); ) s.unshift(n);
                              for (n = t; (n = n.parentNode); ) o.unshift(n);
                              for (; s[a] === o[a]; ) a++;
                              return a ? pe(s[a], o[a]) : s[a] == k ? -1 : o[a] == k ? 1 : 0;
                          })),
                h
            );
        }),
        (oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
            if ((p(e), n.matchesSelector && m && !z[t + " "] && (!v || !v.test(t)) && (!f || !f.test(t))))
                try {
                    var a = b.call(e, t);
                    if (a || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return a;
                } catch (e) {
                    z(t, !0);
                }
            return 0 < oe(t, h, null, [e]).length;
        }),
        (oe.contains = function (e, t) {
            return (e.ownerDocument || e) != h && p(e), y(e, t);
        }),
        (oe.attr = function (e, t) {
            (e.ownerDocument || e) != h && p(e);
            var i = a.attrHandle[t.toLowerCase()],
                r = i && T.call(a.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
            return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (oe.escape = function (e) {
            return (e + "").replace(ae, ie);
        }),
        (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
            var t,
                a = [],
                i = 0,
                r = 0;
            if (((u = !n.detectDuplicates), (d = !n.sortStable && e.slice(0)), e.sort(q), u)) {
                for (; (t = e[r++]); ) t === e[r] && (i = a.push(r));
                for (; i--; ) e.splice(a[i], 1);
            }
            return (d = null), e;
        }),
        (i = oe.getText = function (e) {
            var t,
                n = "",
                a = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[a++]); ) n += i(t);
            return n;
        }),
        ((a = oe.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = A[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                            A(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (e, t, n) {
                    return function (a) {
                        var i = oe.attr(a, e);
                        return null == i
                            ? "!=" === t
                            : !t ||
                                  ((i += ""),
                                  "=" === t
                                      ? i === n
                                      : "!=" === t
                                      ? i !== n
                                      : "^=" === t
                                      ? n && 0 === i.indexOf(n)
                                      : "*=" === t
                                      ? n && -1 < i.indexOf(n)
                                      : "$=" === t
                                      ? n && i.slice(-n.length) === n
                                      : "~=" === t
                                      ? -1 < (" " + i.replace(H, " ") + " ").indexOf(n)
                                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (e, t, n, a, i) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        o = "of-type" === t;
                    return 1 === a && 0 === i
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, n, l) {
                              var c,
                                  d,
                                  u,
                                  p,
                                  h,
                                  g,
                                  m = r !== s ? "nextSibling" : "previousSibling",
                                  f = t.parentNode,
                                  v = o && t.nodeName.toLowerCase(),
                                  b = !l && !o,
                                  y = !1;
                              if (f) {
                                  if (r) {
                                      for (; m; ) {
                                          for (p = t; (p = p[m]); ) if (o ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                          g = m = "only" === e && !g && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((g = [s ? f.firstChild : f.lastChild]), s && b)) {
                                      for (
                                          y = (h = (c = (d = (u = (p = f)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], p = h && f.childNodes[h];
                                          (p = (++h && p && p[m]) || (y = h = 0) || g.pop());

                                      )
                                          if (1 === p.nodeType && ++y && p === t) {
                                              d[e] = [x, h, y];
                                              break;
                                          }
                                  } else if ((b && (y = h = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === y))
                                      for (
                                          ;
                                          (p = (++h && p && p[m]) || (y = h = 0) || g.pop()) &&
                                          ((o ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [x, y]), p !== t));

                                      );
                                  return (y -= i) === a || (y % a == 0 && 0 <= y / a);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var n,
                        i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[w]
                        ? i(t)
                        : 1 < i.length
                        ? ((n = [e, e, "", t]),
                          a.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ce(function (e, n) {
                                    for (var a, r = i(e, t), s = r.length; s--; ) e[(a = S(e, r[s]))] = !(n[a] = r[s]);
                                })
                              : function (e) {
                                    return i(e, 0, n);
                                })
                        : i;
                },
            },
            pseudos: {
                not: ce(function (e) {
                    var t = [],
                        n = [],
                        a = o(e.replace(M, "$1"));
                    return a[w]
                        ? ce(function (e, t, n, i) {
                              for (var r, s = a(e, null, i, []), o = e.length; o--; ) (r = s[o]) && (e[o] = !(t[o] = r));
                          })
                        : function (e, i, r) {
                              return (t[0] = e), a(t, null, r, n), (t[0] = null), !n.pop();
                          };
                }),
                has: ce(function (e) {
                    return function (t) {
                        return 0 < oe(e, t).length;
                    };
                }),
                contains: ce(function (e) {
                    return (
                        (e = e.replace(te, ne)),
                        function (t) {
                            return -1 < (t.textContent || i(t)).indexOf(e);
                        }
                    );
                }),
                lang: ce(function (e) {
                    return (
                        X.test(e || "") || oe.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                            var n;
                            do {
                                if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === g;
                },
                focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !a.pseudos.empty(e);
                },
                header: function (e) {
                    return K.test(e.nodeName);
                },
                input: function (e) {
                    return Y.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: fe(function () {
                    return [0];
                }),
                last: fe(function (e, t) {
                    return [t - 1];
                }),
                eq: fe(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: fe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: fe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: fe(function (e, t, n) {
                    for (var a = n < 0 ? n + t : t < n ? t : n; 0 <= --a; ) e.push(a);
                    return e;
                }),
                gt: fe(function (e, t, n) {
                    for (var a = n < 0 ? n + t : n; ++a < t; ) e.push(a);
                    return e;
                }),
            },
        }).pseudos.nth = a.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            a.pseudos[t] = he(t);
        for (t in { submit: !0, reset: !0 }) a.pseudos[t] = ge(t);
        function be() {}
        function ye(e) {
            for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
            return a;
        }
        function we(e, t, n) {
            var a = t.dir,
                i = t.next,
                r = i || a,
                s = n && "parentNode" === r,
                o = _++;
            return t.first
                ? function (t, n, i) {
                      for (; (t = t[a]); ) if (1 === t.nodeType || s) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, l) {
                      var c,
                          d,
                          u,
                          p = [x, o];
                      if (l) {
                          for (; (t = t[a]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                      } else
                          for (; (t = t[a]); )
                              if (1 === t.nodeType || s)
                                  if (((d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[a] || t;
                                  else {
                                      if ((c = d[r]) && c[0] === x && c[1] === o) return (p[2] = c[2]);
                                      if (((d[r] = p)[2] = e(t, n, l))) return !0;
                                  }
                      return !1;
                  };
        }
        function ke(e) {
            return 1 < e.length
                ? function (t, n, a) {
                      for (var i = e.length; i--; ) if (!e[i](t, n, a)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function xe(e, t, n, a, i) {
            for (var r, s = [], o = 0, l = e.length, c = null != t; o < l; o++) (r = e[o]) && ((n && !n(r, a, i)) || (s.push(r), c && t.push(o)));
            return s;
        }
        function _e(e, t, n, a, i, r) {
            return (
                a && !a[w] && (a = _e(a)),
                i && !i[w] && (i = _e(i, r)),
                ce(function (r, s, o, l) {
                    var c,
                        d,
                        u,
                        p = [],
                        h = [],
                        g = s.length,
                        m =
                            r ||
                            (function (e, t, n) {
                                for (var a = 0, i = t.length; a < i; a++) oe(e, t[a], n);
                                return n;
                            })(t || "*", o.nodeType ? [o] : o, []),
                        f = !e || (!r && t) ? m : xe(m, p, e, o, l),
                        v = n ? (i || (r ? e : g || a) ? [] : s) : f;
                    if ((n && n(f, v, o, l), a)) for (c = xe(v, h), a(c, [], o, l), d = c.length; d--; ) (u = c[d]) && (v[h[d]] = !(f[h[d]] = u));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (c = [], d = v.length; d--; ) (u = v[d]) && c.push((f[d] = u));
                                i(null, (v = []), c, l);
                            }
                            for (d = v.length; d--; ) (u = v[d]) && -1 < (c = i ? S(r, u) : p[d]) && (r[c] = !(s[c] = u));
                        }
                    } else (v = xe(v === s ? v.splice(g, v.length) : v)), i ? i(null, s, v, l) : W.apply(s, v);
                })
            );
        }
        function Ae(e) {
            for (
                var t,
                    n,
                    i,
                    r = e.length,
                    s = a.relative[e[0].type],
                    o = s || a.relative[" "],
                    l = s ? 1 : 0,
                    d = we(
                        function (e) {
                            return e === t;
                        },
                        o,
                        !0
                    ),
                    u = we(
                        function (e) {
                            return -1 < S(t, e);
                        },
                        o,
                        !0
                    ),
                    p = [
                        function (e, n, a) {
                            var i = (!s && (a || n !== c)) || ((t = n).nodeType ? d(e, n, a) : u(e, n, a));
                            return (t = null), i;
                        },
                    ];
                l < r;
                l++
            )
                if ((n = a.relative[e[l].type])) p = [we(ke(p), n)];
                else {
                    if ((n = a.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (i = ++l; i < r && !a.relative[e[i].type]; i++);
                        return _e(1 < l && ke(p), 1 < l && ye(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(M, "$1"), n, l < i && Ae(e.slice(l, i)), i < r && Ae((e = e.slice(i))), i < r && ye(e));
                    }
                    p.push(n);
                }
            return ke(p);
        }
        return (
            (be.prototype = a.filters = a.pseudos),
            (a.setFilters = new be()),
            (s = oe.tokenize = function (e, t) {
                var n,
                    i,
                    r,
                    s,
                    o,
                    l,
                    c,
                    d = j[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (o = e, l = [], c = a.preFilter; o; ) {
                    for (s in ((n && !(i = B.exec(o))) || (i && (o = o.slice(i[0].length) || o), l.push((r = []))),
                    (n = !1),
                    (i = O.exec(o)) && ((n = i.shift()), r.push({ value: n, type: i[0].replace(M, " ") }), (o = o.slice(n.length))),
                    a.filter))
                        !(i = V[s].exec(o)) || (c[s] && !(i = c[s](i))) || ((n = i.shift()), r.push({ value: n, type: s, matches: i }), (o = o.slice(n.length)));
                    if (!n) break;
                }
                return t ? o.length : o ? oe.error(e) : j(e, l).slice(0);
            }),
            (o = oe.compile = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    l,
                    d,
                    u = [],
                    g = [],
                    f = C[e + " "];
                if (!f) {
                    for (t || (t = s(e)), n = t.length; n--; ) (f = Ae(t[n]))[w] ? u.push(f) : g.push(f);
                    (f = C(
                        e,
                        ((i = g),
                        (o = 0 < (r = u).length),
                        (l = 0 < i.length),
                        (d = function (e, t, n, s, d) {
                            var u,
                                g,
                                f,
                                v = 0,
                                b = "0",
                                y = e && [],
                                w = [],
                                k = c,
                                _ = e || (l && a.find.TAG("*", d)),
                                A = (x += null == k ? 1 : Math.random() || 0.1),
                                j = _.length;
                            for (d && (c = t == h || t || d); b !== j && null != (u = _[b]); b++) {
                                if (l && u) {
                                    for (g = 0, t || u.ownerDocument == h || (p(u), (n = !m)); (f = i[g++]); )
                                        if (f(u, t || h, n)) {
                                            s.push(u);
                                            break;
                                        }
                                    d && (x = A);
                                }
                                o && ((u = !f && u) && v--, e && y.push(u));
                            }
                            if (((v += b), o && b !== v)) {
                                for (g = 0; (f = r[g++]); ) f(y, w, t, n);
                                if (e) {
                                    if (0 < v) for (; b--; ) y[b] || w[b] || (w[b] = L.call(s));
                                    w = xe(w);
                                }
                                W.apply(s, w), d && !e && 0 < w.length && 1 < v + r.length && oe.uniqueSort(s);
                            }
                            return d && ((x = A), (c = k)), y;
                        }),
                        o ? ce(d) : d)
                    )).selector = e;
                }
                return f;
            }),
            (l = oe.select = function (e, t, n, i) {
                var r,
                    l,
                    c,
                    d,
                    u,
                    p = "function" == typeof e && e,
                    h = !i && s((e = p.selector || e));
                if (((n = n || []), 1 === h.length)) {
                    if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && m && a.relative[l[1].type]) {
                        if (!(t = (a.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                    }
                    for (r = V.needsContext.test(e) ? 0 : l.length; r-- && ((c = l[r]), !a.relative[(d = c.type)]); )
                        if ((u = a.find[d]) && (i = u(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                            if ((l.splice(r, 1), !(e = i.length && ye(l)))) return W.apply(n, i), n;
                            break;
                        }
                }
                return (p || o(e, h))(i, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (n.sortStable = w.split("").sort(q).join("") === w),
            (n.detectDuplicates = !!u),
            p(),
            (n.sortDetached = de(function (e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            de(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ue("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                de(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ue("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            de(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ue(N, function (e, t, n) {
                    var a;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
                }),
            oe
        );
    })(e);
    (k.find = _), (k.expr = _.selectors), (k.expr[":"] = k.expr.pseudos), (k.uniqueSort = k.unique = _.uniqueSort), (k.text = _.getText), (k.isXMLDoc = _.isXML), (k.contains = _.contains), (k.escapeSelector = _.escape);
    var A = function (e, t, n) {
            for (var a = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    a.push(e);
                }
            return a;
        },
        j = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        C = k.expr.match.needsContext;
    function z(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function T(e, t, n) {
        return g(t)
            ? k.grep(e, function (e, a) {
                  return !!t.call(e, a, e) !== n;
              })
            : t.nodeType
            ? k.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? k.grep(e, function (e) {
                  return -1 < o.call(t, e) !== n;
              })
            : k.filter(t, e, n);
    }
    (k.filter = function (e, t, n) {
        var a = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === a.nodeType
                ? k.find.matchesSelector(a, e)
                    ? [a]
                    : []
                : k.find.matches(
                      e,
                      k.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        k.fn.extend({
            find: function (e) {
                var t,
                    n,
                    a = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        k(e).filter(function () {
                            for (t = 0; t < a; t++) if (k.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < a; t++) k.find(e, i[t], n);
                return 1 < a ? k.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(T(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(T(this, e || [], !0));
            },
            is: function (e) {
                return !!T(this, "string" == typeof e && C.test(e) ? k(e) : e || [], !1).length;
            },
        });
    var I,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((k.fn.init = function (e, t, n) {
        var a, i;
        if (!e) return this;
        if (((n = n || I), "string" == typeof e)) {
            if (!(a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || (!a[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (a[1]) {
                if (((t = t instanceof k ? t[0] : t), k.merge(this, k.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), q.test(a[1]) && k.isPlainObject(t))) for (a in t) g(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                return this;
            }
            return (i = f.getElementById(a[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(k)) : k.makeArray(e, this);
    }).prototype = k.fn),
        (I = k(f));
    var E = /^(?:parents|prev(?:Until|All))/,
        W = { children: !0, contents: !0, next: !0, prev: !0 };
    function G(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    k.fn.extend({
        has: function (e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                a = 0,
                i = this.length,
                r = [],
                s = "string" != typeof e && k(e);
            if (!C.test(e))
                for (; a < i; a++)
                    for (n = this[a]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            r.push(n);
                            break;
                        }
            return this.pushStack(1 < r.length ? k.uniqueSort(r) : r);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? o.call(k(e), this[0]) : o.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        k.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return A(e, "parentNode", n);
                },
                next: function (e) {
                    return G(e, "nextSibling");
                },
                prev: function (e) {
                    return G(e, "previousSibling");
                },
                nextAll: function (e) {
                    return A(e, "nextSibling");
                },
                prevAll: function (e) {
                    return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return j((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return j(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (z(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
                },
            },
            function (e, t) {
                k.fn[e] = function (n, a) {
                    var i = k.map(this, t, n);
                    return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (i = k.filter(a, i)), 1 < this.length && (W[e] || k.uniqueSort(i), E.test(e) && i.reverse()), this.pushStack(i);
                };
            }
        );
    var S = /[^\x20\t\r\n\f]+/g;
    function N(e) {
        return e;
    }
    function P(e) {
        throw e;
    }
    function R(e, t, n, a) {
        var i;
        try {
            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(a));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (k.Callbacks = function (e) {
        var t, n;
        e =
            "string" == typeof e
                ? ((t = e),
                  (n = {}),
                  k.each(t.match(S) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : k.extend({}, e);
        var a,
            i,
            r,
            s,
            o = [],
            l = [],
            c = -1,
            d = function () {
                for (s = s || e.once, r = a = !0; l.length; c = -1) for (i = l.shift(); ++c < o.length; ) !1 === o[c].apply(i[0], i[1]) && e.stopOnFalse && ((c = o.length), (i = !1));
                e.memory || (i = !1), (a = !1), s && (o = i ? [] : "");
            },
            u = {
                add: function () {
                    return (
                        o &&
                            (i && !a && ((c = o.length - 1), l.push(i)),
                            (function t(n) {
                                k.each(n, function (n, a) {
                                    g(a) ? (e.unique && u.has(a)) || o.push(a) : a && a.length && "string" !== y(a) && t(a);
                                });
                            })(arguments),
                            i && !a && d()),
                        this
                    );
                },
                remove: function () {
                    return (
                        k.each(arguments, function (e, t) {
                            for (var n; -1 < (n = k.inArray(t, o, n)); ) o.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < k.inArray(e, o) : 0 < o.length;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (s = l = []), (o = i = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (s = l = []), i || a || (o = i = ""), this;
                },
                locked: function () {
                    return !!s;
                },
                fireWith: function (e, t) {
                    return s || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), a || d()), this;
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return u;
    }),
        k.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                        ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"],
                    ],
                    a = "pending",
                    i = {
                        state: function () {
                            return a;
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return i.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return k
                                .Deferred(function (t) {
                                    k.each(n, function (n, a) {
                                        var i = g(e[a[4]]) && e[a[4]];
                                        r[a[1]](function () {
                                            var e = i && i.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this, i ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, a, i) {
                            var r = 0;
                            function s(t, n, a, i) {
                                return function () {
                                    var o = this,
                                        l = arguments,
                                        c = function () {
                                            var e, c;
                                            if (!(t < r)) {
                                                if ((e = a.apply(o, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    g(c)
                                                        ? i
                                                            ? c.call(e, s(r, n, N, i), s(r, n, P, i))
                                                            : (r++, c.call(e, s(r, n, N, i), s(r, n, P, i), s(r, n, N, n.notifyWith)))
                                                        : (a !== N && ((o = void 0), (l = [e])), (i || n.resolveWith)(o, l));
                                            }
                                        },
                                        d = i
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (e) {
                                                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, d.stackTrace), r <= t + 1 && (a !== P && ((o = void 0), (l = [e])), n.rejectWith(o, l));
                                                  }
                                              };
                                    t ? d() : (k.Deferred.getStackHook && (d.stackTrace = k.Deferred.getStackHook()), e.setTimeout(d));
                                };
                            }
                            return k
                                .Deferred(function (e) {
                                    n[0][3].add(s(0, e, g(i) ? i : N, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : N)), n[2][3].add(s(0, e, g(a) ? a : P));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? k.extend(e, i) : i;
                        },
                    },
                    r = {};
                return (
                    k.each(n, function (e, t) {
                        var s = t[2],
                            o = t[5];
                        (i[t[1]] = s.add),
                            o &&
                                s.add(
                                    function () {
                                        a = o;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            s.add(t[3].fire),
                            (r[t[0]] = function () {
                                return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                            }),
                            (r[t[0] + "With"] = s.fireWith);
                    }),
                    i.promise(r),
                    t && t.call(r, r),
                    r
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    a = Array(n),
                    r = i.call(arguments),
                    s = k.Deferred(),
                    o = function (e) {
                        return function (n) {
                            (a[e] = this), (r[e] = 1 < arguments.length ? i.call(arguments) : n), --t || s.resolveWith(a, r);
                        };
                    };
                if (t <= 1 && (R(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
                for (; n--; ) R(r[n], o(n), s.reject);
                return s.promise();
            },
        });
    var D = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (k.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && D.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (k.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var $ = k.Deferred();
    function H() {
        f.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), k.ready();
    }
    (k.fn.ready = function (e) {
        return (
            $.then(e).catch(function (e) {
                k.readyException(e);
            }),
            this
        );
    }),
        k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait) || $.resolveWith(f, [k]);
            },
        }),
        (k.ready.then = $.then),
        "complete" === f.readyState || ("loading" !== f.readyState && !f.documentElement.doScroll) ? e.setTimeout(k.ready) : (f.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
    var M = function (e, t, n, a, i, r, s) {
            var o = 0,
                l = e.length,
                c = null == n;
            if ("object" === y(n)) for (o in ((i = !0), n)) M(e, t, o, n[o], !0, r, s);
            else if (
                void 0 !== a &&
                ((i = !0),
                g(a) || (s = !0),
                c &&
                    (s
                        ? (t.call(e, a), (t = null))
                        : ((c = t),
                          (t = function (e, t, n) {
                              return c.call(k(e), n);
                          }))),
                t)
            )
                for (; o < l; o++) t(e[o], n, s ? a : a.call(e[o], o, t(e[o], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        B = /^-ms-/,
        O = /-([a-z])/g;
    function F(e, t) {
        return t.toUpperCase();
    }
    function U(e) {
        return e.replace(B, "ms-").replace(O, F);
    }
    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function V() {
        this.expando = k.expando + V.uid++;
    }
    (V.uid = 1),
        (V.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), X(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var a,
                    i = this.cache(e);
                if ("string" == typeof t) i[U(t)] = n;
                else for (a in t) i[U(a)] = t[a];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    a = e[this.expando];
                if (void 0 !== a) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in a ? [t] : t.match(S) || []).length;
                        for (; n--; ) delete a[t[n]];
                    }
                    (void 0 === t || k.isEmptyObject(a)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t);
            },
        });
    var J = new V(),
        Y = new V(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;
    function Z(e, t, n) {
        var a, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((a = "data-" + t.replace(Q, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(a)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                Y.set(e, t, n);
            } else n = void 0;
        return n;
    }
    k.extend({
        hasData: function (e) {
            return Y.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        removeData: function (e, t) {
            Y.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        k.fn.extend({
            data: function (e, t) {
                var n,
                    a,
                    i,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = Y.get(r)), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--; ) s[n] && 0 === (a = s[n].name).indexOf("data-") && ((a = U(a.slice(5))), Z(r, a, i[a]));
                        J.set(r, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          Y.set(this, e);
                      })
                    : M(
                          this,
                          function (t) {
                              var n;
                              if (r && void 0 === t) return void 0 !== (n = Y.get(r, e)) ? n : void 0 !== (n = Z(r, e)) ? n : void 0;
                              this.each(function () {
                                  Y.set(this, e, t);
                              });
                          },
                          null,
                          t,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Y.remove(this, e);
                });
            },
        }),
        k.extend({
            queue: function (e, t, n) {
                var a;
                if (e) return (t = (t || "fx") + "queue"), (a = J.get(e, t)), n && (!a || Array.isArray(n) ? (a = J.access(e, t, k.makeArray(n))) : a.push(n)), a || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                    a = n.length,
                    i = n.shift(),
                    r = k._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), a--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        i.call(
                            e,
                            function () {
                                k.dequeue(e, t);
                            },
                            r
                        )),
                    !a && r && r.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: k.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        k.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? k.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = k.queue(this, e, t);
                              k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    k.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    a = 1,
                    i = k.Deferred(),
                    r = this,
                    s = this.length,
                    o = function () {
                        --a || i.resolveWith(r, [r]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = J.get(r[s], e + "queueHooks")) && n.empty && (a++, n.empty.add(o));
                return o(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ae = f.documentElement,
        ie = function (e) {
            return k.contains(e.ownerDocument, e);
        },
        re = { composed: !0 };
    ae.getRootNode &&
        (ie = function (e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument;
        });
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === k.css(e, "display"));
    };
    function oe(e, t, n, a) {
        var i,
            r,
            s = 20,
            o = a
                ? function () {
                      return a.cur();
                  }
                : function () {
                      return k.css(e, t, "");
                  },
            l = o(),
            c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (k.cssNumber[t] || ("px" !== c && +l)) && te.exec(k.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; s--; ) k.style(e, t, d + c), (1 - r) * (1 - (r = o() / l || 0.5)) <= 0 && (s = 0), (d /= r);
            (d *= 2), k.style(e, t, d + c), (n = n || []);
        }
        return n && ((d = +d || +l || 0), (i = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), a && ((a.unit = c), (a.start = d), (a.end = i))), i;
    }
    var le = {};
    function ce(e, t) {
        for (var n, a, i, r, s, o, l, c = [], d = 0, u = e.length; d < u; d++)
            (a = e[d]).style &&
                ((n = a.style.display),
                t
                    ? ("none" === n && ((c[d] = J.get(a, "display") || null), c[d] || (a.style.display = "")),
                      "" === a.style.display &&
                          se(a) &&
                          (c[d] =
                              ((l = s = r = void 0),
                              (s = (i = a).ownerDocument),
                              (o = i.nodeName),
                              (l = le[o]) || ((r = s.body.appendChild(s.createElement(o))), (l = k.css(r, "display")), r.parentNode.removeChild(r), "none" === l && (l = "block"), (le[o] = l)))))
                    : "none" !== n && ((c[d] = "none"), J.set(a, "display", n)));
        for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
        return e;
    }
    k.fn.extend({
        show: function () {
            return ce(this, !0);
        },
        hide: function () {
            return ce(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      se(this) ? k(this).show() : k(this).hide();
                  });
        },
    });
    var de,
        ue,
        pe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i;
    (de = f.createDocumentFragment().appendChild(f.createElement("div"))),
        (ue = f.createElement("input")).setAttribute("type", "radio"),
        ue.setAttribute("checked", "checked"),
        ue.setAttribute("name", "t"),
        de.appendChild(ue),
        (h.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (de.innerHTML = "<textarea>x</textarea>"),
        (h.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
        (de.innerHTML = "<option></option>"),
        (h.option = !!de.lastChild);
    var me = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function fe(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && z(e, t)) ? k.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, a = e.length; n < a; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead), (me.th = me.td), h.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var be = /<|&#?\w+;/;
    function ye(e, t, n, a, i) {
        for (var r, s, o, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === y(r)) k.merge(p, r.nodeType ? [r] : r);
                else if (be.test(r)) {
                    for (s = s || u.appendChild(t.createElement("div")), o = (he.exec(r) || ["", ""])[1].toLowerCase(), l = me[o] || me._default, s.innerHTML = l[1] + k.htmlPrefilter(r) + l[2], d = l[0]; d--; ) s = s.lastChild;
                    k.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
        for (u.textContent = "", h = 0; (r = p[h++]); )
            if (a && -1 < k.inArray(r, a)) i && i.push(r);
            else if (((c = ie(r)), (s = fe(u.appendChild(r), "script")), c && ve(s), n)) for (d = 0; (r = s[d++]); ) ge.test(r.type || "") && n.push(r);
        return u;
    }
    var we = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
        return !0;
    }
    function Ae() {
        return !1;
    }
    function je(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return f.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ce(e, t, n, a, i, r) {
        var s, o;
        if ("object" == typeof t) {
            for (o in ("string" != typeof n && ((a = a || n), (n = void 0)), t)) Ce(e, o, n, a, t[o], r);
            return e;
        }
        if ((null == a && null == i ? ((i = n), (a = n = void 0)) : null == i && ("string" == typeof n ? ((i = a), (a = void 0)) : ((i = a), (a = n), (n = void 0))), !1 === i)) i = Ae;
        else if (!i) return e;
        return (
            1 === r &&
                ((s = i),
                ((i = function (e) {
                    return k().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = k.guid++))),
            e.each(function () {
                k.event.add(this, t, i, a, n);
            })
        );
    }
    function ze(e, t, n) {
        n
            ? (J.set(e, t, !1),
              k.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                      var a,
                          r,
                          s = J.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                          if (s.length) (k.event.special[t] || {}).delegateType && e.stopPropagation();
                          else if (((s = i.call(arguments)), J.set(this, t, s), (a = n(this, t)), this[t](), s !== (r = J.get(this, t)) || a ? J.set(this, t, !1) : (r = {}), s !== r))
                              return e.stopImmediatePropagation(), e.preventDefault(), r.value;
                      } else s.length && (J.set(this, t, { value: k.event.trigger(k.extend(s[0], k.Event.prototype), s.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === J.get(e, t) && k.event.add(e, t, _e);
    }
    (k.event = {
        global: {},
        add: function (e, t, n, a, i) {
            var r,
                s,
                o,
                l,
                c,
                d,
                u,
                p,
                h,
                g,
                m,
                f = J.get(e);
            if (X(e))
                for (
                    n.handler && ((n = (r = n).handler), (i = r.selector)),
                        i && k.find.matchesSelector(ae, i),
                        n.guid || (n.guid = k.guid++),
                        (l = f.events) || (l = f.events = Object.create(null)),
                        (s = f.handle) ||
                            (s = f.handle = function (t) {
                                return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        c = (t = (t || "").match(S) || [""]).length;
                    c--;

                )
                    (h = m = (o = xe.exec(t[c]) || [])[1]),
                        (g = (o[2] || "").split(".").sort()),
                        h &&
                            ((u = k.event.special[h] || {}),
                            (h = (i ? u.delegateType : u.bindType) || h),
                            (u = k.event.special[h] || {}),
                            (d = k.extend({ type: h, origType: m, data: a, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: g.join(".") }, r)),
                            (p = l[h]) || (((p = l[h] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, a, g, s)) || (e.addEventListener && e.addEventListener(h, s))),
                            u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            (k.event.global[h] = !0));
        },
        remove: function (e, t, n, a, i) {
            var r,
                s,
                o,
                l,
                c,
                d,
                u,
                p,
                h,
                g,
                m,
                f = J.hasData(e) && J.get(e);
            if (f && (l = f.events)) {
                for (c = (t = (t || "").match(S) || [""]).length; c--; )
                    if (((h = m = (o = xe.exec(t[c]) || [])[1]), (g = (o[2] || "").split(".").sort()), h)) {
                        for (u = k.event.special[h] || {}, p = l[(h = (a ? u.delegateType : u.bindType) || h)] || [], o = o[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--; )
                            (d = p[r]),
                                (!i && m !== d.origType) ||
                                    (n && n.guid !== d.guid) ||
                                    (o && !o.test(d.namespace)) ||
                                    (a && a !== d.selector && ("**" !== a || !d.selector)) ||
                                    (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        s && !p.length && ((u.teardown && !1 !== u.teardown.call(e, g, f.handle)) || k.removeEvent(e, h, f.handle), delete l[h]);
                    } else for (h in l) k.event.remove(e, h + t[c], n, a, !0);
                k.isEmptyObject(l) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                a,
                i,
                r,
                s,
                o = new Array(arguments.length),
                l = k.event.fix(e),
                c = (J.get(this, "events") || Object.create(null))[l.type] || [],
                d = k.event.special[l.type] || {};
            for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
            if (((l.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, l))) {
                for (s = k.event.handlers.call(this, l, c), t = 0; (i = s[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        (l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace)) ||
                            ((l.handleObj = r), (l.data = r.data), void 0 !== (a = ((k.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, o)) && !1 === (l.result = a) && (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (e, t) {
            var n,
                a,
                i,
                r,
                s,
                o = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(i = (a = t[n]).selector + " ")] && (s[i] = a.needsContext ? -1 < k(i, this).index(c) : k.find(i, this, null, [c]).length), s[i] && r.push(a);
                        r.length && o.push({ elem: c, handlers: r });
                    }
            return (c = this), l < t.length && o.push({ elem: c, handlers: t.slice(l) }), o;
        },
        addProp: function (e, t) {
            Object.defineProperty(k.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[k.expando] ? e : new k.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && z(t, "input") && ze(t, "click", _e), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && z(t, "input") && ze(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (pe.test(t.type) && t.click && z(t, "input") && J.get(t, "click")) || z(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (k.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function (e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? _e : Ae),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && k.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Ae,
            isPropagationStopped: Ae,
            isImmediatePropagationStopped: Ae,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = _e), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = _e), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = _e), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        k.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ke.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            k.event.addProp
        ),
        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            k.event.special[e] = {
                setup: function () {
                    return ze(this, e, je), !1;
                },
                trigger: function () {
                    return ze(this, e), !0;
                },
                delegateType: t,
            };
        }),
        k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            k.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        a = e.relatedTarget,
                        i = e.handleObj;
                    return (a && (a === this || k.contains(this, a))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        k.fn.extend({
            on: function (e, t, n, a) {
                return Ce(this, e, t, n, a);
            },
            one: function (e, t, n, a) {
                return Ce(this, e, t, n, a, 1);
            },
            off: function (e, t, n) {
                var a, i;
                if (e && e.preventDefault && e.handleObj) return (a = e.handleObj), k(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Ae),
                    this.each(function () {
                        k.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var qe = /<script|<style|<link/i,
        Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return (z(e, "table") && z(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0]) || e;
    }
    function Ee(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Ge(e, t) {
        var n, a, i, r, s, o;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.get(e).events)) for (i in (J.remove(t, "handle events"), o)) for (n = 0, a = o[i].length; n < a; n++) k.event.add(t, i, o[i][n]);
            Y.hasData(e) && ((r = Y.access(e)), (s = k.extend({}, r)), Y.set(t, s));
        }
    }
    function Se(e, t, n, a) {
        t = r(t);
        var i,
            s,
            o,
            l,
            c,
            d,
            u = 0,
            p = e.length,
            m = p - 1,
            f = t[0],
            v = g(f);
        if (v || (1 < p && "string" == typeof f && !h.checkClone && Te.test(f)))
            return e.each(function (i) {
                var r = e.eq(i);
                v && (t[0] = f.call(this, i, r.html())), Se(r, t, n, a);
            });
        if (p && ((s = (i = ye(t, e[0].ownerDocument, !1, e, a)).firstChild), 1 === i.childNodes.length && (i = s), s || a)) {
            for (l = (o = k.map(fe(i, "script"), Ee)).length; u < p; u++) (c = i), u !== m && ((c = k.clone(c, !0, !0)), l && k.merge(o, fe(c, "script"))), n.call(e[u], c, u);
            if (l)
                for (d = o[o.length - 1].ownerDocument, k.map(o, We), u = 0; u < l; u++)
                    (c = o[u]),
                        ge.test(c.type || "") &&
                            !J.access(c, "globalEval") &&
                            k.contains(d, c) &&
                            (c.src && "module" !== (c.type || "").toLowerCase() ? k._evalUrl && !c.noModule && k._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, d) : b(c.textContent.replace(Ie, ""), c, d));
        }
        return e;
    }
    function Ne(e, t, n) {
        for (var a, i = t ? k.filter(t, e) : e, r = 0; null != (a = i[r]); r++) n || 1 !== a.nodeType || k.cleanData(fe(a)), a.parentNode && (n && ie(a) && ve(fe(a, "script")), a.parentNode.removeChild(a));
        return e;
    }
    k.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var a,
                i,
                r,
                s,
                o,
                l,
                c,
                d = e.cloneNode(!0),
                u = ie(e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || k.isXMLDoc(e)))
                for (s = fe(d), a = 0, i = (r = fe(e)).length; a < i; a++)
                    (o = r[a]), "input" === (c = (l = s[a]).nodeName.toLowerCase()) && pe.test(o.type) ? (l.checked = o.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = o.defaultValue);
            if (t)
                if (n) for (r = r || fe(e), s = s || fe(d), a = 0, i = r.length; a < i; a++) Ge(r[a], s[a]);
                else Ge(e, d);
            return 0 < (s = fe(d, "script")).length && ve(s, !u && fe(e, "script")), d;
        },
        cleanData: function (e) {
            for (var t, n, a, i = k.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (X(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events) for (a in t.events) i[a] ? k.event.remove(n, a) : k.removeEvent(n, a, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[Y.expando] && (n[Y.expando] = void 0);
                }
        },
    }),
        k.fn.extend({
            detach: function (e) {
                return Ne(this, e, !0);
            },
            remove: function (e) {
                return Ne(this, e);
            },
            text: function (e) {
                return M(
                    this,
                    function (e) {
                        return void 0 === e
                            ? k.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Se(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Se(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Se(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Se(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(fe(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return k.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return M(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            a = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !qe.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = k.htmlPrefilter(e);
                            try {
                                for (; n < a; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(fe(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Se(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        k.inArray(this, e) < 0 && (k.cleanData(fe(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            k.fn[e] = function (e) {
                for (var n, a = [], i = k(e), r = i.length - 1, o = 0; o <= r; o++) (n = o === r ? this : this.clone(!0)), k(i[o])[t](n), s.apply(a, n.get());
                return this.pushStack(a);
            };
        });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        De = function (e, t, n) {
            var a,
                i,
                r = {};
            for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((a = n.call(e)), t)) e.style[i] = r[i];
            return a;
        },
        $e = new RegExp(ne.join("|"), "i");
    function He(e, t, n) {
        var a,
            i,
            r,
            s,
            o = e.style;
        return (
            (n = n || Re(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) || ie(e) || (s = k.style(e, t)),
                !h.pixelBoxStyles() && Pe.test(s) && $e.test(t) && ((a = o.width), (i = o.minWidth), (r = o.maxWidth), (o.minWidth = o.maxWidth = o.width = s), (s = n.width), (o.width = a), (o.minWidth = i), (o.maxWidth = r))),
            void 0 !== s ? s + "" : s
        );
    }
    function Me(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (d) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ae.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                (a = "1%" !== t.top),
                    (l = 12 === n(t.marginLeft)),
                    (d.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (i = 36 === n(t.width)),
                    (d.style.position = "absolute"),
                    (r = 12 === n(d.offsetWidth / 3)),
                    ae.removeChild(c),
                    (d = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var a,
            i,
            r,
            s,
            o,
            l,
            c = f.createElement("div"),
            d = f.createElement("div");
        d.style &&
            ((d.style.backgroundClip = "content-box"),
            (d.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === d.style.backgroundClip),
            k.extend(h, {
                boxSizingReliable: function () {
                    return t(), i;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), a;
                },
                reliableMarginLeft: function () {
                    return t(), l;
                },
                scrollboxSize: function () {
                    return t(), r;
                },
                reliableTrDimensions: function () {
                    var t, n, a, i;
                    return (
                        null == o &&
                            ((t = f.createElement("table")),
                            (n = f.createElement("tr")),
                            (a = f.createElement("div")),
                            (t.style.cssText = "position:absolute;left:-11111px"),
                            (n.style.height = "1px"),
                            (a.style.height = "9px"),
                            ae.appendChild(t).appendChild(n).appendChild(a),
                            (i = e.getComputedStyle(n)),
                            (o = 3 < parseInt(i.height)),
                            ae.removeChild(t)),
                        o
                    );
                },
            }));
    })();
    var Be = ["Webkit", "Moz", "ms"],
        Oe = f.createElement("div").style,
        Fe = {};
    function Ue(e) {
        return (
            k.cssProps[e] ||
            Fe[e] ||
            (e in Oe
                ? e
                : (Fe[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--; ) if ((e = Be[n] + t) in Oe) return e;
                      })(e) || e))
        );
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ye = { letterSpacing: "0", fontWeight: "400" };
    function Ke(e, t, n) {
        var a = te.exec(t);
        return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t;
    }
    function Qe(e, t, n, a, i, r) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (n === (a ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += k.css(e, n + ne[s], !0, i)),
                a
                    ? ("content" === n && (l -= k.css(e, "padding" + ne[s], !0, i)), "margin" !== n && (l -= k.css(e, "border" + ne[s] + "Width", !0, i)))
                    : ((l += k.css(e, "padding" + ne[s], !0, i)), "padding" !== n ? (l += k.css(e, "border" + ne[s] + "Width", !0, i)) : (o += k.css(e, "border" + ne[s] + "Width", !0, i)));
        return !a && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - o - 0.5)) || 0), l;
    }
    function Ze(e, t, n) {
        var a = Re(e),
            i = (!h.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, a),
            r = i,
            s = He(e, t, a),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!h.boxSizingReliable() && i) || (!h.reliableTrDimensions() && z(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === k.css(e, "display", !1, a))) &&
                e.getClientRects().length &&
                ((i = "border-box" === k.css(e, "boxSizing", !1, a)), (r = o in e) && (s = e[o])),
            (s = parseFloat(s) || 0) + Qe(e, t, n || (i ? "border" : "content"), r, a, s) + "px"
        );
    }
    function et(e, t, n, a, i) {
        return new et.prototype.init(e, t, n, a, i);
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = He(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    r,
                    s,
                    o = U(t),
                    l = Ve.test(t),
                    c = e.style;
                if ((l || (t = Ue(o)), (s = k.cssHooks[t] || k.cssHooks[o]), void 0 === n)) return s && "get" in s && void 0 !== (i = s.get(e, !1, a)) ? i : c[t];
                "string" == (r = typeof n) && (i = te.exec(n)) && i[1] && ((n = oe(e, t, i)), (r = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== r || l || (n += (i && i[3]) || (k.cssNumber[o] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (s && "set" in s && void 0 === (n = s.set(e, n, a))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, a) {
            var i,
                r,
                s,
                o = U(t);
            return (
                Ve.test(t) || (t = Ue(o)),
                (s = k.cssHooks[t] || k.cssHooks[o]) && "get" in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = He(e, t, a)),
                "normal" === i && t in Ye && (i = Ye[t]),
                "" === n || n ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i) : i
            );
        },
    }),
        k.each(["height", "width"], function (e, t) {
            k.cssHooks[t] = {
                get: function (e, n, a) {
                    if (n)
                        return !Xe.test(k.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? Ze(e, t, a)
                            : De(e, Je, function () {
                                  return Ze(e, t, a);
                              });
                },
                set: function (e, n, a) {
                    var i,
                        r = Re(e),
                        s = !h.scrollboxSize() && "absolute" === r.position,
                        o = (s || a) && "border-box" === k.css(e, "boxSizing", !1, r),
                        l = a ? Qe(e, t, a, o, r) : 0;
                    return (
                        o && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Qe(e, t, "border", !1, r) - 0.5)),
                        l && (i = te.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = k.css(e, t))),
                        Ke(0, n, l)
                    );
                },
            };
        }),
        (k.cssHooks.marginLeft = Me(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(He(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            De(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (k.cssHooks[e + t] = {
                expand: function (n) {
                    for (var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) i[e + ne[a] + t] = r[a] || r[a - 2] || r[0];
                    return i;
                },
            }),
                "margin" !== e && (k.cssHooks[e + t].set = Ke);
        }),
        k.fn.extend({
            css: function (e, t) {
                return M(
                    this,
                    function (e, t, n) {
                        var a,
                            i,
                            r = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (a = Re(e), i = t.length; s < i; s++) r[t[s]] = k.css(e, t[s], !1, a);
                            return r;
                        }
                        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((k.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, a, i, r) {
                (this.elem = e), (this.prop = n), (this.easing = i || k.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = a), (this.unit = r || (k.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!k.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)]) ? (e.elem[e.prop] = e.now) : k.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (k.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (k.fx = et.prototype.init),
        (k.fx.step = {});
    var tt,
        nt,
        at,
        it,
        rt = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    function ot() {
        nt && (!1 === f.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, k.fx.interval), k.fx.tick());
    }
    function lt() {
        return (
            e.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function ct(e, t) {
        var n,
            a = 0,
            i = { height: e };
        for (t = t ? 1 : 0; a < 4; a += 2 - t) i["margin" + (n = ne[a])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function dt(e, t, n) {
        for (var a, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), r = 0, s = i.length; r < s; r++) if ((a = i[r].call(n, t, e))) return a;
    }
    function ut(e, t, n) {
        var a,
            i,
            r = 0,
            s = ut.prefilters.length,
            o = k.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (i) return !1;
                for (var t = tt || lt(), n = Math.max(0, c.startTime + c.duration - t), a = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(a);
                return o.notifyWith(e, [c, a, n]), a < 1 && s ? n : (s || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1);
            },
            c = o.promise({
                elem: e,
                props: k.extend({}, t),
                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var a = k.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(a), a;
                },
                stop: function (t) {
                    var n = 0,
                        a = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < a; n++) c.tweens[n].run(1);
                    return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this;
                },
            }),
            d = c.props;
        for (
            (function (e, t) {
                var n, a, i, r, s;
                for (n in e)
                    if (((i = t[(a = U(n))]), (r = e[n]), Array.isArray(r) && ((i = r[1]), (r = e[n] = r[0])), n !== a && ((e[a] = r), delete e[n]), (s = k.cssHooks[a]) && ("expand" in s)))
                        for (n in ((r = s.expand(r)), delete e[a], r)) (n in e) || ((e[n] = r[n]), (t[n] = i));
                    else t[a] = i;
            })(d, c.opts.specialEasing);
            r < s;
            r++
        )
            if ((a = ut.prefilters[r].call(c, e, d, c.opts))) return g(a.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = a.stop.bind(a)), a;
        return (
            k.map(d, dt, c),
            g(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            k.fx.timer(k.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (k.Animation = k.extend(ut, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(S));
            for (var n, a = 0, i = e.length; a < i; a++) (n = e[a]), (ut.tweeners[n] = ut.tweeners[n] || []), ut.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var a,
                    i,
                    r,
                    s,
                    o,
                    l,
                    c,
                    d,
                    u = "width" in t || "height" in t,
                    p = this,
                    h = {},
                    g = e.style,
                    m = e.nodeType && se(e),
                    f = J.get(e, "fxshow");
                for (a in (n.queue ||
                    (null == (s = k._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (o = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || o();
                        })),
                    s.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            s.unqueued--, k.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[a]), rt.test(i))) {
                        if ((delete t[a], (r = r || "toggle" === i), i === (m ? "hide" : "show"))) {
                            if ("show" !== i || !f || void 0 === f[a]) continue;
                            m = !0;
                        }
                        h[a] = (f && f[a]) || k.style(e, a);
                    }
                if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(h))
                    for (a in (u &&
                        1 === e.nodeType &&
                        ((n.overflow = [g.overflow, g.overflowX, g.overflowY]),
                        null == (c = f && f.display) && (c = J.get(e, "display")),
                        "none" === (d = k.css(e, "display")) && (c ? (d = c) : (ce([e], !0), (c = e.style.display || c), (d = k.css(e, "display")), ce([e]))),
                        ("inline" === d || ("inline-block" === d && null != c)) &&
                            "none" === k.css(e, "float") &&
                            (l ||
                                (p.done(function () {
                                    g.display = c;
                                }),
                                null == c && ((d = g.display), (c = "none" === d ? "" : d))),
                            (g.display = "inline-block"))),
                    n.overflow &&
                        ((g.overflow = "hidden"),
                        p.always(function () {
                            (g.overflow = n.overflow[0]), (g.overflowX = n.overflow[1]), (g.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    h))
                        l ||
                            (f ? "hidden" in f && (m = f.hidden) : (f = J.access(e, "fxshow", { display: c })),
                            r && (f.hidden = !m),
                            m && ce([e], !0),
                            p.done(function () {
                                for (a in (m || ce([e]), J.remove(e, "fxshow"), h)) k.style(e, a, h[a]);
                            })),
                            (l = dt(m ? f[a] : 0, a, p)),
                            a in f || ((f[a] = l.start), m && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
        },
    })),
        (k.speed = function (e, t, n) {
            var a = e && "object" == typeof e ? k.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
            return (
                k.fx.off ? (a.duration = 0) : "number" != typeof a.duration && (a.duration in k.fx.speeds ? (a.duration = k.fx.speeds[a.duration]) : (a.duration = k.fx.speeds._default)),
                (null != a.queue && !0 !== a.queue) || (a.queue = "fx"),
                (a.old = a.complete),
                (a.complete = function () {
                    g(a.old) && a.old.call(this), a.queue && k.dequeue(this, a.queue);
                }),
                a
            );
        }),
        k.fn.extend({
            fadeTo: function (e, t, n, a) {
                return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, a);
            },
            animate: function (e, t, n, a) {
                var i = k.isEmptyObject(e),
                    r = k.speed(t, n, a),
                    s = function () {
                        var t = ut(this, k.extend({}, e), r);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (s.finish = s), i || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
            },
            stop: function (e, t, n) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            r = k.timers,
                            s = J.get(this);
                        if (i) s[i] && s[i].stop && a(s[i]);
                        else for (i in s) s[i] && s[i].stop && st.test(i) && a(s[i]);
                        for (i = r.length; i--; ) r[i].elem !== this || (null != e && r[i].queue !== e) || (r[i].anim.stop(n), (t = !1), r.splice(i, 1));
                        (!t && n) || k.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            a = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            r = k.timers,
                            s = a ? a.length : 0;
                        for (n.finish = !0, k.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        k.each(["toggle", "show", "hide"], function (e, t) {
            var n = k.fn[t];
            k.fn[t] = function (e, a, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, a, i);
            };
        }),
        k.each({ slideDown: ct("show"), slideUp: ct("hide"), slideToggle: ct("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            k.fn[e] = function (e, n, a) {
                return this.animate(t, e, n, a);
            };
        }),
        (k.timers = []),
        (k.fx.tick = function () {
            var e,
                t = 0,
                n = k.timers;
            for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(), (tt = void 0);
        }),
        (k.fx.timer = function (e) {
            k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function () {
            nt || ((nt = !0), ot());
        }),
        (k.fx.stop = function () {
            nt = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function (t, n) {
            return (
                (t = (k.fx && k.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, a) {
                    var i = e.setTimeout(n, t);
                    a.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (at = f.createElement("input")),
        (it = f.createElement("select").appendChild(f.createElement("option"))),
        (at.type = "checkbox"),
        (h.checkOn = "" !== at.value),
        (h.optSelected = it.selected),
        ((at = f.createElement("input")).value = "t"),
        (at.type = "radio"),
        (h.radioValue = "t" === at.value);
    var pt,
        ht = k.expr.attrHandle;
    k.fn.extend({
        attr: function (e, t) {
            return M(this, k.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e);
            });
        },
    }),
        k.extend({
            attr: function (e, t, n) {
                var a,
                    i,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute
                        ? k.prop(e, t, n)
                        : ((1 === r && k.isXMLDoc(e)) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void k.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (a = i.set(e, n, t))
                                  ? a
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (a = i.get(e, t))
                              ? a
                              : null == (a = k.find.attr(e, t))
                              ? void 0
                              : a);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && z(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    a = 0,
                    i = t && t.match(S);
                if (i && 1 === e.nodeType) for (; (n = i[a++]); ) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || k.find.attr;
            ht[t] = function (e, t, a) {
                var i,
                    r,
                    s = t.toLowerCase();
                return a || ((r = ht[s]), (ht[s] = i), (i = null != n(e, t, a) ? s : null), (ht[s] = r)), i;
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
    function ft(e) {
        return (e.match(S) || []).join(" ");
    }
    function vt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function bt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(S)) || [];
    }
    k.fn.extend({
        prop: function (e, t) {
            return M(this, k.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e];
            });
        },
    }),
        k.extend({
            prop: function (e, t, n) {
                var a,
                    i,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && k.isXMLDoc(e)) || ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e[t] = n)) : i && "get" in i && null !== (a = i.get(e, t)) ? a : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (k.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            k.propFix[this.toLowerCase()] = this;
        }),
        k.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    a,
                    i,
                    r,
                    s,
                    o,
                    l = 0;
                if (g(e))
                    return this.each(function (t) {
                        k(this).addClass(e.call(this, t, vt(this)));
                    });
                if ((t = bt(e)).length)
                    for (; (n = this[l++]); )
                        if (((i = vt(n)), (a = 1 === n.nodeType && " " + ft(i) + " "))) {
                            for (s = 0; (r = t[s++]); ) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                            i !== (o = ft(a)) && n.setAttribute("class", o);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    a,
                    i,
                    r,
                    s,
                    o,
                    l = 0;
                if (g(e))
                    return this.each(function (t) {
                        k(this).removeClass(e.call(this, t, vt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                    for (; (n = this[l++]); )
                        if (((i = vt(n)), (a = 1 === n.nodeType && " " + ft(i) + " "))) {
                            for (s = 0; (r = t[s++]); ) for (; -1 < a.indexOf(" " + r + " "); ) a = a.replace(" " + r + " ", " ");
                            i !== (o = ft(a)) && n.setAttribute("class", o);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    a = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : g(e)
                    ? this.each(function (n) {
                          k(this).toggleClass(e.call(this, n, vt(this), t), t);
                      })
                    : this.each(function () {
                          var t, i, r, s;
                          if (a) for (i = 0, r = k(this), s = bt(e); (t = s[i++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                          else (void 0 !== e && "boolean" !== n) || ((t = vt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    a = 0;
                for (t = " " + e + " "; (n = this[a++]); ) if (1 === n.nodeType && -1 < (" " + ft(vt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var yt = /\r/g;
    k.fn.extend({
        val: function (e) {
            var t,
                n,
                a,
                i = this[0];
            return arguments.length
                ? ((a = g(e)),
                  this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                          (null == (i = a ? e.call(this, n, k(this).val()) : e)
                              ? (i = "")
                              : "number" == typeof i
                              ? (i += "")
                              : Array.isArray(i) &&
                                (i = k.map(i, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                  }))
                : i
                ? (t = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                    ? n
                    : "string" == typeof (n = i.value)
                    ? n.replace(yt, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        k.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : ft(k.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            a,
                            i = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            o = s ? null : [],
                            l = s ? r + 1 : i.length;
                        for (a = r < 0 ? l : s ? r : 0; a < l; a++)
                            if (((n = i[a]).selected || a === r) && !n.disabled && (!n.parentNode.disabled || !z(n.parentNode, "optgroup"))) {
                                if (((t = k(n).val()), s)) return t;
                                o.push(t);
                            }
                        return o;
                    },
                    set: function (e, t) {
                        for (var n, a, i = e.options, r = k.makeArray(t), s = i.length; s--; ) ((a = i[s]).selected = -1 < k.inArray(k.valHooks.option.get(a), r)) && (n = !0);
                        return n || (e.selectedIndex = -1), r;
                    },
                },
            },
        }),
        k.each(["radio", "checkbox"], function () {
            (k.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < k.inArray(k(e).val(), t));
                },
            }),
                h.checkOn ||
                    (k.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        kt = function (e) {
            e.stopPropagation();
        };
    k.extend(k.event, {
        trigger: function (t, n, a, i) {
            var r,
                s,
                o,
                l,
                c,
                u,
                p,
                h,
                v = [a || f],
                b = d.call(t, "type") ? t.type : t,
                y = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = o = a = a || f),
                3 !== a.nodeType &&
                    8 !== a.nodeType &&
                    !wt.test(b + k.event.triggered) &&
                    (-1 < b.indexOf(".") && ((b = (y = b.split(".")).shift()), y.sort()),
                    (c = b.indexOf(":") < 0 && "on" + b),
                    ((t = t[k.expando] ? t : new k.Event(b, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
                    (t.namespace = y.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = a),
                    (n = null == n ? [t] : k.makeArray(n, [t])),
                    (p = k.event.special[b] || {}),
                    i || !p.trigger || !1 !== p.trigger.apply(a, n)))
            ) {
                if (!i && !p.noBubble && !m(a)) {
                    for (l = p.delegateType || b, wt.test(l + b) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (o = s);
                    o === (a.ownerDocument || f) && v.push(o.defaultView || o.parentWindow || e);
                }
                for (r = 0; (s = v[r++]) && !t.isPropagationStopped(); )
                    (h = s),
                        (t.type = 1 < r ? l : p.bindType || b),
                        (u = (J.get(s, "events") || Object.create(null))[t.type] && J.get(s, "handle")) && u.apply(s, n),
                        (u = c && s[c]) && u.apply && X(s) && ((t.result = u.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = b),
                    i ||
                        t.isDefaultPrevented() ||
                        (p._default && !1 !== p._default.apply(v.pop(), n)) ||
                        !X(a) ||
                        (c &&
                            g(a[b]) &&
                            !m(a) &&
                            ((o = a[c]) && (a[c] = null),
                            (k.event.triggered = b),
                            t.isPropagationStopped() && h.addEventListener(b, kt),
                            a[b](),
                            t.isPropagationStopped() && h.removeEventListener(b, kt),
                            (k.event.triggered = void 0),
                            o && (a[c] = o))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var a = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
            k.event.trigger(a, null, t);
        },
    }),
        k.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    k.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    k.event.simulate(t, e.target, k.event.fix(e));
                };
                k.event.special[t] = {
                    setup: function () {
                        var a = this.ownerDocument || this.document || this,
                            i = J.access(a, t);
                        i || a.addEventListener(e, n, !0), J.access(a, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var a = this.ownerDocument || this.document || this,
                            i = J.access(a, t) - 1;
                        i ? J.access(a, t, i) : (a.removeEventListener(e, n, !0), J.remove(a, t));
                    },
                };
            });
    var xt = e.location,
        _t = { guid: Date.now() },
        At = /\?/;
    k.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || k.error("Invalid XML: " + t), n;
    };
    var jt = /\[\]$/,
        Ct = /\r?\n/g,
        zt = /^(?:submit|button|image|reset|file)$/i,
        qt = /^(?:input|select|textarea|keygen)/i;
    function Tt(e, t, n, a) {
        var i;
        if (Array.isArray(t))
            k.each(t, function (t, i) {
                n || jt.test(e) ? a(e, i) : Tt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, a);
            });
        else if (n || "object" !== y(t)) a(e, t);
        else for (i in t) Tt(e + "[" + i + "]", t[i], n, a);
    }
    (k.param = function (e, t) {
        var n,
            a = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
            k.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Tt(n, e[n], t, i);
        return a.join("&");
    }),
        k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !k(this).is(":disabled") && qt.test(this.nodeName) && !zt.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = k(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? k.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Ct, "\r\n") };
                    })
                    .get();
            },
        });
    var It = /%20/g,
        Lt = /#.*$/,
        Et = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Gt = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Nt = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Dt = f.createElement("a");
    function $t(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var a,
                i = 0,
                r = t.toLowerCase().match(S) || [];
            if (g(n)) for (; (a = r[i++]); ) "+" === a[0] ? ((a = a.slice(1) || "*"), (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n);
        };
    }
    function Ht(e, t, n, a) {
        var i = {},
            r = e === Pt;
        function s(o) {
            var l;
            return (
                (i[o] = !0),
                k.each(e[o] || [], function (e, o) {
                    var c = o(t, n, a);
                    return "string" != typeof c || r || i[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
            );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
    }
    function Mt(e, t) {
        var n,
            a,
            i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : a || (a = {}))[n] = t[n]);
        return a && k.extend(!0, e, a), e;
    }
    (Dt.href = xt.href),
        k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Mt(Mt(e, k.ajaxSettings), t) : Mt(k.ajaxSettings, e);
            },
            ajaxPrefilter: $t(Nt),
            ajaxTransport: $t(Pt),
            ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var a,
                    i,
                    r,
                    s,
                    o,
                    l,
                    c,
                    d,
                    u,
                    p,
                    h = k.ajaxSetup({}, n),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                    v = k.Deferred(),
                    b = k.Callbacks("once memory"),
                    y = h.statusCode || {},
                    w = {},
                    x = {},
                    _ = "canceled",
                    A = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!s) for (s = {}; (t = Wt.exec(r)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return c ? r : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == c && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (c) A.always(e[A.status]);
                                else for (t in e) y[t] = [y[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || _;
                            return a && a.abort(t), j(0, t), this;
                        },
                    };
                if (
                    (v.promise(A),
                    (h.url = ((t || h.url || xt.href) + "").replace(St, xt.protocol + "//")),
                    (h.type = n.method || n.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(S) || [""]),
                    null == h.crossDomain)
                ) {
                    l = f.createElement("a");
                    try {
                        (l.href = h.url), (l.href = l.href), (h.crossDomain = Dt.protocol + "//" + Dt.host != l.protocol + "//" + l.host);
                    } catch (t) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), Ht(Nt, h, n, A), c)) return A;
                for (u in ((d = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Gt.test(h.type)),
                (i = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(It, "+"))
                    : ((p = h.url.slice(i.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((i += (At.test(i) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((i = i.replace(Et, "$1")), (p = (At.test(i) ? "&" : "?") + "_=" + _t.guid++ + p)),
                      (h.url = i + p)),
                h.ifModified && (k.lastModified[i] && A.setRequestHeader("If-Modified-Since", k.lastModified[i]), k.etag[i] && A.setRequestHeader("If-None-Match", k.etag[i])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && A.setRequestHeader("Content-Type", h.contentType),
                A.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]),
                h.headers))
                    A.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, A, h) || c)) return A.abort();
                if (((_ = "abort"), b.add(h.complete), A.done(h.success), A.fail(h.error), (a = Ht(Pt, h, n, A)))) {
                    if (((A.readyState = 1), d && m.trigger("ajaxSend", [A, h]), c)) return A;
                    h.async &&
                        0 < h.timeout &&
                        (o = e.setTimeout(function () {
                            A.abort("timeout");
                        }, h.timeout));
                    try {
                        (c = !1), a.send(w, j);
                    } catch (t) {
                        if (c) throw t;
                        j(-1, t);
                    }
                } else j(-1, "No Transport");
                function j(t, n, s, l) {
                    var u,
                        p,
                        f,
                        w,
                        x,
                        _ = n;
                    c ||
                        ((c = !0),
                        o && e.clearTimeout(o),
                        (a = void 0),
                        (r = l || ""),
                        (A.readyState = 0 < t ? 4 : 0),
                        (u = (200 <= t && t < 300) || 304 === t),
                        s &&
                            (w = (function (e, t, n) {
                                for (var a, i, r, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (a)
                                    for (i in o)
                                        if (o[i] && o[i].test(a)) {
                                            l.unshift(i);
                                            break;
                                        }
                                if (l[0] in n) r = l[0];
                                else {
                                    for (i in n) {
                                        if (!l[0] || e.converters[i + " " + l[0]]) {
                                            r = i;
                                            break;
                                        }
                                        s || (s = i);
                                    }
                                    r = r || s;
                                }
                                if (r) return r !== l[0] && l.unshift(r), n[r];
                            })(h, A, s)),
                        !u && -1 < k.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}),
                        (w = (function (e, t, n, a) {
                            var i,
                                r,
                                s,
                                o,
                                l,
                                c = {},
                                d = e.dataTypes.slice();
                            if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (r = d.shift(); r; )
                                if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = d.shift())))
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                        if (!(s = c[l + " " + r] || c["* " + r]))
                                            for (i in c)
                                                if ((o = i.split(" "))[1] === r && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                                                    !0 === s ? (s = c[i]) : !0 !== c[i] && ((r = o[0]), d.unshift(o[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(h, w, A, u)),
                        u
                            ? (h.ifModified && ((x = A.getResponseHeader("Last-Modified")) && (k.lastModified[i] = x), (x = A.getResponseHeader("etag")) && (k.etag[i] = x)),
                              204 === t || "HEAD" === h.type ? (_ = "nocontent") : 304 === t ? (_ = "notmodified") : ((_ = w.state), (p = w.data), (u = !(f = w.error))))
                            : ((f = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                        (A.status = t),
                        (A.statusText = (n || _) + ""),
                        u ? v.resolveWith(g, [p, _, A]) : v.rejectWith(g, [A, _, f]),
                        A.statusCode(y),
                        (y = void 0),
                        d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [A, h, u ? p : f]),
                        b.fireWith(g, [A, _]),
                        d && (m.trigger("ajaxComplete", [A, h]), --k.active || k.event.trigger("ajaxStop")));
                }
                return A;
            },
            getJSON: function (e, t, n) {
                return k.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return k.get(e, void 0, t, "script");
            },
        }),
        k.each(["get", "post"], function (e, t) {
            k[t] = function (e, n, a, i) {
                return g(n) && ((i = i || a), (a = n), (n = void 0)), k.ajax(k.extend({ url: e, type: t, dataType: i, data: n, success: a }, k.isPlainObject(e) && e));
            };
        }),
        k.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (k._evalUrl = function (e, t, n) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    k.globalEval(e, t, n);
                },
            });
        }),
        k.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          k(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = k(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    k(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            k(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (k.expr.pseudos.hidden = function (e) {
            return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (k.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Bt = { 0: 200, 1223: 204 },
        Ot = k.ajaxSettings.xhr();
    (h.cors = !!Ot && "withCredentials" in Ot),
        (h.ajax = Ot = !!Ot),
        k.ajaxTransport(function (t) {
            var n, a;
            if (h.cors || (Ot && !t.crossDomain))
                return {
                    send: function (i, r) {
                        var s,
                            o = t.xhr();
                        if ((o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                        for (s in (t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) o.setRequestHeader(s, i[s]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = a = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                                    "abort" === e
                                        ? o.abort()
                                        : "error" === e
                                        ? "number" != typeof o.status
                                            ? r(0, "error")
                                            : r(o.status, o.statusText)
                                        : r(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? { binary: o.response } : { text: o.responseText }, o.getAllResponseHeaders()));
                            };
                        }),
                            (o.onload = n()),
                            (a = o.onerror = o.ontimeout = n("error")),
                            void 0 !== o.onabort
                                ? (o.onabort = a)
                                : (o.onreadystatechange = function () {
                                      4 === o.readyState &&
                                          e.setTimeout(function () {
                                              n && a();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            o.send((t.hasContent && t.data) || null);
                        } catch (i) {
                            if (n) throw i;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return k.globalEval(e), e;
                },
            },
        }),
        k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        k.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function (a, i) {
                        (t = k("<script>")
                            .attr(e.scriptAttrs || {})
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            f.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Ft,
        Ut = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ut.pop() || k.expando + "_" + _t.guid++;
            return (this[e] = !0), e;
        },
    }),
        k.ajaxPrefilter("json jsonp", function (t, n, a) {
            var i,
                r,
                s,
                o = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
            if (o || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    o ? (t[o] = t[o].replace(Xt, "$1" + i)) : !1 !== t.jsonp && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return s || k.error(i + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (r = e[i]),
                    (e[i] = function () {
                        s = arguments;
                    }),
                    a.always(function () {
                        void 0 === r ? k(e).removeProp(i) : (e[i] = r), t[i] && ((t.jsonpCallback = n.jsonpCallback), Ut.push(i)), s && g(r) && r(s[0]), (s = r = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (((Ft = f.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ft.childNodes.length)),
        (k.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (h.createHTMLDocument ? (((a = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href), t.head.appendChild(a)) : (t = f)),
                  (r = !n && []),
                  (i = q.exec(e)) ? [t.createElement(i[1])] : ((i = ye([e], t, r)), r && r.length && k(r).remove(), k.merge([], i.childNodes)));
            var a, i, r;
        }),
        (k.fn.load = function (e, t, n) {
            var a,
                i,
                r,
                s = this,
                o = e.indexOf(" ");
            return (
                -1 < o && ((a = ft(e.slice(o))), (e = e.slice(0, o))),
                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < s.length &&
                    k
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (r = arguments), s.html(a ? k("<div>").append(k.parseHTML(e)).find(a) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    s.each(function () {
                                        n.apply(this, r || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (k.expr.pseudos.animated = function (e) {
            return k.grep(k.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (k.offset = {
            setOffset: function (e, t, n) {
                var a,
                    i,
                    r,
                    s,
                    o,
                    l,
                    c = k.css(e, "position"),
                    d = k(e),
                    u = {};
                "static" === c && (e.style.position = "relative"),
                    (o = d.offset()),
                    (r = k.css(e, "top")),
                    (l = k.css(e, "left")),
                    ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? ((s = (a = d.position()).top), (i = a.left)) : ((s = parseFloat(r) || 0), (i = parseFloat(l) || 0)),
                    g(t) && (t = t.call(e, n, k.extend({}, o))),
                    null != t.top && (u.top = t.top - o.top + s),
                    null != t.left && (u.left = t.left - o.left + i),
                    "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u));
            },
        }),
        k.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              k.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    a = this[0];
                return a ? (a.getClientRects().length ? ((t = a.getBoundingClientRect()), (n = a.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        a = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === k.css(a, "position")) t = a.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = a.ownerDocument, e = a.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"); ) e = e.parentNode;
                        e && e !== a && 1 === e.nodeType && (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)), (i.left += k.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - k.css(a, "marginTop", !0), left: t.left - i.left - k.css(a, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === k.css(e, "position"); ) e = e.offsetParent;
                    return e || ae;
                });
            },
        }),
        k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function (a) {
                return M(
                    this,
                    function (e, a, i) {
                        var r;
                        if ((m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === i)) return r ? r[t] : e[a];
                        r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : (e[a] = i);
                    },
                    e,
                    a,
                    arguments.length
                );
            };
        }),
        k.each(["top", "left"], function (e, t) {
            k.cssHooks[t] = Me(h.pixelPosition, function (e, n) {
                if (n) return (n = He(e, t)), Pe.test(n) ? k(e).position()[t] + "px" : n;
            });
        }),
        k.each({ Height: "height", Width: "width" }, function (e, t) {
            k.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, a) {
                k.fn[a] = function (i, r) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        o = n || (!0 === i || !0 === r ? "margin" : "border");
                    return M(
                        this,
                        function (t, n, i) {
                            var r;
                            return m(t)
                                ? 0 === a.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                                : void 0 === i
                                ? k.css(t, n, o)
                                : k.style(t, n, i, o);
                        },
                        t,
                        s ? i : void 0,
                        s
                    );
                };
            });
        }),
        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            k.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        k.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, a) {
                return this.on(t, e, n, a);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            k.fn[t] = function (e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
            };
        });
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (k.proxy = function (e, t) {
        var n, a, r;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
            return (
                (a = i.call(arguments, 2)),
                ((r = function () {
                    return e.apply(t || this, a.concat(i.call(arguments)));
                }).guid = e.guid = e.guid || k.guid++),
                r
            );
    }),
        (k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = z),
        (k.isFunction = g),
        (k.isWindow = m),
        (k.camelCase = U),
        (k.type = y),
        (k.now = Date.now),
        (k.isNumeric = function (e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (k.trim = function (e) {
            return null == e ? "" : (e + "").replace(Vt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return k;
            });
    var Jt = e.jQuery,
        Yt = e.$;
    return (
        (k.noConflict = function (t) {
            return e.$ === k && (e.$ = Yt), t && e.jQuery === k && (e.jQuery = Jt), k;
        }),
        void 0 === t && (e.jQuery = e.$ = k),
        k
    );
});

var a11ycheck = {
    version: "3.1.6",
    allTags: null,
    code: null,
    engine: {},
    fn: {},
    page: null,
    report: {},
    results: {},
    rules: {},
    tabs: {},
    url: null,
    util: {},
    xpath: {},
    init: function () {
        a11ycheck.fn.initialize();
    },
};
function htmlEntities(e) {
    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
$(function () {
    a11ycheck.init();
}),
    (a11ycheck.fn.assignWaveIds = function (e) {
        try {
            for (var t = 0; t < e.length; t++) e[t].setAttribute("data-waveid", t + 1);
        } catch (e) {
            console.log("Failed to assign waveids", e);
        }
    }),
    (a11ycheck.fn.removeWaveIds = function () {
        try {
            for (var e = 0; e < a11ycheck.allTags.length; e++) a11ycheck.allTags[e].removeAttribute("data-waveid", e + 1);
        } catch (e) {
            console.log("Failed to remove waveids", e);
        }
    }),
    (a11ycheck.fn.reset = function () {
        $("#pageoutline").empty(),
            $("#report").contents().empty(),
            $("#iconlist").contents().empty(),
            $("#summary #error span").html("?"),
            $("#summary #alert span").html("?"),
            $("#summary #feature span").html("?"),
            $("#summary #structure span").html("?"),
            $("#summary #aria span").html("?"),
            $("#summary #contrast span").html("?"),
            $("#congrats").hide(),
            $("#wave5topbar").empty(),
            $("#wave5_iconbox").hide(),
            $("#wave5topbar").click(function () {
                a11ycheck.iconbox.hide();
            }),
            $("#pageoutline").contents().empty(),
            $("#acsbalert").remove(),
            "extension" != waveconfig.platform || waveconfig.isSidebar
                ? "extension" == waveconfig.platform && waveconfig.isSidebar
                    ? (a11ycheck.tabs.resetPanels(), (a11ycheck.tabs.codePanelHasRun = !1))
                    : ((a11ycheck.code = new a11ycheck.Code()), a11ycheck.engine.fn.resetEngine(), a11ycheck.tabs.resetPanels(), (a11ycheck.tabs.codePanelHasRun = !1))
                : ((a11ycheck.code = new a11ycheck.Code()), a11ycheck.engine.fn.resetEngine()),
            a11ycheck.fn.resizeReportWindow(),
            (a11ycheck.allTags = null),
            (a11ycheck.report = {}),
            (a11ycheck.xpath.mappedElementsByXPath = {});
    }),
    (a11ycheck.fn.run = function () {
        return (
            a11ycheck.fn.setupTags(),
            (a11ycheck.results = {}),
            (a11ycheck.results.statistics = {}),
            a11ycheck.engine.run().then(function () {
                (a11ycheck.results.categories = a11ycheck.engine.results), (a11ycheck.results.statistics = a11ycheck.engine.statistics);
                a11ycheck.engine.ruleTimes;
                return (
                    (a11ycheck.results.statistics.pagetitle = a11ycheck.page.title),
                    (a11ycheck.results.statistics.totalelements = a11ycheck.allTags.length),
                    (a11ycheck.results.success = !0),
                    a11ycheck.engine.fn.structureOutput(),
                    a11ycheck.results.success
                        ? ((a11ycheck.report.iconlist = a11ycheck.results.categories), (a11ycheck.report.title = a11ycheck.results.statistics.pagetitle), a11ycheck.engine.icons.setStats(a11ycheck.results.statistics))
                        : a11ycheck.tabs.showError("Could not get the report results. Please try your request again."),
                    // a11ycheck.fn.showThings(),
                    // "extension" == waveconfig.platform ? reportPageMessaging.fn.setupAndDispatchEvent("waveResults", a11ycheck.report.iconlist) : a11ycheck.tabs.updatePanels(a11ycheck.report.iconlist),
                    a11ycheck.fn.checkacsb(),
                    a11ycheck.tabs.codePanelOpen ? a11ycheck.fn.showCode() : $("#spinner").show(),
                    a11ycheck.results
                );
            })
        );
    }),
    (a11ycheck.fn.setupTags = function () {
        try {
            (a11ycheck.allTags = a11ycheck.page.getElementsByTagName("*")),
                a11ycheck.fn.assignWaveIds(a11ycheck.allTags),
                $('[name="children"]').attr("name", "childrenFixed"),
                a11ycheck.xpath.calculateXPath(a11ycheck.page.documentElement),
                a11ycheck.engine.fn.setupResultStack();
        } catch (e) {
            throw (
                (a11ycheck.tabs.showError("There is a scripting conflict with content on this page. We recommend using the WAVE <a href='/extension/'>Chrome or Firefox Extension</a> to evaluate this page."),
                new Error("Scripting conflict with content on the page."))
            );
        }
    }),
    (a11ycheck.fn.checkacsb = function () {
        $(a11ycheck.page).find("script[src$='acsb.js']").length && ("extension" != waveconfig.platform || waveconfig.isSidebar ? a11ycheck.tabs.showacsbalert() : reportPageMessaging.fn.setupAndDispatchEvent("showacsbalert", "foo"));
    }),
    (a11ycheck.fn.resizeReportWindow = function () {
        var e = $(window).height() - $("#wave5topbar").height() - $("#wave5bottombar").height();
        if (($("#report").css({ height: e }), "iPad" == navigator.platform || "iPhone" == navigator.platform || "iPod" == navigator.platform)) {
            var t = $("#report_container").css("width");
            $("#wave5bottombar").css({ position: "fixed", "margin-left": "350px", width: t });
        }
    }),
    (a11ycheck.code = null),
    (a11ycheck.rules = {}),
    (a11ycheck.tabs = {}),
    (a11ycheck.url = null),
    (a11ycheck.fn.initialize = function () {
        $("#noscript").remove(), $("#sidebar_container").css("display", "block"), $("#report_container").css("display", "block");
        var e = waveconfig.extensionUrl.substring(0, waveconfig.extensionUrl.length - 1);
        (a11ycheck.conf = { paths: { site: e } }), a11ycheck.fn.newReport();
    }),
    (a11ycheck.fn.newReport = function () {
        a11ycheck.fn.reset();
        var e = {};
        return waveconfig.isSidebar || ((a11ycheck.page = document), (e = a11ycheck.fn.run())), e;
    }),
   
    (a11ycheck.fn.reportReadyEvent = function () {
        waveconfig.debug && console.log("Start reportReadyEvent. Sidebar: " + waveconfig.isSidebar),
            a11ycheck.fn.removeWaveIds(a11ycheck.allTags),
            waveconfig.isSidebar && (a11ycheck.tabs.removeLoadingAnimation(), a11ycheck.tabs.doResize()),
            (a11ycheck.iconbox = new a11ycheck.manager.IconBox()),
            a11ycheck.fn.insertIconBoxForChromeExtension(),
            a11ycheck.report.things.updateTopbar(),
            waveconfig.debug && console.log("End reportReadyEvent");
    }),
    (a11ycheck.fn.insertIconBoxForChromeExtension = function () {
        $(document.body).append(
            '<div id="wave5_iconbox"><div id="wave5_title"><div id="wave5_iconbox_title">Icon Title</div></div><div id="wave5_details"><div id="wave5_iconbox_summary"></div><div id="wave5_iconbox_doclink"></div><div id="wave5_iconbox_arrow"></div></div></div>'
        );
    }),
    (a11ycheck.utilities = {}),
    (a11ycheck.utilities.trim = function (e) {
        return (e = (e = (e = e.replace(/(^\s*)|(\s*$)/gi, "")).replace(/[ ]{2,}/gi, " ")).replace(/\n /, "\n"));
    }),
    (String.prototype.repeat = function (e) {
        return new Array(e + 1).join(this);
    }),
    (a11ycheck.manager = {}),
    (a11ycheck.manager.style = {}),
    (a11ycheck.manager.selectedIcon = null),
    (a11ycheck.manager.style.icon = { border: "none", verticalAlign: "middle", cursor: "pointer", width: 44, height: 44, zIndex: "1000", position: "relative" }),
    (a11ycheck.manager.style.text = {
        display: "inline",
        backgroundColor: "#157846",
        color: "#fff",
        border: "1px solid #ccc",
        height: "auto",
        width: "auto",
        zIndex: 10,
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "normal",
        fontFamily: "Open Sans,Helvetica,Arial,sans-serif",
        margin: "0",
        padding: "0",
    }),

    (a11ycheck.manager.Icon = function (e, t, n, a, i, r) {
        (this.type = e),
            (this.data = t),
            (this.itemXPath = n),
            (this.target = a),
            (this.hasText = void 0 !== i[0] && 0 != i.length),
            (this.iconText = i),
            (this.iconContrastdata = r),
            (this.position = this.data.position),
            (this.hidden = !("#" === n || !($(a).is(":hidden") || $(a).offset().top < 0 || $(a).offset().left < 0))),
            (this.textElement = {});
    }),
  
    (a11ycheck.manager.Icon.prototype.element = function () {
        return this.jIconElement;
    }),
    (a11ycheck.manager.Icon.prototype.text = function () {
        return this.jTextElement;
    }),
    (a11ycheck.manager.Icon.prototype.hide = function () {
        try {
            this.element().hide(), this.hasText && $(this.textElement).hide();
        } catch (e) {
            console.log("Could not hide element: " + e);
        }
    }),
    (a11ycheck.manager.Icon.prototype.show = function () {
        try {
            this.element().show(), this.hasText && $(this.textElement).show();
        } catch (e) {
            console.log("Could not hide element: " + e);
        }
    }),
    (a11ycheck.manager.Icon.prototype.scrollTo = function () {
        "extension" == waveconfig.platform
            ? $("html").animate({ scrollTop: $(this.iconElement).offset().top - 110 }, 250)
            : $("#report")
                  .contents()
                  .scrollTop($(this.iconElement).offset().top - 110),
            $(this.iconElement).css("opacity", 0).animate({ opacity: 1 }, 150).animate({ opacity: 0.2 }, 150).animate({ opacity: 1 }, 150).animate({ opacity: 0.2 }, 150).animate({ opacity: 1 }, 150);
    }),
    (a11ycheck.manager.IconBox = function () {
        var e = this;
        (this.iconbox = $("#wave5_iconbox")), this.hide();
        var t = a11ycheck.page;
        $(t).scroll(function () {
            e.hide();
        }),
            $(t).click(function (t) {
                e.hide();
            }),
            this.iconbox.click(function (e) {
                e.stopPropagation();
            }),
            $(t).keyup(function (t) {
                27 == t.keyCode && e.isVisible() && e.hide();
            });
        for (var n = a11ycheck.report.things.icons(), a = 0; a < n.length; a++)
            n[a].element().on(
                "focus mouseenter",
                (function (e) {
                    return function () {
                        a11ycheck.code.hoverHighlight(e.target, !0);
                    };
                })(n[a])
            ),
                n[a].element().on(
                    "blur mouseleave",
                    (function (e) {
                        return function () {
                            a11ycheck.code.hoverHighlight(e.target, !1);
                        };
                    })(n[a])
                ),
                n[a].element().on(
                    "click keyup",
                    (function (e, t) {
                        return function (t) {
                            if ("click" == t.type || ("keyup" == t.type && (13 == t.keyCode || 32 == t.keyCode))) {
                                if ((a11ycheck.code.setSelected(e), "contrast" == e.data.name || "contrast" == e.type))
                                    if (((a11ycheck.tabs.currentContrastIcon = e), "extension" == waveconfig.platform)) {
                                        var n = e.iconContrastdata,
                                            a = (n[0], n[1]),
                                            i = n[2],
                                            r = n[3];
                                        reportPageMessaging.fn.setupAndDispatchEvent("setSidebarContrastDetails", { fgcolor: a, bgcolor: i, largetext: r });
                                    } else showContrasts(e.iconContrastdata);
                                "tab-reference" == a11ycheck.tabs.current && ("extension" == waveconfig.platform ? reportPageMessaging.fn.setupAndDispatchEvent("moreInfo", e.data.name) : a11ycheck.tabs.moreInfo(e.type)),
                                    $("#wave5_iconbox_title").html(a11ycheck.engine.icons.docs[e.type].title),
                                    $("#wave5_iconbox_summary").html(a11ycheck.engine.icons.docs[e.type].summary);
                                var s = $("#wave5_iconbox_doclink");
                                s.html("");
                                var o = $("<a href='#'>Reference</a>");
                                s.append(o),
                                    o.click(
                                        ((x = e.data.name),
                                        function () {
                                            return "extension" == waveconfig.platform ? reportPageMessaging.fn.setupAndDispatchEvent("moreInfo", x) : a11ycheck.tabs.moreInfo(x), !1;
                                        })
                                    );
                                var l = $("<a href='#' class='viewInCodePanelLink'>Code</a>");
                                s.append(l),
                                    l.click(function (e) {
                                        a11ycheck.tabs.codePanelOpen ? a11ycheck.code.setSelected(a11ycheck.manager.selectedIcon) : a11ycheck.fn.loadCodePanel(e), e.preventDefault(), e.stopPropagation();
                                    });
                                var c,
                                    d = $("#wave5_iconbox"),
                                    u = d.outerHeight(),
                                    p = d.outerWidth(),
                                    h = a11ycheck.page.body.offsetWidth,
                                    g = 0,
                                    m = 0;
                                "wave5topbar" != e.target.id &&
                                    ("extension" == waveconfig.platform ? ((g = 0), (m = -1 * $(document).scrollTop() + $("#wave5topbar").height())) : (g = m = -1 * $("#report").contents().scrollTop() + $("#wave5topbar").height())),
                                    (c = "wave5topbar" == e.target.id || "extension" == waveconfig.platform ? 0 : $("#sidebar_container")[0].offsetWidth);
                                var f = $(this).offset();
                                if (f.top + m < u + 78)
                                    var v = "top+" + (g + 53),
                                        b = "t";
                                else (v = "bottom+" + (g - 12)), (b = "b");
                                if (f.left + 10 > h - p)
                                    var y = "right+" + (c + 44),
                                        w = "r";
                                else (y = "left+" + (c - 0)), (w = "l");
                                var k = y + " " + v;
                                $("#wave5_iconbox_arrow").removeClass(), $("#wave5_iconbox_arrow").addClass(b + w), d.show();
                                return a11ycheck.manager.setIconBoxPosition(d, this, k), Math.abs(d.offset().left - $(this).offset().left), !1;
                            }
                            var x;
                        };
                    })(n[a])
                );
    }),
    (a11ycheck.manager.setIconBoxPosition = function (e, t, n) {
        e.css({ opacity: "1", overflow: "" }), e.position({ at: "left top", of: t, my: n, collision: "none" });
    }),
    (a11ycheck.manager.IconBox.prototype.isVisible = function () {
        return "none" != this.iconbox.css("display");
    }),
    (a11ycheck.manager.IconBox.prototype.hide = function () {
        "extension" == waveconfig.platform && (this.iconbox = $("#wave5_iconbox")), 1 == this.iconbox.css("opacity") && (a11ycheck.code && a11ycheck.code.unhighlight(), this.iconbox.css("opacity", 0), this.iconbox.delay(250).hide(0));
    }),
    Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (e) {
            "use strict";
            if (null == this) throw new TypeError();
            var t = Object(this),
                n = t.length >>> 0;
            if (0 === n) return -1;
            var a = 0;
            if ((arguments.length > 0 && ((a = Number(arguments[1])) != a ? (a = 0) : 0 !== a && a !== 1 / 0 && a !== -1 / 0 && (a = (a > 0 || -1) * Math.floor(Math.abs(a)))), a >= n)) return -1;
            for (var i = a >= 0 ? a : Math.max(n - Math.abs(a), 0); i < n; i++) if (i in t && t[i] === e) return i;
            return -1;
        }),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
    })(function (e) {
        e.ui = e.ui || {};
        e.ui.version = "1.12.1";
        !(function () {
            var t,
                n = Math.max,
                a = Math.abs,
                i = /left|center|right/,
                r = /top|center|bottom/,
                s = /[\+\-]\d+(\.[\d]+)?%?/,
                o = /^\w+/,
                l = /%$/,
                c = e.fn.position;
            function d(e, t, n) {
                return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)];
            }
            function u(t, n) {
                return parseInt(e.css(t, n), 10) || 0;
            }
            (e.position = {
                scrollbarWidth: function () {
                    if (void 0 !== t) return t;
                    var n,
                        a,
                        i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        r = i.children()[0];
                    return e("body").append(i), (n = r.offsetWidth), i.css("overflow", "scroll"), n === (a = r.offsetWidth) && (a = i[0].clientWidth), i.remove(), (t = n - a);
                },
                getScrollInfo: function (t) {
                    var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        a = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        i = "scroll" === n || ("auto" === n && t.width < t.element[0].scrollWidth);
                    return { width: "scroll" === a || ("auto" === a && t.height < t.element[0].scrollHeight) ? e.position.scrollbarWidth() : 0, height: i ? e.position.scrollbarWidth() : 0 };
                },
                getWithinInfo: function (t) {
                    var n = e(t || window),
                        a = e.isWindow(n[0]),
                        i = !!n[0] && 9 === n[0].nodeType;
                    return { element: n, isWindow: a, isDocument: i, offset: !a && !i ? e(t).offset() : { left: 0, top: 0 }, scrollLeft: n.scrollLeft(), scrollTop: n.scrollTop(), width: n.outerWidth(), height: n.outerHeight() };
                },
            }),
                (e.fn.position = function (t) {
                    if (!t || !t.of) return c.apply(this, arguments);
                    t = e.extend({}, t);
                    var l,
                        p,
                        h,
                        g,
                        m,
                        f,
                        v,
                        b,
                        y = e(t.of),
                        w = e.position.getWithinInfo(t.within),
                        k = e.position.getScrollInfo(w),
                        x = (t.collision || "flip").split(" "),
                        _ = {};
                    return (
                        (f =
                            9 === (b = (v = y)[0]).nodeType
                                ? { width: v.width(), height: v.height(), offset: { top: 0, left: 0 } }
                                : e.isWindow(b)
                                ? { width: v.width(), height: v.height(), offset: { top: v.scrollTop(), left: v.scrollLeft() } }
                                : b.preventDefault
                                ? { width: 0, height: 0, offset: { top: b.pageY, left: b.pageX } }
                                : { width: v.outerWidth(), height: v.outerHeight(), offset: v.offset() }),
                        y[0].preventDefault && (t.at = "left top"),
                        (p = f.width),
                        (h = f.height),
                        (g = f.offset),
                        (m = e.extend({}, g)),
                        e.each(["my", "at"], function () {
                            var e,
                                n,
                                a = (t[this] || "").split(" ");
                            1 === a.length && (a = i.test(a[0]) ? a.concat(["center"]) : r.test(a[0]) ? ["center"].concat(a) : ["center", "center"]),
                                (a[0] = i.test(a[0]) ? a[0] : "center"),
                                (a[1] = r.test(a[1]) ? a[1] : "center"),
                                (e = s.exec(a[0])),
                                (n = s.exec(a[1])),
                                (_[this] = [e ? e[0] : 0, n ? n[0] : 0]),
                                (t[this] = [o.exec(a[0])[0], o.exec(a[1])[0]]);
                        }),
                        1 === x.length && (x[1] = x[0]),
                        "right" === t.at[0] ? (m.left += p) : "center" === t.at[0] && (m.left += p / 2),
                        "bottom" === t.at[1] ? (m.top += h) : "center" === t.at[1] && (m.top += h / 2),
                        (l = d(_.at, p, h)),
                        (m.left += l[0]),
                        (m.top += l[1]),
                        this.each(function () {
                            var i,
                                r,
                                s = e(this),
                                o = s.outerWidth(),
                                c = s.outerHeight(),
                                f = u(this, "marginLeft"),
                                v = u(this, "marginTop"),
                                b = o + f + u(this, "marginRight") + k.width,
                                A = c + v + u(this, "marginBottom") + k.height,
                                j = e.extend({}, m),
                                C = d(_.my, s.outerWidth(), s.outerHeight());
                            "right" === t.my[0] ? (j.left -= o) : "center" === t.my[0] && (j.left -= o / 2),
                                "bottom" === t.my[1] ? (j.top -= c) : "center" === t.my[1] && (j.top -= c / 2),
                                (j.left += C[0]),
                                (j.top += C[1]),
                                (i = { marginLeft: f, marginTop: v }),
                                e.each(["left", "top"], function (n, a) {
                                    e.ui.position[x[n]] &&
                                        e.ui.position[x[n]][a](j, {
                                            targetWidth: p,
                                            targetHeight: h,
                                            elemWidth: o,
                                            elemHeight: c,
                                            collisionPosition: i,
                                            collisionWidth: b,
                                            collisionHeight: A,
                                            offset: [l[0] + C[0], l[1] + C[1]],
                                            my: t.my,
                                            at: t.at,
                                            within: w,
                                            elem: s,
                                        });
                                }),
                                t.using &&
                                    (r = function (e) {
                                        var i = g.left - j.left,
                                            r = i + p - o,
                                            l = g.top - j.top,
                                            d = l + h - c,
                                            u = {
                                                target: { element: y, left: g.left, top: g.top, width: p, height: h },
                                                element: { element: s, left: j.left, top: j.top, width: o, height: c },
                                                horizontal: r < 0 ? "left" : i > 0 ? "right" : "center",
                                                vertical: d < 0 ? "top" : l > 0 ? "bottom" : "middle",
                                            };
                                        p < o && a(i + r) < p && (u.horizontal = "center"),
                                            h < c && a(l + d) < h && (u.vertical = "middle"),
                                            n(a(i), a(r)) > n(a(l), a(d)) ? (u.important = "horizontal") : (u.important = "vertical"),
                                            t.using.call(this, e, u);
                                    }),
                                s.offset(e.extend(j, { using: r }));
                        })
                    );
                }),
                (e.ui.position = {
                    fit: {
                        left: function (e, t) {
                            var a,
                                i = t.within,
                                r = i.isWindow ? i.scrollLeft : i.offset.left,
                                s = i.width,
                                o = e.left - t.collisionPosition.marginLeft,
                                l = r - o,
                                c = o + t.collisionWidth - s - r;
                            t.collisionWidth > s
                                ? l > 0 && c <= 0
                                    ? ((a = e.left + l + t.collisionWidth - s - r), (e.left += l - a))
                                    : (e.left = c > 0 && l <= 0 ? r : l > c ? r + s - t.collisionWidth : r)
                                : l > 0
                                ? (e.left += l)
                                : c > 0
                                ? (e.left -= c)
                                : (e.left = n(e.left - o, e.left));
                        },
                        top: function (e, t) {
                            var a,
                                i = t.within,
                                r = i.isWindow ? i.scrollTop : i.offset.top,
                                s = t.within.height,
                                o = e.top - t.collisionPosition.marginTop,
                                l = r - o,
                                c = o + t.collisionHeight - s - r;
                            t.collisionHeight > s
                                ? l > 0 && c <= 0
                                    ? ((a = e.top + l + t.collisionHeight - s - r), (e.top += l - a))
                                    : (e.top = c > 0 && l <= 0 ? r : l > c ? r + s - t.collisionHeight : r)
                                : l > 0
                                ? (e.top += l)
                                : c > 0
                                ? (e.top -= c)
                                : (e.top = n(e.top - o, e.top));
                        },
                    },
                    flip: {
                        left: function (e, t) {
                            var n,
                                i,
                                r = t.within,
                                s = r.offset.left + r.scrollLeft,
                                o = r.width,
                                l = r.isWindow ? r.scrollLeft : r.offset.left,
                                c = e.left - t.collisionPosition.marginLeft,
                                d = c - l,
                                u = c + t.collisionWidth - o - l,
                                p = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                h = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                g = -2 * t.offset[0];
                            d < 0
                                ? ((n = e.left + p + h + g + t.collisionWidth - o - s) < 0 || n < a(d)) && (e.left += p + h + g)
                                : u > 0 && ((i = e.left - t.collisionPosition.marginLeft + p + h + g - l) > 0 || a(i) < u) && (e.left += p + h + g);
                        },
                        top: function (e, t) {
                            var n,
                                i,
                                r = t.within,
                                s = r.offset.top + r.scrollTop,
                                o = r.height,
                                l = r.isWindow ? r.scrollTop : r.offset.top,
                                c = e.top - t.collisionPosition.marginTop,
                                d = c - l,
                                u = c + t.collisionHeight - o - l,
                                p = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                h = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                g = -2 * t.offset[1];
                            d < 0
                                ? ((i = e.top + p + h + g + t.collisionHeight - o - s) < 0 || i < a(d)) && (e.top += p + h + g)
                                : u > 0 && ((n = e.top - t.collisionPosition.marginTop + p + h + g - l) > 0 || a(n) < u) && (e.top += p + h + g);
                        },
                    },
                    flipfit: {
                        left: function () {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
                        },
                        top: function () {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
                        },
                    },
                });
        })();
        e.ui.position;
    });

function insertCodeIcons(e) {
    for (var t in e) for (var n = 0; n < e[t].length; n++) $('[data-reportxpath="' + t + '"]').prepend(e[t][n]);
}

   
    (messaging = { vars: {}, fn: {}, backgroundPort: null, init: function () {} }),
    (a11ycheck.xpath = { mappedElementsByXPath: {}, XPath: {} }),
    (a11ycheck.xpath.getElementByXPath = function (e) {
        return this.mappedElementsByXPath[e];
    }),
    (a11ycheck.xpath.waveIdtoXPath = function (e) {
        return this.XPath[e];
    }),
    (a11ycheck.xpath.convertIconListToXPathOutput = function (e) {
        var t = {};
        for (var n in e) for (var a in (t[n] || (t[n] = {}), e[n])) "0" != a && (t[n][this.XPath[a]] = e[n][a]);
        return (t["#"] = e[n][0] ? e[n][0] : []), t;
    }),
    (a11ycheck.xpath.getXPathByElement = function (e) {
        if (!e) return null;
        for (var t = ""; e && 1 == e.nodeType; e = e.parentNode)
            if (1 == e.parentNode.nodeType) {
                var n = [].filter.call(e.parentNode.children, function (t) {
                    return t.tagName == e.tagName;
                });
                (id = "[" + ([].indexOf.call(n, e) + 1) + "]"), "HTML" != e.tagName && (t = "/" + e.tagName.toUpperCase() + id + t);
            }
        return "/HTML" + t;
    }),
    (a11ycheck.xpath.calculateXPath = function (e) {
        if (!e) return "/";
        if ("0" == e.getAttribute("data-waveid")) return "#";
        (this.XPath[e.getAttribute("data-waveid")] = "/"), (this.mappedElementsByXPath["/"] = e);
        for (var t = {}, n = 0; e.children && n < e.children.length; n++)
            null == t[e.children[n].nodeName] && (t[e.children[n].nodeName] = 0), t[e.children[n].nodeName]++, a11ycheck.xpath.calculateXPathPrivate(e.children[n], "/HTML/" + e.children[n].nodeName + "[" + t[e.children[n].nodeName] + "]");
    }),
    (a11ycheck.xpath.calculateXPathPrivate = function (e, t) {
        if (e) {
            (this.XPath[e.getAttribute("data-waveid")] = t), (this.mappedElementsByXPath[t] = e);
            for (var n = {}, a = 0; e.children && a < e.children.length; a++)
                null == n[e.children[a].nodeName] && (n[e.children[a].nodeName] = 0), n[e.children[a].nodeName]++, a11ycheck.xpath.calculateXPathPrivate(e.children[a], t + "/" + e.children[a].nodeName + "[" + n[e.children[a].nodeName] + "]");
        }
    }),
    (a11ycheck.Code = function () {
        $("#wave5code").empty(), (this.xpaths = {}), (this.htmlRoot = null), (this.selectedElement = null), (this.selectedXpath = "");
    }),
    (a11ycheck.Code.prototype.setHtmlRoot = function (e) {
        this.htmlRoot = e;
    }),
    (a11ycheck.Code.prototype.setSelected = function (e) {
        (a11ycheck.manager.selectedIcon = e), $('[data-reportxpath="' + this.selectedXpath + '"]').removeClass("selectedcode"), $('[data-reportxpath="' + e.itemXPath + '"]').addClass("selectedcode"), this.unhighlight();
        var t = $('[data-reportxpath="' + e.itemXPath + '"]');
        t.length > 0 && $("#wave5code").scrollTop($("#wave5code").scrollTop() + t.position().top - 50), (this.selectedElement = e.target), (this.selectedXpath = e.itemXPath), this.highlight();
    }),
    (a11ycheck.Code.prototype.displayTree = function () {
        this.codeIcons = {};
        var e = $("#wave5code"),
            t = $("#report");
        this.size || (this.size = t.height());
        try {
            e.html(this.displayTreePrivate(this.htmlRoot, "", 0));
        } catch (e) {
            console.log("error creating code panel invalid characters on page:"), console.log(e);
        }
        return "extension" != waveconfig.platform || waveconfig.isSidebar ? insertCodeIcons(this.codeIcons) : (reportPageMessaging.fn.setupAndDispatchEvent("outlineIcons", this.codeIcons), insertCodeIcons(this.codeIcons)), !0;
    }),
    (a11ycheck.Code.prototype.highlight = function () {
        this.selectedElement == document.getElementById("wave5topbar") ? $("#report").css("outline", "2px dashed red") : $(this.selectedElement).css("outline", "2px dashed red");
    }),
    (a11ycheck.Code.prototype.unhighlight = function () {
        this.selectedElement == document.getElementById("wave5topbar") ? $("#report").css("outline", "") : $(this.selectedElement).css("outline", "");
    }),
    (a11ycheck.Code.prototype.hoverHighlight = function (e, t) {
        return a11ycheck.iconbox.isVisible() || ((this.selectedElement = e), t ? this.highlight() : this.unhighlight()), !1;
    }),
    (a11ycheck.Code.prototype.displayTreePrivate = function (e, t) {
        if (
            !e ||
            $(e).hasClass("wave5icon") ||
            $(e).hasClass("wave5text") ||
            "wave5bottombar" == $(e).attr("id") ||
            "wave5_iconbox" == $(e).attr("id") ||
            "wave5topbar" == $(e).attr("id") ||
            "wave_sidebar_container" == $(e).attr("id") ||
            "wavescript" == $(e).attr("id") ||
            "wavestyle" == $(e).attr("id")
        )
            return "";
        if (1 !== e.nodeType && 9 !== e.nodeType && 10 !== e.nodeType) {
            var n = a11ycheck.utilities.trim(e.nodeValue);
            return 8 === e.nodeType ? "<div class='wave5comment'>" + htmlEntities("\x3c!-- " + n + "--\x3e") + "</div>" : n.length > 0 ? "<br><span class='wave5codetext'>" + htmlEntities(n) + "</span><br>" : "";
        }
        for (var a = "", i = 0; e.attributes && i < e.attributes.length; i++)
            if (-1 == e.attributes[i].nodeName.indexOf("data-waveid")) {
                var r = "wave5style" == e.attributes[i].nodeName ? "style" : e.attributes[i].nodeName;
                (("style" == r && "" != e.attributes[i].value) || "style" != r) && (a += " <span class='wave5attribute'>" + r + "=\"<span class='wave5value'>" + htmlEntities(e.attributes[i].value) + '</span>"</span>');
            }
        e == this.selectedElement && (t += "<div id='wave5selectedcode'>");
        var s = a11ycheck.xpath.getXPathByElement(e),
            o = "";
        if (void 0 !== a11ycheck.report.things.iconBaseXpaths[s]) {
            o = 'data-reportxpath="' + s + '"';
            for (var l = 0; l < a11ycheck.report.things.iconBaseXpaths[s].length; l++) {
                var c = a11ycheck.report.things.iconBaseXpaths[s][l];
                void 0 !== c.data && (null == this.codeIcons[s] && (this.codeIcons[s] = []), this.codeIcons[s].push(iconCodeImage(c, 0)));
            }
        }
        o && (t += "<div " + o + ">"), (t += "<span class='wave5element'>" + htmlEntities("<" + e.nodeName.toLowerCase()) + a + ">");
        for (i = 0; i < e.childNodes.length; i++) t += this.displayTreePrivate(e.childNodes[i], "");
        return (
            (e.innerHTML && e.innerHTML.length > 0) || -1 == ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.nodeName.toLowerCase())
                ? (t += htmlEntities("</" + e.nodeName.toLowerCase() + ">") + "</span>")
                : (t += "</span>"),
            o && (t += "</div>"),
            t
        );
    }),
    (a11ycheck.engine = {
        iconList: {},
        ruleTimes: {},
        statistics: { allitemcount: 0 },
        icons: {
            docs: {},
            stats: {},
            setStats: function (e) {
                this.stats = e;
            },
            getStats: function (e) {
                return this.stats[e];
            },
        },
        results: {},
        overrides: {},
        overriddenby: {},
        contrast: [],
        fn: {},
    }),
    (a11ycheck.engine.fn.setupResultStack = function () {
        for (var e in a11ycheck.engine.icons.docs) {
            var t = a11ycheck.engine.icons.docs[e].cat_code;
            void 0 === a11ycheck.engine.results[t] && (a11ycheck.engine.results[t] = { description: a11ycheck.engine.icons.docs[e].category, count: 0, items: {} });
        }
    }),
    (a11ycheck.engine.fn.resetEngine = function () {
        (a11ycheck.engine.icons = {
            docs: a11ycheck.engine.icons.docs,
            stats: {},
            setStats: function (e) {
                this.stats = e;
            },
            getStats: function (e) {
                return this.stats[e];
            },
        }),
            (a11ycheck.engine.contrast = {}),
            (a11ycheck.engine.results = {}),
            (a11ycheck.engine.iconList = {}),
            (a11ycheck.engine.statistics = { allitemcount: 0, totalelements: 0 });
    }),
    (a11ycheck.engine.run = async function (e) {
        var t = new Date(),
            n = null,
            a = null,
            i = a11ycheck.rules,
            r = $(a11ycheck.page);
        for (e in i) {
            n = new Date();
            try {
                i[e](r);
            } catch (t) {
                console.log("RULE FAILURE(" + e + "): " + t.stack);
            }
            (a = new Date()), (a11ycheck.engine.ruleTimes[e] = a - n), waveconfig.debug && console.log("RULE: " + e + " (" + a11ycheck.engine.ruleTimes[e] + "ms)");
        }
        return (EndTimer = new Date()), waveconfig.debug && console.log("TOTAL RULE TIME: " + (EndTimer - t) + "ms"), Promise.all([]);
    }),
    (a11ycheck.engine.fn.override = function (e, t) {
        for (a11ycheck.engine.overrides[e] || (a11ycheck.engine.overrides[e] = {}), i = 0; i < t.length; i++) a11ycheck.engine.overrides[e][t[i]] = !0;
    }),
    (a11ycheck.engine.fn.overrideby = function (e, t) {
        for (a11ycheck.engine.overriddenby[e] || (a11ycheck.engine.overriddenby[e] = {}), i = 0; i < t.length; i++) a11ycheck.engine.overriddenby[e][t[i]] = !0;
    }),
    (a11ycheck.engine.fn.hasTextContent = function (e) {
        var t = !1,
            n = $(e)
                .filter(function () {
                    return 8 !== this.nodeType;
                })
                .text();
        return (
            n.length > 0 && -1 == n.search(/^\s+$/i)
                ? (t = !0)
                : $(e)
                      .find("img, svg")
                      .each(function (e, n) {
                          var a = n.getAttribute("alt");
                          a && -1 == a.search(/^\s+$/i) && (t = !0);
                          var i = n.getAttribute("title");
                          i && -1 == i.search(/^\s+$/i) && (t = !0);
                          var r = n.getAttribute("aria-label");
                          r && -1 == r.search(/^\s+$/i) && (t = !0);
                          var s = n.getAttribute("aria-labelledby");
                          s && -1 == s.search(/^\s+$/i) && (t = !0);
                      }),
            t
        );
    }),
    (a11ycheck.engine.fn.isLabeledByTag = function (e, t) {
        (e = $(e)), (t = $(t));
        var n = !1,
            a = e.attr("id"),
            i = e.parents("label");
        if (t.find('label[for="' + a + '"]').length > 0) n = !0;
        else if (1 == i.length) {
            1 == i.find("input:not(:image,:submit,:reset,:button,[type=hidden]), select, textarea").length && (i.attr("for") ? i.attr("for") == a && (n = !0) : (n = !0));
        }
        return n;
    }),
    (a11ycheck.engine.fn.isLabeled = function (e, t) {
        var n = $(e);
        return n.attr("title") || n.attr("aria-labelledby") || n.attr("aria-label") || a11ycheck.engine.fn.isLabeledByTag(n, t);
    }),
    (a11ycheck.engine.fn.previousElementSibling = function (e) {
        if ("undefined" !== e.previousElementSibling) return e.previousElementSibling;
        for (; (e = e.previousSibling); ) if (1 === e.nodeType) return e;
    }),
    (a11ycheck.engine.fn.getPath = function (e) {
        if (4 != a11ycheck.reporttype) return !1;
        if (!(e instanceof HTMLElement)) return !1;
        for (var t = []; e.nodeType === Node.ELEMENT_NODE; ) {
            var n = e.nodeName;
            if (e.id) n += "#" + e.id;
            else {
                for (var a = e, i = []; null !== a && a.nodeType === Node.ELEMENT_NODE; ) i.unshift(a.nodeName), (a = a11ycheck.engine.fn.previousElementSibling(a));
                "HTML" !== i[0] && (i[0] = i[0] + ":first-child"), (n = i.join(" + "));
            }
            t.unshift(n), (e = e.parentNode);
        }
        return t.join(" > ");
    }),
    (a11ycheck.engine.fn.addIcon = function (e, t, n) {
        var a = "#" == e ? 0 : e.getAttribute("data-waveid"),
            i = a11ycheck.engine.icons.docs[t],
            r = 0 === a ? "#" : a11ycheck.xpath.XPath[a],
            s = !("#" === r || !($(e).is(":hidden") || $(e).offset().top < 0 || $(e).offset().left < 0)),
            o = a11ycheck.engine.fn.getPath(e);
        if (i) {
            if (a11ycheck.engine.overrides[t]) {
                for (var l in a11ycheck.engine.overrides[t])
                    if (void 0 !== a11ycheck.engine.iconList[l] && void 0 !== a11ycheck.engine.iconList[l].items[r]) {
                        delete a11ycheck.engine.iconList[l].items[r];
                        break;
                    }
            } else if (a11ycheck.engine.overriddenby[t]) for (var l in a11ycheck.engine.overriddenby[t]) if (void 0 !== a11ycheck.engine.iconList[l] && void 0 !== a11ycheck.engine.iconList[l].items[r]) return;
            a11ycheck.engine.iconList[t] || (a11ycheck.engine.iconList[t] = { items: {} }),
                null == a11ycheck.engine.iconList[t].items[r]
                    ? (a11ycheck.engine.iconList[t].items[r] = "contrast" == t ? { id: t, description: i.title, text: [void 0], contrastdata: n, selector: o, hidden: s } : { id: t, description: i.title, text: [n], selector: o, hidden: s })
                    : a11ycheck.engine.iconList[t].items[r].text.push(n);
        }
    }),
    (a11ycheck.engine.fn.addPagewideIcon = function (e, t) {
        this.addIcon("#", e, t);
    }),
    (a11ycheck.engine.fn.structureOutput = function () {
        for (var e in a11ycheck.engine.iconList) {
            var t = a11ycheck.engine.icons.docs[e];
            for (var n in a11ycheck.engine.iconList[e].items) {
                var a = t.cat_code;
                a11ycheck.engine.statistics.allitemcount || (a11ycheck.engine.statistics.allitemcount = 0),
                    a11ycheck.engine.statistics.allitemcount++,
                    a11ycheck.engine.results[a].count || (a11ycheck.engine.results[a].count = 0),
                    a11ycheck.engine.results[a].count++,
                    a11ycheck.engine.results[a].items[e]
                        ? (a11ycheck.engine.results[a].items[e].count++,
                          a11ycheck.engine.results[a].items[e].xpaths.push(n),
                          a11ycheck.engine.results[a].items[e].selectors.push(a11ycheck.engine.iconList[e].items[n].selector),
                          a11ycheck.engine.results[a].items[e].text.push(a11ycheck.engine.iconList[e].items[n].text),
                          a11ycheck.engine.results[a].items[e].hidden.push(a11ycheck.engine.iconList[e].items[n].hidden),
                          "contrast" === a11ycheck.engine.results[a].items[e].id && a11ycheck.engine.results[a].items[e].contrastdata.push(a11ycheck.engine.iconList[e].items[n].contrastdata))
                        : ((a11ycheck.engine.results[a].items[e] = {
                              id: e,
                              description: t.title,
                              count: 1,
                              xpaths: [n],
                              selectors: [a11ycheck.engine.iconList[e].items[n].selector],
                              text: [a11ycheck.engine.iconList[e].items[n].text],
                              hidden: [a11ycheck.engine.iconList[e].items[n].hidden],
                          }),
                          "contrast" === a11ycheck.engine.results[a].items[e].id && (a11ycheck.engine.results[a].items[e].contrastdata = [a11ycheck.engine.iconList[e].items[n].contrastdata]),
                          "api" !== waveconfig.platform && (a11ycheck.engine.results[a].items[e].icon_name = t.icon_name));
            }
        }
    }),
    (a11ycheck.engine.fn.elementHasText = function (e) {
        var t = !1;
        if (!e) return !1;
        for (var n = e.childNodes, a = 0; a < n.length; a++)
            if (3 == n[a].nodeType && n[a].nodeValue.length > 0 && -1 == n[a].nodeValue.search(/^\s+$/i)) {
                t = !0;
                break;
            }
        return (
            "INPUT" == e.tagName && e.value.length > 0 && ["text", "button", "email", "number", "password", "reset", "submit", "tel", "url", "button"].includes(e.type) && (t = !0),
            "SELECT" == e.tagName && e.options.length > 0 && (t = !0),
            t
        );
    }),
    (a11ycheck.engine.fn.calculateContrast = function (e, t, n) {
        if (!e) {
            a11ycheck.page = document
            e = a11ycheck.page.body;
            t = this.getColor(e, "fg");
            if ("0" == (n = this.getColor(e, "bg"))[3]) "0" == (n = this.getColor(a11ycheck.page.querySelector("html"), "bg"))[3] && (n = ["255", "255", "255", "1", "rgb(255, 255, 255)"]);
            a11ycheck.engine.fn.elementHasText(e) && this.checkContrast(e, t, n);
        }
        for (var a = 0; e.children && a < e.children.length; a++)
            if (((child = e.children[a]), "wave5bottombar" !== child.getAttribute("id") && "SVG" !== child.tagName.toUpperCase() && "SCRIPT" !== child.tagName && "IMG" !== child.tagName && "STYLE" !== child.tagName && 1 != child.disabled))
                if (a11ycheck.engine.contrast[child.getAttribute("data-waveid")] || 0 === child.offsetWidth || 0 === child.offsetHeight) child.childNodes && a11ycheck.engine.fn.calculateContrast(child, t, n);
                else {
                    var i = this.getColor(child, "fg"),
                        r = this.getColor(child, "bg");
                    "0" == i[3] && (i = t),
                        "0" == r[3] && (r = n),
                        a11ycheck.engine.fn.elementHasText(child) && 1 == parseFloat(r[3])
                            ? i !== t || r !== n
                                ? (this.checkContrast(child, i, r), a11ycheck.engine.fn.calculateContrast(child, i, r))
                                : a11ycheck.engine.fn.calculateContrast(child, i, r)
                            : child.childNodes && a11ycheck.engine.fn.calculateContrast(child, i, r);
                }
    }),
    (a11ycheck.engine.fn.getColor = function (e, t) {
        if (((style = getComputedStyle(e)), "fg" == t)) {
            var n = style.color.replace(/[^\d,.]/g, "").split(",");
            return n[3] || (n[3] = "1"), (n[4] = style.color), n;
        }
        var a = style.backgroundColor.replace(/[^\d,.]/g, "").split(",");
        return a[3] || (a[3] = "1"), (style.backgroundImage.indexOf("linear-gradient") > -1 || style.opacity < 1 || ("none" != style.filter && "blur(0px)" != style.filter)) && (a[3] = ".1"), (a[4] = style.backgroundColor), a;
    }),
    (a11ycheck.engine.fn.checkContrast = function (e, t, n) {
        var a = $(e),
            i = {},
            r = "",
            s = new ColorManager(t),
            o = new ColorManager(n);
        ratioobject = s.contrast(o);
        var l = ratioobject.ratio;
        if (l) {
            var c = !1,
                d = !1;
            (r = l + ":1"), (i.ratio = Number(l)), (i.contrastratio = r);
            var u = (72 * Number(a.css("font-size").substring(0, a.css("font-size").length - 2))) / 96;
            if ((l < 4.5 && ((c = !0), (u >= 18 || (u >= 14 && "bold" === a.css("font-weight")) || (u >= 14 && parseInt(a.css("font-weight")) >= 700)) && ((c = l < 3), (d = !0))), c)) {
                var p = RGBToHex(t[4]),
                    h = RGBToHex(n[4]),
                    g = [Dec2(i.ratio), p, h, d];
                a11ycheck.engine.contrast[e.getAttribute("data-waveid")] = { contrastData: g, element: e };
            }
        }
    });
var ColorManager = function (e) {
    if ("transparent" === e) e = [0, 0, 0, 0];
    else if ("string" == typeof e) {
        var t = e;
        if (!(e = t.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/))) throw new Error("Invalid string: " + t);
        e.shift();
    }
    void 0 === e[3] && (e[3] = 1),
        (e = e.map(function (e) {
            return Math.round(e, 3);
        })),
        (this.rgba = e);
};
function Dec2(e) {
    if (-1 !== (e = String(e)).indexOf(".")) {
        var t = e.split(".");
        return 1 == t.length ? Number(e) : Number(t[0] + "." + t[1].charAt(0) + t[1].charAt(1));
    }
    return Number(e);
}
function RGBToHex(e) {
    let t = e.indexOf(",") > -1 ? "," : " ",
        n = (+(e = e.substr(4).split(")")[0].split(t))[0]).toString(16),
        a = (+e[1]).toString(16),
        i = (+e[2]).toString(16);
    return 1 == n.length && (n = "0" + n), 1 == a.length && (a = "0" + a), 1 == i.length && (i = "0" + i), "#" + n + a + i;
}
if (
    ((ColorManager.prototype = {
        get rgb() {
            return this.rgba.slice(0, 3);
        },
        get alpha() {
            return this.rgba[3];
        },
        set alpha(e) {
            this.rgba[3] = e;
        },
        get luminance() {
            for (var e = this.rgba.slice(), t = 0; t < 3; t++) {
                var n = e[t];
                (n = (n /= 255) < 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)), (e[t] = n);
            }
            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        },
        clone: function () {
            return new ColorManager(this.rgba);
        },
        overlayOn: function (e) {
            var t = this.clone(),
                n = this.alpha;
            if (n >= 1) return t;
            for (var a = 0; a < 3; a++) t.rgba[a] = t.rgba[a] * n + e.rgba[a] * e.rgba[3] * (1 - n);
            return (t.rgba[3] = n + e.rgba[3] * (1 - n)), t;
        },
        contrast: function (e) {
            if (this.alpha >= 1) {
                e.alpha < 1 && (e = e.overlayOn(this));
                var t = this.luminance + 0.05,
                    n = e.luminance + 0.05,
                    a = t / n;
                return n > t && (a = 1 / a), { ratio: a };
            }
            return !1;
        },
    }),
    (Math.round = (function () {
        var e = Math.round;
        return function (t, n) {
            n = +n || 0;
            var a = Math.pow(10, n);
            return e(t * a) / a;
        };
    })()),
    (a11ycheck.engine.icons.docs = {
        alt_missing: {
            id: "1",
            name: "alt_missing",
            icon_name: "alt_missing",
            title: "Missing alternative text",
            category: "Errors",
            cat_code: "error",
            summary: "Image alternative text is not present.",
            purpose: "Each image must have an alt attribute. Without alternative text, the content of an image will not be available to screen reader users or when the image is unavailable.",
            actions:
                'Add an alt attribute to the image. The attribute value should accurately and succinctly present the content and function of the image. If the content of the image is conveyed in the context or surroundings of the image, or if the image does not convey content or have a function, it should be given empty/null alternative text (alt="").',
            details: "An image does not have an alt attribute.",
            resources: "https://webaim.org/techniques/alttext/ Appropriate Use of Alternative Text [WebAIM]",
            icon_order: "1",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_link_missing: {
            id: "21",
            name: "alt_link_missing",
            icon_name: "alt_link_missing",
            title: "Linked image missing alternative text",
            category: "Errors",
            cat_code: "error",
            summary: "An image without alternative text results in an empty link.",
            purpose:
                "Images that are the only thing within a link must have descriptive alternative text. If an image is within a link that contains no text and that image does not provide alternative text, a screen reader has no content to present to the user regarding the function of the link.",
            actions: "Add appropriate alternative text that presents the content of the image and/or the function of the link.",
            details: "An image without alternative text (missing alt attribute or an alt value that is null/empty or only space characters) is within a link that does not contain text and an image with alternative text.",
            resources: "",
            icon_order: "2",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        alt_spacer_missing: {
            id: "8",
            name: "alt_spacer_missing",
            icon_name: "alt_spacer_missing",
            title: "Spacer image missing alternative text",
            category: "Errors",
            cat_code: "error",
            summary: "A layout spacer image (which should have null/empty alternative text) does not have an alt attribute.",
            purpose: 'Spacer images are used to maintain layout. They do not convey content and should be given null/empty alternative text (alt="") so they are not presented to users and are ignored by screen readers.',
            actions: 'If the image is a spacer image, give the image null/empty alternative text (alt=""). Alternatively, consider using CSS instead of spacer images to control positioning and layout.',
            details: 'An image is missing an alt attribute and has a width or height of 3 pixels or less or has a file name starting with "spacer.*", "space.*", or "blank.*". ',
            resources: "",
            icon_order: "3",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_input_missing: {
            id: "22",
            name: "alt_input_missing",
            icon_name: "alt_input_missing",
            title: "Image button missing alternative text",
            category: "Errors",
            cat_code: "error",
            summary: "Alternative text is not present for a form image button.",
            purpose:
                "Image buttons provide important functionality that must be presented in alternative text. Without alternative text, the function of an image button is not made available to screen reader users or when images are disabled or unavailable.",
            actions: 'Add appropriate alternative text that presents the function of the image button (e.g., &lt;input src="button.gif" type="image" alt="Submit search"&gt;).',
            details: 'An image button (&lt;input type="image"&gt;) does not have an alt attribute or has an alt value that is null/empty (alt="") or only space characters.',
            resources: "",
            icon_order: "4",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        alt_area_missing: {
            id: "2",
            name: "alt_area_missing",
            icon_name: "alt_area_missing",
            title: "Image map area missing alternative text",
            category: "Errors",
            cat_code: "error",
            summary: "Alternative text is not present for an image map area (hot spot).",
            purpose:
                "Image map areas or clickable hot spots provide important functionality that must be provided in alternative text. Without alternative text, the function of the area is not made available to screen reader users or when images are unavailable.",
            actions: "Add a descriptive alt attribute value to each area element. Additionally, ensure that the area elements are listed in the code in a logical, intuitive order (e.g., matching the visual order, alphabetically, etc.).",
            details: 'An area element does not have the alt attribute or has an alt value that is null/empty (alt="") or only space characters.',
            resources: "",
            icon_order: "5",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        alt_map_missing: {
            id: "23",
            name: "alt_map_missing",
            icon_name: "alt_map_missing",
            title: "Image map missing alternative text",
            category: "Errors",
            cat_code: "error",
            summary: "An image that has hot spots does not have an alt attribute.",
            purpose: "Any content or function of an image that uses an image map (hot spots) and does not have an alt attribute will not be available to screen reader users or if the image is unavailable.",
            actions:
                'Add an alt attribute to the image. Ensure the alt attribute value for the image map image is appropriate. The alternative text is typically null/empty (alt=""), unless the image conveys content not conveyed in the hot spot areas (e.g., "Map of the United States").',
            details: "An image element has the usemap attribute and no alt attribute.",
            resources: "",
            icon_order: "6",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        longdesc_invalid: {
            id: "34",
            name: "longdesc_invalid",
            icon_name: "longdesc_invalid",
            title: "Invalid longdesc",
            category: "Errors",
            cat_code: "error",
            summary: "The longdesc attribute is not a URL.",
            purpose:
                "The longdesc attribute of an image must be a valid URL of a page that contains a description of the image content. A longdesc value that contains image description text will not provide any accessibility information. Due to poor support, a link to the long description content should be used instead of longdesc.",
            actions: "Remove the longdesc attribute and provide a link to the long description content. If the longdesc attribute is maintained, ensure the attribute value is a valid URL/filename.",
            details: "The longdesc attribute value:\n<ul>\n<li>is empty</li>\n<li>is not a URL or filename</li>\n<li>is a URL or filename with an extension of .jpg, .gif, or .png</li>\n</ul>",
            resources: "",
            icon_order: "7",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        label_missing: {
            id: "29",
            name: "label_missing",
            icon_name: "label_missing",
            title: "Missing form label",
            category: "Errors",
            cat_code: "error",
            summary: "A form control does not have a corresponding label.",
            purpose:
                "If a form control does not have a properly associated text label, the function or purpose of that form control may not be presented to screen reader users. Form labels also provide visible descriptions and larger clickable targets for form controls.",
            actions:
                "If a text label for a form control is visible, use the &lt;label&gt; element to associate it with its respective form control. If there is no visible label, either provide an associated label, add a descriptive title attribute to the form control, or reference the label(s) using aria-labelledby. Labels are not required for image, submit, reset, button, or hidden form controls.",
            details:
                "An &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;select&gt;, or &lt;textarea&gt; does not have a properly associated label. A properly associated label is:\n<ul>\n<li>a &lt;label&gt; element with a for attribute value that is equal to the id of a unique form control\n<li>a &lt;label&gt; element that surrounds the form control, does not surround any other form controls, and does not reference another element with its for attribute\n<li>a non-empty title attribute, or\n<li>a non-empty aria-labelledby attribute.\n</ul>",
            resources: "",
            icon_order: "8",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        label_empty: {
            id: "28",
            name: "label_empty",
            icon_name: "label_empty",
            title: "Empty form label",
            category: "Errors",
            cat_code: "error",
            summary: "A form label is present, but does not contain any content.",
            purpose: "A &lt;label&gt; element that is associated to a form control but does not contain text will not present any information about the form control to the user.",
            actions:
                "Ensure that the form label contains text that describes the function of the associated form control. Labels are not required for image, submit, reset, button, or hidden form controls. If a label is not necessary visually, a descriptive title attribute may be added to the form control.",
            details: "A form label is present and associated with an existing form control (using for/id or surrounds the form control), but does not contain any text or images with alternative text.",
            resources: "",
            icon_order: "9",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        label_multiple: {
            id: "30",
            name: "label_multiple",
            icon_name: "label_multiple",
            title: "Multiple form labels",
            category: "Errors",
            cat_code: "error",
            summary: "A form control has more than one label associated with it.",
            purpose: "A form control should have at most one associated label element. If more than one label element is associated to the control, assistive technology may not read the appropriate label.",
            actions: "Ensure that at most one label element is associated to the form control. If multiple form labels are necessary, use aria-labelledby.",
            details: "Two or more &lt;label&gt;s are associated to a single &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;select&gt;, or &lt;textarea&gt;.",
            resources: "",
            icon_order: "10",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        aria_reference_broken: {
            id: "131",
            name: "aria_reference_broken",
            icon_name: "aria_reference_broken",
            title: "Broken ARIA reference",
            category: "Errors",
            cat_code: "error",
            summary: "An aria-labelledby or aria-describedby reference exists, but the target for the reference does not exist.",
            purpose: "ARIA labels and descriptions will not be presented if the element referenced does not exist in the page.",
            actions: "Ensure the element referenced in the aria-labelledby or aria-describedby attribute value is present within the page and presents a proper label or description.",
            details: "An element has an aria-labelledby or aria-describedby value that does not match the id attribute value of another element in the page.",
            resources: "",
            icon_order: "11",
            position: "last",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        aria_menu_broken: {
            name: "aria_menu_broken",
            category: "Errors",
            cat_code: "error",
            title: "Broken ARIA menu",
            summary: "An ARIA menu does not contain required menu items.",
            purpose:
                "ARIA menus are application menus (like those used in software menu) with a specific keyboard interactions. They are NOT for navigation links on a web site and must contain at least one menuitem, menuitemcheckbox, or menuitemradio element.",
            actions: "Ensure that the menu is an application menu and has the appropriate keyboard interactions (menu items are navigated via the arrow keys, not via the Tab key) and internal menu items, otherwise remove the menu role.",
            details: 'An element with role="menu" does not contain at least one element with role="menuitem", role="menuitemcheckbox", or role="menuitemradio".',
            resources: "",
            icon_order: "12",
            position: "first",
            page_rule: "0",
            icon_name: "aria_menu_broken",
            guidelines: {
                39: { level_id: 1, level_name: "WCAG 2 A", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1", guideline_id: "39" },
                77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        title_invalid: {
            id: "58",
            name: "title_invalid",
            icon_name: "title_invalid",
            title: "Missing or uninformative page title",
            category: "Errors",
            cat_code: "error",
            summary: "The page title is missing or not descriptive.",
            purpose:
                "A descriptive title helps users understand a page's purpose or content. Without a proper title, many users (especially those using screen readers or other assistive technology) may have difficulty orienting themselves to the page.",
            actions: "Add a brief, descriptive page title.",
            details: 'The page title is missing, empty, contains only whitespace characters, or begins with "untitled".',
            resources: "",
            icon_order: "13",
            position: "last",
            page_rule: "1",
            guidelines: { 50: { guideline_id: "50", code: "2.4.2", name: "2.4.2 Page Titled (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.2" } },
            levels: { 1: "WCAG 2 A" },
        },
        language_missing: {
            id: "116",
            name: "language_missing",
            icon_name: "language_missing",
            title: "Language missing or invalid",
            category: "Errors",
            cat_code: "error",
            summary: "The language of the document is not identified or a lang attribute value is invalid.",
            purpose: "Identifying the language of the page or page elements allows screen readers to read the content in the appropriate language. It also facilitates automatic translation of content.",
            actions: 'Identify the document language using the &lt;html lang&gt; attribute with a valid value (e.g., &lt;html lang="en"&gt;). Ensure that all lang attribute values are valid.',
            details: "The &lt;html lang&gt; attribute is missing or is empty, or a lang attribute value is not a valid language identifier.",
            resources: "",
            icon_order: "14",
            position: "last",
            page_rule: "1",
            guidelines: { 59: { guideline_id: "59", code: "3.1.1", name: "3.1.1 Language of Page (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        meta_refresh: {
            id: "69",
            name: "meta_refresh",
            icon_name: "meta_refresh",
            title: "Page refreshes or redirects",
            category: "Errors",
            cat_code: "error",
            summary: "The page is set to automatically change location or refresh using a &lt;meta&gt; tag.",
            purpose: "Pages that automatically change location or refresh pose significant usability issues, particularly for screen reader and keyboard users.",
            actions: "Remove the &lt;meta&gt; refresh and give the user control over time-sensitive content changes.",
            details: 'A &lt;meta http-equiv="refresh"&gt; tag is present.',
            resources: "",
            icon_order: "15",
            position: "last",
            page_rule: "1",
            guidelines: {
                42: { guideline_id: "42", code: "2.2.1", name: "2.2.1 Timing Adjustable (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.2.1" },
                43: { guideline_id: "43", code: "2.2.2", name: "2.2.2 Pause, Stop, Hide (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.2.2" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        heading_empty: {
            id: "49",
            name: "heading_empty",
            icon_name: "heading_empty",
            title: "Empty heading",
            category: "Errors",
            cat_code: "error",
            summary: "A heading contains no content.",
            purpose: "Some users, especially keyboard and screen reader users, often navigate by heading elements. An empty heading will present no information and may introduce confusion.",
            actions: "Ensure that all headings contain informative content.",
            details: "A heading element is present that contains no text (or only spaces) and no images with alternative text.",
            resources: "",
            icon_order: "16",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        button_empty: {
            id: "121",
            name: "button_empty",
            icon_name: "button_empty",
            title: "Empty button",
            category: "Errors",
            cat_code: "error",
            summary: "A button is empty or has no value text.",
            purpose: "When navigating to a button, descriptive text must be presented to screen reader users to indicate the function of the button.",
            actions: "Place text content within the &lt;button&gt; element or give the &lt;input&gt; element a value attribute.",
            details:
                'A &lt;button&gt; element is present that contains no text content (or alternative text), or an &lt;input type="submit"&gt;, &lt;input type="button"&gt;, or &lt;input type="reset"&gt; has an empty or missing value attribute.',
            resources: "",
            icon_order: "17",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        link_empty: {
            id: "50",
            name: "link_empty",
            icon_name: "link_empty",
            title: "Empty link",
            category: "Errors",
            cat_code: "error",
            summary: "A link contains no text.",
            purpose: "If a link contains no text, the function or purpose of the link will not be presented to the user. This can introduce confusion for keyboard and screen reader users.",
            actions: "Remove the empty link or provide text within the link that describes the functionality and/or target of that link.",
            details: "An anchor element has an href attribute, but contains no text (or only spaces) and no images with alternative text.",
            resources: "",
            icon_order: "18",
            position: "last",
            page_rule: "0",
            guidelines: { 52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" } },
            levels: { 1: "WCAG 2 A" },
        },
        link_skip_broken: {
            id: "47",
            name: "link_skip_broken",
            icon_name: "link_skip_broken",
            title: "Broken skip link",
            category: "Errors",
            cat_code: "error",
            summary: "A skip navigation link exists, but the target for the link does not exist or the link is not keyboard accessible.",
            purpose: "A link to jump over navigation or jump to the main content of the page assists keyboard users only if the link is properly functioning and is keyboard accessible.",
            actions: "Ensure that the target for the link exists and that the link is not hidden with CSS display:none or visibility:hidden.",
            details:
                'An in-page link contains the words "skip" or "jump" and is hidden with CSS display:none or visibility:hidden, or the link has an href attribute that does not match the id value of another element within the page or the name attribute value of an anchor element within the page.',
            resources: "",
            icon_order: "19",
            position: "last",
            page_rule: "0",
            guidelines: {
                39: { level_id: 1, level_name: "WCAG 2 A", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1", guideline_id: "39" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        th_empty: {
            id: "32",
            name: "th_empty",
            icon_name: "th_empty",
            title: "Empty table header",
            category: "Errors",
            cat_code: "error",
            summary: "A &lt;th&gt; (table header) contains no text.",
            purpose: "The &lt;th&gt; element helps associate table cells with the correct row/column headers. A &lt;th&gt; that contains no text may result in cells with missing or incorrect header information.",
            actions:
                "If the table cell is a header, provide text within the cell that describes the column or row. If the cell is not a header or must remain empty (such as the top-left cell in a data table), make the cell a &lt;td&gt; rather than a &lt;th&gt;.",
            details: "A &lt;th&gt; element does not contain any text (or contains only spaces) and no images with alternative text.",
            resources: "",
            icon_order: "20",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        blink: {
            id: "57",
            name: "blink",
            icon_name: "blink",
            title: "Blinking content",
            category: "Errors",
            cat_code: "error",
            summary: "Blinking content is present.",
            purpose: "Blinking content can be distracting and confusing to users, particularly those with certain cognitive disabilities.",
            actions: "Remove the blinking effect (&lt;blink&gt; element or text-decoration:blink style). Important text can be styled in other ways.",
            details: "A non-empty &lt;blink&gt; element or other text has CSS text-decoration:blink styling.",
            resources: "",
            icon_order: "21",
            position: "after",
            page_rule: "0",
            guidelines: { 43: { guideline_id: "43", code: "2.2.2", name: "2.2.2 Pause, Stop, Hide (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.2.2" } },
            levels: { 1: "WCAG 2 A" },
        },
        marquee: {
            id: "56",
            name: "marquee",
            icon_name: "marquee",
            title: "Marquee",
            category: "Errors",
            cat_code: "error",
            summary: "A &lt;marquee&gt; element is present.",
            purpose: "A marquee element presents scrolling text that the user cannot stop. Scrolling animated content can be distracting and confusing to users, particularly for those with certain cognitive disabilities.",
            actions: "Remove the marquee element. If content must scroll, use an alternative scrolling mechanism that allows the user to pause or stop the animation.",
            details: "A &lt;marquee&gt; element is present.",
            resources: "",
            icon_order: "22",
            position: "after",
            page_rule: "0",
            guidelines: { 43: { guideline_id: "43", code: "2.2.2", name: "2.2.2 Pause, Stop, Hide (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.2.2" } },
            levels: { 1: "WCAG 2 A" },
        },
        contrast: {
            id: "126",
            name: "contrast",
            icon_name: "contrast",
            title: "Very low contrast",
            category: "Contrast Errors",
            cat_code: "contrast",
            summary: "Very low contrast between text and background colors.",
            purpose: "Adequate contrast of text is necessary for all users, especially users with low vision.",
            actions: "Increase the contrast between the foreground (text) color and the background color. Large text (larger than 18 point or 14 point bold) does not require as much contrast as smaller text.",
            details:
                "Text is present that has a contrast ratio less than 4.5:1, or large text (larger than 18 point or 14 point bold) has a contrast ratio less than 3:1. WCAG requires that page elements have both foreground AND background colors defined (or inherited) that provide sufficient contrast. When text is presented over a background image, the text must have a background color defined (typically in CSS) that provides adequate text contrast when the background image is disabled or unavailable. WAVE does not identify contrast issues in text with CSS transparency, gradients, or filters.",
            resources: "",
            icon_order: "1",
            position: "first",
            page_rule: "0",
            guidelines: { 32: { guideline_id: "32", code: "1.4.3", name: "1.4.3 Contrast (Minimum) (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc1.4.3" } },
            levels: { 2: "WCAG 2 AA" },
        },
        alt_suspicious: {
            id: "27",
            name: "alt_suspicious",
            icon_name: "alt_suspicious",
            title: "Suspicious alternative text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Alternative text is likely insufficient or contains extraneous information.",
            purpose: "If the alternative text for an image does not provide the same content or information conveyed by the image, that content will not be available to screen reader users and when images are unavailable.",
            actions:
                'Ensure that the alternative text for the image or image input provides a succinct, yet equivalent alternative to the content and function of the image. Screen readers and browser presentation inform the user that the object is an image, so alternative text of "image of..." (and similar) should be avoided. If the image does not convey content or if the content is presented in nearby text (e.g., a caption), null/empty alternative text (alt="") is appropriate.',
            details:
                'The alt text value of an image or image button:\r\n<ul>\r\n<li>begins with "graphic of", "bullet", or "image of",\r\n<li>ends with "image" or "graphic",\r\n<li>contains only space characters (alt=" "),\r\n<li>is an image file name (e.g. alt="photo.gif"), or\r\n<li>is one of the following: "image", "graphic", "photo", "photograph", "drawing", "painting", "artwork", "logo", "bullet", "button", "arrow", "more", "spacer", "blank", "chart", "table", "diagram", "graph", or "*".\r\n</ul>',
            resources: "",
            icon_order: "1",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_redundant: {
            id: "31",
            name: "alt_redundant",
            icon_name: "alt_redundant",
            title: "Redundant alternative text",
            category: "Alerts",
            cat_code: "alert",
            summary: "The alternative text for an image is the same as nearby or adjacent text.",
            purpose: "Alternative text that is the same as nearby or adjacent text will be presented multiple times to screen readers or when images are unavailable.",
            actions:
                'Change either the alternative text or the adjacent text to eliminate the redundancy. In most cases, you can give the image empty/null alternative text (alt="") because the content of the image is already provided in context through text. Linked images may often be combined with the adjacent text into one link, in which case the image may be given null/empty alternative text (alt="").',
            details: "The alternative text is the same as text that is within 15 characters of the image.",
            resources: "",
            icon_order: "2",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_duplicate: {
            id: "36",
            name: "alt_duplicate",
            icon_name: "alt_duplicate",
            title: "A nearby image has the same alternative text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Two images near each other have the same alternative text.",
            purpose: "When two images have the same alternative text, this often causes redundancy or indicates incorrect alternative text.",
            actions:
                'Ensure that the alternative text for each image or image button is appropriate while removing unnecessary redundancy. If the content of the image is already conveyed elsewhere (through text or the alternative text of a nearby image) or if the image does not convey content, the image may generally be given empty/null alternative text (alt=""). Image buttons always convey a specific function, and thus cannot be given null alternative text.',
            details: "The same alternative text (case insensitive, but not null/empty) is present for two images or image buttons (&lt;input type='image'&gt;) near each other (no more than 2 other images separate them).",
            resources: "",
            icon_order: "3",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_long: {
            id: "41",
            name: "alt_long",
            icon_name: "alt_long",
            title: "Long alternative text",
            category: "Alerts",
            cat_code: "alert",
            summary: "An image has very long alternative text.",
            purpose:
                "Alternative text should be succinct, yet descriptive of the content and function of an image. Lengthy alternative text (more than around 100 characters) often indicates that extraneous content or content that is not available to sighted users is being presented.",
            actions:
                "Ensure the alternative text is succinct, yet descriptive. Ensure that no content is being presented in alternative text that is not available to sighted users viewing the image. When possible, either shorten the alternative text or provide the text alternative via another method (e.g., in text near the image, through a separate description page, etc.).",
            details:
                "The image's alt attribute value is more than 100 characters. Note that the 100 character limit is a rough and somewhat arbitrary length. For images that present complex content or lengthy text, alternative text longer than 100 characters may be appropriate.",
            resources: "",
            icon_order: "4",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        longdesc: {
            id: "43",
            name: "longdesc",
            icon_name: "longdesc",
            title: "Long description",
            category: "Alerts",
            cat_code: "alert",
            summary: "The longdesc attribute is present.",
            purpose: "Because of poor support, the longdesc attribute should not be used.",
            actions:
                "Because of poor browser support for longdesc, it should not be used to provide the description of complex images. The description may be provided:\n<ul>\n<li>in the alt attribute, if possible. Alt text should be succinct (generally no more than ~100 characters).\n<li>in nearby text (e.g., a caption, data table, etc.)\n<li>via a link to a separate description page that contains an accurate and equivalent description.\n</ul>",
            details: "An image has a longdesc attribute containing a valid URL.",
            resources: "",
            icon_order: "5",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        image_title: {
            name: "image_title",
            category: "Alerts",
            cat_code: "alert",
            title: "Image with title",
            summary: "An image has a title attribute value but no alt value.",
            purpose:
                "The title attribute value for images that lack an alt attribute value will be presented to screen reader users. However, providing image content in the alt attribute typically value provides better accessibility, and should be used in most cases. The title attribute will generate a mouse hover tooltip which more or may not be desired - this tooltip will not be presented to touch screen or keyboard users.",
            actions: "Ensure the title attribute value presents the content and function of the image. For better accessibility, the alt attribute should be used when possible.",
            details: "An image is present that does not have an alt attribute or alt attribute value, but does have a title attribute value.",
            resources: "",
            icon_order: "6",
            position: "after",
            page_rule: "0",
            icon_name: "image_title",
            guidelines: { 17: { level_id: 1, level_name: "WCAG 2 A", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1", guideline_id: "17" } },
            levels: { 1: "WCAG 2 A" },
        },
        label_orphaned: {
            id: "35",
            name: "label_orphaned",
            icon_name: "label_orphaned",
            title: "Orphaned form label",
            category: "Alerts",
            cat_code: "alert",
            summary: "A form label is present, but it is not correctly associated with a form control.",
            purpose: "An incorrectly associated label does not provide functionality or information about the form control to the user. It usually indicates a coding or other form labeling issues.",
            actions: "Properly associate the label with its corresponding form control. If there is no corresponding form control, remove the label. Labels are not appropriate for image, submit, reset, button, or hidden form controls.",
            details:
                "A &lt;label&gt; element:\r\n<ul>\r\n<li>does not surround a form control and the for attribute is missing/empty\r\n<li>references an element that is not present in the page\r\n<li>references an element that is not an &lt;input&gt;, &lt;select&gt; or &lt;textarea&gt; element\r\n<li>references an &lt;input&gt; element with image, submit, reset, button, or hidden type\r\n</ul>",
            resources: "",
            icon_order: "7",
            position: "last",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        label_title: {
            id: "51",
            name: "label_title",
            icon_name: "label_title",
            title: "Unlabeled form control with title",
            category: "Alerts",
            cat_code: "alert",
            summary: "A form control does not have a label, but has a title.",
            purpose:
                "The title attribute value for unlabeled form controls will be presented to screen reader users. However, a properly associated text label provides better usability and accessibility and should be used unless the purpose of the form control is intuitive without the label.",
            actions:
                "If a visible text label is available for the form control, associate the text label to the form control using the label element. This provides additional functionality for end users because if the label is clicked it will set focus to the form control. If the form control is intuitive without a &lt;label&gt;, the title attribute value may be used. Note that the title attribute value will not generally be read by a screen reader if the control has a label and may not be available to sighted users, particularly keyboard-only users.",
            details: "An &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;textarea&gt;, or &lt;select&gt; element has a non-empty title attribute value and is missing a label or valid aria-labelledby reference.",
            resources: "",
            icon_order: "8",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        select_missing_label: {
            name: "select_missing_label",
            category: "Alerts",
            cat_code: "alert",
            title: "Select missing label",
            summary: "A select element does not have an associated label",
            purpose:
                "&lt;select&gt; elements must provide descriptive text about their function. This is typically provided via associated label text. If visual label text is not present and if the default select option adequately presents the purpose of the select menu, then an associated label is not necessary.",
            actions: "Ensure that the default option of the select menu presents the purpose of the select menu. If visible label text is present, it is best to associate this text to the select menu.",
            details: "A &lt;select&gt; element is present that does not have an associated label or ARIA label.",
            resources: "",
            icon_order: "9",
            position: "after",
            page_rule: "0",
            icon_name: "select_missing_label",
            guidelines: {
                27: { level_id: 1, level_name: "WCAG 2 A", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1", guideline_id: "27" },
                54: { level_id: 2, level_name: "WCAG 2 AA", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6", guideline_id: "54" },
                71: { level_id: 1, level_name: "WCAG 2 A", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2", guideline_id: "71" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        fieldset_missing: {
            id: "7",
            name: "fieldset_missing",
            icon_name: "fieldset_missing",
            title: "Missing fieldset",
            category: "Alerts",
            cat_code: "alert",
            summary: "A group of check boxes or radio buttons is not enclosed in a fieldset.",
            purpose:
                "A fieldset provides a visual and structural grouping of related form elements. It is typically necessary for groups of check boxes or radio buttons where a higher level description (called a legend) is necessary to understand the function of the check boxes or radio buttons. The description will be identified by a screen reader only if provided in a fieldset legend.",
            actions:
                "Determine whether the grouping of check boxes or radio buttons has or needs text that explains the purpose of the check boxes or radio button grouping. If so, mark up the group within a fieldset and put the group description in a legend element.",
            details: "Two or more checkbox or radio input elements within a form have the same name value, but are not enclosed in a fieldset.",
            resources: "",
            icon_order: "10",
            position: "before",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        legend_missing: {
            id: "3",
            name: "legend_missing",
            icon_name: "legend_missing",
            title: "Fieldset missing legend",
            category: "Alerts",
            cat_code: "alert",
            summary: "A fieldset does not have a legend.",
            purpose:
                "A fieldset legend presents a description of the form elements within a fieldset and is especially useful to screen reader users. A legend should be provided when a higher level description is necessary for groups of check boxes, radio buttons, or other form controls.",
            actions:
                "If a higher level description is necessary for the user to understand the function or purpose of the controls within the fieldset, provide this description within the &lt;legend&gt;. If this description or grouping is not necessary, the fieldset should probably be removed. Note that the legend is repeated to screen reader users for each form control within the fieldset.",
            details: "A fieldset does not have a legend or the legend is empty.",
            resources: "",
            icon_order: "11",
            position: "first",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                71: { guideline_id: "71", code: "3.3.2", name: "3.3.2 Labels or Instructions (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.3.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        heading_missing: {
            id: "70",
            name: "heading_missing",
            icon_name: "heading_missing",
            title: "No heading structure",
            category: "Alerts",
            cat_code: "alert",
            summary: "The page has no headings.",
            purpose: "Headings (&lt;h1&gt;-&lt;h6&gt;) provide important document structure, outlines, and navigation functionality to assistive technology users.",
            actions: "Provide a clear, consistent heading structure, generally one &lt;h1&gt; and sub-headings as appropriate. Except for very simple pages, most web pages should have a heading structure.",
            details: "No &lt;h1&gt;-&lt;h6&gt; elements are present in the page.",
            resources: "",
            icon_order: "12",
            position: "last",
            page_rule: "1",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        h1_missing: {
            id: "119",
            name: "h1_missing",
            icon_name: "h1_missing",
            title: "Missing first level heading",
            category: "Alerts",
            cat_code: "alert",
            summary: "A page does not have a first level heading.",
            purpose:
                "Headings facilitate page navigation for users of many assistive technologies. They also provide semantic and visual meaning and structure to the document. A first level heading (&lt;h1&gt;) should be present on nearly all pages. It should contain the most important heading on the page (generally the document title).",
            actions: "If the page presents a main heading, place it within an &lt;h1&gt; element. Add other sub-headings as necessary.",
            details: "A page does not have an &lt;h1&gt; element.",
            resources: "",
            icon_order: "13",
            position: "last",
            page_rule: "1",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        region_missing: {
            name: "region_missing",
            category: "Alerts",
            cat_code: "alert",
            title: "No page regions",
            summary: "No page regions or ARIA landmarks were found.",
            purpose: "Regions and ARIA landmarks identify significant page areas. Most web pages should have regions defined, particularly for the main content area.",
            actions: "If the page has visual regions or significant page areas, ensure the regions are defined with header, nav, main, footer, etc. elements.",
            details: "No header, nav, main, footer, or aside HTML regions, or banner, navigation, main, or contentinfo landmark roles were present in the page.",
            resources: "",
            icon_order: "14",
            position: "last",
            page_rule: "1",
            icon_name: "region_missing",
            guidelines: {
                27: { level_id: 1, level_name: "WCAG 2 A", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1", guideline_id: "27" },
                49: { level_id: 1, level_name: "WCAG 2 A", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1", guideline_id: "49" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        heading_skipped: {
            id: "62",
            name: "heading_skipped",
            icon_name: "heading_skipped",
            title: "Skipped heading level",
            category: "Alerts",
            cat_code: "alert",
            summary: "A heading level is skipped.",
            purpose: "Headings provide document structure and facilitate keyboard navigation by users of assistive technology. These users may be confused or experience difficulty navigating when heading levels are skipped.",
            actions: "Restructure the document headings to ensure that heading levels are not skipped.",
            details: "A heading level is skipped (e.g., an &lt;h1&gt; is followed by an &lt;h3&gt;, with no intermediate &lt;h2&gt;). Note that an &lt;h1&gt; is not required to be the first heading within the document.",
            resources: "",
            icon_order: "15",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        heading_possible: {
            id: "61",
            name: "heading_possible",
            icon_name: "heading_possible",
            title: "Possible heading",
            category: "Alerts",
            cat_code: "alert",
            summary: "Text appears to be a heading but is not a heading element.",
            purpose:
                "Heading elements (&lt;h1&gt;-&lt;h6&gt;) provide important document structure, outlines, and navigation functionality to assistive technology users. If heading text is not a true heading, this information and functionality will not be available for that text.",
            actions: "If the paragraph is a section heading, use a heading element instead (&lt;h1&gt;-&lt;h6&gt;).",
            details: "A &lt;p&gt; element contains less than 50 characters and is either:\n<ul>\n<li>20 pixels or bigger, or\n<li>16 pixels or bigger and bold and/or italicized.\n</ul>",
            resources: "",
            icon_order: "16",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        table_layout: {
            id: "81",
            name: "table_layout",
            icon_name: "table_layout",
            title: "Layout table",
            category: "Alerts",
            cat_code: "alert",
            summary: "A layout table is present.",
            purpose:
                "Layout tables exist merely to position content visually - to create columns, insert spacing, or align content neatly for sighted users. Their content is not at all tabular in nature. Layout tables should not be used in HTML5. They can introduce reading and navigation order issues. Screen readers may interpret them as data tables (i.e., announcing column and row numbers), especially if they contain table header (&lt;th&gt;) cells. This introduces significant overhead on screen reader users.",
            actions:
                'In almost every case, layout tables can be replaced with other HTML elements and styled with CSS to achieve the desired visual presentation. If the table contains tabular data, provide appropriate header (&lt;th&gt;) cells. If the layout table remains, verify that the reading and navigation order of table content (based on underlying source code order) is logical and give it role="presentation" to ensure it is not identified as a table to screen reader users.',
            details: "A &lt;table&gt; element is present that does not contain any header (&lt;th&gt;) cells.",
            resources: "",
            icon_order: "17",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                28: { level_id: 1, level_name: "WCAG 2 A", code: "1.3.2", name: "1.3.2 Meaningful Sequence (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.3.2", guideline_id: "28" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        table_caption_possible: {
            id: "114",
            name: "table_caption_possible",
            icon_name: "table_caption_possible",
            title: "Possible table caption",
            category: "Alerts",
            cat_code: "alert",
            summary: "Text appears to be a table caption, but is not a caption element.",
            purpose: "A table caption should be associated with a table using the &lt;caption&gt; element so it will be read by a screen reader with the table content.",
            actions: "If the text is a description of the table, associate the text with the table using the &lt;caption&gt; element (&lt;caption&gt; should be the first element within the &lt;table&gt;).",
            details:
                "A data table (has at least one table header) that does not already have a caption has:\r\n- A colspan attribute value of 3 or greater on the first cell of the table.\r\n- A <p> element immediately before the table that contains less than 50 characters or contains less than 100 characters and is bold and/or centered.\r\n",
            resources: "",
            icon_order: "18",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        list_possible: {
            name: "list_possible",
            category: "Alerts",
            cat_code: "alert",
            title: "Possible list",
            summary: "Text is structured like a list but lacks proper list semantics.",
            purpose:
                "Ordered and unordered lists, when properly defined, provide useful information to users, such as an indication of the list type and number of list items. When text alone is used to present list structures and content, these benefits are lost.",
            actions: "If list content is presented, use &lt;ul&gt; or &lt;ol&gt; markup to semantically define the list.",
            details: "Text is used to present list-type content, such as:<br>\n* text<br>\n1. text<br>\na. text<br>\n1) text<br>\na) text<br>\n- text",
            resources: "",
            icon_order: "19",
            position: "first",
            page_rule: "0",
            icon_name: "list_possible",
            guidelines: { 27: { level_id: 1, level_name: "WCAG 2 A", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1", guideline_id: "27" } },
            levels: { 1: "WCAG 2 A" },
        },
        link_internal_broken: {
            id: "104",
            name: "link_internal_broken",
            icon_name: "link_internal_broken",
            title: "Broken same-page link",
            category: "Alerts",
            cat_code: "alert",
            summary: "A link to another location within the page is present but does not have a corresponding target.",
            purpose: "A link to jump to another position within the the page assists users in navigating the web page, but only if the link target exists.",
            actions: "Ensure that the target for the link exists or remove the the same-page link.",
            details: "An in-page link has an href attribute (starting with a #), but does not match either the id value of another element or the name attribute value of an anchor element within the page.",
            resources: "",
            icon_order: "20",
            position: "last",
            page_rule: "0",
            guidelines: { 39: { guideline_id: "39", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        link_suspicious: {
            id: "48",
            name: "link_suspicious",
            icon_name: "link_suspicious",
            title: "Suspicious link text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Link text contains extraneous text or may not make sense out of context.",
            purpose:
                'Links, which are often read out of context, should clearly describe the destination or function of the link. Ambiguous text, text that does not make sense out of context, and extraneous text (such as "click here") can cause confusion and should be avoided.',
            actions: 'Where appropriate, reword the link text so that it is more descriptive of its destination when read out of context. Remove any extraneous text (such as "click here").',
            details:
                'A link (including alt text of linked images) contains the phrase "click here" or "click", or the link text is "click here", "here", "more", "more...", "details", "more details", "link", "this page", "continue", "continue reading", "read more", or "button".',
            resources: "",
            icon_order: "21",
            position: "last",
            page_rule: "0",
            guidelines: { 52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" } },
            levels: { 1: "WCAG 2 A" },
        },
        link_redundant: {
            id: "120",
            name: "link_redundant",
            icon_name: "link_redundant",
            title: "Redundant link",
            category: "Alerts",
            cat_code: "alert",
            summary: "Adjacent links go to the same URL.",
            purpose:
                "When adjacent links go to the same location (such as a linked product image and an adjacent linked product name that go to the same product page) this results in additional navigation and repetition for keyboard and screen reader users.",
            actions: 'If possible, combine the redundant links into one link and remove any redundant text or alternative text (for example, if a product image and product name are in the same link, the image can usually be given alt="").',
            details: "Two adjacent links go to the same URL.",
            resources: "",
            icon_order: "22",
            position: "last",
            page_rule: "0",
            guidelines: { 52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" } },
            levels: { 1: "WCAG 2 A" },
        },
        link_word: {
            id: "75",
            name: "link_word",
            icon_name: "link_word",
            title: "Link to Word document",
            category: "Alerts",
            cat_code: "alert",
            summary: "A link to a Microsoft Word document is present.",
            purpose:
                "Unless authored with accessibility in mind, Microsoft Word documents often have accessibility issues. Additionally, Word documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.",
            actions:
                "Ensure that the Word document is natively accessible. Additionally, inform the user that the link will open a Word document. Because Word documents have limitations in accessibility (particularly for complex content) and require a separate program, HTML content should usually be used in place of or in addition to the Word document.",
            details: "A link to a .doc or .docx file is present.",
            resources: "",
            icon_order: "23",
            position: "last",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        link_excel: {
            id: "83",
            name: "link_excel",
            icon_name: "link_excel",
            title: "Link to Excel spreadsheet",
            category: "Alerts",
            cat_code: "alert",
            summary: "A link to a Microsoft Excel spreadsheet is present.",
            purpose:
                "Unless authored with accessibility in mind, Microsoft Excel spreadsheets often have accessibility issues. Additionally, Excel documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.",
            actions:
                "Ensure the Excel spreadsheet is natively accessible. Additionally, inform the user that the link will open an Excel spreadsheet. Because Excel spreadsheets have limitations in accessibility (particularly for complex content) and require a separate program, HTML content should usually be used in place of or in addition to the Excel spreadsheet.",
            details: "A link to a .xls or .xlsx file is present.",
            resources: "",
            icon_order: "24",
            position: "last",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        link_powerpoint: {
            id: "84",
            name: "link_powerpoint",
            icon_name: "link_powerpoint",
            title: "Link to PowerPoint document",
            category: "Alerts",
            cat_code: "alert",
            summary: "A link to a Microsoft PowerPoint presentation is present.",
            purpose:
                "Unless authored with accessibility in mind, PowerPoint documents often have accessibility issues. Additionally, PowerPoint documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.",
            actions:
                "Ensure the PowerPoint presentation is natively accessible. Additionally, inform the user that the link will open a PowerPoint document. Because PowerPoint documents have limitations in accessibility (particularly for complex content) and require a separate program, HTML content or an alternative accessible version (e.g., tagged PDF) should usually be used in place of or in addition to the PowerPoint presentation.",
            details: "A link to a .ppt, .pptx, .pps, or .ppsx file is present.",
            resources: "",
            icon_order: "25",
            position: "last",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        link_pdf: {
            id: "82",
            name: "link_pdf",
            icon_name: "link_pdf",
            title: "Link to PDF document",
            category: "Alerts",
            cat_code: "alert",
            summary: "A link to a PDF document is present.",
            purpose:
                "Unless authored with accessibility in mind, PDF documents often have accessibility issues. Additionally, PDF documents are typically viewed using a separate application or plug-in, and can thus cause confusion and navigation difficulties.",
            actions:
                "Ensure the PDF document is natively accessible. Additionally, inform the user that the link will open a PDF document. Because PDF documents may have limitations in accessibility (particularly for complex content) and require a separate program, HTML content should often be used in place of or in addition to the PDF document.",
            details: "A link to a .pdf file is present.",
            resources: "",
            icon_order: "26",
            position: "last",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        link_document: {
            id: "95",
            name: "link_document",
            icon_name: "link_document",
            title: "Link to document",
            category: "Alerts",
            cat_code: "alert",
            summary: "A link to a non-HTML document is present.",
            purpose:
                "Unless authored with accessibility in mind, documents that are not HTML often have accessibility issues. Additionally, these documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.",
            actions:
                "Ensure the document is authored to be accessible, if possible. Additionally, inform the user that the link will open in a separate program. Because these documents have limitations in accessibility (particularly for complex content) and require a separate program, an accessible format should usually be used in place of or in addition to the document.",
            details: "A link to a .rtf, .wpd, .ods, .odt, .odp, .sxw, .sxc, .sxd, .sxi, .pages, or .key file is present. Word, PowerPoint, Excel, and PDF are identified with separate icons.",
            resources: "",
            icon_order: "27",
            position: "last",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        audio_video: {
            id: "73",
            name: "audio_video",
            icon_name: "audio_video",
            title: "Audio/Video",
            category: "Alerts",
            cat_code: "alert",
            summary: "An audio or video file or link is present.",
            purpose:
                "Audio content must be presented in a text format to be fully accessible to users who are deaf and hard of hearing. Video content with audio must have synchronized captions and a transcript. Audio-only content must have a transcript.",
            actions: "For video content, ensure that synchronized captioning and a transcript is provided. For audio-only content, ensure that a transcript is provided.",
            details:
                "An embedded QuickTime, Windows Media Player, or RealPlayer movie is present or a link is present to a file with one of the following extensions: 3gp, aif, aiff, asf, asx, avi, flv, m4a, m4p, mov, mp2, mp3, mp4, mpa, mpeg, mpeg2, mpg, mpv, ogg, ogv, qtl, ra, ram, smi, smil, wav, wax, webm, wma, wmp, or wmx.",
            resources: "",
            icon_order: "28",
            position: "after",
            page_rule: "0",
            guidelines: {
                18: { guideline_id: "18", code: "1.2.1", name: "1.2.1 Prerecorded Audio-only and Video-only (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.1" },
                19: { guideline_id: "19", code: "1.2.2", name: "1.2.2 Captions (Prerecorded) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.2" },
                20: { guideline_id: "20", code: "1.2.3", name: "1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.3" },
                22: { guideline_id: "22", code: "1.2.5", name: "1.2.5 Audio Description (Prerecorded) (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc1.2.5" },
                31: { guideline_id: "31", code: "1.4.2", name: "1.4.2 Audio Control (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.4.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        html5_video_audio: {
            id: "110",
            name: "html5_video_audio",
            icon_name: "html5_video_audio",
            title: "HTML5 video or audio",
            category: "Alerts",
            cat_code: "alert",
            summary: "A &lt;video&gt; or &lt;audio&gt; element is present.",
            purpose:
                "&lt;video&gt; defines video, such as a movie clip or other video streams. &lt;audio&gt; defines sound, such as music or other audio streams. Audio content must be presented in a text format to be fully accessible to users who are deaf and hard of hearing. Video content with audio must have synchronized captions and a transcript. Audio-only content must have a transcript.",
            actions: "For video content with audio, ensure that synchronized captioning and a transcript is provided. For audio-only content, ensure that a transcript is provided.",
            details:
                "A &lt;video&gt; or &lt;audio&gt; element is present. Note that WAVE does not analyze fall-back content within the &lt;video&gt; or &lt;audio&gt; element. This content should be accessible because it will be presented to the user if the video or audio content is not supported.",
            resources: "",
            icon_order: "29",
            position: "after",
            page_rule: "0",
            guidelines: {
                18: { guideline_id: "18", code: "1.2.1", name: "1.2.1 Prerecorded Audio-only and Video-only (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.1" },
                19: { guideline_id: "19", code: "1.2.2", name: "1.2.2 Captions (Prerecorded) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.2" },
                20: { guideline_id: "20", code: "1.2.3", name: "1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.3" },
                22: { guideline_id: "22", code: "1.2.5", name: "1.2.5 Audio Description (Prerecorded) (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc1.2.5" },
                31: { guideline_id: "31", code: "1.4.2", name: "1.4.2 Audio Control (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.4.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        youtube_video: {
            name: "youtube_video",
            category: "Alerts",
            cat_code: "alert",
            title: "YouTube video",
            summary: "An embedded or linked YouTube video is present.",
            purpose:
                "For video content with audio, ensure that synchronized captioning is available. While YouTube can auto-generate captions using voice recognition, these are typically not of sufficient quality to be considered equivalent.",
            actions: "Ensure that YouTube video presents equivalent, synchronized captions.",
            details: "An embedded (within an iframe) YouTube video is present, or a link to a YouTube video is present.",
            resources: "",
            icon_order: "30",
            position: "after",
            page_rule: "0",
            icon_name: "youtube_video",
            guidelines: {
                18: { level_id: 1, level_name: "WCAG 2 A", code: "1.2.1", name: "1.2.1 Prerecorded Audio-only and Video-only (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.2.1", guideline_id: "18" },
                19: { level_id: 1, level_name: "WCAG 2 A", code: "1.2.2", name: "1.2.2 Captions (Prerecorded) (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.2.2", guideline_id: "19" },
                20: { level_id: 1, level_name: "WCAG 2 A", code: "1.2.3", name: "1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.2.3", guideline_id: "20" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        flash: {
            id: "4",
            name: "flash",
            icon_name: "flash",
            title: "Flash",
            category: "Alerts",
            cat_code: "alert",
            summary: "Flash content is present.",
            purpose: "Flash content, if not authored to be accessible, will typically introduce significant accessibility issues.",
            actions:
                "If the Flash object does not present content, hide it from screen readers. If content is presented, provide an HTML alternative and/or make the Flash object natively accessible, including providing captions/transcripts when necessary and ensuring that the Flash object is keyboard-accessible.",
            details:
                'An &lt;object&gt; element is present that has a classid attribute value of "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" or a type attribute value of "application/x-shockwave-flash", or an &lt;embed&gt; element is present that has a src attribute value of a .swf file or a type attribute value of "application/x-shockwave-flash".',
            resources: '<a href="https://webaim.org/techniques/flash/techniques#hiding">hide it from screen readers</a>',
            icon_order: "31",
            position: "after",
            page_rule: "0",
            guidelines: {
                18: { guideline_id: "18", code: "1.2.1", name: "1.2.1 Prerecorded Audio-only and Video-only (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.1" },
                19: { guideline_id: "19", code: "1.2.2", name: "1.2.2 Captions (Prerecorded) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.2" },
                20: { guideline_id: "20", code: "1.2.3", name: "1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.2.3" },
                22: { guideline_id: "22", code: "1.2.5", name: "1.2.5 Audio Description (Prerecorded) (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc1.2.5" },
                40: { guideline_id: "40", code: "2.1.2", name: "2.1.2 No Keyboard Trap (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.1.2" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        applet: {
            id: "74",
            name: "applet",
            icon_name: "applet",
            title: "Java applet",
            category: "Alerts",
            cat_code: "alert",
            summary: "A Java applet is present.",
            purpose: "Java applets will typically introduce significant accessibility issues.",
            actions: "Where possible, replace the Java content with a more accessible format. If Java is necessary, author the applet to support accessibility to the extent possible.",
            details: "An &lt;applet&gt; element is present.",
            resources: "",
            icon_order: "32",
            position: "after",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        plugin: {
            id: "76",
            name: "plugin",
            icon_name: "plugin",
            title: "Plugin",
            category: "Alerts",
            cat_code: "alert",
            summary: "An unidentified plugin is present.",
            purpose: "Plugins allow the introduction of non-HTML content, media players, etc. Because of limitations in non-HTML content, these often introduce accessibility issues.",
            actions: "Provide an HTML alternative or ensure the plugin content is accessible. Provide a link to download any required software.",
            details: "An &lt;object&gt; or &lt;embed&gt; element is present that is not identified as Flash, Quicktime, RealPlayer, or Windows Media Player.",
            resources: "",
            icon_order: "33",
            position: "after",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        noscript: {
            id: "72",
            name: "noscript",
            icon_name: "noscript",
            title: "Noscript element",
            category: "Alerts",
            cat_code: "alert",
            summary: "A &lt;noscript&gt; element is present.",
            purpose:
                "Content within &lt;noscript&gt; is presented if JavaScript is disabled. Because nearly all users (including users of screen readers and other assistive technologies) have JavaScript enabled, &lt;noscript&gt; cannot be used to provide an accessible version of inaccessible scripted content.",
            actions: "Ensure that scripted content is accessible. The &lt;noscript&gt; content will be presented to very few users, but must be accessible if used.",
            details: "A &lt;noscript&gt; element is present.",
            resources: "",
            icon_order: "34",
            position: "before",
            page_rule: "0",
            guidelines: {},
            levels: {},
        },
        event_handler: {
            id: "71",
            name: "event_handler",
            icon_name: "event_handler",
            title: "Device dependent event handler",
            category: "Alerts",
            cat_code: "alert",
            summary: "An event handler is present that may not be accessible.",
            purpose: "The JavaScript events in use do not appear to be accessible to both mouse and keyboard users. To be fully accessible, critical JavaScript interaction should be device independent.",
            actions:
                "Ensure that critical functionality and content is accessible by using a device independent event handler (which responds to both keyboard and mouse) or by using both a mouse dependent and a keyboard dependent event handler.",
            details:
                "One of the following is present:\r\n<ul>\r\n<li>an onmouseover event but not an onfocus event</li>\r\n<li>an onclick event on something other than a link, form control, or element with a tabindex value of 0</li>\r\n<li>ondblclick</li>\r\n</ul>",
            resources: "",
            icon_order: "35",
            position: "last",
            page_rule: "0",
            guidelines: { 39: { guideline_id: "39", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        javascript_jumpmenu: {
            id: "52",
            name: "javascript_jumpmenu",
            icon_name: "javascript_jumpmenu",
            title: "JavaScript jump menu",
            category: "Alerts",
            cat_code: "alert",
            summary: "A JavaScript jump menu may be present.",
            purpose:
                "A JavaScript jump menu is a select element that triggers a new web page with the onchange event handler. When navigating with the keyboard, each change in the select menu triggers a page change in some web browsers, thus making navigation very difficult.",
            actions: "If the onchange event handler triggers a new web page, eliminate the JavaScript jump menu and allow the user to change the select menu, then activate an adjacent button to trigger the new page.",
            details: "The onchange attribute is present on a &lt;select&gt; element.",
            resources: "",
            icon_order: "36",
            position: "after",
            page_rule: "0",
            guidelines: {
                39: { guideline_id: "39", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1" },
                66: { guideline_id: "66", code: "3.2.2", name: "3.2.2 On Input (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc3.2.2" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        accesskey: {
            id: "67",
            name: "accesskey",
            icon_name: "accesskey",
            title: "Accesskey",
            category: "Alerts",
            cat_code: "alert",
            summary: "An accesskey attribute is present.",
            purpose: "Accesskey provides a way to define shortcut keys for web page elements. Accesskeys often conflict with user or assistive technology shortcut keys and should be avoided or implemented with care.",
            actions: "Remove the accesskey or be aware that the accesskey may conflict with user shortcut keys.",
            details: "An element has an accesskey attribute.",
            resources: "",
            icon_order: "37",
            position: "last",
            page_rule: "0",
            guidelines: { 49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        tabindex: {
            id: "68",
            name: "tabindex",
            icon_name: "tabindex",
            title: "Tabindex",
            category: "Alerts",
            cat_code: "alert",
            summary: "A positive tabindex value is present.",
            purpose:
                "Tabindex values of 1 or greater specify an explicit tab/navigation order for page elements. Because it modifies the default tab order, cause confusion, and result in decreased keyboard accessibility, it should be avoided.",
            actions:
                "If the natural tab order is already logical, remove the tabindex. Otherwise, consider restructuring the page so that tabindex is not needed. If tabindex is maintained, ensure that the resulting navigation is logical and complete.",
            details: "A tabindex attribute is present and has a positive value.",
            resources: "",
            icon_order: "38",
            position: "last",
            page_rule: "0",
            guidelines: { 51: { guideline_id: "51", code: "2.4.3", name: "2.4.3 Focus Order (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.3" } },
            levels: { 1: "WCAG 2 A" },
        },
        text_small: {
            id: "65",
            name: "text_small",
            icon_name: "text_small",
            title: "Very small text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Text is very small.",
            purpose: "Text which is very small is difficult to read, particularly for those with low vision.",
            actions: "Increase the text to a more readable size.",
            details: "Text is present that is sized 10 pixels or smaller.",
            resources: "",
            icon_order: "39",
            position: "first",
            page_rule: "0",
            guidelines: [],
            levels: [],
        },
        text_justified: {
            id: "1139",
            name: "text_justified",
            icon_name: "text_justified",
            title: "Justified text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Fully justified text is present.",
            purpose: "Large blocks of justified text can negatively impact readability due to varying word/letter spacing and 'rivers of white' that flow through the text.",
            actions: "Remove the full justification from the text.",
            details: "A &lt;p&gt;, &lt;div&gt;, or &lt;td&gt; element has more than 500 characters and is styled with text-align:justify.",
            resources: "",
            icon_order: "40",
            position: "first",
            page_rule: "0",
            guidelines: [],
            levels: [],
        },
        underline: {
            id: "113",
            name: "underline",
            icon_name: "underline",
            title: "Underlined text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Underlined text is present.",
            purpose: "Underlines almost universally indicates linked text. Consider removing the underline from the non-link text. Other styling (e.g., bold or italics) can be used to differentiate the text.",
            actions: "Unless there is a distinct need for the underlined text, remove the underline from it. ",
            details: "A &lt;u&gt; element is present.",
            resources: "",
            icon_order: "41",
            position: "last",
            page_rule: "0",
            guidelines: [],
            levels: [],
        },
        title_redundant: {
            id: "117",
            name: "title_redundant",
            icon_name: "title_redundant",
            title: "Redundant title text",
            category: "Alerts",
            cat_code: "alert",
            summary: "Title attribute text is the same as text or alternative text.",
            purpose:
                "The title attribute value is used to provide <i>advisory</i> information. It typically appears when the users hovers the mouse over an element. The advisory information presented should not be identical to or very similar to the element text or alternative text.",
            actions:
                "In most cases the title attribute can be removed, otherwise modify it to provide advisory, but not redundant information. Note that the title text may or may not be read by a screen reader and is typically inaccessible to sighted keyboard users. ",
            details: "A title attribute value is identical to element text or image alternative text.",
            resources: "",
            icon_order: "42",
            position: "last",
            page_rule: "0",
            guidelines: [],
            levels: [],
        },
        alt: {
            id: "26",
            name: "alt",
            icon_name: "alt",
            title: "Alternative text",
            category: "Features",
            cat_code: "feature",
            summary: "Image alternative text is present.",
            purpose: "Alternative text presents the content or function of an image to screen reader users or in other situations where images cannot be seen or are unavailable.",
            actions: "Ensure that the alternative text conveys the content and function of the image accurately and succinctly. The alt attribute should be equivalent, accurate, and succinct.",
            details: "A non-empty alt attribute is present on an image.",
            resources: "",
            icon_order: "1",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_null: {
            id: "37",
            name: "alt_null",
            icon_name: "alt_null",
            title: "Null or empty alternative text",
            category: "Features",
            cat_code: "feature",
            summary: 'Alternative text is null or empty (alt="").',
            purpose:
                'If an image does not convey content or if the content of the image is conveyed elsewhere (such as in a caption or nearby text), the image should have empty/null alternative text (alt="") to ensure that it is ignored by a screen reader and is hidden when images are disabled or unavailable.',
            actions: "Ensure that the image does not convey content or that the content of the image is conveyed in nearby text (e.g., a caption).",
            details: 'An image has alt="".',
            resources: "",
            icon_order: "2",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_spacer: {
            id: "39",
            name: "alt_spacer",
            icon_name: "alt_spacer",
            title: "Null or empty alternative text on spacer",
            category: "Features",
            cat_code: "feature",
            summary: 'Alternative text is null or empty (alt="") on a spacer image.',
            purpose:
                'Spacer images are used to control layout or positioning. Because they do not convey content, they should be given empty/null alternative text (alt="") to ensure that the content is not presented to screen reader users and is hidden when images are disabled or unavailable.',
            actions: "Ensure that the image is a spacer image and that it does not convey content. Consider using CSS instead of spacer images for better control of positioning and layout.",
            details: 'An images with width and/or height of 3 pixels or less or file name of spacer.*, space.*, or blank.* has empty/null alt attribute value (alt="").',
            resources: "",
            icon_order: "3",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_link: {
            id: "9",
            name: "alt_link",
            icon_name: "alt_link",
            title: "Linked image with alternative text",
            category: "Features",
            cat_code: "feature",
            summary: "Alternative text is present for an image that is within a link.",
            purpose: "Including appropriate alternative text on an image within a link ensures that the function and purpose of the link and the content of the image is available to screen reader users or when images are unavailable.",
            actions:
                'Ensure that the alternative text presents the content of the image and/or the function of the link. If the full content and function of the link is presented in text within the link (an image and a text caption both within the same link, for example), then the image should generally be given empty/null alternative text (alt="") to avoid redundancy.',
            details: "An image element has non-empty alternative text, is within a link, and no other text (or images with alternative text) is present within the link.",
            resources: "",
            icon_order: "4",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        alt_input: {
            id: "46",
            name: "alt_input",
            icon_name: "alt_input",
            title: "Image button with alternative text",
            category: "Features",
            cat_code: "feature",
            summary: "Alternative text is present for an image input element.",
            purpose: "Providing the functionality of image buttons in alternative text ensures that the button function is available to all users.",
            actions: "Ensure that the alt attribute value presents the content and function of the image input element. If the image presents text, typically this text should be provided in the alt attribute.",
            details: 'An &lt;input type="image"&gt; element has a non-empty alt attribute value.',
            resources: "",
            icon_order: "5",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        alt_map: {
            id: "24",
            name: "alt_map",
            icon_name: "alt_map",
            title: "Image map with alternative text",
            category: "Features",
            cat_code: "feature",
            summary: "An alt attribute is present for an image that has hot spots.",
            purpose:
                "If an image that uses an image map provides content or a function that is not already available through the hot spots (and their respective alternative texts), that information must be in the image's alt attribute in order for it to be available to screen reader users or when images are disabled.",
            actions:
                'Ensure that the alternative text for the image map image is appropriate. The alternative text is typically empty (alt=""), unless the image conveys content not conveyed in the hot spot areas (e.g., "Map of the United States").',
            details: "An &lt;img&gt; element has both usemap and alt attributes.",
            resources: "",
            icon_order: "6",
            position: "after",
            page_rule: "0",
            guidelines: { 17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        alt_area: {
            id: "42",
            name: "alt_area",
            icon_name: "alt_area",
            title: "Image map area with alternative text",
            category: "Features",
            cat_code: "feature",
            summary: "Alternative text is present for an image map area (hot spot).",
            purpose:
                "Presenting the functionality of image map areas (hot spots) in the &lt;area&gt; element's alt attribute value ensures that this information is presented to screen reader users or when images are disabled or unavailable.",
            actions:
                "Ensure the alternative text for the area element describes the function of the image map hot spot. Additionally, ensure that the area elements are listed in the code in a logical, intuitive order (e.g., matching the visual order, alphabetically, etc.).",
            details: "An image uses an image map containing an area element with a non-empty alt attribute value.",
            resources: "",
            icon_order: "7",
            position: "after",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                52: { guideline_id: "52", code: "2.4.4", name: "2.4.4 Link Purpose (In Context) (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.4" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        figure: {
            name: "figure",
            category: "Features",
            cat_code: "feature",
            title: "Figure",
            summary: "A figure is present.",
            purpose: "A &lt;figure&gt; represents self-contained content, potentially with an optional &lt;figcaption&gt;. Non-text content, if present, \nmust have alternative text.",
            actions: "Ensure the figure presents accessible content and, if appropriate, has a figcaption.",
            details: "A figure element is present.",
            resources: "",
            icon_order: "8",
            position: "last",
            page_rule: "0",
            icon_name: "figure",
            guidelines: { 17: { level_id: 1, level_name: "WCAG 2 A", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1", guideline_id: "17" } },
            levels: { 1: "WCAG 2 A" },
        },
        label: {
            id: "53",
            name: "label",
            icon_name: "label",
            title: "Form label",
            category: "Features",
            cat_code: "feature",
            summary: "A form label is present and associated with a form control.",
            purpose: "A properly associated form label is presented to a screen reader user when the form control is accessed. Additionally, a label can be clicked with the mouse to set focus to the form control.",
            actions: "Ensure that the label is accurate, descriptive, succinct, and that it is associated with the correct form control element.",
            details: "A &lt;label&gt; element is present and properly associated to &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;textarea&gt;, or &lt;select&gt; element.",
            resources: "",
            icon_order: "9",
            position: "last",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        fieldset: {
            id: "54",
            name: "fieldset",
            icon_name: "fieldset",
            title: "Fieldset",
            category: "Features",
            cat_code: "feature",
            summary: "A fieldset is present.",
            purpose:
                "A fieldset provides a visual and structural grouping of related form elements. If present, a fieldset legend presents a description of the grouped form elements to screen reader users. A fieldset and legend are typically necessary for groups of check boxes or radio buttons.",
            actions:
                "Ensure that the fieldset encloses the proper form elements. Most fieldsets should have an accurate, descriptive, and succinct legend. Note that the legend is repeated to screen reader users for each form control within the fieldsets.",
            details: "A fieldset element is present.",
            resources: "",
            icon_order: "10",
            position: "first",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        link_skip: {
            id: "78",
            name: "link_skip",
            icon_name: "link_skip",
            title: "Skip link",
            category: "Features",
            cat_code: "feature",
            summary: "A link is present which allows users to skip over navigation or other content.",
            purpose: "A link that provides functionality for the user to jump over navigation or other elements or jump to the main content of the page greatly assists keyboard users in navigating the web page.",
            actions:
                "Ensure that the link is functioning properly and that the link text adequately describes the link functionality. If the skip link is hidden from sighted users, it should be made visible within the page when it has keyboard focus and must be accessible via the keyboard (do not use CSS display:none or visibility:hidden).",
            details:
                'An in-page link:\r\n<ul>\r\n<li>starts with the words "skip" or "jump"\r\n<li>has an href attribute value and that value matches the id value of another element within the page or the name attribute value of an anchor element within the page.\r\n<li>is NOT hidden with CSS display:none or visibility:hidden (this would result in a inaccessible "skip" link).\r\n</ul>',
            resources: "https://webaim.org/techniques/css/invisiblecontent/#skipnavlinks",
            icon_order: "11",
            position: "last",
            page_rule: "0",
            guidelines: { 49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        link_skip_target: {
            id: "60",
            name: "link_skip_target",
            icon_name: "link_skip_target",
            title: "Skip link target",
            category: "Features",
            cat_code: "feature",
            summary: 'A target for a "skip" link is present.',
            purpose: 'A "skip" target identifies the location within the page where reading and navigation will resume after a "skip" link is activated.',
            actions: "Ensure that the element is at the appropriate place within the page.",
            details: 'An id value for any element or a name value for an anchor element matches the href value of a "skip" link within the page.',
            resources: "",
            icon_order: "12",
            position: "first",
            page_rule: "0",
            guidelines: { 49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        lang: {
            id: "127",
            name: "lang",
            icon_name: "lang",
            title: "Language",
            category: "Features",
            cat_code: "feature",
            summary: "The language of the document or a page element is identified.",
            purpose: "Identifying the language of the page or portion of page (if different from the page itself) allows screen readers to read the content appropriately.",
            actions:
                'Ensure the language is properly identified for the page (e.g., &lt;html lang="en"&gt;). If content within the page is in a language different than the page\'s language, identify it using a valid lang attribute value (e.g., &lt;p lang="fr"&gt;).',
            details: "A document or an element has a valid lang attribute value.",
            resources: "",
            icon_order: "13",
            position: "first",
            page_rule: "1",
            guidelines: { 60: { guideline_id: "60", code: "3.1.2", name: "3.1.2 Language of Parts (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc3.1.2" } },
            levels: { 2: "WCAG 2 AA" },
        },
        h1: {
            id: "91",
            name: "h1",
            icon_name: "h1",
            title: "Heading level 1",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A first level heading (&lt;h1&gt; element) is present.",
            purpose:
                "Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document. First level headings should contain the most important heading(s) on the page (generally the document title).",
            actions: "Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.",
            details: "An &lt;h1&gt; element is present.",
            resources: "",
            icon_order: "1",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        h2: {
            id: "96",
            name: "h2",
            icon_name: "h2",
            title: "Heading level 2",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A second level heading (&lt;h2&gt; element) is present.",
            purpose: "Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.",
            actions: "Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.",
            details: "An &lt;h2&gt; element is present.",
            resources: "",
            icon_order: "2",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        h3: {
            id: "97",
            name: "h3",
            icon_name: "h3",
            title: "Heading level 3",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A third level heading (&lt;h3&gt; element) is present.",
            purpose: "Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.",
            actions: "Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.",
            details: "An &lt;h3&gt; element is present.",
            resources: "",
            icon_order: "3",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        h4: {
            id: "98",
            name: "h4",
            icon_name: "h4",
            title: "Heading level 4",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A fourth level heading (&lt;h4&gt; element) is present.",
            purpose: "Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.",
            actions: "Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.",
            details: "An &lt;h4&gt; element is present.",
            resources: "",
            icon_order: "4",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        h5: {
            id: "99",
            name: "h5",
            icon_name: "h5",
            title: "Heading level 5",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A fifth level heading (&lt;h5&gt; element) is present.",
            purpose: "Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.",
            actions: "Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.",
            details: "An &lt;h5&gt; element is present.",
            resources: "",
            icon_order: "5",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        h6: {
            id: "100",
            name: "h6",
            icon_name: "h6",
            title: "Heading level 6",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A sixth level heading (&lt;h6&gt; element) is present.",
            purpose: "Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.",
            actions: "Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.",
            details: "An &lt;h6&gt; element is present.",
            resources: "",
            icon_order: "6",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        ol: {
            id: "92",
            name: "ol",
            icon_name: "ol",
            title: "Ordered list",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "An ordered (numbered) list (&lt;ol&gt; element) is present.",
            purpose: "Ordered lists present a group of related sequential items. Users of assistive technologies can navigate by and within lists.",
            actions: "Ensure that an ordered (numbered) list is appropriate for the context. If list items are parallel or the order of the items is not important, an unordered list (&lt;ul&gt;) is likely more appropriate.",
            details: "An &lt;ol&gt; element is present.",
            resources: "",
            icon_order: "7",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        ul: {
            id: "93",
            name: "ul",
            icon_name: "ul",
            title: "Unordered list",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "An unordered (bulleted) list (&lt;ul&gt; element) is present.",
            purpose: "Ordered lists present a group of related, parallel items. Users of many assistive technologies can navigate by and within lists.",
            actions: "Ensure that an unordered (bulleted) list is appropriate for the context. If list items are sequential or numbered, an ordered list (&lt;ol&gt;) is likely more appropriate.",
            details: "A &lt;ul&gt; element is present.",
            resources: "",
            icon_order: "8",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        dl: {
            id: "94",
            name: "dl",
            icon_name: "dl",
            title: "Definition/description list",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A definition/description list (&lt;dl&gt; element) is present.",
            purpose: "Definition lists (called description lists in HTML5) present the descriptions for terms or name/value pairs. Users of many assistive technologies can navigate by and within lists.",
            actions: "Ensure that the list is appropriate for the context (it is used for definitions or name/value pairs) and that definition terms (&lt;dt&gt;) and descriptions (&lt;dd&gt;) are provided.",
            details: "A &lt;dl&gt; element is present. ",
            resources: "",
            icon_order: "9",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        header: {
            id: "108",
            name: "header",
            icon_name: "header",
            title: "Header",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A &lt;header&gt; element or banner landmark is present.",
            purpose: "Headers identify page introduction or navigation. They typically surrounds the site or page name, logo, top navigation, or other header content. Headers facilitate page semantics and navigation.",
            actions: "Ensure the header surrounds and defines page header content.",
            details: 'A &lt;header&gt; element or role="banner" is present.',
            resources: "",
            icon_order: "10",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        nav: {
            id: "107",
            name: "nav",
            icon_name: "nav",
            title: "Navigation",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A &lt;nav&gt; element or navigation landmark is present.",
            purpose: "The navigation identifies a section of navigation links and can facilitate page semantics and navigation.",
            actions: "Ensure the element defines page navigation. Multiple navigation elements on one page can be differentiated with ARIA labels.",
            details: 'A &lt;nav&gt; element or role="navigation" is present.',
            resources: "",
            icon_order: "11",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        search: {
            id: "131",
            name: "search",
            icon_name: "search",
            title: "Search",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "An ARIA search landmark is present.",
            purpose: "The search landmark identifies the search area within the page and facilitates keyboard navigation to the search area.",
            actions: "Ensure the search landmark is implemented properly and surrounds the search area of the page.",
            details: 'An element has role="search".',
            resources: "",
            icon_order: "12",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        main: {
            id: "128",
            name: "main",
            icon_name: "main",
            title: "Main content",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A &lt;main&gt; element or main landmark is present.",
            purpose: 'The &lt;main&gt; element or role="main" attribute identifies the main content for the page. This facilitate page semantics and navigation.',
            actions: "Ensure the element surrounds and defines page main content.",
            details: 'A &lt;main&gt; element or role="main"is present.',
            resources: "",
            icon_order: "13",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        aside: {
            id: "130",
            name: "aside",
            icon_name: "aside",
            title: "Aside",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "An &lt;aside&gt; element or complementary landmark is present.",
            purpose: "An aside identifies secondary, related, or complementary content. It is typically presented in a sidebar.",
            actions: "Ensure the aside surrounds and defines secondary, related, or complementary content.",
            details: 'An &lt;aside&gt; element or role="complementary" is present.',
            resources: "",
            icon_order: "14",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        footer: {
            id: "109",
            name: "footer",
            icon_name: "footer",
            title: "Footer",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A &lt;footer&gt; element or contentinfo landmark is present.",
            purpose: "Footers identify a footer for the page or a page section. It typically identifies authorship, related links, copyright date, or other footer content. Footers facilitate page semantics and navigation.",
            actions: "Ensure the element surrounds and defines page or page section footer content.",
            details: 'A &lt;footer&gt; element or role="contentinfo" is present.',
            resources: "",
            icon_order: "15",
            position: "first",
            page_rule: "0",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        region: {
            name: "region",
            category: "Structural Elements",
            cat_code: "structure",
            title: "Generic region",
            summary: "An ARIA region is present",
            purpose:
                "Generic ARIA regions identify significant page areas that do not align to other region or ARIA landmark semantics - such as main, header, footer, etc. Regions support keyboard navigation and screen reader identification of page areas.",
            actions:
                "Ensure the region identifies a significant page area. If the semantics for another region or landmark type aligns with the content (e.g., &lt;nav&gt; or &lt;aside&gt;), use it instead. Ensure the region has a descriptive label using aria-labelledby (typically referencing a heading at the beginning of the region) or aria-label.",
            details: 'An element has role="region" and an aria-label or aria-labelledby attribute.',
            resources: "",
            icon_order: "16",
            position: "first",
            page_rule: "0",
            icon_name: "region",
            guidelines: {
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                49: { guideline_id: "49", code: "2.4.1", name: "2.4.1 Bypass Blocks (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.4.1" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        table_data: {
            id: "87",
            name: "table_data",
            icon_name: "table_data",
            title: "Data table",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A data table is present.",
            purpose:
                "Data tables present tabular data. Data tables should contain table header cells that identify the content of their respective row and/or columns. Tables with proper table headers provide additional information and navigation for screen reader users.",
            actions:
                "Ensure that the table contains tabular data and that it is not used merely for page layout. Ensure that all column and row headers are &lt;th&gt; elements and ensure the data cells are associated with their proper header cells (typically by assigning scope to the table headers). Where appropriate, associate a descriptive caption (&lt;caption&gt; element) to the table.",
            details: "A &lt;table&gt; element is present that contains at least one table header cell (&lt;th&gt;).",
            resources: "headers/id article.",
            icon_order: "17",
            position: "before",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        table_caption: {
            id: "115",
            name: "table_caption",
            icon_name: "table_caption",
            title: "Table caption",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A table caption is present.",
            purpose: "An associated table caption will be read by a screen reader with the table content.",
            actions: "Ensure the table caption is properly associated with the correct table (&lt;caption&gt; should be the first element within the &lt;table&gt;) and that it provides a succinct description of the table.",
            details: "A &lt;caption&gt; element is present.",
            resources: "",
            icon_order: "18",
            position: "last",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        th: {
            id: "88",
            name: "th",
            icon_name: "th",
            title: "Table header cell",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "A table header cell (&lt;th&gt;) is present.",
            purpose: "Table headers describe the content of their respective row or column. They can be identified by screen readers when data cells are encountered.",
            actions:
                'Ensure the cell is a table header, otherwise change it to a data cell (&lt;td&gt;). For complex tables (particularly when there are spanned cells), the relationship between header and data cells may need to be defined using scope (e.g., &lt;th scope="col"&gt; or &lt;th scope="row"&gt;) or headers and id attributes.',
            details: 'A &lt;th&gt; element is present that does not have a scope attribute value of "row" or "col".',
            resources: "",
            icon_order: "19",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        th_col: {
            id: "90",
            name: "th_col",
            icon_name: "th_col",
            title: "Column header cell",
            category: "Structural Elements",
            cat_code: "structure",
            summary: 'A table column header (&lt;th scope="col"&gt;) is present.',
            purpose:
                "Adding a column scope to a table header ensures the cells within that column will be programmatically associated to that header, particularly with complex tables. This facilitates screen reader navigation and orientation within the data table.",
            actions: "Ensure that the cell is actually a header cell for tabular data and that it is a column header.",
            details: 'A table header cell (&lt;th&gt;) is present that has a scope attribute value of "col".',
            resources: "",
            icon_order: "20",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        th_row: {
            id: "89",
            name: "th_row",
            icon_name: "th_row",
            title: "Row header cell",
            category: "Structural Elements",
            cat_code: "structure",
            summary: 'A table row header (&lt;th scope="row"&gt;) is present.',
            purpose:
                "Adding a row scope to a table header ensures the cells within that row will be programmatically associated to that header, particularly with complex tables. This facilitates screen reader navigation and orientation within the data table.",
            actions: "Ensure that the cell is actually a header cell for tabular data and that it is a row header.",
            details: 'A table header cell (&lt;th&gt;) is present that has a scope attribute value of "row".',
            resources: "",
            icon_order: "21",
            position: "first",
            page_rule: "0",
            guidelines: { 27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        iframe: {
            id: "40",
            name: "iframe",
            icon_name: "iframe",
            title: "Inline frame",
            category: "Structural Elements",
            cat_code: "structure",
            summary: "An inline frame (&lt;iframe&gt;) is present.",
            purpose:
                "The content of an inline frame is read as if it were part of the page that contains it. The content of the iframe must be accessible. A title attribute value for the iframe will generally be read by a screen reader when the iframe is encountered.",
            actions: "Ensure that the content within the iframe is accessible. Optionally, a title attribute value can be added to provide a brief, advisory description of the iframe.",
            details: "An &lt;iframe&gt; element is present.",
            resources: "",
            icon_order: "22",
            position: "after",
            page_rule: "0",
            guidelines: [],
            levels: {},
        },
        aria: {
            id: "80",
            name: "aria",
            icon_name: "aria",
            title: "ARIA",
            category: "ARIA",
            cat_code: "aria",
            summary: "An ARIA role, state, or property is present.",
            purpose: "ARIA provides enhanced semantics and accessibility for web content.",
            actions: "Ensure the ARIA role, state, or property is used correctly. Use standard HTML accessibility features when possible. Be aware that support for ARIA is limited in older browsers and assistive technologies.",
            details: "An ARIA role, state, or property is present, excluding landmark roles, aria-labelledby, or aria-describedby which are distinct WAVE items.",
            resources: "",
            icon_order: "1",
            position: "last",
            page_rule: "0",
            guidelines: { 77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" } },
            levels: { 1: "WCAG 2 A" },
        },
        aria_label: {
            id: "105",
            name: "aria_label",
            icon_name: "aria_label",
            title: "ARIA label",
            category: "ARIA",
            cat_code: "aria",
            summary: "An aria-label or aria-labelledby attribute is present.",
            purpose: "ARIA labels define accessible names to be read by screen readers for interface elements. They may be used when HTML associations (label, alternative text, etc.) are not sufficient.",
            actions: "Ensure the aria-label value or element referenced by aria-labelledby provides a descriptive, accurate label. When possible, use standard HTML &lt;label&gt; or other markup to make the association.",
            details: "An aria-label or aria-labelledby attribute is present.",
            resources: "",
            icon_order: "2",
            position: "last",
            page_rule: "0",
            guidelines: {
                17: { guideline_id: "17", code: "1.1.1", name: "1.1.1 Non-text Content (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.1.1" },
                27: { guideline_id: "27", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1" },
                54: { guideline_id: "54", code: "2.4.6", name: "2.4.6 Headings and Labels (Level AA)", level_id: "2", level_name: "WCAG 2 AA", link: "https://webaim.org/standards/wcag/checklist#sc2.4.6" },
                77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" },
                90: { level_id: 1, level_name: "WCAG 2 A", code: "2.5.3", name: "2.5.3 Label in Name (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc2.5.3", guideline_id: "90" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        aria_describedby: {
            name: "aria_describedby",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA description",
            summary: "An aria-describedby attribute is present.",
            purpose: "ARIA descriptions provide additional information about interface elements, primarily form controls.",
            actions: "Ensure the aria-describedby attribute references an element that provides a correct description.",
            details: "An aria-describedby attribute is present.",
            resources: "",
            icon_order: "3",
            position: "last",
            page_rule: "0",
            icon_name: "aria_describedby",
            guidelines: {
                27: { level_id: 1, level_name: "WCAG 2 A", code: "1.3.1", name: "1.3.1 Info and Relationships (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc1.3.1", guideline_id: "27" },
                77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        aria_live_region: {
            name: "aria_live_region",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA alert or live region",
            summary: "An ARIA alert role or live region is present.",
            purpose: "ARIA live regions and alerts can be used to dynamically inform screen reader users of content updates.",
            actions: "Ensure the live region is properly tested and presents important, succinct content updates. A live region should not be used if focus is set to the updated page element.",
            details: 'A role="alert", role="alertdialog", or aria-live attribute is present.',
            resources: "",
            icon_order: "4",
            position: "after",
            page_rule: "0",
            icon_name: "aria_live_region",
            guidelines: {
                70: { level_id: 1, level_name: "WCAG 2 A", code: "3.3.1", name: "3.3.1 Error Identification (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc3.3.1", guideline_id: "70" },
                94: { level_id: 2, level_name: "WCAG 2 AA", code: "4.1.3", name: "4.1.3 Status Messages (Level AA)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.3", guideline_id: "94" },
            },
            levels: { 1: "WCAG 2 A", 2: "WCAG 2 AA" },
        },
        aria_menu: {
            name: "aria_menu",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA menu",
            summary: "An ARIA menu is present.",
            purpose: "ARIA menus are application menus (like those used in software menu) with a specific keyboard interactions. They are NOT for navigation links on a web site.",
            actions: "Ensure that the menu is an application menu and has the appropriate keyboard interactions (menu items are navigated via the arrow keys, not via the Tab key), otherwise remove the menu role.",
            details: 'An element with role="menu" or role="menubar" is present.',
            resources: "",
            icon_order: "5",
            position: "first",
            page_rule: "0",
            icon_name: "aria_menu",
            guidelines: {
                39: { level_id: 1, level_name: "WCAG 2 A", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1", guideline_id: "39" },
                77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        aria_button: {
            name: "aria_button",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA button",
            summary: 'An element with role="button" is present.',
            purpose: 'Elements with role="button" must function like native buttons. These should typically be replaced with true button elements.',
            actions:
                "Replace the element with a true button element, or ensure the element is keyboard navigable, can be activated with Enter or Space key presses (key detection is typically necessary), and provides a visible focus indicator.",
            details: 'An element (other than a button) has role="button".',
            resources: "",
            icon_order: "6",
            position: "after",
            page_rule: "0",
            icon_name: "aria_button",
            guidelines: {
                39: { level_id: 1, level_name: "WCAG 2 A", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1", guideline_id: "39" },
                77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" },
            },
            levels: { 1: "WCAG 2 A" },
        },
        aria_expanded: {
            name: "aria_expanded",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA expanded",
            summary: "An aria-expanded attribute is present.",
            purpose: "The aria-expanded attribute indicates the status of content that can be expanded and collapsed.",
            actions: "Ensure that aria-expanded is used correctly (typically on a button that controls expandable content) and that the value (true or false) reflects the expansion state.",
            details: "An element with an aria-expanded attribute is present.",
            resources: "",
            icon_order: "7",
            position: "last",
            page_rule: "0",
            icon_name: "aria_expanded",
            guidelines: { 77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" } },
            levels: { 1: "WCAG 2 A" },
        },
        aria_haspopup: {
            name: "aria_haspopup",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA popup",
            summary: "An element triggers a popup menu, dialog, or other element.",
            purpose: "The aria-haspopup element, when applied to a button, indicates that triggering the element will open an ARIA menu, dialog, listbox, tree, or grid.",
            actions: "Ensure that the element triggers an ARIA menu, dialog, listbox, tree, or grid and that the aria-haspop attribute value aligns with the type of element that is opened.",
            details: "An aria-haspopup attribute is present.",
            resources: "",
            icon_order: "8",
            position: "last",
            page_rule: "0",
            icon_name: "aria_haspopup",
            guidelines: { 77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" } },
            levels: { 1: "WCAG 2 A" },
        },
        aria_tabindex: {
            id: "112",
            name: "aria_tabindex",
            icon_name: "aria_tabindex",
            title: "ARIA tabindex",
            category: "ARIA",
            cat_code: "aria",
            summary: "A tabindex value of 0 or less is present.",
            purpose:
                "Tabindex can facilitate keyboard navigation for interactive elements. A tabindex attribute value of 0 places an item into the keyboard navigation order (i.e., you can navigate to it using the Tab key). A value of less than 0 (typically -1) removes an element from the keyboard flow (you cannot Tab to it), but allows it to receive programmatic focus (e.g., via scripting). ",
            actions: "Ensure that tabindex is being used correctly by navigating and interacting with the elements using only the keyboard. Positive tabindex values specify a distinct tab order and should typically be avoided.",
            details: "A tabindex attribute is present and has a value of 0 or less.",
            resources: "",
            icon_order: "9",
            position: "last",
            page_rule: "0",
            guidelines: { 39: { guideline_id: "39", code: "2.1.1", name: "2.1.1 Keyboard (Level A)", level_id: "1", level_name: "WCAG 2 A", link: "https://webaim.org/standards/wcag/checklist#sc2.1.1" } },
            levels: { 1: "WCAG 2 A" },
        },
        aria_hidden: {
            name: "aria_hidden",
            category: "ARIA",
            cat_code: "aria",
            title: "ARIA hidden",
            summary: "Content is hidden with ARIA.",
            purpose: 'Content hidden with aria-hidden="true" is not presented to screen reader users.',
            actions: "Ensure the content is intended to be hidden from screen reader users. The hidden content must not contain any navigable elements (such as links or form controls).",
            details: 'An element with aria-hidden="true" is present.',
            resources: "",
            icon_order: "10",
            position: "last",
            page_rule: "0",
            icon_name: "aria_hidden",
            guidelines: { 77: { level_id: 1, level_name: "WCAG 2 A", code: "4.1.2", name: "4.1.2 Name, Role, Value (Level A)", link: "https://webaim.org/standards/wcag/checklist#sc4.1.2", guideline_id: "77" } },
            levels: { 1: "WCAG 2 A" },
        },
    }),
    null == a11ycheck)
)
    a11ycheck = {};

function iconClickAction(e) {
    e.scrollTo(), a11ycheck.iconbox.hide(), a11ycheck.code.setSelected(e), "contrast" === e.data.cat_code && (a11ycheck.tabs.currentContrastIcon = e);
}
(a11ycheck.rules = {}),
    (a11ycheck.rules.text_justified = function (e) {
        e.find("p, div, td").each(function (t, n) {
            "justify" == e.find(n).css("text-align") && a11ycheck.engine.fn.addIcon(n, "text_justified");
        });
    }),
    (a11ycheck.rules.alt_missing = function (e) {
        a11ycheck.engine.fn.overrideby("alt_missing", ["alt_link_missing", "alt_map_missing", "alt_spacer_missing"]),
            e.find("img:not([alt])").each(function (e, t) {
                var n = $(t);
                (null != n.attr("title") && 0 !== n.attr("title").length) ||
                    (null != n.attr("aria-label") && 0 !== n.attr("aria-label").length) ||
                    (null != n.attr("aria-labelledby") && 0 !== n.attr("aria-labelledby").length) ||
                    a11ycheck.engine.fn.addIcon(t, "alt_missing");
            });
    }),
    (a11ycheck.rules.alt_link_missing = function (e) {
        a11ycheck.engine.fn.override("alt_link_missing", ["alt", "alt_missing", "alt_spacer_missing", "alt_null", "alt_spacer", "link_empty"]);
        e.find("a")
            .not("#wave5codetoggle a")
            .each(function (t, n) {
                a11ycheck.engine.fn.hasTextContent(n) ||
                    e
                        .find(n)
                        .children("img")
                        .each(function (e, t) {
                            a11ycheck.engine.fn.addIcon(t, "alt_link_missing");
                        });
            });
    }),
    (a11ycheck.rules.alt_spacer_missing = function (e) {
        a11ycheck.engine.fn.override("alt_spacer_missing", ["alt_missing"]),
            a11ycheck.engine.fn.overrideby("alt_spacer_missing", ["alt_link_missing"]),
            e.find("img:not([alt])").each(function (t, n) {
                var a = e.find(n).css("height"),
                    i = e.find(n).css("width"),
                    r = Number(a.substring(0, a.length - 2)),
                    s = Number(i.substring(0, i.length - 2)),
                    o = n.getAttribute("src");
                o && -1 !== (o = (o = (o = n.getAttribute("src").split("/"))[o.length - 1].split("\\"))[o.length - 1]).search(/^(spacer|space|blank)\..+$/i)
                    ? a11ycheck.engine.fn.addIcon(n, "alt_spacer_missing")
                    : ((null !== r && r > 0 && r <= 3 && "auto" !== a) || (null !== s && s > 0 && s <= 3 && "auto" !== i)) && a11ycheck.engine.fn.addIcon(n, "alt_spacer_missing");
            });
    }),
    (a11ycheck.rules.alt_input_missing = function (e) {
        e.find("input:image").each(function (e, t) {
            var n = t.getAttribute("alt");
            (n && -1 === n.search(/^ *$/)) || a11ycheck.engine.fn.addIcon(t, "alt_input_missing");
        });
    }),
    (a11ycheck.rules.alt_area_missing = function (e) {
        e.find("area").each(function (t, n) {
            var a = n.getAttribute("alt");
            if (!a || -1 !== a.search(/^ *$/)) {
                var i = e.find(n).parents("map")[0].getAttribute("name");
                e.find("img[usemap=\\#" + i + "]").each(function (e, t) {
                    a11ycheck.engine.fn.addIcon(t, "alt_area_missing");
                });
            }
        });
    }),
    (a11ycheck.rules.alt_map_missing = function (e) {
        a11ycheck.engine.fn.override("alt_map_missing", ["alt_missing"]),
            e.find("img[usemap]:not([alt])").each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "alt_map_missing");
            });
    }),
    (a11ycheck.rules.longdesc_invalid = function (e) {
        a11ycheck.engine.fn.override("longdesc_invalid", ["longdesc"]),
            e.find("[longdesc]").each(function (e, t) {
                var n = new RegExp("(([a-zA-Z0-9]|\\|/))+"),
                    a = new RegExp("(.html|.htm)$"),
                    i = new RegExp("(.jpg|.gif|.png)$"),
                    r = t.getAttribute("longdesc");
                n.test(r) && (0 == r.length || i.test(r) || (-1 != r.indexOf(" ") && !a.test(r))) && a11ycheck.engine.fn.addIcon(t, "longdesc_invalid", r);
            });
    }),
    (a11ycheck.rules.select_missing_label = function (e) {
        a11ycheck.engine.fn.override("select", ["label_missing"]),
            e.find("select").each(function (t, n) {
                e.find(n).find("option").length > 0 && !a11ycheck.engine.fn.isLabeled(n, e) && a11ycheck.engine.fn.addIcon(n, "select_missing_label");
            });
    }),
    (a11ycheck.rules.label_missing = function (e) {
        a11ycheck.engine.fn.overrideby("label_missing", ["select_missing_label"]),
            e.find("input:not([type=image],[type=submit],[type=Submit],[type=SUBMIT],[type=reset],[type=Reset],[type=button],[type=hidden],[type=HIDDEN]), select, textarea").each(function (t, n) {
                a11ycheck.engine.fn.isLabeled(n, e) || a11ycheck.engine.fn.addIcon(n, "label_missing");
            });
    }),
    (a11ycheck.rules.label_empty = function (e) {
        a11ycheck.engine.fn.override("label_empty", ["label", "label_orphaned"]),
            e.find("label").each(function (t, n) {
                var a = e.find(n),
                    i = a.children("input, select, textarea"),
                    r = n.getAttribute("for");
                (!a11ycheck.engine.fn.hasTextContent(a) || (((i.length > 0 && a11ycheck.engine.fn.isLabeled(i[0], e)) || null != r) && !a11ycheck.engine.fn.hasTextContent(n))) && a11ycheck.engine.fn.addIcon(n, "label_empty");
            });
    }),
    (a11ycheck.rules.label_multiple = function (e) {
        e.find("input:not([type=image],[type=submit],[type=reset],[type=button],[type=hidden]), select, textarea").each(function (t, n) {
            var a = n.getAttribute("id"),
                i = e.find(n).parents("label"),
                r = null != a ? e.find("label[for='" + a + "']") : null;
            r && (r.length > 1 || (1 == i.length && 1 == r.length && i[0] !== r[0])) && a11ycheck.engine.fn.addIcon(n, "label_multiple");
        });
    }),
    (a11ycheck.rules.title_invalid = function (e) {
        0 !== e.find("title").not("svg title").length
            ? e
                  .find("title")
                  .not("svg title")
                  .each(function (t, n) {
                      var a = e.find(n).text();
                      (0 !== a.length && -1 === a.search(/(^ +$)|(^untitled.*$)/i)) || a11ycheck.engine.fn.addPagewideIcon("title_invalid");
                  })
            : a11ycheck.engine.fn.addPagewideIcon("title_invalid");
    }),
    (a11ycheck.rules.language_missing = function (e) {
        a11ycheck.engine.fn.override("language_missing", ["lang"]);
        const t = [
                "aa",
                "ab",
                "ae",
                "af",
                "ak",
                "am",
                "an",
                "ar",
                "as",
                "av",
                "ay",
                "az",
                "ba",
                "be",
                "bg",
                "bh",
                "bi",
                "bm",
                "bn",
                "bo",
                "br",
                "bs",
                "ca",
                "ce",
                "ch",
                "co",
                "cr",
                "cs",
                "cu",
                "cv",
                "cy",
                "da",
                "de",
                "dv",
                "dz",
                "ee",
                "el",
                "en",
                "eo",
                "es",
                "et",
                "eu",
                "fa",
                "ff",
                "fi",
                "fj",
                "fo",
                "fr",
                "fy",
                "ga",
                "gd",
                "gl",
                "gn",
                "gu",
                "gv",
                "ha",
                "he",
                "hi",
                "ho",
                "hr",
                "ht",
                "hu",
                "hy",
                "hz",
                "ia",
                "id",
                "ie",
                "ig",
                "ii",
                "ik",
                "in",
                "io",
                "is",
                "it",
                "iu",
                "iw",
                "ja",
                "ji",
                "jv",
                "jw",
                "ka",
                "kg",
                "ki",
                "kj",
                "kk",
                "kl",
                "km",
                "kn",
                "ko",
                "kr",
                "ks",
                "ku",
                "kv",
                "kw",
                "ky",
                "la",
                "lb",
                "lg",
                "li",
                "ln",
                "lo",
                "lt",
                "lu",
                "lv",
                "mg",
                "mh",
                "mi",
                "mk",
                "ml",
                "mn",
                "mo",
                "mr",
                "ms",
                "mt",
                "my",
                "na",
                "nb",
                "nd",
                "ne",
                "ng",
                "nl",
                "nn",
                "no",
                "nr",
                "nv",
                "ny",
                "oc",
                "oj",
                "om",
                "or",
                "os",
                "pa",
                "pi",
                "pl",
                "ps",
                "pt",
                "qu",
                "rm",
                "rn",
                "ro",
                "ru",
                "rw",
                "sa",
                "sc",
                "sd",
                "se",
                "sg",
                "sh",
                "si",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sq",
                "sr",
                "ss",
                "st",
                "su",
                "sv",
                "sw",
                "ta",
                "te",
                "tg",
                "th",
                "ti",
                "tk",
                "tl",
                "tn",
                "to",
                "tr",
                "ts",
                "tt",
                "tw",
                "ty",
                "ug",
                "uk",
                "ur",
                "uz",
                "ve",
                "vi",
                "vo",
                "wa",
                "wo",
                "xh",
                "yi",
                "yo",
                "za",
                "zh",
                "zu",
                "aaa",
                "aab",
                "aac",
                "aad",
                "aae",
                "aaf",
                "aag",
                "aah",
                "aai",
                "aak",
                "aal",
                "aam",
                "aan",
                "aao",
                "aap",
                "aaq",
                "aas",
                "aat",
                "aau",
                "aav",
                "aaw",
                "aax",
                "aaz",
                "aba",
                "abb",
                "abc",
                "abd",
                "abe",
                "abf",
                "abg",
                "abh",
                "abi",
                "abj",
                "abl",
                "abm",
                "abn",
                "abo",
                "abp",
                "abq",
                "abr",
                "abs",
                "abt",
                "abu",
                "abv",
                "abw",
                "abx",
                "aby",
                "abz",
                "aca",
                "acb",
                "acd",
                "ace",
                "acf",
                "ach",
                "aci",
                "ack",
                "acl",
                "acm",
                "acn",
                "acp",
                "acq",
                "acr",
                "acs",
                "act",
                "acu",
                "acv",
                "acw",
                "acx",
                "acy",
                "acz",
                "ada",
                "adb",
                "add",
                "ade",
                "adf",
                "adg",
                "adh",
                "adi",
                "adj",
                "adl",
                "adn",
                "ado",
                "adp",
                "adq",
                "adr",
                "ads",
                "adt",
                "adu",
                "adw",
                "adx",
                "ady",
                "adz",
                "aea",
                "aeb",
                "aec",
                "aed",
                "aee",
                "aek",
                "ael",
                "aem",
                "aen",
                "aeq",
                "aer",
                "aes",
                "aeu",
                "aew",
                "aey",
                "aez",
                "afa",
                "afb",
                "afd",
                "afe",
                "afg",
                "afh",
                "afi",
                "afk",
                "afn",
                "afo",
                "afp",
                "afs",
                "aft",
                "afu",
                "afz",
                "aga",
                "agb",
                "agc",
                "agd",
                "age",
                "agf",
                "agg",
                "agh",
                "agi",
                "agj",
                "agk",
                "agl",
                "agm",
                "agn",
                "ago",
                "agp",
                "agq",
                "agr",
                "ags",
                "agt",
                "agu",
                "agv",
                "agw",
                "agx",
                "agy",
                "agz",
                "aha",
                "ahb",
                "ahg",
                "ahh",
                "ahi",
                "ahk",
                "ahl",
                "ahm",
                "ahn",
                "aho",
                "ahp",
                "ahr",
                "ahs",
                "aht",
                "aia",
                "aib",
                "aic",
                "aid",
                "aie",
                "aif",
                "aig",
                "aih",
                "aii",
                "aij",
                "aik",
                "ail",
                "aim",
                "ain",
                "aio",
                "aip",
                "aiq",
                "air",
                "ais",
                "ait",
                "aiw",
                "aix",
                "aiy",
                "aja",
                "ajg",
                "aji",
                "ajn",
                "ajp",
                "ajt",
                "aju",
                "ajw",
                "ajz",
                "akb",
                "akc",
                "akd",
                "ake",
                "akf",
                "akg",
                "akh",
                "aki",
                "akj",
                "akk",
                "akl",
                "akm",
                "ako",
                "akp",
                "akq",
                "akr",
                "aks",
                "akt",
                "aku",
                "akv",
                "akw",
                "akx",
                "aky",
                "akz",
                "ala",
                "alc",
                "ald",
                "ale",
                "alf",
                "alg",
                "alh",
                "ali",
                "alj",
                "alk",
                "all",
                "alm",
                "aln",
                "alo",
                "alp",
                "alq",
                "alr",
                "als",
                "alt",
                "alu",
                "alv",
                "alw",
                "alx",
                "aly",
                "alz",
                "ama",
                "amb",
                "amc",
                "ame",
                "amf",
                "amg",
                "ami",
                "amj",
                "amk",
                "aml",
                "amm",
                "amn",
                "amo",
                "amp",
                "amq",
                "amr",
                "ams",
                "amt",
                "amu",
                "amv",
                "amw",
                "amx",
                "amy",
                "amz",
                "ana",
                "anb",
                "anc",
                "and",
                "ane",
                "anf",
                "ang",
                "anh",
                "ani",
                "anj",
                "ank",
                "anl",
                "anm",
                "ann",
                "ano",
                "anp",
                "anq",
                "anr",
                "ans",
                "ant",
                "anu",
                "anv",
                "anw",
                "anx",
                "any",
                "anz",
                "aoa",
                "aob",
                "aoc",
                "aod",
                "aoe",
                "aof",
                "aog",
                "aoh",
                "aoi",
                "aoj",
                "aok",
                "aol",
                "aom",
                "aon",
                "aor",
                "aos",
                "aot",
                "aou",
                "aox",
                "aoz",
                "apa",
                "apb",
                "apc",
                "apd",
                "ape",
                "apf",
                "apg",
                "aph",
                "api",
                "apj",
                "apk",
                "apl",
                "apm",
                "apn",
                "apo",
                "app",
                "apq",
                "apr",
                "aps",
                "apt",
                "apu",
                "apv",
                "apw",
                "apx",
                "apy",
                "apz",
                "aqa",
                "aqc",
                "aqd",
                "aqg",
                "aql",
                "aqm",
                "aqn",
                "aqp",
                "aqr",
                "aqt",
                "aqz",
                "arb",
                "arc",
                "ard",
                "are",
                "arh",
                "ari",
                "arj",
                "ark",
                "arl",
                "arn",
                "aro",
                "arp",
                "arq",
                "arr",
                "ars",
                "art",
                "aru",
                "arv",
                "arw",
                "arx",
                "ary",
                "arz",
                "asa",
                "asb",
                "asc",
                "asd",
                "ase",
                "asf",
                "asg",
                "ash",
                "asi",
                "asj",
                "ask",
                "asl",
                "asn",
                "aso",
                "asp",
                "asq",
                "asr",
                "ass",
                "ast",
                "asu",
                "asv",
                "asw",
                "asx",
                "asy",
                "asz",
                "ata",
                "atb",
                "atc",
                "atd",
                "ate",
                "atg",
                "ath",
                "ati",
                "atj",
                "atk",
                "atl",
                "atm",
                "atn",
                "ato",
                "atp",
                "atq",
                "atr",
                "ats",
                "att",
                "atu",
                "atv",
                "atw",
                "atx",
                "aty",
                "atz",
                "aua",
                "aub",
                "auc",
                "aud",
                "aue",
                "auf",
                "aug",
                "auh",
                "aui",
                "auj",
                "auk",
                "aul",
                "aum",
                "aun",
                "auo",
                "aup",
                "auq",
                "aur",
                "aus",
                "aut",
                "auu",
                "auw",
                "aux",
                "auy",
                "auz",
                "avb",
                "avd",
                "avi",
                "avk",
                "avl",
                "avm",
                "avn",
                "avo",
                "avs",
                "avt",
                "avu",
                "avv",
                "awa",
                "awb",
                "awc",
                "awd",
                "awe",
                "awg",
                "awh",
                "awi",
                "awk",
                "awm",
                "awn",
                "awo",
                "awr",
                "aws",
                "awt",
                "awu",
                "awv",
                "aww",
                "awx",
                "awy",
                "axb",
                "axe",
                "axg",
                "axk",
                "axl",
                "axm",
                "axx",
                "aya",
                "ayb",
                "ayc",
                "ayd",
                "aye",
                "ayg",
                "ayh",
                "ayi",
                "ayk",
                "ayl",
                "ayn",
                "ayo",
                "ayp",
                "ayq",
                "ayr",
                "ays",
                "ayt",
                "ayu",
                "ayx",
                "ayy",
                "ayz",
                "aza",
                "azb",
                "azc",
                "azd",
                "azg",
                "azj",
                "azm",
                "azn",
                "azo",
                "azt",
                "azz",
                "baa",
                "bab",
                "bac",
                "bad",
                "bae",
                "baf",
                "bag",
                "bah",
                "bai",
                "baj",
                "bal",
                "ban",
                "bao",
                "bap",
                "bar",
                "bas",
                "bat",
                "bau",
                "bav",
                "baw",
                "bax",
                "bay",
                "baz",
                "bba",
                "bbb",
                "bbc",
                "bbd",
                "bbe",
                "bbf",
                "bbg",
                "bbh",
                "bbi",
                "bbj",
                "bbk",
                "bbl",
                "bbm",
                "bbn",
                "bbo",
                "bbp",
                "bbq",
                "bbr",
                "bbs",
                "bbt",
                "bbu",
                "bbv",
                "bbw",
                "bbx",
                "bby",
                "bbz",
                "bca",
                "bcb",
                "bcc",
                "bcd",
                "bce",
                "bcf",
                "bcg",
                "bch",
                "bci",
                "bcj",
                "bck",
                "bcl",
                "bcm",
                "bcn",
                "bco",
                "bcp",
                "bcq",
                "bcr",
                "bcs",
                "bct",
                "bcu",
                "bcv",
                "bcw",
                "bcy",
                "bcz",
                "bda",
                "bdb",
                "bdc",
                "bdd",
                "bde",
                "bdf",
                "bdg",
                "bdh",
                "bdi",
                "bdj",
                "bdk",
                "bdl",
                "bdm",
                "bdn",
                "bdo",
                "bdp",
                "bdq",
                "bdr",
                "bds",
                "bdt",
                "bdu",
                "bdv",
                "bdw",
                "bdx",
                "bdy",
                "bdz",
                "bea",
                "beb",
                "bec",
                "bed",
                "bee",
                "bef",
                "beg",
                "beh",
                "bei",
                "bej",
                "bek",
                "bem",
                "beo",
                "bep",
                "beq",
                "ber",
                "bes",
                "bet",
                "beu",
                "bev",
                "bew",
                "bex",
                "bey",
                "bez",
                "bfa",
                "bfb",
                "bfc",
                "bfd",
                "bfe",
                "bff",
                "bfg",
                "bfh",
                "bfi",
                "bfj",
                "bfk",
                "bfl",
                "bfm",
                "bfn",
                "bfo",
                "bfp",
                "bfq",
                "bfr",
                "bfs",
                "bft",
                "bfu",
                "bfw",
                "bfx",
                "bfy",
                "bfz",
                "bga",
                "bgb",
                "bgc",
                "bgd",
                "bge",
                "bgf",
                "bgg",
                "bgi",
                "bgj",
                "bgk",
                "bgl",
                "bgm",
                "bgn",
                "bgo",
                "bgp",
                "bgq",
                "bgr",
                "bgs",
                "bgt",
                "bgu",
                "bgv",
                "bgw",
                "bgx",
                "bgy",
                "bgz",
                "bha",
                "bhb",
                "bhc",
                "bhd",
                "bhe",
                "bhf",
                "bhg",
                "bhh",
                "bhi",
                "bhj",
                "bhk",
                "bhl",
                "bhm",
                "bhn",
                "bho",
                "bhp",
                "bhq",
                "bhr",
                "bhs",
                "bht",
                "bhu",
                "bhv",
                "bhw",
                "bhx",
                "bhy",
                "bhz",
                "bia",
                "bib",
                "bic",
                "bid",
                "bie",
                "bif",
                "big",
                "bij",
                "bik",
                "bil",
                "bim",
                "bin",
                "bio",
                "bip",
                "biq",
                "bir",
                "bit",
                "biu",
                "biv",
                "biw",
                "bix",
                "biy",
                "biz",
                "bja",
                "bjb",
                "bjc",
                "bjd",
                "bje",
                "bjf",
                "bjg",
                "bjh",
                "bji",
                "bjj",
                "bjk",
                "bjl",
                "bjm",
                "bjn",
                "bjo",
                "bjp",
                "bjq",
                "bjr",
                "bjs",
                "bjt",
                "bju",
                "bjv",
                "bjw",
                "bjx",
                "bjy",
                "bjz",
                "bka",
                "bkb",
                "bkc",
                "bkd",
                "bkf",
                "bkg",
                "bkh",
                "bki",
                "bkj",
                "bkk",
                "bkl",
                "bkm",
                "bkn",
                "bko",
                "bkp",
                "bkq",
                "bkr",
                "bks",
                "bkt",
                "bku",
                "bkv",
                "bkw",
                "bkx",
                "bky",
                "bkz",
                "bla",
                "blb",
                "blc",
                "bld",
                "ble",
                "blf",
                "blg",
                "blh",
                "bli",
                "blj",
                "blk",
                "bll",
                "blm",
                "bln",
                "blo",
                "blp",
                "blq",
                "blr",
                "bls",
                "blt",
                "blv",
                "blw",
                "blx",
                "bly",
                "blz",
                "bma",
                "bmb",
                "bmc",
                "bmd",
                "bme",
                "bmf",
                "bmg",
                "bmh",
                "bmi",
                "bmj",
                "bmk",
                "bml",
                "bmm",
                "bmn",
                "bmo",
                "bmp",
                "bmq",
                "bmr",
                "bms",
                "bmt",
                "bmu",
                "bmv",
                "bmw",
                "bmx",
                "bmy",
                "bmz",
                "bna",
                "bnb",
                "bnc",
                "bnd",
                "bne",
                "bnf",
                "bng",
                "bni",
                "bnj",
                "bnk",
                "bnl",
                "bnm",
                "bnn",
                "bno",
                "bnp",
                "bnq",
                "bnr",
                "bns",
                "bnt",
                "bnu",
                "bnv",
                "bnw",
                "bnx",
                "bny",
                "bnz",
                "boa",
                "bob",
                "boe",
                "bof",
                "bog",
                "boh",
                "boi",
                "boj",
                "bok",
                "bol",
                "bom",
                "bon",
                "boo",
                "bop",
                "boq",
                "bor",
                "bot",
                "bou",
                "bov",
                "bow",
                "box",
                "boy",
                "boz",
                "bpa",
                "bpb",
                "bpd",
                "bpg",
                "bph",
                "bpi",
                "bpj",
                "bpk",
                "bpl",
                "bpm",
                "bpn",
                "bpo",
                "bpp",
                "bpq",
                "bpr",
                "bps",
                "bpt",
                "bpu",
                "bpv",
                "bpw",
                "bpx",
                "bpy",
                "bpz",
                "bqa",
                "bqb",
                "bqc",
                "bqd",
                "bqf",
                "bqg",
                "bqh",
                "bqi",
                "bqj",
                "bqk",
                "bql",
                "bqm",
                "bqn",
                "bqo",
                "bqp",
                "bqq",
                "bqr",
                "bqs",
                "bqt",
                "bqu",
                "bqv",
                "bqw",
                "bqx",
                "bqy",
                "bqz",
                "bra",
                "brb",
                "brc",
                "brd",
                "brf",
                "brg",
                "brh",
                "bri",
                "brj",
                "brk",
                "brl",
                "brm",
                "brn",
                "bro",
                "brp",
                "brq",
                "brr",
                "brs",
                "brt",
                "bru",
                "brv",
                "brw",
                "brx",
                "bry",
                "brz",
                "bsa",
                "bsb",
                "bsc",
                "bse",
                "bsf",
                "bsg",
                "bsh",
                "bsi",
                "bsj",
                "bsk",
                "bsl",
                "bsm",
                "bsn",
                "bso",
                "bsp",
                "bsq",
                "bsr",
                "bss",
                "bst",
                "bsu",
                "bsv",
                "bsw",
                "bsx",
                "bsy",
                "bta",
                "btb",
                "btc",
                "btd",
                "bte",
                "btf",
                "btg",
                "bth",
                "bti",
                "btj",
                "btk",
                "btl",
                "btm",
                "btn",
                "bto",
                "btp",
                "btq",
                "btr",
                "bts",
                "btt",
                "btu",
                "btv",
                "btw",
                "btx",
                "bty",
                "btz",
                "bua",
                "bub",
                "buc",
                "bud",
                "bue",
                "buf",
                "bug",
                "buh",
                "bui",
                "buj",
                "buk",
                "bum",
                "bun",
                "buo",
                "bup",
                "buq",
                "bus",
                "but",
                "buu",
                "buv",
                "buw",
                "bux",
                "buy",
                "buz",
                "bva",
                "bvb",
                "bvc",
                "bvd",
                "bve",
                "bvf",
                "bvg",
                "bvh",
                "bvi",
                "bvj",
                "bvk",
                "bvl",
                "bvm",
                "bvn",
                "bvo",
                "bvp",
                "bvq",
                "bvr",
                "bvt",
                "bvu",
                "bvv",
                "bvw",
                "bvx",
                "bvy",
                "bvz",
                "bwa",
                "bwb",
                "bwc",
                "bwd",
                "bwe",
                "bwf",
                "bwg",
                "bwh",
                "bwi",
                "bwj",
                "bwk",
                "bwl",
                "bwm",
                "bwn",
                "bwo",
                "bwp",
                "bwq",
                "bwr",
                "bws",
                "bwt",
                "bwu",
                "bww",
                "bwx",
                "bwy",
                "bwz",
                "bxa",
                "bxb",
                "bxc",
                "bxd",
                "bxe",
                "bxf",
                "bxg",
                "bxh",
                "bxi",
                "bxj",
                "bxk",
                "bxl",
                "bxm",
                "bxn",
                "bxo",
                "bxp",
                "bxq",
                "bxr",
                "bxs",
                "bxu",
                "bxv",
                "bxw",
                "bxx",
                "bxz",
                "bya",
                "byb",
                "byc",
                "byd",
                "bye",
                "byf",
                "byg",
                "byh",
                "byi",
                "byj",
                "byk",
                "byl",
                "bym",
                "byn",
                "byo",
                "byp",
                "byq",
                "byr",
                "bys",
                "byt",
                "byv",
                "byw",
                "byx",
                "byy",
                "byz",
                "bza",
                "bzb",
                "bzc",
                "bzd",
                "bze",
                "bzf",
                "bzg",
                "bzh",
                "bzi",
                "bzj",
                "bzk",
                "bzl",
                "bzm",
                "bzn",
                "bzo",
                "bzp",
                "bzq",
                "bzr",
                "bzs",
                "bzt",
                "bzu",
                "bzv",
                "bzw",
                "bzx",
                "bzy",
                "bzz",
                "caa",
                "cab",
                "cac",
                "cad",
                "cae",
                "caf",
                "cag",
                "cah",
                "cai",
                "caj",
                "cak",
                "cal",
                "cam",
                "can",
                "cao",
                "cap",
                "caq",
                "car",
                "cas",
                "cau",
                "cav",
                "caw",
                "cax",
                "cay",
                "caz",
                "cba",
                "cbb",
                "cbc",
                "cbd",
                "cbe",
                "cbg",
                "cbh",
                "cbi",
                "cbj",
                "cbk",
                "cbl",
                "cbn",
                "cbo",
                "cbq",
                "cbr",
                "cbs",
                "cbt",
                "cbu",
                "cbv",
                "cbw",
                "cby",
                "cca",
                "ccc",
                "ccd",
                "cce",
                "ccg",
                "cch",
                "ccj",
                "ccl",
                "ccm",
                "ccn",
                "cco",
                "ccp",
                "ccq",
                "ccr",
                "ccs",
                "cda",
                "cdc",
                "cdd",
                "cde",
                "cdf",
                "cdg",
                "cdh",
                "cdi",
                "cdj",
                "cdm",
                "cdn",
                "cdo",
                "cdr",
                "cds",
                "cdy",
                "cdz",
                "cea",
                "ceb",
                "ceg",
                "cek",
                "cel",
                "cen",
                "cet",
                "cey",
                "cfa",
                "cfd",
                "cfg",
                "cfm",
                "cga",
                "cgc",
                "cgg",
                "cgk",
                "chb",
                "chc",
                "chd",
                "chf",
                "chg",
                "chh",
                "chj",
                "chk",
                "chl",
                "chm",
                "chn",
                "cho",
                "chp",
                "chq",
                "chr",
                "cht",
                "chw",
                "chx",
                "chy",
                "chz",
                "cia",
                "cib",
                "cic",
                "cid",
                "cie",
                "cih",
                "cik",
                "cim",
                "cin",
                "cip",
                "cir",
                "ciw",
                "ciy",
                "cja",
                "cje",
                "cjh",
                "cji",
                "cjk",
                "cjm",
                "cjn",
                "cjo",
                "cjp",
                "cjr",
                "cjs",
                "cjv",
                "cjy",
                "cka",
                "ckb",
                "ckh",
                "ckl",
                "ckm",
                "ckn",
                "cko",
                "ckq",
                "ckr",
                "cks",
                "ckt",
                "cku",
                "ckv",
                "ckx",
                "cky",
                "ckz",
                "cla",
                "clc",
                "cld",
                "cle",
                "clh",
                "cli",
                "clj",
                "clk",
                "cll",
                "clm",
                "clo",
                "clt",
                "clu",
                "clw",
                "cly",
                "cma",
                "cmc",
                "cme",
                "cmg",
                "cmi",
                "cmk",
                "cml",
                "cmm",
                "cmn",
                "cmo",
                "cmr",
                "cms",
                "cmt",
                "cna",
                "cnb",
                "cnc",
                "cng",
                "cnh",
                "cni",
                "cnk",
                "cnl",
                "cno",
                "cnp",
                "cnr",
                "cns",
                "cnt",
                "cnu",
                "cnw",
                "cnx",
                "coa",
                "cob",
                "coc",
                "cod",
                "coe",
                "cof",
                "cog",
                "coh",
                "coj",
                "cok",
                "col",
                "com",
                "con",
                "coo",
                "cop",
                "coq",
                "cot",
                "cou",
                "cov",
                "cow",
                "cox",
                "coy",
                "coz",
                "cpa",
                "cpb",
                "cpc",
                "cpe",
                "cpf",
                "cpg",
                "cpi",
                "cpn",
                "cpo",
                "cpp",
                "cps",
                "cpu",
                "cpx",
                "cpy",
                "cqd",
                "cqu",
                "cra",
                "crb",
                "crc",
                "crd",
                "crf",
                "crg",
                "crh",
                "cri",
                "crj",
                "crk",
                "crl",
                "crm",
                "crn",
                "cro",
                "crp",
                "crq",
                "crr",
                "crs",
                "crt",
                "crv",
                "crw",
                "crx",
                "cry",
                "crz",
                "csa",
                "csb",
                "csc",
                "csd",
                "cse",
                "csf",
                "csg",
                "csh",
                "csi",
                "csj",
                "csk",
                "csl",
                "csm",
                "csn",
                "cso",
                "csp",
                "csq",
                "csr",
                "css",
                "cst",
                "csu",
                "csv",
                "csw",
                "csy",
                "csz",
                "cta",
                "ctc",
                "ctd",
                "cte",
                "ctg",
                "cth",
                "ctl",
                "ctm",
                "ctn",
                "cto",
                "ctp",
                "cts",
                "ctt",
                "ctu",
                "ctz",
                "cua",
                "cub",
                "cuc",
                "cug",
                "cuh",
                "cui",
                "cuj",
                "cuk",
                "cul",
                "cum",
                "cuo",
                "cup",
                "cuq",
                "cur",
                "cus",
                "cut",
                "cuu",
                "cuv",
                "cuw",
                "cux",
                "cuy",
                "cvg",
                "cvn",
                "cwa",
                "cwb",
                "cwd",
                "cwe",
                "cwg",
                "cwt",
                "cya",
                "cyb",
                "cyo",
                "czh",
                "czk",
                "czn",
                "czo",
                "czt",
                "daa",
                "dac",
                "dad",
                "dae",
                "daf",
                "dag",
                "dah",
                "dai",
                "daj",
                "dak",
                "dal",
                "dam",
                "dao",
                "dap",
                "daq",
                "dar",
                "das",
                "dau",
                "dav",
                "daw",
                "dax",
                "day",
                "daz",
                "dba",
                "dbb",
                "dbd",
                "dbe",
                "dbf",
                "dbg",
                "dbi",
                "dbj",
                "dbl",
                "dbm",
                "dbn",
                "dbo",
                "dbp",
                "dbq",
                "dbr",
                "dbt",
                "dbu",
                "dbv",
                "dbw",
                "dby",
                "dcc",
                "dcr",
                "dda",
                "ddd",
                "dde",
                "ddg",
                "ddi",
                "ddj",
                "ddn",
                "ddo",
                "ddr",
                "dds",
                "ddw",
                "dec",
                "ded",
                "dee",
                "def",
                "deg",
                "deh",
                "dei",
                "dek",
                "del",
                "dem",
                "den",
                "dep",
                "deq",
                "der",
                "des",
                "dev",
                "dez",
                "dga",
                "dgb",
                "dgc",
                "dgd",
                "dge",
                "dgg",
                "dgh",
                "dgi",
                "dgk",
                "dgl",
                "dgn",
                "dgo",
                "dgr",
                "dgs",
                "dgt",
                "dgu",
                "dgw",
                "dgx",
                "dgz",
                "dha",
                "dhd",
                "dhg",
                "dhi",
                "dhl",
                "dhm",
                "dhn",
                "dho",
                "dhr",
                "dhs",
                "dhu",
                "dhv",
                "dhw",
                "dhx",
                "dia",
                "dib",
                "dic",
                "did",
                "dif",
                "dig",
                "dih",
                "dii",
                "dij",
                "dik",
                "dil",
                "dim",
                "din",
                "dio",
                "dip",
                "diq",
                "dir",
                "dis",
                "dit",
                "diu",
                "diw",
                "dix",
                "diy",
                "diz",
                "dja",
                "djb",
                "djc",
                "djd",
                "dje",
                "djf",
                "dji",
                "djj",
                "djk",
                "djl",
                "djm",
                "djn",
                "djo",
                "djr",
                "dju",
                "djw",
                "dka",
                "dkk",
                "dkl",
                "dkr",
                "dks",
                "dkx",
                "dlg",
                "dlk",
                "dlm",
                "dln",
                "dma",
                "dmb",
                "dmc",
                "dmd",
                "dme",
                "dmf",
                "dmg",
                "dmk",
                "dml",
                "dmm",
                "dmn",
                "dmo",
                "dmr",
                "dms",
                "dmu",
                "dmv",
                "dmw",
                "dmx",
                "dmy",
                "dna",
                "dnd",
                "dne",
                "dng",
                "dni",
                "dnj",
                "dnk",
                "dnn",
                "dno",
                "dnr",
                "dnt",
                "dnu",
                "dnv",
                "dnw",
                "dny",
                "doa",
                "dob",
                "doc",
                "doe",
                "dof",
                "doh",
                "doi",
                "dok",
                "dol",
                "don",
                "doo",
                "dop",
                "doq",
                "dor",
                "dos",
                "dot",
                "dov",
                "dow",
                "dox",
                "doy",
                "doz",
                "dpp",
                "dra",
                "drb",
                "drc",
                "drd",
                "dre",
                "drg",
                "drh",
                "dri",
                "drl",
                "drn",
                "dro",
                "drq",
                "drr",
                "drs",
                "drt",
                "dru",
                "drw",
                "dry",
                "dsb",
                "dse",
                "dsh",
                "dsi",
                "dsl",
                "dsn",
                "dso",
                "dsq",
                "dta",
                "dtb",
                "dtd",
                "dth",
                "dti",
                "dtk",
                "dtm",
                "dtn",
                "dto",
                "dtp",
                "dtr",
                "dts",
                "dtt",
                "dtu",
                "dty",
                "dua",
                "dub",
                "duc",
                "dud",
                "due",
                "duf",
                "dug",
                "duh",
                "dui",
                "duj",
                "duk",
                "dul",
                "dum",
                "dun",
                "duo",
                "dup",
                "duq",
                "dur",
                "dus",
                "duu",
                "duv",
                "duw",
                "dux",
                "duy",
                "duz",
                "dva",
                "dwa",
                "dwk",
                "dwl",
                "dwr",
                "dws",
                "dwu",
                "dww",
                "dwy",
                "dwz",
                "dya",
                "dyb",
                "dyd",
                "dyg",
                "dyi",
                "dym",
                "dyn",
                "dyo",
                "dyu",
                "dyy",
                "dza",
                "dzd",
                "dze",
                "dzg",
                "dzl",
                "dzn",
                "eaa",
                "ebc",
                "ebg",
                "ebk",
                "ebo",
                "ebr",
                "ebu",
                "ecr",
                "ecs",
                "ecy",
                "eee",
                "efa",
                "efe",
                "efi",
                "ega",
                "egl",
                "ego",
                "egx",
                "egy",
                "ehu",
                "eip",
                "eit",
                "eiv",
                "eja",
                "eka",
                "ekc",
                "eke",
                "ekg",
                "eki",
                "ekk",
                "ekl",
                "ekm",
                "eko",
                "ekp",
                "ekr",
                "eky",
                "ele",
                "elh",
                "eli",
                "elk",
                "elm",
                "elo",
                "elp",
                "elu",
                "elx",
                "ema",
                "emb",
                "eme",
                "emg",
                "emi",
                "emk",
                "emm",
                "emn",
                "emo",
                "emp",
                "ems",
                "emu",
                "emw",
                "emx",
                "emy",
                "ena",
                "enb",
                "enc",
                "end",
                "enf",
                "enh",
                "enl",
                "enm",
                "enn",
                "eno",
                "enq",
                "enr",
                "enu",
                "env",
                "enw",
                "enx",
                "eot",
                "epi",
                "era",
                "erg",
                "erh",
                "eri",
                "erk",
                "ero",
                "err",
                "ers",
                "ert",
                "erw",
                "ese",
                "esg",
                "esh",
                "esi",
                "esk",
                "esl",
                "esm",
                "esn",
                "eso",
                "esq",
                "ess",
                "esu",
                "esx",
                "esy",
                "etb",
                "etc",
                "eth",
                "etn",
                "eto",
                "etr",
                "ets",
                "ett",
                "etu",
                "etx",
                "etz",
                "euq",
                "eve",
                "evh",
                "evn",
                "ewo",
                "ext",
                "eya",
                "eyo",
                "eza",
                "eze",
                "faa",
                "fab",
                "fad",
                "faf",
                "fag",
                "fah",
                "fai",
                "faj",
                "fak",
                "fal",
                "fam",
                "fan",
                "fap",
                "far",
                "fat",
                "fau",
                "fax",
                "fay",
                "faz",
                "fbl",
                "fcs",
                "fer",
                "ffi",
                "ffm",
                "fgr",
                "fia",
                "fie",
                "fif",
                "fil",
                "fip",
                "fir",
                "fit",
                "fiu",
                "fiw",
                "fkk",
                "fkv",
                "fla",
                "flh",
                "fli",
                "fll",
                "fln",
                "flr",
                "fly",
                "fmp",
                "fmu",
                "fnb",
                "fng",
                "fni",
                "fod",
                "foi",
                "fom",
                "fon",
                "for",
                "fos",
                "fox",
                "fpe",
                "fqs",
                "frc",
                "frd",
                "frk",
                "frm",
                "fro",
                "frp",
                "frq",
                "frr",
                "frs",
                "frt",
                "fse",
                "fsl",
                "fss",
                "fub",
                "fuc",
                "fud",
                "fue",
                "fuf",
                "fuh",
                "fui",
                "fuj",
                "fum",
                "fun",
                "fuq",
                "fur",
                "fut",
                "fuu",
                "fuv",
                "fuy",
                "fvr",
                "fwa",
                "fwe",
                "gaa",
                "gab",
                "gac",
                "gad",
                "gae",
                "gaf",
                "gag",
                "gah",
                "gai",
                "gaj",
                "gak",
                "gal",
                "gam",
                "gan",
                "gao",
                "gap",
                "gaq",
                "gar",
                "gas",
                "gat",
                "gau",
                "gav",
                "gaw",
                "gax",
                "gay",
                "gaz",
                "gba",
                "gbb",
                "gbc",
                "gbd",
                "gbe",
                "gbf",
                "gbg",
                "gbh",
                "gbi",
                "gbj",
                "gbk",
                "gbl",
                "gbm",
                "gbn",
                "gbo",
                "gbp",
                "gbq",
                "gbr",
                "gbs",
                "gbu",
                "gbv",
                "gbw",
                "gbx",
                "gby",
                "gbz",
                "gcc",
                "gcd",
                "gce",
                "gcf",
                "gcl",
                "gcn",
                "gcr",
                "gct",
                "gda",
                "gdb",
                "gdc",
                "gdd",
                "gde",
                "gdf",
                "gdg",
                "gdh",
                "gdi",
                "gdj",
                "gdk",
                "gdl",
                "gdm",
                "gdn",
                "gdo",
                "gdq",
                "gdr",
                "gds",
                "gdt",
                "gdu",
                "gdx",
                "gea",
                "geb",
                "gec",
                "ged",
                "gef",
                "geg",
                "geh",
                "gei",
                "gej",
                "gek",
                "gel",
                "gem",
                "geq",
                "ges",
                "gev",
                "gew",
                "gex",
                "gey",
                "gez",
                "gfk",
                "gft",
                "gfx",
                "gga",
                "ggb",
                "ggd",
                "gge",
                "ggg",
                "ggk",
                "ggl",
                "ggn",
                "ggo",
                "ggr",
                "ggt",
                "ggu",
                "ggw",
                "gha",
                "ghc",
                "ghe",
                "ghh",
                "ghk",
                "ghl",
                "ghn",
                "gho",
                "ghr",
                "ghs",
                "ght",
                "gia",
                "gib",
                "gic",
                "gid",
                "gie",
                "gig",
                "gih",
                "gil",
                "gim",
                "gin",
                "gio",
                "gip",
                "giq",
                "gir",
                "gis",
                "git",
                "giu",
                "giw",
                "gix",
                "giy",
                "giz",
                "gji",
                "gjk",
                "gjm",
                "gjn",
                "gjr",
                "gju",
                "gka",
                "gkd",
                "gke",
                "gkn",
                "gko",
                "gkp",
                "gku",
                "glc",
                "gld",
                "glh",
                "gli",
                "glj",
                "glk",
                "gll",
                "glo",
                "glr",
                "glu",
                "glw",
                "gly",
                "gma",
                "gmb",
                "gmd",
                "gme",
                "gmg",
                "gmh",
                "gml",
                "gmm",
                "gmn",
                "gmq",
                "gmr",
                "gmu",
                "gmv",
                "gmw",
                "gmx",
                "gmy",
                "gmz",
                "gna",
                "gnb",
                "gnc",
                "gnd",
                "gne",
                "gng",
                "gnh",
                "gni",
                "gnj",
                "gnk",
                "gnl",
                "gnm",
                "gnn",
                "gno",
                "gnq",
                "gnr",
                "gnt",
                "gnu",
                "gnw",
                "gnz",
                "goa",
                "gob",
                "goc",
                "god",
                "goe",
                "gof",
                "gog",
                "goh",
                "goi",
                "goj",
                "gok",
                "gol",
                "gom",
                "gon",
                "goo",
                "gop",
                "goq",
                "gor",
                "gos",
                "got",
                "gou",
                "gow",
                "gox",
                "goy",
                "goz",
                "gpa",
                "gpe",
                "gpn",
                "gqa",
                "gqi",
                "gqn",
                "gqr",
                "gqu",
                "gra",
                "grb",
                "grc",
                "grd",
                "grg",
                "grh",
                "gri",
                "grj",
                "grk",
                "grm",
                "gro",
                "grq",
                "grr",
                "grs",
                "grt",
                "gru",
                "grv",
                "grw",
                "grx",
                "gry",
                "grz",
                "gse",
                "gsg",
                "gsl",
                "gsm",
                "gsn",
                "gso",
                "gsp",
                "gss",
                "gsw",
                "gta",
                "gti",
                "gtu",
                "gua",
                "gub",
                "guc",
                "gud",
                "gue",
                "guf",
                "gug",
                "guh",
                "gui",
                "guk",
                "gul",
                "gum",
                "gun",
                "guo",
                "gup",
                "guq",
                "gur",
                "gus",
                "gut",
                "guu",
                "guv",
                "guw",
                "gux",
                "guz",
                "gva",
                "gvc",
                "gve",
                "gvf",
                "gvj",
                "gvl",
                "gvm",
                "gvn",
                "gvo",
                "gvp",
                "gvr",
                "gvs",
                "gvy",
                "gwa",
                "gwb",
                "gwc",
                "gwd",
                "gwe",
                "gwf",
                "gwg",
                "gwi",
                "gwj",
                "gwm",
                "gwn",
                "gwr",
                "gwt",
                "gwu",
                "gww",
                "gwx",
                "gxx",
                "gya",
                "gyb",
                "gyd",
                "gye",
                "gyf",
                "gyg",
                "gyi",
                "gyl",
                "gym",
                "gyn",
                "gyo",
                "gyr",
                "gyy",
                "gza",
                "gzi",
                "gzn",
                "haa",
                "hab",
                "hac",
                "had",
                "hae",
                "haf",
                "hag",
                "hah",
                "hai",
                "haj",
                "hak",
                "hal",
                "ham",
                "han",
                "hao",
                "hap",
                "haq",
                "har",
                "has",
                "hav",
                "haw",
                "hax",
                "hay",
                "haz",
                "hba",
                "hbb",
                "hbn",
                "hbo",
                "hbu",
                "hca",
                "hch",
                "hdn",
                "hds",
                "hdy",
                "hea",
                "hed",
                "heg",
                "heh",
                "hei",
                "hem",
                "hgm",
                "hgw",
                "hhi",
                "hhr",
                "hhy",
                "hia",
                "hib",
                "hid",
                "hif",
                "hig",
                "hih",
                "hii",
                "hij",
                "hik",
                "hil",
                "him",
                "hio",
                "hir",
                "hit",
                "hiw",
                "hix",
                "hji",
                "hka",
                "hke",
                "hkk",
                "hkn",
                "hks",
                "hla",
                "hlb",
                "hld",
                "hle",
                "hlt",
                "hlu",
                "hma",
                "hmb",
                "hmc",
                "hmd",
                "hme",
                "hmf",
                "hmg",
                "hmh",
                "hmi",
                "hmj",
                "hmk",
                "hml",
                "hmm",
                "hmn",
                "hmp",
                "hmq",
                "hmr",
                "hms",
                "hmt",
                "hmu",
                "hmv",
                "hmw",
                "hmx",
                "hmy",
                "hmz",
                "hna",
                "hnd",
                "hne",
                "hng",
                "hnh",
                "hni",
                "hnj",
                "hnn",
                "hno",
                "hns",
                "hnu",
                "hoa",
                "hob",
                "hoc",
                "hod",
                "hoe",
                "hoh",
                "hoi",
                "hoj",
                "hok",
                "hol",
                "hom",
                "hoo",
                "hop",
                "hor",
                "hos",
                "hot",
                "hov",
                "how",
                "hoy",
                "hoz",
                "hpo",
                "hps",
                "hra",
                "hrc",
                "hre",
                "hrk",
                "hrm",
                "hro",
                "hrp",
                "hrr",
                "hrt",
                "hru",
                "hrw",
                "hrx",
                "hrz",
                "hsb",
                "hsh",
                "hsl",
                "hsn",
                "hss",
                "hti",
                "hto",
                "hts",
                "htu",
                "htx",
                "hub",
                "huc",
                "hud",
                "hue",
                "huf",
                "hug",
                "huh",
                "hui",
                "huj",
                "huk",
                "hul",
                "hum",
                "huo",
                "hup",
                "huq",
                "hur",
                "hus",
                "hut",
                "huu",
                "huv",
                "huw",
                "hux",
                "huy",
                "huz",
                "hvc",
                "hve",
                "hvk",
                "hvn",
                "hvv",
                "hwa",
                "hwc",
                "hwo",
                "hya",
                "hyw",
                "hyx",
                "iai",
                "ian",
                "iap",
                "iar",
                "iba",
                "ibb",
                "ibd",
                "ibe",
                "ibg",
                "ibh",
                "ibi",
                "ibl",
                "ibm",
                "ibn",
                "ibr",
                "ibu",
                "iby",
                "ica",
                "ich",
                "icl",
                "icr",
                "ida",
                "idb",
                "idc",
                "idd",
                "ide",
                "idi",
                "idr",
                "ids",
                "idt",
                "idu",
                "ifa",
                "ifb",
                "ife",
                "iff",
                "ifk",
                "ifm",
                "ifu",
                "ify",
                "igb",
                "ige",
                "igg",
                "igl",
                "igm",
                "ign",
                "igo",
                "igs",
                "igw",
                "ihb",
                "ihi",
                "ihp",
                "ihw",
                "iin",
                "iir",
                "ijc",
                "ije",
                "ijj",
                "ijn",
                "ijo",
                "ijs",
                "ike",
                "iki",
                "ikk",
                "ikl",
                "iko",
                "ikp",
                "ikr",
                "iks",
                "ikt",
                "ikv",
                "ikw",
                "ikx",
                "ikz",
                "ila",
                "ilb",
                "ilg",
                "ili",
                "ilk",
                "ill",
                "ilm",
                "ilo",
                "ilp",
                "ils",
                "ilu",
                "ilv",
                "ilw",
                "ima",
                "ime",
                "imi",
                "iml",
                "imn",
                "imo",
                "imr",
                "ims",
                "imy",
                "inb",
                "inc",
                "ine",
                "ing",
                "inh",
                "inj",
                "inl",
                "inm",
                "inn",
                "ino",
                "inp",
                "ins",
                "int",
                "inz",
                "ior",
                "iou",
                "iow",
                "ipi",
                "ipo",
                "iqu",
                "iqw",
                "ira",
                "ire",
                "irh",
                "iri",
                "irk",
                "irn",
                "iro",
                "irr",
                "iru",
                "irx",
                "iry",
                "isa",
                "isc",
                "isd",
                "ise",
                "isg",
                "ish",
                "isi",
                "isk",
                "ism",
                "isn",
                "iso",
                "isr",
                "ist",
                "isu",
                "itb",
                "itc",
                "itd",
                "ite",
                "iti",
                "itk",
                "itl",
                "itm",
                "ito",
                "itr",
                "its",
                "itt",
                "itv",
                "itw",
                "itx",
                "ity",
                "itz",
                "ium",
                "ivb",
                "ivv",
                "iwk",
                "iwm",
                "iwo",
                "iws",
                "ixc",
                "ixl",
                "iya",
                "iyo",
                "iyx",
                "izh",
                "izi",
                "izr",
                "izz",
                "jaa",
                "jab",
                "jac",
                "jad",
                "jae",
                "jaf",
                "jah",
                "jaj",
                "jak",
                "jal",
                "jam",
                "jan",
                "jao",
                "jaq",
                "jar",
                "jas",
                "jat",
                "jau",
                "jax",
                "jay",
                "jaz",
                "jbe",
                "jbi",
                "jbj",
                "jbk",
                "jbn",
                "jbo",
                "jbr",
                "jbt",
                "jbu",
                "jbw",
                "jcs",
                "jct",
                "jda",
                "jdg",
                "jdt",
                "jeb",
                "jee",
                "jeg",
                "jeh",
                "jei",
                "jek",
                "jel",
                "jen",
                "jer",
                "jet",
                "jeu",
                "jgb",
                "jge",
                "jgk",
                "jgo",
                "jhi",
                "jhs",
                "jia",
                "jib",
                "jic",
                "jid",
                "jie",
                "jig",
                "jih",
                "jii",
                "jil",
                "jim",
                "jio",
                "jiq",
                "jit",
                "jiu",
                "jiv",
                "jiy",
                "jje",
                "jjr",
                "jka",
                "jkm",
                "jko",
                "jkp",
                "jkr",
                "jku",
                "jle",
                "jls",
                "jma",
                "jmb",
                "jmc",
                "jmd",
                "jmi",
                "jml",
                "jmn",
                "jmr",
                "jms",
                "jmw",
                "jmx",
                "jna",
                "jnd",
                "jng",
                "jni",
                "jnj",
                "jnl",
                "jns",
                "job",
                "jod",
                "jog",
                "jor",
                "jos",
                "jow",
                "jpa",
                "jpr",
                "jpx",
                "jqr",
                "jra",
                "jrb",
                "jrr",
                "jrt",
                "jru",
                "jsl",
                "jua",
                "jub",
                "juc",
                "jud",
                "juh",
                "jui",
                "juk",
                "jul",
                "jum",
                "jun",
                "juo",
                "jup",
                "jur",
                "jus",
                "jut",
                "juu",
                "juw",
                "juy",
                "jvd",
                "jvn",
                "jwi",
                "jya",
                "jye",
                "jyy",
                "kaa",
                "kab",
                "kac",
                "kad",
                "kae",
                "kaf",
                "kag",
                "kah",
                "kai",
                "kaj",
                "kak",
                "kam",
                "kao",
                "kap",
                "kaq",
                "kar",
                "kav",
                "kaw",
                "kax",
                "kay",
                "kba",
                "kbb",
                "kbc",
                "kbd",
                "kbe",
                "kbf",
                "kbg",
                "kbh",
                "kbi",
                "kbj",
                "kbk",
                "kbl",
                "kbm",
                "kbn",
                "kbo",
                "kbp",
                "kbq",
                "kbr",
                "kbs",
                "kbt",
                "kbu",
                "kbv",
                "kbw",
                "kbx",
                "kby",
                "kbz",
                "kca",
                "kcb",
                "kcc",
                "kcd",
                "kce",
                "kcf",
                "kcg",
                "kch",
                "kci",
                "kcj",
                "kck",
                "kcl",
                "kcm",
                "kcn",
                "kco",
                "kcp",
                "kcq",
                "kcr",
                "kcs",
                "kct",
                "kcu",
                "kcv",
                "kcw",
                "kcx",
                "kcy",
                "kcz",
                "kda",
                "kdc",
                "kdd",
                "kde",
                "kdf",
                "kdg",
                "kdh",
                "kdi",
                "kdj",
                "kdk",
                "kdl",
                "kdm",
                "kdn",
                "kdo",
                "kdp",
                "kdq",
                "kdr",
                "kdt",
                "kdu",
                "kdv",
                "kdw",
                "kdx",
                "kdy",
                "kdz",
                "kea",
                "keb",
                "kec",
                "ked",
                "kee",
                "kef",
                "keg",
                "keh",
                "kei",
                "kej",
                "kek",
                "kel",
                "kem",
                "ken",
                "keo",
                "kep",
                "keq",
                "ker",
                "kes",
                "ket",
                "keu",
                "kev",
                "kew",
                "kex",
                "key",
                "kez",
                "kfa",
                "kfb",
                "kfc",
                "kfd",
                "kfe",
                "kff",
                "kfg",
                "kfh",
                "kfi",
                "kfj",
                "kfk",
                "kfl",
                "kfm",
                "kfn",
                "kfo",
                "kfp",
                "kfq",
                "kfr",
                "kfs",
                "kft",
                "kfu",
                "kfv",
                "kfw",
                "kfx",
                "kfy",
                "kfz",
                "kga",
                "kgb",
                "kgc",
                "kgd",
                "kge",
                "kgf",
                "kgg",
                "kgh",
                "kgi",
                "kgj",
                "kgk",
                "kgl",
                "kgm",
                "kgn",
                "kgo",
                "kgp",
                "kgq",
                "kgr",
                "kgs",
                "kgt",
                "kgu",
                "kgv",
                "kgw",
                "kgx",
                "kgy",
                "kha",
                "khb",
                "khc",
                "khd",
                "khe",
                "khf",
                "khg",
                "khh",
                "khi",
                "khj",
                "khk",
                "khl",
                "khn",
                "kho",
                "khp",
                "khq",
                "khr",
                "khs",
                "kht",
                "khu",
                "khv",
                "khw",
                "khx",
                "khy",
                "khz",
                "kia",
                "kib",
                "kic",
                "kid",
                "kie",
                "kif",
                "kig",
                "kih",
                "kii",
                "kij",
                "kil",
                "kim",
                "kio",
                "kip",
                "kiq",
                "kis",
                "kit",
                "kiu",
                "kiv",
                "kiw",
                "kix",
                "kiy",
                "kiz",
                "kja",
                "kjb",
                "kjc",
                "kjd",
                "kje",
                "kjf",
                "kjg",
                "kjh",
                "kji",
                "kjj",
                "kjk",
                "kjl",
                "kjm",
                "kjn",
                "kjo",
                "kjp",
                "kjq",
                "kjr",
                "kjs",
                "kjt",
                "kju",
                "kjv",
                "kjx",
                "kjy",
                "kjz",
                "kka",
                "kkb",
                "kkc",
                "kkd",
                "kke",
                "kkf",
                "kkg",
                "kkh",
                "kki",
                "kkj",
                "kkk",
                "kkl",
                "kkm",
                "kkn",
                "kko",
                "kkp",
                "kkq",
                "kkr",
                "kks",
                "kkt",
                "kku",
                "kkv",
                "kkw",
                "kkx",
                "kky",
                "kkz",
                "kla",
                "klb",
                "klc",
                "kld",
                "kle",
                "klf",
                "klg",
                "klh",
                "kli",
                "klj",
                "klk",
                "kll",
                "klm",
                "kln",
                "klo",
                "klp",
                "klq",
                "klr",
                "kls",
                "klt",
                "klu",
                "klv",
                "klw",
                "klx",
                "kly",
                "klz",
                "kma",
                "kmb",
                "kmc",
                "kmd",
                "kme",
                "kmf",
                "kmg",
                "kmh",
                "kmi",
                "kmj",
                "kmk",
                "kml",
                "kmm",
                "kmn",
                "kmo",
                "kmp",
                "kmq",
                "kmr",
                "kms",
                "kmt",
                "kmu",
                "kmv",
                "kmw",
                "kmx",
                "kmy",
                "kmz",
                "kna",
                "knb",
                "knc",
                "knd",
                "kne",
                "knf",
                "kng",
                "kni",
                "knj",
                "knk",
                "knl",
                "knm",
                "knn",
                "kno",
                "knp",
                "knq",
                "knr",
                "kns",
                "knt",
                "knu",
                "knv",
                "knw",
                "knx",
                "kny",
                "knz",
                "koa",
                "koc",
                "kod",
                "koe",
                "kof",
                "kog",
                "koh",
                "koi",
                "koj",
                "kok",
                "kol",
                "koo",
                "kop",
                "koq",
                "kos",
                "kot",
                "kou",
                "kov",
                "kow",
                "kox",
                "koy",
                "koz",
                "kpa",
                "kpb",
                "kpc",
                "kpd",
                "kpe",
                "kpf",
                "kpg",
                "kph",
                "kpi",
                "kpj",
                "kpk",
                "kpl",
                "kpm",
                "kpn",
                "kpo",
                "kpp",
                "kpq",
                "kpr",
                "kps",
                "kpt",
                "kpu",
                "kpv",
                "kpw",
                "kpx",
                "kpy",
                "kpz",
                "kqa",
                "kqb",
                "kqc",
                "kqd",
                "kqe",
                "kqf",
                "kqg",
                "kqh",
                "kqi",
                "kqj",
                "kqk",
                "kql",
                "kqm",
                "kqn",
                "kqo",
                "kqp",
                "kqq",
                "kqr",
                "kqs",
                "kqt",
                "kqu",
                "kqv",
                "kqw",
                "kqx",
                "kqy",
                "kqz",
                "kra",
                "krb",
                "krc",
                "krd",
                "kre",
                "krf",
                "krh",
                "kri",
                "krj",
                "krk",
                "krl",
                "krm",
                "krn",
                "kro",
                "krp",
                "krr",
                "krs",
                "krt",
                "kru",
                "krv",
                "krw",
                "krx",
                "kry",
                "krz",
                "ksa",
                "ksb",
                "ksc",
                "ksd",
                "kse",
                "ksf",
                "ksg",
                "ksh",
                "ksi",
                "ksj",
                "ksk",
                "ksl",
                "ksm",
                "ksn",
                "kso",
                "ksp",
                "ksq",
                "ksr",
                "kss",
                "kst",
                "ksu",
                "ksv",
                "ksw",
                "ksx",
                "ksy",
                "ksz",
                "kta",
                "ktb",
                "ktc",
                "ktd",
                "kte",
                "ktf",
                "ktg",
                "kth",
                "kti",
                "ktj",
                "ktk",
                "ktl",
                "ktm",
                "ktn",
                "kto",
                "ktp",
                "ktq",
                "ktr",
                "kts",
                "ktt",
                "ktu",
                "ktv",
                "ktw",
                "ktx",
                "kty",
                "ktz",
                "kub",
                "kuc",
                "kud",
                "kue",
                "kuf",
                "kug",
                "kuh",
                "kui",
                "kuj",
                "kuk",
                "kul",
                "kum",
                "kun",
                "kuo",
                "kup",
                "kuq",
                "kus",
                "kut",
                "kuu",
                "kuv",
                "kuw",
                "kux",
                "kuy",
                "kuz",
                "kva",
                "kvb",
                "kvc",
                "kvd",
                "kve",
                "kvf",
                "kvg",
                "kvh",
                "kvi",
                "kvj",
                "kvk",
                "kvl",
                "kvm",
                "kvn",
                "kvo",
                "kvp",
                "kvq",
                "kvr",
                "kvs",
                "kvt",
                "kvu",
                "kvv",
                "kvw",
                "kvx",
                "kvy",
                "kvz",
                "kwa",
                "kwb",
                "kwc",
                "kwd",
                "kwe",
                "kwf",
                "kwg",
                "kwh",
                "kwi",
                "kwj",
                "kwk",
                "kwl",
                "kwm",
                "kwn",
                "kwo",
                "kwp",
                "kwq",
                "kwr",
                "kws",
                "kwt",
                "kwu",
                "kwv",
                "kww",
                "kwx",
                "kwy",
                "kwz",
                "kxa",
                "kxb",
                "kxc",
                "kxd",
                "kxe",
                "kxf",
                "kxh",
                "kxi",
                "kxj",
                "kxk",
                "kxl",
                "kxm",
                "kxn",
                "kxo",
                "kxp",
                "kxq",
                "kxr",
                "kxs",
                "kxt",
                "kxu",
                "kxv",
                "kxw",
                "kxx",
                "kxy",
                "kxz",
                "kya",
                "kyb",
                "kyc",
                "kyd",
                "kye",
                "kyf",
                "kyg",
                "kyh",
                "kyi",
                "kyj",
                "kyk",
                "kyl",
                "kym",
                "kyn",
                "kyo",
                "kyp",
                "kyq",
                "kyr",
                "kys",
                "kyt",
                "kyu",
                "kyv",
                "kyw",
                "kyx",
                "kyy",
                "kyz",
                "kza",
                "kzb",
                "kzc",
                "kzd",
                "kze",
                "kzf",
                "kzg",
                "kzh",
                "kzi",
                "kzj",
                "kzk",
                "kzl",
                "kzm",
                "kzn",
                "kzo",
                "kzp",
                "kzq",
                "kzr",
                "kzs",
                "kzt",
                "kzu",
                "kzv",
                "kzw",
                "kzx",
                "kzy",
                "kzz",
                "laa",
                "lab",
                "lac",
                "lad",
                "lae",
                "laf",
                "lag",
                "lah",
                "lai",
                "laj",
                "lak",
                "lal",
                "lam",
                "lan",
                "lap",
                "laq",
                "lar",
                "las",
                "lau",
                "law",
                "lax",
                "lay",
                "laz",
                "lba",
                "lbb",
                "lbc",
                "lbe",
                "lbf",
                "lbg",
                "lbi",
                "lbj",
                "lbk",
                "lbl",
                "lbm",
                "lbn",
                "lbo",
                "lbq",
                "lbr",
                "lbs",
                "lbt",
                "lbu",
                "lbv",
                "lbw",
                "lbx",
                "lby",
                "lbz",
                "lcc",
                "lcd",
                "lce",
                "lcf",
                "lch",
                "lcl",
                "lcm",
                "lcp",
                "lcq",
                "lcs",
                "lda",
                "ldb",
                "ldd",
                "ldg",
                "ldh",
                "ldi",
                "ldj",
                "ldk",
                "ldl",
                "ldm",
                "ldn",
                "ldo",
                "ldp",
                "ldq",
                "lea",
                "leb",
                "lec",
                "led",
                "lee",
                "lef",
                "leg",
                "leh",
                "lei",
                "lej",
                "lek",
                "lel",
                "lem",
                "len",
                "leo",
                "lep",
                "leq",
                "ler",
                "les",
                "let",
                "leu",
                "lev",
                "lew",
                "lex",
                "ley",
                "lez",
                "lfa",
                "lfn",
                "lga",
                "lgb",
                "lgg",
                "lgh",
                "lgi",
                "lgk",
                "lgl",
                "lgm",
                "lgn",
                "lgq",
                "lgr",
                "lgt",
                "lgu",
                "lgz",
                "lha",
                "lhh",
                "lhi",
                "lhl",
                "lhm",
                "lhn",
                "lhp",
                "lhs",
                "lht",
                "lhu",
                "lia",
                "lib",
                "lic",
                "lid",
                "lie",
                "lif",
                "lig",
                "lih",
                "lii",
                "lij",
                "lik",
                "lil",
                "lio",
                "lip",
                "liq",
                "lir",
                "lis",
                "liu",
                "liv",
                "liw",
                "lix",
                "liy",
                "liz",
                "lja",
                "lje",
                "lji",
                "ljl",
                "ljp",
                "ljw",
                "ljx",
                "lka",
                "lkb",
                "lkc",
                "lkd",
                "lke",
                "lkh",
                "lki",
                "lkj",
                "lkl",
                "lkm",
                "lkn",
                "lko",
                "lkr",
                "lks",
                "lkt",
                "lku",
                "lky",
                "lla",
                "llb",
                "llc",
                "lld",
                "lle",
                "llf",
                "llg",
                "llh",
                "lli",
                "llj",
                "llk",
                "lll",
                "llm",
                "lln",
                "llo",
                "llp",
                "llq",
                "lls",
                "llu",
                "llx",
                "lma",
                "lmb",
                "lmc",
                "lmd",
                "lme",
                "lmf",
                "lmg",
                "lmh",
                "lmi",
                "lmj",
                "lmk",
                "lml",
                "lmm",
                "lmn",
                "lmo",
                "lmp",
                "lmq",
                "lmr",
                "lmu",
                "lmv",
                "lmw",
                "lmx",
                "lmy",
                "lmz",
                "lna",
                "lnb",
                "lnd",
                "lng",
                "lnh",
                "lni",
                "lnj",
                "lnl",
                "lnm",
                "lnn",
                "lno",
                "lns",
                "lnu",
                "lnw",
                "lnz",
                "loa",
                "lob",
                "loc",
                "loe",
                "lof",
                "log",
                "loh",
                "loi",
                "loj",
                "lok",
                "lol",
                "lom",
                "lon",
                "loo",
                "lop",
                "loq",
                "lor",
                "los",
                "lot",
                "lou",
                "lov",
                "low",
                "lox",
                "loy",
                "loz",
                "lpa",
                "lpe",
                "lpn",
                "lpo",
                "lpx",
                "lra",
                "lrc",
                "lre",
                "lrg",
                "lri",
                "lrk",
                "lrl",
                "lrm",
                "lrn",
                "lro",
                "lrr",
                "lrt",
                "lrv",
                "lrz",
                "lsa",
                "lsd",
                "lse",
                "lsg",
                "lsh",
                "lsi",
                "lsl",
                "lsm",
                "lsn",
                "lso",
                "lsp",
                "lsr",
                "lss",
                "lst",
                "lsv",
                "lsy",
                "ltc",
                "ltg",
                "lth",
                "lti",
                "ltn",
                "lto",
                "lts",
                "ltu",
                "lua",
                "luc",
                "lud",
                "lue",
                "luf",
                "lui",
                "luj",
                "luk",
                "lul",
                "lum",
                "lun",
                "luo",
                "lup",
                "luq",
                "lur",
                "lus",
                "lut",
                "luu",
                "luv",
                "luw",
                "luy",
                "luz",
                "lva",
                "lvi",
                "lvk",
                "lvs",
                "lvu",
                "lwa",
                "lwe",
                "lwg",
                "lwh",
                "lwl",
                "lwm",
                "lwo",
                "lws",
                "lwt",
                "lwu",
                "lww",
                "lya",
                "lyg",
                "lyn",
                "lzh",
                "lzl",
                "lzn",
                "lzz",
                "maa",
                "mab",
                "mad",
                "mae",
                "maf",
                "mag",
                "mai",
                "maj",
                "mak",
                "mam",
                "man",
                "map",
                "maq",
                "mas",
                "mat",
                "mau",
                "mav",
                "maw",
                "max",
                "maz",
                "mba",
                "mbb",
                "mbc",
                "mbd",
                "mbe",
                "mbf",
                "mbh",
                "mbi",
                "mbj",
                "mbk",
                "mbl",
                "mbm",
                "mbn",
                "mbo",
                "mbp",
                "mbq",
                "mbr",
                "mbs",
                "mbt",
                "mbu",
                "mbv",
                "mbw",
                "mbx",
                "mby",
                "mbz",
                "mca",
                "mcb",
                "mcc",
                "mcd",
                "mce",
                "mcf",
                "mcg",
                "mch",
                "mci",
                "mcj",
                "mck",
                "mcl",
                "mcm",
                "mcn",
                "mco",
                "mcp",
                "mcq",
                "mcr",
                "mcs",
                "mct",
                "mcu",
                "mcv",
                "mcw",
                "mcx",
                "mcy",
                "mcz",
                "mda",
                "mdb",
                "mdc",
                "mdd",
                "mde",
                "mdf",
                "mdg",
                "mdh",
                "mdi",
                "mdj",
                "mdk",
                "mdl",
                "mdm",
                "mdn",
                "mdp",
                "mdq",
                "mdr",
                "mds",
                "mdt",
                "mdu",
                "mdv",
                "mdw",
                "mdx",
                "mdy",
                "mdz",
                "mea",
                "meb",
                "mec",
                "med",
                "mee",
                "mef",
                "meg",
                "meh",
                "mei",
                "mej",
                "mek",
                "mel",
                "mem",
                "men",
                "meo",
                "mep",
                "meq",
                "mer",
                "mes",
                "met",
                "meu",
                "mev",
                "mew",
                "mey",
                "mez",
                "mfa",
                "mfb",
                "mfc",
                "mfd",
                "mfe",
                "mff",
                "mfg",
                "mfh",
                "mfi",
                "mfj",
                "mfk",
                "mfl",
                "mfm",
                "mfn",
                "mfo",
                "mfp",
                "mfq",
                "mfr",
                "mfs",
                "mft",
                "mfu",
                "mfv",
                "mfw",
                "mfx",
                "mfy",
                "mfz",
                "mga",
                "mgb",
                "mgc",
                "mgd",
                "mge",
                "mgf",
                "mgg",
                "mgh",
                "mgi",
                "mgj",
                "mgk",
                "mgl",
                "mgm",
                "mgn",
                "mgo",
                "mgp",
                "mgq",
                "mgr",
                "mgs",
                "mgt",
                "mgu",
                "mgv",
                "mgw",
                "mgx",
                "mgy",
                "mgz",
                "mha",
                "mhb",
                "mhc",
                "mhd",
                "mhe",
                "mhf",
                "mhg",
                "mhh",
                "mhi",
                "mhj",
                "mhk",
                "mhl",
                "mhm",
                "mhn",
                "mho",
                "mhp",
                "mhq",
                "mhr",
                "mhs",
                "mht",
                "mhu",
                "mhw",
                "mhx",
                "mhy",
                "mhz",
                "mia",
                "mib",
                "mic",
                "mid",
                "mie",
                "mif",
                "mig",
                "mih",
                "mii",
                "mij",
                "mik",
                "mil",
                "mim",
                "min",
                "mio",
                "mip",
                "miq",
                "mir",
                "mis",
                "mit",
                "miu",
                "miw",
                "mix",
                "miy",
                "miz",
                "mja",
                "mjb",
                "mjc",
                "mjd",
                "mje",
                "mjg",
                "mjh",
                "mji",
                "mjj",
                "mjk",
                "mjl",
                "mjm",
                "mjn",
                "mjo",
                "mjp",
                "mjq",
                "mjr",
                "mjs",
                "mjt",
                "mju",
                "mjv",
                "mjw",
                "mjx",
                "mjy",
                "mjz",
                "mka",
                "mkb",
                "mkc",
                "mke",
                "mkf",
                "mkg",
                "mkh",
                "mki",
                "mkj",
                "mkk",
                "mkl",
                "mkm",
                "mkn",
                "mko",
                "mkp",
                "mkq",
                "mkr",
                "mks",
                "mkt",
                "mku",
                "mkv",
                "mkw",
                "mkx",
                "mky",
                "mkz",
                "mla",
                "mlb",
                "mlc",
                "mld",
                "mle",
                "mlf",
                "mlh",
                "mli",
                "mlj",
                "mlk",
                "mll",
                "mlm",
                "mln",
                "mlo",
                "mlp",
                "mlq",
                "mlr",
                "mls",
                "mlu",
                "mlv",
                "mlw",
                "mlx",
                "mlz",
                "mma",
                "mmb",
                "mmc",
                "mmd",
                "mme",
                "mmf",
                "mmg",
                "mmh",
                "mmi",
                "mmj",
                "mmk",
                "mml",
                "mmm",
                "mmn",
                "mmo",
                "mmp",
                "mmq",
                "mmr",
                "mmt",
                "mmu",
                "mmv",
                "mmw",
                "mmx",
                "mmy",
                "mmz",
                "mna",
                "mnb",
                "mnc",
                "mnd",
                "mne",
                "mnf",
                "mng",
                "mnh",
                "mni",
                "mnj",
                "mnk",
                "mnl",
                "mnm",
                "mnn",
                "mno",
                "mnp",
                "mnq",
                "mnr",
                "mns",
                "mnt",
                "mnu",
                "mnv",
                "mnw",
                "mnx",
                "mny",
                "mnz",
                "moa",
                "moc",
                "mod",
                "moe",
                "mof",
                "mog",
                "moh",
                "moi",
                "moj",
                "mok",
                "mom",
                "moo",
                "mop",
                "moq",
                "mor",
                "mos",
                "mot",
                "mou",
                "mov",
                "mow",
                "mox",
                "moy",
                "moz",
                "mpa",
                "mpb",
                "mpc",
                "mpd",
                "mpe",
                "mpg",
                "mph",
                "mpi",
                "mpj",
                "mpk",
                "mpl",
                "mpm",
                "mpn",
                "mpo",
                "mpp",
                "mpq",
                "mpr",
                "mps",
                "mpt",
                "mpu",
                "mpv",
                "mpw",
                "mpx",
                "mpy",
                "mpz",
                "mqa",
                "mqb",
                "mqc",
                "mqe",
                "mqf",
                "mqg",
                "mqh",
                "mqi",
                "mqj",
                "mqk",
                "mql",
                "mqm",
                "mqn",
                "mqo",
                "mqp",
                "mqq",
                "mqr",
                "mqs",
                "mqt",
                "mqu",
                "mqv",
                "mqw",
                "mqx",
                "mqy",
                "mqz",
                "mra",
                "mrb",
                "mrc",
                "mrd",
                "mre",
                "mrf",
                "mrg",
                "mrh",
                "mrj",
                "mrk",
                "mrl",
                "mrm",
                "mrn",
                "mro",
                "mrp",
                "mrq",
                "mrr",
                "mrs",
                "mrt",
                "mru",
                "mrv",
                "mrw",
                "mrx",
                "mry",
                "mrz",
                "msb",
                "msc",
                "msd",
                "mse",
                "msf",
                "msg",
                "msh",
                "msi",
                "msj",
                "msk",
                "msl",
                "msm",
                "msn",
                "mso",
                "msp",
                "msq",
                "msr",
                "mss",
                "mst",
                "msu",
                "msv",
                "msw",
                "msx",
                "msy",
                "msz",
                "mta",
                "mtb",
                "mtc",
                "mtd",
                "mte",
                "mtf",
                "mtg",
                "mth",
                "mti",
                "mtj",
                "mtk",
                "mtl",
                "mtm",
                "mtn",
                "mto",
                "mtp",
                "mtq",
                "mtr",
                "mts",
                "mtt",
                "mtu",
                "mtv",
                "mtw",
                "mtx",
                "mty",
                "mua",
                "mub",
                "muc",
                "mud",
                "mue",
                "mug",
                "muh",
                "mui",
                "muj",
                "muk",
                "mul",
                "mum",
                "mun",
                "muo",
                "mup",
                "muq",
                "mur",
                "mus",
                "mut",
                "muu",
                "muv",
                "mux",
                "muy",
                "muz",
                "mva",
                "mvb",
                "mvd",
                "mve",
                "mvf",
                "mvg",
                "mvh",
                "mvi",
                "mvk",
                "mvl",
                "mvm",
                "mvn",
                "mvo",
                "mvp",
                "mvq",
                "mvr",
                "mvs",
                "mvt",
                "mvu",
                "mvv",
                "mvw",
                "mvx",
                "mvy",
                "mvz",
                "mwa",
                "mwb",
                "mwc",
                "mwd",
                "mwe",
                "mwf",
                "mwg",
                "mwh",
                "mwi",
                "mwj",
                "mwk",
                "mwl",
                "mwm",
                "mwn",
                "mwo",
                "mwp",
                "mwq",
                "mwr",
                "mws",
                "mwt",
                "mwu",
                "mwv",
                "mww",
                "mwx",
                "mwy",
                "mwz",
                "mxa",
                "mxb",
                "mxc",
                "mxd",
                "mxe",
                "mxf",
                "mxg",
                "mxh",
                "mxi",
                "mxj",
                "mxk",
                "mxl",
                "mxm",
                "mxn",
                "mxo",
                "mxp",
                "mxq",
                "mxr",
                "mxs",
                "mxt",
                "mxu",
                "mxv",
                "mxw",
                "mxx",
                "mxy",
                "mxz",
                "myb",
                "myc",
                "myd",
                "mye",
                "myf",
                "myg",
                "myh",
                "myi",
                "myj",
                "myk",
                "myl",
                "mym",
                "myn",
                "myo",
                "myp",
                "myq",
                "myr",
                "mys",
                "myt",
                "myu",
                "myv",
                "myw",
                "myx",
                "myy",
                "myz",
                "mza",
                "mzb",
                "mzc",
                "mzd",
                "mze",
                "mzg",
                "mzh",
                "mzi",
                "mzj",
                "mzk",
                "mzl",
                "mzm",
                "mzn",
                "mzo",
                "mzp",
                "mzq",
                "mzr",
                "mzs",
                "mzt",
                "mzu",
                "mzv",
                "mzw",
                "mzx",
                "mzy",
                "mzz",
                "naa",
                "nab",
                "nac",
                "nad",
                "nae",
                "naf",
                "nag",
                "nah",
                "nai",
                "naj",
                "nak",
                "nal",
                "nam",
                "nan",
                "nao",
                "nap",
                "naq",
                "nar",
                "nas",
                "nat",
                "naw",
                "nax",
                "nay",
                "naz",
                "nba",
                "nbb",
                "nbc",
                "nbd",
                "nbe",
                "nbf",
                "nbg",
                "nbh",
                "nbi",
                "nbj",
                "nbk",
                "nbm",
                "nbn",
                "nbo",
                "nbp",
                "nbq",
                "nbr",
                "nbs",
                "nbt",
                "nbu",
                "nbv",
                "nbw",
                "nbx",
                "nby",
                "nca",
                "ncb",
                "ncc",
                "ncd",
                "nce",
                "ncf",
                "ncg",
                "nch",
                "nci",
                "ncj",
                "nck",
                "ncl",
                "ncm",
                "ncn",
                "nco",
                "ncp",
                "ncq",
                "ncr",
                "ncs",
                "nct",
                "ncu",
                "ncx",
                "ncz",
                "nda",
                "ndb",
                "ndc",
                "ndd",
                "ndf",
                "ndg",
                "ndh",
                "ndi",
                "ndj",
                "ndk",
                "ndl",
                "ndm",
                "ndn",
                "ndp",
                "ndq",
                "ndr",
                "nds",
                "ndt",
                "ndu",
                "ndv",
                "ndw",
                "ndx",
                "ndy",
                "ndz",
                "nea",
                "neb",
                "nec",
                "ned",
                "nee",
                "nef",
                "neg",
                "neh",
                "nei",
                "nej",
                "nek",
                "nem",
                "nen",
                "neo",
                "neq",
                "ner",
                "nes",
                "net",
                "neu",
                "nev",
                "new",
                "nex",
                "ney",
                "nez",
                "nfa",
                "nfd",
                "nfl",
                "nfr",
                "nfu",
                "nga",
                "ngb",
                "ngc",
                "ngd",
                "nge",
                "ngf",
                "ngg",
                "ngh",
                "ngi",
                "ngj",
                "ngk",
                "ngl",
                "ngm",
                "ngn",
                "ngo",
                "ngp",
                "ngq",
                "ngr",
                "ngs",
                "ngt",
                "ngu",
                "ngv",
                "ngw",
                "ngx",
                "ngy",
                "ngz",
                "nha",
                "nhb",
                "nhc",
                "nhd",
                "nhe",
                "nhf",
                "nhg",
                "nhh",
                "nhi",
                "nhk",
                "nhm",
                "nhn",
                "nho",
                "nhp",
                "nhq",
                "nhr",
                "nht",
                "nhu",
                "nhv",
                "nhw",
                "nhx",
                "nhy",
                "nhz",
                "nia",
                "nib",
                "nic",
                "nid",
                "nie",
                "nif",
                "nig",
                "nih",
                "nii",
                "nij",
                "nik",
                "nil",
                "nim",
                "nin",
                "nio",
                "niq",
                "nir",
                "nis",
                "nit",
                "niu",
                "niv",
                "niw",
                "nix",
                "niy",
                "niz",
                "nja",
                "njb",
                "njd",
                "njh",
                "nji",
                "njj",
                "njl",
                "njm",
                "njn",
                "njo",
                "njr",
                "njs",
                "njt",
                "nju",
                "njx",
                "njy",
                "njz",
                "nka",
                "nkb",
                "nkc",
                "nkd",
                "nke",
                "nkf",
                "nkg",
                "nkh",
                "nki",
                "nkj",
                "nkk",
                "nkm",
                "nkn",
                "nko",
                "nkp",
                "nkq",
                "nkr",
                "nks",
                "nkt",
                "nku",
                "nkv",
                "nkw",
                "nkx",
                "nkz",
                "nla",
                "nlc",
                "nle",
                "nlg",
                "nli",
                "nlj",
                "nlk",
                "nll",
                "nlm",
                "nln",
                "nlo",
                "nlq",
                "nlr",
                "nlu",
                "nlv",
                "nlw",
                "nlx",
                "nly",
                "nlz",
                "nma",
                "nmb",
                "nmc",
                "nmd",
                "nme",
                "nmf",
                "nmg",
                "nmh",
                "nmi",
                "nmj",
                "nmk",
                "nml",
                "nmm",
                "nmn",
                "nmo",
                "nmp",
                "nmq",
                "nmr",
                "nms",
                "nmt",
                "nmu",
                "nmv",
                "nmw",
                "nmx",
                "nmy",
                "nmz",
                "nna",
                "nnb",
                "nnc",
                "nnd",
                "nne",
                "nnf",
                "nng",
                "nnh",
                "nni",
                "nnj",
                "nnk",
                "nnl",
                "nnm",
                "nnn",
                "nnp",
                "nnq",
                "nnr",
                "nns",
                "nnt",
                "nnu",
                "nnv",
                "nnw",
                "nnx",
                "nny",
                "nnz",
                "noa",
                "noc",
                "nod",
                "noe",
                "nof",
                "nog",
                "noh",
                "noi",
                "noj",
                "nok",
                "nol",
                "nom",
                "non",
                "noo",
                "nop",
                "noq",
                "nos",
                "not",
                "nou",
                "nov",
                "now",
                "noy",
                "noz",
                "npa",
                "npb",
                "npg",
                "nph",
                "npi",
                "npl",
                "npn",
                "npo",
                "nps",
                "npu",
                "npx",
                "npy",
                "nqg",
                "nqk",
                "nql",
                "nqm",
                "nqn",
                "nqo",
                "nqq",
                "nqy",
                "nra",
                "nrb",
                "nrc",
                "nre",
                "nrf",
                "nrg",
                "nri",
                "nrk",
                "nrl",
                "nrm",
                "nrn",
                "nrp",
                "nrr",
                "nrt",
                "nru",
                "nrx",
                "nrz",
                "nsa",
                "nsb",
                "nsc",
                "nsd",
                "nse",
                "nsf",
                "nsg",
                "nsh",
                "nsi",
                "nsk",
                "nsl",
                "nsm",
                "nsn",
                "nso",
                "nsp",
                "nsq",
                "nsr",
                "nss",
                "nst",
                "nsu",
                "nsv",
                "nsw",
                "nsx",
                "nsy",
                "nsz",
                "ntd",
                "nte",
                "ntg",
                "nti",
                "ntj",
                "ntk",
                "ntm",
                "nto",
                "ntp",
                "ntr",
                "nts",
                "ntu",
                "ntw",
                "ntx",
                "nty",
                "ntz",
                "nua",
                "nub",
                "nuc",
                "nud",
                "nue",
                "nuf",
                "nug",
                "nuh",
                "nui",
                "nuj",
                "nuk",
                "nul",
                "num",
                "nun",
                "nuo",
                "nup",
                "nuq",
                "nur",
                "nus",
                "nut",
                "nuu",
                "nuv",
                "nuw",
                "nux",
                "nuy",
                "nuz",
                "nvh",
                "nvm",
                "nvo",
                "nwa",
                "nwb",
                "nwc",
                "nwe",
                "nwg",
                "nwi",
                "nwm",
                "nwo",
                "nwr",
                "nwx",
                "nwy",
                "nxa",
                "nxd",
                "nxe",
                "nxg",
                "nxi",
                "nxk",
                "nxl",
                "nxm",
                "nxn",
                "nxo",
                "nxq",
                "nxr",
                "nxu",
                "nxx",
                "nyb",
                "nyc",
                "nyd",
                "nye",
                "nyf",
                "nyg",
                "nyh",
                "nyi",
                "nyj",
                "nyk",
                "nyl",
                "nym",
                "nyn",
                "nyo",
                "nyp",
                "nyq",
                "nyr",
                "nys",
                "nyt",
                "nyu",
                "nyv",
                "nyw",
                "nyx",
                "nyy",
                "nza",
                "nzb",
                "nzd",
                "nzi",
                "nzk",
                "nzm",
                "nzs",
                "nzu",
                "nzy",
                "nzz",
                "oaa",
                "oac",
                "oar",
                "oav",
                "obi",
                "obk",
                "obl",
                "obm",
                "obo",
                "obr",
                "obt",
                "obu",
                "oca",
                "och",
                "oco",
                "ocu",
                "oda",
                "odk",
                "odt",
                "odu",
                "ofo",
                "ofs",
                "ofu",
                "ogb",
                "ogc",
                "oge",
                "ogg",
                "ogo",
                "ogu",
                "oht",
                "ohu",
                "oia",
                "oin",
                "ojb",
                "ojc",
                "ojg",
                "ojp",
                "ojs",
                "ojv",
                "ojw",
                "oka",
                "okb",
                "okd",
                "oke",
                "okg",
                "okh",
                "oki",
                "okj",
                "okk",
                "okl",
                "okm",
                "okn",
                "oko",
                "okr",
                "oks",
                "oku",
                "okv",
                "okx",
                "ola",
                "old",
                "ole",
                "olk",
                "olm",
                "olo",
                "olr",
                "olt",
                "olu",
                "oma",
                "omb",
                "omc",
                "ome",
                "omg",
                "omi",
                "omk",
                "oml",
                "omn",
                "omo",
                "omp",
                "omq",
                "omr",
                "omt",
                "omu",
                "omv",
                "omw",
                "omx",
                "ona",
                "onb",
                "one",
                "ong",
                "oni",
                "onj",
                "onk",
                "onn",
                "ono",
                "onp",
                "onr",
                "ons",
                "ont",
                "onu",
                "onw",
                "onx",
                "ood",
                "oog",
                "oon",
                "oor",
                "oos",
                "opa",
                "opk",
                "opm",
                "opo",
                "opt",
                "opy",
                "ora",
                "orc",
                "ore",
                "org",
                "orh",
                "orn",
                "oro",
                "orr",
                "ors",
                "ort",
                "oru",
                "orv",
                "orw",
                "orx",
                "ory",
                "orz",
                "osa",
                "osc",
                "osi",
                "oso",
                "osp",
                "ost",
                "osu",
                "osx",
                "ota",
                "otb",
                "otd",
                "ote",
                "oti",
                "otk",
                "otl",
                "otm",
                "otn",
                "oto",
                "otq",
                "otr",
                "ots",
                "ott",
                "otu",
                "otw",
                "otx",
                "oty",
                "otz",
                "oua",
                "oub",
                "oue",
                "oui",
                "oum",
                "oun",
                "ovd",
                "owi",
                "owl",
                "oyb",
                "oyd",
                "oym",
                "oyy",
                "ozm",
                "paa",
                "pab",
                "pac",
                "pad",
                "pae",
                "paf",
                "pag",
                "pah",
                "pai",
                "pak",
                "pal",
                "pam",
                "pao",
                "pap",
                "paq",
                "par",
                "pas",
                "pat",
                "pau",
                "pav",
                "paw",
                "pax",
                "pay",
                "paz",
                "pbb",
                "pbc",
                "pbe",
                "pbf",
                "pbg",
                "pbh",
                "pbi",
                "pbl",
                "pbm",
                "pbn",
                "pbo",
                "pbp",
                "pbr",
                "pbs",
                "pbt",
                "pbu",
                "pbv",
                "pby",
                "pbz",
                "pca",
                "pcb",
                "pcc",
                "pcd",
                "pce",
                "pcf",
                "pcg",
                "pch",
                "pci",
                "pcj",
                "pck",
                "pcl",
                "pcm",
                "pcn",
                "pcp",
                "pcr",
                "pcw",
                "pda",
                "pdc",
                "pdi",
                "pdn",
                "pdo",
                "pdt",
                "pdu",
                "pea",
                "peb",
                "ped",
                "pee",
                "pef",
                "peg",
                "peh",
                "pei",
                "pej",
                "pek",
                "pel",
                "pem",
                "peo",
                "pep",
                "peq",
                "pes",
                "pev",
                "pex",
                "pey",
                "pez",
                "pfa",
                "pfe",
                "pfl",
                "pga",
                "pgd",
                "pgg",
                "pgi",
                "pgk",
                "pgl",
                "pgn",
                "pgs",
                "pgu",
                "pgy",
                "pgz",
                "pha",
                "phd",
                "phg",
                "phh",
                "phi",
                "phk",
                "phl",
                "phm",
                "phn",
                "pho",
                "phq",
                "phr",
                "pht",
                "phu",
                "phv",
                "phw",
                "pia",
                "pib",
                "pic",
                "pid",
                "pie",
                "pif",
                "pig",
                "pih",
                "pii",
                "pij",
                "pil",
                "pim",
                "pin",
                "pio",
                "pip",
                "pir",
                "pis",
                "pit",
                "piu",
                "piv",
                "piw",
                "pix",
                "piy",
                "piz",
                "pjt",
                "pka",
                "pkb",
                "pkc",
                "pkg",
                "pkh",
                "pkn",
                "pko",
                "pkp",
                "pkr",
                "pks",
                "pkt",
                "pku",
                "pla",
                "plb",
                "plc",
                "pld",
                "ple",
                "plf",
                "plg",
                "plh",
                "plj",
                "plk",
                "pll",
                "pln",
                "plo",
                "plp",
                "plq",
                "plr",
                "pls",
                "plt",
                "plu",
                "plv",
                "plw",
                "ply",
                "plz",
                "pma",
                "pmb",
                "pmc",
                "pmd",
                "pme",
                "pmf",
                "pmh",
                "pmi",
                "pmj",
                "pmk",
                "pml",
                "pmm",
                "pmn",
                "pmo",
                "pmq",
                "pmr",
                "pms",
                "pmt",
                "pmu",
                "pmw",
                "pmx",
                "pmy",
                "pmz",
                "pna",
                "pnb",
                "pnc",
                "pnd",
                "pne",
                "png",
                "pnh",
                "pni",
                "pnj",
                "pnk",
                "pnl",
                "pnm",
                "pnn",
                "pno",
                "pnp",
                "pnq",
                "pnr",
                "pns",
                "pnt",
                "pnu",
                "pnv",
                "pnw",
                "pnx",
                "pny",
                "pnz",
                "poc",
                "pod",
                "poe",
                "pof",
                "pog",
                "poh",
                "poi",
                "pok",
                "pom",
                "pon",
                "poo",
                "pop",
                "poq",
                "pos",
                "pot",
                "pov",
                "pow",
                "pox",
                "poy",
                "poz",
                "ppa",
                "ppe",
                "ppi",
                "ppk",
                "ppl",
                "ppm",
                "ppn",
                "ppo",
                "ppp",
                "ppq",
                "ppr",
                "pps",
                "ppt",
                "ppu",
                "pqa",
                "pqe",
                "pqm",
                "pqw",
                "pra",
                "prb",
                "prc",
                "prd",
                "pre",
                "prf",
                "prg",
                "prh",
                "pri",
                "prk",
                "prl",
                "prm",
                "prn",
                "pro",
                "prp",
                "prq",
                "prr",
                "prs",
                "prt",
                "pru",
                "prw",
                "prx",
                "pry",
                "prz",
                "psa",
                "psc",
                "psd",
                "pse",
                "psg",
                "psh",
                "psi",
                "psl",
                "psm",
                "psn",
                "pso",
                "psp",
                "psq",
                "psr",
                "pss",
                "pst",
                "psu",
                "psw",
                "psy",
                "pta",
                "pth",
                "pti",
                "ptn",
                "pto",
                "ptp",
                "ptq",
                "ptr",
                "ptt",
                "ptu",
                "ptv",
                "ptw",
                "pty",
                "pua",
                "pub",
                "puc",
                "pud",
                "pue",
                "puf",
                "pug",
                "pui",
                "puj",
                "puk",
                "pum",
                "puo",
                "pup",
                "puq",
                "pur",
                "put",
                "puu",
                "puw",
                "pux",
                "puy",
                "puz",
                "pwa",
                "pwb",
                "pwg",
                "pwi",
                "pwm",
                "pwn",
                "pwo",
                "pwr",
                "pww",
                "pxm",
                "pye",
                "pym",
                "pyn",
                "pys",
                "pyu",
                "pyx",
                "pyy",
                "pzn",
                "qua",
                "qub",
                "quc",
                "qud",
                "quf",
                "qug",
                "quh",
                "qui",
                "quk",
                "qul",
                "qum",
                "qun",
                "qup",
                "quq",
                "qur",
                "qus",
                "quv",
                "quw",
                "qux",
                "quy",
                "quz",
                "qva",
                "qvc",
                "qve",
                "qvh",
                "qvi",
                "qvj",
                "qvl",
                "qvm",
                "qvn",
                "qvo",
                "qvp",
                "qvs",
                "qvw",
                "qvy",
                "qvz",
                "qwa",
                "qwc",
                "qwe",
                "qwh",
                "qwm",
                "qws",
                "qwt",
                "qxa",
                "qxc",
                "qxh",
                "qxl",
                "qxn",
                "qxo",
                "qxp",
                "qxq",
                "qxr",
                "qxs",
                "qxt",
                "qxu",
                "qxw",
                "qya",
                "qyp",
                "raa",
                "rab",
                "rac",
                "rad",
                "raf",
                "rag",
                "rah",
                "rai",
                "raj",
                "rak",
                "ral",
                "ram",
                "ran",
                "rao",
                "rap",
                "raq",
                "rar",
                "ras",
                "rat",
                "rau",
                "rav",
                "raw",
                "rax",
                "ray",
                "raz",
                "rbb",
                "rbk",
                "rbl",
                "rbp",
                "rcf",
                "rdb",
                "rea",
                "reb",
                "ree",
                "reg",
                "rei",
                "rej",
                "rel",
                "rem",
                "ren",
                "rer",
                "res",
                "ret",
                "rey",
                "rga",
                "rge",
                "rgk",
                "rgn",
                "rgr",
                "rgs",
                "rgu",
                "rhg",
                "rhp",
                "ria",
                "rie",
                "rif",
                "ril",
                "rim",
                "rin",
                "rir",
                "rit",
                "riu",
                "rjg",
                "rji",
                "rjs",
                "rka",
                "rkb",
                "rkh",
                "rki",
                "rkm",
                "rkt",
                "rkw",
                "rma",
                "rmb",
                "rmc",
                "rmd",
                "rme",
                "rmf",
                "rmg",
                "rmh",
                "rmi",
                "rmk",
                "rml",
                "rmm",
                "rmn",
                "rmo",
                "rmp",
                "rmq",
                "rmr",
                "rms",
                "rmt",
                "rmu",
                "rmv",
                "rmw",
                "rmx",
                "rmy",
                "rmz",
                "rna",
                "rnd",
                "rng",
                "rnl",
                "rnn",
                "rnp",
                "rnr",
                "rnw",
                "roa",
                "rob",
                "roc",
                "rod",
                "roe",
                "rof",
                "rog",
                "rol",
                "rom",
                "roo",
                "rop",
                "ror",
                "rou",
                "row",
                "rpn",
                "rpt",
                "rri",
                "rro",
                "rrt",
                "rsb",
                "rsi",
                "rsl",
                "rsm",
                "rtc",
                "rth",
                "rtm",
                "rts",
                "rtw",
                "rub",
                "ruc",
                "rue",
                "ruf",
                "rug",
                "ruh",
                "rui",
                "ruk",
                "ruo",
                "rup",
                "ruq",
                "rut",
                "ruu",
                "ruy",
                "ruz",
                "rwa",
                "rwk",
                "rwm",
                "rwo",
                "rwr",
                "rxd",
                "rxw",
                "ryn",
                "rys",
                "ryu",
                "rzh",
                "saa",
                "sab",
                "sac",
                "sad",
                "sae",
                "saf",
                "sah",
                "sai",
                "saj",
                "sak",
                "sal",
                "sam",
                "sao",
                "sap",
                "saq",
                "sar",
                "sas",
                "sat",
                "sau",
                "sav",
                "saw",
                "sax",
                "say",
                "saz",
                "sba",
                "sbb",
                "sbc",
                "sbd",
                "sbe",
                "sbf",
                "sbg",
                "sbh",
                "sbi",
                "sbj",
                "sbk",
                "sbl",
                "sbm",
                "sbn",
                "sbo",
                "sbp",
                "sbq",
                "sbr",
                "sbs",
                "sbt",
                "sbu",
                "sbv",
                "sbw",
                "sbx",
                "sby",
                "sbz",
                "sca",
                "scb",
                "sce",
                "scf",
                "scg",
                "sch",
                "sci",
                "sck",
                "scl",
                "scn",
                "sco",
                "scp",
                "scq",
                "scs",
                "sct",
                "scu",
                "scv",
                "scw",
                "scx",
                "sda",
                "sdb",
                "sdc",
                "sde",
                "sdf",
                "sdg",
                "sdh",
                "sdj",
                "sdk",
                "sdl",
                "sdm",
                "sdn",
                "sdo",
                "sdp",
                "sdq",
                "sdr",
                "sds",
                "sdt",
                "sdu",
                "sdv",
                "sdx",
                "sdz",
                "sea",
                "seb",
                "sec",
                "sed",
                "see",
                "sef",
                "seg",
                "seh",
                "sei",
                "sej",
                "sek",
                "sel",
                "sem",
                "sen",
                "seo",
                "sep",
                "seq",
                "ser",
                "ses",
                "set",
                "seu",
                "sev",
                "sew",
                "sey",
                "sez",
                "sfb",
                "sfe",
                "sfm",
                "sfs",
                "sfw",
                "sga",
                "sgb",
                "sgc",
                "sgd",
                "sge",
                "sgg",
                "sgh",
                "sgi",
                "sgj",
                "sgk",
                "sgl",
                "sgm",
                "sgn",
                "sgo",
                "sgp",
                "sgr",
                "sgs",
                "sgt",
                "sgu",
                "sgw",
                "sgx",
                "sgy",
                "sgz",
                "sha",
                "shb",
                "shc",
                "shd",
                "she",
                "shg",
                "shh",
                "shi",
                "shj",
                "shk",
                "shl",
                "shm",
                "shn",
                "sho",
                "shp",
                "shq",
                "shr",
                "shs",
                "sht",
                "shu",
                "shv",
                "shw",
                "shx",
                "shy",
                "shz",
                "sia",
                "sib",
                "sid",
                "sie",
                "sif",
                "sig",
                "sih",
                "sii",
                "sij",
                "sik",
                "sil",
                "sim",
                "sio",
                "sip",
                "siq",
                "sir",
                "sis",
                "sit",
                "siu",
                "siv",
                "siw",
                "six",
                "siy",
                "siz",
                "sja",
                "sjb",
                "sjd",
                "sje",
                "sjg",
                "sjk",
                "sjl",
                "sjm",
                "sjn",
                "sjo",
                "sjp",
                "sjr",
                "sjs",
                "sjt",
                "sju",
                "sjw",
                "ska",
                "skb",
                "skc",
                "skd",
                "ske",
                "skf",
                "skg",
                "skh",
                "ski",
                "skj",
                "skk",
                "skm",
                "skn",
                "sko",
                "skp",
                "skq",
                "skr",
                "sks",
                "skt",
                "sku",
                "skv",
                "skw",
                "skx",
                "sky",
                "skz",
                "sla",
                "slc",
                "sld",
                "sle",
                "slf",
                "slg",
                "slh",
                "sli",
                "slj",
                "sll",
                "slm",
                "sln",
                "slp",
                "slq",
                "slr",
                "sls",
                "slt",
                "slu",
                "slw",
                "slx",
                "sly",
                "slz",
                "sma",
                "smb",
                "smc",
                "smd",
                "smf",
                "smg",
                "smh",
                "smi",
                "smj",
                "smk",
                "sml",
                "smm",
                "smn",
                "smp",
                "smq",
                "smr",
                "sms",
                "smt",
                "smu",
                "smv",
                "smw",
                "smx",
                "smy",
                "smz",
                "snb",
                "snc",
                "sne",
                "snf",
                "sng",
                "snh",
                "sni",
                "snj",
                "snk",
                "snl",
                "snm",
                "snn",
                "sno",
                "snp",
                "snq",
                "snr",
                "sns",
                "snu",
                "snv",
                "snw",
                "snx",
                "sny",
                "snz",
                "soa",
                "sob",
                "soc",
                "sod",
                "soe",
                "sog",
                "soh",
                "soi",
                "soj",
                "sok",
                "sol",
                "son",
                "soo",
                "sop",
                "soq",
                "sor",
                "sos",
                "sou",
                "sov",
                "sow",
                "sox",
                "soy",
                "soz",
                "spb",
                "spc",
                "spd",
                "spe",
                "spg",
                "spi",
                "spk",
                "spl",
                "spm",
                "spn",
                "spo",
                "spp",
                "spq",
                "spr",
                "sps",
                "spt",
                "spu",
                "spv",
                "spx",
                "spy",
                "sqa",
                "sqh",
                "sqj",
                "sqk",
                "sqm",
                "sqn",
                "sqo",
                "sqq",
                "sqr",
                "sqs",
                "sqt",
                "squ",
                "sra",
                "srb",
                "src",
                "sre",
                "srf",
                "srg",
                "srh",
                "sri",
                "srk",
                "srl",
                "srm",
                "srn",
                "sro",
                "srq",
                "srr",
                "srs",
                "srt",
                "sru",
                "srv",
                "srw",
                "srx",
                "sry",
                "srz",
                "ssa",
                "ssb",
                "ssc",
                "ssd",
                "sse",
                "ssf",
                "ssg",
                "ssh",
                "ssi",
                "ssj",
                "ssk",
                "ssl",
                "ssm",
                "ssn",
                "sso",
                "ssp",
                "ssq",
                "ssr",
                "sss",
                "sst",
                "ssu",
                "ssv",
                "ssx",
                "ssy",
                "ssz",
                "sta",
                "stb",
                "std",
                "ste",
                "stf",
                "stg",
                "sth",
                "sti",
                "stj",
                "stk",
                "stl",
                "stm",
                "stn",
                "sto",
                "stp",
                "stq",
                "str",
                "sts",
                "stt",
                "stu",
                "stv",
                "stw",
                "sty",
                "sua",
                "sub",
                "suc",
                "sue",
                "sug",
                "sui",
                "suj",
                "suk",
                "sul",
                "sum",
                "suq",
                "sur",
                "sus",
                "sut",
                "suv",
                "suw",
                "sux",
                "suy",
                "suz",
                "sva",
                "svb",
                "svc",
                "sve",
                "svk",
                "svm",
                "svr",
                "svs",
                "svx",
                "swb",
                "swc",
                "swf",
                "swg",
                "swh",
                "swi",
                "swj",
                "swk",
                "swl",
                "swm",
                "swn",
                "swo",
                "swp",
                "swq",
                "swr",
                "sws",
                "swt",
                "swu",
                "swv",
                "sww",
                "swx",
                "swy",
                "sxb",
                "sxc",
                "sxe",
                "sxg",
                "sxk",
                "sxl",
                "sxm",
                "sxn",
                "sxo",
                "sxr",
                "sxs",
                "sxu",
                "sxw",
                "sya",
                "syb",
                "syc",
                "syd",
                "syi",
                "syk",
                "syl",
                "sym",
                "syn",
                "syo",
                "syr",
                "sys",
                "syw",
                "syx",
                "syy",
                "sza",
                "szb",
                "szc",
                "szd",
                "sze",
                "szg",
                "szl",
                "szn",
                "szp",
                "szs",
                "szv",
                "szw",
                "szy",
                "taa",
                "tab",
                "tac",
                "tad",
                "tae",
                "taf",
                "tag",
                "tai",
                "taj",
                "tak",
                "tal",
                "tan",
                "tao",
                "tap",
                "taq",
                "tar",
                "tas",
                "tau",
                "tav",
                "taw",
                "tax",
                "tay",
                "taz",
                "tba",
                "tbb",
                "tbc",
                "tbd",
                "tbe",
                "tbf",
                "tbg",
                "tbh",
                "tbi",
                "tbj",
                "tbk",
                "tbl",
                "tbm",
                "tbn",
                "tbo",
                "tbp",
                "tbq",
                "tbr",
                "tbs",
                "tbt",
                "tbu",
                "tbv",
                "tbw",
                "tbx",
                "tby",
                "tbz",
                "tca",
                "tcb",
                "tcc",
                "tcd",
                "tce",
                "tcf",
                "tcg",
                "tch",
                "tci",
                "tck",
                "tcl",
                "tcm",
                "tcn",
                "tco",
                "tcp",
                "tcq",
                "tcs",
                "tct",
                "tcu",
                "tcw",
                "tcx",
                "tcy",
                "tcz",
                "tda",
                "tdb",
                "tdc",
                "tdd",
                "tde",
                "tdf",
                "tdg",
                "tdh",
                "tdi",
                "tdj",
                "tdk",
                "tdl",
                "tdm",
                "tdn",
                "tdo",
                "tdq",
                "tdr",
                "tds",
                "tdt",
                "tdu",
                "tdv",
                "tdx",
                "tdy",
                "tea",
                "teb",
                "tec",
                "ted",
                "tee",
                "tef",
                "teg",
                "teh",
                "tei",
                "tek",
                "tem",
                "ten",
                "teo",
                "tep",
                "teq",
                "ter",
                "tes",
                "tet",
                "teu",
                "tev",
                "tew",
                "tex",
                "tey",
                "tez",
                "tfi",
                "tfn",
                "tfo",
                "tfr",
                "tft",
                "tga",
                "tgb",
                "tgc",
                "tgd",
                "tge",
                "tgf",
                "tgg",
                "tgh",
                "tgi",
                "tgj",
                "tgn",
                "tgo",
                "tgp",
                "tgq",
                "tgr",
                "tgs",
                "tgt",
                "tgu",
                "tgv",
                "tgw",
                "tgx",
                "tgy",
                "tgz",
                "thc",
                "thd",
                "the",
                "thf",
                "thh",
                "thi",
                "thk",
                "thl",
                "thm",
                "thn",
                "thp",
                "thq",
                "thr",
                "ths",
                "tht",
                "thu",
                "thv",
                "thw",
                "thx",
                "thy",
                "thz",
                "tia",
                "tic",
                "tid",
                "tie",
                "tif",
                "tig",
                "tih",
                "tii",
                "tij",
                "tik",
                "til",
                "tim",
                "tin",
                "tio",
                "tip",
                "tiq",
                "tis",
                "tit",
                "tiu",
                "tiv",
                "tiw",
                "tix",
                "tiy",
                "tiz",
                "tja",
                "tjg",
                "tji",
                "tjj",
                "tjl",
                "tjm",
                "tjn",
                "tjo",
                "tjp",
                "tjs",
                "tju",
                "tjw",
                "tka",
                "tkb",
                "tkd",
                "tke",
                "tkf",
                "tkg",
                "tkk",
                "tkl",
                "tkm",
                "tkn",
                "tkp",
                "tkq",
                "tkr",
                "tks",
                "tkt",
                "tku",
                "tkv",
                "tkw",
                "tkx",
                "tkz",
                "tla",
                "tlb",
                "tlc",
                "tld",
                "tlf",
                "tlg",
                "tlh",
                "tli",
                "tlj",
                "tlk",
                "tll",
                "tlm",
                "tln",
                "tlo",
                "tlp",
                "tlq",
                "tlr",
                "tls",
                "tlt",
                "tlu",
                "tlv",
                "tlw",
                "tlx",
                "tly",
                "tma",
                "tmb",
                "tmc",
                "tmd",
                "tme",
                "tmf",
                "tmg",
                "tmh",
                "tmi",
                "tmj",
                "tmk",
                "tml",
                "tmm",
                "tmn",
                "tmo",
                "tmp",
                "tmq",
                "tmr",
                "tms",
                "tmt",
                "tmu",
                "tmv",
                "tmw",
                "tmy",
                "tmz",
                "tna",
                "tnb",
                "tnc",
                "tnd",
                "tne",
                "tnf",
                "tng",
                "tnh",
                "tni",
                "tnk",
                "tnl",
                "tnm",
                "tnn",
                "tno",
                "tnp",
                "tnq",
                "tnr",
                "tns",
                "tnt",
                "tnu",
                "tnv",
                "tnw",
                "tnx",
                "tny",
                "tnz",
                "tob",
                "toc",
                "tod",
                "toe",
                "tof",
                "tog",
                "toh",
                "toi",
                "toj",
                "tol",
                "tom",
                "too",
                "top",
                "toq",
                "tor",
                "tos",
                "tou",
                "tov",
                "tow",
                "tox",
                "toy",
                "toz",
                "tpa",
                "tpc",
                "tpe",
                "tpf",
                "tpg",
                "tpi",
                "tpj",
                "tpk",
                "tpl",
                "tpm",
                "tpn",
                "tpo",
                "tpp",
                "tpq",
                "tpr",
                "tpt",
                "tpu",
                "tpv",
                "tpw",
                "tpx",
                "tpy",
                "tpz",
                "tqb",
                "tql",
                "tqm",
                "tqn",
                "tqo",
                "tqp",
                "tqq",
                "tqr",
                "tqt",
                "tqu",
                "tqw",
                "tra",
                "trb",
                "trc",
                "trd",
                "tre",
                "trf",
                "trg",
                "trh",
                "tri",
                "trj",
                "trk",
                "trl",
                "trm",
                "trn",
                "tro",
                "trp",
                "trq",
                "trr",
                "trs",
                "trt",
                "tru",
                "trv",
                "trw",
                "trx",
                "try",
                "trz",
                "tsa",
                "tsb",
                "tsc",
                "tsd",
                "tse",
                "tsf",
                "tsg",
                "tsh",
                "tsi",
                "tsj",
                "tsk",
                "tsl",
                "tsm",
                "tsp",
                "tsq",
                "tsr",
                "tss",
                "tst",
                "tsu",
                "tsv",
                "tsw",
                "tsx",
                "tsy",
                "tsz",
                "tta",
                "ttb",
                "ttc",
                "ttd",
                "tte",
                "ttf",
                "ttg",
                "tth",
                "tti",
                "ttj",
                "ttk",
                "ttl",
                "ttm",
                "ttn",
                "tto",
                "ttp",
                "ttq",
                "ttr",
                "tts",
                "ttt",
                "ttu",
                "ttv",
                "ttw",
                "tty",
                "ttz",
                "tua",
                "tub",
                "tuc",
                "tud",
                "tue",
                "tuf",
                "tug",
                "tuh",
                "tui",
                "tuj",
                "tul",
                "tum",
                "tun",
                "tuo",
                "tup",
                "tuq",
                "tus",
                "tut",
                "tuu",
                "tuv",
                "tuw",
                "tux",
                "tuy",
                "tuz",
                "tva",
                "tvd",
                "tve",
                "tvk",
                "tvl",
                "tvm",
                "tvn",
                "tvo",
                "tvs",
                "tvt",
                "tvu",
                "tvw",
                "tvx",
                "tvy",
                "twa",
                "twb",
                "twc",
                "twd",
                "twe",
                "twf",
                "twg",
                "twh",
                "twl",
                "twm",
                "twn",
                "two",
                "twp",
                "twq",
                "twr",
                "twt",
                "twu",
                "tww",
                "twx",
                "twy",
                "txa",
                "txb",
                "txc",
                "txe",
                "txg",
                "txh",
                "txi",
                "txj",
                "txm",
                "txn",
                "txo",
                "txq",
                "txr",
                "txs",
                "txt",
                "txu",
                "txx",
                "txy",
                "tya",
                "tye",
                "tyh",
                "tyi",
                "tyj",
                "tyl",
                "tyn",
                "typ",
                "tyr",
                "tys",
                "tyt",
                "tyu",
                "tyv",
                "tyx",
                "tyz",
                "tza",
                "tzh",
                "tzj",
                "tzl",
                "tzm",
                "tzn",
                "tzo",
                "tzx",
                "uam",
                "uan",
                "uar",
                "uba",
                "ubi",
                "ubl",
                "ubr",
                "ubu",
                "uby",
                "uda",
                "ude",
                "udg",
                "udi",
                "udj",
                "udl",
                "udm",
                "udu",
                "ues",
                "ufi",
                "uga",
                "ugb",
                "uge",
                "ugn",
                "ugo",
                "ugy",
                "uha",
                "uhn",
                "uis",
                "uiv",
                "uji",
                "uka",
                "ukg",
                "ukh",
                "uki",
                "ukk",
                "ukl",
                "ukp",
                "ukq",
                "uks",
                "uku",
                "ukv",
                "ukw",
                "uky",
                "ula",
                "ulb",
                "ulc",
                "ule",
                "ulf",
                "uli",
                "ulk",
                "ull",
                "ulm",
                "uln",
                "ulu",
                "ulw",
                "uma",
                "umb",
                "umc",
                "umd",
                "umg",
                "umi",
                "umm",
                "umn",
                "umo",
                "ump",
                "umr",
                "ums",
                "umu",
                "una",
                "und",
                "une",
                "ung",
                "unk",
                "unm",
                "unn",
                "unp",
                "unr",
                "unu",
                "unx",
                "unz",
                "uok",
                "upi",
                "upv",
                "ura",
                "urb",
                "urc",
                "ure",
                "urf",
                "urg",
                "urh",
                "uri",
                "urj",
                "urk",
                "url",
                "urm",
                "urn",
                "uro",
                "urp",
                "urr",
                "urt",
                "uru",
                "urv",
                "urw",
                "urx",
                "ury",
                "urz",
                "usa",
                "ush",
                "usi",
                "usk",
                "usp",
                "uss",
                "usu",
                "uta",
                "ute",
                "uth",
                "utp",
                "utr",
                "utu",
                "uum",
                "uun",
                "uur",
                "uuu",
                "uve",
                "uvh",
                "uvl",
                "uwa",
                "uya",
                "uzn",
                "uzs",
                "vaa",
                "vae",
                "vaf",
                "vag",
                "vah",
                "vai",
                "vaj",
                "val",
                "vam",
                "van",
                "vao",
                "vap",
                "var",
                "vas",
                "vau",
                "vav",
                "vay",
                "vbb",
                "vbk",
                "vec",
                "ved",
                "vel",
                "vem",
                "veo",
                "vep",
                "ver",
                "vgr",
                "vgt",
                "vic",
                "vid",
                "vif",
                "vig",
                "vil",
                "vin",
                "vis",
                "vit",
                "viv",
                "vka",
                "vki",
                "vkj",
                "vkk",
                "vkl",
                "vkm",
                "vko",
                "vkp",
                "vkt",
                "vku",
                "vlp",
                "vls",
                "vma",
                "vmb",
                "vmc",
                "vmd",
                "vme",
                "vmf",
                "vmg",
                "vmh",
                "vmi",
                "vmj",
                "vmk",
                "vml",
                "vmm",
                "vmp",
                "vmq",
                "vmr",
                "vms",
                "vmu",
                "vmv",
                "vmw",
                "vmx",
                "vmy",
                "vmz",
                "vnk",
                "vnm",
                "vnp",
                "vor",
                "vot",
                "vra",
                "vro",
                "vrs",
                "vrt",
                "vsi",
                "vsl",
                "vsv",
                "vto",
                "vum",
                "vun",
                "vut",
                "vwa",
                "waa",
                "wab",
                "wac",
                "wad",
                "wae",
                "waf",
                "wag",
                "wah",
                "wai",
                "waj",
                "wak",
                "wal",
                "wam",
                "wan",
                "wao",
                "wap",
                "waq",
                "war",
                "was",
                "wat",
                "wau",
                "wav",
                "waw",
                "wax",
                "way",
                "waz",
                "wba",
                "wbb",
                "wbe",
                "wbf",
                "wbh",
                "wbi",
                "wbj",
                "wbk",
                "wbl",
                "wbm",
                "wbp",
                "wbq",
                "wbr",
                "wbs",
                "wbt",
                "wbv",
                "wbw",
                "wca",
                "wci",
                "wdd",
                "wdg",
                "wdj",
                "wdk",
                "wdu",
                "wdy",
                "wea",
                "wec",
                "wed",
                "weg",
                "weh",
                "wei",
                "wem",
                "wen",
                "weo",
                "wep",
                "wer",
                "wes",
                "wet",
                "weu",
                "wew",
                "wfg",
                "wga",
                "wgb",
                "wgg",
                "wgi",
                "wgo",
                "wgu",
                "wgw",
                "wgy",
                "wha",
                "whg",
                "whk",
                "whu",
                "wib",
                "wic",
                "wie",
                "wif",
                "wig",
                "wih",
                "wii",
                "wij",
                "wik",
                "wil",
                "wim",
                "win",
                "wir",
                "wit",
                "wiu",
                "wiv",
                "wiw",
                "wiy",
                "wja",
                "wji",
                "wka",
                "wkb",
                "wkd",
                "wkl",
                "wkr",
                "wku",
                "wkw",
                "wky",
                "wla",
                "wlc",
                "wle",
                "wlg",
                "wlh",
                "wli",
                "wlk",
                "wll",
                "wlm",
                "wlo",
                "wlr",
                "wls",
                "wlu",
                "wlv",
                "wlw",
                "wlx",
                "wly",
                "wma",
                "wmb",
                "wmc",
                "wmd",
                "wme",
                "wmh",
                "wmi",
                "wmm",
                "wmn",
                "wmo",
                "wms",
                "wmt",
                "wmw",
                "wmx",
                "wnb",
                "wnc",
                "wnd",
                "wne",
                "wng",
                "wni",
                "wnk",
                "wnm",
                "wnn",
                "wno",
                "wnp",
                "wnu",
                "wnw",
                "wny",
                "woa",
                "wob",
                "woc",
                "wod",
                "woe",
                "wof",
                "wog",
                "woi",
                "wok",
                "wom",
                "won",
                "woo",
                "wor",
                "wos",
                "wow",
                "woy",
                "wpc",
                "wra",
                "wrb",
                "wrd",
                "wrg",
                "wrh",
                "wri",
                "wrk",
                "wrl",
                "wrm",
                "wrn",
                "wro",
                "wrp",
                "wrr",
                "wrs",
                "wru",
                "wrv",
                "wrw",
                "wrx",
                "wry",
                "wrz",
                "wsa",
                "wsg",
                "wsi",
                "wsk",
                "wsr",
                "wss",
                "wsu",
                "wsv",
                "wtf",
                "wth",
                "wti",
                "wtk",
                "wtm",
                "wtw",
                "wua",
                "wub",
                "wud",
                "wuh",
                "wul",
                "wum",
                "wun",
                "wur",
                "wut",
                "wuu",
                "wuv",
                "wux",
                "wuy",
                "wwa",
                "wwb",
                "wwo",
                "wwr",
                "www",
                "wxa",
                "wxw",
                "wya",
                "wyb",
                "wyi",
                "wym",
                "wyr",
                "wyy",
                "xaa",
                "xab",
                "xac",
                "xad",
                "xae",
                "xag",
                "xai",
                "xaj",
                "xak",
                "xal",
                "xam",
                "xan",
                "xao",
                "xap",
                "xaq",
                "xar",
                "xas",
                "xat",
                "xau",
                "xav",
                "xaw",
                "xay",
                "xba",
                "xbb",
                "xbc",
                "xbd",
                "xbe",
                "xbg",
                "xbi",
                "xbj",
                "xbm",
                "xbn",
                "xbo",
                "xbp",
                "xbr",
                "xbw",
                "xbx",
                "xby",
                "xcb",
                "xcc",
                "xce",
                "xcg",
                "xch",
                "xcl",
                "xcm",
                "xcn",
                "xco",
                "xcr",
                "xct",
                "xcu",
                "xcv",
                "xcw",
                "xcy",
                "xda",
                "xdc",
                "xdk",
                "xdm",
                "xdo",
                "xdy",
                "xeb",
                "xed",
                "xeg",
                "xel",
                "xem",
                "xep",
                "xer",
                "xes",
                "xet",
                "xeu",
                "xfa",
                "xga",
                "xgb",
                "xgd",
                "xgf",
                "xgg",
                "xgi",
                "xgl",
                "xgm",
                "xgn",
                "xgr",
                "xgu",
                "xgw",
                "xha",
                "xhc",
                "xhd",
                "xhe",
                "xhr",
                "xht",
                "xhu",
                "xhv",
                "xia",
                "xib",
                "xii",
                "xil",
                "xin",
                "xip",
                "xir",
                "xis",
                "xiv",
                "xiy",
                "xjb",
                "xjt",
                "xka",
                "xkb",
                "xkc",
                "xkd",
                "xke",
                "xkf",
                "xkg",
                "xkh",
                "xki",
                "xkj",
                "xkk",
                "xkl",
                "xkn",
                "xko",
                "xkp",
                "xkq",
                "xkr",
                "xks",
                "xkt",
                "xku",
                "xkv",
                "xkw",
                "xkx",
                "xky",
                "xkz",
                "xla",
                "xlb",
                "xlc",
                "xld",
                "xle",
                "xlg",
                "xli",
                "xln",
                "xlo",
                "xlp",
                "xls",
                "xlu",
                "xly",
                "xma",
                "xmb",
                "xmc",
                "xmd",
                "xme",
                "xmf",
                "xmg",
                "xmh",
                "xmj",
                "xmk",
                "xml",
                "xmm",
                "xmn",
                "xmo",
                "xmp",
                "xmq",
                "xmr",
                "xms",
                "xmt",
                "xmu",
                "xmv",
                "xmw",
                "xmx",
                "xmy",
                "xmz",
                "xna",
                "xnb",
                "xnd",
                "xng",
                "xnh",
                "xni",
                "xnk",
                "xnm",
                "xnn",
                "xno",
                "xnr",
                "xns",
                "xnt",
                "xnu",
                "xny",
                "xnz",
                "xoc",
                "xod",
                "xog",
                "xoi",
                "xok",
                "xom",
                "xon",
                "xoo",
                "xop",
                "xor",
                "xow",
                "xpa",
                "xpb",
                "xpc",
                "xpd",
                "xpe",
                "xpf",
                "xpg",
                "xph",
                "xpi",
                "xpj",
                "xpk",
                "xpl",
                "xpm",
                "xpn",
                "xpo",
                "xpp",
                "xpq",
                "xpr",
                "xps",
                "xpt",
                "xpu",
                "xpv",
                "xpw",
                "xpx",
                "xpy",
                "xpz",
                "xqa",
                "xqt",
                "xra",
                "xrb",
                "xrd",
                "xre",
                "xrg",
                "xri",
                "xrm",
                "xrn",
                "xrq",
                "xrr",
                "xrt",
                "xru",
                "xrw",
                "xsa",
                "xsb",
                "xsc",
                "xsd",
                "xse",
                "xsh",
                "xsi",
                "xsj",
                "xsl",
                "xsm",
                "xsn",
                "xso",
                "xsp",
                "xsq",
                "xsr",
                "xss",
                "xsu",
                "xsv",
                "xsy",
                "xta",
                "xtb",
                "xtc",
                "xtd",
                "xte",
                "xtg",
                "xth",
                "xti",
                "xtj",
                "xtl",
                "xtm",
                "xtn",
                "xto",
                "xtp",
                "xtq",
                "xtr",
                "xts",
                "xtt",
                "xtu",
                "xtv",
                "xtw",
                "xty",
                "xtz",
                "xua",
                "xub",
                "xud",
                "xug",
                "xuj",
                "xul",
                "xum",
                "xun",
                "xuo",
                "xup",
                "xur",
                "xut",
                "xuu",
                "xve",
                "xvi",
                "xvn",
                "xvo",
                "xvs",
                "xwa",
                "xwc",
                "xwd",
                "xwe",
                "xwg",
                "xwj",
                "xwk",
                "xwl",
                "xwo",
                "xwr",
                "xwt",
                "xww",
                "xxb",
                "xxk",
                "xxm",
                "xxr",
                "xxt",
                "xya",
                "xyb",
                "xyj",
                "xyk",
                "xyl",
                "xyt",
                "xyy",
                "xzh",
                "xzm",
                "xzp",
                "yaa",
                "yab",
                "yac",
                "yad",
                "yae",
                "yaf",
                "yag",
                "yah",
                "yai",
                "yaj",
                "yak",
                "yal",
                "yam",
                "yan",
                "yao",
                "yap",
                "yaq",
                "yar",
                "yas",
                "yat",
                "yau",
                "yav",
                "yaw",
                "yax",
                "yay",
                "yaz",
                "yba",
                "ybb",
                "ybd",
                "ybe",
                "ybh",
                "ybi",
                "ybj",
                "ybk",
                "ybl",
                "ybm",
                "ybn",
                "ybo",
                "ybx",
                "yby",
                "ych",
                "ycl",
                "ycn",
                "ycp",
                "yda",
                "ydd",
                "yde",
                "ydg",
                "ydk",
                "yds",
                "yea",
                "yec",
                "yee",
                "yei",
                "yej",
                "yel",
                "yen",
                "yer",
                "yes",
                "yet",
                "yeu",
                "yev",
                "yey",
                "yga",
                "ygi",
                "ygl",
                "ygm",
                "ygp",
                "ygr",
                "ygs",
                "ygu",
                "ygw",
                "yha",
                "yhd",
                "yhl",
                "yhs",
                "yia",
                "yif",
                "yig",
                "yih",
                "yii",
                "yij",
                "yik",
                "yil",
                "yim",
                "yin",
                "yip",
                "yiq",
                "yir",
                "yis",
                "yit",
                "yiu",
                "yiv",
                "yix",
                "yiy",
                "yiz",
                "yka",
                "ykg",
                "yki",
                "ykk",
                "ykl",
                "ykm",
                "ykn",
                "yko",
                "ykr",
                "ykt",
                "yku",
                "yky",
                "yla",
                "ylb",
                "yle",
                "ylg",
                "yli",
                "yll",
                "ylm",
                "yln",
                "ylo",
                "ylr",
                "ylu",
                "yly",
                "yma",
                "ymb",
                "ymc",
                "ymd",
                "yme",
                "ymg",
                "ymh",
                "ymi",
                "ymk",
                "yml",
                "ymm",
                "ymn",
                "ymo",
                "ymp",
                "ymq",
                "ymr",
                "yms",
                "ymt",
                "ymx",
                "ymz",
                "yna",
                "ynd",
                "yne",
                "yng",
                "ynh",
                "ynk",
                "ynl",
                "ynn",
                "yno",
                "ynq",
                "yns",
                "ynu",
                "yob",
                "yog",
                "yoi",
                "yok",
                "yol",
                "yom",
                "yon",
                "yos",
                "yot",
                "yox",
                "yoy",
                "ypa",
                "ypb",
                "ypg",
                "yph",
                "ypk",
                "ypm",
                "ypn",
                "ypo",
                "ypp",
                "ypz",
                "yra",
                "yrb",
                "yre",
                "yri",
                "yrk",
                "yrl",
                "yrm",
                "yrn",
                "yro",
                "yrs",
                "yrw",
                "yry",
                "ysc",
                "ysd",
                "ysg",
                "ysl",
                "ysn",
                "yso",
                "ysp",
                "ysr",
                "yss",
                "ysy",
                "yta",
                "ytl",
                "ytp",
                "ytw",
                "yty",
                "yua",
                "yub",
                "yuc",
                "yud",
                "yue",
                "yuf",
                "yug",
                "yui",
                "yuj",
                "yuk",
                "yul",
                "yum",
                "yun",
                "yup",
                "yuq",
                "yur",
                "yut",
                "yuu",
                "yuw",
                "yux",
                "yuy",
                "yuz",
                "yva",
                "yvt",
                "ywa",
                "ywg",
                "ywl",
                "ywn",
                "ywq",
                "ywr",
                "ywt",
                "ywu",
                "yww",
                "yxa",
                "yxg",
                "yxl",
                "yxm",
                "yxu",
                "yxy",
                "yyr",
                "yyu",
                "yyz",
                "yzg",
                "yzk",
                "zaa",
                "zab",
                "zac",
                "zad",
                "zae",
                "zaf",
                "zag",
                "zah",
                "zai",
                "zaj",
                "zak",
                "zal",
                "zam",
                "zao",
                "zap",
                "zaq",
                "zar",
                "zas",
                "zat",
                "zau",
                "zav",
                "zaw",
                "zax",
                "zay",
                "zaz",
                "zba",
                "zbc",
                "zbe",
                "zbl",
                "zbt",
                "zbw",
                "zca",
                "zch",
                "zdj",
                "zea",
                "zeg",
                "zeh",
                "zen",
                "zga",
                "zgb",
                "zgh",
                "zgm",
                "zgn",
                "zgr",
                "zhb",
                "zhd",
                "zhi",
                "zhn",
                "zhw",
                "zhx",
                "zia",
                "zib",
                "zik",
                "zil",
                "zim",
                "zin",
                "zir",
                "ziw",
                "ziz",
                "zka",
                "zkb",
                "zkd",
                "zkg",
                "zkh",
                "zkk",
                "zkn",
                "zko",
                "zkp",
                "zkr",
                "zkt",
                "zku",
                "zkv",
                "zkz",
                "zle",
                "zlj",
                "zlm",
                "zln",
                "zlq",
                "zls",
                "zlw",
                "zma",
                "zmb",
                "zmc",
                "zmd",
                "zme",
                "zmf",
                "zmg",
                "zmh",
                "zmi",
                "zmj",
                "zmk",
                "zml",
                "zmm",
                "zmn",
                "zmo",
                "zmp",
                "zmq",
                "zmr",
                "zms",
                "zmt",
                "zmu",
                "zmv",
                "zmw",
                "zmx",
                "zmy",
                "zmz",
                "zna",
                "znd",
                "zne",
                "zng",
                "znk",
                "zns",
                "zoc",
                "zoh",
                "zom",
                "zoo",
                "zoq",
                "zor",
                "zos",
                "zpa",
                "zpb",
                "zpc",
                "zpd",
                "zpe",
                "zpf",
                "zpg",
                "zph",
                "zpi",
                "zpj",
                "zpk",
                "zpl",
                "zpm",
                "zpn",
                "zpo",
                "zpp",
                "zpq",
                "zpr",
                "zps",
                "zpt",
                "zpu",
                "zpv",
                "zpw",
                "zpx",
                "zpy",
                "zpz",
                "zqe",
                "zra",
                "zrg",
                "zrn",
                "zro",
                "zrp",
                "zrs",
                "zsa",
                "zsk",
                "zsl",
                "zsm",
                "zsr",
                "zsu",
                "zte",
                "ztg",
                "ztl",
                "ztm",
                "ztn",
                "ztp",
                "ztq",
                "zts",
                "ztt",
                "ztu",
                "ztx",
                "zty",
                "zua",
                "zuh",
                "zum",
                "zun",
                "zuy",
                "zwa",
                "zxx",
                "zyb",
                "zyg",
                "zyj",
                "zyn",
                "zyp",
                "zza",
                "zzj",
            ],
            n = [
                "adlm",
                "afak",
                "aghb",
                "ahom",
                "arab",
                "aran",
                "armi",
                "armn",
                "avst",
                "bali",
                "bamu",
                "bass",
                "batk",
                "beng",
                "bhks",
                "blis",
                "bopo",
                "brah",
                "brai",
                "bugi",
                "buhd",
                "cakm",
                "cans",
                "cari",
                "cham",
                "cher",
                "chrs",
                "cirt",
                "copt",
                "cpmn",
                "cprt",
                "cyrl",
                "cyrs",
                "deva",
                "diak",
                "dogr",
                "dsrt",
                "dupl",
                "egyd",
                "egyh",
                "egyp",
                "elba",
                "elym",
                "ethi",
                "geok",
                "geor",
                "glag",
                "gong",
                "gonm",
                "goth",
                "gran",
                "grek",
                "gujr",
                "guru",
                "hanb",
                "hang",
                "hani",
                "hano",
                "hans",
                "hant",
                "hatr",
                "hebr",
                "hira",
                "hluw",
                "hmng",
                "hmnp",
                "hrkt",
                "hung",
                "inds",
                "ital",
                "jamo",
                "java",
                "jpan",
                "jurc",
                "kali",
                "kana",
                "khar",
                "khmr",
                "khoj",
                "kitl",
                "kits",
                "knda",
                "kore",
                "kpel",
                "kthi",
                "lana",
                "laoo",
                "latf",
                "latg",
                "latn",
                "leke",
                "lepc",
                "limb",
                "lina",
                "linb",
                "lisu",
                "loma",
                "lyci",
                "lydi",
                "mahj",
                "maka",
                "mand",
                "mani",
                "marc",
                "maya",
                "medf",
                "mend",
                "merc",
                "mero",
                "mlym",
                "modi",
                "mong",
                "moon",
                "mroo",
                "mtei",
                "mult",
                "mymr",
                "nand",
                "narb",
                "nbat",
                "newa",
                "nkdb",
                "nkgb",
                "nkoo",
                "nshu",
                "ogam",
                "olck",
                "orkh",
                "orya",
                "osge",
                "osma",
                "palm",
                "pauc",
                "perm",
                "phag",
                "phli",
                "phlp",
                "phlv",
                "phnx",
                "piqd",
                "plrd",
                "prti",
                "rjng",
                "rohg",
                "roro",
                "runr",
                "samr",
                "sara",
                "sarb",
                "saur",
                "sgnw",
                "shaw",
                "shrd",
                "shui",
                "sidd",
                "sind",
                "sinh",
                "sogd",
                "sogo",
                "sora",
                "soyo",
                "sund",
                "sylo",
                "syrc",
                "syre",
                "syrj",
                "syrn",
                "tagb",
                "takr",
                "tale",
                "talu",
                "taml",
                "tang",
                "tavt",
                "telu",
                "teng",
                "tfng",
                "tglg",
                "thaa",
                "thai",
                "tibt",
                "tirh",
                "toto",
                "ugar",
                "vaii",
                "visp",
                "wara",
                "wcho",
                "wole",
                "xpeo",
                "xsux",
                "yezi",
                "yiii",
                "zanb",
                "zinh",
                "zmth",
                "zsye",
                "zsym",
                "zxxx",
                "zyyy",
                "zzzz",
                "142",
                "143",
                "145",
                "150",
                "151",
                "154",
                "155",
                "202",
                "419",
                "aa",
                "ac",
                "ad",
                "ae",
                "af",
                "ag",
                "ai",
                "al",
                "am",
                "an",
                "ao",
                "aq",
                "ar",
                "as",
                "at",
                "au",
                "aw",
                "ax",
                "az",
                "ba",
                "bb",
                "bd",
                "be",
                "bf",
                "bg",
                "bh",
                "bi",
                "bj",
                "bl",
                "bm",
                "bn",
                "bo",
                "bq",
                "br",
                "bs",
                "bt",
                "bu",
                "bv",
                "bw",
                "by",
                "bz",
                "ca",
                "cc",
                "cd",
                "cf",
                "cg",
                "ch",
                "ci",
                "ck",
                "cl",
                "cm",
                "cn",
                "co",
                "cp",
                "cr",
                "cs",
                "cu",
                "cv",
                "cw",
                "cx",
                "cy",
                "cz",
                "dd",
                "de",
                "dg",
                "dj",
                "dk",
                "dm",
                "do",
                "dz",
                "ea",
                "ec",
                "ee",
                "eg",
                "eh",
                "er",
                "es",
                "et",
                "eu",
                "ez",
                "fi",
                "fj",
                "fk",
                "fm",
                "fo",
                "fr",
                "fx",
                "ga",
                "gb",
                "gd",
                "ge",
                "gf",
                "gg",
                "gh",
                "gi",
                "gl",
                "gm",
                "gn",
                "gp",
                "gq",
                "gr",
                "gs",
                "gt",
                "gu",
                "gw",
                "gy",
                "hk",
                "hm",
                "hn",
                "hr",
                "ht",
                "hu",
                "ic",
                "id",
                "ie",
                "il",
                "im",
                "in",
                "io",
                "iq",
                "ir",
                "is",
                "it",
                "je",
                "jm",
                "jo",
                "jp",
                "ke",
                "kg",
                "kh",
                "ki",
                "km",
                "kn",
                "kp",
                "kr",
                "kw",
                "ky",
                "kz",
                "la",
                "lb",
                "lc",
                "li",
                "lk",
                "lr",
                "ls",
                "lt",
                "lu",
                "lv",
                "ly",
                "ma",
                "mc",
                "md",
                "me",
                "mf",
                "mg",
                "mh",
                "mk",
                "ml",
                "mm",
                "mn",
                "mo",
                "mp",
                "mq",
                "mr",
                "ms",
                "mt",
                "mu",
                "mv",
                "mw",
                "mx",
                "my",
                "mz",
                "na",
                "nc",
                "ne",
                "nf",
                "ng",
                "ni",
                "nl",
                "no",
                "np",
                "nr",
                "nt",
                "nu",
                "nz",
                "om",
                "pa",
                "pe",
                "pf",
                "pg",
                "ph",
                "pk",
                "pl",
                "pm",
                "pn",
                "pr",
                "ps",
                "pt",
                "pw",
                "py",
                "qa",
                "re",
                "ro",
                "rs",
                "ru",
                "rw",
                "sa",
                "sb",
                "sc",
                "sd",
                "se",
                "sg",
                "sh",
                "si",
                "sj",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sr",
                "ss",
                "st",
                "su",
                "sv",
                "sx",
                "sy",
                "sz",
                "ta",
                "tc",
                "td",
                "tf",
                "tg",
                "th",
                "tj",
                "tk",
                "tl",
                "tm",
                "tn",
                "to",
                "tp",
                "tr",
                "tt",
                "tv",
                "tw",
                "tz",
                "ua",
                "ug",
                "um",
                "un",
                "us",
                "uy",
                "uz",
                "va",
                "vc",
                "ve",
                "vg",
                "vi",
                "vn",
                "vu",
                "wf",
                "ws",
                "yd",
                "ye",
                "yt",
                "yu",
                "za",
                "zm",
                "zr",
                "zw",
                "zz",
                "001",
                "002",
                "003",
                "005",
                "009",
                "011",
                "013",
                "014",
                "015",
                "017",
                "018",
                "019",
                "021",
                "029",
                "030",
                "034",
                "035",
                "039",
                "053",
                "054",
                "057",
                "061",
                "1901",
                "1994",
                "1996",
                "1606nict",
                "1694acad",
                "1959acad",
                "abl1943",
                "akuapem",
                "alalc97",
                "aluku",
                "ao1990",
                "aranes",
                "arevela",
                "arevmda",
                "asante",
                "auvern",
                "baku1926",
                "balanka",
                "barla",
                "basiceng",
                "bauddha",
                "biscayan",
                "biske",
                "bohoric",
                "boont",
                "bornholm",
                "cisaup",
                "colb1945",
                "cornu",
                "creiss",
                "dajnko",
                "ekavsk",
                "emodeng",
                "fonipa",
                "fonkirsh",
                "fonnapa",
                "fonupa",
                "fonxsamp",
                "gascon",
                "grclass",
                "grital",
                "grmistr",
                "hepburn",
                "heploc",
                "hognorsk",
                "hsistemo",
                "ijekavsk",
                "itihasa",
                "ivanchov",
                "jauer",
                "jyutping",
                "kkcor",
                "kociewie",
                "kscor",
                "laukika",
                "lemosin",
                "lengadoc",
                "lipaw",
                "luna1918",
                "metelko",
                "monoton",
                "ndyuka",
                "nedis",
                "newfound",
                "nicard",
                "njiva",
                "nulik",
                "osojs",
                "oxendict",
                "pahawh2",
                "pahawh3",
                "pahawh4",
                "pamaka",
                "peano",
                "petr1708",
                "pinyin",
                "polyton",
                "provenc",
                "puter",
                "rigik",
                "rozaj",
                "rumgr",
                "scotland",
                "scouse",
                "simple",
                "solba",
                "sotav",
                "spanglis",
                "surmiran",
                "sursilv",
                "sutsilv",
                "tarask",
                "tongyong",
                "tunumiit",
                "uccor",
                "ucrcor",
                "ulster",
                "unifon",
                "vaidika",
                "valencia",
                "vallader",
                "vecdruka",
                "vivaraup",
                "wadegile",
                "xsistemo",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "aed",
                "aen",
                "afb",
                "afg",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "ase",
                "asf",
                "asp",
                "asq",
                "asw",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "bfi",
                "bfk",
                "bjn",
                "bog",
                "bqn",
                "bqy",
                "btj",
                "bve",
                "bvl",
                "bvu",
                "bzs",
                "cdo",
                "cds",
                "cjy",
                "cmn",
                "cnp",
                "coa",
                "cpx",
                "csc",
                "csd",
                "cse",
                "csf",
                "csg",
                "csl",
                "csn",
                "csp",
                "csq",
                "csr",
                "czh",
                "czo",
                "doq",
                "dse",
                "dsl",
                "dup",
                "ecs",
                "esl",
                "esn",
                "eso",
                "eth",
                "fcs",
                "fse",
                "fsl",
                "fss",
                "gan",
                "gds",
                "gom",
                "gse",
                "gsg",
                "gsm",
                "gss",
                "gus",
                "hab",
                "haf",
                "hak",
                "hds",
                "hji",
                "hks",
                "hos",
                "hps",
                "hsh",
                "hsl",
                "hsn",
                "icl",
                "iks",
                "ils",
                "inl",
                "ins",
                "ise",
                "isg",
                "isr",
                "jak",
                "jax",
                "jcs",
                "jhs",
                "jls",
                "jos",
                "jsl",
                "jus",
                "kgi",
                "knn",
                "kvb",
                "kvk",
                "kvr",
                "kxd",
                "lbs",
                "lce",
                "lcf",
                "liw",
                "lls",
                "lsg",
                "lsl",
                "lsn",
                "lso",
                "lsp",
                "lst",
                "lsv",
                "lsy",
                "ltg",
                "lvs",
                "lws",
                "lzh",
                "max",
                "mdl",
                "meo",
                "mfa",
                "mfb",
                "mfs",
                "min",
                "mnp",
                "mqg",
                "mre",
                "msd",
                "msi",
                "msr",
                "mui",
                "mzc",
                "mzg",
                "mzy",
                "nan",
                "nbs",
                "ncs",
                "nsi",
                "nsl",
                "nsp",
                "nsr",
                "nzs",
                "okl",
                "orn",
                "ors",
                "pel",
                "pga",
                "pgz",
                "pks",
                "prl",
                "prz",
                "psc",
                "psd",
                "pse",
                "psg",
                "psl",
                "pso",
                "psp",
                "psr",
                "pys",
                "rms",
                "rsi",
                "rsl",
                "rsm",
                "sdl",
                "sfb",
                "sfs",
                "sgg",
                "sgx",
                "shu",
                "slf",
                "sls",
                "sqk",
                "sqs",
                "ssh",
                "ssp",
                "ssr",
                "svk",
                "swc",
                "swh",
                "swl",
                "syy",
                "szs",
                "tmw",
                "tse",
                "tsm",
                "tsq",
                "tss",
                "tsy",
                "tza",
                "ugn",
                "ugy",
                "ukl",
                "uks",
                "urk",
                "uzn",
                "uzs",
                "vgt",
                "vkk",
                "vkt",
                "vsi",
                "vsl",
                "vsv",
                "wbs",
                "wuu",
                "xki",
                "xml",
                "xmm",
                "xms",
                "yds",
                "ygs",
                "yhs",
                "ysl",
                "yue",
                "zib",
                "zlm",
                "zmi",
                "zsl",
                "zsm",
            ];
        e.find("html:not([lang])").each(function (e, t) {
            a11ycheck.engine.fn.addPagewideIcon("language_missing");
        }),
            e.find("[lang]").each(function (e, a) {
                var i = !1,
                    r = a.getAttribute("lang").toLowerCase();
                if (r.indexOf("-") > -1) {
                    var s = r.split("-")[0];
                    t.includes(s) || (i = !0);
                    var o = r.split("-")[1];
                    n.includes(o) || (i = !0);
                } else t.includes(r) || (i = !0);
                i && ("HTML" == a.nodeName ? a11ycheck.engine.fn.addPagewideIcon("language_missing", r) : a11ycheck.engine.fn.addIcon(a, "language_missing", r));
            });
    }),
    (a11ycheck.rules.meta_refresh = function (e) {
        e.find('meta[http-equiv="refresh"]').each(function (e, t) {
            a11ycheck.engine.fn.addPagewideIcon("meta_refresh");
        });
    }),
    (a11ycheck.rules.heading_empty = function (e) {
        e.find(":header").each(function (e, t) {
            a11ycheck.engine.fn.hasTextContent(t) || a11ycheck.engine.fn.addIcon(t, "heading_empty");
        });
    }),
    (a11ycheck.rules.button_empty = function (e) {
        a11ycheck.engine.fn.overrideby("button_empty", ["alt_link_missing", "aria_label"]),
            e
                .find("button:not([type='reset']", "[role='button']")
                .not("[title!=''][title]")
                .each(function (e, t) {
                    a11ycheck.engine.fn.hasTextContent(t) || a11ycheck.engine.fn.addIcon(t, "button_empty");
                }),
            e
                .find("input[type='submit'], input[type='button'], input[type='reset']")
                .not("[title!=''][title]")
                .each(function (e, t) {
                    var n = t.getAttribute("value");
                    (!n || (n && 0 === n.length)) && a11ycheck.engine.fn.addIcon(t, "button_empty");
                });
    }),
    (a11ycheck.rules.link_empty = function (e) {
        a11ycheck.engine.fn.overrideby("link_empty", ["alt_link_missing", "aria_label"]),
            e
                .find("a[href]")
                .not("[title!=''][title]")
                .not("#wave5codetoggle a")
                .each(function (t, n) {
                    0 != e.find(n).find("img").length || a11ycheck.engine.fn.hasTextContent(n) || a11ycheck.engine.fn.addIcon(n, "link_empty");
                });
    }),
    (a11ycheck.rules.link_skip_broken = function (e) {
        a11ycheck.engine.fn.override("link_skip_broken", ["link_skip", "link_internal_broken"]);
        e.find("a[href^='#']").each(function (t, n) {
            var a = !1,
                i = n.getAttribute("href");
            if ("#" === i) return !1;
            if (
                -1 !==
                $(n)
                    .text()
                    .search(/^(skip|jump).*/gi)
            ) {
                if ("none" == $(n).css("display") || "hidden" == $(n).css("visibility")) a = !0;
                else {
                    var r = i.replace("#", "");
                    0 === e.find('[id="' + r + '"]').length && 0 === e.find('a[name="' + r + '"]').length && (a = !0);
                }
                a && a11ycheck.engine.fn.addIcon(n, "link_skip_broken");
            }
        });
    }),
    (a11ycheck.rules.th_empty = function (e) {
        e.find("th").each(function (e, t) {
            a11ycheck.engine.fn.hasTextContent(t) || a11ycheck.engine.fn.addIcon(t, "th_empty");
        });
    }),
    (a11ycheck.rules.blink = function (e) {
        e.find("p, span, div, td, th, dd, ul, ol, h1, h2, h3, h4, h5, h6, blink").each(function (e, t) {
            var n = t.getAttribute("style"),
                a = new RegExp("s*text-decorations*:s*blinks*");
            n && a.test(n) && a11ycheck.engine.fn.addIcon(t, "blink");
        }),
            e.find("blink").each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "blink");
            });
    }),
    (a11ycheck.rules.marquee = function (e) {
        e.find("marquee").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "marquee");
        });
    }),
    (a11ycheck.rules.contrast = function (e) {
        for (var t in (a11ycheck.engine.fn.calculateContrast(), a11ycheck.engine.contrast)) a11ycheck.engine.fn.addIcon(a11ycheck.engine.contrast[t].element, "contrast", a11ycheck.engine.contrast[t].contrastData);
    }),
    (a11ycheck.rules.alt_redundant = function (e) {
        a11ycheck.engine.fn.override("alt_redundant", ["alt"]),
            a11ycheck.engine.fn.overrideby("alt_redundant", ["alt_suspicious"]),
            e.find("img:not([alt=''])[alt]").each(function (e, t) {
                var n = t.getAttribute("alt");
                if (!((n && n.length > 0 && -1 !== n.search(/^ +$/i)) || (n && n.length < 3))) {
                    for (var a = "", i = t; a.length < 15; )
                        if ((i.nodeType == i.TEXT_NODE && (a += i.nodeValue.toLowerCase()), i.lastChild)) i = i.lastChild;
                        else if (i.previousSibling) i = i.previousSibling;
                        else {
                            if (!i.parentNode || !i.parentNode.previousSibling) break;
                            i = i.parentNode.previousSibling;
                        }
                    var r = "";
                    for (i = t; r.length < 15; )
                        if ((i.nodeType == i.TEXT_NODE && (r += i.nodeValue.toLowerCase()), i.firstChild)) i = i.firstChild;
                        else if (i.nextSibling) i = i.nextSibling;
                        else {
                            if (!i.parentNode || !i.parentNode.nextSibling) break;
                            i = i.parentNode.nextSibling;
                        }
                    (a = a.substring(a.length - 15 - n.toLowerCase().length, a.length - 1)),
                        (r = r.substring(0, 14 + n.toLowerCase().length)),
                        (-1 == a.indexOf(n.toLowerCase()) && -1 == r.indexOf(n.toLowerCase())) || a11ycheck.engine.fn.addIcon(t, "alt_redundant", n);
                }
            });
    }),
    (a11ycheck.rules.alt_suspicious = function (e) {
        a11ycheck.engine.fn.override("alt_suspicious", ["alt", "alt_redundant"]),
            e.find("img[alt]").each(function (e, t) {
                var n = t.getAttribute("alt");
                n &&
                    n.length > 0 &&
                    (-1 !== n.search(/^(image|graphic|photo|photograph|drawing|painting|artwork|logo|bullet|button|arrow|more|spacer|blank|chart|table|diagram|graph|\*)$/i) ||
                        -1 !== n.search(/(^(graphic of|bullet|image of).*)|(.*(image|graphic)$)|(^ +$)|.*(\.png|\.gif|\.jpeg|\.jpg|\.bmp)$/i)) &&
                    a11ycheck.engine.fn.addIcon(t, "alt_suspicious", n);
            });
    }),
    (a11ycheck.rules.alt_duplicate = function (e) {
        a11ycheck.engine.fn.override("alt_duplicate", ["alt", "alt_missing"]);
        for (var t = e.find("img, input[type='image']"), n = 0; n < t.length; n++)
            if (t[n].hasAttribute("alt") && "" != t[n].getAttribute("alt") && $(t[n]).is(":visible"))
                for (j = n + 1; j <= n + 2 && j < t.length; j++)
                    if (
                        t[j].hasAttribute("alt") &&
                        t[j].getAttribute("alt").toLowerCase() == t[n].getAttribute("alt").toLowerCase() &&
                        t[j].getAttribute("src").toLowerCase() !== t[n].getAttribute("src").toLowerCase() &&
                        $(t[j]).is(":visible")
                    ) {
                        a11ycheck.engine.fn.addIcon(t[j], "alt_duplicate", t[j].getAttribute("alt"));
                        break;
                    }
    }),
    (a11ycheck.rules.alt_long = function (e) {
        e.find("img[alt]").each(function (e, t) {
            var n = t.getAttribute("alt");
            n && n.length > 100 && a11ycheck.engine.fn.addIcon(t, "alt_long");
        });
    }),
    (a11ycheck.rules.image_title = function (e) {
        e.find("img[title!=''][title]").each(function (e, t) {
            if (!t.getAttribute("alt") || 0 == t.getAttribute("alt").length) {
                var n = t.getAttribute("title");
                a11ycheck.engine.fn.addIcon(t, "image_title", n);
            }
        });
    }),
    (a11ycheck.rules.label_orphaned = function (e) {
        a11ycheck.engine.fn.overrideby("label_orphaned", ["label_empty"]),
            e.find("label").each(function (t, n) {
                var a = e.find(n).children("input, select, textarea"),
                    i = n.getAttribute("for");
                0 == a.length && i && 0 == e.find("input[id='" + i + "'], select[id='" + i + "'], textarea[id='" + i + "']").length && a11ycheck.engine.fn.addIcon(n, "label_orphaned");
            });
    }),
    (a11ycheck.rules.fieldset_missing = function (e) {
        var t = {};
        for (var n in (e
            .find("body")
            .find("input[name]:checkbox, input[name]:radio")
            .not("fieldset input, [role=radiogroup]")
            .each(function (e, n) {
                var a = n.getAttribute("name");
                null == t[a] && (t[a] = []), t[a].length < 2 && t[a].push(n);
            }),
        t))
            if (2 == t[n].length) {
                var a = t[n][0].getAttribute("id"),
                    i = e.find(t[n][0]).closest("label");
                if (i.length > 0) a11ycheck.engine.fn.addIcon(i.get(0), "fieldset_missing");
                else if (a) {
                    var r = e.find("[for='" + a + "']").filter("label");
                    r.length > 0 && a11ycheck.engine.fn.addIcon(r.get(0), "fieldset_missing");
                } else a11ycheck.engine.fn.addIcon(t[n][0], "fieldset_missing");
            }
    }),
    (a11ycheck.rules.legend_missing = function (e) {
        a11ycheck.engine.fn.override("legend_missing", ["fieldset"]),
            e.find("fieldset").each(function (t, n) {
                0 === e.find(n).find("legend").length && a11ycheck.engine.fn.addIcon(n, "legend_missing");
            });
    }),
    (a11ycheck.rules.label_title = function (e) {
        e.find("input[title]:not([type=image],[type=submit],[type=Submit],[type=SUBMIT],[type=reset],[type=Reset],[type=button],[type=hidden],[type=HIDDEN]), select[title], textarea[title]").each(function (t, n) {
            n.getAttribute("aria-labelledby") || a11ycheck.engine.fn.isLabeledByTag(n, e) || a11ycheck.engine.fn.addIcon(n, "label_title");
        });
    }),
    (a11ycheck.rules.heading_missing = function (e) {
        a11ycheck.engine.fn.override("heading_missing", ["h1_missing"]), 0 === e.find(":header").length && a11ycheck.engine.fn.addPagewideIcon("heading_missing");
    }),
    (a11ycheck.rules.region_missing = function (e) {
        0 === e.find("header, nav, main, footer, aside, [role=banner], [role=navigation], [role=main], [role=contentinfo]").length && a11ycheck.engine.fn.addPagewideIcon("region_missing");
    }),
    (a11ycheck.rules.h1_missing = function (e) {
        a11ycheck.engine.fn.overrideby("h1_missing", ["heading_missing"]), 0 === e.find("h1").length && a11ycheck.engine.fn.addPagewideIcon("h1_missing");
    }),
    (a11ycheck.rules.heading_skipped = function (e) {
        var t = 0,
            n = 0;
        e.find(":header").each(function (e, a) {
            (n = Number(a.nodeName[1])), 0 != t && t - n < -1 && a11ycheck.engine.fn.addIcon(a, "heading_skipped"), (t = n);
        });
    }),
    (a11ycheck.rules.heading_possible = function (e) {
        e.find("p").each(function (t, n) {
            var a = e.find(n),
                i = parseInt(a.css("font-size"), 10);
            a.text().length < 50 && (i > 20 || (i > 16 && (a.css("font-weight") >= 700 || "italic" == a.css("font-style")))) && a11ycheck.engine.fn.addIcon(n, "heading_possible");
        });
    }),
    (a11ycheck.rules.table_caption_possible = function (e) {
        e.find("table").each(function (t, n) {
            var a = e.find(n);
            if (a.find("th").length > 0 && 0 == a.find("caption").length) {
                var i = a.prev("p"),
                    r = a.find("td");
                if (r.length > 0) {
                    var s = r.get(0).getAttribute("colspan");
                    if (s && s >= 3) a11ycheck.engine.fn.addIcon(r.get(0), "table_caption_possible");
                    else if (i.length > 0) {
                        var o = i.text();
                        o.length < 50
                            ? a11ycheck.engine.fn.addIcon(i.get(0), "table_caption_possible")
                            : o.length < 100 && i.css("font-weight") >= 700 && "center" == i.css("text-align") && a11ycheck.engine.fn.addIcon(i.get(0), "table_caption_possible");
                    }
                }
            }
        });
    }),
    (a11ycheck.rules.list_possible = function (e) {
        (match = ""),
            e.find("p").each(function (e, t) {
                var n = $(t).text().substr(0, 2);
                if (n != match && ((match = n), 0 == n.search(/^(\*\s|\-\s|\-|1\.|a\.|1\)|a\))/))) {
                    0 ==
                        $(t)
                            .next()
                            .text()
                            .search(/^(\*\s|\-\s|\-|2\.|b\.|2\)|b\))/) && a11ycheck.engine.fn.addIcon(t, "list_possible");
                    var a = $(t)
                        .html()
                        .split(/<br\s*.*\/?>[\n\r]*\s*/gi);
                    a[1] && 0 == a[1].search(/^(\*\s|\-\s|\-|2\.|b\.|2\)|b\))/) && a11ycheck.engine.fn.addIcon(t, "list_possible");
                }
            });
    }),
    (a11ycheck.rules.link_internal_broken = function (e) {
        a11ycheck.engine.fn.overrideby("link_internal_broken", ["link_skip_broken"]),
            e
                .find("a[href^='#']")
                .not("a[href^='#/']")
                .each(function (t, n) {
                    var a = n.getAttribute("href"),
                        i = a.replace("#", "");
                    a[0] && "#" != a && 0 === e.find('[id="' + i + '"]').length && 0 === e.find('a[name="' + i + '"]').length && a11ycheck.engine.fn.addIcon(n, "link_internal_broken");
                });
    }),
    (a11ycheck.rules.link_suspicious = function (e) {
        e.find("a[href]").each(function (t, n) {
            var a = e.find(n).text();
            !a || (-1 === a.search(/(click)/i) && -1 === a.search(/^(here|more|more\.\.\.|details|more details|link|this page|continue|continue reading|read more|button)$/i)) || a11ycheck.engine.fn.addIcon(n, "link_suspicious");
        });
    }),
    (a11ycheck.rules.link_redundant = function (e) {
        var t = null;
        e.find("a[href]:not(a[href^='#'])").each(function (e, n) {
            t && t.search(/^\s*$/i) && t == n.getAttribute("href") ? ((t = n.getAttribute("href")), a11ycheck.engine.fn.addIcon(n, "link_redundant")) : (t = n.getAttribute("href"));
        });
    }),
    (a11ycheck.rules.link_word = function (e) {
        e.find("a[href]").each(function (e, t) {
            var n = t.getAttribute("href");
            n && -1 !== n.search(/(\.doc|\.docx)$/i) && a11ycheck.engine.fn.addIcon(t, "link_word");
        });
    }),
    (a11ycheck.rules.link_excel = function (e) {
        e.find("a[href]").each(function (e, t) {
            var n = t.getAttribute("href");
            n && -1 !== n.search(/(\.xls|\.xlsx)$/i) && a11ycheck.engine.fn.addIcon(t, "link_excel");
        });
    }),
    (a11ycheck.rules.link_powerpoint = function (e) {
        e.find("a[href]").each(function (e, t) {
            var n = t.getAttribute("href");
            n && -1 !== n.search(/(\.ppt|\.pptx|\.pps|\.ppsx)$/i) && a11ycheck.engine.fn.addIcon(t, "link_powerpoint");
        });
    }),
    (a11ycheck.rules.link_pdf = function (e) {
        e.find("a[href]").each(function (e, t) {
            var n = t.getAttribute("href");
            n && -1 !== n.search(/(\.pdf)$/i) && a11ycheck.engine.fn.addIcon(t, "link_pdf");
        });
    }),
    (a11ycheck.rules.link_document = function (e) {
        e.find("a[href]").each(function (e, t) {
            var n = t.getAttribute("href");
            n && -1 !== n.search(/(\.rtf|\.wpd|\.ods|\.odt|\.odp|\.sxw|\.sxc|\.sxd|\.sxi|\.pages|\.key)$/i) && a11ycheck.engine.fn.addIcon(t, "link_document");
        });
    }),
    (a11ycheck.rules.audio_video = function (e) {
        a11ycheck.engine.fn.override("audio_video", ["plugin"]),
            e.find("embed").each(function (e, t) {
                var n = t.getAttribute("src");
                n && -1 !== n.search(/(\.mov|\.asx|\.wvx|\.wax|\.wmv|\.wma|\.ram|\.rpm|\.ra|\.rm)$/i) && a11ycheck.engine.fn.addIcon(t, "audio_video");
            }),
            e
                .find(
                    "embed[type='video/quicktime'], object[classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B'], embed[type='application/x-mplayer2'], object[classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95'], object[classid='clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6'], embed[type='audio/x-pn-realaudio-plugin'], object[classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA']"
                )
                .each(function (e, t) {
                    a11ycheck.engine.fn.addIcon(t, "audio_video");
                }),
            e.find("a[href]").each(function (e, t) {
                var n = t.getAttribute("href");
                n &&
                    -1 !== n.search(/(\.3gp|\.aif|\.aiff|\.asf|\.asx|\.avi|\.flv|\.m4a|\.m4p|\.mov|\.mp2|\.mp3|\.mp4|\.mpa|\.mpeg|\.mpeg2|\.mpg|\.mpv|\.ogg|\.ogv|\.qtl|\.ra|\.ram|\.smi|\.smil|\.wav|\.wax|\.webm|\.wma|\.wmp|\.wmx)$/i) &&
                    a11ycheck.engine.fn.addIcon(t, "audio_video");
            });
    }),
    (a11ycheck.rules.flash = function (e) {
        a11ycheck.engine.fn.override("flash", ["plugin"]),
            e.find("embed[src], embed[type='application/x-shockwave-flash']").each(function (e, t) {
                var n = t.getAttribute("src");
                if (n && -1 !== n.search(/(\.swf)$/i)) a11ycheck.engine.fn.addIcon(t, "flash");
                else {
                    var a = t.getAttribute("type");
                    a && "application/x-shockwave-flash" === a && a11ycheck.engine.fn.addIcon(t, "flash");
                }
            }),
            e.find("object[type='application/x-shockwave-flash'], object[classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'], object[classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000']").each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "flash");
            });
    }),
    (a11ycheck.rules.applet = function (e) {
        e.find("applet").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "applet");
        });
    }),
    (a11ycheck.rules.plugin = function (e) {
        a11ycheck.engine.fn.overrideby("plugin", ["flash", "audio_video"]),
            e.find("object,embed").each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "plugin");
            });
    }),
    (a11ycheck.rules.noscript = function (e) {
        e.find("noscript").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "noscript");
        });
    }),
    (a11ycheck.rules.event_handler = function (e) {
        e.find("[onmouseover],[onclick],[ondblclick]").each(function (e, t) {
            var n = t.getAttribute("onmouseover"),
                a = t.getAttribute("onfocus"),
                i = t.getAttribute("onclick"),
                r = t.getAttribute("ondblclick"),
                s = t.nodeName.toLowerCase(),
                o = t.getAttribute("tabindex");
            n && !a
                ? a11ycheck.engine.fn.addIcon(t, "event_handler")
                : r
                ? a11ycheck.engine.fn.addIcon(t, "event_handler")
                : i && "a" !== s && "input" !== s && "button" !== s && "select" !== s && "option" !== s && "textarea" !== s && ((o && "0" === o) || a11ycheck.engine.fn.addIcon(t, "event_handler"));
        });
    }),
    (a11ycheck.rules.javascript_jumpmenu = function (e) {
        e.find("select[onchange]").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "javascript_jumpmenu");
        });
    }),
    (a11ycheck.rules.accesskey = function (e) {
        e.find("[accesskey]").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "accesskey", t.getAttribute("accesskey"));
        });
    }),
    (a11ycheck.rules.tabindex = function (e) {
        e.find("[tabindex]").each(function (e, t) {
            var n = t.getAttribute("tabindex");
            "NaN" !== Number(n) && Number(n) > 0 && a11ycheck.engine.fn.addIcon(t, "tabindex");
        });
    }),
    (a11ycheck.rules.text_small = function (e) {
        e.find("p, span, div, td, th, dd, ul, ol, h1, h2, h3, h4, h5, h6, font, i")
            .not(".wavehidden")
            .not("#spinner")
            .each(function (t, n) {
                var a = e.find(n);
                a11ycheck.engine.fn.elementHasText(n) && parseInt(a.css("font-size"), 10) <= 10 && a11ycheck.engine.fn.addIcon(n, "text_small");
            });
    }),
    (a11ycheck.rules.underline = function (e) {
        e.find("p, span, div, td, th, dd, li, u")
            .not("a u")
            .each(function (t, n) {
                var a = e.find(n);
                ("underline" != a.css("text-decoration") && "underline" != a.css("text-decoration-line")) || a11ycheck.engine.fn.addIcon(n, "underline");
            });
    }),
    (a11ycheck.rules.title_redundant = function (e) {
        e.find("[title]:not(img)").each(function (t, n) {
            var a = n.getAttribute("title");
            a && a.length > 0 && e.find(n).text() == a && a11ycheck.engine.fn.addIcon(n, "title_redundant");
        }),
            e.find("img[title]").each(function (e, t) {
                var n = t.getAttribute("title");
                n && n.length > 0 && t.getAttribute("alt") == n && a11ycheck.engine.fn.addIcon(t, "title_redundant");
            });
    }),
    (a11ycheck.rules.alt = function (e) {
        a11ycheck.engine.fn.overrideby("alt", ["alt_redundant", "alt_duplicate", "alt_link", "alt_spacer", "alt_map", "alt_suspicious"]),
            e.find("img[alt]").each(function (e, t) {
                var n = t.getAttribute("alt");
                n && n.length > 0 && n.length <= 100 && a11ycheck.engine.fn.addIcon(t, "alt", n);
            });
    }),
    (a11ycheck.rules.alt_null = function (e) {
        a11ycheck.engine.fn.overrideby("alt_null", ["alt_link_missing", "alt_spacer"]),
            e.find("img[alt='']").each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "alt_null");
            });
    }),
    (a11ycheck.rules.alt_spacer = function (e) {
        a11ycheck.engine.fn.override("alt_spacer", ["alt", "alt_missing", "alt_null"]),
            a11ycheck.engine.fn.overrideby("alt_spacer", ["alt_link_missing"]),
            e.find("img[alt='']").each(function (t, n) {
                if ("" == n.getAttribute("alt")) {
                    var a = e.find(n).css("height"),
                        i = e.find(n).css("width"),
                        r = Number(a.substring(0, a.length - 2)),
                        s = Number(i.substring(0, i.length - 2)),
                        o = n.getAttribute("src");
                    o && -1 !== (o = (o = (o = n.getAttribute("src").split("/"))[o.length - 1].split("\\"))[o.length - 1]).search(/^(spacer|space|blank)\..+$/i)
                        ? a11ycheck.engine.fn.addIcon(n, "alt_spacer")
                        : ((null !== r && r > 0 && r <= 3 && "auto" !== a) || (null !== s && s > 0 && s <= 3 && "auto" !== i)) && a11ycheck.engine.fn.addIcon(n, "alt_spacer");
                }
            });
    }),
    (a11ycheck.rules.alt_link = function (e) {
        a11ycheck.engine.fn.override("alt_link", ["alt", "alt_missing"]),
            e
                .find("a")
                .not("#wave5codetoggle a")
                .each(function (t, n) {
                    if (a11ycheck.engine.fn.hasTextContent(n)) {
                        var a = null;
                        e
                            .find(n)
                            .find("img[alt]")
                            .each(function (e, t) {
                                var n = t.getAttribute("alt");
                                if (n && n.length > 0) {
                                    if (null !== a) return void (a = null);
                                    a = t;
                                }
                            }),
                            null !== a && a11ycheck.engine.fn.addIcon(a, "alt_link", a.getAttribute("alt"));
                    }
                });
    }),
    (a11ycheck.rules.alt_input = function (e) {
        e.find("input[type='image'][alt]").each(function (e, t) {
            var n = t.getAttribute("alt");
            n && n.length > 0 && a11ycheck.engine.fn.addIcon(t, "alt_input", n);
        });
    }),
    (a11ycheck.rules.alt_map = function (e) {
        a11ycheck.engine.fn.override("alt_map", ["alt", "alt_missing"]),
            e.find("img[alt][usemap]").each(function (e, t) {
                var n = t.getAttribute("alt");
                n && n.length > 0 && -1 === n.search(/^ +$/i) ? a11ycheck.engine.fn.addIcon(t, "alt_map", n) : a11ycheck.engine.fn.addIcon(t, "alt_map");
            });
    }),
    (a11ycheck.rules.alt_area = function (e) {
        e.find("area").each(function (t, n) {
            var a = n.getAttribute("alt");
            if (a && -1 == a.search(/^\s*$/)) {
                var i = e.find(n).parents("map").get(0).getAttribute("name");
                e.find("img[usemap='#" + i + "']").each(function (e, t) {
                    a11ycheck.engine.fn.addIcon(t, "alt_area"), 0;
                });
            }
        });
    }),
    (a11ycheck.rules.longdesc = function (e) {
        a11ycheck.engine.fn.overrideby("longdesc", ["longdesc_invalid"]),
            e.find("[longdesc]").each(function (e, t) {
                var n = t.getAttribute("longdesc");
                a11ycheck.engine.fn.addIcon(t, "longdesc", n);
            });
    }),
    (a11ycheck.rules.figure = function (e) {
        e.find("figure").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "figure");
        });
    }),
    (a11ycheck.rules.label = function (e) {
        a11ycheck.engine.fn.overrideby("label", ["label_empty"]),
            e.find("label").each(function (t, n) {
                if (a11ycheck.engine.fn.hasTextContent(n)) {
                    var a = e.find(n).children("input, select, textarea"),
                        i = n.getAttribute("for");
                    a.length > 0 && a11ycheck.engine.fn.isLabeled(a[0], e)
                        ? a11ycheck.engine.fn.addIcon(n, "label")
                        : i && 1 == e.find("input[id='" + i + "'], select[id='" + i + "'], textarea[id='" + i + "']").length && a11ycheck.engine.fn.addIcon(n, "label");
                }
            });
    }),
    (a11ycheck.rules.fieldset = function (e) {
        a11ycheck.engine.fn.overrideby("fieldset", ["legend_missing"]),
            e.find("fieldset").each(function (t, n) {
                var a = e.find(n).find("legend");
                a11ycheck.engine.fn.addIcon(a.length > 0 ? a[0] : n, "fieldset");
            });
    }),
    (a11ycheck.rules.link_skip = function (e) {
        a11ycheck.engine.fn.overrideby("link_skip", ["link_skip_broken"]),
            e.find("a[href]").each(function (t, n) {
                var a = n.getAttribute("href");
                if (a && 0 != a.length && "#" == a[0] && "#" != a) {
                    var i = e.find(n);
                    if ("none" != i.css("display") && "hidden" != i.css("visibility")) var r = a.replace("#", "");
                    -1 !==
                        e
                            .find(n)
                            .text()
                            .search(/^(skip|jump).*/gi) &&
                        a &&
                        (e.find(a).length > 0 || e.find('[name="' + r + '"]').length > 0) &&
                        a11ycheck.engine.fn.addIcon(n, "link_skip");
                }
            });
    }),
    (a11ycheck.rules.link_skip_target = function (e) {
        e.find("a[href]").each(function (t, n) {
            var a = n.getAttribute("href");
            if (a && 0 != a.length && "#" == a[0] && "#" != a) {
                var i = e.find(n);
                if ("none" != i.css("display") && "hidden" != i.css("visibility")) var r = a.replace("#", "");
                -1 !==
                    e
                        .find(n)
                        .text()
                        .search(/^(skip|jump).*/gi) &&
                    (a && e.find(a).length > 0 && a11ycheck.engine.fn.addIcon(e.find(a).get(0), "link_skip_target"), e.find('[name="' + r + '"]').length > 0 && a11ycheck.engine.fn.addIcon(e.find('[name="' + r + '"]').get(0), "link_skip_target"));
            }
        });
    }),
    (a11ycheck.rules.lang = function (e) {
        a11ycheck.engine.fn.overrideby("lang", ["language_missing"]),
            e.find("[lang]").each(function (e, t) {
                var n = t.getAttribute("lang");
                n && n.length > 0 && ("HTML" == t.nodeName ? a11ycheck.engine.fn.addPagewideIcon("lang", n) : a11ycheck.engine.fn.addIcon(t, "lang", n));
            });
    }),
    (a11ycheck.rules.table_layout = function (e) {
        e.find("table").each(function (t, n) {
            if (0 == e.find(n).not(":has(table)").find("th").length) {
                var a = e.find(n).find("td");
                a.length > 0 ? a11ycheck.engine.fn.addIcon(a.get(0), "table_layout") : a11ycheck.engine.fn.addIcon(n, "table_layout");
            }
        });
    }),
    (a11ycheck.rules.table_data = function (e) {
        e.find("table").each(function (t, n) {
            e.find(n).not(":has(table)").find("th").length > 0 && a11ycheck.engine.fn.addIcon(n, "table_data");
        });
    }),
    (a11ycheck.rules.table_caption = function (e) {
        e.find("caption").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "table_caption");
        });
    }),
    (a11ycheck.rules.th = function (e) {
        e.find("th:not([scope])").each(function (e, t) {
            a11ycheck.engine.fn.hasTextContent(t) && a11ycheck.engine.fn.addIcon(t, "th");
        });
    }),
    (a11ycheck.rules.th_col = function (e) {
        e.find("th[scope='col']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "th_col");
        });
    }),
    (a11ycheck.rules.th_row = function (e) {
        e.find("th[scope='row']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "th_row");
        });
    }),
    (a11ycheck.rules.h1 = function (e) {
        e.find("h1").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "h1");
        });
    }),
    (a11ycheck.rules.h2 = function (e) {
        e.find("h2").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "h2");
        });
    }),
    (a11ycheck.rules.h3 = function (e) {
        e.find("h3").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "h3");
        });
    }),
    (a11ycheck.rules.h4 = function (e) {
        e.find("h4").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "h4");
        });
    }),
    (a11ycheck.rules.h5 = function (e) {
        e.find("h5").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "h5");
        });
    }),
    (a11ycheck.rules.h6 = function (e) {
        e.find("h6").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "h6");
        });
    }),
    (a11ycheck.rules.ol = function (e) {
        e.find("ol").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "ol");
        });
    }),
    (a11ycheck.rules.ul = function (e) {
        e.find("ul").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "ul");
        });
    }),
    (a11ycheck.rules.dl = function (e) {
        e.find("dl").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "dl");
        });
    }),
    (a11ycheck.rules.iframe = function (e) {
        e.find("iframe").each(function (e, t) {
            "wave_sidebar_container" != t.id && a11ycheck.engine.fn.addIcon(t, "iframe");
        });
    }),
    (a11ycheck.rules.header = function (e) {
        e.find("header,[role='banner']")
            .not("article header")
            .not("section header")
            .each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "header");
            });
    }),
    (a11ycheck.rules.nav = function (e) {
        e.find("nav,[role='navigation']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "nav");
        });
    }),
    (a11ycheck.rules.search = function (e) {
        e.find("[role='search']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "search");
        });
    }),
    (a11ycheck.rules.main = function (e) {
        e.find("main,[role='main']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "main");
        });
    }),
    (a11ycheck.rules.footer = function (e) {
        e.find("footer,[role='contentinfo']")
            .not("article footer")
            .not("section footer")
            .each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "footer");
            });
    }),
    (a11ycheck.rules.aside = function (e) {
        e.find("aside,[role='complementary']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "aside");
        });
    }),
    (a11ycheck.rules.region = function (e) {
        a11ycheck.engine.fn.override("region", ["region_missing"]),
            e
                .find("[role='region']")
                .not("#wave5bottombar")
                .each(function (e, t) {
                    (ariaLabelAttribute = t.getAttribute("aria-label")), (ariaLabelledByAttribute = t.getAttribute("aria-labelledby")), (null == ariaLabelAttribute && null == ariaLabelledByAttribute) || a11ycheck.engine.fn.addIcon(t, "region");
                });
    }),
    (a11ycheck.rules.html5_video_audio = function (e) {
        e.find("audio, video").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "html5_video_audio");
        });
    }),
    (a11ycheck.rules.youtube_video = function (e) {
        e.find("iframe[src*='youtube.com'],iframe[data-src*='youtube.com'],iframe[src*='youtube-nocookie.com'],iframe[data-src*='youtube-nocookie.com']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "youtube_video");
        }),
            e.find("a[href*='youtube.com']").each(function (e, t) {
                var n = t.getAttribute("href").split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/),
                    a = void 0 !== n[2] ? n[2].split(/[^0-9a-z_\-]/i)[0] : n[0];
                a.includes("youtube") || a.includes("user") || a11ycheck.engine.fn.addIcon(t, "youtube_video");
            });
    }),
    (a11ycheck.rules.aria = function (e) {
        var t = ["aria-label", "aria-labelledby", "aria-describedby", "aria-live", "aria-hidden", "aria-expanded", "aria-haspopup"],
            n = ["banner", "complementary", "contentinfo", "main", "navigation", "search", "alert", "alertdialog", "menu", "menubar", "button", "region"];
        e.find("*")
            .not("#wave5bottombar")
            .each(function (e, a) {
                for (var i = 0; i < a.attributes.length; i++)
                    (-1 !== a.attributes[i].name.search(/^aria-/i) || a.getAttribute("role")) &&
                        (-1 !== a.attributes[i].name.search(/^aria-/i) && t.indexOf(a.attributes[i].name) < 0
                            ? a11ycheck.engine.fn.addIcon(a, "aria", a.attributes[i].name + '="' + a.attributes[i].value + '"')
                            : "role" == a.attributes[i].name && n.indexOf(a.attributes[i].value) < 0 && a11ycheck.engine.fn.addIcon(a, "aria", 'role="' + a.attributes[i].value + '"'));
            });
    }),
    (a11ycheck.rules.aria_label = function (e) {
        a11ycheck.engine.fn.override("aria_label", ["link_empty", "button_empty"]),
            e
                .find("[aria-labelledby], [aria-label]")
                .not("#wave5bottombar")
                .each(function (e, t) {
                    for (var n = 0, a = 0; a < t.attributes.length; a++)
                        if (-1 !== t.attributes[a].name.search(/^aria-label/i)) {
                            var i = t.attributes[a].name + '="' + t.attributes[a].value + '"';
                            a11ycheck.engine.fn.addIcon(t, "aria_label", i), n++;
                        }
                    0 == n && a11ycheck.engine.fn.addIcon(t, "aria_label");
                });
    }),
    (a11ycheck.rules.aria_describedby = function (e) {
        e.find("[aria-describedby]").each(function (e, t) {
            for (var n = 0, a = 0; a < t.attributes.length; a++)
                if (-1 !== t.attributes[a].name.search(/^aria-describedby/i)) {
                    var i = t.attributes[a].name + '="' + t.attributes[a].value + '"';
                    a11ycheck.engine.fn.addIcon(t, "aria_describedby", i), n++;
                }
            0 == n && a11ycheck.engine.fn.addIcon(t, "aria_describedby");
        });
    }),
    (a11ycheck.rules.aria_reference_broken = function (e) {
        a11ycheck.engine.fn.override("aria_reference_broken", ["aria_label", "aria_describedby"]);
        var t = !1;
        e.find("*[aria-labelledby], *[aria-describedby]").each(function (n, a) {
            t = !1;
            var i = a.getAttribute("aria-labelledby");
            if (null != i) {
                i = i.trim().split(" ");
                for (var r = 0; r < i.length; r++)
                    if (0 === e.find('[id="' + i[r] + '"]').length) {
                        t = !0;
                        break;
                    }
            }
            if (!t) {
                var s = a.getAttribute("aria-describedby");
                if (null != s) {
                    s = s.trim().split(" ");
                    for (r = 0; r < s.length; r++)
                        if (0 === e.find('[id="' + s[r] + '"]').length) {
                            t = !0;
                            break;
                        }
                }
            }
            t && a11ycheck.engine.fn.addIcon(a, "aria_reference_broken");
        });
    }),
    (a11ycheck.rules.aria_tabindex = function (e) {
        e.find("[tabindex]").each(function (e, t) {
            var n = t.getAttribute("tabindex");
            "NaN" !== Number(n) && Number(n) < 1 && a11ycheck.engine.fn.addIcon(t, "aria_tabindex");
        });
    }),
    (a11ycheck.rules.aria_live_region = function (e) {
        e.find("[role='alert'],[role='alertdialog'],[aria-live]").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "aria_live_region");
        });
    }),
    (a11ycheck.rules.aria_menu_broken = function (e) {
        e.find("[role='menu'],[role='menubar']")
            .not("[aria-busy='true']")
            .each(function (t, n) {
                0 === e.find(n).find("[role='menuitem'], [role='menuitemcheckbox'], [role='menuitemradio']").length && a11ycheck.engine.fn.addIcon(n, "aria_menu_broken");
            });
    }),
    (a11ycheck.rules.aria_menu = function (e) {
        a11ycheck.engine.fn.overrideby("aria_menu", ["aria_menu_broken"]),
            e.find("[role='menu'],[role='menubar']").each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "aria_menu");
            });
    }),
    (a11ycheck.rules.aria_button = function (e) {
        e.find("[role='button']")
            .not("button")
            .each(function (e, t) {
                a11ycheck.engine.fn.addIcon(t, "aria_button");
            });
    }),
    (a11ycheck.rules.aria_hidden = function (e) {
        e.find("[aria-hidden='true']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "aria_hidden");
        });
    }),
    (a11ycheck.rules.aria_expanded = function (e) {
        e.find("[aria-expanded='true']", "[aria-expanded='false']").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "aria_expanded");
        });
    }),
    (a11ycheck.rules.aria_haspopup = function (e) {
        e.find("[aria-haspopup]").each(function (e, t) {
            a11ycheck.engine.fn.addIcon(t, "aria_haspopup");
        });
    }),
    $(function () {
        (a11ycheck.fn.showCode = function () {
            a11ycheck.code.setHtmlRoot(a11ycheck.page.documentElement), a11ycheck.code.displayTree();
        }),
            $("#wave5codetoggle a").click(function (e) {
                a11ycheck.fn.loadCodePanel(e);
            }),
            (a11ycheck.fn.loadCodePanel = function (e) {
                a11ycheck.code.unhighlight();
                var t,
                    n = "extension" == waveconfig.platform ? $("body") : $("#report"),
                    a = Math.round(parseFloat($("#wave5bottombar").css("height")));
                a11ycheck.tabs.codePanelHasRun || $("#spinner").html('<img src="' + a11ycheck.conf.paths.site + '/img/loading.gif" alt="loading" style="display: block; margin: auto; margin-top: 5%"/>'),
                    a <= 1
                        ? ($("#wave5codetoggle").toggleClass("wave5_open"),
                          (t = "extension" == waveconfig.platform ? n.height() + 200 : n.height() - 200),
                          n.height(t),
                          $("#wave5bottombar").height(200),
                          a11ycheck.tabs.codePanelHasRun ||
                              (a11ycheck.fn.showCode(), $("#spinner").hide(), e.currentTarget.classList.contains("viewInCodePanelLink") && a11ycheck.code.setSelected(a11ycheck.manager.selectedIcon), (a11ycheck.tabs.codePanelHasRun = !0)),
                          (a11ycheck.tabs.codePanelOpen = !0),
                          "extension" == waveconfig.platform &&
                              $("#wave5bottombar").css({ float: "left", position: "fixed", "z-index": "2147483647", "border-top": "inset 1px #737c70", height: "200px", bottom: "-1px", right: "0px", left: "380px", overflow: "visible" }))
                        : ((t = "extension" == waveconfig.platform ? n.height() - 200 : n.height() + 200),
                          n.height(t),
                          $("#wave5bottombar").height(0),
                          (a11ycheck.tabs.codePanelOpen = !1),
                          $("#wave5codetoggle").toggleClass("wave5_open"),
                          "extension" == waveconfig.platform &&
                              $("#wave5bottombar").css({ float: "left", position: "fixed", "z-index": "2147483647", "border-top": "inset 1px #737c70", height: "0px", bottom: "-1px", right: "0px", left: "380px", overflow: "visible" })),
                    e.preventDefault();
            });
    }),
    (a11ycheck.tabs.buildOutline = function (e) {
        waveconfig.debug && console.log("Start buildOutline."),
            void 0 === e &&
                (waveconfig.debug && console.log("outlineHtml undefined. Start buildOutlineHtml"),
                (e = a11ycheck.tabs.buildOutlineHtml()),
                "extension" == waveconfig.platform ? (waveconfig.debug && console.log("Passing outline to handleOutlineData"), reportPageMessaging.fn.setupAndDispatchEvent("handleOutlineData", e)) : a11ycheck.tabs.handleOutlineData(e));
    }),
    (a11ycheck.tabs.buildOutlineHtml = function () {
        var e = "",
            t = ["H1", "H2", "H3", "H4", "H5", "H6"],
            n = ["HEADER", "NAV", "MAIN", "ASIDE", "FOOTER", "SEARCH"],
            a = ["BANNER", "SEARCH", "NAVIGATION", "COMPLEMENTARY", "MAIN", "CONTENTINFO", "REGION"];
        function i(e) {
            if (null !== e) {
                var t = e.toLowerCase().split("");
                return t[0].toUpperCase() + t.slice(1).join("");
            }
            return e;
        }
        for (var r = [], s = Object.keys(a11ycheck.report.iconlist.structure.items), o = [], l = 0; l < s.length; l++)
            for (var c = 0; c < a11ycheck.report.iconlist.structure.items[s[l]].xpaths.length; c++) o.push(a11ycheck.report.iconlist.structure.items[s[l]].xpaths[c]);
        for (var d in a11ycheck.report.things.allTagsCached)
            if (a11ycheck.report.things.allTagsCached.hasOwnProperty(d) && o.indexOf(d) > -1) {
                var u = a11ycheck.report.things.allTagsCached[d],
                    p = u.getAttribute("role");
                p = null !== p ? p.toUpperCase() : p;
                var h,
                    g = u.tagName.toUpperCase(),
                    m = { HEADER: "Header", NAV: "Navigation", MAIN: "Main", ASIDE: "Aside", FOOTER: "Footer", SEARCH: "Search" };
                if (((h = m.hasOwnProperty(g) ? m[g] : i(p)), r.length > 0)) for (l = 0; l < r.length; l++) -1 == d.indexOf(r[l]) && ((e += "</div>"), r.splice(l, 1), l--);
                if (a11ycheck.tabs.isHeaderTag(t, g)) e += "<div class='outline_" + g + "' data-reportxpath-heading='" + d + "'> " + $(u).text().trim() + "</div>";
                (a11ycheck.tabs.isAriaLandmark(n, g) || a.indexOf(p) > -1) &&
                    (r.push(d), (e += "<div style='border: 1px solid #0050C7; padding: 10px; margin-bottom: 1px;'>"), (e += "<div class='outline_aria' data-reportxpath-heading='" + d + "'> " + h + "</div>"));
            }
        return e;
    }),
    (a11ycheck.tabs.isHeaderTag = function (e, t) {
        return e.indexOf(t) > -1;
    }),
    (a11ycheck.tabs.isAriaLandmark = function (e, t) {
        return e.indexOf(t) > -1;
    }),
   
    (a11ycheck.tabs.toggleSaturation = function (e) {
        "desaturate" == e
            ? $("body")
                  .css(
                      "filter",
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")"
                  )
                  .css("filter", "gray")
                  .css("webkitFilter", "grayscale(100%)")
            : $("body").removeAttr("style");
    });

var list = document.querySelectorAll('[aria-label]');
var imgs = document.getElementsByTagName('img');
var ps = document.getElementsByTagName('p');

var ariaLabels = [];
var images = [];
list.forEach(function (item) {
    ariaLabels.push(item.getAttribute('aria-label'));
});
for (let i = 0; i < imgs.length; i++) {
    images.push([imgs[i].src, imgs[i].alt]);
}

var AAlargeCount = 0;
var AAsmallAAALargeCount = 0;
var AAAsmallCount = 0;

for (let i = 0; i < ps.length; i++) {
    var parentRgb = getComputedStyle(ps[i].parentNode).getPropertyValue('color');

    if (parentRgb.includes("rgba")) {
        var parentRgb = parentRgb.replace('rgba(', '');
        parentRgb = parentRgb.replace(')', '');
        parentRgb = parentRgb.split(',');
    } else {
        var parentRgb = parentRgb.replace('rgb(', '');
        parentRgb = parentRgb.replace(')', '');
        parentRgb = parentRgb.split(',');
    }

    var paragraphRgb = getComputedStyle(ps[i]).getPropertyValue('color');
    if (paragraphRgb.includes("rgba")) {
        var paragraphRgb = paragraphRgb.replace('rgba(', '');
        paragraphRgb = paragraphRgb.replace(')', '');
        paragraphRgb = paragraphRgb.split(',');
    } else {
        var paragraphRgb = paragraphRgb.replace('rgb(', '');
        paragraphRgb = paragraphRgb.replace(')', '');
        paragraphRgb = paragraphRgb.split(',');
    }
    colorParentluminance = luminance(parentRgb[0], parentRgb[1], parentRgb[2]);
    colorParagraphluminance = luminance(paragraphRgb[0], paragraphRgb[1], paragraphRgb[2]);
    const ratio = colorParentluminance > colorParagraphluminance
        ? ((colorParagraphluminance + 0.05) / (colorParentluminance + 0.05))
        : ((colorParentluminance + 0.05) / (colorParagraphluminance + 0.05));
    if (ratio < 1 / 3) {
        AAlargeCount++;
    }
    if (ratio < 1 / 4.5) {

        AAsmallAAALargeCount++;
    }
    if (ratio < 1 / 7) {
        AAAsmallCount++;
    }

    const result = `
        AA-level large text: ${ratio < 1 / 3 ? 'PASS' : 'FAIL'} \n
        AA-level small text: ${ratio < 1 / 4.5 ? 'PASS' : 'FAIL'} \n
        AAA-level large text: ${ratio < 1 / 4.5 ? 'PASS' : 'FAIL'} \n
        AAA-level small text: ${ratio < 1 / 7 ? 'PASS' : 'FAIL'}
    `;
    //alert(result);
}

function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

chrome.storage.local.set({ ariaLabels: JSON.stringify(ariaLabels) });
chrome.storage.local.set({ images: JSON.stringify(images) });


checkInterval = setInterval(function () {
    a11ycheck.engine.fn.calculateContrast();

    if(Object.keys(a11ycheck.engine.contrast).length > 0){
        clearInterval(checkInterval);
        chrome.storage.local.set({ contrast: JSON.stringify(a11ycheck.engine.contrast) });
        console.log(JSON.stringify(a11ycheck.engine.contrast));
        
    }
}, 1000);



// chrome.storage.local.set({ contrast: JSON.stringify({AAlargeCount, AAsmallAAALargeCount, AAAsmallCount}) });
