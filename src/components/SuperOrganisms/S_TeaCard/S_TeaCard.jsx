import React, { useEffect, useState } from 'react'
import base from '../../../airtable'
import A_Text from '../../Atoms/A_Text/A_Text'
import A_Tag from '../../Atoms/A_Tag/A_Tag'
import O_RecipeCard from '../../Organisms/O_RecipeCardS/O_RecipeCard'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'

const S_TeaCard = () => {
  const [item, setItem] = useState('assam');
  const [obj, setObj] = useState({});
  const [image, setImage] = useState('');
  const [teaType, setTeaType] = useState('');
  const [bottom_tag, setBottom_tag] = useState('');
  const [bottom_translated_tag_name, setBottom_translated_tag_name] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const itemParam = params.get('item') || 'assam';
    setItem(itemParam);
  }, []);

  useEffect(() => {
    if (item) {
      base('tea')
        .select({
          filterByFormula: `{name} = '${item}'`,
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              setObj(record.fields);
              setImage(record.fields.image[1].url);
              setTeaType(record.fields.translated_type_name);
              setBottom_tag(record.fields.bottom_tag_name[0]);
              setBottom_translated_tag_name(record.fields.bottom_translated_tag_name[0]);
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
            }
          }
        );
    }
  }, [item]);

  useEffect(() => {
    if (bottom_tag) {
      base('recipes')
        .select({
          filterByFormula: `AND(FIND('${bottom_tag}', ARRAYJOIN(tags, ',')) > 0, NOT(flavour_of_the_week))`,
          maxRecords: 4,
        })
        .eachPage(
          function page(records, fetchNextPage) {
            const newRecipes = records.map(record => record.fields);
            setRecipes(newRecipes);
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
            }
          }
        );
    }
  }, [bottom_tag]);

  useEffect(() => {
    console.log('Recipes:', recipes);
    console.log('Bottom Tag:', bottom_tag);
    console.log('Object:', obj);
  }, [obj, recipes]);



  return (
    <div>
      <O_NavBar/>


      <div className="W_LeadContainer">
        <a className="A_SliderButton" href="fermentation.html">
          <svg
            fill="none"
            height="85"
            viewBox="0 0 112 85"
            width="112"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="56"
              cy="42.2432"
              fill="#F6ECE0"
              rx="55"
              ry="41.4575"
              transform="rotate(-180 56 42.2432)"
            />
            <ellipse
              cx="56"
              cy="42.2432"
              fill="#F6ECE0"
              id="bg"
              rx="55"
              ry="41.4575"
              transform="rotate(-180 56 42.2432)"
            />
            <path
              d="M48.6426 35.9046C48.3214 36.7397 47.9681 37.5105 47.5827 38.217C47.1973 38.9557 46.7637 39.6462 46.282 40.2886L72.1039 40.2886L72.1039 44.2389L46.282 44.2389C46.7316 44.8813 47.1491 45.5557 47.5345 46.2623C47.9199 47.001 48.2732 47.7878 48.5944 48.6229L44.9331 48.6229C42.9418 46.2783 40.7579 44.4959 38.3813 43.2754L38.3813 41.2039C40.7579 40.0477 42.9418 38.2813 44.9331 35.9046L48.6426 35.9046Z"
              fill="#CC8931"
              id="arrow"
            />
            <path
              d="M1 42.3503C1.00001 19.5131 25.6244 0.999947 56 0.999949C86.3757 0.999952 111 19.5131 111 42.3503C111 65.1875 86.3757 83.7007 56 83.7007C25.6243 83.7007 1 65.1875 1 42.3503Z"
              stroke="#CC8931"
              strokeWidth="0.721471"
            />
            <path
              d="M48.6426 35.9046C48.3214 36.7397 47.9681 37.5105 47.5827 38.217C47.1973 38.9557 46.7637 39.6462 46.282 40.2886L72.1039 40.2886L72.1039 44.2389L46.282 44.2389C46.7316 44.8813 47.1491 45.5557 47.5345 46.2623C47.9199 47.001 48.2732 47.7878 48.5944 48.6229L44.9331 48.6229C42.9418 46.2783 40.7579 44.4959 38.3813 43.2754L38.3813 41.2039C40.7579 40.0477 42.9418 38.2813 44.9331 35.9046L48.6426 35.9046Z"
              stroke="#CC8931"
              strokeWidth="0.721471"
            />
          </svg>
        </a>

      </div>

      <div className="O_TeaCaracters">
        <div className="W_Container">
          <div className="O_CardStart">
            <h2 className="M_Title3">
              <A_Text className="A_Title3Helios">{obj.top_name}</A_Text>
              <A_Text className="A_Title3Vlas">{obj.bottom_name}</A_Text>
            </h2>
            <img alt="" className="A_ImgTea_Card" src={image} />

          </div>
          <A_Text className="A_Lead">
            {obj.description}
          </A_Text>

          <div className="W_TeaTable">
            <h2 className="M_Title3">
              <A_Text className="A_Title3Helios">{obj.sub_title}</A_Text>
              <A_Text className="A_Title3Vlas">характеристики</A_Text>
            </h2>
            <div className="M_TableRow">
              <A_Text className="A_Table1">что используют</A_Text>
              <A_Text className="A_Table2" >{obj.what_use}</A_Text>
            </div>
            <div className="M_TableRow">
              <A_Text className="A_Table1">полезные вещества</A_Text>
              <A_Text className="A_Table2">{obj.useful}</A_Text>
            </div>
            <div className="M_TableRow">
              <A_Text className="A_Table1">t заварки </A_Text>
              <A_Text className="A_Table2" >{obj.temperature}</A_Text>
            </div>
            <div className="M_TableRow">
              <A_Text className="A_Table1">цвет чая </A_Text>
              <A_Text className="A_Table2">{obj.color}</A_Text>
            </div>
            <div className="M_TableRow">
              <A_Text className="A_Table1">вкус </A_Text>
              <A_Text className="A_Table2"
              >{obj.taste}</A_Text
              >
            </div>
          </div>
        </div>
      </div>

      <div className="O_RecipesRec">

        <h2 className="M_Title3">
          <A_Text className="A_Title3Helios">{obj.cta}</A_Text>
          <A_Text className="A_Title3Vlas">рецепты</A_Text>
        </h2>
        <A_Tag href={`${bottom_tag}`} active={true} size={"l"} >{bottom_translated_tag_name}</A_Tag>

        <ul className="C_RecipeCardS">
          {recipes.map((recipe, index) => (
            <li key={index} >
              <O_RecipeCard key={index} recipe={recipe} />
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default S_TeaCard