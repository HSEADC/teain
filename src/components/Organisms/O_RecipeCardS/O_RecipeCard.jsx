import React from 'react'
import A_Text from '../../Atoms/A_Text/A_Text'
import A_Tag from '../../Atoms/A_Tag/A_Tag'
import img from '../../../images/recipe_card.png'
import bigImg from '../../../images/index/A_ImgRecipeL.png'
import './O_RecipeCard.scss'

const O_RecipeCard = ({ recipe, toggleTagSelection, activeTags, href }) => {
  const tagsTranslatedArray = recipe.translated_tag_names || [];
  const tagsArray = recipe.tag_names || [];
  const image = recipe.image && recipe.image[0] && recipe.image[0].url ? recipe.image[0].url : img;
  const imageBig = recipe.imageBig && recipe.imageBig[0] && recipe.imageBig[0].url ? recipe.imageBig[0].url : bigImg;
  const description = recipe.description;
  const { translated_name, flavour_of_the_week } = recipe;
  let size = 's';
  if (flavour_of_the_week) {
    size = 'l';
  }

  const isRecipesPage = window.location.pathname.includes('recipes');

  const handleTagClick = (tag) => {
    if (isRecipesPage) {
      toggleTagSelection(tag);
    } else {
      window.location.href = `recipes.html?tags=${tag}`;
    }
  };

  const O_RecipeCardS = (
    <a href={href} className={`O_RecipeCardS card`}>
      <img alt={translated_name} src={image} onError={(e) => e.target.src = img} />
      <div className="W_RecipeCardSBottom">
        <A_Text className="A_CardTitleHelios">{translated_name}</A_Text>
        <ul className="C_TegCloud">
          {tagsArray.map((tag, index) => (
            <li key={index}>
              <A_Tag active={activeTags && activeTags.includes(tagsArray[index])} key={index} onClick={() => handleTagClick(tagsArray[index])}>
                {tagsTranslatedArray[index]}
              </A_Tag>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );

  const O_RecipeCardL = (
    <a href={href} className="O_RecipeCardL">
      <div className="W_RecipeCardLeft">
        <div className="W_RecipeCardText">
          <h2 className="M_Title2">
            <A_Text className="A_Title2Helios">вкус недели</A_Text>
            <A_Text className="A_Title2Vlas">{translated_name}</A_Text>
          </h2>
          <A_Text className="A_Text">{description}</A_Text>
        </div>
        <div className="C_TegCloud">
          {tagsTranslatedArray.map((tag, index) => (
            <A_Tag active={activeTags && activeTags.includes(tagsArray[index])} key={index} onClick={() => handleTagClick(tagsArray[index])}>
              {tagsTranslatedArray[index]}
            </A_Tag>
          ))}
        </div>
      </div>
      <div className="A_ImgRecipeL">
        <img alt="" src={image} onError={(e) => e.target.src = bigImg} />
      </div>
    </a>
  );

  switch (size) {
    case 's':
      return O_RecipeCardS;
    case 'l':
      return O_RecipeCardL;
    default:
      return O_RecipeCardS;
  }
}

export default O_RecipeCard;
