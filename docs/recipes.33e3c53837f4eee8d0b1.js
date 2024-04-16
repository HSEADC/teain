/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var activeTags = [];
var tagMap = {
  все: 'all',
  успокаивающий: 'soothing',
  бодрящий: 'invigorating',
  'для сна': 'for_sleeping',
  'для иммунитета': 'immune',
  ягоды: 'berries',
  фрукты: 'fruit',
  пряности: 'spices',
  расслабляющий: 'relaxing',
  'от стресса': 'from_stress',
  жаропонижающий: 'antipyretic',
  'зеленый чай': 'green_tea',
  'черный чай': 'black tea',
  травяной: 'herbal'
};
function convertTagsToLatin(tags) {
  return tags.map(function (tag) {
    return tagMap[tag] || tag;
  });
}
function convertTagsFromLatin(tags) {
  var reverseMap = Object.fromEntries(Object.entries(tagMap).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return [v, k];
  }));
  return tags.map(function (tag) {
    return reverseMap[tag] || tag;
  });
}
function updateUrlWithTags(tags) {
  var tagsInLatin = convertTagsToLatin(tags);
  var queryString = tagsInLatin.length ? "?tags=".concat(tagsInLatin.join(',')) : '';
  history.pushState({
    tags: tagsInLatin
  }, '', "".concat(window.location.pathname).concat(queryString));
}
function initTagsFromUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  var tagsInLatin = urlParams.get('tags') ? urlParams.get('tags').split(',') : [];
  if (tagsInLatin.length > 0) {
    var tags = convertTagsFromLatin(tagsInLatin);
    activeTags = [];
    tags.forEach(function (tag) {
      return toggleTagSelection(tag);
    });
  } else {
    toggleTagSelection('все');
  }
}
function updateActiveTagsDisplay() {
  document.querySelectorAll('.A_Tag_Cloud').forEach(function (button) {
    button.classList.remove('active');
  });
  activeTags.forEach(function (tag) {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".A_Tag_Cloud[data-tag=\"".concat(tag, "\"]"))) === null || _document$querySelect === void 0 || _document$querySelect.classList.add('active');
  });
  if (activeTags.length === 0 || activeTags.length === 1 && activeTags[0] === 'все') {
    document.querySelector('.A_Tag_Cloud[data-tag="все"]').classList.add('active');
  }
}
function filterCards() {
  var cards = document.querySelectorAll('.C_RecipeCardS .card');
  var specialCard = document.querySelector('.W_RecipeCardL');
  var container = document.querySelector('.C_RecipeCardS');
  var marker = document.getElementById('specialCardMarker');
  if (activeTags.length === 0 || activeTags.length === 1 && activeTags[0] === 'все') {
    if (marker && specialCard) {
      marker.after(specialCard);
    }
  } else {
    if (specialCard && container) {
      container.prepend(specialCard);
    }
  }
  if (activeTags.length === 0 || activeTags.length === 1 && activeTags[0] === 'все') {
    marker.after(specialCard);
  } else {
    container.prepend(specialCard);
  }
  cards.forEach(function (card) {
    card.querySelectorAll('.A_Tag').forEach(function (tagElement) {
      tagElement.classList.remove('active');
      var tagText = tagElement.textContent.trim();
      if (activeTags.includes(tagText)) {
        tagElement.classList.add('active');
      }
    });
    var cardTags = card.getAttribute('data-tags').split(' ').map(function (tag) {
      return tag.replace(/_/g, ' ');
    });
    var isMatch = activeTags.every(function (activeTag) {
      return cardTags.includes(activeTag) || activeTags.includes('все');
    });
    card.style.display = isMatch ? '' : 'none';
  });
  updateActiveTagsDisplay();
}
function toggleTagSelection(tag) {
  if (tag === 'все') {
    activeTags = ['все'];
  } else {
    var allIndex = activeTags.indexOf('все');
    if (allIndex > -1) {
      activeTags.splice(allIndex, 1);
    }
    var index = activeTags.indexOf(tag);
    if (index > -1) {
      activeTags.splice(index, 1);
    } else {
      activeTags.push(tag);
    }
  }
  filterCards();
  updateUrlWithTags(activeTags);
}
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.endsWith('recipes.html')) {
    initTagsFromUrl(); // Сначала инициализируем теги из URL

    document.querySelectorAll('.A_Tag_Cloud').forEach(function (button) {
      button.addEventListener('click', function () {
        var tag = button.getAttribute('data-tag');
        toggleTagSelection(tag);
      });
    });
  }
});
/******/ })()
;