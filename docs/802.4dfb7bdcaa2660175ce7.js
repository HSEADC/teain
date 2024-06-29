(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[802,421],{

/***/ 4165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// src/airtable.js
var AIRTABLE_API_KEY = 'patWQdDsaJ0uE5U4C.de473acdff28b5f1f8b2475f3b1da16b1fc01cdd5b47e335c4bd3ae9f62ae39c';
var Airtable = __webpack_require__(997);
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY
});
var base = Airtable.base('appMKHjiu42kizaG5');
module.exports = base;

/***/ }),

/***/ 7427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ O_NavBar_O_NavBar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-burger-menu/lib/BurgerMenu.js
var BurgerMenu = __webpack_require__(7590);
;// CONCATENATED MODULE: ./src/images/index/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/313b5a90c7e79a126601.svg";
;// CONCATENATED MODULE: ./src/images/index/A_SearchIcon.svg
const A_SearchIcon_namespaceObject = __webpack_require__.p + "images/cb939cf176b4a992142e.svg";
// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.mjs
var dist_fuse = __webpack_require__(5929);
// EXTERNAL MODULE: ./src/airtable.js
var airtable = __webpack_require__(4165);
var airtable_default = /*#__PURE__*/__webpack_require__.n(airtable);
;// CONCATENATED MODULE: ./src/components/Organisms/O_SearchBar/O_SearchBar.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var SearchBar = function SearchBar() {
  var _useState = (0,react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    results = _useState4[0],
    setResults = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  (0,react.useEffect)(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var localData, teaData, recipesData, combinedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              localData = localStorage.getItem('searchData');
              if (!localData) {
                _context.next = 5;
                break;
              }
              setData(JSON.parse(localData));
              _context.next = 20;
              break;
            case 5:
              teaData = [];
              recipesData = [];
              _context.prev = 7;
              _context.next = 10;
              return airtable_default()('tea').select({}).eachPage(function (records, fetchNextPage) {
                records.forEach(function (record) {
                  var fields = record.fields;
                  teaData.push(_objectSpread(_objectSpread({}, fields), {}, {
                    id: record.id // Add id from record
                  }));
                });
                fetchNextPage();
              });
            case 10:
              _context.next = 12;
              return airtable_default()('recipes').select({}).eachPage(function (records, fetchNextPage) {
                records.forEach(function (record) {
                  var fields = record.fields;
                  recipesData.push(_objectSpread(_objectSpread({}, fields), {}, {
                    id: record.id // Add id from record
                  }));
                });
                fetchNextPage();
              });
            case 12:
              combinedData = [].concat(_toConsumableArray(teaData.map(function (item) {
                return {
                  type: 'tea',
                  top_name: item.top_name,
                  bottom_name: item.bottom_name,
                  translated_type_name: item.translated_type_name,
                  id: item.id,
                  image: item.image
                };
              })), _toConsumableArray(recipesData.map(function (item) {
                return {
                  type: 'recipe',
                  name: item.Name,
                  translated_name: item.translated_name,
                  translated_tag_names: item.translated_tag_names,
                  tag_names: item.tag_names,
                  id: item.id,
                  // Add id for recipe
                  description: item.description,
                  image: item.image,
                  flavour_of_the_week: item.flavour_of_the_week
                };
              })));
              setData(combinedData);
              localStorage.setItem('searchData', JSON.stringify(combinedData));
              _context.next = 20;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);
              console.error("Error loading data:", _context.t0);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[7, 17]]);
      }));
      return function loadData() {
        return _ref.apply(this, arguments);
      };
    }();
    loadData();
  }, []);
  var handleSearch = function handleSearch(event) {
    var keyword = event.target.value;
    setQuery(keyword);
    if (keyword.length > 2) {
      var fuse = new dist_fuse/* default */.A(data, {
        keys: ['top_name', 'bottom_name', 'translated_type_name', 'description', 'translated_name', 'translated_tag_names'],
        threshold: 0.2
      });
      var result = fuse.search(keyword);
      setResults(result.map(function (r) {
        var item = r.item;
        var matchedTag = '';
        if (item.translated_tag_names && item.translated_tag_names.length > 0) {
          var matchedTags = item.translated_tag_names.filter(function (tag) {
            return tag.includes(keyword);
          });
          if (matchedTags.length > 0) {
            matchedTag = matchedTags.join(', ');
          }
        }
        return _objectSpread(_objectSpread({}, item), {}, {
          matchedTag: matchedTag
        });
      }));
    } else {
      setResults([]);
    }
  };
  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter' && query.length > 2) {
      window.location.href = "searchResult.html?query=".concat(query);
    }
  };
  var handleResultClick = function handleResultClick(query) {
    window.location.href = "searchResult.html?query=".concat(query);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "O_SearchBar"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    value: query,
    onChange: handleSearch,
    onKeyPress: handleKeyPress,
    placeholder: "\u041F\u043E\u0438\u0441\u043A..."
  }), results.length > 0 && /*#__PURE__*/react.createElement("ul", {
    className: "C_SearchResults"
  }, results.map(function (item, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index,
      onClick: function onClick() {
        return handleResultClick(query);
      }
    }, item.type === 'tea' ? "\u0427\u0430\u0439: ".concat(item.top_name, " ").concat(item.bottom_name) : "\u0420\u0435\u0446\u0435\u043F\u0442: ".concat(item.translated_name));
  })));
};
/* harmony default export */ const O_SearchBar = (SearchBar);
;// CONCATENATED MODULE: ./src/components/Organisms/O_NavBar/O_NavBar.jsx
function O_NavBar_slicedToArray(r, e) { return O_NavBar_arrayWithHoles(r) || O_NavBar_iterableToArrayLimit(r, e) || O_NavBar_unsupportedIterableToArray(r, e) || O_NavBar_nonIterableRest(); }
function O_NavBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function O_NavBar_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return O_NavBar_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? O_NavBar_arrayLikeToArray(r, a) : void 0; } }
function O_NavBar_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function O_NavBar_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function O_NavBar_arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var O_NavBar = function O_NavBar() {
  var _useState = (0,react.useState)(false),
    _useState2 = O_NavBar_slicedToArray(_useState, 2),
    showSearch = _useState2[0],
    setShowSearch = _useState2[1];
  var toggleSearch = function toggleSearch() {
    setShowSearch(function (prevShowSearch) {
      return !prevShowSearch;
    });
  };
  return /*#__PURE__*/react.createElement("header", {
    className: "O_NavBar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_NavBar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "A_Logo"
  }, /*#__PURE__*/react.createElement("a", {
    href: "/zavarka"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "logo",
    src: logo_namespaceObject
  }))), /*#__PURE__*/react.createElement("div", {
    className: "Q_BurgerIcon"
  }, /*#__PURE__*/react.createElement(BurgerMenu.slide, {
    right: true
  }, /*#__PURE__*/react.createElement("div", {
    className: "M_SearchIcon ".concat(showSearch ? 'active' : '')
  }, /*#__PURE__*/react.createElement("button", {
    "aria-hidden": "true",
    id: "searchBtn",
    onClick: toggleSearch
  }, /*#__PURE__*/react.createElement("img", {
    alt: "search",
    src: A_SearchIcon_namespaceObject
  })), showSearch && /*#__PURE__*/react.createElement(O_SearchBar, null)), /*#__PURE__*/react.createElement("a", {
    className: "A_Text",
    href: "/zavarka/typesoftea.html?category=tea_types"
  }, "\u0447\u0430\u0439"), /*#__PURE__*/react.createElement("a", {
    className: "A_Text",
    href: "/zavarka/recipes.html"
  }, "\u0440\u0435\u0446\u0435\u043F\u0442\u044B"), /*#__PURE__*/react.createElement("a", {
    className: "A_Text",
    href: "/zavarka/media.html"
  }, "\u043C\u0435\u0434\u0438\u0430"), /*#__PURE__*/react.createElement("a", {
    className: "A_Text",
    href: "/zavarka/media.html"
  }, "\u043F\u043E\u0438\u0441\u043A"))), /*#__PURE__*/react.createElement("nav", {
    className: "W_NavBarCat"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "C_NavBarCat"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    className: "A_chapter",
    href: "/zavarka/typesoftea.html?category=tea_types"
  }, "\u0447\u0430\u0439")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    className: "A_chapter",
    href: "/zavarka/recipes.html"
  }, "\u0440\u0435\u0446\u0435\u043F\u0442\u044B")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    className: "A_chapter",
    href: "/zavarka/media.html"
  }, "\u043C\u0435\u0434\u0438\u0430"))), /*#__PURE__*/react.createElement("div", {
    className: "M_SearchIcon ".concat(showSearch ? 'active' : '')
  }, /*#__PURE__*/react.createElement("button", {
    "aria-hidden": "true",
    id: "searchBtn",
    onClick: toggleSearch
  }, /*#__PURE__*/react.createElement("img", {
    alt: "search",
    src: A_SearchIcon_namespaceObject
  })), showSearch && /*#__PURE__*/react.createElement(O_SearchBar, null)))));
};
/* harmony default export */ const O_NavBar_O_NavBar = (O_NavBar);

/***/ })

}]);