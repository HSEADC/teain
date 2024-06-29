(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[665],{

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

/***/ 2235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);


var A_Text = function A_Text(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (A_Text);

/***/ }),

/***/ 6032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ C_Teas_C_Teas)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/Atoms/A_Text/A_Text.jsx
var A_Text = __webpack_require__(2235);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Wrappers/W_CardTitle/W_CardTitle.jsx



var W_CardTitle = function W_CardTitle(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('W_CardTitle', className)
  }, children);
};
/* harmony default export */ const W_CardTitle_W_CardTitle = (W_CardTitle);
// EXTERNAL MODULE: ./src/airtable.js
var airtable = __webpack_require__(4165);
var airtable_default = /*#__PURE__*/__webpack_require__.n(airtable);
;// CONCATENATED MODULE: ./src/images/tea_image.png
const tea_image_namespaceObject = __webpack_require__.p + "images/5b2819369481ff064300.png";
;// CONCATENATED MODULE: ./src/components/Molecules/M_TeaCard/M_TeaCard.jsx
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var M_TeaCard = function M_TeaCard(_ref) {
  var className = _ref.className,
    id = _ref.id,
    imgPathStor = _ref.imgPathStor,
    top_nameS = _ref.top_nameS,
    bottom_nameS = _ref.bottom_nameS;
  var _useState = (0,react.useState)(top_nameS),
    _useState2 = _slicedToArray(_useState, 2),
    top_name = _useState2[0],
    setTopName = _useState2[1];
  var _useState3 = (0,react.useState)(bottom_nameS),
    _useState4 = _slicedToArray(_useState3, 2),
    bottom_name = _useState4[0],
    setBottomName = _useState4[1];
  var _useState5 = (0,react.useState)(imgPathStor),
    _useState6 = _slicedToArray(_useState5, 2),
    imgPath = _useState6[0],
    setImgPath = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    name = _useState8[0],
    setName = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isNew = _useState10[0],
    setIsNew = _useState10[1];
  (0,react.useEffect)(function () {
    if (id) {
      airtable_default()('tea').find(id, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.get('new'));
        setTopName(record.get('top_name'));
        setBottomName(record.get('bottom_name'));
        setImgPath(record.get('image')[0].url);
        setName(record.get('name'));
        setIsNew(record.get('new'));
        console.log(record.get('new'));
      });
    }
  }, [id]);
  if (!top_name || !bottom_name) {
    console.log('M_TeaCard: top_name or bottom_name is not defined');
    return null;
  }
  return /*#__PURE__*/react.createElement("a", {
    href: "typesoftea/teaCard.html?item=".concat(name),
    className: classnames_default()('M_TeaCard', className, isNew && 'M_TeaCard-new')
  }, /*#__PURE__*/react.createElement("img", {
    alt: top_name,
    src: imgPath,
    onError: function onError(e) {
      return e.target.src = tea_image_namespaceObject;
    }
  }), /*#__PURE__*/react.createElement(W_CardTitle_W_CardTitle, null, /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: 'A_CardTitleHelios'
  }, top_name), /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: 'A_CardTitleVlas'
  }, bottom_name)));
};
/* harmony default export */ const M_TeaCard_M_TeaCard = (M_TeaCard);
;// CONCATENATED MODULE: ./src/components/Collections/C_Teas/C_Teas.jsx
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || C_Teas_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return C_Teas_arrayLikeToArray(r); }
function C_Teas_slicedToArray(r, e) { return C_Teas_arrayWithHoles(r) || C_Teas_iterableToArrayLimit(r, e) || C_Teas_unsupportedIterableToArray(r, e) || C_Teas_nonIterableRest(); }
function C_Teas_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function C_Teas_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return C_Teas_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? C_Teas_arrayLikeToArray(r, a) : void 0; } }
function C_Teas_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function C_Teas_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function C_Teas_arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var C_Teas = function C_Teas() {
  var _useState = (0,react.useState)([]),
    _useState2 = C_Teas_slicedToArray(_useState, 2),
    teas = _useState2[0],
    setTeas = _useState2[1];
  (0,react.useEffect)(function () {
    airtable_default()('tea').select({
      filterByFormula: '{new} = TRUE()',
      maxRecords: 4
    }).eachPage(function (records, fetchNextPage) {
      var loadedTeas = records.map(function (record) {
        return record;
      });
      setTeas(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(loadedTeas));
      });
      fetchNextPage();
    }, function (err) {
      if (err) {
        console.error(err);
      }
    });
  }, []);
  (0,react.useEffect)(function () {
    console.log(teas);
  }, [teas]);
  return /*#__PURE__*/react.createElement("div", {
    className: "C_Teas C_TeaTypeCards"
  }, teas.map(function (tea, index) {
    return /*#__PURE__*/react.createElement(M_TeaCard_M_TeaCard, {
      key: index,
      imgPathStor: tea.fields.image[0].url,
      bottom_nameS: tea.fields.bottom_name,
      top_nameS: tea.fields.top_name,
      id: tea.id
    });
  }));
};
/* harmony default export */ const C_Teas_C_Teas = (C_Teas);

/***/ }),

/***/ 6942:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);