"use strict";
(self["webpackChunkstatic_site_08"] = self["webpackChunkstatic_site_08"] || []).push([[899],{

/***/ 9941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _Organisms_O_NavBar_O_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7427);
/* harmony import */ var _airtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _airtable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airtable__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var S_Article = function S_Article() {
  var url = window.location.href;
  var urlObj = new URL(url);
  var params = new URLSearchParams(urlObj.search);
  var paramValue = params.get('article');
  var article_name = paramValue ? paramValue : 'thyme_and_apricots';
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    article = _useState2[0],
    setArticle = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _airtable__WEBPACK_IMPORTED_MODULE_2___default()('articles').select({
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Organisms_O_NavBar_O_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_TitleLead W_Container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "A_Title2Helios"
  }, "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u0443\u044D\u0440 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_TitleLeadLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Lead"
  }, "\u0412\u0441\u0435 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0447\u0430\u0438 \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\xA0\u043F\u044F\u0442\u044C \u0432\u0438\u0434\u043E\u0432 \u043F\u043E\xA0\u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438. \u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432\xA0\u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438\xA0\u0436\u0435 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "A_List"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\u0421\u043F\u0438\u0441\u043E\u043A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u043A\u0430\u043A\u0438\u0435-\u0442\u043E \u0441\u043B\u043E\u0432\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\u041F\u0420\u0438\u043C\u0435\u0440\u043D\u043E \u0435\u0449\u0435 \u0441\u043B\u043E\u0432\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\u0415\u0448\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043F\u0443\u043D\u043A\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\u041F\u0443\u043D\u043A\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\u041F\u0420\u0438\u043C\u0435\u0440 \u0441\u043B\u043E\u0432"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Q_TitleImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: "../images/media/puerh/image.png"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "O_ArticleInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "A_Title3Helios"
  }, "\u0438\u0441\u0442\u043E\u0440\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "C_ArticleCont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\xA0\u0447\u0430\u0435, \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u0447\u0430\u0435\u043F\u0438\u0442\u0438\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u0432\xA0\u043A\u0440\u0443\u0433\u0443 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0438\xA0\u043D\u0430\u0435\u0434\u0438\u043D\u0435. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438\xA0\u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438\xA0\u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\xA0\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442\xA0\u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0421\xA0\u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0440\u0430\u043C\u043A\u0438 \u0438\xA0\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438\xA0\u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438\xA0\u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\xA0\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442\xA0\u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0421\xA0\u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0440\u0430\u043C\u043A\u0438 \u0438\xA0\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\xA0\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442\xA0\u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0421\xA0\u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0440\u0430\u043C\u043A\u0438 \u0438\xA0\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "O_Fact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_Fact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_Fact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_Text"
  }, "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438\xA0\u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438\xA0\u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\xA0\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442\xA0\u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0421\xA0\u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0440\u0430\u043C\u043A\u0438 \u0438\xA0\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_SocailsImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_PreImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: "../images/teaCardImg.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "A_Socials",
    href: "#"
  }, "\u0431\u043E\u043B\u044C\u0448\u0435 \u0444\u0430\u043A\u0442\u043E\u0432 \u0432 VK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "C_ArticlePic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_ArticlePic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_PreImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: "../images/teaCardImg.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445,"), " \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\xA0\u0447\u0430\u0435, \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u0447\u0430\u0435\u043F\u0438\u0442\u0438\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u0432\xA0\u043A\u0440\u0443\u0433\u0443 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0438\xA0\u043D\u0430\u0435\u0434\u0438\u043D\u0435 \u0441\xA0\u0441\u043E\u0431\u043E\u0439.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_ArticlePic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_PreImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: "../images/teaCardImg.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445,"), " \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\xA0\u0447\u0430\u0435, \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u0447\u0430\u0435\u043F\u0438\u0442\u0438\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u0432\xA0\u043A\u0440\u0443\u0433\u0443 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0438\xA0\u043D\u0430\u0435\u0434\u0438\u043D\u0435 \u0441\xA0\u0441\u043E\u0431\u043E\u0439.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_ArticlePic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_PreImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: "../images/teaCardImg.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445,"), " \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\xA0\u0447\u0430\u0435, \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u0447\u0430\u0435\u043F\u0438\u0442\u0438\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u0432\xA0\u043A\u0440\u0443\u0433\u0443 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0438\xA0\u043D\u0430\u0435\u0434\u0438\u043D\u0435 \u0441\xA0\u0441\u043E\u0431\u043E\u0439.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "M_ArticlePic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "A_PreImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "",
    src: "../images/teaCardImg.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445,"), " \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\xA0\u0447\u0430\u0435, \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u0447\u0430\u0435\u043F\u0438\u0442\u0438\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u0432\xA0\u043A\u0440\u0443\u0433\u0443 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0438\xA0\u043D\u0430\u0435\u0434\u0438\u043D\u0435 \u0441\xA0\u0441\u043E\u0431\u043E\u0439."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "W_ArticleText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "A_Text"
  }, "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438\xA0\u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438\xA0\u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\xA0\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442\xA0\u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0421\xA0\u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0440\u0430\u043C\u043A\u0438 \u0438\xA0\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (S_Article);

/***/ })

}]);