import './index.css'
import * as $ from 'jquery'
import anime from 'animejs/lib/anime.es.js'

$(function () {
  $('#searchBtn').mouseenter(() => {
    console.log('aæ')
    $('.M_SearchIcon').addClass('active').focus()
    $('.A_SearchInput').addClass('active')
  })
  const cursor = $('.A_Cursor1')
  const section = $('.W_QuoteLBack')
  section.mouseenter(() => {
    cursor.css('display', 'block')
    setTimeout(() => cursor.addClass('active'), 10)
  })

  section.mousemove(function (e) {
    const x = e.clientX - 116
    const y = e.clientY - 76.5
    section.css('cursor', 'none')
    cursor.css('transform', `translate(${x}px, ${y}px)`)
  })

  section.mouseleave(() => {
    cursor.removeClass('active')
    setTimeout(() => cursor.css('none', 400))
  })

  section.click(() => {
    cursor.addClass('click')
    console.log('Кликнули по секции')
    setTimeout(() => cursor.removeClass('click'), 150)
  })

  const cards = document.querySelectorAll('.A_TeaTypeCard')

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      window.location.href = this.getAttribute('data-href')
    })
    card.addEventListener('mouseenter', function () {
      const targets = this.querySelectorAll('.A_CardTitl2')
      const targetsReversed = Array.from(targets).reverse()

      targetsReversed.forEach((target, index) => {
        anime({
          targets: target,
          translateY: [30, 0],
          opacity: [0, 1],
          delay: index * 100,
          duration: 1000,
          easing: 'easeOutExpo'
        })
      })
    })

    card.addEventListener('mouseleave', function () {
      const targets = this.querySelectorAll('.A_CardTitl2')
      const targetsReversed = Array.from(targets).reverse()
      targetsReversed.forEach((target, index) => {
        anime({
          targets: target,
          translateY: [0, 30],
          opacity: [1, 0],
          delay: index * 100,
          duration: 1000,
          easing: 'easeOutExpo'
        })
      })
    })
  })

  const recipesCards = document.querySelectorAll('.O_RecipeCardS')

  recipesCards.forEach((card) => {
    card.addEventListener('click', function () {
      window.location.href = this.getAttribute('data-href')
    })
  })
})
