import '../index.css'

let activeTags = []

const tagMap = {
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
}

function convertTagsToLatin(tags) {
  return tags.map((tag) => tagMap[tag] || tag)
}

function convertTagsFromLatin(tags) {
  const reverseMap = Object.fromEntries(
    Object.entries(tagMap).map(([k, v]) => [v, k])
  )
  return tags.map((tag) => reverseMap[tag] || tag)
}

function updateUrlWithTags(tags) {
  const tagsInLatin = convertTagsToLatin(tags)
  const queryString = tagsInLatin.length ? `?tags=${tagsInLatin.join(',')}` : ''
  history.pushState(
    { tags: tagsInLatin },
    '',
    `${window.location.pathname}${queryString}`
  )
}

function initTagsFromUrl() {
  const urlParams = new URLSearchParams(window.location.search)
  const tagsInLatin = urlParams.get('tags')
    ? urlParams.get('tags').split(',')
    : []

  if (tagsInLatin.length > 0) {
    const tags = convertTagsFromLatin(tagsInLatin)
    activeTags = []
    tags.forEach((tag) => toggleTagSelection(tag))
  } else {
    toggleTagSelection('все')
  }
}

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
    if (marker && specialCard) {
      marker.after(specialCard)
    }
  } else {
    if (specialCard && container) {
      container.prepend(specialCard)
    }
  }

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
      const tagText = tagElement.textContent.trim()
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
  updateUrlWithTags(activeTags)
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('recipes.html')) {
    initTagsFromUrl() // Сначала инициализируем теги из URL

    document.querySelectorAll('.A_Tag_Cloud').forEach((button) => {
      button.addEventListener('click', () => {
        const tag = button.getAttribute('data-tag')
        toggleTagSelection(tag)
      })
    })
  }
})
