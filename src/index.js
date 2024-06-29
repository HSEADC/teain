import './index.css'
import anime from 'animejs'

document.addEventListener('DOMContentLoaded', function () {



  const cursor = document.querySelector('.A_Cursor1')

  if (cursor) {


  const section = document.querySelector('.W_QuoteLBack')
  section.addEventListener('mouseenter', () => {
    cursor.style.display = 'block'
    setTimeout(() => cursor.classList.add('active'), 10)
  })

  section.addEventListener('mousemove', function (e) {
    const x = e.clientX - 116
    const y = e.clientY - 76.5
    section.style.cursor = 'none'
    cursor.style.transform = `translate(${x}px, ${y}px)`
  })

  section.addEventListener('mouseleave', () => {
    cursor.classList.remove('active')
    setTimeout(() => (cursor.style.display = 'none'), 400)
  })

  section.addEventListener('click', () => {
    cursor.classList.add('click')
    setTimeout(() => cursor.classList.remove('click'), 150)
  })
  }

  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  const cards = document.querySelectorAll('.A_TeaTypeCard')

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      window.location.href = this.getAttribute('data-href')
    })
    if (isTouchDevice ) {
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
    } else  {
      const targets = card.querySelectorAll('.A_CardTitl2')
      targets.forEach((target) => {
        target.style.opacity = 1;
      })
    }




  })

  const recipesCards = document.querySelectorAll('.O_RecipeCardS')

  recipesCards.forEach((card) => {
    card.addEventListener('click', function () {
      window.location.href = this.getAttribute('data-href')
    })

  })



})
