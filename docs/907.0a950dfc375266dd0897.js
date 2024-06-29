"use strict";
(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[907],{

/***/ 2013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ S_Article_S_Article2)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/Organisms/O_NavBar/O_NavBar.jsx + 3 modules
var O_NavBar = __webpack_require__(7427);
// EXTERNAL MODULE: ./src/airtable.js
var airtable = __webpack_require__(4165);
var airtable_default = /*#__PURE__*/__webpack_require__.n(airtable);
;// CONCATENATED MODULE: ./src/images/articles/article_image_2.png
const article_image_2_namespaceObject = __webpack_require__.p + "images/97dd5b07f57a831489f9.png";
;// CONCATENATED MODULE: ./src/components/SuperOrganisms/S_Article/S_Article2.jsx
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var S_Article2 = function S_Article2() {
  var url = window.location.href;
  var urlObj = new URL(url);
  var params = new URLSearchParams(urlObj.search);
  var paramValue = params.get('article');
  var article_name = paramValue ? paramValue : 'thyme_and_apricots';
  var _useState = (0,react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    article = _useState2[0],
    setArticle = _useState2[1];
  (0,react.useEffect)(function () {
    airtable_default()('articles').select({
      filterByFormula: "{name} = '".concat(article_name, "'"),
      maxRecords: 1
    }).firstPage(function done(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      var loadedArticle = records[0].fields;
      setArticle(loadedArticle);
    });
  }, [article_name]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(O_NavBar["default"], null), /*#__PURE__*/react.createElement("div", {
    className: "M_TitleLead W_Container"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "A_Title2Helios animate__animated animate__fadeInUp "
  }, "\u041A\u0430\u043A \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0447\u0430\u0439"), /*#__PURE__*/react.createElement("div", {
    className: "W_TitleLeadLeft"
  }, /*#__PURE__*/react.createElement("p", {
    className: "A_Lead"
  }, "\u0412\u044B\u0431\u043E\u0440 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u044F\xA0\u2014 \u044D\u0442\u043E \u0432\u043E\u043F\u0440\u043E\u0441 \u0432\u043A\u0443\u0441\u0430 \u0438\xA0\u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F. \u0412\xA0\u044D\u0442\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0435 \u043C\u044B\xA0\u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C, \u043A\u0430\u043A \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0447\u0430\u0439 \u0432\xA0\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435."), /*#__PURE__*/react.createElement("ul", {
    className: "A_List"
  }, /*#__PURE__*/react.createElement("li", null, "\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/react.createElement("li", null, "\u0421\u043E\u0440\u0442"), /*#__PURE__*/react.createElement("li", null, "\u0412\u043A\u0443\u0441"), /*#__PURE__*/react.createElement("li", null, "\u0410\u0440\u043E\u043C\u0430\u0442"))), /*#__PURE__*/react.createElement("div", {
    className: "Q_TitleImage animate__animated animate__fadeInUp"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "",
    src: article_image_2_namespaceObject
  }))), /*#__PURE__*/react.createElement("div", {
    className: " W_Container O_ArticleInfo"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "A_Title3Helios"
  }, "\u0421\u043E\u0432\u0435\u0442\u044B"), /*#__PURE__*/react.createElement("div", {
    className: "C_ArticleCont"
  }, /*#__PURE__*/react.createElement("p", {
    className: "A_Text"
  }, "\u0427\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0447\u0430\u0439, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u044D\u0442\u0438\u043A\u0435\u0442\u043A\u0443. \u0418\u0449\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\xA0\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435, \u043C\u0435\u0441\u0442\u0435 \u0441\u0431\u043E\u0440\u0430 \u0438\xA0\u0441\u043E\u0440\u0442\u0435 \u0447\u0430\u044F. \u041E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430\xA0\u0441\u0442\u0440\u0430\u043D\u0443 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u041A\u0438\u0442\u0430\u0439, \u0418\u043D\u0434\u0438\u044F, \u042F\u043F\u043E\u043D\u0438\u044F), \u0441\u043E\u0440\u0442 (\u0410\u0441\u0441\u0430\u043C, \u0414\u0430\u0440\u0434\u0436\u0438\u043B\u0438\u043D\u0433, \u0421\u0435\u043D\u0447\u0430) \u0438\xA0\u0434\u0430\u0442\u0443 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438\xA0\u2014 \u0441\u0432\u0435\u0436\u0438\u0439 \u0447\u0430\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u043B\u0443\u0447\u0448\u0435. ", /*#__PURE__*/react.createElement("br", null), " ", /*#__PURE__*/react.createElement("br", null), "\u041E\u0442\u043A\u0440\u044B\u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443, \u043E\u0446\u0435\u043D\u0438\u0442\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u0447\u0430\u0439\u043D\u044B\u0445 \u043B\u0438\u0441\u0442\u044C\u0435\u0432. \u041E\u043D\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0446\u0435\u043B\u044B\u043C\u0438, \u0431\u0435\u0437 \u043F\u044B\u043B\u0438 \u0438\xA0\u043B\u043E\u043C\u0430\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0438\u0446. \u0417\u0435\u043B\u0435\u043D\u044B\u0439 \u0447\u0430\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u0432\u0435\u0442\u043B\u043E-\u0437\u0435\u043B\u0451\u043D\u044B\u043C \u0438\xA0\u0440\u043E\u0432\u043D\u044B\u043C, \u0447\u0435\u0440\u043D\u044B\u0439\xA0\u2014 \u0442\u0435\u043C\u043D\u044B\u043C \u0438\xA0\u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u044B\u043C, \u0443\u043B\u0443\u043D\xA0\u2014 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u043A\u0440\u0443\u0447\u0435\u043D\u043D\u044B\u043C. \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0447\u0430\u0439 \u0438\u043C\u0435\u0435\u0442 \u044F\u0440\u043A\u0438\u0439 \u0438\xA0\u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0430\u0440\u043E\u043C\u0430\u0442. \u0415\u0441\u043B\u0438 \u0437\u0430\u043F\u0430\u0445 \u0442\u0443\u0441\u043A\u043B\u044B\u0439 \u0438\u043B\u0438 \u043F\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0439, \u044D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430\xA0\u043D\u0438\u0437\u043A\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435."), /*#__PURE__*/react.createElement("p", {
    className: "A_Text"
  }, "\u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0430\u0440\u0438\u0432\u0430\u043D\u0438\u044F \u043E\u0446\u0435\u043D\u0438\u0442\u0435 \u0432\u043A\u0443\u0441 \u0447\u0430\u044F. \u041E\u043D\xA0\u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u0442\u044B\u043C, \u0431\u0435\u0437 \u0433\u043E\u0440\u0435\u0447\u0438 \u0438\xA0\u043F\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043F\u0440\u0438\u0432\u043A\u0443\u0441\u043E\u0432, \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0435 \u043F\u043E\u0441\u043B\u0435\u0432\u043A\u0443\u0441\u0438\u0435 \u0438\xA0\u0431\u044B\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0433\u0440\u0430\u043D\u043D\u044B\u043C. \u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0447\u0430\u0439, \u0443\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0435\u0434\u0430\u0432\u043D\u043E, \u0438\xA0\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0435\u0433\u043E \u0432\xA0\u0433\u0435\u0440\u043C\u0435\u0442\u0438\u0447\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430\u0445 \u0432\u0434\u0430\u043B\u0438 \u043E\u0442\xA0\u0441\u0432\u0435\u0442\u0430 \u0438\xA0\u0432\u043B\u0430\u0433\u0438.", /*#__PURE__*/react.createElement("br", null), " ", /*#__PURE__*/react.createElement("br", null), "\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0447\u0430\u0439 \u0432\xA0\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \u0438\u043B\u0438 \u0443\xA0\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0434\u0430\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E\xA0\u0432\u044B\u0431\u043E\u0440\u0443. ", /*#__PURE__*/react.createElement("br", null), "  ", /*#__PURE__*/react.createElement("br", null)))), /*#__PURE__*/react.createElement("div", {
    className: " W_Container O_Fact"
  }, /*#__PURE__*/react.createElement("div", {
    className: "W_Fact"
  }, /*#__PURE__*/react.createElement("div", {
    className: "M_Fact"
  }, /*#__PURE__*/react.createElement("div", {
    className: "A_Text"
  }, "\u0427\u0430\u0439\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044C\u044F, \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0432\u0435\u0441\u043D\u043E\u0439, \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0446\u0435\u043D\u043D\u044B\u043C\u0438. \u041E\u043D\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u044B \u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u0447\u0430\u0439 \u0431\u043E\u043B\u0435\u0435 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u043C \u0438\xA0\u0432\u043A\u0443\u0441\u043D\u044B\u043C."))), /*#__PURE__*/react.createElement("div", {
    className: "W_SocailsImg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "A_PreImg"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "",
    src: ""
  })), /*#__PURE__*/react.createElement("a", {
    className: "A_Socials",
    href: "https://t.me/zavarka_tg",
    target: '_blank'
  }, "\u0431\u043E\u043B\u044C\u0448\u0435 \u0444\u0430\u043A\u0442\u043E\u0432 \u0432 TG"))), /*#__PURE__*/react.createElement("div", {
    className: "W_ArticleText W_Container"
  }, /*#__PURE__*/react.createElement("p", {
    className: "A_Text"
  }, "\u0412\u044B\u0431\u043E\u0440 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043A\xA0\u0434\u0435\u0442\u0430\u043B\u044F\u043C. \u0427\u0438\u0442\u0430\u044F \u044D\u0442\u0438\u043A\u0435\u0442\u043A\u0438, \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044F \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u0438\xA0\u0430\u0440\u043E\u043C\u0430\u0442 \u0447\u0430\u0439\u043D\u044B\u0445 \u043B\u0438\u0441\u0442\u044C\u0435\u0432, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044F \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, \u0432\u044B\xA0\u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0447\u0430\u0439 \u0438\xA0\u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0442\u044C\u0441\u044F \u0435\u0433\u043E \u0432\u043A\u0443\u0441\u043E\u043C \u0438\xA0\u0430\u0440\u043E\u043C\u0430\u0442\u043E\u043C.")));
};
/* harmony default export */ const S_Article_S_Article2 = (S_Article2);

/***/ })

}]);