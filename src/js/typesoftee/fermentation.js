import '/src/index.css'
import Swiper from 'swiper'
import anime from 'animejs'
import { Navigation } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', function () {
  const S_Fermentation = document.querySelector('.S_Fermentation')
  if (!S_Fermentation) {
    return
  }

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

  const searchBtn = document.getElementById('searchBtn')
  const M_SearchIcon = document.querySelector('.M_SearchIcon')
  const A_SearchInput = document.querySelector('.A_SearchInput')
  const W_TeaType = document.querySelectorAll('.W_TeaType')
  const O_PreArticle = document.querySelector('.O_PreArticle')
  const W_TextLink = document.querySelector('.W_TextLink')
  const A_Lead = document.querySelector('.A_Lead')
  const O_SearchResult = document.querySelector('.O_SearchResult')

  const M_TeaCards = document.querySelectorAll('.M_TeaCard')

  searchBtn.addEventListener('mouseenter', () => {
    M_SearchIcon.classList.add('active')
    M_SearchIcon.focus()
    A_SearchInput.classList.add('active')
  })

  M_SearchIcon.addEventListener('mouseleave', function () {
    if (A_SearchInput.value.trim() === '') {
      M_SearchIcon.classList.remove('active')
      A_SearchInput.classList.remove('active')
      A_SearchInput.blur()
      W_TeaType.forEach((item) => {
        item.style.display = 'initial'
      })
      O_PreArticle.style.display = 'grid'
      W_TextLink.style.display = 'initial'
      A_Lead.style.display = 'initial'
      O_SearchResult.style.display = 'none'
    }
  })
  A_SearchInput.addEventListener('input', function () {
    W_TeaType.forEach((item) => {
      item.style.display = 'none'
    })
    O_PreArticle.style.display = 'none'
    W_TextLink.style.display = 'none'
    A_Lead.style.display = 'none'
    O_SearchResult.style.display = 'initial'
    const searchText = this.value.toLowerCase().trim()
    const searchWords = searchText.split(/\s+/)
    let found = false

    M_TeaCards.forEach(function (card) {
      const cardText =
        card.querySelector('.A_CardTitleHelios').textContent.toLowerCase() +
        ' ' +
        card.querySelector('.A_CardTitleVlas').textContent.toLowerCase()
      const cardWords = cardText.split(/\s+/)
      const allWordsFound = searchWords.every(function (searchWord) {
        return cardWords.some(function (cardWord) {
          return cardWord.startsWith(searchWord)
        })
      })

      if (allWordsFound && searchWords.length > 0) {
        card.style.display = 'block'
        found = true
      } else {
        card.style.display = 'none'
      }
    })
    const searchResult = document.querySelector('.A_SearchResult')
    if (found) {
      searchResult.innerHTML =
        'по запросу "<span id="searchText">' + searchText + '</span>":'
    } else {
      searchResult.innerHTML =
        'по запросу "<span id="searchText">' +
        searchText +
        '</span>" ничего не найдено'
    }
  })
})
