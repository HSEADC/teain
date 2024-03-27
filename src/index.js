import './index.css'
import * as $ from 'jquery'
import anime from 'animejs/lib/anime.es.js'

/*var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Спасибо за подписку!'
        form.reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ')
          } else {
            status.innerHTML = 'Возникли проблемы с отправкой почты.'
          }
        })
      }
    })
    .catch((error) => {
      status.innerHTML = 'Возникли проблемы с отправкой почты.'
    })
}

form.addEventListener('submit', handleSubmit)*/

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
          translateY: [30, 0], // Перемещение снизу вверх
          opacity: [0, 1], // Изменение прозрачности от невидимого к полностью видимому
          delay: index * 100, // Задержка анимации для каждого последующего элемента
          duration: 1000, // Продолжительность анимации
          easing: 'easeOutExpo' // Тип анимации для более плавного движения
        })
      })
    })

    card.addEventListener('mouseleave', function () {
      const targets = this.querySelectorAll('.A_CardTitl2')
      const targetsReversed = Array.from(targets).reverse()
      targetsReversed.forEach((target, index) => {
        anime({
          targets: target,
          translateY: [0, 30], // Перемещение снизу вверх
          opacity: [1, 0], // Изменение прозрачности от невидимого к полностью видимому
          delay: index * 100, // Задержка анимации для каждого последующего элемента
          duration: 1000, // Продолжительность анимации
          easing: 'easeOutExpo' // Тип анимации для более плавного движения
        })
      })
    })
  })
})
