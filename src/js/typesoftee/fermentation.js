import '/src/index.css'
import Swiper from 'swiper'
import * as $ from 'jquery'
import anime from 'animejs'
import { Navigation } from 'swiper/modules'

$(function () {
  const sliderButtons = document.querySelectorAll('.A_SliderButton')

  sliderButtons.forEach(function (item) {
    const bg = item.querySelector('#bg')
    const arrow = item.querySelector('#arrow')
    item.addEventListener('mouseenter', function () {
      anime({
        targets: bg,
        opacity: [0, 1],

        fill: ['#F6ECE0', '#CC8931'],
        duration: 700,
        easing: 'easeOutExpo'
      })
      anime({
        targets: arrow,
        // scale: [0, 1],
        fill: ['#CC8931', '#FFFFFF'],
        duration: 700,
        easing: 'easeOutExpo'
      })
    })

    item.addEventListener('mouseleave', function () {
      anime({
        targets: bg,
        opacity: [1, 0],

        fill: ['#CC8931', '#F6ECE0'],
        duration: 700,
        easing: 'easeOutExpo'
      })
      anime({
        targets: arrow,
        // scale: [0, 1],
        fill: ['#FFFFFF', '#CC8931'],
        duration: 700,
        easing: 'easeOutExpo'
      })
    })
  })

  const swiper_1 = new Swiper(`.swiper_1`, {
    slidesPerView: 3.5,
    spaceBetween: 24,
    modules: [Navigation],
    navigation: {
      nextEl: '.A_SliderButtonRight_1',
      prevEl: '.A_SliderButtonLeft_1',
      disabledClass: 'A_SliderButton_Disabled'
    }
  })

  const swiper_2 = new Swiper(`.swiper_2`, {
    slidesPerView: 3.5,
    spaceBetween: 24,
    modules: [Navigation],
    navigation: {
      nextEl: '.A_SliderButtonRight_2',
      prevEl: '.A_SliderButtonLeft_2',
      disabledClass: 'A_SliderButton_Disabled'
    }
  })
  const swiper_3 = new Swiper(`.swiper_3`, {
    slidesPerView: 3.5,
    spaceBetween: 24,
    modules: [Navigation],
    navigation: {
      nextEl: '.A_SliderButtonRight_3',
      prevEl: '.A_SliderButtonLeft_3',
      disabledClass: 'A_SliderButton_Disabled'
    }
  })
  const swiper_4 = new Swiper(`.swiper_4`, {
    slidesPerView: 3.5,
    spaceBetween: 24,
    modules: [Navigation],
    navigation: {
      nextEl: '.A_SliderButtonRight_4',
      prevEl: '.A_SliderButtonLeft_4',
      disabledClass: 'A_SliderButton_Disabled'
    }
  })
  const swiper_5 = new Swiper(`.swiper_5`, {
    slidesPerView: 3.5,
    spaceBetween: 24,
    modules: [Navigation],
    navigation: {
      nextEl: '.A_SliderButtonRight_5',
      prevEl: '.A_SliderButtonLeft_5',
      disabledClass: 'A_SliderButton_Disabled'
    }
  })
  $('#searchBtn').mouseenter(() => {
    $('.M_SearchIcon').addClass('active').focus()
    $('.A_SearchInput').addClass('active')
  })
  $('.M_SearchIcon').mouseleave(function () {
    if ($('.A_SearchInput').val().trim() === '') {
      $('.M_SearchIcon').removeClass('active')
      $('.A_SearchInput').removeClass('active').blur()
      $('.W_TeaType').show()
      $('.O_PreArticle').show()
      $('.W_TextLink').show()
      $('.A_Lead').show()
      $('.O_SearchResult').hide()
    }
  })
  $('.A_SearchInput').on('input', function () {
    $('.W_TeaType').hide()
    $('.O_PreArticle').hide()
    $('.W_TextLink').hide()
    $('.A_Lead').hide()
    $('.O_SearchResult').show()
    var searchText = $(this).val().toLowerCase().trim()
    var searchWords = searchText.split(/\s+/)
    var found = false

    $('.M_TeaCard').each(function () {
      var cardText =
        $(this).find('.A_CardTitleHelios').text().toLowerCase() +
        ' ' +
        $(this).find('.A_CardTitleVlas').text().toLowerCase()
      var cardWords = cardText.split(/\s+/)
      var allWordsFound = searchWords.every(function (searchWord) {
        return cardWords.some(function (cardWord) {
          return cardWord.startsWith(searchWord)
        })
      })

      if (allWordsFound && searchWords.length > 0) {
        $(this).show()
        found = true
      } else {
        $(this).hide()
      }
    })
    if (found) {
      $('.A_SearchResult').html(
        'по запросу "<span id="searchText">' + searchText + '</span>":'
      )
    } else {
      $('.A_SearchResult').html(
        'по запросу "<span id="searchText">' +
          searchText +
          '</span>" ничего не найдено'
      )
    }
  })
})
