import React, { useEffect, useState } from 'react'
import base from '../../../airtable'
import O_RecipeCard from '../../Organisms/O_RecipeCardS/O_RecipeCard'
import A_Link from '../../Atoms/A_Link/A_Link'


const W_RecipeCardL = () => {

  const [flavourOfTheWeek, setFlavourOfTheWeek] = useState(null)

  useEffect(() => {
    base('recipes')
      .select({
        filterByFormula: `{flavour_of_the_week} = TRUE()`,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          const loadedRecipes = records.map(record => record.fields)
          if (loadedRecipes.length > 0) {
            setFlavourOfTheWeek(loadedRecipes[0])
          }
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

    console.log('Flavour of the Week:', flavourOfTheWeek)
  }, [ flavourOfTheWeek])
  return (
    <>
      {flavourOfTheWeek && <O_RecipeCard recipe={flavourOfTheWeek}   /> }

      <div className={'W_BottomLink'}>
        <A_Link href={"recipes.html"}>Открыть все рецепты</A_Link>
      </div>





    </>
  )
}

export default W_RecipeCardL