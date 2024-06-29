(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[685],{

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

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ W_RecipeCardL_W_RecipeCardL)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/airtable.js
var airtable = __webpack_require__(4165);
var airtable_default = /*#__PURE__*/__webpack_require__.n(airtable);
// EXTERNAL MODULE: ./src/components/Atoms/A_Text/A_Text.jsx
var A_Text = __webpack_require__(2235);
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
  }, /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: green && !active ? 'A_Text-lightGreen' : undefined
  }, children));
};
/* harmony default export */ const A_Tag_A_Tag = (A_Tag);
;// CONCATENATED MODULE: ./src/images/recipe_card.png
const recipe_card_namespaceObject = __webpack_require__.p + "images/580c205cf88f5ac330ca.png";
;// CONCATENATED MODULE: ./src/images/index/A_ImgRecipeL.png
const A_ImgRecipeL_namespaceObject = __webpack_require__.p + "images/5acc1572e4e9b17e6511.png";
;// CONCATENATED MODULE: ./src/components/Organisms/O_RecipeCardS/O_RecipeCard.jsx






var O_RecipeCard = function O_RecipeCard(_ref) {
  var recipe = _ref.recipe,
    toggleTagSelection = _ref.toggleTagSelection,
    activeTags = _ref.activeTags,
    href = _ref.href;
  var tagsTranslatedArray = recipe.translated_tag_names || [];
  var tagsArray = recipe.tag_names || [];
  var image = recipe.image && recipe.image[0] && recipe.image[0].url ? recipe.image[0].url : recipe_card_namespaceObject;
  var imageBig = recipe.imageBig && recipe.imageBig[0] && recipe.imageBig[0].url ? recipe.imageBig[0].url : A_ImgRecipeL_namespaceObject;
  var description = recipe.description;
  var translated_name = recipe.translated_name,
    flavour_of_the_week = recipe.flavour_of_the_week;
  var size = 's';
  if (flavour_of_the_week) {
    size = 'l';
  }
  var isRecipesPage = window.location.pathname.includes('recipes');
  var handleTagClick = function handleTagClick(tag) {
    if (isRecipesPage) {
      toggleTagSelection(tag);
    } else {
      window.location.href = "recipes.html?tags=".concat(tag);
    }
  };
  var O_RecipeCardS = /*#__PURE__*/react.createElement("a", {
    href: href,
    className: "O_RecipeCardS card"
  }, /*#__PURE__*/react.createElement("img", {
    alt: translated_name,
    src: image,
    onError: function onError(e) {
      return e.target.src = recipe_card_namespaceObject;
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "W_RecipeCardSBottom"
  }, /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: "A_CardTitleHelios"
  }, translated_name), /*#__PURE__*/react.createElement("ul", {
    className: "C_TegCloud"
  }, tagsArray.map(function (tag, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index
    }, /*#__PURE__*/react.createElement(A_Tag_A_Tag, {
      active: activeTags && activeTags.includes(tagsArray[index]),
      key: index,
      onClick: function onClick() {
        return handleTagClick(tagsArray[index]);
      }
    }, tagsTranslatedArray[index]));
  }))));
  var O_RecipeCardL = /*#__PURE__*/react.createElement("a", {
    href: href,
    className: "O_RecipeCardL"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_RecipeCardLeft"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_RecipeCardText"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "M_Title2"
  }, /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: "A_Title2Helios"
  }, "\u0432\u043A\u0443\u0441 \u043D\u0435\u0434\u0435\u043B\u0438"), /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: "A_Title2Vlas"
  }, translated_name)), /*#__PURE__*/react.createElement(A_Text/* default */.A, {
    className: "A_Text"
  }, description)), /*#__PURE__*/react.createElement("div", {
    className: "C_TegCloud"
  }, tagsTranslatedArray.map(function (tag, index) {
    return /*#__PURE__*/react.createElement(A_Tag_A_Tag, {
      active: activeTags && activeTags.includes(tagsArray[index]),
      key: index,
      onClick: function onClick() {
        return handleTagClick(tagsArray[index]);
      }
    }, tagsTranslatedArray[index]);
  }))), /*#__PURE__*/react.createElement("div", {
    className: "A_ImgRecipeL"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "",
    src: image,
    onError: function onError(e) {
      return e.target.src = A_ImgRecipeL_namespaceObject;
    }
  })));
  switch (size) {
    case 's':
      return O_RecipeCardS;
    case 'l':
      return O_RecipeCardL;
    default:
      return O_RecipeCardS;
  }
};
/* harmony default export */ const O_RecipeCardS_O_RecipeCard = (O_RecipeCard);
;// CONCATENATED MODULE: ./src/components/Atoms/A_Link/A_Link.jsx



var A_Link = function A_Link(_ref) {
  var className = _ref.className,
    children = _ref.children,
    href = _ref.href,
    blank = _ref.blank;
  return /*#__PURE__*/react.createElement("a", {
    href: href,
    target: blank ? '_blank' : '_self',
    className: classnames_default()('A_Link', className),
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};
/* harmony default export */ const A_Link_A_Link = (A_Link);
;// CONCATENATED MODULE: ./src/components/Wrappers/W_RecipeCardL/W_RecipeCardL.jsx
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var W_RecipeCardL = function W_RecipeCardL() {
  var _useState = (0,react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    flavourOfTheWeek = _useState2[0],
    setFlavourOfTheWeek = _useState2[1];
  (0,react.useEffect)(function () {
    airtable_default()('recipes').select({
      filterByFormula: "{flavour_of_the_week} = TRUE()"
    }).eachPage(function page(records, fetchNextPage) {
      var loadedRecipes = records.map(function (record) {
        return record.fields;
      });
      if (loadedRecipes.length > 0) {
        setFlavourOfTheWeek(loadedRecipes[0]);
      }
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
      }
    });
  }, []);
  (0,react.useEffect)(function () {
    console.log('Flavour of the Week:', flavourOfTheWeek);
  }, [flavourOfTheWeek]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, flavourOfTheWeek && /*#__PURE__*/react.createElement(O_RecipeCardS_O_RecipeCard, {
    recipe: flavourOfTheWeek
  }), /*#__PURE__*/react.createElement("div", {
    className: 'W_BottomLink'
  }, /*#__PURE__*/react.createElement(A_Link_A_Link, {
    href: "recipes.html"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B")));
};
/* harmony default export */ const W_RecipeCardL_W_RecipeCardL = (W_RecipeCardL);

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