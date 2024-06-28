import React, { useEffect, useState } from 'react'
import { Header } from '../../Organisms/O_NavBar/O_NavBar.stories'
import base from '../../../airtable'
import '../../../stylesheets/allcss.scss'
import A_Text from '../../Atoms/A_Text/A_Text'
import A_Tag from '../../Atoms/A_Tag/A_Tag'
import img from '../../../images/index/A_PreImg.png'

const S_Recipe = () => {

  const url = window.location.href;
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const paramValue = params.get('recipe');

  let recipe_name = paramValue ? paramValue : 'thyme_and_apricots'
  const [recipe, setRecipe] = useState({})

  const [previewImg, setPreviewImg] = useState('')

  useEffect(() => {
    base('recipes')
      .select({
        filterByFormula: `{name} = '${recipe_name}'`,
        maxRecords: 1
      })
      .firstPage(
        function done(err, records) {
          if (err) {
            console.error(err)
            return
          }
          const loadedRecipe = records[0].fields
          setRecipe(loadedRecipe)
          setPreviewImg(loadedRecipe.preview[0].url)
        }
      )
  }, [])

  useEffect(() => {
    console.log(recipe)
  }, [recipe])


  return (
    <>
      <Header />
      <div className="M_RecipeInf">
        <div className="W_Container">
          <div className="M_RecipeTitleLead">
            <div className="W_RecipeTitleLead">
              <A_Text className="A_Title2Helios">{recipe.translated_name}</A_Text>
              <A_Text className="A_Lead">
                {recipe.description}
              </A_Text>
            </div>
            <ul className="C_TegCloud">
              {recipe.tag_names && recipe.tag_names.map((tag,  index) =>
              <li key={index}>
                <A_Tag href="#" size={'l'}  className="A_Tag">{recipe.translated_tag_names[index]}</A_Tag>
              </li>
              )}
            </ul>
          </div>
          <img alt="" src={previewImg} onError={(e) => e.target.src=previewImg} />
        </div>
      </div>

      <div className="W_Container">
        <div className="O_RecipeComps">
          <A_Text className="A_CardTitleHelios">Ингредиенты</A_Text>
          <div className="W_RecipeTableRows">
            {recipe.ingredient_names && recipe.ingredient_names.map((ingredient, index) =>
              <div className="M_RecipeTableRow" key={index}>
                <A_Text className="A_Table1">{recipe.ingredient_names[index]}</A_Text>
                <A_Text className="A_Table2">{recipe.ingredient_descriptions[index]}</A_Text>
              </div>
            )}
          </div>
        </div>
        <div className="O_RecipeInfo2">
          <div className="M_Title3">
            <A_Text className="A_Title3Helios">способ</A_Text>
            <A_Text className="A_Title3Vlas">приготовления</A_Text>
          </div>
          <A_Text className="A_Text">
            {recipe.cooking_method}
          </A_Text>
        </div>


      </div>

      <div className="W_Container W_RecipeButton">
        <button className="A_Describe">распечатать рецепт</button>
      </div>


      <div className="C_PreImjs C_PreImjsRecipe">
        {recipe.images && recipe.images.map((image, index) =>
          <div key={index} className="A_PreImg">
            <img alt="" src={image.url} onError={(e) => e.target.src = img} />
          </div>
        )}
      </div>

    </>
  )
}

export default S_Recipe