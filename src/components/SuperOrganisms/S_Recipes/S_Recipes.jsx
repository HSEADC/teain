import './S_Recipes.scss'
import React, { useEffect, useState } from 'react'
import A_Text from '../../Atoms/A_Text/A_Text'
import base from '../../../airtable'
import A_Tag from '../../Atoms/A_Tag/A_Tag'

import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'
import O_RecipeCard from '../../Organisms/O_RecipeCardS/O_RecipeCard'

const S_Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [recipeTypes, setRecipeTypes] = useState([])
  const [activeTags, setActiveTags] = useState(['all'])

  useEffect(() => {
    console.log(recipes)
  }, [recipes])

  useEffect(() => {
    base('recipes')
      .select({})
      .eachPage(
        function page(records, fetchNextPage) {
          const loadedRecipes = records.map(record => record.fields)
          setRecipes(prev => [...prev, ...loadedRecipes])
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
          }
        }
      )

    base('recipe_types')
      .select({})
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            setRecipeTypes(prev => [...prev, record.fields])
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
          }
        }
      )
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tags = params.get('tags')
    if (tags) {
      setActiveTags(tags.split(','))
    }
  }, [])

  const updateQueryParams = (tags) => {
    const params = new URLSearchParams(window.location.search)
    params.set('tags', tags.join(','))
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`)
  }

  const toggleTagSelection = (tag) => {
    setActiveTags((prevTags) => {
      let newTags
      if (tag === 'all') {
        newTags = ['all']
      } else {
        newTags = prevTags.includes(tag)
          ? prevTags.filter(t => t !== tag)
          : [...prevTags.filter(t => t !== 'all'), tag]
        if (newTags.length === 0) {
          newTags = ['all']
        }
      }
      updateQueryParams(newTags)
      return newTags
    })
  }

  const filteredRecipes = recipes.filter(recipe => {
    if (activeTags.includes('all')) {
      return true
    }
    const recipeTags = recipe.tag_names
    return activeTags.every(activeTag => recipeTags.includes(activeTag))
  })

  const sortedRecipes = filteredRecipes.sort((a, b) => b.flavour_of_the_week - a.flavour_of_the_week)

  return (
    <>
      <O_NavBar />
      <div className="M_SectionDescription">
        <A_Text className="A_Title1">рецепты</A_Text>
        <A_Text className="A_Text">
          Делюсь с&nbsp;вами любимыми и&nbsp;лучшими рецептами на&nbsp;основе чая, которые помогут стать спокойнее, счастливее или как вы&nbsp;сами хотите!
        </A_Text>
      </div>

      <ul className="C_TagCloudBig">
        <li>
          <A_Tag size={'l'} active={activeTags.includes('all')}
                 onClick={() => toggleTagSelection('all')}>Все</A_Tag>
        </li>
        {recipeTypes && recipeTypes.map((recipeType, index) => (
          <li key={index}>
            <A_Tag size={'l'} active={activeTags.includes(recipeType.tag_name)}
                   onClick={() => toggleTagSelection(recipeType.tag_name)}
                   green>{recipeType.translated_tag_name}
            </A_Tag>
          </li>
        ))}
      </ul>

      <ul className="C_RecipeCardS">
        {sortedRecipes.map((recipe, index) => (
          <li key={index}>
            <O_RecipeCard href={`../../../recipes/recipe.html?recipe=${recipe.Name}`}  activeTags={activeTags} recipe={recipe} toggleTagSelection={toggleTagSelection} />
          </li>
        ))}
      </ul>
      <div className="W_Text">
        <A_Text className="A_Text">Как мы&nbsp;пишем рецепты</A_Text>
        <A_Text className="A_Text">
          Платформа для всех, кто хочет разбираться в&nbsp;чае, уважает культуру
          чаепития или любит готовить напитки в&nbsp;кругу близких и&nbsp;наедине
          с&nbsp;собой.
        </A_Text>
        <A_Text className="A_Text">

          Все о&nbsp;регионах, процессах ферментации и&nbsp;способах заварки,
          от&nbsp;культурных традиций до&nbsp;экспериментальных сортов.
        </A_Text>

      </div>
    </>
  )
}

export default S_Recipes
