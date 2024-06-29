(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[117],{

/***/ 5171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ S_Recipe_S_Recipe)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/airtable.js
var airtable = __webpack_require__(4165);
var airtable_default = /*#__PURE__*/__webpack_require__.n(airtable);
;// CONCATENATED MODULE: ./src/components/Atoms/A_Text/A_Text.jsx


var A_Text = function A_Text(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/react.createElement("span", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};
/* harmony default export */ const A_Text_A_Text = (A_Text);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Atoms/A_Tag/A_Tag.jsx




var A_Tag = function A_Tag(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    href = _ref.href,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "s" : _ref$size,
    green = _ref.green,
    onClick = _ref.onClick;
  var handleClick = function handleClick(e) {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };
  return /*#__PURE__*/react.createElement("a", {
    href: href || '#',
    className: classnames_default()('A_Tag', className, {
      active: active
    }, "A_Tag-".concat(size)),
    onClick: handleClick
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: green && !active ? 'A_Text-lightGreen' : undefined
  }, children));
};
/* harmony default export */ const A_Tag_A_Tag = (A_Tag);
;// CONCATENATED MODULE: ./src/images/index/A_PreImg.png
const A_PreImg_namespaceObject = __webpack_require__.p + "images/946625286a17632b0d16.png";
// EXTERNAL MODULE: ./src/components/Organisms/O_NavBar/O_NavBar.jsx + 3 modules
var O_NavBar = __webpack_require__(7427);
;// CONCATENATED MODULE: ./src/components/SuperOrganisms/S_Recipe/S_Recipe.jsx
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var S_Recipe = function S_Recipe() {
  var url = window.location.href;
  var urlObj = new URL(url);
  var params = new URLSearchParams(urlObj.search);
  var paramValue = params.get('recipe');
  var recipe_name = paramValue ? paramValue : 'thyme_and_apricots';
  var _useState = (0,react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    recipe = _useState2[0],
    setRecipe = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    previewImg = _useState4[0],
    setPreviewImg = _useState4[1];
  (0,react.useEffect)(function () {
    airtable_default()('recipes').select({
      filterByFormula: "{name} = '".concat(recipe_name, "'"),
      maxRecords: 1
    }).firstPage(function done(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      var loadedRecipe = records[0].fields;
      setRecipe(loadedRecipe);
      setPreviewImg(loadedRecipe.preview[0].url);
    });
  }, []);
  (0,react.useEffect)(function () {
    console.log(recipe);
  }, [recipe]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(O_NavBar["default"], null), /*#__PURE__*/react.createElement("div", {
    className: "M_RecipeInf"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_Container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "M_RecipeTitleLead"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_RecipeTitleLead"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title2Helios"
  }, recipe.translated_name), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Lead"
  }, recipe.description)), /*#__PURE__*/react.createElement("ul", {
    className: "C_TegCloud"
  }, recipe.tag_names && recipe.tag_names.map(function (tag, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index
    }, /*#__PURE__*/react.createElement(A_Tag_A_Tag, {
      href: "#",
      size: 'l',
      className: "A_Tag"
    }, recipe.translated_tag_names[index]));
  }))), /*#__PURE__*/react.createElement("img", {
    alt: "",
    src: previewImg,
    onError: function onError(e) {
      return e.target.src = previewImg;
    }
  }))), /*#__PURE__*/react.createElement("div", {
    className: "W_Container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "O_RecipeComps"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_CardTitleHelios"
  }, "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B"), /*#__PURE__*/react.createElement("div", {
    className: "W_RecipeTableRows"
  }, recipe.ingredient_names && recipe.ingredient_names.map(function (ingredient, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "M_RecipeTableRow",
      key: index
    }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
      className: "A_Table1"
    }, recipe.ingredient_names[index]), /*#__PURE__*/react.createElement(A_Text_A_Text, {
      className: "A_Table2"
    }, recipe.ingredient_descriptions[index]));
  }))), /*#__PURE__*/react.createElement("div", {
    className: "O_RecipeInfo2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "M_Title3"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Helios"
  }, "\u0441\u043F\u043E\u0441\u043E\u0431"), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Vlas"
  }, "\u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F")), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Text"
  }, recipe.cooking_method))), /*#__PURE__*/react.createElement("div", {
    className: "W_Container W_RecipeButton"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: function onClick() {
      window.print();
    },
    className: "A_Describe"
  }, "\u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442")), /*#__PURE__*/react.createElement("div", {
    className: "C_PreImjs C_PreImjsRecipe"
  }, recipe.images && recipe.images.map(function (image, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index,
      className: "A_PreImg"
    }, /*#__PURE__*/react.createElement("img", {
      alt: "",
      src: image.url,
      onError: function onError(e) {
        return e.target.src = A_PreImg_namespaceObject;
      }
    }));
  })));
};
/* harmony default export */ const S_Recipe_S_Recipe = (S_Recipe);

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