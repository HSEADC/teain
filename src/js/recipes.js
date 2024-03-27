import '../index.css'

document.addEventListener('DOMContentLoaded', function () {
  let activeTags = []

  function filterCards() {
    const cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
      const tags = card.getAttribute('data-tags').split(' ')
      const isTagMatch = activeTags.every(
        (tag) => tags.includes(tag) || tag === 'все'
      )

      card.style.display = isTagMatch || activeTags.length === 0 ? '' : 'none'
    })
  }

  function toggleTagSelection(clickedTag) {
    const tagIndex = activeTags.indexOf(clickedTag)
    if (tagIndex > -1) {
      activeTags.splice(tagIndex, 1)
    } else {
      activeTags.push(clickedTag)
    }

    filterCards()
  }

  document.querySelectorAll('.A_Tag_Cloud').forEach((button) => {
    button.addEventListener('click', () => {
      const tag = button.getAttribute('data-tag')
      toggleTagSelection(tag)
    })
  })
})
