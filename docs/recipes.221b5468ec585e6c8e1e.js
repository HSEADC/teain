/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var activeTags = [];
  function filterCards() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
      var tags = card.getAttribute('data-tags').split(' ');
      var isTagMatch = activeTags.every(function (tag) {
        return tags.includes(tag) || tag === 'все';
      });
      card.style.display = isTagMatch || activeTags.length === 0 ? '' : 'none';
    });
  }
  function toggleTagSelection(clickedTag) {
    var tagIndex = activeTags.indexOf(clickedTag);
    if (tagIndex > -1) {
      activeTags.splice(tagIndex, 1);
    } else {
      activeTags.push(clickedTag);
    }
    filterCards();
  }
  document.querySelectorAll('.A_Tag_Cloud').forEach(function (button) {
    button.addEventListener('click', function () {
      var tag = button.getAttribute('data-tag');
      toggleTagSelection(tag);
    });
  });
});
/******/ })()
;