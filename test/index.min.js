
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Ibis = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false; // If has modified constructor

    ctor = o.constructor;
    if (ctor === undefined) return true; // If has modified prototype

    prot = ctor.prototype;
    if (isObject(prot) === false) return false; // If constructor does not have an Object-specific method

    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    } // Most likely a plain Object


    return true;
  }

  function n(n) {
    for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];

    throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function (n) {
      return "'" + n + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }

  function r(n) {
    return !!n && !!n[Q];
  }

  function t(n) {
    return !!n && (function (n) {
      if (!n || "object" != typeof n) return !1;
      var r = Object.getPrototypeOf(n);
      if (null === r) return !0;
      var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
    }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v(n));
  }

  function i(n, r, t) {
    void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function (e) {
      t && "symbol" == typeof e || r(e, n[e], n);
    }) : n.forEach(function (t, e) {
      return r(e, t, n);
    });
  }

  function o(n) {
    var r = n[Q];
    return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
  }

  function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
  }

  function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
  }

  function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : n[r] = t;
  }

  function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
  }

  function s(n) {
    return X && n instanceof Map;
  }

  function v(n) {
    return q && n instanceof Set;
  }

  function p(n) {
    return n.o || n.t;
  }

  function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];

    for (var t = nn(r), e = 0; e < t.length; e++) {
      var i = t[e],
          o = r[i];
      !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
        configurable: !0,
        writable: !0,
        enumerable: o.enumerable,
        value: n[i]
      });
    }

    return Object.create(Object.getPrototypeOf(n), r);
  }

  function d(n, e) {
    return void 0 === e && (e = !1), y(n) || r(n) || !t(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h$1), Object.freeze(n), e && i(n, function (n, r) {
      return d(r, !0);
    }, !0), n);
  }

  function h$1() {
    n(2);
  }

  function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
  }

  function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
  }

  function _() {
    return U;
  }

  function j(n, r) {
    r && (b("Patches"), n.u = [], n.s = [], n.v = r);
  }

  function O(n) {
    g(n), n.p.forEach(S), n.p = null;
  }

  function g(n) {
    n === U && (U = n.l);
  }

  function w(n) {
    return U = {
      p: [],
      l: U,
      h: n,
      m: !0,
      _: 0
    };
  }

  function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : r.O = !0;
  }

  function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0],
        o = void 0 !== r && r !== i;
    return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
  }

  function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e) return i(r, function (i, o) {
      return A(n, e, r, i, o, t);
    }, !0), r;
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;

    if (!e.I) {
      e.I = !0, e.A._--;
      var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
      i(3 === e.i ? new Set(o) : o, function (r, i) {
        return A(n, e, o, r, i, t);
      }), x(n, o, !1), t && n.u && b("Patches").R(e, t, n.u, n.s);
    }

    return e.o;
  }

  function A(e, i, o, a, c, s) {
    if (r(c)) {
      var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
      if (f(o, a, v), !r(v)) return;
      e.m = !1;
    }

    if (t(c) && !y(c)) {
      if (!e.h.F && e._ < 1) return;
      M(e, c), i && i.A.l || x(e, c);
    }
  }

  function x(n, r, t) {
    void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
  }

  function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
  }

  function I(n, r) {
    if (r in n) for (var t = Object.getPrototypeOf(n); t;) {
      var e = Object.getOwnPropertyDescriptor(t, r);
      if (e) return e;
      t = Object.getPrototypeOf(t);
    }
  }

  function k(n) {
    n.P || (n.P = !0, n.l && k(n.l));
  }

  function E(n) {
    n.o || (n.o = l(n.t));
  }

  function R(n, r, t) {
    var e = s(r) ? b("MapSet").N(r, t) : v(r) ? b("MapSet").T(r, t) : n.g ? function (n, r) {
      var t = Array.isArray(n),
          e = {
        i: t ? 1 : 0,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: r,
        t: n,
        k: null,
        o: null,
        j: null,
        C: !1
      },
          i = e,
          o = en;
      t && (i = [e], o = on);
      var u = Proxy.revocable(i, o),
          a = u.revoke,
          f = u.proxy;
      return e.k = f, e.j = a, f;
    }(r, t) : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
  }

  function D(e) {
    return r(e) || n(22, e), function n(r) {
      if (!t(r)) return r;
      var e,
          u = r[Q],
          c = o(r);

      if (u) {
        if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
        u.I = !0, e = F(r, c), u.I = !1;
      } else e = F(r, c);

      return i(e, function (r, t) {
        u && a(u.t, r) === t || f(e, r, n(t));
      }), 3 === c ? new Set(e) : e;
    }(e);
  }

  function F(n, r) {
    switch (r) {
      case 2:
        return new Map(n);

      case 3:
        return Array.from(n);
    }

    return l(n);
  }

  var G,
      U,
      W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
      X = "undefined" != typeof Map,
      q = "undefined" != typeof Set,
      B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
      H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
      L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
      Q = W ? Symbol.for("immer-state") : "__$immer_state",
      Z = "" + Object.prototype.constructor,
      nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
  } : Object.getOwnPropertyNames,
      rn = Object.getOwnPropertyDescriptors || function (n) {
    var r = {};
    return nn(n).forEach(function (t) {
      r[t] = Object.getOwnPropertyDescriptor(n, t);
    }), r;
  },
      tn = {},
      en = {
    get: function (n, r) {
      if (r === Q) return n;
      var e = p(n);
      if (!u(e, r)) return function (n, r, t) {
        var e,
            i = I(r, t);
        return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
      }(n, e, r);
      var i = e[r];
      return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = R(n.A.h, i, n)) : i;
    },
    has: function (n, r) {
      return r in p(n);
    },
    ownKeys: function (n) {
      return Reflect.ownKeys(p(n));
    },
    set: function (n, r, t) {
      var e = I(p(n), r);
      if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;

      if (!n.P) {
        var i = z(p(n), r),
            o = null == i ? void 0 : i[Q];
        if (o && o.t === t) return n.o[r] = t, n.D[r] = !1, !0;
        if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
        E(n), k(n);
      }

      return n.o[r] === t && "number" != typeof t && (void 0 !== t || r in n.o) || (n.o[r] = t, n.D[r] = !0, !0);
    },
    deleteProperty: function (n, r) {
      return void 0 !== z(n.t, r) || r in n.t ? (n.D[r] = !1, E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
    },
    getOwnPropertyDescriptor: function (n, r) {
      var t = p(n),
          e = Reflect.getOwnPropertyDescriptor(t, r);
      return e ? {
        writable: !0,
        configurable: 1 !== n.i || "length" !== r,
        enumerable: e.enumerable,
        value: t[r]
      } : e;
    },
    defineProperty: function () {
      n(11);
    },
    getPrototypeOf: function (n) {
      return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function () {
      n(12);
    }
  },
      on = {};

  i(en, function (n, r) {
    on[n] = function () {
      return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
  }), on.deleteProperty = function (r, t) {
    return on.set.call(this, r, t, void 0);
  }, on.set = function (r, t, e) {
    return en.set.call(this, r[0], t, e, r[0]);
  };

  var un = function () {
    function e(r) {
      var e = this;
      this.g = B, this.F = !0, this.produce = function (r, i, o) {
        if ("function" == typeof r && "function" != typeof i) {
          var u = i;
          i = r;
          var a = e;
          return function (n) {
            var r = this;
            void 0 === n && (n = u);

            for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];

            return a.produce(n, function (n) {
              var t;
              return (t = i).call.apply(t, [r, n].concat(e));
            });
          };
        }

        var f;

        if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
          var c = w(e),
              s = R(e, r, void 0),
              v = !0;

          try {
            f = i(s), v = !1;
          } finally {
            v ? O(c) : g(c);
          }

          return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
            return j(c, o), P(n, c);
          }, function (n) {
            throw O(c), n;
          }) : (j(c, o), P(f, c));
        }

        if (!r || "object" != typeof r) {
          if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.F && d(f, !0), o) {
            var p = [],
                l = [];
            b("Patches").M(r, f, p, l), o(p, l);
          }

          return f;
        }

        n(21, r);
      }, this.produceWithPatches = function (n, r) {
        if ("function" == typeof n) return function (r) {
          for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];

          return e.produceWithPatches(r, function (r) {
            return n.apply(void 0, [r].concat(i));
          });
        };
        var t,
            i,
            o = e.produce(n, r, function (n, r) {
          t = n, i = r;
        });
        return "undefined" != typeof Promise && o instanceof Promise ? o.then(function (n) {
          return [n, t, i];
        }) : [o, t, i];
      }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
    }

    var i = e.prototype;
    return i.createDraft = function (e) {
      t(e) || n(8), r(e) && (e = D(e));
      var i = w(this),
          o = R(this, e, void 0);
      return o[Q].C = !0, g(i), o;
    }, i.finishDraft = function (r, t) {
      var e = r && r[Q];
      var i = e.A;
      return j(i, t), P(void 0, i);
    }, i.setAutoFreeze = function (n) {
      this.F = n;
    }, i.setUseProxies = function (r) {
      r && !B && n(20), this.g = r;
    }, i.applyPatches = function (n, t) {
      var e;

      for (e = t.length - 1; e >= 0; e--) {
        var i = t[e];

        if (0 === i.path.length && "replace" === i.op) {
          n = i.value;
          break;
        }
      }

      e > -1 && (t = t.slice(e + 1));
      var o = b("Patches").$;
      return r(n) ? o(n, t) : this.produce(n, function (n) {
        return o(n, t);
      });
    }, e;
  }(),
      an = new un(),
      fn = an.produce;
      an.produceWithPatches.bind(an);
      an.setAutoFreeze.bind(an);
      an.setUseProxies.bind(an);
      an.applyPatches.bind(an);
      var ln = an.createDraft.bind(an),
      dn = an.finishDraft.bind(an);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var DIRTY_PATHS = new WeakMap();
  var DIRTY_PATH_KEYS = new WeakMap();
  var FLUSHING = new WeakMap();
  var NORMALIZING = new WeakMap();
  var PATH_REFS = new WeakMap();
  var POINT_REFS = new WeakMap();
  var RANGE_REFS = new WeakMap();

  function ownKeys$9(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$9(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$9(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$9(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }
  /**
   * Create a new Slate `Editor` object.
   */


  var createEditor = () => {
    var editor = {
      children: [],
      operations: [],
      selection: null,
      marks: null,
      isInline: () => false,
      isVoid: () => false,
      onChange: () => {},
      apply: op => {
        for (var ref of Editor.pathRefs(editor)) {
          PathRef.transform(ref, op);
        }

        for (var _ref of Editor.pointRefs(editor)) {
          PointRef.transform(_ref, op);
        }

        for (var _ref2 of Editor.rangeRefs(editor)) {
          RangeRef.transform(_ref2, op);
        }

        var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
        var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || new Set();
        var dirtyPaths;
        var dirtyPathKeys;

        var add = path => {
          if (path) {
            var key = path.join(',');

            if (!dirtyPathKeys.has(key)) {
              dirtyPathKeys.add(key);
              dirtyPaths.push(path);
            }
          }
        };

        if (Path.operationCanTransformPath(op)) {
          dirtyPaths = [];
          dirtyPathKeys = new Set();

          for (var path of oldDirtyPaths) {
            var newPath = Path.transform(path, op);
            add(newPath);
          }
        } else {
          dirtyPaths = oldDirtyPaths;
          dirtyPathKeys = oldDirtyPathKeys;
        }

        var newDirtyPaths = getDirtyPaths(op);

        for (var _path of newDirtyPaths) {
          add(_path);
        }

        DIRTY_PATHS.set(editor, dirtyPaths);
        DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
        Transforms.transform(editor, op);
        editor.operations.push(op);
        Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

        if (op.type === 'set_selection') {
          editor.marks = null;
        }

        if (!FLUSHING.get(editor)) {
          FLUSHING.set(editor, true);
          Promise.resolve().then(() => {
            FLUSHING.set(editor, false);
            editor.onChange();
            editor.operations = [];
          });
        }
      },
      addMark: (key, value) => {
        var {
          selection
        } = editor;

        if (selection) {
          if (Range.isExpanded(selection)) {
            Transforms.setNodes(editor, {
              [key]: value
            }, {
              match: Text.isText,
              split: true
            });
          } else {
            var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, {
              [key]: value
            });

            editor.marks = marks;

            if (!FLUSHING.get(editor)) {
              editor.onChange();
            }
          }
        }
      },
      deleteBackward: unit => {
        var {
          selection
        } = editor;

        if (selection && Range.isCollapsed(selection)) {
          Transforms.delete(editor, {
            unit,
            reverse: true
          });
        }
      },
      deleteForward: unit => {
        var {
          selection
        } = editor;

        if (selection && Range.isCollapsed(selection)) {
          Transforms.delete(editor, {
            unit
          });
        }
      },
      deleteFragment: direction => {
        var {
          selection
        } = editor;

        if (selection && Range.isExpanded(selection)) {
          Transforms.delete(editor, {
            reverse: direction === 'backward'
          });
        }
      },
      getFragment: () => {
        var {
          selection
        } = editor;

        if (selection) {
          return Node.fragment(editor, selection);
        }

        return [];
      },
      insertBreak: () => {
        Transforms.splitNodes(editor, {
          always: true
        });
      },
      insertSoftBreak: () => {
        Transforms.splitNodes(editor, {
          always: true
        });
      },
      insertFragment: fragment => {
        Transforms.insertFragment(editor, fragment);
      },
      insertNode: node => {
        Transforms.insertNodes(editor, node);
      },
      insertText: text => {
        var {
          selection,
          marks
        } = editor;

        if (selection) {
          if (marks) {
            var node = _objectSpread$9({
              text
            }, marks);

            Transforms.insertNodes(editor, node);
          } else {
            Transforms.insertText(editor, text);
          }

          editor.marks = null;
        }
      },
      normalizeNode: entry => {
        var [node, path] = entry; // There are no core normalizations for text nodes.

        if (Text.isText(node)) {
          return;
        } // Ensure that block and inline nodes have at least one text child.


        if (Element$1.isElement(node) && node.children.length === 0) {
          var child = {
            text: ''
          };
          Transforms.insertNodes(editor, child, {
            at: path.concat(0),
            voids: true
          });
          return;
        } // Determine whether the node should have block or inline children.


        var shouldHaveInlines = Editor.isEditor(node) ? false : Element$1.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
        // index that accounts for any added/removed nodes.

        var n = 0;

        for (var i = 0; i < node.children.length; i++, n++) {
          var currentNode = Node.get(editor, path);
          if (Text.isText(currentNode)) continue;
          var _child = node.children[i];
          var prev = currentNode.children[n - 1];
          var isLast = i === node.children.length - 1;
          var isInlineOrText = Text.isText(_child) || Element$1.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
          // that only contain block nodes. Similarly, only allow inline nodes in
          // other inline nodes, or parent blocks that only contain inlines and
          // text.

          if (isInlineOrText !== shouldHaveInlines) {
            Transforms.removeNodes(editor, {
              at: path.concat(n),
              voids: true
            });
            n--;
          } else if (Element$1.isElement(_child)) {
            // Ensure that inline nodes are surrounded by text nodes.
            if (editor.isInline(_child)) {
              if (prev == null || !Text.isText(prev)) {
                var newChild = {
                  text: ''
                };
                Transforms.insertNodes(editor, newChild, {
                  at: path.concat(n),
                  voids: true
                });
                n++;
              } else if (isLast) {
                var _newChild = {
                  text: ''
                };
                Transforms.insertNodes(editor, _newChild, {
                  at: path.concat(n + 1),
                  voids: true
                });
                n++;
              }
            }
          } else {
            // Merge adjacent text nodes that are empty or match.
            if (prev != null && Text.isText(prev)) {
              if (Text.equals(_child, prev, {
                loose: true
              })) {
                Transforms.mergeNodes(editor, {
                  at: path.concat(n),
                  voids: true
                });
                n--;
              } else if (prev.text === '') {
                Transforms.removeNodes(editor, {
                  at: path.concat(n - 1),
                  voids: true
                });
                n--;
              } else if (_child.text === '') {
                Transforms.removeNodes(editor, {
                  at: path.concat(n),
                  voids: true
                });
                n--;
              }
            }
          }
        }
      },
      removeMark: key => {
        var {
          selection
        } = editor;

        if (selection) {
          if (Range.isExpanded(selection)) {
            Transforms.unsetNodes(editor, key, {
              match: Text.isText,
              split: true
            });
          } else {
            var marks = _objectSpread$9({}, Editor.marks(editor) || {});

            delete marks[key];
            editor.marks = marks;

            if (!FLUSHING.get(editor)) {
              editor.onChange();
            }
          }
        }
      }
    };
    return editor;
  };
  /**
   * Get the "dirty" paths generated from an operation.
   */


  var getDirtyPaths = op => {
    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node':
        {
          var {
            path
          } = op;
          return Path.levels(path);
        }

      case 'insert_node':
        {
          var {
            node,
            path: _path2
          } = op;
          var levels = Path.levels(_path2);
          var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), _ref3 => {
            var [, p] = _ref3;
            return _path2.concat(p);
          });
          return [...levels, ...descendants];
        }

      case 'merge_node':
        {
          var {
            path: _path3
          } = op;
          var ancestors = Path.ancestors(_path3);
          var previousPath = Path.previous(_path3);
          return [...ancestors, previousPath];
        }

      case 'move_node':
        {
          var {
            path: _path4,
            newPath
          } = op;

          if (Path.equals(_path4, newPath)) {
            return [];
          }

          var oldAncestors = [];
          var newAncestors = [];

          for (var ancestor of Path.ancestors(_path4)) {
            var p = Path.transform(ancestor, op);
            oldAncestors.push(p);
          }

          for (var _ancestor of Path.ancestors(newPath)) {
            var _p = Path.transform(_ancestor, op);

            newAncestors.push(_p);
          }

          var newParent = newAncestors[newAncestors.length - 1];
          var newIndex = newPath[newPath.length - 1];
          var resultPath = newParent.concat(newIndex);
          return [...oldAncestors, ...newAncestors, resultPath];
        }

      case 'remove_node':
        {
          var {
            path: _path5
          } = op;

          var _ancestors = Path.ancestors(_path5);

          return [..._ancestors];
        }

      case 'split_node':
        {
          var {
            path: _path6
          } = op;

          var _levels = Path.levels(_path6);

          var nextPath = Path.next(_path6);
          return [..._levels, nextPath];
        }

      default:
        {
          return [];
        }
    }
  };

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  } // Character (grapheme cluster) boundaries are determined according to
  // the default grapheme cluster boundary specification, extended grapheme clusters variant[1].
  //
  // References:
  //
  // [1] https://www.unicode.org/reports/tr29/#Default_Grapheme_Cluster_Table
  // [2] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakProperty.txt
  // [3] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.html
  // [4] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.txt

  /**
   * Get the distance to the end of the first character in a string of text.
   */


  var getCharacterDistance = function getCharacterDistance(str) {
    var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isLTR = !isRTL;
    var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
    var left = CodepointType.None;
    var right = CodepointType.None;
    var distance = 0; // Evaluation of these conditions are deferred.

    var gb11 = null; // Is GB11 applicable?

    var gb12Or13 = null; // Is GB12 or GB13 applicable?

    for (var char of codepoints) {
      var code = char.codePointAt(0);
      if (!code) break;
      var type = getCodepointType(char, code);
      [left, right] = isLTR ? [right, type] : [type, left];

      if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
        if (isLTR) {
          gb11 = endsWithEmojiZWJ(str.substring(0, distance));
        } else {
          gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
        }

        if (!gb11) break;
      }

      if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
        if (gb12Or13 !== null) {
          gb12Or13 = !gb12Or13;
        } else {
          if (isLTR) {
            gb12Or13 = true;
          } else {
            gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
          }
        }

        if (!gb12Or13) break;
      }

      if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
        break;
      }

      distance += char.length;
    }

    return distance || 1;
  };

  var SPACE = /\s/;
  var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  var CHAMELEON = /['\u2018\u2019]/;
  /**
   * Get the distance to the end of the first word in a string of text.
   */

  var getWordDistance = function getWordDistance(text) {
    var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dist = 0;
    var started = false;

    while (text.length > 0) {
      var charDist = getCharacterDistance(text, isRTL);
      var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);

      if (isWordCharacter(char, remaining, isRTL)) {
        started = true;
        dist += charDist;
      } else if (!started) {
        dist += charDist;
      } else {
        break;
      }

      text = remaining;
    }

    return dist;
  };
  /**
   * Split a string in two parts at a given distance starting from the end when
   * `isRTL` is set to `true`.
   */


  var splitByCharacterDistance = (str, dist, isRTL) => {
    if (isRTL) {
      var at = str.length - dist;
      return [str.slice(at, str.length), str.slice(0, at)];
    }

    return [str.slice(0, dist), str.slice(dist)];
  };
  /**
   * Check if a character is a word character. The `remaining` argument is used
   * because sometimes you must read subsequent characters to truly determine it.
   */


  var isWordCharacter = function isWordCharacter(char, remaining) {
    var isRTL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (SPACE.test(char)) {
      return false;
    } // Chameleons count as word characters as long as they're in a word, so
    // recurse to see if the next one is a word character or not.


    if (CHAMELEON.test(char)) {
      var charDist = getCharacterDistance(remaining, isRTL);
      var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);

      if (isWordCharacter(nextChar, nextRemaining, isRTL)) {
        return true;
      }
    }

    if (PUNCTUATION.test(char)) {
      return false;
    }

    return true;
  };
  /**
   * Iterate on codepoints from right to left.
   */


  var codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
    var end = str.length - 1;

    for (var i = 0; i < str.length; i++) {
      var char1 = str.charAt(end - i);

      if (isLowSurrogate(char1.charCodeAt(0))) {
        var char2 = str.charAt(end - i - 1);

        if (isHighSurrogate(char2.charCodeAt(0))) {
          yield char2 + char1;
          i++;
          continue;
        }
      }

      yield char1;
    }
  };
  /**
   * Is `charCode` a high surrogate.
   *
   * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
   */


  var isHighSurrogate = charCode => {
    return charCode >= 0xd800 && charCode <= 0xdbff;
  };
  /**
   * Is `charCode` a low surrogate.
   *
   * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
   */


  var isLowSurrogate = charCode => {
    return charCode >= 0xdc00 && charCode <= 0xdfff;
  };

  var CodepointType;

  (function (CodepointType) {
    CodepointType[CodepointType["None"] = 0] = "None";
    CodepointType[CodepointType["Extend"] = 1] = "Extend";
    CodepointType[CodepointType["ZWJ"] = 2] = "ZWJ";
    CodepointType[CodepointType["RI"] = 4] = "RI";
    CodepointType[CodepointType["Prepend"] = 8] = "Prepend";
    CodepointType[CodepointType["SpacingMark"] = 16] = "SpacingMark";
    CodepointType[CodepointType["L"] = 32] = "L";
    CodepointType[CodepointType["V"] = 64] = "V";
    CodepointType[CodepointType["T"] = 128] = "T";
    CodepointType[CodepointType["LV"] = 256] = "LV";
    CodepointType[CodepointType["LVT"] = 512] = "LVT";
    CodepointType[CodepointType["ExtPict"] = 1024] = "ExtPict";
    CodepointType[CodepointType["Any"] = 2048] = "Any";
  })(CodepointType || (CodepointType = {}));

  var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
  var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
  var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
  var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
  var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
  var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
  var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
  var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
  var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;

  var getCodepointType = (char, code) => {
    var type = CodepointType.Any;

    if (char.search(reExtend) !== -1) {
      type |= CodepointType.Extend;
    }

    if (code === 0x200d) {
      type |= CodepointType.ZWJ;
    }

    if (code >= 0x1f1e6 && code <= 0x1f1ff) {
      type |= CodepointType.RI;
    }

    if (char.search(rePrepend) !== -1) {
      type |= CodepointType.Prepend;
    }

    if (char.search(reSpacingMark) !== -1) {
      type |= CodepointType.SpacingMark;
    }

    if (char.search(reL) !== -1) {
      type |= CodepointType.L;
    }

    if (char.search(reV) !== -1) {
      type |= CodepointType.V;
    }

    if (char.search(reT) !== -1) {
      type |= CodepointType.T;
    }

    if (char.search(reLV) !== -1) {
      type |= CodepointType.LV;
    }

    if (char.search(reLVT) !== -1) {
      type |= CodepointType.LVT;
    }

    if (char.search(reExtPict) !== -1) {
      type |= CodepointType.ExtPict;
    }

    return type;
  };

  function intersects(x, y) {
    return (x & y) !== 0;
  }

  var NonBoundaryPairs = [// GB6
  [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT], // GB7
  [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T], // GB8
  [CodepointType.LVT | CodepointType.T, CodepointType.T], // GB9
  [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ], // GB9a
  [CodepointType.Any, CodepointType.SpacingMark], // GB9b
  [CodepointType.Prepend, CodepointType.Any], // GB11
  [CodepointType.ZWJ, CodepointType.ExtPict], // GB12 and GB13
  [CodepointType.RI, CodepointType.RI]];

  function isBoundaryPair(left, right) {
    return NonBoundaryPairs.findIndex(r => intersects(left, r[0]) && intersects(right, r[1])) === -1;
  }

  var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;

  var endsWithEmojiZWJ = str => {
    return str.search(endingEmojiZWJ) !== -1;
  };

  var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;

  var endsWithOddNumberOfRIs = str => {
    var match = str.match(endingRIs);

    if (match === null) {
      return false;
    } else {
      // A RI is represented by a surrogate pair.
      var numRIs = match[0].length / 2;
      return numRIs % 2 === 1;
    }
  };
  /**
   * Shared the function with isElementType utility
   */


  var isElement$2 = value => {
    return isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
  };

  var Element$1 = {
    /**
     * Check if a value implements the 'Ancestor' interface.
     */
    isAncestor(value) {
      return isPlainObject(value) && Node.isNodeList(value.children);
    },

    /**
     * Check if a value implements the `Element` interface.
     */
    isElement: isElement$2,

    /**
     * Check if a value is an array of `Element` objects.
     */
    isElementList(value) {
      return Array.isArray(value) && value.every(val => Element$1.isElement(val));
    },

    /**
     * Check if a set of props is a partial of Element.
     */
    isElementProps(props) {
      return props.children !== undefined;
    },

    /**
     * Check if a value implements the `Element` interface and has elementKey with selected value.
     * Default it check to `type` key value
     */
    isElementType: function isElementType(value, elementVal) {
      var elementKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
      return isElement$2(value) && value[elementKey] === elementVal;
    },

    /**
     * Check if an element matches set of properties.
     *
     * Note: this checks custom properties, and it does not ensure that any
     * children are equivalent.
     */
    matches(element, props) {
      for (var key in props) {
        if (key === 'children') {
          continue;
        }

        if (element[key] !== props[key]) {
          return false;
        }
      }

      return true;
    }

  };
  var _excluded$4 = ["text"],
      _excluded2$3 = ["text"];

  function ownKeys$8(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$8(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$8(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$8(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var IS_EDITOR_CACHE = new WeakMap();
  var Editor = {
    /**
     * Get the ancestor above a location in the document.
     */
    above(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        voids = false,
        mode = 'lowest',
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      var path = Editor.path(editor, at);
      var reverse = mode === 'lowest';

      for (var [n, p] of Editor.levels(editor, {
        at: path,
        voids,
        match,
        reverse
      })) {
        if (!Text.isText(n) && !Path.equals(path, p)) {
          return [n, p];
        }
      }
    },

    /**
     * Add a custom property to the leaf text nodes in the current selection.
     *
     * If the selection is currently collapsed, the marks will be added to the
     * `editor.marks` property instead, and applied when text is inserted next.
     */
    addMark(editor, key, value) {
      editor.addMark(key, value);
    },

    /**
     * Get the point after a location.
     */
    after(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var anchor = Editor.point(editor, at, {
        edge: 'end'
      });
      var focus = Editor.end(editor, []);
      var range = {
        anchor,
        focus
      };
      var {
        distance = 1
      } = options;
      var d = 0;
      var target;

      for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
        at: range
      }))) {
        if (d > distance) {
          break;
        }

        if (d !== 0) {
          target = p;
        }

        d++;
      }

      return target;
    },

    /**
     * Get the point before a location.
     */
    before(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var anchor = Editor.start(editor, []);
      var focus = Editor.point(editor, at, {
        edge: 'start'
      });
      var range = {
        anchor,
        focus
      };
      var {
        distance = 1
      } = options;
      var d = 0;
      var target;

      for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
        at: range,
        reverse: true
      }))) {
        if (d > distance) {
          break;
        }

        if (d !== 0) {
          target = p;
        }

        d++;
      }

      return target;
    },

    /**
     * Delete content in the editor backward from the current selection.
     */
    deleteBackward(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        unit = 'character'
      } = options;
      editor.deleteBackward(unit);
    },

    /**
     * Delete content in the editor forward from the current selection.
     */
    deleteForward(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        unit = 'character'
      } = options;
      editor.deleteForward(unit);
    },

    /**
     * Delete the content in the current selection.
     */
    deleteFragment(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        direction = 'forward'
      } = options;
      editor.deleteFragment(direction);
    },

    /**
     * Get the start and end points of a location.
     */
    edges(editor, at) {
      return [Editor.start(editor, at), Editor.end(editor, at)];
    },

    /**
     * Get the end point of a location.
     */
    end(editor, at) {
      return Editor.point(editor, at, {
        edge: 'end'
      });
    },

    /**
     * Get the first node at a location.
     */
    first(editor, at) {
      var path = Editor.path(editor, at, {
        edge: 'start'
      });
      return Editor.node(editor, path);
    },

    /**
     * Get the fragment at a location.
     */
    fragment(editor, at) {
      var range = Editor.range(editor, at);
      var fragment = Node.fragment(editor, range);
      return fragment;
    },

    /**
     * Check if a node has block children.
     */
    hasBlocks(editor, element) {
      return element.children.some(n => Editor.isBlock(editor, n));
    },

    /**
     * Check if a node has inline and text children.
     */
    hasInlines(editor, element) {
      return element.children.some(n => Text.isText(n) || Editor.isInline(editor, n));
    },

    /**
     * Check if a node has text children.
     */
    hasTexts(editor, element) {
      return element.children.every(n => Text.isText(n));
    },

    /**
     * Insert a block break at the current selection.
     *
     * If the selection is currently expanded, it will be deleted first.
     */
    insertBreak(editor) {
      editor.insertBreak();
    },

    /**
     * Insert a soft break at the current selection.
     *
     * If the selection is currently expanded, it will be deleted first.
     */
    insertSoftBreak(editor) {
      editor.insertSoftBreak();
    },

    /**
     * Insert a fragment at the current selection.
     *
     * If the selection is currently expanded, it will be deleted first.
     */
    insertFragment(editor, fragment) {
      editor.insertFragment(fragment);
    },

    /**
     * Insert a node at the current selection.
     *
     * If the selection is currently expanded, it will be deleted first.
     */
    insertNode(editor, node) {
      editor.insertNode(node);
    },

    /**
     * Insert text at the current selection.
     *
     * If the selection is currently expanded, it will be deleted first.
     */
    insertText(editor, text) {
      editor.insertText(text);
    },

    /**
     * Check if a value is a block `Element` object.
     */
    isBlock(editor, value) {
      return Element$1.isElement(value) && !editor.isInline(value);
    },

    /**
     * Check if a value is an `Editor` object.
     */
    isEditor(value) {
      if (!isPlainObject(value)) return false;
      var cachedIsEditor = IS_EDITOR_CACHE.get(value);

      if (cachedIsEditor !== undefined) {
        return cachedIsEditor;
      }

      var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertSoftBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && (value.marks === null || isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
      IS_EDITOR_CACHE.set(value, isEditor);
      return isEditor;
    },

    /**
     * Check if a point is the end point of a location.
     */
    isEnd(editor, point, at) {
      var end = Editor.end(editor, at);
      return Point.equals(point, end);
    },

    /**
     * Check if a point is an edge of a location.
     */
    isEdge(editor, point, at) {
      return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
    },

    /**
     * Check if an element is empty, accounting for void nodes.
     */
    isEmpty(editor, element) {
      var {
        children
      } = element;
      var [first] = children;
      return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
    },

    /**
     * Check if a value is an inline `Element` object.
     */
    isInline(editor, value) {
      return Element$1.isElement(value) && editor.isInline(value);
    },

    /**
     * Check if the editor is currently normalizing after each operation.
     */
    isNormalizing(editor) {
      var isNormalizing = NORMALIZING.get(editor);
      return isNormalizing === undefined ? true : isNormalizing;
    },

    /**
     * Check if a point is the start point of a location.
     */
    isStart(editor, point, at) {
      // PERF: If the offset isn't `0` we know it's not the start.
      if (point.offset !== 0) {
        return false;
      }

      var start = Editor.start(editor, at);
      return Point.equals(point, start);
    },

    /**
     * Check if a value is a void `Element` object.
     */
    isVoid(editor, value) {
      return Element$1.isElement(value) && editor.isVoid(value);
    },

    /**
     * Get the last node at a location.
     */
    last(editor, at) {
      var path = Editor.path(editor, at, {
        edge: 'end'
      });
      return Editor.node(editor, path);
    },

    /**
     * Get the leaf text node at a location.
     */
    leaf(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var path = Editor.path(editor, at, options);
      var node = Node.leaf(editor, path);
      return [node, path];
    },

    /**
     * Iterate through all of the levels at a location.
     */
    *levels(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        at = editor.selection,
        reverse = false,
        voids = false
      } = options;
      var {
        match
      } = options;

      if (match == null) {
        match = () => true;
      }

      if (!at) {
        return;
      }

      var levels = [];
      var path = Editor.path(editor, at);

      for (var [n, p] of Node.levels(editor, path)) {
        if (!match(n, p)) {
          continue;
        }

        levels.push([n, p]);

        if (!voids && Editor.isVoid(editor, n)) {
          break;
        }
      }

      if (reverse) {
        levels.reverse();
      }

      yield* levels;
    },

    /**
     * Get the marks that would be added to text at the current selection.
     */
    marks(editor) {
      var {
        marks,
        selection
      } = editor;

      if (!selection) {
        return null;
      }

      if (marks) {
        return marks;
      }

      if (Range.isExpanded(selection)) {
        var [match] = Editor.nodes(editor, {
          match: Text.isText
        });

        if (match) {
          var [_node] = match;

          var _rest = _objectWithoutProperties(_node, _excluded$4);

          return _rest;
        } else {
          return {};
        }
      }

      var {
        anchor
      } = selection;
      var {
        path
      } = anchor;
      var [node] = Editor.leaf(editor, path);

      if (anchor.offset === 0) {
        var prev = Editor.previous(editor, {
          at: path,
          match: Text.isText
        });
        var block = Editor.above(editor, {
          match: n => Editor.isBlock(editor, n)
        });

        if (prev && block) {
          var [prevNode, prevPath] = prev;
          var [, blockPath] = block;

          if (Path.isAncestor(blockPath, prevPath)) {
            node = prevNode;
          }
        }
      }

      var rest = _objectWithoutProperties(node, _excluded2$3);

      return rest;
    },

    /**
     * Get the matching node in the branch of the document after a location.
     */
    next(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      var pointAfterLocation = Editor.after(editor, at, {
        voids
      });
      if (!pointAfterLocation) return;
      var [, to] = Editor.last(editor, []);
      var span = [pointAfterLocation.path, to];

      if (Path.isPath(at) && at.length === 0) {
        throw new Error("Cannot get the next node from the root node!");
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);

          match = n => parent.children.includes(n);
        } else {
          match = () => true;
        }
      }

      var [next] = Editor.nodes(editor, {
        at: span,
        match,
        mode,
        voids
      });
      return next;
    },

    /**
     * Get the node at a location.
     */
    node(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var path = Editor.path(editor, at, options);
      var node = Node.get(editor, path);
      return [node, path];
    },

    /**
     * Iterate through all of the nodes in the Editor.
     */
    *nodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        at = editor.selection,
        mode = 'all',
        universal = false,
        reverse = false,
        voids = false
      } = options;
      var {
        match
      } = options;

      if (!match) {
        match = () => true;
      }

      if (!at) {
        return;
      }

      var from;
      var to;

      if (Span.isSpan(at)) {
        from = at[0];
        to = at[1];
      } else {
        var first = Editor.path(editor, at, {
          edge: 'start'
        });
        var last = Editor.path(editor, at, {
          edge: 'end'
        });
        from = reverse ? last : first;
        to = reverse ? first : last;
      }

      var nodeEntries = Node.nodes(editor, {
        reverse,
        from,
        to,
        pass: _ref => {
          var [n] = _ref;
          return voids ? false : Editor.isVoid(editor, n);
        }
      });
      var matches = [];
      var hit;

      for (var [node, path] of nodeEntries) {
        var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

        if (mode === 'highest' && isLower) {
          continue;
        }

        if (!match(node, path)) {
          // If we've arrived at a leaf text node that is not lower than the last
          // hit, then we've found a branch that doesn't include a match, which
          // means the match is not universal.
          if (universal && !isLower && Text.isText(node)) {
            return;
          } else {
            continue;
          }
        } // If there's a match and it's lower than the last, update the hit.


        if (mode === 'lowest' && isLower) {
          hit = [node, path];
          continue;
        } // In lowest mode we emit the last hit, once it's guaranteed lowest.


        var emit = mode === 'lowest' ? hit : [node, path];

        if (emit) {
          if (universal) {
            matches.push(emit);
          } else {
            yield emit;
          }
        }

        hit = [node, path];
      } // Since lowest is always emitting one behind, catch up at the end.


      if (mode === 'lowest' && hit) {
        if (universal) {
          matches.push(hit);
        } else {
          yield hit;
        }
      } // Universal defers to ensure that the match occurs in every branch, so we
      // yield all of the matches after iterating.


      if (universal) {
        yield* matches;
      }
    },

    /**
     * Normalize any dirty objects in the editor.
     */
    normalize(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        force = false
      } = options;

      var getDirtyPaths = editor => {
        return DIRTY_PATHS.get(editor) || [];
      };

      var getDirtyPathKeys = editor => {
        return DIRTY_PATH_KEYS.get(editor) || new Set();
      };

      var popDirtyPath = editor => {
        var path = getDirtyPaths(editor).pop();
        var key = path.join(',');
        getDirtyPathKeys(editor).delete(key);
        return path;
      };

      if (!Editor.isNormalizing(editor)) {
        return;
      }

      if (force) {
        var allPaths = Array.from(Node.nodes(editor), _ref2 => {
          var [, p] = _ref2;
          return p;
        });
        var allPathKeys = new Set(allPaths.map(p => p.join(',')));
        DIRTY_PATHS.set(editor, allPaths);
        DIRTY_PATH_KEYS.set(editor, allPathKeys);
      }

      if (getDirtyPaths(editor).length === 0) {
        return;
      }

      Editor.withoutNormalizing(editor, () => {
        /*
          Fix dirty elements with no children.
          editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
          Running an initial pass avoids the catch-22 race condition.
        */
        for (var dirtyPath of getDirtyPaths(editor)) {
          if (Node.has(editor, dirtyPath)) {
            var entry = Editor.node(editor, dirtyPath);
            var [node, _] = entry;
            /*
              The default normalizer inserts an empty text node in this scenario, but it can be customised.
              So there is some risk here.
                         As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
              by definition adding children to an empty node can't cause other paths to change.
            */

            if (Element$1.isElement(node) && node.children.length === 0) {
              editor.normalizeNode(entry);
            }
          }
        }

        var max = getDirtyPaths(editor).length * 42; // HACK: better way?

        var m = 0;

        while (getDirtyPaths(editor).length !== 0) {
          if (m > max) {
            throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
          }

          var _dirtyPath = popDirtyPath(editor); // If the node doesn't exist in the tree, it does not need to be normalized.


          if (Node.has(editor, _dirtyPath)) {
            var _entry = Editor.node(editor, _dirtyPath);

            editor.normalizeNode(_entry);
          }

          m++;
        }
      });
    },

    /**
     * Get the parent node of a location.
     */
    parent(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var path = Editor.path(editor, at, options);
      var parentPath = Path.parent(path);
      var entry = Editor.node(editor, parentPath);
      return entry;
    },

    /**
     * Get the path of a location.
     */
    path(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        depth,
        edge
      } = options;

      if (Path.isPath(at)) {
        if (edge === 'start') {
          var [, firstPath] = Node.first(editor, at);
          at = firstPath;
        } else if (edge === 'end') {
          var [, lastPath] = Node.last(editor, at);
          at = lastPath;
        }
      }

      if (Range.isRange(at)) {
        if (edge === 'start') {
          at = Range.start(at);
        } else if (edge === 'end') {
          at = Range.end(at);
        } else {
          at = Path.common(at.anchor.path, at.focus.path);
        }
      }

      if (Point.isPoint(at)) {
        at = at.path;
      }

      if (depth != null) {
        at = at.slice(0, depth);
      }

      return at;
    },

    hasPath(editor, path) {
      return Node.has(editor, path);
    },

    /**
     * Create a mutable ref for a `Path` object, which will stay in sync as new
     * operations are applied to the editor.
     */
    pathRef(editor, path) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        affinity = 'forward'
      } = options;
      var ref = {
        current: path,
        affinity,

        unref() {
          var {
            current
          } = ref;
          var pathRefs = Editor.pathRefs(editor);
          pathRefs.delete(ref);
          ref.current = null;
          return current;
        }

      };
      var refs = Editor.pathRefs(editor);
      refs.add(ref);
      return ref;
    },

    /**
     * Get the set of currently tracked path refs of the editor.
     */
    pathRefs(editor) {
      var refs = PATH_REFS.get(editor);

      if (!refs) {
        refs = new Set();
        PATH_REFS.set(editor, refs);
      }

      return refs;
    },

    /**
     * Get the start or end point of a location.
     */
    point(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        edge = 'start'
      } = options;

      if (Path.isPath(at)) {
        var path;

        if (edge === 'end') {
          var [, lastPath] = Node.last(editor, at);
          path = lastPath;
        } else {
          var [, firstPath] = Node.first(editor, at);
          path = firstPath;
        }

        var node = Node.get(editor, path);

        if (!Text.isText(node)) {
          throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
        }

        return {
          path,
          offset: edge === 'end' ? node.text.length : 0
        };
      }

      if (Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        return edge === 'start' ? start : end;
      }

      return at;
    },

    /**
     * Create a mutable ref for a `Point` object, which will stay in sync as new
     * operations are applied to the editor.
     */
    pointRef(editor, point) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        affinity = 'forward'
      } = options;
      var ref = {
        current: point,
        affinity,

        unref() {
          var {
            current
          } = ref;
          var pointRefs = Editor.pointRefs(editor);
          pointRefs.delete(ref);
          ref.current = null;
          return current;
        }

      };
      var refs = Editor.pointRefs(editor);
      refs.add(ref);
      return ref;
    },

    /**
     * Get the set of currently tracked point refs of the editor.
     */
    pointRefs(editor) {
      var refs = POINT_REFS.get(editor);

      if (!refs) {
        refs = new Set();
        POINT_REFS.set(editor, refs);
      }

      return refs;
    },

    /**
     * Return all the positions in `at` range where a `Point` can be placed.
     *
     * By default, moves forward by individual offsets at a time, but
     * the `unit` option can be used to to move by character, word, line, or block.
     *
     * The `reverse` option can be used to change iteration direction.
     *
     * Note: By default void nodes are treated as a single point and iteration
     * will not happen inside their content unless you pass in true for the
     * `voids` option, then iteration will occur.
     */
    *positions(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        at = editor.selection,
        unit = 'offset',
        reverse = false,
        voids = false
      } = options;

      if (!at) {
        return;
      }
      /**
       * Algorithm notes:
       *
       * Each step `distance` is dynamic depending on the underlying text
       * and the `unit` specified.  Each step, e.g., a line or word, may
       * span multiple text nodes, so we iterate through the text both on
       * two levels in step-sync:
       *
       * `leafText` stores the text on a text leaf level, and is advanced
       * through using the counters `leafTextOffset` and `leafTextRemaining`.
       *
       * `blockText` stores the text on a block level, and is shortened
       * by `distance` every time it is advanced.
       *
       * We only maintain a window of one blockText and one leafText because
       * a block node always appears before all of its leaf nodes.
       */


      var range = Editor.range(editor, at);
      var [start, end] = Range.edges(range);
      var first = reverse ? end : start;
      var isNewBlock = false;
      var blockText = '';
      var distance = 0; // Distance for leafText to catch up to blockText.

      var leafTextRemaining = 0;
      var leafTextOffset = 0; // Iterate through all nodes in range, grabbing entire textual content
      // of block nodes in blockText, and text nodes in leafText.
      // Exploits the fact that nodes are sequenced in such a way that we first
      // encounter the block node, then all of its text nodes, so when iterating
      // through the blockText and leafText we just need to remember a window of
      // one block node and leaf node, respectively.

      for (var [node, path] of Editor.nodes(editor, {
        at,
        reverse,
        voids
      })) {
        /*
         * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
         */
        if (Element$1.isElement(node)) {
          // Void nodes are a special case, so by default we will always
          // yield their first point. If the `voids` option is set to true,
          // then we will iterate over their content.
          if (!voids && editor.isVoid(node)) {
            yield Editor.start(editor, path);
            continue;
          } // Inline element nodes are ignored as they don't themselves
          // contribute to `blockText` or `leafText` - their parent and
          // children do.


          if (editor.isInline(node)) continue; // Block element node - set `blockText` to its text content.

          if (Editor.hasInlines(editor, node)) {
            // We always exhaust block nodes before encountering a new one:
            //   console.assert(blockText === '',
            //     `blockText='${blockText}' - `+
            //     `not exhausted before new block node`, path)
            // Ensure range considered is capped to `range`, in the
            // start/end edge cases where block extends beyond range.
            // Equivalent to this, but presumably more performant:
            //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
            //   blockRange = Range.intersection(range, blockRange) // intersect
            //   blockText = Editor.string(editor, blockRange, { voids })
            var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
            var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
            blockText = Editor.string(editor, {
              anchor: s,
              focus: e
            }, {
              voids
            });
            isNewBlock = true;
          }
        }
        /*
         * TEXT LEAF NODE - Iterate through text content, yielding
         * positions every `distance` offset according to `unit`.
         */


        if (Text.isText(node)) {
          var isFirst = Path.equals(path, first.path); // Proof that we always exhaust text nodes before encountering a new one:
          //   console.assert(leafTextRemaining <= 0,
          //     `leafTextRemaining=${leafTextRemaining} - `+
          //     `not exhausted before new leaf text node`, path)
          // Reset `leafText` counters for new text node.

          if (isFirst) {
            leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
            leafTextOffset = first.offset; // Works for reverse too.
          } else {
            leafTextRemaining = node.text.length;
            leafTextOffset = reverse ? leafTextRemaining : 0;
          } // Yield position at the start of node (potentially).


          if (isFirst || isNewBlock || unit === 'offset') {
            yield {
              path,
              offset: leafTextOffset
            };
            isNewBlock = false;
          } // Yield positions every (dynamically calculated) `distance` offset.


          while (true) {
            // If `leafText` has caught up with `blockText` (distance=0),
            // and if blockText is exhausted, break to get another block node,
            // otherwise advance blockText forward by the new `distance`.
            if (distance === 0) {
              if (blockText === '') break;
              distance = calcDistance(blockText, unit, reverse); // Split the string at the previously found distance and use the
              // remaining string for the next iteration.

              blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
            } // Advance `leafText` by the current `distance`.


            leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
            leafTextRemaining = leafTextRemaining - distance; // If `leafText` is exhausted, break to get a new leaf node
            // and set distance to the overflow amount, so we'll (maybe)
            // catch up to blockText in the next leaf text node.

            if (leafTextRemaining < 0) {
              distance = -leafTextRemaining;
              break;
            } // Successfully walked `distance` offsets through `leafText`
            // to catch up with `blockText`, so we can reset `distance`
            // and yield this position in this node.


            distance = 0;
            yield {
              path,
              offset: leafTextOffset
            };
          }
        }
      } // Proof that upon completion, we've exahusted both leaf and block text:
      //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
      //   console.assert(blockText === '', "blockText wasn't exhausted")
      // Helper:
      // Return the distance in offsets for a step of size `unit` on given string.


      function calcDistance(text, unit, reverse) {
        if (unit === 'character') {
          return getCharacterDistance(text, reverse);
        } else if (unit === 'word') {
          return getWordDistance(text, reverse);
        } else if (unit === 'line' || unit === 'block') {
          return text.length;
        }

        return 1;
      }
    },

    /**
     * Get the matching node in the branch of the document before a location.
     */
    previous(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      var pointBeforeLocation = Editor.before(editor, at, {
        voids
      });

      if (!pointBeforeLocation) {
        return;
      }

      var [, to] = Editor.first(editor, []); // The search location is from the start of the document to the path of
      // the point before the location passed in

      var span = [pointBeforeLocation.path, to];

      if (Path.isPath(at) && at.length === 0) {
        throw new Error("Cannot get the previous node from the root node!");
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);

          match = n => parent.children.includes(n);
        } else {
          match = () => true;
        }
      }

      var [previous] = Editor.nodes(editor, {
        reverse: true,
        at: span,
        match,
        mode,
        voids
      });
      return previous;
    },

    /**
     * Get a range of a location.
     */
    range(editor, at, to) {
      if (Range.isRange(at) && !to) {
        return at;
      }

      var start = Editor.start(editor, at);
      var end = Editor.end(editor, to || at);
      return {
        anchor: start,
        focus: end
      };
    },

    /**
     * Create a mutable ref for a `Range` object, which will stay in sync as new
     * operations are applied to the editor.
     */
    rangeRef(editor, range) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        affinity = 'forward'
      } = options;
      var ref = {
        current: range,
        affinity,

        unref() {
          var {
            current
          } = ref;
          var rangeRefs = Editor.rangeRefs(editor);
          rangeRefs.delete(ref);
          ref.current = null;
          return current;
        }

      };
      var refs = Editor.rangeRefs(editor);
      refs.add(ref);
      return ref;
    },

    /**
     * Get the set of currently tracked range refs of the editor.
     */
    rangeRefs(editor) {
      var refs = RANGE_REFS.get(editor);

      if (!refs) {
        refs = new Set();
        RANGE_REFS.set(editor, refs);
      }

      return refs;
    },

    /**
     * Remove a custom property from all of the leaf text nodes in the current
     * selection.
     *
     * If the selection is currently collapsed, the removal will be stored on
     * `editor.marks` and applied to the text inserted next.
     */
    removeMark(editor, key) {
      editor.removeMark(key);
    },

    /**
     * Manually set if the editor should currently be normalizing.
     *
     * Note: Using this incorrectly can leave the editor in an invalid state.
     *
     */
    setNormalizing(editor, isNormalizing) {
      NORMALIZING.set(editor, isNormalizing);
    },

    /**
     * Get the start point of a location.
     */
    start(editor, at) {
      return Editor.point(editor, at, {
        edge: 'start'
      });
    },

    /**
     * Get the text string content of a location.
     *
     * Note: by default the text of void nodes is considered to be an empty
     * string, regardless of content, unless you pass in true for the voids option
     */
    string(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        voids = false
      } = options;
      var range = Editor.range(editor, at);
      var [start, end] = Range.edges(range);
      var text = '';

      for (var [node, path] of Editor.nodes(editor, {
        at: range,
        match: Text.isText,
        voids
      })) {
        var t = node.text;

        if (Path.equals(path, end.path)) {
          t = t.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          t = t.slice(start.offset);
        }

        text += t;
      }

      return text;
    },

    /**
     * Convert a range into a non-hanging one.
     */
    unhangRange(editor, range) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        voids = false
      } = options;
      var [start, end] = Range.edges(range); // PERF: exit early if we can guarantee that the range isn't hanging.

      if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
        return range;
      }

      var endBlock = Editor.above(editor, {
        at: end,
        match: n => Editor.isBlock(editor, n)
      });
      var blockPath = endBlock ? endBlock[1] : [];
      var first = Editor.start(editor, start);
      var before = {
        anchor: first,
        focus: end
      };
      var skip = true;

      for (var [node, path] of Editor.nodes(editor, {
        at: before,
        match: Text.isText,
        reverse: true,
        voids
      })) {
        if (skip) {
          skip = false;
          continue;
        }

        if (node.text !== '' || Path.isBefore(path, blockPath)) {
          end = {
            path,
            offset: node.text.length
          };
          break;
        }
      }

      return {
        anchor: start,
        focus: end
      };
    },

    /**
     * Match a void node in the current branch of the editor.
     */
    void(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
        match: n => Editor.isVoid(editor, n)
      }));
    },

    /**
     * Call a function, deferring normalization until after it completes.
     */
    withoutNormalizing(editor, fn) {
      var value = Editor.isNormalizing(editor);
      Editor.setNormalizing(editor, false);

      try {
        fn();
      } finally {
        Editor.setNormalizing(editor, value);
      }

      Editor.normalize(editor);
    }

  };
  var Span = {
    /**
     * Check if a value implements the `Span` interface.
     */
    isSpan(value) {
      return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
    }

  };
  var _excluded$3 = ["children"],
      _excluded2$2 = ["text"];
  var IS_NODE_LIST_CACHE = new WeakMap();
  var Node = {
    /**
     * Get the node at a specific path, asserting that it's an ancestor node.
     */
    ancestor(root, path) {
      var node = Node.get(root, path);

      if (Text.isText(node)) {
        throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node));
      }

      return node;
    },

    /**
     * Return a generator of all the ancestor nodes above a specific path.
     *
     * By default the order is top-down, from highest to lowest ancestor in
     * the tree, but you can pass the `reverse: true` option to go bottom-up.
     */
    *ancestors(root, path) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      for (var p of Path.ancestors(path, options)) {
        var n = Node.ancestor(root, p);
        var entry = [n, p];
        yield entry;
      }
    },

    /**
     * Get the child of a node at a specific index.
     */
    child(root, index) {
      if (Text.isText(root)) {
        throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
      }

      var c = root.children[index];

      if (c == null) {
        throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(JSON.stringify(root)));
      }

      return c;
    },

    /**
     * Iterate over the children of a node at a specific path.
     */
    *children(root, path) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        reverse = false
      } = options;
      var ancestor = Node.ancestor(root, path);
      var {
        children
      } = ancestor;
      var index = reverse ? children.length - 1 : 0;

      while (reverse ? index >= 0 : index < children.length) {
        var child = Node.child(ancestor, index);
        var childPath = path.concat(index);
        yield [child, childPath];
        index = reverse ? index - 1 : index + 1;
      }
    },

    /**
     * Get an entry for the common ancesetor node of two paths.
     */
    common(root, path, another) {
      var p = Path.common(path, another);
      var n = Node.get(root, p);
      return [n, p];
    },

    /**
     * Get the node at a specific path, asserting that it's a descendant node.
     */
    descendant(root, path) {
      var node = Node.get(root, path);

      if (Editor.isEditor(node)) {
        throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node));
      }

      return node;
    },

    /**
     * Return a generator of all the descendant node entries inside a root node.
     */
    *descendants(root) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      for (var [node, path] of Node.nodes(root, options)) {
        if (path.length !== 0) {
          // NOTE: we have to coerce here because checking the path's length does
          // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
          yield [node, path];
        }
      }
    },

    /**
     * Return a generator of all the element nodes inside a root node. Each iteration
     * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
     * root node is an element it will be included in the iteration as well.
     */
    *elements(root) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      for (var [node, path] of Node.nodes(root, options)) {
        if (Element$1.isElement(node)) {
          yield [node, path];
        }
      }
    },

    /**
     * Extract props from a Node.
     */
    extractProps(node) {
      if (Element$1.isAncestor(node)) {
        var properties = _objectWithoutProperties(node, _excluded$3);

        return properties;
      } else {
        var properties = _objectWithoutProperties(node, _excluded2$2);

        return properties;
      }
    },

    /**
     * Get the first node entry in a root node from a path.
     */
    first(root, path) {
      var p = path.slice();
      var n = Node.get(root, p);

      while (n) {
        if (Text.isText(n) || n.children.length === 0) {
          break;
        } else {
          n = n.children[0];
          p.push(0);
        }
      }

      return [n, p];
    },

    /**
     * Get the sliced fragment represented by a range inside a root node.
     */
    fragment(root, range) {
      if (Text.isText(root)) {
        throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
      }

      var newRoot = fn({
        children: root.children
      }, r => {
        var [start, end] = Range.edges(range);
        var nodeEntries = Node.nodes(r, {
          reverse: true,
          pass: _ref => {
            var [, path] = _ref;
            return !Range.includes(range, path);
          }
        });

        for (var [, path] of nodeEntries) {
          if (!Range.includes(range, path)) {
            var parent = Node.parent(r, path);
            var index = path[path.length - 1];
            parent.children.splice(index, 1);
          }

          if (Path.equals(path, end.path)) {
            var leaf = Node.leaf(r, path);
            leaf.text = leaf.text.slice(0, end.offset);
          }

          if (Path.equals(path, start.path)) {
            var _leaf = Node.leaf(r, path);

            _leaf.text = _leaf.text.slice(start.offset);
          }
        }

        if (Editor.isEditor(r)) {
          r.selection = null;
        }
      });
      return newRoot.children;
    },

    /**
     * Get the descendant node referred to by a specific path. If the path is an
     * empty array, it refers to the root node itself.
     */
    get(root, path) {
      var node = root;

      for (var i = 0; i < path.length; i++) {
        var p = path[i];

        if (Text.isText(node) || !node.children[p]) {
          throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
        }

        node = node.children[p];
      }

      return node;
    },

    /**
     * Check if a descendant node exists at a specific path.
     */
    has(root, path) {
      var node = root;

      for (var i = 0; i < path.length; i++) {
        var p = path[i];

        if (Text.isText(node) || !node.children[p]) {
          return false;
        }

        node = node.children[p];
      }

      return true;
    },

    /**
     * Check if a value implements the `Node` interface.
     */
    isNode(value) {
      return Text.isText(value) || Element$1.isElement(value) || Editor.isEditor(value);
    },

    /**
     * Check if a value is a list of `Node` objects.
     */
    isNodeList(value) {
      if (!Array.isArray(value)) {
        return false;
      }

      var cachedResult = IS_NODE_LIST_CACHE.get(value);

      if (cachedResult !== undefined) {
        return cachedResult;
      }

      var isNodeList = value.every(val => Node.isNode(val));
      IS_NODE_LIST_CACHE.set(value, isNodeList);
      return isNodeList;
    },

    /**
     * Get the last node entry in a root node from a path.
     */
    last(root, path) {
      var p = path.slice();
      var n = Node.get(root, p);

      while (n) {
        if (Text.isText(n) || n.children.length === 0) {
          break;
        } else {
          var i = n.children.length - 1;
          n = n.children[i];
          p.push(i);
        }
      }

      return [n, p];
    },

    /**
     * Get the node at a specific path, ensuring it's a leaf text node.
     */
    leaf(root, path) {
      var node = Node.get(root, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node));
      }

      return node;
    },

    /**
     * Return a generator of the in a branch of the tree, from a specific path.
     *
     * By default the order is top-down, from highest to lowest node in the tree,
     * but you can pass the `reverse: true` option to go bottom-up.
     */
    *levels(root, path) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      for (var p of Path.levels(path, options)) {
        var n = Node.get(root, p);
        yield [n, p];
      }
    },

    /**
     * Check if a node matches a set of props.
     */
    matches(node, props) {
      return Element$1.isElement(node) && Element$1.isElementProps(props) && Element$1.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
    },

    /**
     * Return a generator of all the node entries of a root node. Each entry is
     * returned as a `[Node, Path]` tuple, with the path referring to the node's
     * position inside the root node.
     */
    *nodes(root) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        pass,
        reverse = false
      } = options;
      var {
        from = [],
        to
      } = options;
      var visited = new Set();
      var p = [];
      var n = root;

      while (true) {
        if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
          break;
        }

        if (!visited.has(n)) {
          yield [n, p];
        } // If we're allowed to go downward and we haven't descended yet, do.


        if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
          visited.add(n);
          var nextIndex = reverse ? n.children.length - 1 : 0;

          if (Path.isAncestor(p, from)) {
            nextIndex = from[p.length];
          }

          p = p.concat(nextIndex);
          n = Node.get(root, p);
          continue;
        } // If we're at the root and we can't go down, we're done.


        if (p.length === 0) {
          break;
        } // If we're going forward...


        if (!reverse) {
          var newPath = Path.next(p);

          if (Node.has(root, newPath)) {
            p = newPath;
            n = Node.get(root, p);
            continue;
          }
        } // If we're going backward...


        if (reverse && p[p.length - 1] !== 0) {
          var _newPath = Path.previous(p);

          p = _newPath;
          n = Node.get(root, p);
          continue;
        } // Otherwise we're going upward...


        p = Path.parent(p);
        n = Node.get(root, p);
        visited.add(n);
      }
    },

    /**
     * Get the parent of a node at a specific path.
     */
    parent(root, path) {
      var parentPath = Path.parent(path);
      var p = Node.get(root, parentPath);

      if (Text.isText(p)) {
        throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
      }

      return p;
    },

    /**
     * Get the concatenated text string of a node's content.
     *
     * Note that this will not include spaces or line breaks between block nodes.
     * It is not a user-facing string, but a string for performing offset-related
     * computations for a node.
     */
    string(node) {
      if (Text.isText(node)) {
        return node.text;
      } else {
        return node.children.map(Node.string).join('');
      }
    },

    /**
     * Return a generator of all leaf text nodes in a root node.
     */
    *texts(root) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      for (var [node, path] of Node.nodes(root, options)) {
        if (Text.isText(node)) {
          yield [node, path];
        }
      }
    }

  };

  function ownKeys$7(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$7(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$7(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$7(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var Operation = {
    /**
     * Check of a value is a `NodeOperation` object.
     */
    isNodeOperation(value) {
      return Operation.isOperation(value) && value.type.endsWith('_node');
    },

    /**
     * Check of a value is an `Operation` object.
     */
    isOperation(value) {
      if (!isPlainObject(value)) {
        return false;
      }

      switch (value.type) {
        case 'insert_node':
          return Path.isPath(value.path) && Node.isNode(value.node);

        case 'insert_text':
          return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

        case 'merge_node':
          return typeof value.position === 'number' && Path.isPath(value.path) && isPlainObject(value.properties);

        case 'move_node':
          return Path.isPath(value.path) && Path.isPath(value.newPath);

        case 'remove_node':
          return Path.isPath(value.path) && Node.isNode(value.node);

        case 'remove_text':
          return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

        case 'set_node':
          return Path.isPath(value.path) && isPlainObject(value.properties) && isPlainObject(value.newProperties);

        case 'set_selection':
          return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject(value.properties) && isPlainObject(value.newProperties);

        case 'split_node':
          return Path.isPath(value.path) && typeof value.position === 'number' && isPlainObject(value.properties);

        default:
          return false;
      }
    },

    /**
     * Check if a value is a list of `Operation` objects.
     */
    isOperationList(value) {
      return Array.isArray(value) && value.every(val => Operation.isOperation(val));
    },

    /**
     * Check of a value is a `SelectionOperation` object.
     */
    isSelectionOperation(value) {
      return Operation.isOperation(value) && value.type.endsWith('_selection');
    },

    /**
     * Check of a value is a `TextOperation` object.
     */
    isTextOperation(value) {
      return Operation.isOperation(value) && value.type.endsWith('_text');
    },

    /**
     * Invert an operation, returning a new operation that will exactly undo the
     * original when applied.
     */
    inverse(op) {
      switch (op.type) {
        case 'insert_node':
          {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              type: 'remove_node'
            });
          }

        case 'insert_text':
          {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              type: 'remove_text'
            });
          }

        case 'merge_node':
          {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              type: 'split_node',
              path: Path.previous(op.path)
            });
          }

        case 'move_node':
          {
            var {
              newPath,
              path
            } = op; // PERF: in this case the move operation is a no-op anyways.

            if (Path.equals(newPath, path)) {
              return op;
            } // If the move happens completely within a single parent the path and
            // newPath are stable with respect to each other.


            if (Path.isSibling(path, newPath)) {
              return _objectSpread$7(_objectSpread$7({}, op), {}, {
                path: newPath,
                newPath: path
              });
            } // If the move does not happen within a single parent it is possible
            // for the move to impact the true path to the location where the node
            // was removed from and where it was inserted. We have to adjust for this
            // and find the original path. We can accomplish this (only in non-sibling)
            // moves by looking at the impact of the move operation on the node
            // after the original move path.


            var inversePath = Path.transform(path, op);
            var inverseNewPath = Path.transform(Path.next(path), op);
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              path: inversePath,
              newPath: inverseNewPath
            });
          }

        case 'remove_node':
          {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              type: 'insert_node'
            });
          }

        case 'remove_text':
          {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              type: 'insert_text'
            });
          }

        case 'set_node':
          {
            var {
              properties,
              newProperties
            } = op;
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: newProperties,
              newProperties: properties
            });
          }

        case 'set_selection':
          {
            var {
              properties: _properties,
              newProperties: _newProperties
            } = op;

            if (_properties == null) {
              return _objectSpread$7(_objectSpread$7({}, op), {}, {
                properties: _newProperties,
                newProperties: null
              });
            } else if (_newProperties == null) {
              return _objectSpread$7(_objectSpread$7({}, op), {}, {
                properties: null,
                newProperties: _properties
              });
            } else {
              return _objectSpread$7(_objectSpread$7({}, op), {}, {
                properties: _newProperties,
                newProperties: _properties
              });
            }
          }

        case 'split_node':
          {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              type: 'merge_node',
              path: Path.next(op.path)
            });
          }
      }
    }

  };
  var Path = {
    /**
     * Get a list of ancestor paths for a given path.
     *
     * The paths are sorted from shallowest to deepest ancestor. However, if the
     * `reverse: true` option is passed, they are reversed.
     */
    ancestors(path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        reverse = false
      } = options;
      var paths = Path.levels(path, options);

      if (reverse) {
        paths = paths.slice(1);
      } else {
        paths = paths.slice(0, -1);
      }

      return paths;
    },

    /**
     * Get the common ancestor path of two paths.
     */
    common(path, another) {
      var common = [];

      for (var i = 0; i < path.length && i < another.length; i++) {
        var av = path[i];
        var bv = another[i];

        if (av !== bv) {
          break;
        }

        common.push(av);
      }

      return common;
    },

    /**
     * Compare a path to another, returning an integer indicating whether the path
     * was before, at, or after the other.
     *
     * Note: Two paths of unequal length can still receive a `0` result if one is
     * directly above or below the other. If you want exact matching, use
     * [[Path.equals]] instead.
     */
    compare(path, another) {
      var min = Math.min(path.length, another.length);

      for (var i = 0; i < min; i++) {
        if (path[i] < another[i]) return -1;
        if (path[i] > another[i]) return 1;
      }

      return 0;
    },

    /**
     * Check if a path ends after one of the indexes in another.
     */
    endsAfter(path, another) {
      var i = path.length - 1;
      var as = path.slice(0, i);
      var bs = another.slice(0, i);
      var av = path[i];
      var bv = another[i];
      return Path.equals(as, bs) && av > bv;
    },

    /**
     * Check if a path ends at one of the indexes in another.
     */
    endsAt(path, another) {
      var i = path.length;
      var as = path.slice(0, i);
      var bs = another.slice(0, i);
      return Path.equals(as, bs);
    },

    /**
     * Check if a path ends before one of the indexes in another.
     */
    endsBefore(path, another) {
      var i = path.length - 1;
      var as = path.slice(0, i);
      var bs = another.slice(0, i);
      var av = path[i];
      var bv = another[i];
      return Path.equals(as, bs) && av < bv;
    },

    /**
     * Check if a path is exactly equal to another.
     */
    equals(path, another) {
      return path.length === another.length && path.every((n, i) => n === another[i]);
    },

    /**
     * Check if the path of previous sibling node exists
     */
    hasPrevious(path) {
      return path[path.length - 1] > 0;
    },

    /**
     * Check if a path is after another.
     */
    isAfter(path, another) {
      return Path.compare(path, another) === 1;
    },

    /**
     * Check if a path is an ancestor of another.
     */
    isAncestor(path, another) {
      return path.length < another.length && Path.compare(path, another) === 0;
    },

    /**
     * Check if a path is before another.
     */
    isBefore(path, another) {
      return Path.compare(path, another) === -1;
    },

    /**
     * Check if a path is a child of another.
     */
    isChild(path, another) {
      return path.length === another.length + 1 && Path.compare(path, another) === 0;
    },

    /**
     * Check if a path is equal to or an ancestor of another.
     */
    isCommon(path, another) {
      return path.length <= another.length && Path.compare(path, another) === 0;
    },

    /**
     * Check if a path is a descendant of another.
     */
    isDescendant(path, another) {
      return path.length > another.length && Path.compare(path, another) === 0;
    },

    /**
     * Check if a path is the parent of another.
     */
    isParent(path, another) {
      return path.length + 1 === another.length && Path.compare(path, another) === 0;
    },

    /**
     * Check is a value implements the `Path` interface.
     */
    isPath(value) {
      return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
    },

    /**
     * Check if a path is a sibling of another.
     */
    isSibling(path, another) {
      if (path.length !== another.length) {
        return false;
      }

      var as = path.slice(0, -1);
      var bs = another.slice(0, -1);
      var al = path[path.length - 1];
      var bl = another[another.length - 1];
      return al !== bl && Path.equals(as, bs);
    },

    /**
     * Get a list of paths at every level down to a path. Note: this is the same
     * as `Path.ancestors`, but including the path itself.
     *
     * The paths are sorted from shallowest to deepest. However, if the `reverse:
     * true` option is passed, they are reversed.
     */
    levels(path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        reverse = false
      } = options;
      var list = [];

      for (var i = 0; i <= path.length; i++) {
        list.push(path.slice(0, i));
      }

      if (reverse) {
        list.reverse();
      }

      return list;
    },

    /**
     * Given a path, get the path to the next sibling node.
     */
    next(path) {
      if (path.length === 0) {
        throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
      }

      var last = path[path.length - 1];
      return path.slice(0, -1).concat(last + 1);
    },

    /**
     * Returns whether this operation can affect paths or not. Used as an
     * optimization when updating dirty paths during normalization
     *
     * NOTE: This *must* be kept in sync with the implementation of 'transform'
     * below
     */
    operationCanTransformPath(operation) {
      switch (operation.type) {
        case 'insert_node':
        case 'remove_node':
        case 'merge_node':
        case 'split_node':
        case 'move_node':
          return true;

        default:
          return false;
      }
    },

    /**
     * Given a path, return a new path referring to the parent node above it.
     */
    parent(path) {
      if (path.length === 0) {
        throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
      }

      return path.slice(0, -1);
    },

    /**
     * Given a path, get the path to the previous sibling node.
     */
    previous(path) {
      if (path.length === 0) {
        throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
      }

      var last = path[path.length - 1];

      if (last <= 0) {
        throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
      }

      return path.slice(0, -1).concat(last - 1);
    },

    /**
     * Get a path relative to an ancestor.
     */
    relative(path, ancestor) {
      if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
        throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
      }

      return path.slice(ancestor.length);
    },

    /**
     * Transform a path by an operation.
     */
    transform(path, operation) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return fn(path, p => {
        var {
          affinity = 'forward'
        } = options; // PERF: Exit early if the operation is guaranteed not to have an effect.

        if (!path || (path === null || path === void 0 ? void 0 : path.length) === 0) {
          return;
        }

        if (p === null) {
          return null;
        }

        switch (operation.type) {
          case 'insert_node':
            {
              var {
                path: op
              } = operation;

              if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
                p[op.length - 1] += 1;
              }

              break;
            }

          case 'remove_node':
            {
              var {
                path: _op
              } = operation;

              if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
                return null;
              } else if (Path.endsBefore(_op, p)) {
                p[_op.length - 1] -= 1;
              }

              break;
            }

          case 'merge_node':
            {
              var {
                path: _op2,
                position
              } = operation;

              if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
                p[_op2.length - 1] -= 1;
              } else if (Path.isAncestor(_op2, p)) {
                p[_op2.length - 1] -= 1;
                p[_op2.length] += position;
              }

              break;
            }

          case 'split_node':
            {
              var {
                path: _op3,
                position: _position
              } = operation;

              if (Path.equals(_op3, p)) {
                if (affinity === 'forward') {
                  p[p.length - 1] += 1;
                } else if (affinity === 'backward') ;else {
                  return null;
                }
              } else if (Path.endsBefore(_op3, p)) {
                p[_op3.length - 1] += 1;
              } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
                p[_op3.length - 1] += 1;
                p[_op3.length] -= _position;
              }

              break;
            }

          case 'move_node':
            {
              var {
                path: _op4,
                newPath: onp
              } = operation; // If the old and new path are the same, it's a no-op.

              if (Path.equals(_op4, onp)) {
                return;
              }

              if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
                var copy = onp.slice();

                if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                  copy[_op4.length - 1] -= 1;
                }

                return copy.concat(p.slice(_op4.length));
              } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
                if (Path.endsBefore(_op4, p)) {
                  p[_op4.length - 1] -= 1;
                } else {
                  p[_op4.length - 1] += 1;
                }
              } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
                if (Path.endsBefore(_op4, p)) {
                  p[_op4.length - 1] -= 1;
                }

                p[onp.length - 1] += 1;
              } else if (Path.endsBefore(_op4, p)) {
                if (Path.equals(onp, p)) {
                  p[onp.length - 1] += 1;
                }

                p[_op4.length - 1] -= 1;
              }

              break;
            }
        }
      });
    }

  };
  var PathRef = {
    /**
     * Transform the path ref's current value by an operation.
     */
    transform(ref, op) {
      var {
        current,
        affinity
      } = ref;

      if (current == null) {
        return;
      }

      var path = Path.transform(current, op, {
        affinity
      });
      ref.current = path;

      if (path == null) {
        ref.unref();
      }
    }

  };

  function ownKeys$6(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$6(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$6(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$6(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var Point = {
    /**
     * Compare a point to another, returning an integer indicating whether the
     * point was before, at, or after the other.
     */
    compare(point, another) {
      var result = Path.compare(point.path, another.path);

      if (result === 0) {
        if (point.offset < another.offset) return -1;
        if (point.offset > another.offset) return 1;
        return 0;
      }

      return result;
    },

    /**
     * Check if a point is after another.
     */
    isAfter(point, another) {
      return Point.compare(point, another) === 1;
    },

    /**
     * Check if a point is before another.
     */
    isBefore(point, another) {
      return Point.compare(point, another) === -1;
    },

    /**
     * Check if a point is exactly equal to another.
     */
    equals(point, another) {
      // PERF: ensure the offsets are equal first since they are cheaper to check.
      return point.offset === another.offset && Path.equals(point.path, another.path);
    },

    /**
     * Check if a value implements the `Point` interface.
     */
    isPoint(value) {
      return isPlainObject(value) && typeof value.offset === 'number' && Path.isPath(value.path);
    },

    /**
     * Transform a point by an operation.
     */
    transform(point, op) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return fn(point, p => {
        if (p === null) {
          return null;
        }

        var {
          affinity = 'forward'
        } = options;
        var {
          path,
          offset
        } = p;

        switch (op.type) {
          case 'insert_node':
          case 'move_node':
            {
              p.path = Path.transform(path, op, options);
              break;
            }

          case 'insert_text':
            {
              if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === 'forward')) {
                p.offset += op.text.length;
              }

              break;
            }

          case 'merge_node':
            {
              if (Path.equals(op.path, path)) {
                p.offset += op.position;
              }

              p.path = Path.transform(path, op, options);
              break;
            }

          case 'remove_text':
            {
              if (Path.equals(op.path, path) && op.offset <= offset) {
                p.offset -= Math.min(offset - op.offset, op.text.length);
              }

              break;
            }

          case 'remove_node':
            {
              if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
                return null;
              }

              p.path = Path.transform(path, op, options);
              break;
            }

          case 'split_node':
            {
              if (Path.equals(op.path, path)) {
                if (op.position === offset && affinity == null) {
                  return null;
                } else if (op.position < offset || op.position === offset && affinity === 'forward') {
                  p.offset -= op.position;
                  p.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                    affinity: 'forward'
                  }));
                }
              } else {
                p.path = Path.transform(path, op, options);
              }

              break;
            }
        }
      });
    }

  };
  var PointRef = {
    /**
     * Transform the point ref's current value by an operation.
     */
    transform(ref, op) {
      var {
        current,
        affinity
      } = ref;

      if (current == null) {
        return;
      }

      var point = Point.transform(current, op, {
        affinity
      });
      ref.current = point;

      if (point == null) {
        ref.unref();
      }
    }

  };
  var _excluded$2 = ["anchor", "focus"];

  function ownKeys$5(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$5(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$5(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$5(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var Range = {
    /**
     * Get the start and end points of a range, in the order in which they appear
     * in the document.
     */
    edges(range) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        reverse = false
      } = options;
      var {
        anchor,
        focus
      } = range;
      return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
    },

    /**
     * Get the end point of a range.
     */
    end(range) {
      var [, end] = Range.edges(range);
      return end;
    },

    /**
     * Check if a range is exactly equal to another.
     */
    equals(range, another) {
      return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
    },

    /**
     * Check if a range includes a path, a point or part of another range.
     */
    includes(range, target) {
      if (Range.isRange(target)) {
        if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
          return true;
        }

        var [rs, re] = Range.edges(range);
        var [ts, te] = Range.edges(target);
        return Point.isBefore(rs, ts) && Point.isAfter(re, te);
      }

      var [start, end] = Range.edges(range);
      var isAfterStart = false;
      var isBeforeEnd = false;

      if (Point.isPoint(target)) {
        isAfterStart = Point.compare(target, start) >= 0;
        isBeforeEnd = Point.compare(target, end) <= 0;
      } else {
        isAfterStart = Path.compare(target, start.path) >= 0;
        isBeforeEnd = Path.compare(target, end.path) <= 0;
      }

      return isAfterStart && isBeforeEnd;
    },

    /**
     * Get the intersection of a range with another.
     */
    intersection(range, another) {
      var rest = _objectWithoutProperties(range, _excluded$2);

      var [s1, e1] = Range.edges(range);
      var [s2, e2] = Range.edges(another);
      var start = Point.isBefore(s1, s2) ? s2 : s1;
      var end = Point.isBefore(e1, e2) ? e1 : e2;

      if (Point.isBefore(end, start)) {
        return null;
      } else {
        return _objectSpread$5({
          anchor: start,
          focus: end
        }, rest);
      }
    },

    /**
     * Check if a range is backward, meaning that its anchor point appears in the
     * document _after_ its focus point.
     */
    isBackward(range) {
      var {
        anchor,
        focus
      } = range;
      return Point.isAfter(anchor, focus);
    },

    /**
     * Check if a range is collapsed, meaning that both its anchor and focus
     * points refer to the exact same position in the document.
     */
    isCollapsed(range) {
      var {
        anchor,
        focus
      } = range;
      return Point.equals(anchor, focus);
    },

    /**
     * Check if a range is expanded.
     *
     * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
     */
    isExpanded(range) {
      return !Range.isCollapsed(range);
    },

    /**
     * Check if a range is forward.
     *
     * This is the opposite of [[Range.isBackward]] and is provided for legibility.
     */
    isForward(range) {
      return !Range.isBackward(range);
    },

    /**
     * Check if a value implements the [[Range]] interface.
     */
    isRange(value) {
      return isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
    },

    /**
     * Iterate through all of the point entries in a range.
     */
    *points(range) {
      yield [range.anchor, 'anchor'];
      yield [range.focus, 'focus'];
    },

    /**
     * Get the start point of a range.
     */
    start(range) {
      var [start] = Range.edges(range);
      return start;
    },

    /**
     * Transform a range by an operation.
     */
    transform(range, op) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return fn(range, r => {
        if (r === null) {
          return null;
        }

        var {
          affinity = 'inward'
        } = options;
        var affinityAnchor;
        var affinityFocus;

        if (affinity === 'inward') {
          // If the range is collapsed, make sure to use the same affinity to
          // avoid the two points passing each other and expanding in the opposite
          // direction
          var isCollapsed = Range.isCollapsed(r);

          if (Range.isForward(r)) {
            affinityAnchor = 'forward';
            affinityFocus = isCollapsed ? affinityAnchor : 'backward';
          } else {
            affinityAnchor = 'backward';
            affinityFocus = isCollapsed ? affinityAnchor : 'forward';
          }
        } else if (affinity === 'outward') {
          if (Range.isForward(r)) {
            affinityAnchor = 'backward';
            affinityFocus = 'forward';
          } else {
            affinityAnchor = 'forward';
            affinityFocus = 'backward';
          }
        } else {
          affinityAnchor = affinity;
          affinityFocus = affinity;
        }

        var anchor = Point.transform(r.anchor, op, {
          affinity: affinityAnchor
        });
        var focus = Point.transform(r.focus, op, {
          affinity: affinityFocus
        });

        if (!anchor || !focus) {
          return null;
        }

        r.anchor = anchor;
        r.focus = focus;
      });
    }

  };
  var RangeRef = {
    /**
     * Transform the range ref's current value by an operation.
     */
    transform(ref, op) {
      var {
        current,
        affinity
      } = ref;

      if (current == null) {
        return;
      }

      var path = Range.transform(current, op, {
        affinity
      });
      ref.current = path;

      if (path == null) {
        ref.unref();
      }
    }

  };
  /*
    Custom deep equal comparison for Slate nodes.

    We don't need general purpose deep equality;
    Slate only supports plain values, Arrays, and nested objects.
    Complex values nested inside Arrays are not supported.

    Slate objects are designed to be serialised, so
    missing keys are deliberately normalised to undefined.
   */

  var isDeepEqual = (node, another) => {
    for (var key in node) {
      var a = node[key];
      var b = another[key];

      if (isPlainObject(a) && isPlainObject(b)) {
        if (!isDeepEqual(a, b)) return false;
      } else if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
        }
      } else if (a !== b) {
        return false;
      }
    }
    /*
      Deep object equality is only necessary in one direction; in the reverse direction
      we are only looking for keys that are missing.
      As above, undefined keys are normalised to missing.
    */


    for (var _key in another) {
      if (node[_key] === undefined && another[_key] !== undefined) {
        return false;
      }
    }

    return true;
  };

  var _excluded$1 = ["text"],
      _excluded2$1 = ["anchor", "focus"];

  function ownKeys$4(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$4(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$4(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$4(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var Text = {
    /**
     * Check if two text nodes are equal.
     *
     * When loose is set, the text is not compared. This is
     * used to check whether sibling text nodes can be merged.
     */
    equals(text, another) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        loose = false
      } = options;

      function omitText(obj) {
        var rest = _objectWithoutProperties(obj, _excluded$1);

        return rest;
      }

      return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
    },

    /**
     * Check if a value implements the `Text` interface.
     */
    isText(value) {
      return isPlainObject(value) && typeof value.text === 'string';
    },

    /**
     * Check if a value is a list of `Text` objects.
     */
    isTextList(value) {
      return Array.isArray(value) && value.every(val => Text.isText(val));
    },

    /**
     * Check if some props are a partial of Text.
     */
    isTextProps(props) {
      return props.text !== undefined;
    },

    /**
     * Check if an text matches set of properties.
     *
     * Note: this is for matching custom properties, and it does not ensure that
     * the `text` property are two nodes equal.
     */
    matches(text, props) {
      for (var key in props) {
        if (key === 'text') {
          continue;
        }

        if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
          return false;
        }
      }

      return true;
    },

    /**
     * Get the leaves for a text node given decorations.
     */
    decorations(node, decorations) {
      var leaves = [_objectSpread$4({}, node)];

      for (var dec of decorations) {
        var rest = _objectWithoutProperties(dec, _excluded2$1);

        var [start, end] = Range.edges(dec);
        var next = [];
        var o = 0;

        for (var leaf of leaves) {
          var {
            length
          } = leaf.text;
          var offset = o;
          o += length; // If the range encompases the entire leaf, add the range.

          if (start.offset <= offset && end.offset >= o) {
            Object.assign(leaf, rest);
            next.push(leaf);
            continue;
          } // If the range expanded and match the leaf, or starts after, or ends before it, continue.


          if (start.offset !== end.offset && (start.offset === o || end.offset === offset) || start.offset > o || end.offset < offset || end.offset === offset && offset !== 0) {
            next.push(leaf);
            continue;
          } // Otherwise we need to split the leaf, at the start, end, or both,
          // and add the range to the middle intersecting section. Do the end
          // split first since we don't need to update the offset that way.


          var middle = leaf;
          var before = void 0;
          var after = void 0;

          if (end.offset < o) {
            var off = end.offset - offset;
            after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(off)
            });
            middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(0, off)
            });
          }

          if (start.offset > offset) {
            var _off = start.offset - offset;

            before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(0, _off)
            });
            middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(_off)
            });
          }

          Object.assign(middle, rest);

          if (before) {
            next.push(before);
          }

          next.push(middle);

          if (after) {
            next.push(after);
          }
        }

        leaves = next;
      }

      return leaves;
    }

  };

  function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$3(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$3(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$3(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var applyToDraft = (editor, selection, op) => {
    switch (op.type) {
      case 'insert_node':
        {
          var {
            path,
            node
          } = op;
          var parent = Node.parent(editor, path);
          var index = path[path.length - 1];

          if (index > parent.children.length) {
            throw new Error("Cannot apply an \"insert_node\" operation at path [".concat(path, "] because the destination is past the end of the node."));
          }

          parent.children.splice(index, 0, node);

          if (selection) {
            for (var [point, key] of Range.points(selection)) {
              selection[key] = Point.transform(point, op);
            }
          }

          break;
        }

      case 'insert_text':
        {
          var {
            path: _path,
            offset,
            text
          } = op;
          if (text.length === 0) break;

          var _node = Node.leaf(editor, _path);

          var before = _node.text.slice(0, offset);

          var after = _node.text.slice(offset);

          _node.text = before + text + after;

          if (selection) {
            for (var [_point, _key] of Range.points(selection)) {
              selection[_key] = Point.transform(_point, op);
            }
          }

          break;
        }

      case 'merge_node':
        {
          var {
            path: _path2
          } = op;

          var _node2 = Node.get(editor, _path2);

          var prevPath = Path.previous(_path2);
          var prev = Node.get(editor, prevPath);

          var _parent = Node.parent(editor, _path2);

          var _index = _path2[_path2.length - 1];

          if (Text.isText(_node2) && Text.isText(prev)) {
            prev.text += _node2.text;
          } else if (!Text.isText(_node2) && !Text.isText(prev)) {
            prev.children.push(..._node2.children);
          } else {
            throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(_node2, " ").concat(prev));
          }

          _parent.children.splice(_index, 1);

          if (selection) {
            for (var [_point2, _key2] of Range.points(selection)) {
              selection[_key2] = Point.transform(_point2, op);
            }
          }

          break;
        }

      case 'move_node':
        {
          var {
            path: _path3,
            newPath
          } = op;

          if (Path.isAncestor(_path3, newPath)) {
            throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
          }

          var _node3 = Node.get(editor, _path3);

          var _parent2 = Node.parent(editor, _path3);

          var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
          // the same snapshot in time, there's a mismatch. After either
          // removing the original position, the second step's path can be out
          // of date. So instead of using the `op.newPath` directly, we
          // transform `op.path` to ascertain what the `newPath` would be after
          // the operation was applied.

          _parent2.children.splice(_index2, 1);

          var truePath = Path.transform(_path3, op);
          var newParent = Node.get(editor, Path.parent(truePath));
          var newIndex = truePath[truePath.length - 1];
          newParent.children.splice(newIndex, 0, _node3);

          if (selection) {
            for (var [_point3, _key3] of Range.points(selection)) {
              selection[_key3] = Point.transform(_point3, op);
            }
          }

          break;
        }

      case 'remove_node':
        {
          var {
            path: _path4
          } = op;
          var _index3 = _path4[_path4.length - 1];

          var _parent3 = Node.parent(editor, _path4);

          _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
          // node that was removed we need to update the range or remove it.


          if (selection) {
            for (var [_point4, _key4] of Range.points(selection)) {
              var result = Point.transform(_point4, op);

              if (selection != null && result != null) {
                selection[_key4] = result;
              } else {
                var _prev = void 0;

                var next = void 0;

                for (var [n, p] of Node.texts(editor)) {
                  if (Path.compare(p, _path4) === -1) {
                    _prev = [n, p];
                  } else {
                    next = [n, p];
                    break;
                  }
                }

                var preferNext = false;

                if (_prev && next) {
                  if (Path.equals(next[1], _path4)) {
                    preferNext = !Path.hasPrevious(next[1]);
                  } else {
                    preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
                  }
                }

                if (_prev && !preferNext) {
                  _point4.path = _prev[1];
                  _point4.offset = _prev[0].text.length;
                } else if (next) {
                  _point4.path = next[1];
                  _point4.offset = 0;
                } else {
                  selection = null;
                }
              }
            }
          }

          break;
        }

      case 'remove_text':
        {
          var {
            path: _path5,
            offset: _offset,
            text: _text
          } = op;
          if (_text.length === 0) break;

          var _node4 = Node.leaf(editor, _path5);

          var _before = _node4.text.slice(0, _offset);

          var _after = _node4.text.slice(_offset + _text.length);

          _node4.text = _before + _after;

          if (selection) {
            for (var [_point5, _key5] of Range.points(selection)) {
              selection[_key5] = Point.transform(_point5, op);
            }
          }

          break;
        }

      case 'set_node':
        {
          var {
            path: _path6,
            properties,
            newProperties
          } = op;

          if (_path6.length === 0) {
            throw new Error("Cannot set properties on the root node!");
          }

          var _node5 = Node.get(editor, _path6);

          for (var _key6 in newProperties) {
            if (_key6 === 'children' || _key6 === 'text') {
              throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
            }

            var value = newProperties[_key6];

            if (value == null) {
              delete _node5[_key6];
            } else {
              _node5[_key6] = value;
            }
          } // properties that were previously defined, but are now missing, must be deleted


          for (var _key7 in properties) {
            if (!newProperties.hasOwnProperty(_key7)) {
              delete _node5[_key7];
            }
          }

          break;
        }

      case 'set_selection':
        {
          var {
            newProperties: _newProperties
          } = op;

          if (_newProperties == null) {
            selection = _newProperties;
          } else {
            if (selection == null) {
              if (!Range.isRange(_newProperties)) {
                throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(JSON.stringify(_newProperties), " when there is no current selection."));
              }

              selection = _objectSpread$3({}, _newProperties);
            }

            for (var _key8 in _newProperties) {
              var _value = _newProperties[_key8];

              if (_value == null) {
                if (_key8 === 'anchor' || _key8 === 'focus') {
                  throw new Error("Cannot remove the \"".concat(_key8, "\" selection property"));
                }

                delete selection[_key8];
              } else {
                selection[_key8] = _value;
              }
            }
          }

          break;
        }

      case 'split_node':
        {
          var {
            path: _path7,
            position,
            properties: _properties
          } = op;

          if (_path7.length === 0) {
            throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
          }

          var _node6 = Node.get(editor, _path7);

          var _parent4 = Node.parent(editor, _path7);

          var _index4 = _path7[_path7.length - 1];
          var newNode;

          if (Text.isText(_node6)) {
            var _before2 = _node6.text.slice(0, position);

            var _after2 = _node6.text.slice(position);

            _node6.text = _before2;
            newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
              text: _after2
            });
          } else {
            var _before3 = _node6.children.slice(0, position);

            var _after3 = _node6.children.slice(position);

            _node6.children = _before3;
            newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
              children: _after3
            });
          }

          _parent4.children.splice(_index4 + 1, 0, newNode);

          if (selection) {
            for (var [_point6, _key9] of Range.points(selection)) {
              selection[_key9] = Point.transform(_point6, op);
            }
          }

          break;
        }
    }

    return selection;
  };

  var GeneralTransforms = {
    /**
     * Transform the editor by an operation.
     */
    transform(editor, op) {
      editor.children = ln(editor.children);
      var selection = editor.selection && ln(editor.selection);

      try {
        selection = applyToDraft(editor, selection, op);
      } finally {
        editor.children = dn(editor.children);

        if (selection) {
          editor.selection = r(selection) ? dn(selection) : selection;
        } else {
          editor.selection = null;
        }
      }
    }

  };
  var _excluded = ["text"],
      _excluded2 = ["children"];

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var NodeTransforms = {
    /**
     * Insert nodes at a specific location in the Editor.
     */
    insertNodes(editor, nodes) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          hanging = false,
          voids = false,
          mode = 'lowest'
        } = options;
        var {
          at,
          match,
          select
        } = options;

        if (Node.isNode(nodes)) {
          nodes = [nodes];
        }

        if (nodes.length === 0) {
          return;
        }

        var [node] = nodes; // By default, use the selection as the target location. But if there is
        // no selection, insert at the end of the document since that is such a
        // common use case when inserting from a non-selected state.

        if (!at) {
          if (editor.selection) {
            at = editor.selection;
          } else if (editor.children.length > 0) {
            at = Editor.end(editor, []);
          } else {
            at = [0];
          }

          select = true;
        }

        if (select == null) {
          select = false;
        }

        if (Range.isRange(at)) {
          if (!hanging) {
            at = Editor.unhangRange(editor, at);
          }

          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var [, end] = Range.edges(at);
            var pointRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at
            });
            at = pointRef.unref();
          }
        }

        if (Point.isPoint(at)) {
          if (match == null) {
            if (Text.isText(node)) {
              match = n => Text.isText(n);
            } else if (editor.isInline(node)) {
              match = n => Text.isText(n) || Editor.isInline(editor, n);
            } else {
              match = n => Editor.isBlock(editor, n);
            }
          }

          var [entry] = Editor.nodes(editor, {
            at: at.path,
            match,
            mode,
            voids
          });

          if (entry) {
            var [, _matchPath] = entry;
            var pathRef = Editor.pathRef(editor, _matchPath);
            var isAtEnd = Editor.isEnd(editor, at, _matchPath);
            Transforms.splitNodes(editor, {
              at,
              match,
              mode,
              voids
            });
            var path = pathRef.unref();
            at = isAtEnd ? Path.next(path) : path;
          } else {
            return;
          }
        }

        var parentPath = Path.parent(at);
        var index = at[at.length - 1];

        if (!voids && Editor.void(editor, {
          at: parentPath
        })) {
          return;
        }

        for (var _node of nodes) {
          var _path = parentPath.concat(index);

          index++;
          editor.apply({
            type: 'insert_node',
            path: _path,
            node: _node
          });
          at = Path.next(at);
        }

        at = Path.previous(at);

        if (select) {
          var point = Editor.end(editor, at);

          if (point) {
            Transforms.select(editor, point);
          }
        }
      });
    },

    /**
     * Lift nodes at a specific location upwards in the document tree, splitting
     * their parent in two if necessary.
     */
    liftNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          at = editor.selection,
          mode = 'lowest',
          voids = false
        } = options;
        var {
          match
        } = options;

        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
        }

        if (!at) {
          return;
        }

        var matches = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(matches, _ref => {
          var [, p] = _ref;
          return Editor.pathRef(editor, p);
        });

        for (var pathRef of pathRefs) {
          var path = pathRef.unref();

          if (path.length < 2) {
            throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
          }

          var parentNodeEntry = Editor.node(editor, Path.parent(path));
          var [parent, parentPath] = parentNodeEntry;
          var index = path[path.length - 1];
          var {
            length
          } = parent.children;

          if (length === 1) {
            var toPath = Path.next(parentPath);
            Transforms.moveNodes(editor, {
              at: path,
              to: toPath,
              voids
            });
            Transforms.removeNodes(editor, {
              at: parentPath,
              voids
            });
          } else if (index === 0) {
            Transforms.moveNodes(editor, {
              at: path,
              to: parentPath,
              voids
            });
          } else if (index === length - 1) {
            var _toPath = Path.next(parentPath);

            Transforms.moveNodes(editor, {
              at: path,
              to: _toPath,
              voids
            });
          } else {
            var splitPath = Path.next(path);

            var _toPath2 = Path.next(parentPath);

            Transforms.splitNodes(editor, {
              at: splitPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: path,
              to: _toPath2,
              voids
            });
          }
        }
      });
    },

    /**
     * Merge a node at a location with the previous node of the same depth,
     * removing any empty containing nodes after the merge if necessary.
     */
    mergeNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          match,
          at = editor.selection
        } = options;
        var {
          hanging = false,
          voids = false,
          mode = 'lowest'
        } = options;

        if (!at) {
          return;
        }

        if (match == null) {
          if (Path.isPath(at)) {
            var [parent] = Editor.parent(editor, at);

            match = n => parent.children.includes(n);
          } else {
            match = n => Editor.isBlock(editor, n);
          }
        }

        if (!hanging && Range.isRange(at)) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isRange(at)) {
          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var [, end] = Range.edges(at);
            var pointRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at
            });
            at = pointRef.unref();

            if (options.at == null) {
              Transforms.select(editor, at);
            }
          }
        }

        var [current] = Editor.nodes(editor, {
          at,
          match,
          voids,
          mode
        });
        var prev = Editor.previous(editor, {
          at,
          match,
          voids,
          mode
        });

        if (!current || !prev) {
          return;
        }

        var [node, path] = current;
        var [prevNode, prevPath] = prev;

        if (path.length === 0 || prevPath.length === 0) {
          return;
        }

        var newPath = Path.next(prevPath);
        var commonPath = Path.common(path, prevPath);
        var isPreviousSibling = Path.isSibling(path, prevPath);
        var levels = Array.from(Editor.levels(editor, {
          at: path
        }), _ref2 => {
          var [n] = _ref2;
          return n;
        }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
        // result, in which case we'll want to remove it after merging.

        var emptyAncestor = Editor.above(editor, {
          at: path,
          mode: 'highest',
          match: n => levels.includes(n) && hasSingleChildNest(editor, n)
        });
        var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
        var properties;
        var position; // Ensure that the nodes are equivalent, and figure out what the position
        // and extra properties of the merge will be.

        if (Text.isText(node) && Text.isText(prevNode)) {
          var rest = _objectWithoutProperties(node, _excluded);

          position = prevNode.text.length;
          properties = rest;
        } else if (Element$1.isElement(node) && Element$1.isElement(prevNode)) {
          var rest = _objectWithoutProperties(node, _excluded2);

          position = prevNode.children.length;
          properties = rest;
        } else {
          throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node), " ").concat(JSON.stringify(prevNode)));
        } // If the node isn't already the next sibling of the previous node, move
        // it so that it is before merging.


        if (!isPreviousSibling) {
          Transforms.moveNodes(editor, {
            at: path,
            to: newPath,
            voids
          });
        } // If there was going to be an empty ancestor of the node that was merged,
        // we remove it from the tree.


        if (emptyRef) {
          Transforms.removeNodes(editor, {
            at: emptyRef.current,
            voids
          });
        } // If the target node that we're merging with is empty, remove it instead
        // of merging the two. This is a common rich text editor behavior to
        // prevent losing formatting when deleting entire nodes when you have a
        // hanging selection.
        // if prevNode is first child in parent,don't remove it.


        if (Element$1.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '' && prevPath[prevPath.length - 1] !== 0) {
          Transforms.removeNodes(editor, {
            at: prevPath,
            voids
          });
        } else {
          editor.apply({
            type: 'merge_node',
            path: newPath,
            position,
            properties
          });
        }

        if (emptyRef) {
          emptyRef.unref();
        }
      });
    },

    /**
     * Move the nodes at a location to a new location.
     */
    moveNodes(editor, options) {
      Editor.withoutNormalizing(editor, () => {
        var {
          to,
          at = editor.selection,
          mode = 'lowest',
          voids = false
        } = options;
        var {
          match
        } = options;

        if (!at) {
          return;
        }

        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
        }

        var toRef = Editor.pathRef(editor, to);
        var targets = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(targets, _ref3 => {
          var [, p] = _ref3;
          return Editor.pathRef(editor, p);
        });

        for (var pathRef of pathRefs) {
          var path = pathRef.unref();
          var newPath = toRef.current;

          if (path.length !== 0) {
            editor.apply({
              type: 'move_node',
              path,
              newPath
            });
          }

          if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
            // When performing a sibling move to a later index, the path at the destination is shifted
            // to before the insertion point instead of after. To ensure our group of nodes are inserted
            // in the correct order we increment toRef to account for that
            toRef.current = Path.next(toRef.current);
          }
        }

        toRef.unref();
      });
    },

    /**
     * Remove the nodes at a specific location in the document.
     */
    removeNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          hanging = false,
          voids = false,
          mode = 'lowest'
        } = options;
        var {
          at = editor.selection,
          match
        } = options;

        if (!at) {
          return;
        }

        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
        }

        if (!hanging && Range.isRange(at)) {
          at = Editor.unhangRange(editor, at);
        }

        var depths = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(depths, _ref4 => {
          var [, p] = _ref4;
          return Editor.pathRef(editor, p);
        });

        for (var pathRef of pathRefs) {
          var path = pathRef.unref();

          if (path) {
            var [node] = Editor.node(editor, path);
            editor.apply({
              type: 'remove_node',
              path,
              node
            });
          }
        }
      });
    },

    /**
     * Set new properties on the nodes at a location.
     */
    setNodes(editor, props) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          match,
          at = editor.selection,
          compare,
          merge
        } = options;
        var {
          hanging = false,
          mode = 'lowest',
          split = false,
          voids = false
        } = options;

        if (!at) {
          return;
        }

        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
        }

        if (!hanging && Range.isRange(at)) {
          at = Editor.unhangRange(editor, at);
        }

        if (split && Range.isRange(at)) {
          if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
            // If the range is collapsed in a non-empty node and 'split' is true, there's nothing to
            // set that won't get normalized away
            return;
          }

          var rangeRef = Editor.rangeRef(editor, at, {
            affinity: 'inward'
          });
          var [start, end] = Range.edges(at);
          var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
          var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
          Transforms.splitNodes(editor, {
            at: end,
            match,
            mode: splitMode,
            voids,
            always: !endAtEndOfNode
          });
          var startAtStartOfNode = Editor.isStart(editor, start, start.path);
          Transforms.splitNodes(editor, {
            at: start,
            match,
            mode: splitMode,
            voids,
            always: !startAtStartOfNode
          });
          at = rangeRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }

        if (!compare) {
          compare = (prop, nodeProp) => prop !== nodeProp;
        }

        for (var [node, path] of Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        })) {
          var properties = {};
          var newProperties = {}; // You can't set properties on the editor node.

          if (path.length === 0) {
            continue;
          }

          var hasChanges = false;

          for (var k in props) {
            if (k === 'children' || k === 'text') {
              continue;
            }

            if (compare(props[k], node[k])) {
              hasChanges = true; // Omit new properties from the old properties list

              if (node.hasOwnProperty(k)) properties[k] = node[k]; // Omit properties that have been removed from the new properties list

              if (merge) {
                if (props[k] != null) newProperties[k] = merge(node[k], props[k]);
              } else {
                if (props[k] != null) newProperties[k] = props[k];
              }
            }
          }

          if (hasChanges) {
            editor.apply({
              type: 'set_node',
              path,
              properties,
              newProperties
            });
          }
        }
      });
    },

    /**
     * Split the nodes at a specific location.
     */
    splitNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          mode = 'lowest',
          voids = false
        } = options;
        var {
          match,
          at = editor.selection,
          height = 0,
          always = false
        } = options;

        if (match == null) {
          match = n => Editor.isBlock(editor, n);
        }

        if (Range.isRange(at)) {
          at = deleteRange(editor, at);
        } // If the target is a path, the default height-skipping and position
        // counters need to account for us potentially splitting at a non-leaf.


        if (Path.isPath(at)) {
          var path = at;
          var point = Editor.point(editor, path);
          var [parent] = Editor.parent(editor, path);

          match = n => n === parent;

          height = point.path.length - path.length + 1;
          at = point;
          always = true;
        }

        if (!at) {
          return;
        }

        var beforeRef = Editor.pointRef(editor, at, {
          affinity: 'backward'
        });
        var afterRef;

        try {
          var [highest] = Editor.nodes(editor, {
            at,
            match,
            mode,
            voids
          });

          if (!highest) {
            return;
          }

          var voidMatch = Editor.void(editor, {
            at,
            mode: 'highest'
          });
          var nudge = 0;

          if (!voids && voidMatch) {
            var [voidNode, voidPath] = voidMatch;

            if (Element$1.isElement(voidNode) && editor.isInline(voidNode)) {
              var after = Editor.after(editor, voidPath);

              if (!after) {
                var text = {
                  text: ''
                };
                var afterPath = Path.next(voidPath);
                Transforms.insertNodes(editor, text, {
                  at: afterPath,
                  voids
                });
                after = Editor.point(editor, afterPath);
              }

              at = after;
              always = true;
            }

            var siblingHeight = at.path.length - voidPath.length;
            height = siblingHeight + 1;
            always = true;
          }

          afterRef = Editor.pointRef(editor, at);
          var depth = at.path.length - height;
          var [, highestPath] = highest;
          var lowestPath = at.path.slice(0, depth);
          var position = height === 0 ? at.offset : at.path[depth] + nudge;

          for (var [node, _path2] of Editor.levels(editor, {
            at: lowestPath,
            reverse: true,
            voids
          })) {
            var split = false;

            if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
              break;
            }

            var _point = beforeRef.current;
            var isEnd = Editor.isEnd(editor, _point, _path2);

            if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
              split = true;
              var properties = Node.extractProps(node);
              editor.apply({
                type: 'split_node',
                path: _path2,
                position,
                properties
              });
            }

            position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
          }

          if (options.at == null) {
            var _point2 = afterRef.current || Editor.end(editor, []);

            Transforms.select(editor, _point2);
          }
        } finally {
          var _afterRef;

          beforeRef.unref();
          (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
        }
      });
    },

    /**
     * Unset properties on the nodes at a location.
     */
    unsetNodes(editor, props) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!Array.isArray(props)) {
        props = [props];
      }

      var obj = {};

      for (var key of props) {
        obj[key] = null;
      }

      Transforms.setNodes(editor, obj, options);
    },

    /**
     * Unwrap the nodes at a location from a parent node, splitting the parent if
     * necessary to ensure that only the content in the range is unwrapped.
     */
    unwrapNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          mode = 'lowest',
          split = false,
          voids = false
        } = options;
        var {
          at = editor.selection,
          match
        } = options;

        if (!at) {
          return;
        }

        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
        }

        if (Path.isPath(at)) {
          at = Editor.range(editor, at);
        }

        var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
        var matches = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(matches, _ref5 => {
          var [, p] = _ref5;
          return Editor.pathRef(editor, p);
        } // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
        ).reverse();

        var _loop = function _loop(pathRef) {
          var path = pathRef.unref();
          var [node] = Editor.node(editor, path);
          var range = Editor.range(editor, path);

          if (split && rangeRef) {
            range = Range.intersection(rangeRef.current, range);
          }

          Transforms.liftNodes(editor, {
            at: range,
            match: n => Element$1.isAncestor(node) && node.children.includes(n),
            voids
          });
        };

        for (var pathRef of pathRefs) {
          _loop(pathRef);
        }

        if (rangeRef) {
          rangeRef.unref();
        }
      });
    },

    /**
     * Wrap the nodes at a location in a new container node, splitting the edges
     * of the range first to ensure that only the content in the range is wrapped.
     */
    wrapNodes(editor, element) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          mode = 'lowest',
          split = false,
          voids = false
        } = options;
        var {
          match,
          at = editor.selection
        } = options;

        if (!at) {
          return;
        }

        if (match == null) {
          if (Path.isPath(at)) {
            match = matchPath(editor, at);
          } else if (editor.isInline(element)) {
            match = n => Editor.isInline(editor, n) || Text.isText(n);
          } else {
            match = n => Editor.isBlock(editor, n);
          }
        }

        if (split && Range.isRange(at)) {
          var [start, end] = Range.edges(at);
          var rangeRef = Editor.rangeRef(editor, at, {
            affinity: 'inward'
          });
          Transforms.splitNodes(editor, {
            at: end,
            match,
            voids
          });
          Transforms.splitNodes(editor, {
            at: start,
            match,
            voids
          });
          at = rangeRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }

        var roots = Array.from(Editor.nodes(editor, {
          at,
          match: editor.isInline(element) ? n => Editor.isBlock(editor, n) : n => Editor.isEditor(n),
          mode: 'lowest',
          voids
        }));

        for (var [, rootPath] of roots) {
          var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

          if (!a) {
            continue;
          }

          var matches = Array.from(Editor.nodes(editor, {
            at: a,
            match,
            mode,
            voids
          }));

          if (matches.length > 0) {
            var _ret = function () {
              var [first] = matches;
              var last = matches[matches.length - 1];
              var [, firstPath] = first;
              var [, lastPath] = last;

              if (firstPath.length === 0 && lastPath.length === 0) {
                // if there's no matching parent - usually means the node is an editor - don't do anything
                return "continue";
              }

              var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
              var range = Editor.range(editor, firstPath, lastPath);
              var commonNodeEntry = Editor.node(editor, commonPath);
              var [commonNode] = commonNodeEntry;
              var depth = commonPath.length + 1;
              var wrapperPath = Path.next(lastPath.slice(0, depth));

              var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
                children: []
              });

              Transforms.insertNodes(editor, wrapper, {
                at: wrapperPath,
                voids
              });
              Transforms.moveNodes(editor, {
                at: range,
                match: n => Element$1.isAncestor(commonNode) && commonNode.children.includes(n),
                to: wrapperPath.concat(0),
                voids
              });
            }();

            if (_ret === "continue") continue;
          }
        }
      });
    }

  };

  var hasSingleChildNest = (editor, node) => {
    if (Element$1.isElement(node)) {
      var element = node;

      if (Editor.isVoid(editor, node)) {
        return true;
      } else if (element.children.length === 1) {
        return hasSingleChildNest(editor, element.children[0]);
      } else {
        return false;
      }
    } else if (Editor.isEditor(node)) {
      return false;
    } else {
      return true;
    }
  };
  /**
   * Convert a range into a point by deleting it's content.
   */


  var deleteRange = (editor, range) => {
    if (Range.isCollapsed(range)) {
      return range.anchor;
    } else {
      var [, end] = Range.edges(range);
      var pointRef = Editor.pointRef(editor, end);
      Transforms.delete(editor, {
        at: range
      });
      return pointRef.unref();
    }
  };

  var matchPath = (editor, path) => {
    var [node] = Editor.node(editor, path);
    return n => n === node;
  };

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var SelectionTransforms = {
    /**
     * Collapse the selection.
     */
    collapse(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        edge = 'anchor'
      } = options;
      var {
        selection
      } = editor;

      if (!selection) {
        return;
      } else if (edge === 'anchor') {
        Transforms.select(editor, selection.anchor);
      } else if (edge === 'focus') {
        Transforms.select(editor, selection.focus);
      } else if (edge === 'start') {
        var [start] = Range.edges(selection);
        Transforms.select(editor, start);
      } else if (edge === 'end') {
        var [, end] = Range.edges(selection);
        Transforms.select(editor, end);
      }
    },

    /**
     * Unset the selection.
     */
    deselect(editor) {
      var {
        selection
      } = editor;

      if (selection) {
        editor.apply({
          type: 'set_selection',
          properties: selection,
          newProperties: null
        });
      }
    },

    /**
     * Move the selection's point forward or backward.
     */
    move(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var {
        selection
      } = editor;
      var {
        distance = 1,
        unit = 'character',
        reverse = false
      } = options;
      var {
        edge = null
      } = options;

      if (!selection) {
        return;
      }

      if (edge === 'start') {
        edge = Range.isBackward(selection) ? 'focus' : 'anchor';
      }

      if (edge === 'end') {
        edge = Range.isBackward(selection) ? 'anchor' : 'focus';
      }

      var {
        anchor,
        focus
      } = selection;
      var opts = {
        distance,
        unit
      };
      var props = {};

      if (edge == null || edge === 'anchor') {
        var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

        if (point) {
          props.anchor = point;
        }
      }

      if (edge == null || edge === 'focus') {
        var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

        if (_point) {
          props.focus = _point;
        }
      }

      Transforms.setSelection(editor, props);
    },

    /**
     * Set the selection to a new value.
     */
    select(editor, target) {
      var {
        selection
      } = editor;
      target = Editor.range(editor, target);

      if (selection) {
        Transforms.setSelection(editor, target);
        return;
      }

      if (!Range.isRange(target)) {
        throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
      }

      editor.apply({
        type: 'set_selection',
        properties: selection,
        newProperties: target
      });
    },

    /**
     * Set new properties on one of the selection's points.
     */
    setPoint(editor, props) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        selection
      } = editor;
      var {
        edge = 'both'
      } = options;

      if (!selection) {
        return;
      }

      if (edge === 'start') {
        edge = Range.isBackward(selection) ? 'focus' : 'anchor';
      }

      if (edge === 'end') {
        edge = Range.isBackward(selection) ? 'anchor' : 'focus';
      }

      var {
        anchor,
        focus
      } = selection;
      var point = edge === 'anchor' ? anchor : focus;
      Transforms.setSelection(editor, {
        [edge === 'anchor' ? 'anchor' : 'focus']: _objectSpread$1(_objectSpread$1({}, point), props)
      });
    },

    /**
     * Set new properties on the selection.
     */
    setSelection(editor, props) {
      var {
        selection
      } = editor;
      var oldProps = {};
      var newProps = {};

      if (!selection) {
        return;
      }

      for (var k in props) {
        if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
          oldProps[k] = selection[k];
          newProps[k] = props[k];
        }
      }

      if (Object.keys(oldProps).length > 0) {
        editor.apply({
          type: 'set_selection',
          properties: oldProps,
          newProperties: newProps
        });
      }
    }

  };
  var TextTransforms = {
    /**
     * Delete content in the editor.
     */
    delete(editor) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          reverse = false,
          unit = 'character',
          distance = 1,
          voids = false
        } = options;
        var {
          at = editor.selection,
          hanging = false
        } = options;

        if (!at) {
          return;
        }

        if (Range.isRange(at) && Range.isCollapsed(at)) {
          at = at.anchor;
        }

        if (Point.isPoint(at)) {
          var furthestVoid = Editor.void(editor, {
            at,
            mode: 'highest'
          });

          if (!voids && furthestVoid) {
            var [, voidPath] = furthestVoid;
            at = voidPath;
          } else {
            var opts = {
              unit,
              distance
            };
            var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
            at = {
              anchor: at,
              focus: target
            };
            hanging = true;
          }
        }

        if (Path.isPath(at)) {
          Transforms.removeNodes(editor, {
            at,
            voids
          });
          return;
        }

        if (Range.isCollapsed(at)) {
          return;
        }

        if (!hanging) {
          var [, _end] = Range.edges(at);
          var endOfDoc = Editor.end(editor, []);

          if (!Point.equals(_end, endOfDoc)) {
            at = Editor.unhangRange(editor, at, {
              voids
            });
          }
        }

        var [start, end] = Range.edges(at);
        var startBlock = Editor.above(editor, {
          match: n => Editor.isBlock(editor, n),
          at: start,
          voids
        });
        var endBlock = Editor.above(editor, {
          match: n => Editor.isBlock(editor, n),
          at: end,
          voids
        });
        var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
        var isSingleText = Path.equals(start.path, end.path);
        var startVoid = voids ? null : Editor.void(editor, {
          at: start,
          mode: 'highest'
        });
        var endVoid = voids ? null : Editor.void(editor, {
          at: end,
          mode: 'highest'
        }); // If the start or end points are inside an inline void, nudge them out.

        if (startVoid) {
          var before = Editor.before(editor, start);

          if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
            start = before;
          }
        }

        if (endVoid) {
          var after = Editor.after(editor, end);

          if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
            end = after;
          }
        } // Get the highest nodes that are completely inside the range, as well as
        // the start and end nodes.


        var matches = [];
        var lastPath;

        for (var entry of Editor.nodes(editor, {
          at,
          voids
        })) {
          var [node, path] = entry;

          if (lastPath && Path.compare(path, lastPath) === 0) {
            continue;
          }

          if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
            matches.push(entry);
            lastPath = path;
          }
        }

        var pathRefs = Array.from(matches, _ref => {
          var [, p] = _ref;
          return Editor.pathRef(editor, p);
        });
        var startRef = Editor.pointRef(editor, start);
        var endRef = Editor.pointRef(editor, end);

        if (!isSingleText && !startVoid) {
          var _point = startRef.current;
          var [_node] = Editor.leaf(editor, _point);
          var {
            path: _path
          } = _point;
          var {
            offset
          } = start;

          var text = _node.text.slice(offset);

          if (text.length > 0) editor.apply({
            type: 'remove_text',
            path: _path,
            offset,
            text
          });
        }

        for (var pathRef of pathRefs) {
          var _path2 = pathRef.unref();

          Transforms.removeNodes(editor, {
            at: _path2,
            voids
          });
        }

        if (!endVoid) {
          var _point2 = endRef.current;
          var [_node2] = Editor.leaf(editor, _point2);
          var {
            path: _path3
          } = _point2;

          var _offset = isSingleText ? start.offset : 0;

          var _text = _node2.text.slice(_offset, end.offset);

          if (_text.length > 0) editor.apply({
            type: 'remove_text',
            path: _path3,
            offset: _offset,
            text: _text
          });
        }

        if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
          Transforms.mergeNodes(editor, {
            at: endRef.current,
            hanging: true,
            voids
          });
        }

        var startUnref = startRef.unref();
        var endUnref = endRef.unref();
        var point = reverse ? startUnref || endUnref : endUnref || startUnref;

        if (options.at == null && point) {
          Transforms.select(editor, point);
        }
      });
    },

    /**
     * Insert a fragment at a specific location in the editor.
     */
    insertFragment(editor, fragment) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          hanging = false,
          voids = false
        } = options;
        var {
          at = editor.selection
        } = options;

        if (!fragment.length) {
          return;
        }

        if (!at) {
          return;
        } else if (Range.isRange(at)) {
          if (!hanging) {
            at = Editor.unhangRange(editor, at);
          }

          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var [, end] = Range.edges(at);

            if (!voids && Editor.void(editor, {
              at: end
            })) {
              return;
            }

            var pointRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at
            });
            at = pointRef.unref();
          }
        } else if (Path.isPath(at)) {
          at = Editor.start(editor, at);
        }

        if (!voids && Editor.void(editor, {
          at
        })) {
          return;
        } // If the insert point is at the edge of an inline node, move it outside
        // instead since it will need to be split otherwise.


        var inlineElementMatch = Editor.above(editor, {
          at,
          match: n => Editor.isInline(editor, n),
          mode: 'highest',
          voids
        });

        if (inlineElementMatch) {
          var [, _inlinePath] = inlineElementMatch;

          if (Editor.isEnd(editor, at, _inlinePath)) {
            var after = Editor.after(editor, _inlinePath);
            at = after;
          } else if (Editor.isStart(editor, at, _inlinePath)) {
            var before = Editor.before(editor, _inlinePath);
            at = before;
          }
        }

        var blockMatch = Editor.above(editor, {
          match: n => Editor.isBlock(editor, n),
          at,
          voids
        });
        var [, blockPath] = blockMatch;
        var isBlockStart = Editor.isStart(editor, at, blockPath);
        var isBlockEnd = Editor.isEnd(editor, at, blockPath);
        var isBlockEmpty = isBlockStart && isBlockEnd;
        var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
        var mergeEnd = !isBlockEnd;
        var [, firstPath] = Node.first({
          children: fragment
        }, []);
        var [, lastPath] = Node.last({
          children: fragment
        }, []);
        var matches = [];

        var matcher = _ref2 => {
          var [n, p] = _ref2;
          var isRoot = p.length === 0;

          if (isRoot) {
            return false;
          }

          if (isBlockEmpty) {
            return true;
          }

          if (mergeStart && Path.isAncestor(p, firstPath) && Element$1.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
            return false;
          }

          if (mergeEnd && Path.isAncestor(p, lastPath) && Element$1.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
            return false;
          }

          return true;
        };

        for (var entry of Node.nodes({
          children: fragment
        }, {
          pass: matcher
        })) {
          if (matcher(entry)) {
            matches.push(entry);
          }
        }

        var starts = [];
        var middles = [];
        var ends = [];
        var starting = true;
        var hasBlocks = false;

        for (var [node] of matches) {
          if (Element$1.isElement(node) && !editor.isInline(node)) {
            starting = false;
            hasBlocks = true;
            middles.push(node);
          } else if (starting) {
            starts.push(node);
          } else {
            ends.push(node);
          }
        }

        var [inlineMatch] = Editor.nodes(editor, {
          at,
          match: n => Text.isText(n) || Editor.isInline(editor, n),
          mode: 'highest',
          voids
        });
        var [, inlinePath] = inlineMatch;
        var isInlineStart = Editor.isStart(editor, at, inlinePath);
        var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
        var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
        var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
        var blockPathRef = Editor.pathRef(editor, blockPath);
        Transforms.splitNodes(editor, {
          at,
          match: n => hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n),
          mode: hasBlocks ? 'lowest' : 'highest',
          voids
        });
        var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
        Transforms.insertNodes(editor, starts, {
          at: startRef.current,
          match: n => Text.isText(n) || Editor.isInline(editor, n),
          mode: 'highest',
          voids
        });

        if (isBlockEmpty && middles.length) {
          Transforms.delete(editor, {
            at: blockPathRef.unref(),
            voids
          });
        }

        Transforms.insertNodes(editor, middles, {
          at: middleRef.current,
          match: n => Editor.isBlock(editor, n),
          mode: 'lowest',
          voids
        });
        Transforms.insertNodes(editor, ends, {
          at: endRef.current,
          match: n => Text.isText(n) || Editor.isInline(editor, n),
          mode: 'highest',
          voids
        });

        if (!options.at) {
          var path;

          if (ends.length > 0) {
            path = Path.previous(endRef.current);
          } else if (middles.length > 0) {
            path = Path.previous(middleRef.current);
          } else {
            path = Path.previous(startRef.current);
          }

          var _end2 = Editor.end(editor, path);

          Transforms.select(editor, _end2);
        }

        startRef.unref();
        middleRef.unref();
        endRef.unref();
      });
    },

    /**
     * Insert a string of text in the Editor.
     */
    insertText(editor, text) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          voids = false
        } = options;
        var {
          at = editor.selection
        } = options;

        if (!at) {
          return;
        }

        if (Path.isPath(at)) {
          at = Editor.range(editor, at);
        }

        if (Range.isRange(at)) {
          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var end = Range.end(at);

            if (!voids && Editor.void(editor, {
              at: end
            })) {
              return;
            }

            var start = Range.start(at);
            var startRef = Editor.pointRef(editor, start);
            var endRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at,
              voids
            });
            var startPoint = startRef.unref();
            var endPoint = endRef.unref();
            at = startPoint || endPoint;
            Transforms.setSelection(editor, {
              anchor: at,
              focus: at
            });
          }
        }

        if (!voids && Editor.void(editor, {
          at
        })) {
          return;
        }

        var {
          path,
          offset
        } = at;
        if (text.length > 0) editor.apply({
          type: 'insert_text',
          path,
          offset,
          text
        });
      });
    }

  };

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

  function createElement(tagName, options) {
    return document.createElement(tagName, options);
  }

  function createElementNS(namespaceURI, qualifiedName, options) {
    return document.createElementNS(namespaceURI, qualifiedName, options);
  }

  function createDocumentFragment() {
    return document.createDocumentFragment();
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(elm) {
    return elm.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function getTextContent(node) {
    return node.textContent;
  }

  function isElement$1(node) {
    return node.nodeType === 1;
  }

  function isText(node) {
    return node.nodeType === 3;
  }

  function isComment(node) {
    return node.nodeType === 8;
  }

  function isDocumentFragment$1(node) {
    return node.nodeType === 11;
  }

  const htmlDomApi = {
    createElement,
    createElementNS,
    createTextNode,
    createDocumentFragment,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
    setTextContent,
    getTextContent,
    isElement: isElement$1,
    isText,
    isComment,
    isDocumentFragment: isDocumentFragment$1
  };

  function vnode(sel, data, children, text, elm) {
    const key = data === undefined ? undefined : data.key;
    return {
      sel,
      data,
      children,
      text,
      elm,
      key
    };
  }

  const array = Array.isArray;
  function primitive(s) {
    return typeof s === "string" || typeof s === "number" || s instanceof String || s instanceof Number;
  }

  function isUndef(s) {
    return s === undefined;
  }

  function isDef(s) {
    return s !== undefined;
  }

  const emptyNode = vnode("", {}, [], undefined, undefined);

  function sameVnode(vnode1, vnode2) {
    var _a, _b;

    const isSameKey = vnode1.key === vnode2.key;
    const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
    const isSameSel = vnode1.sel === vnode2.sel;
    return isSameSel && isSameKey && isSameIs;
  }
  /**
   * @todo Remove this function when the document fragment is considered stable.
   */


  function documentFragmentIsNotSupported() {
    throw new Error("The document fragment is not supported on this platform.");
  }

  function isElement(api, vnode) {
    return api.isElement(vnode);
  }

  function isDocumentFragment(api, vnode) {
    return api.isDocumentFragment(vnode);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var _a;

    const map = {};

    for (let i = beginIdx; i <= endIdx; ++i) {
      const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;

      if (key !== undefined) {
        map[key] = i;
      }
    }

    return map;
  }

  const hooks = ["create", "update", "remove", "destroy", "pre", "post"];
  function init$1(modules, domApi, options) {
    const cbs = {
      create: [],
      update: [],
      remove: [],
      destroy: [],
      pre: [],
      post: []
    };
    const api = domApi !== undefined ? domApi : htmlDomApi;

    for (const hook of hooks) {
      for (const module of modules) {
        const currentHook = module[hook];

        if (currentHook !== undefined) {
          cbs[hook].push(currentHook);
        }
      }
    }

    function emptyNodeAt(elm) {
      const id = elm.id ? "#" + elm.id : ""; // elm.className doesn't return a string when elm is an SVG element inside a shadowRoot.
      // https://stackoverflow.com/questions/29454340/detecting-classname-of-svganimatedstring

      const classes = elm.getAttribute("class");
      const c = classes ? "." + classes.split(" ").join(".") : "";
      return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }

    function emptyDocumentFragmentAt(frag) {
      return vnode(undefined, {}, [], undefined, frag);
    }

    function createRmCb(childElm, listeners) {
      return function rmCb() {
        if (--listeners === 0) {
          const parent = api.parentNode(childElm);
          api.removeChild(parent, childElm);
        }
      };
    }

    function createElm(vnode, insertedVnodeQueue) {
      var _a, _b, _c, _d;

      let i;
      let data = vnode.data;

      if (data !== undefined) {
        const init = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;

        if (isDef(init)) {
          init(vnode);
          data = vnode.data;
        }
      }

      const children = vnode.children;
      const sel = vnode.sel;

      if (sel === "!") {
        if (isUndef(vnode.text)) {
          vnode.text = "";
        }

        vnode.elm = api.createComment(vnode.text);
      } else if (sel !== undefined) {
        // Parse selector
        const hashIdx = sel.indexOf("#");
        const dotIdx = sel.indexOf(".", hashIdx);
        const hash = hashIdx > 0 ? hashIdx : sel.length;
        const dot = dotIdx > 0 ? dotIdx : sel.length;
        const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
        const elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);
        if (hash < dot) elm.setAttribute("id", sel.slice(hash + 1, dot));
        if (dotIdx > 0) elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));

        for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);

        if (array(children)) {
          for (i = 0; i < children.length; ++i) {
            const ch = children[i];

            if (ch != null) {
              api.appendChild(elm, createElm(ch, insertedVnodeQueue));
            }
          }
        } else if (primitive(vnode.text)) {
          api.appendChild(elm, api.createTextNode(vnode.text));
        }

        const hook = vnode.data.hook;

        if (isDef(hook)) {
          (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode);

          if (hook.insert) {
            insertedVnodeQueue.push(vnode);
          }
        }
      } else if (((_c = options === null || options === void 0 ? void 0 : options.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode.children) {
        const children = vnode.children;
        vnode.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();

        for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);

        for (i = 0; i < children.length; ++i) {
          const ch = children[i];

          if (ch != null) {
            api.appendChild(vnode.elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else {
        vnode.elm = api.createTextNode(vnode.text);
      }

      return vnode.elm;
    }

    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        const ch = vnodes[startIdx];

        if (ch != null) {
          api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
        }
      }
    }

    function invokeDestroyHook(vnode) {
      var _a, _b;

      const data = vnode.data;

      if (data !== undefined) {
        (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);

        for (let i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);

        if (vnode.children !== undefined) {
          for (let j = 0; j < vnode.children.length; ++j) {
            const child = vnode.children[j];

            if (child != null && typeof child !== "string") {
              invokeDestroyHook(child);
            }
          }
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      var _a, _b;

      for (; startIdx <= endIdx; ++startIdx) {
        let listeners;
        let rm;
        const ch = vnodes[startIdx];

        if (ch != null) {
          if (isDef(ch.sel)) {
            invokeDestroyHook(ch);
            listeners = cbs.remove.length + 1;
            rm = createRmCb(ch.elm, listeners);

            for (let i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);

            const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;

            if (isDef(removeHook)) {
              removeHook(ch, rm);
            } else {
              rm();
            }
          } else {
            // Text node
            api.removeChild(parentElm, ch.elm);
          }
        }
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
      let oldStartIdx = 0;
      let newStartIdx = 0;
      let oldEndIdx = oldCh.length - 1;
      let oldStartVnode = oldCh[0];
      let oldEndVnode = oldCh[oldEndIdx];
      let newEndIdx = newCh.length - 1;
      let newStartVnode = newCh[0];
      let newEndVnode = newCh[newEndIdx];
      let oldKeyToIdx;
      let idxInOld;
      let elmToMove;
      let before;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
        } else if (oldEndVnode == null) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null) {
          newStartVnode = newCh[++newStartIdx];
        } else if (newEndVnode == null) {
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (oldKeyToIdx === undefined) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = oldKeyToIdx[newStartVnode.key];

          if (isUndef(idxInOld)) {
            // New element
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            elmToMove = oldCh[idxInOld];

            if (elmToMove.sel !== newStartVnode.sel) {
              api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            } else {
              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }

      if (newStartIdx <= newEndIdx) {
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      }

      if (oldStartIdx <= oldEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
      var _a, _b, _c, _d, _e;

      const hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
      (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);
      const elm = vnode.elm = oldVnode.elm;
      const oldCh = oldVnode.children;
      const ch = vnode.children;
      if (oldVnode === vnode) return;

      if (vnode.data !== undefined) {
        for (let i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);

        (_d = (_c = vnode.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c, oldVnode, vnode);
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) api.setTextContent(elm, "");
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          api.setTextContent(elm, "");
        }
      } else if (oldVnode.text !== vnode.text) {
        if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        }

        api.setTextContent(elm, vnode.text);
      }

      (_e = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _e === void 0 ? void 0 : _e.call(hook, oldVnode, vnode);
    }

    return function patch(oldVnode, vnode) {
      let i, elm, parent;
      const insertedVnodeQueue = [];

      for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

      if (isElement(api, oldVnode)) {
        oldVnode = emptyNodeAt(oldVnode);
      } else if (isDocumentFragment(api, oldVnode)) {
        oldVnode = emptyDocumentFragmentAt(oldVnode);
      }

      if (sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue);
      } else {
        elm = oldVnode.elm;
        parent = api.parentNode(elm);
        createElm(vnode, insertedVnodeQueue);

        if (parent !== null) {
          api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
          removeVnodes(parent, [oldVnode], 0, 0);
        }
      }

      for (i = 0; i < insertedVnodeQueue.length; ++i) {
        insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
      }

      for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();

      return vnode;
    };
  }

  function addNS(data, children, sel) {
    data.ns = "http://www.w3.org/2000/svg";

    if (sel !== "foreignObject" && children !== undefined) {
      for (let i = 0; i < children.length; ++i) {
        const child = children[i];
        if (typeof child === "string") continue;
        const childData = child.data;

        if (childData !== undefined) {
          addNS(childData, child.children, child.sel);
        }
      }
    }
  }
  function h(sel, b, c) {
    let data = {};
    let children;
    let text;
    let i;

    if (c !== undefined) {
      if (b !== null) {
        data = b;
      }

      if (array(c)) {
        children = c;
      } else if (primitive(c)) {
        text = c.toString();
      } else if (c && c.sel) {
        children = [c];
      }
    } else if (b !== undefined && b !== null) {
      if (array(b)) {
        children = b;
      } else if (primitive(b)) {
        text = b.toString();
      } else if (b && b.sel) {
        children = [b];
      } else {
        data = b;
      }
    }

    if (children !== undefined) {
      for (i = 0; i < children.length; ++i) {
        if (primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined);
      }
    }

    if (sel[0] === "s" && sel[1] === "v" && sel[2] === "g" && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
      addNS(data, children, sel);
    }

    return vnode(sel, data, children, text, undefined);
  }

  function copyToThunk(vnode, thunk) {
    var _a;

    const ns = (_a = thunk.data) === null || _a === void 0 ? void 0 : _a.ns;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
    if (ns) addNS(thunk.data, thunk.children, thunk.sel);
  }

  function init(thunk) {
    const cur = thunk.data;
    const vnode = cur.fn(...cur.args);
    copyToThunk(vnode, thunk);
  }

  function prepatch(oldVnode, thunk) {
    let i;
    const old = oldVnode.data;
    const cur = thunk.data;
    const oldArgs = old.args;
    const args = cur.args;

    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
      copyToThunk(cur.fn(...args), thunk);
      return;
    }

    for (i = 0; i < args.length; ++i) {
      if (oldArgs[i] !== args[i]) {
        copyToThunk(cur.fn(...args), thunk);
        return;
      }
    }

    copyToThunk(oldVnode, thunk);
  }

  const thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
      args = fn;
      fn = key;
      key = undefined;
    }

    return h(sel, {
      key: key,
      hook: {
        init,
        prepatch
      },
      fn: fn,
      args: args
    });
  };

  function toVNode(node, domApi) {
    const api = domApi !== undefined ? domApi : htmlDomApi;
    let text;

    if (api.isElement(node)) {
      const id = node.id ? "#" + node.id : "";
      const cn = node.getAttribute("class");
      const c = cn ? "." + cn.split(" ").join(".") : "";
      const sel = api.tagName(node).toLowerCase() + id + c;
      const attrs = {};
      const children = [];
      let name;
      let i, n;
      const elmAttrs = node.attributes;
      const elmChildren = node.childNodes;

      for (i = 0, n = elmAttrs.length; i < n; i++) {
        name = elmAttrs[i].nodeName;

        if (name !== "id" && name !== "class") {
          attrs[name] = elmAttrs[i].nodeValue;
        }
      }

      for (i = 0, n = elmChildren.length; i < n; i++) {
        children.push(toVNode(elmChildren[i], domApi));
      }

      const data = {
        attrs
      };

      if (sel[0] === "s" && sel[1] === "v" && sel[2] === "g" && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
        addNS(data, children, sel);
      }

      return vnode(sel, data, children, undefined, node);
    } else if (api.isText(node)) {
      text = api.getTextContent(node);
      return vnode(undefined, undefined, undefined, text, node);
    } else if (api.isComment(node)) {
      text = api.getTextContent(node);
      return vnode("!", {}, [], text, node);
    } else {
      return vnode("", {}, [], undefined, node);
    }
  }

  const xlinkNS = "http://www.w3.org/1999/xlink";
  const xmlNS = "http://www.w3.org/XML/1998/namespace";
  const colonChar = 58;
  const xChar = 120;

  function updateAttrs(oldVnode, vnode) {
    let key;
    const elm = vnode.elm;
    let oldAttrs = oldVnode.data.attrs;
    let attrs = vnode.data.attrs;
    if (!oldAttrs && !attrs) return;
    if (oldAttrs === attrs) return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {}; // update modified attributes, add new attributes

    for (key in attrs) {
      const cur = attrs[key];
      const old = oldAttrs[key];

      if (old !== cur) {
        if (cur === true) {
          elm.setAttribute(key, "");
        } else if (cur === false) {
          elm.removeAttribute(key);
        } else {
          if (key.charCodeAt(0) !== xChar) {
            elm.setAttribute(key, cur);
          } else if (key.charCodeAt(3) === colonChar) {
            // Assume xml namespace
            elm.setAttributeNS(xmlNS, key, cur);
          } else if (key.charCodeAt(5) === colonChar) {
            // Assume xlink namespace
            elm.setAttributeNS(xlinkNS, key, cur);
          } else {
            elm.setAttribute(key, cur);
          }
        }
      }
    } // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined


    for (key in oldAttrs) {
      if (!(key in attrs)) {
        elm.removeAttribute(key);
      }
    }
  }

  const attributesModule = {
    create: updateAttrs,
    update: updateAttrs
  };

  function updateClass(oldVnode, vnode) {
    let cur;
    let name;
    const elm = vnode.elm;
    let oldClass = oldVnode.data.class;
    let klass = vnode.data.class;
    if (!oldClass && !klass) return;
    if (oldClass === klass) return;
    oldClass = oldClass || {};
    klass = klass || {};

    for (name in oldClass) {
      if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {
        // was `true` and now not provided
        elm.classList.remove(name);
      }
    }

    for (name in klass) {
      cur = klass[name];

      if (cur !== oldClass[name]) {
        elm.classList[cur ? "add" : "remove"](name);
      }
    }
  }

  const classModule = {
    create: updateClass,
    update: updateClass
  };

  function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
      // call function handler
      handler.call(vnode, event, vnode);
    } else if (typeof handler === "object") {
      // call multiple handlers
      for (let i = 0; i < handler.length; i++) {
        invokeHandler(handler[i], vnode, event);
      }
    }
  }

  function handleEvent(event, vnode) {
    const name = event.type;
    const on = vnode.data.on; // call event handler(s) if exists

    if (on && on[name]) {
      invokeHandler(on[name], vnode, event);
    }
  }

  function createListener() {
    return function handler(event) {
      handleEvent(event, handler.vnode);
    };
  }

  function updateEventListeners(oldVnode, vnode) {
    const oldOn = oldVnode.data.on;
    const oldListener = oldVnode.listener;
    const oldElm = oldVnode.elm;
    const on = vnode && vnode.data.on;
    const elm = vnode && vnode.elm;
    let name; // optimization for reused immutable handlers

    if (oldOn === on) {
      return;
    } // remove existing listeners which no longer used


    if (oldOn && oldListener) {
      // if element changed or deleted we remove all existing listeners unconditionally
      if (!on) {
        for (name in oldOn) {
          // remove listener if element was changed or existing listeners removed
          oldElm.removeEventListener(name, oldListener, false);
        }
      } else {
        for (name in oldOn) {
          // remove listener if existing listener removed
          if (!on[name]) {
            oldElm.removeEventListener(name, oldListener, false);
          }
        }
      }
    } // add new listeners which has not already attached


    if (on) {
      // reuse existing listener or create new
      const listener = vnode.listener = oldVnode.listener || createListener(); // update vnode for listener

      listener.vnode = vnode; // if element changed or added we add all needed listeners unconditionally

      if (!oldOn) {
        for (name in on) {
          // add listener if element was changed or new listeners added
          elm.addEventListener(name, listener, false);
        }
      } else {
        for (name in on) {
          // add listener if new listener added
          if (!oldOn[name]) {
            elm.addEventListener(name, listener, false);
          }
        }
      }
    }
  }

  const eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
  };

  function updateProps(oldVnode, vnode) {
    let key;
    let cur;
    let old;
    const elm = vnode.elm;
    let oldProps = oldVnode.data.props;
    let props = vnode.data.props;
    if (!oldProps && !props) return;
    if (oldProps === props) return;
    oldProps = oldProps || {};
    props = props || {};

    for (key in props) {
      cur = props[key];
      old = oldProps[key];

      if (old !== cur && (key !== "value" || elm[key] !== cur)) {
        elm[key] = cur;
      }
    }
  }

  const propsModule = {
    create: updateProps,
    update: updateProps
  };

  // Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.
  const raf = typeof window !== "undefined" && window.requestAnimationFrame.bind(window) || setTimeout;

  const nextFrame = function (fn) {
    raf(function () {
      raf(fn);
    });
  };

  let reflowForced = false;

  function setNextFrame(obj, prop, val) {
    nextFrame(function () {
      obj[prop] = val;
    });
  }

  function updateStyle(oldVnode, vnode) {
    let cur;
    let name;
    const elm = vnode.elm;
    let oldStyle = oldVnode.data.style;
    let style = vnode.data.style;
    if (!oldStyle && !style) return;
    if (oldStyle === style) return;
    oldStyle = oldStyle || {};
    style = style || {};
    const oldHasDel = ("delayed" in oldStyle);

    for (name in oldStyle) {
      if (!style[name]) {
        if (name[0] === "-" && name[1] === "-") {
          elm.style.removeProperty(name);
        } else {
          elm.style[name] = "";
        }
      }
    }

    for (name in style) {
      cur = style[name];

      if (name === "delayed" && style.delayed) {
        for (const name2 in style.delayed) {
          cur = style.delayed[name2];

          if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
            setNextFrame(elm.style, name2, cur);
          }
        }
      } else if (name !== "remove" && cur !== oldStyle[name]) {
        if (name[0] === "-" && name[1] === "-") {
          elm.style.setProperty(name, cur);
        } else {
          elm.style[name] = cur;
        }
      }
    }
  }

  function applyDestroyStyle(vnode) {
    let style;
    let name;
    const elm = vnode.elm;
    const s = vnode.data.style;
    if (!s || !(style = s.destroy)) return;

    for (name in style) {
      elm.style[name] = style[name];
    }
  }

  function applyRemoveStyle(vnode, rm) {
    const s = vnode.data.style;

    if (!s || !s.remove) {
      rm();
      return;
    }

    if (!reflowForced) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      vnode.elm.offsetLeft;
      reflowForced = true;
    }

    let name;
    const elm = vnode.elm;
    let i = 0;
    const style = s.remove;
    let amount = 0;
    const applied = [];

    for (name in style) {
      applied.push(name);
      elm.style[name] = style[name];
    }

    const compStyle = getComputedStyle(elm);
    const props = compStyle["transition-property"].split(", ");

    for (; i < props.length; ++i) {
      if (applied.indexOf(props[i]) !== -1) amount++;
    }

    elm.addEventListener("transitionend", function (ev) {
      if (ev.target === elm) --amount;
      if (amount === 0) rm();
    });
  }

  function forceReflow() {
    reflowForced = false;
  }

  const styleModule = {
    pre: forceReflow,
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
  };

  var hyperscriptAttributeToProperty = attributeToProperty;
  var transform = {
    'class': 'className',
    'for': 'htmlFor',
    'http-equiv': 'httpEquiv'
  };

  function attributeToProperty(h) {
    return function (tagName, attrs, children) {
      for (var attr in attrs) {
        if (attr in transform) {
          attrs[transform[attr]] = attrs[attr];
          delete attrs[attr];
        }
      }

      return h(tagName, attrs, children);
    };
  }

  var attrToProp = hyperscriptAttributeToProperty;
  var VAR = 0,
      TEXT = 1,
      OPEN = 2,
      CLOSE = 3,
      ATTR = 4;
  var ATTR_KEY = 5,
      ATTR_KEY_W = 6;
  var ATTR_VALUE_W = 7,
      ATTR_VALUE = 8;
  var ATTR_VALUE_SQ = 9,
      ATTR_VALUE_DQ = 10;
  var ATTR_EQ = 11,
      ATTR_BREAK = 12;
  var COMMENT = 13;

  var hyperxTmp = function (h, opts) {
    if (!opts) opts = {};

    var concat = opts.concat || function (a, b) {
      return String(a) + String(b);
    };

    if (opts.attrToProp !== false) h = attrToProp(h);
    return function (strings) {
      var state = TEXT,
          reg = '',
          isSelfClosing = false;
      var arglen = arguments.length;
      var parts = [];

      for (var i = 0; i < strings.length; i++) {
        if (i < arglen - 1) {
          var arg = arguments[i + 1];
          var p = parse(strings[i]);
          var xstate = state;
          if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE;
          if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE;
          if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE;
          if (xstate === ATTR) xstate = ATTR_KEY;

          if (xstate === OPEN) {
            if (reg === '/') {
              p.push([OPEN, '/', arg]);
              reg = '';
            } else {
              p.push([OPEN, arg]);
            }
          } else if (xstate === COMMENT && opts.comments) {
            reg += String(arg);
          } else if (xstate !== COMMENT) {
            p.push([VAR, xstate, arg]);
          }

          parts.push.apply(parts, p);
        } else {
          parts.push.apply(parts, parse(strings[i]));
        }
      }

      var tree = [null, {}, []];
      var stack = [[tree, -1]];

      for (var i = 0; i < parts.length; i++) {
        var cur = stack[stack.length - 1][0];
        var p = parts[i],
            state = p[0];

        if (state === OPEN && /^\//.test(p[1])) {
          var ix = stack[stack.length - 1][1];

          if (stack.length > 1) {
            stack.pop();
            stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
          }
        } else if (state === OPEN) {
          var c = [p[1], {}, []];
          cur[2].push(c);
          stack.push([c, cur[2].length - 1]);
        } else if (state === ATTR_KEY || state === VAR && p[1] === ATTR_KEY) {
          var key = '';
          var copyKey;

          for (; i < parts.length; i++) {
            if (parts[i][0] === ATTR_KEY) {
              key = concat(key, parts[i][1]);
            } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
              if (typeof parts[i][2] === 'object' && !key) {
                for (copyKey in parts[i][2]) if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) cur[1][copyKey] = parts[i][2][copyKey];
              } else {
                key = concat(key, parts[i][2]);
              }
            } else {
              break;
            }
          }

          if (parts[i][0] === ATTR_EQ) i++;
          var j = i;

          for (; i < parts.length; i++) {
            if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
              if (!cur[1][key]) cur[1][key] = strfn(parts[i][1]);else parts[i][1] === "" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
            } else if (parts[i][0] === VAR && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
              if (!cur[1][key]) cur[1][key] = strfn(parts[i][2]);else parts[i][2] === "" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
            } else {
              if (key.length && !cur[1][key] && i === j && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
                // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
                // empty string is falsy, not well behaved value in browser
                cur[1][key] = key.toLowerCase();
              }

              if (parts[i][0] === CLOSE) i--;
              break;
            }
          }
        } else if (state === ATTR_KEY) {
          cur[1][p[1]] = true;
        } else if (state === VAR && p[1] === ATTR_KEY) {
          cur[1][p[2]] = true;
        } else if (state === CLOSE) {
          const isSelfClosing = p[1] || selfClosingVoid(cur[0]); //if (selfClosing(cur[0]) && stack.length) {

          if (isSelfClosing && stack.length) {
            var ix = stack[stack.length - 1][1];
            stack.pop();
            stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
          }
        } else if (state === VAR && p[1] === TEXT) {
          if (p[2] === undefined || p[2] === null) p[2] = '';else if (!p[2]) p[2] = concat('', p[2]);
          if (Array.isArray(p[2][0])) cur[2].push.apply(cur[2], p[2]);else cur[2].push(p[2]);
        } else if (state === TEXT) {
          cur[2].push(p[1]);
        } else if (state === ATTR_EQ || state === ATTR_BREAK) ; else {
          throw new Error('unhandled: ' + state);
        }
      }

      if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) tree[2].shift();

      if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) {
        if (opts.createFragment) return opts.createFragment(tree[2]);
        throw new Error('multiple root elements must be wrapped in an enclosing tag');
      }

      if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string' && Array.isArray(tree[2][0][2])) tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
      return tree[2][0];

      function parse(str) {
        var res = [];
        var isInStyleTag = false;
        if (state === ATTR_VALUE_W) state = ATTR;

        for (var i = 0; i < str.length; i++) {
          var c = str.charAt(i);

          if (state === TEXT && c === '<') {
            if (reg.length) res.push([TEXT, reg]);
            reg = '';
            state = OPEN;
            isInStyleTag = false;
          } else if (c === '>' && !quot(state) && state !== COMMENT) {
            if (state === OPEN && reg.length) {
              res.push([OPEN, reg]);
              if (reg === 'style') isInStyleTag = true;else if (reg === '/style') isInStyleTag = false;
            } else if (state === ATTR_KEY) {
              res.push([ATTR_KEY, reg]);
            } else if (state === ATTR_VALUE && reg.length) {
              res.push([ATTR_VALUE, reg]);
            }

            if (state === TEXT && isInStyleTag) {
              // the css descendant selector within <style> tags shouldn't close
              // e.g., <style> ul > .test { color: blue }</style>
              reg += c;
            } else {
              res.push([CLOSE, isSelfClosing]);
              isSelfClosing = false;
              reg = '';
            }

            state = TEXT;
          } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
            if (opts.comments) {
              res.push([ATTR_VALUE, reg.substr(0, reg.length - 1)]);
            }

            reg = '';
            isSelfClosing = true;
            state = TEXT;
          } else if (state === OPEN && /^!--$/.test(reg)) {
            if (opts.comments) {
              res.push([OPEN, reg], [ATTR_KEY, 'comment'], [ATTR_EQ]);
            }

            reg = c;
            state = COMMENT;
          } else if (state === TEXT || state === COMMENT) {
            reg += c;
          } else if (state === OPEN && c === '/' && reg.length) {
            // self closing tag without a space <br/>
            isSelfClosing = true;
          } else if (state === OPEN && /\s/.test(c)) {
            if (reg.length) res.push([OPEN, reg]);
            if (reg === 'style') isInStyleTag = true;else if (reg === '/style') isInStyleTag = false;
            reg = '';
            state = ATTR;
          } else if (state === OPEN) {
            reg += c;
          } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
            state = ATTR_KEY;
            reg = c;
          } else if (state === ATTR && /\s/.test(c)) {
            if (reg.length) res.push([ATTR_KEY, reg]);
            res.push([ATTR_BREAK]);
          } else if (state === ATTR_KEY && /\s/.test(c)) {
            res.push([ATTR_KEY, reg]);
            reg = '';
            state = ATTR_KEY_W;
          } else if (state === ATTR_KEY && c === '=') {
            res.push([ATTR_KEY, reg], [ATTR_EQ]);
            reg = '';
            state = ATTR_VALUE_W;
          } else if (state === ATTR_KEY && c === '/') {
            isSelfClosing = true;
            reg = '';
            state = ATTR;
          } else if (state === ATTR_KEY) {
            reg += c;
          } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
            res.push([ATTR_EQ]);
            state = ATTR_VALUE_W;
          } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
            res.push([ATTR_BREAK]);

            if (/[\w-]/.test(c)) {
              reg += c;
              state = ATTR_KEY;
            } else if (c === '/') {
              isSelfClosing = true;
            } else {
              state = ATTR;
            }
          } else if (state === ATTR_VALUE_W && c === '"') {
            state = ATTR_VALUE_DQ;
          } else if (state === ATTR_VALUE_W && c === "'") {
            state = ATTR_VALUE_SQ;
          } else if (state === ATTR_VALUE_DQ && c === '"') {
            res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
            reg = '';
            state = ATTR;
          } else if (state === ATTR_VALUE_SQ && c === "'") {
            res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
            reg = '';
            state = ATTR;
          } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
            state = ATTR_VALUE;
            i--;
          } else if (state === ATTR_VALUE && /\s/.test(c)) {
            res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
            reg = '';
            state = ATTR;
          } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
            reg += c;
          }
        }

        if (state === TEXT && reg.length) {
          res.push([TEXT, reg]);
          reg = '';
        } else if (state === ATTR_VALUE && reg.length) {
          res.push([ATTR_VALUE, reg]);
          reg = '';
        } else if (state === ATTR_VALUE_DQ && reg.length) {
          res.push([ATTR_VALUE, reg]);
          reg = '';
        } else if (state === ATTR_VALUE_SQ && reg.length) {
          res.push([ATTR_VALUE, reg]);
          reg = '';
        } else if (state === ATTR_KEY) {
          res.push([ATTR_KEY, reg]);
          reg = '';
        }

        return res;
      }
    };

    function strfn(x) {
      if (typeof x === 'function') return x;else if (typeof x === 'string') return x;else if (x && typeof x === 'object') return x;else if (x === null || x === undefined) return x;else return concat('', x);
    }
  };

  function quot(state) {
    return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ;
  } //area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr


  var voidCloseRE = RegExp('^(' + ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$');

  function selfClosingVoid(tag) {
    return voidCloseRE.test(tag);
  }

  function create(modules, options = {}) {
    const directive = options.directive || '@';

    function createElement(sel, input, content) {
      if (sel === '!--') return h('!', input.comment);

      if (content && content.length) {
        if (content.length === 1) content = content[0];else content = [].concat.apply([], content); // flatten nested arrays
      } // attribute names, and handling none faster:


      const names = Object.keys(input);
      if (!names || !names.length) return h(sel, content); // parse Snabbdom's `data` from attributes:

      const data = {};

      for (let i = 0, max = names.length; max > i; i++) {
        const name = names[i];
        if (input[name] === 'false') input[name] = false; // directive attributes

        if (name.indexOf(directive) === 0) {
          const parts = name.slice(1).split(':');
          let previous = data;

          for (let p = 0, pmax = parts.length, last = pmax - 1; p < pmax; p++) {
            const part = parts[p];
            if (p === last) previous[part] = input[name];else if (!previous[part]) previous = previous[part] = {};else previous = previous[part];
          }
        } // put all other attributes into `data.attrs`
        else {
          if (!data.attrs) data.attrs = {};
          data.attrs[name] = input[name];
        }
      } // return vnode:


      return h(sel, data, content);
    } // create the snabbdom + hyperx functions


    const patch = init$1(modules || []); // create snabby function

    const snabby = hyperxTmp(createElement, {
      comments: true,
      attrToProp: false
    }); // create yo-yo-like update function

    snabby.update = function update(dest, src) {
      return patch(dest, src);
    };

    snabby.thunk = thunk;
    return snabby;
  }

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */

  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = function () {
    if (typeof Map !== 'undefined') {
      return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */


    function getIndex(arr, key) {
      var result = -1;
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index;
          return true;
        }

        return false;
      });
      return result;
    }

    return (
      /** @class */
      function () {
        function class_1() {
          this.__entries__ = [];
        }

        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function () {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */

        class_1.prototype.get = function (key) {
          var index = getIndex(this.__entries__, key);
          var entry = this.__entries__[index];
          return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */


        class_1.prototype.set = function (key, value) {
          var index = getIndex(this.__entries__, key);

          if (~index) {
            this.__entries__[index][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */


        class_1.prototype.delete = function (key) {
          var entries = this.__entries__;
          var index = getIndex(entries, key);

          if (~index) {
            entries.splice(index, 1);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */


        class_1.prototype.has = function (key) {
          return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */


        class_1.prototype.clear = function () {
          this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */


        class_1.prototype.forEach = function (callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }

          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };

        return class_1;
      }()
    );
  }();
  /**
   * Detects whether window and document objects are available in current environment.
   */


  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

  var global$1 = function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
      return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
      return window;
    } // eslint-disable-next-line no-new-func


    return Function('return this')();
  }();
  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */


  var requestAnimationFrame$1 = function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1);
    }

    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now());
      }, 1000 / 60);
    };
  }(); // Defines minimum timeout before adding a trailing call.


  var trailingTimeout = 2;
  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */

  function throttle(callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */

    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }

      if (trailingCall) {
        proxy();
      }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */


    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */


    function proxy() {
      var timeStamp = Date.now();

      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        } // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.


        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }

      lastCallTime = timeStamp;
    }

    return proxy;
  } // Minimum delay before invoking the update of observers.


  var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.

  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

  var mutationObserverSupported = typeof MutationObserver !== 'undefined';
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */

  var ResizeObserverController =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false;
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */

      this.mutationEventsAdded_ = false;
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */

      this.mutationsObserver_ = null;
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */

      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */


    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      } // Add listeners if they haven't been added yet.


      if (!this.connected_) {
        this.connect_();
      }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */


    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer); // Remove observer if it's present in registry.

      if (~index) {
        observers.splice(index, 1);
      } // Remove listeners if controller has no connected observers.


      if (!observers.length && this.connected_) {
        this.disconnect_();
      }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */


    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.

      if (changesDetected) {
        this.refresh();
      }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */


    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
      }); // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.

      activeObservers.forEach(function (observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */


    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return;
      } // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.


      document.addEventListener('transitionend', this.onTransitionEnd_);
      window.addEventListener('resize', this.refresh);

      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);
        this.mutationEventsAdded_ = true;
      }

      this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */


    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return;
      }

      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);

      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }

      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
      }

      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */


    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
          propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
      });

      if (isReflowProperty) {
        this.refresh();
      }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */


    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
      }

      return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */


    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
  }();
  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */


  var defineConfigurable = function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }

    return target;
  };
  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */


  var getWindowOf = function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
    // provided element.

    return ownerGlobal || global$1;
  }; // Placeholder of an empty content rectangle.


  var emptyRect = createRectInit(0, 0, 0, 0);
  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */

  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */


  function getBordersSize(styles) {
    var positions = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }

    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width'];
      return size + toFloat(value);
    }, 0);
  }
  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */


  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles['padding-' + position];
      paddings[position] = toFloat(value);
    }

    return paddings;
  }
  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */


  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */


  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
        clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.

    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.

    var width = toFloat(styles.width),
        height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).

    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad;
      }

      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
      }
    } // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.


    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.

      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }

      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
  }
  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */


  var isSVGGraphicsElement = function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    } // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens


    return function (target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
  }();
  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */


  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */


  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
  }
  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */


  function createReadOnlyRect(_a) {
    var x = _a.x,
        y = _a.y,
        width = _a.width,
        height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

    defineConfigurable(rect, {
      x: x,
      y: y,
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */


  function createRectInit(x, y, width, height) {
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }
  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */


  var ResizeObservation =
  /** @class */
  function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0;
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */

      this.broadcastHeight = 0;
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */

      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */


    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */


    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };

    return ResizeObservation;
  }();

  var ResizeObserverEntry =
  /** @class */
  function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.

      defineConfigurable(this, {
        target: target,
        contentRect: contentRect
      });
    }

    return ResizeObserverEntry;
  }();

  var ResizeObserverSPI =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = [];
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */

      this.observations_ = new MapShim();

      if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
      }

      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */


    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      } // Do nothing if current environment doesn't have the Element interface.


      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_; // Do nothing if element is already being observed.

      if (observations.has(target)) {
        return;
      }

      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this); // Force the update of observations.

      this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */


    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      } // Do nothing if current environment doesn't have the Element interface.


      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_; // Do nothing if element is not being observed.

      if (!observations.has(target)) {
        return;
      }

      observations.delete(target);

      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this;

      this.clearActive();
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return;
      }

      var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */


    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };

    return ResizeObserverSPI;
  }(); // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.


  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */

  var ResizeObserver =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
      }

      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }

      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }

    return ResizeObserver;
  }(); // Expose public methods of ResizeObserver.


  ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
      var _a;

      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });

  var index = function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver;
    }

    return ResizeObserver;
  }();

  // inspired by https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/
  // see https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ

  const observer = new index(function (entries) {
    for (const entry of entries) {
      const breakpoints = JSON.parse(entry.target.dataset.breakpoints); // the rule iteration order depends on the order the object keys, and this varies from browser to browser.
      // keep track of a high water mark so we always apply the widest matching rule regardless of iteration order.

      let highWaterMark = 0;
      let selectedClass = '';

      for (const breakpoint of Object.keys(breakpoints)) {
        const minWidth = breakpoints[breakpoint];

        if (entry.contentRect.width >= minWidth && minWidth > highWaterMark) {
          selectedClass = breakpoint;
          highWaterMark = minWidth;
        }
      }

      for (const breakpoint of Object.keys(breakpoints)) {
        if (breakpoint === selectedClass) {
          if (!entry.target.classList.contains(breakpoint)) entry.target.classList.add(breakpoint);
        } else if (entry.target.classList.contains(breakpoint)) {
          entry.target.classList.remove(breakpoint);
        }
      }
    }
  });

  function update(oldVnode, vnode) {
    if (vnode.elm.dataset && vnode.elm.dataset.breakpoints) {
      try {
        // ensure that the data attribute parses as valid json before we start observing it
        JSON.parse(vnode.elm.dataset.breakpoints);
        observer.observe(vnode.elm);
      } catch (er) {// TODO: should invalid json in the data-breakpoints attribute throw an error?
      }
    } else if (vnode.elm instanceof Element) {
      observer.unobserve(vnode.elm);
    }
  }

  function destroy(vnode
  /*, removeCallback*/
  ) {
    if (vnode.elm instanceof Element) observer.unobserve(vnode.elm);
  }

  var containerQueryModule = {
    create: update,
    update,
    destroy
  };

  // Inits with common modules out of the box
  var html = create([attributesModule, eventListenersModule, classModule, propsModule, styleModule, containerQueryModule]);

  function tag(strs) {
    var strings = strs.raw.map(function (item) {
      return item.replace(/\r?\n\s.*?(>|<)/g, '$1');
    });

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return html.apply(void 0, [strings].concat(args));
  }

  let nanoid = (size = 21) => {
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array(size));

    while (size--) {
      let byte = bytes[size] & 63;

      if (byte < 36) {
        id += byte.toString(36);
      } else if (byte < 62) {
        id += (byte - 26).toString(36).toUpperCase();
      } else if (byte < 63) {
        id += '_';
      } else {
        id += '-';
      }
    }

    return id;
  };

  function createId() {
    return nanoid();
  }

  var EventManager = /*#__PURE__*/function () {
    function EventManager() {
      _classCallCheck(this, EventManager);

      this.events = {};
    }

    _createClass(EventManager, [{
      key: "on",
      value: function on(name, callback) {
        var handlers = this.events[name] = [];
        handlers.push(callback);
      }
    }, {
      key: "emit",
      value: function emit(name, data) {
        var handlers = this.events[name];

        if (!handlers) {
          return;
        }

        handlers.forEach(function (callback) {
          callback(data);
        });
      }
    }]);

    return EventManager;
  }();

  var ToolbarButton = /*#__PURE__*/function () {
    /**
     * 
     * @param { Object } option butotn config
     * @param { string } [option.class] button class style
     * @param { string } [option.label] show text on cursor hover
     */
    function ToolbarButton() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ToolbarButton);

      var el = document.createElement('span');
      el.classList = option["class"];
      el.innerText = option.label || '';
      this.$el = el;
    }
    /**
     * register button event
     * @param { string } eventName 
     * @param { function } callback 
     */


    _createClass(ToolbarButton, [{
      key: "on",
      value: function on(eventName, callback) {
        this.$el.addEventListener(eventName, callback);
      }
    }]);

    return ToolbarButton;
  }();

  var _templateObject$1;

  var renderParagraphConf = {
    type: 'paragraph',
    render: function render(option, htmlToVnode, editor) {
      var children = option.children;
      var vnode = htmlToVnode(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["<p data-key=\"", "\" data-node=\"paragraph\">", "</p>"])), option.key, children[0].text);
      vnode.key = option.key;
      return vnode;
    }
  };

  var Paragraph = /*#__PURE__*/function () {
    function Paragraph(editor) {
      var _this = this;

      _classCallCheck(this, Paragraph);

      // Add iconfont
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '//at.alicdn.com/t/font_3205793_yd5fccklgn9.css';
      document.head.appendChild(link);
      var button = editor.createToolbar({
        "class": 'IbisIcon ibis-icon-formatparagraph'
      });
      button.on('click', function () {
        var now = new Date().toLocaleString();

        var enode = _this.createElm({
          text: now
        });

        editor.insertNode(enode);
      });
    }

    _createClass(Paragraph, [{
      key: "createElm",
      value: function createElm() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _option$text = option.text,
            text = _option$text === void 0 ? '' : _option$text;
        return {
          type: 'paragraph',
          // 必须指定type属性
          children: [{
            text: text
          }]
        };
      }
    }, {
      key: "renderElems",
      value: function renderElems() {
        return [renderParagraphConf];
      }
    }]);

    return Paragraph;
  }();

  var _templateObject, _templateObject2, _templateObject3;

  var renderTableConf = {
    type: 'table',
    render: function render(option, htmlToVnode, renderChildren) {
      var _option$children = option.children,
          children = _option$children === void 0 ? [] : _option$children;
      return htmlToVnode(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <table data-key=\"", "\" data-node=\"table\">\n        <tbody>", "</tbody>\n      </table>\n    "])), option.key, children.map(renderChildren));
    }
  };
  var renderTableRowConf = {
    type: 'tableRow',
    render: function render(option, htmlToVnode, renderChildren) {
      var _option$children2 = option.children,
          children = _option$children2 === void 0 ? [] : _option$children2;
      return htmlToVnode(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<tr data-key=\"", "\" data-node=\"tableRow\">", "</tr>"])), option.key, children.map(renderChildren));
    }
  };
  var renderTableColumnConf = {
    type: 'tableColumn',
    render: function render(option, htmlToVnode, renderChildren) {
      var _option$children3 = option.children,
          children = _option$children3 === void 0 ? [] : _option$children3;
      return htmlToVnode(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<td data-key=\"", "\" data-node=\"tableColumn\">", "</td>"])), option.key, children[0].text);
    }
  };

  var Table = /*#__PURE__*/function () {
    function Table(editor) {
      var _this = this;

      _classCallCheck(this, Table);

      var button = editor.createToolbar({
        "class": 'IbisIcon ibis-icon-table'
      });
      button.on('click', function () {
        var now = new Date().toLocaleString();

        var enode = _this.createElm({
          text: now
        });

        editor.insertNode(enode);
      });
    }

    _createClass(Table, [{
      key: "createElm",
      value: function createElm() {
        return {
          type: 'table',
          // 必须指定type属性
          children: [{
            type: 'tableRow',
            children: [{
              type: 'tableColumn',
              children: [{
                text: '1'
              }]
            }]
          }]
        };
      }
    }, {
      key: "renderElems",
      value: function renderElems() {
        return [renderTableConf, renderTableRowConf, renderTableColumnConf];
      }
    }]);

    return Table;
  }();

  var patch = init$1([classModule, propsModule, styleModule, eventListenersModule, attributesModule]);
  var buildInPlugins = [Paragraph, Table];

  var Ibis = /*#__PURE__*/function () {
    function Ibis() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Ibis);

      var el = options.el,
          placeholder = options.placeholder,
          _options$plugins = options.plugins,
          plugins = _options$plugins === void 0 ? [] : _options$plugins;
          options.toolbar;
      this.id = createId();
      this.el = el;
      this.plugins = new Map();
      this.renders = new Map();
      this._slate = createEditor();
      this.toolbar = [];
      this.$events = new EventManager();
      this.placeHolder = placeholder; // install buildIn plugins

      buildInPlugins.forEach(function (plugin) {
        var name = plugin.name;

        _this.installPlugin(name, plugin);
      }); // install user plugins

      plugins.forEach(function (plugin) {
        var name = plugin.name;

        _this.installPlugin(name, plugin);
      }); // draw editor

      if (this.el) {
        this.mount();
      }
    }

    _createClass(Ibis, [{
      key: "on",
      value: function on(eventName, callback) {
        this.$events.on(eventName, callback);
      }
      /**
       * Install plugin
       * @param {*} pluginName 
       * @param {*} plugin 
       */

    }, {
      key: "installPlugin",
      value: function installPlugin(pluginName, Plugin) {
        var _this2 = this;

        var isInstalled = this.plugins.has(pluginName);

        if (isInstalled) {
          return;
        }

        var _plugin = new Plugin(this);

        var renders = _plugin.renderElems();

        renders.forEach(function (config) {
          _this2.renders.set(config.type, config.render);
        });
        this.plugins.set(pluginName, Plugin);
      }
    }, {
      key: "createToolbar",
      value: function createToolbar() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var butotn = new ToolbarButton(config);
        this.toolbar.push(butotn);
        return butotn;
      }
    }, {
      key: "insertNode",
      value: function insertNode(node) {
        node.key = createId();

        this._slate.insertNode(node);

        this.updateView();
      }
      /**
       * create UI
       */

    }, {
      key: "mount",
      value: function mount() {
        // container
        var container = document.createElement('div');
        container.classList = 'ibis-editor'; // toolbar

        var toolbar = document.createElement('div');
        toolbar.classList = 'ibis-toolbar'; // content

        var content = document.createElement('div');
        content.classList = 'ibis-content';
        content.setAttribute('contenteditable', true);
        this.contentEl = content;
        this.toolbar.forEach(function (button) {
          return toolbar.appendChild(button.$el);
        });
        container.appendChild(toolbar);
        container.appendChild(content);
        this.el.appendChild(container);
        this.lastView = this._slate.children.length;
      }
    }, {
      key: "ibELementToVnode",
      value: function ibELementToVnode(renderConf) {
        var render = this.renders.get(renderConf.type);
        return render(renderConf, tag.bind(this), this.ibELementToVnode.bind(this));
      }
    }, {
      key: "updateView",
      value: function updateView() {
        var _this3 = this;

        var newVnode = toVNode(this.contentEl);
        newVnode.children = this._slate.children.map(function (item) {
          var node = _this3.ibELementToVnode(item);

          return node;
        });
        this.oldVnode = patch(this.oldVnode || toVNode(this.contentEl), newVnode);
      }
    }, {
      key: "isElement",
      value: function isElement(node) {
        return true;
      }
    }]);

    return Ibis;
  }();

  return Ibis;

}));
