"use strict";
(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[605],{

/***/ 7518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ S_TypesOfTeaPage_S_TypesOfTeaPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Molecules/M_Banner/M_Banner.jsx



var M_Banner = function M_Banner(_ref) {
  var className = _ref.className,
    imgPath = _ref.imgPath;
  console.log(imgPath);
  return /*#__PURE__*/react.createElement("div", {
    style: imgPath && {
      backgroundImage: "url(".concat(imgPath, ")")
    },
    className: classnames_default()('M_Banner', className)
  });
};
/* harmony default export */ const M_Banner_M_Banner = (M_Banner);
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
;// CONCATENATED MODULE: ./src/components/Organisms/O_PreArticle/O_PreArticle.jsx




var O_PreArticle = function O_PreArticle(_ref) {
  var _ref$translated_name = _ref.translated_name,
    translated_name = _ref$translated_name === void 0 ? "виды чая" : _ref$translated_name,
    _ref$right_text = _ref.right_text,
    right_text = _ref$right_text === void 0 ? "Все классические чаи можно разделить только на&nbsp;пять видов по&nbsp;степени ферментации. Задача организации, в&nbsp;особенности&nbsp;же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации." : _ref$right_text,
    _ref$link = _ref.link,
    link = _ref$link === void 0 ? "" : _ref$link,
    _ref$link_text = _ref.link_text,
    link_text = _ref$link_text === void 0 ? "Как правильно заваривать чай разной ферментации?" : _ref$link_text;
  return /*#__PURE__*/react.createElement("div", {
    className: "O_PreArticle O_TypesOfTea"
  }, translated_name && /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Title2Helios"
  }, translated_name), /*#__PURE__*/react.createElement("div", {
    className: "W_TextLink"
  }, right_text && /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Text"
  }, right_text), link_text && /*#__PURE__*/react.createElement(A_Link_A_Link, {
    className: "A_Link",
    href: link && link
  }, link_text)));
};
/* harmony default export */ const O_PreArticle_O_PreArticle = (O_PreArticle);
;// CONCATENATED MODULE: ./src/components/Wrappers/W_CardTitle/W_CardTitle.jsx



var W_CardTitle = function W_CardTitle(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('W_CardTitle', className)
  }, children);
};
/* harmony default export */ const W_CardTitle_W_CardTitle = (W_CardTitle);
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
  }), /*#__PURE__*/react.createElement(W_CardTitle_W_CardTitle, null, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: 'A_CardTitleHelios'
  }, top_name), /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: 'A_CardTitleVlas'
  }, bottom_name)));
};
/* harmony default export */ const M_TeaCard_M_TeaCard = (M_TeaCard);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 3 modules
var swiper_react = __webpack_require__(3325);
// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 25 modules
var modules = __webpack_require__(9636);
;// CONCATENATED MODULE: ./src/components/Organisms/O_TeaType/O_TeaType.jsx








var O_TeaType = function O_TeaType(_ref) {
  var className = _ref.className,
    object = _ref.object,
    index = _ref.index;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('O_TeaType', className)
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: 'A_CardTitl2'
  }, object.translated_name), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.RC, {
    className: "C_TeaCards",
    spaceBetween: 24 // Расстояние между слайдами
    ,
    slidesPerView: 1.2 // Количество отображаемых слайдов
    ,
    freeMode: true,
    navigation: {
      nextEl: ".A_SliderButtonRight_".concat(index),
      prevEl: ".A_SliderButtonLeft_".concat(index)
    },
    breakpoints: {
      475: {
        slidesPerView: 1.6
      },
      744: {
        slidesPerView: 2.3
      },
      1024: {
        slidesPerView: 3.3
      },
      1440: {
        slidesPerView: 4
      },
      1920: {
        slidesPerView: 5
      }
    },
    modules: [modules/* Navigation */.Vx],
    onSlideChange: function onSlideChange() {
      return console.log('slide change');
    }
  }, object.tea && object.tea.map(function (id, index) {
    return /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, {
      key: index
    }, /*#__PURE__*/react.createElement(M_TeaCard_M_TeaCard, {
      key: index,
      id: id
    }));
  }), /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, null))), /*#__PURE__*/react.createElement("div", {
    className: "W_TextLink"
  }, object.description && /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Text"
  }, object.description)), /*#__PURE__*/react.createElement("button", {
    className: "A_SliderButtonRight A_SliderButton A_SliderButtonRight_".concat(index)
  }, /*#__PURE__*/react.createElement("svg", {
    fill: "none",
    height: "76",
    viewBox: "0 0 101 76",
    width: "101",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "50.3093",
    cy: "38.5344",
    fill: "#F6ECE0",
    rx: "49.6726",
    ry: "37.3787"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: "50.3093",
    cy: "38.5344",
    fill: "#F6ECE0",
    id: "bg",
    rx: "49.6726",
    ry: "37.3787"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M56.8546 44.2464C57.1432 43.4961 57.4607 42.8035 57.807 42.1686C58.1533 41.5048 58.5429 40.8844 58.9757 40.3072H35.7732V36.7576H58.9757C58.5717 36.1804 58.1966 35.5743 57.8502 34.9395C57.5039 34.2757 57.1865 33.5687 56.8979 32.8183H60.1878C61.9771 34.925 63.9395 36.5267 66.075 37.6233V39.4847C63.9395 40.5236 61.9771 42.1109 60.1878 44.2464H56.8546Z",
    fill: "#CC8931",
    id: "arrow"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.6643 38.4546C99.6643 58.9752 77.5379 75.6104 50.2435 75.6104C22.9492 75.6104 0.822754 58.9752 0.822754 38.4546C0.822754 17.934 22.9492 1.29883 50.2435 1.29883C77.5379 1.29883 99.6643 17.934 99.6643 38.4546Z",
    id: "stroke_btn",
    stroke: "#CC8931",
    "stroke-width": "0.721471"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M56.8546 44.2464C57.1432 43.4961 57.4607 42.8035 57.807 42.1686C58.1533 41.5048 58.5429 40.8844 58.9757 40.3072H35.7732V36.7576H58.9757C58.5717 36.1804 58.1966 35.5743 57.8502 34.9395C57.5039 34.2757 57.1865 33.5687 56.8979 32.8183H60.1878C61.9771 34.925 63.9395 36.5267 66.075 37.6233V39.4847C63.9395 40.5236 61.9771 42.1109 60.1878 44.2464H56.8546Z",
    stroke: "#CC8931",
    "stroke-width": "0.721471"
  }))), /*#__PURE__*/react.createElement("button", {
    className: "A_SliderButtonLeft A_SliderButton A_SliderButtonLeft_".concat(index)
  }, /*#__PURE__*/react.createElement("svg", {
    fill: "none",
    height: "76",
    viewBox: "0 0 101 76",
    width: "101",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "50.3093",
    cy: "38.5344",
    fill: "#F6ECE0",
    rx: "49.6726",
    ry: "37.3787"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: "50.3093",
    cy: "38.5344",
    fill: "#F6ECE0",
    id: "bg",
    rx: "49.6726",
    ry: "37.3787"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M43.6322 32.6627C43.3436 33.4131 43.0262 34.1057 42.6799 34.7406C42.3336 35.4043 41.944 36.0248 41.5111 36.602L64.7136 36.602L64.7136 40.1516L41.5111 40.1516C41.9151 40.7288 42.2903 41.3348 42.6366 41.9697C42.9829 42.6335 43.3003 43.3405 43.5889 44.0909L40.299 44.0909C38.5098 41.9842 36.5474 40.3825 34.4118 39.2858L34.4118 37.4245C36.5474 36.3855 38.5098 34.7983 40.299 32.6627L43.6322 32.6627Z",
    fill: "#CC8931",
    id: "arrow"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0.822529 38.4546C0.822531 17.934 22.949 1.29882 50.2433 1.29882C77.5376 1.29882 99.6641 17.934 99.6641 38.4546C99.6641 58.9752 77.5376 75.6103 50.2433 75.6103C22.949 75.6103 0.822527 58.9751 0.822529 38.4546Z",
    stroke: "#CC8931",
    strokeWidth: "0.721471"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M43.6322 32.6627C43.3436 33.4131 43.0262 34.1057 42.6799 34.7406C42.3336 35.4043 41.944 36.0248 41.5111 36.602L64.7136 36.602L64.7136 40.1516L41.5111 40.1516C41.9151 40.7288 42.2903 41.3348 42.6366 41.9697C42.9829 42.6335 43.3003 43.3405 43.5889 44.0909L40.299 44.0909C38.5098 41.9842 36.5474 40.3825 34.4118 39.2858L34.4118 37.4245C36.5474 36.3855 38.5098 34.7983 40.299 32.6627L43.6322 32.6627Z",
    stroke: "#CC8931",
    "stroke-width": "0.721471"
  }))));
};
/* harmony default export */ const O_TeaType_O_TeaType = (O_TeaType);
// EXTERNAL MODULE: ./src/components/Organisms/O_NavBar/O_NavBar.jsx + 3 modules
var O_NavBar = __webpack_require__(7427);
;// CONCATENATED MODULE: ./src/components/SuperOrganisms/S_TypesOfTeaPage/S_TypesOfTeaPage.jsx
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || S_TypesOfTeaPage_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return S_TypesOfTeaPage_arrayLikeToArray(r); }
function S_TypesOfTeaPage_slicedToArray(r, e) { return S_TypesOfTeaPage_arrayWithHoles(r) || S_TypesOfTeaPage_iterableToArrayLimit(r, e) || S_TypesOfTeaPage_unsupportedIterableToArray(r, e) || S_TypesOfTeaPage_nonIterableRest(); }
function S_TypesOfTeaPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function S_TypesOfTeaPage_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return S_TypesOfTeaPage_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? S_TypesOfTeaPage_arrayLikeToArray(r, a) : void 0; } }
function S_TypesOfTeaPage_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function S_TypesOfTeaPage_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function S_TypesOfTeaPage_arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var S_TypesOfTeaPage = function S_TypesOfTeaPage() {
  var category = "tea_types";
  (0,react.useEffect)(function () {
    var params = new URLSearchParams(window.location.search);
    category = params.get('category');
  }, []);
  var _useState = (0,react.useState)(''),
    _useState2 = S_TypesOfTeaPage_slicedToArray(_useState, 2),
    translated_name = _useState2[0],
    setTranslatedName = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = S_TypesOfTeaPage_slicedToArray(_useState3, 2),
    right_text = _useState4[0],
    setRightText = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = S_TypesOfTeaPage_slicedToArray(_useState5, 2),
    link = _useState6[0],
    setLink = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = S_TypesOfTeaPage_slicedToArray(_useState7, 2),
    link_text = _useState8[0],
    setLinkText = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = S_TypesOfTeaPage_slicedToArray(_useState9, 2),
    bottom_text = _useState10[0],
    setBottomText = _useState10[1];
  var _useState11 = (0,react.useState)([]),
    _useState12 = S_TypesOfTeaPage_slicedToArray(_useState11, 2),
    types = _useState12[0],
    setTypes = _useState12[1];
  (0,react.useEffect)(function () {
    airtable_default()('categories').select({
      filterByFormula: "{Name} = '".concat(category, "'"),
      fields: ['translated_name', 'right_text', 'link', 'link_text', 'bottom_text'] // replace with the actual field names you want to retrieve
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        setTranslatedName(record.get('translated_name'));
        setRightText(record.get('right_text'));
        setLink(record.get('link'));
        setLinkText(record.get('link_text'));
        setBottomText(record.get('bottom_text'));
      });
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
      }
    });
    airtable_default()("".concat(category)).select({}).eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        setTypes(function (prev) {
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
  console.log(types);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(O_NavBar["default"], null), /*#__PURE__*/react.createElement(M_Banner_M_Banner, null), /*#__PURE__*/react.createElement(O_PreArticle_O_PreArticle, {
    link: "media/article.html",
    link_text: link_text,
    right_text: right_text,
    translated_name: translated_name
  }), bottom_text && /*#__PURE__*/react.createElement("div", {
    className: "W_Container"
  }, /*#__PURE__*/react.createElement(A_Text_A_Text, {
    className: "A_Lead"
  }, "\u0427\u0430\u0439\xA0\u2014 \u044D\u0442\u043E \u043D\u0435\xA0\u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u043F\u0438\u0442\u043E\u043A, \u0430\xA0\u0446\u0435\u043B\u0430\u044F \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430, \u0431\u043E\u0433\u0430\u0442\u0430\u044F \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435\u043C \u0432\u043A\u0443\u0441\u043E\u0432 \u0438\xA0\u0430\u0440\u043E\u043C\u0430\u0442\u043E\u0432. \u041E\u0442\xA0\u0434\u0440\u0435\u0432\u043D\u0438\u0445 \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0445 \u0441\u043E\u0440\u0442\u043E\u0432, \u0441\xA0\u043A\u0430\u0436\u0434\u044B\u043C \u043B\u0438\u0441\u0442\u043E\u0447\u043A\u043E\u043C \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u0441\u0432\u043E\u044E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E, \u0434\u043E\xA0\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u044D\u043A\u0437\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432, \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0441\xA0\u0441\u0430\u043C\u044B\u0445 \u043E\u0442\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0445 \u0443\u0433\u043E\u043B\u043A\u043E\u0432 \u043F\u043B\u0430\u043D\u0435\u0442\u044B.")), types.map(function (type, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "W_TeaType",
      key: index
    }, /*#__PURE__*/react.createElement(O_TeaType_O_TeaType, {
      object: type,
      index: index
    }));
  }));
};
/* harmony default export */ const S_TypesOfTeaPage_S_TypesOfTeaPage = (S_TypesOfTeaPage);

/***/ })

}]);