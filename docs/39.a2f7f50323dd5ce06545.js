(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[39,641],{

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2235);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href || '#',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('A_Tag', className, {
      active: active
    }, "A_Tag-".concat(size)),
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: green && !active ? 'A_Text-lightGreen' : undefined
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (A_Tag);

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

/***/ 6129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2235);
/* harmony import */ var _Atoms_A_Tag_A_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9575);
/* harmony import */ var _images_recipe_card_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2935);
/* harmony import */ var _images_index_A_ImgRecipeL_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8436);






var O_RecipeCard = function O_RecipeCard(_ref) {
  var recipe = _ref.recipe,
    toggleTagSelection = _ref.toggleTagSelection,
    activeTags = _ref.activeTags,
    href = _ref.href;
  var tagsTranslatedArray = recipe.translated_tag_names || [];
  var tagsArray = recipe.tag_names || [];
  var image = recipe.image && recipe.image[0] && recipe.image[0].url ? recipe.image[0].url : _images_recipe_card_png__WEBPACK_IMPORTED_MODULE_3__;
  var imageBig = recipe.imageBig && recipe.imageBig[0] && recipe.imageBig[0].url ? recipe.imageBig[0].url : _images_index_A_ImgRecipeL_png__WEBPACK_IMPORTED_MODULE_4__;
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
  var O_RecipeCardS = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    className: "O_RecipeCardS card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: translated_name,
    src: image,
    onError: function onError(e) {
      return e.target.src = _images_recipe_card_png__WEBPACK_IMPORTED_MODULE_3__;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_RecipeCardSBottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_CardTitleHelios"
  }, translated_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "C_TegCloud"
  }, tagsArray.map(function (tag, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Tag_A_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      active: activeTags && activeTags.includes(tagsArray[index]),
      key: index,
      onClick: function onClick() {
        return handleTagClick(tagsArray[index]);
      }
    }, tagsTranslatedArray[index]));
  }))));
  var O_RecipeCardL = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    className: "O_RecipeCardL"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_RecipeCardLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_RecipeCardText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "M_Title2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Title2Helios"
  }, "\u0432\u043A\u0443\u0441 \u043D\u0435\u0434\u0435\u043B\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Title2Vlas"
  }, translated_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Text"
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "C_TegCloud"
  }, tagsTranslatedArray.map(function (tag, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Tag_A_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      active: activeTags && activeTags.includes(tagsArray[index]),
      key: index,
      onClick: function onClick() {
        return handleTagClick(tagsArray[index]);
      }
    }, tagsTranslatedArray[index]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_ImgRecipeL"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: imageBig,
    onError: function onError(e) {
      return e.target.src = _images_index_A_ImgRecipeL_png__WEBPACK_IMPORTED_MODULE_4__;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (O_RecipeCard);

/***/ }),

/***/ 7641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2235);
/* harmony import */ var _airtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _airtable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airtable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Atoms_A_Tag_A_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9575);
/* harmony import */ var _Organisms_O_NavBar_O_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7427);
/* harmony import */ var _Organisms_O_RecipeCardS_O_RecipeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6129);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var S_Recipes = function S_Recipes() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    recipes = _useState2[0],
    setRecipes = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    recipeTypes = _useState4[0],
    setRecipeTypes = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['all']),
    _useState6 = _slicedToArray(_useState5, 2),
    activeTags = _useState6[0],
    setActiveTags = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(recipes);
  }, [recipes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _airtable__WEBPACK_IMPORTED_MODULE_2___default()('recipes').select({}).eachPage(function page(records, fetchNextPage) {
      var loadedRecipes = records.map(function (record) {
        return record.fields;
      });
      setRecipes(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(loadedRecipes));
      });
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
      }
    });
    _airtable__WEBPACK_IMPORTED_MODULE_2___default()('recipe_types').select({}).eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        setRecipeTypes(function (prev) {
          return [].concat(_toConsumableArray(prev), [record.fields]);
        });
      });
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
      }
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var params = new URLSearchParams(window.location.search);
    var tags = params.get('tags');
    if (tags) {
      setActiveTags(tags.split(','));
    }
  }, []);
  var updateQueryParams = function updateQueryParams(tags) {
    var params = new URLSearchParams(window.location.search);
    params.set('tags', tags.join(','));
    window.history.replaceState({}, '', "".concat(window.location.pathname, "?").concat(params.toString()));
  };
  var toggleTagSelection = function toggleTagSelection(tag) {
    setActiveTags(function (prevTags) {
      var newTags;
      if (tag === 'all') {
        newTags = ['all'];
      } else {
        newTags = prevTags.includes(tag) ? prevTags.filter(function (t) {
          return t !== tag;
        }) : [].concat(_toConsumableArray(prevTags.filter(function (t) {
          return t !== 'all';
        })), [tag]);
        if (newTags.length === 0) {
          newTags = ['all'];
        }
      }
      updateQueryParams(newTags);
      return newTags;
    });
  };
  var filteredRecipes = recipes.filter(function (recipe) {
    if (activeTags.includes('all')) {
      return true;
    }
    var recipeTags = recipe.tag_names;
    return activeTags.every(function (activeTag) {
      return recipeTags.includes(activeTag);
    });
  });
  var sortedRecipes = filteredRecipes.sort(function (a, b) {
    return b.flavour_of_the_week - a.flavour_of_the_week;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Organisms_O_NavBar_O_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_SectionDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Title1"
  }, "\u0440\u0435\u0446\u0435\u043F\u0442\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Text"
  }, "\u0414\u0435\u043B\u044E\u0441\u044C \u0441\xA0\u0432\u0430\u043C\u0438 \u043B\u044E\u0431\u0438\u043C\u044B\u043C\u0438 \u0438\xA0\u043B\u0443\u0447\u0448\u0438\u043C\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C\u0438 \u043D\u0430\xA0\u043E\u0441\u043D\u043E\u0432\u0435 \u0447\u0430\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0441\u0442\u0430\u0442\u044C \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0435\u0435, \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u0435\u0435 \u0438\u043B\u0438 \u043A\u0430\u043A \u0432\u044B\xA0\u0441\u0430\u043C\u0438 \u0445\u043E\u0442\u0438\u0442\u0435!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "C_TagCloudBig"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Tag_A_Tag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    size: 'l',
    active: activeTags.includes('all'),
    onClick: function onClick() {
      return toggleTagSelection('all');
    }
  }, "\u0412\u0441\u0435")), recipeTypes && recipeTypes.map(function (recipeType, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Tag_A_Tag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      size: 'l',
      active: activeTags.includes(recipeType.tag_name),
      onClick: function onClick() {
        return toggleTagSelection(recipeType.tag_name);
      },
      green: true
    }, recipeType.translated_tag_name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "C_RecipeCardS"
  }, sortedRecipes.map(function (recipe, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Organisms_O_RecipeCardS_O_RecipeCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      href: "recipes/recipe.html?recipe=".concat(recipe.Name),
      activeTags: activeTags,
      recipe: recipe,
      toggleTagSelection: toggleTagSelection
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_Text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Text"
  }, "\u041A\u0430\u043A \u043C\u044B\xA0\u043F\u0438\u0448\u0435\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Text"
  }, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\xA0\u0447\u0430\u0435, \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u0447\u0430\u0435\u043F\u0438\u0442\u0438\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u0432\xA0\u043A\u0440\u0443\u0433\u0443 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0438\xA0\u043D\u0430\u0435\u0434\u0438\u043D\u0435 \u0441\xA0\u0441\u043E\u0431\u043E\u0439."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Atoms_A_Text_A_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "A_Text"
  }, "\u0412\u0441\u0435 \u043E\xA0\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u0445, \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\xA0\u0441\u043F\u043E\u0441\u043E\u0431\u0430\u0445 \u0437\u0430\u0432\u0430\u0440\u043A\u0438, \u043E\u0442\xA0\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0445 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0439 \u0434\u043E\xA0\u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043E\u0440\u0442\u043E\u0432.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (S_Recipes);

/***/ }),

/***/ 8436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5acc1572e4e9b17e6511.png";

/***/ }),

/***/ 2935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/580c205cf88f5ac330ca.png";

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