import '../index.css'

let activeTags = []

function updateActiveTagsDisplay() {
  document.querySelectorAll('.A_Tag_Cloud').forEach((button) => {
    button.classList.remove('active')
  })

  activeTags.forEach((tag) => {
    document
      .querySelector(`.A_Tag_Cloud[data-tag="${tag}"]`)
      ?.classList.add('active')
  })

  if (
    activeTags.length === 0 ||
    (activeTags.length === 1 && activeTags[0] === 'все')
  ) {
    document
      .querySelector('.A_Tag_Cloud[data-tag="все"]')
      .classList.add('active')
  }
}

function filterCards() {
  const cards = document.querySelectorAll('.C_RecipeCardS .card')
  const specialCard = document.querySelector('.W_RecipeCardL')
  const container = document.querySelector('.C_RecipeCardS')
  const marker = document.getElementById('specialCardMarker')

  if (
    activeTags.length === 0 ||
    (activeTags.length === 1 && activeTags[0] === 'все')
  ) {
    marker.after(specialCard)
  } else {
    container.prepend(specialCard)
  }

  cards.forEach((card) => {
    card.querySelectorAll('.A_Tag').forEach((tagElement) => {
      tagElement.classList.remove('active')
      const tagText = tagElement.textContent.trim().replace(/\s+/g, '_')
      if (activeTags.includes(tagText)) {
        tagElement.classList.add('active')
      }
    })

    const cardTags = card
      .getAttribute('data-tags')
      .split(' ')
      .map((tag) => tag.replace(/_/g, ' '))
    const isMatch = activeTags.every(
      (activeTag) => cardTags.includes(activeTag) || activeTags.includes('все')
    )
    card.style.display = isMatch ? '' : 'none'
  })

  updateActiveTagsDisplay()
}

function toggleTagSelection(tag) {
  if (tag === 'все') {
    activeTags = ['все']
  } else {
    const allIndex = activeTags.indexOf('все')
    if (allIndex > -1) {
      activeTags.splice(allIndex, 1)
    }

    const index = activeTags.indexOf(tag)
    if (index > -1) {
      activeTags.splice(index, 1)
    } else {
      activeTags.push(tag)
    }
  }

  filterCards()
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.A_Tag_Cloud').forEach((button) => {
    button.addEventListener('click', () => {
      const tag = button.getAttribute('data-tag')
      toggleTagSelection(tag)
    })
  })

  toggleTagSelection('все')
})
