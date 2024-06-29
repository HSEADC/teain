(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[273],{

/***/ 4266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ S_TeaCard_S_TeaCard)
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
      window.location.href = "../../../recipes.html?tags=".concat(tag);
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
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
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
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title2Helios"
  }, "\u0432\u043A\u0443\u0441 \u043D\u0435\u0434\u0435\u043B\u0438"), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title2Vlas"
  }, translated_name)), /*#__PURE__*/react.createElement(A_Text_A_Text, {
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
    src: imageBig,
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
// EXTERNAL MODULE: ./src/components/Organisms/O_NavBar/O_NavBar.jsx + 3 modules
var O_NavBar = __webpack_require__(7427);
;// CONCATENATED MODULE: ./src/components/SuperOrganisms/S_TeaCard/S_TeaCard.jsx
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var S_TeaCard = function S_TeaCard() {
  var _useState = (0,react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    item = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    obj = _useState4[0],
    setObj = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    image = _useState6[0],
    setImage = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    teaType = _useState8[0],
    setTeaType = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    bottom_tag = _useState10[0],
    setBottom_tag = _useState10[1];
  var _useState11 = (0,react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    bottom_translated_tag_name = _useState12[0],
    setBottom_translated_tag_name = _useState12[1];
  var _useState13 = (0,react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    recipes = _useState14[0],
    setRecipes = _useState14[1];
  (0,react.useEffect)(function () {
    var params = new URLSearchParams(window.location.search);
    var itemParam = params.get('item') || 'assam';
    setItem(itemParam);
  }, []);
  (0,react.useEffect)(function () {
    if (item) {
      airtable_default()('tea').select({
        filterByFormula: "{name} = '".concat(item, "'")
      }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          setObj(record.fields);
          setImage(record.fields.image[1].url);
          setTeaType(record.fields.translated_type_name);
          setBottom_tag(record.fields.bottom_tag_name[0]);
          setBottom_translated_tag_name(record.fields.bottom_translated_tag_name[0]);
        });
        fetchNextPage();
      }, function done(err) {
        if (err) {
          console.error(err);
        }
      });
    }
  }, [item]);
  (0,react.useEffect)(function () {
    if (bottom_tag) {
      airtable_default()('recipes').select({
        filterByFormula: "AND(FIND('".concat(bottom_tag, "', ARRAYJOIN(tags, ',')) > 0, NOT(flavour_of_the_week))"),
        maxRecords: 4
      }).eachPage(function page(records, fetchNextPage) {
        var newRecipes = records.map(function (record) {
          return record.fields;
        });
        setRecipes(newRecipes);
        fetchNextPage();
      }, function done(err) {
        if (err) {
          console.error(err);
        }
      });
    }
  }, [bottom_tag]);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(O_NavBar["default"], null), /*#__PURE__*/react.createElement("div", {
    className: "W_LeadContainer"
  }, /*#__PURE__*/react.createElement("button", {
    className: "A_SliderButton",
    onClick: function onClick() {
      window.history.back();
    }
  }, /*#__PURE__*/react.createElement("svg", {
    fill: "none",
    height: "85",
    viewBox: "0 0 112 85",
    width: "112",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "56",
    cy: "42.2432",
    fill: "#F6ECE0",
    rx: "55",
    ry: "41.4575",
    transform: "rotate(-180 56 42.2432)"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: "56",
    cy: "42.2432",
    fill: "#F6ECE0",
    id: "bg",
    rx: "55",
    ry: "41.4575",
    transform: "rotate(-180 56 42.2432)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M48.6426 35.9046C48.3214 36.7397 47.9681 37.5105 47.5827 38.217C47.1973 38.9557 46.7637 39.6462 46.282 40.2886L72.1039 40.2886L72.1039 44.2389L46.282 44.2389C46.7316 44.8813 47.1491 45.5557 47.5345 46.2623C47.9199 47.001 48.2732 47.7878 48.5944 48.6229L44.9331 48.6229C42.9418 46.2783 40.7579 44.4959 38.3813 43.2754L38.3813 41.2039C40.7579 40.0477 42.9418 38.2813 44.9331 35.9046L48.6426 35.9046Z",
    fill: "#CC8931",
    id: "arrow"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M1 42.3503C1.00001 19.5131 25.6244 0.999947 56 0.999949C86.3757 0.999952 111 19.5131 111 42.3503C111 65.1875 86.3757 83.7007 56 83.7007C25.6243 83.7007 1 65.1875 1 42.3503Z",
    stroke: "#CC8931",
    strokeWidth: "0.721471"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M48.6426 35.9046C48.3214 36.7397 47.9681 37.5105 47.5827 38.217C47.1973 38.9557 46.7637 39.6462 46.282 40.2886L72.1039 40.2886L72.1039 44.2389L46.282 44.2389C46.7316 44.8813 47.1491 45.5557 47.5345 46.2623C47.9199 47.001 48.2732 47.7878 48.5944 48.6229L44.9331 48.6229C42.9418 46.2783 40.7579 44.4959 38.3813 43.2754L38.3813 41.2039C40.7579 40.0477 42.9418 38.2813 44.9331 35.9046L48.6426 35.9046Z",
    stroke: "#CC8931",
    strokeWidth: "0.721471"
  })))), /*#__PURE__*/react.createElement("div", {
    className: "O_TeaCaracters"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_Container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "O_CardStart"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "M_Title3"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Helios"
  }, obj.top_name), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Vlas"
  }, obj.bottom_name)), /*#__PURE__*/react.createElement("img", {
    alt: "",
    className: "A_ImgTea_Card",
    src: image
  })), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Lead"
  }, obj.description), /*#__PURE__*/react.createElement("div", {
    className: "W_TeaTable"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "M_Title3"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Helios"
  }, obj.sub_title), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Vlas"
  }, "\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438")), obj.what_use && /*#__PURE__*/react.createElement("div", {
    className: "M_TableRow"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table1"
  }, "\u0447\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442"), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table2"
  }, obj.what_use)), obj.useful && /*#__PURE__*/react.createElement("div", {
    className: "M_TableRow"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table1"
  }, "\u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430"), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table2"
  }, obj.useful)), obj.temperature && /*#__PURE__*/react.createElement("div", {
    className: "M_TableRow"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table1"
  }, "t \u0437\u0430\u0432\u0430\u0440\u043A\u0438 "), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table2"
  }, obj.temperature)), obj.color && /*#__PURE__*/react.createElement("div", {
    className: "M_TableRow"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table1"
  }, "\u0446\u0432\u0435\u0442 \u0447\u0430\u044F "), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table2"
  }, obj.color)), obj.taste && /*#__PURE__*/react.createElement("div", {
    className: "M_TableRow"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table1"
  }, "\u0432\u043A\u0443\u0441 "), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Table2"
  }, obj.taste))))), /*#__PURE__*/react.createElement("div", {
    className: "O_RecipesRec"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "M_Title3"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Helios"
  }, obj.cta), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title3Vlas"
  }, "\u0440\u0435\u0446\u0435\u043F\u0442\u044B")), /*#__PURE__*/react.createElement(A_Tag_A_Tag, {
    href: "".concat(bottom_tag),
    active: true,
    size: 'l'
  }, bottom_translated_tag_name), /*#__PURE__*/react.createElement("ul", {
    className: "C_RecipeCardS"
  }, recipes.map(function (recipe, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index
    }, /*#__PURE__*/react.createElement(O_RecipeCardS_O_RecipeCard, {
      key: index,
      recipe: recipe
    }));
  }))));
};
/* harmony default export */ const S_TeaCard_S_TeaCard = (S_TeaCard);

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