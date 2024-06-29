import React, { useEffect, useState } from 'react'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'
import base from '../../../airtable'
import '../../../index.css'

import img from '../../../images/articles/article_image_2.png'


const S_Article2 = () => {


  const url = window.location.href;
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const paramValue = params.get('article');

  let article_name = paramValue ? paramValue : 'thyme_and_apricots'
  const [article, setArticle] = useState({})

  useEffect(() => {
    base('articles')
      .select({
        filterByFormula: `{name} = '${article_name}'`,
        maxRecords: 1
      })
      .firstPage(
        function done(err, records) {
          if (err) {
            console.error(err)
            return
          }
          const loadedArticle = records[0].fields
          setArticle(loadedArticle)
        }
      )
  }, [article_name])

  

  return (
    <>
      <O_NavBar />
      <div className="M_TitleLead W_Container">
        <h1 className="A_Title2Helios animate__animated animate__fadeInUp ">Как выбрать качественный чай</h1>
        <div className="W_TitleLeadLeft">
          <p className="A_Lead">
            Выбор качественного чая&nbsp;&mdash; это вопрос вкуса и&nbsp;здоровья. В&nbsp;этой статье мы&nbsp;расскажем, как распознать хороший чай в&nbsp;магазине.
          </p>
          <ul className="A_List">
            <li>Страна происхождения</li>
            <li>Сорт</li>
            <li>Вкус</li>
            <li>Аромат</li>
          </ul>
        </div>

        <div className="Q_TitleImage animate__animated animate__fadeInUp">
          <img alt="" src={img} />
        </div>
      </div>
      <div className=" W_Container O_ArticleInfo">
        <h2 className="A_Title3Helios">Советы</h2>
        <div className="C_ArticleCont">
          <p className="A_Text">
            Чтобы выбрать качественный чай, сначала внимательно изучите этикетку. Ищите данные о&nbsp;производителе, месте сбора и&nbsp;сорте чая. Обращайте внимание на&nbsp;страну происхождения (например, Китай, Индия, Япония), сорт (Ассам, Дарджилинг, Сенча) и&nbsp;дату упаковки&nbsp;&mdash; свежий чай всегда лучше. <br/> <br/>
            Открыв упаковку, оцените внешний вид чайных листьев. Они должны быть целыми, без пыли и&nbsp;ломаных частиц. Зеленый чай должен быть светло-зелёным и&nbsp;ровным, черный&nbsp;&mdash; темным и&nbsp;однородным, улун&nbsp;&mdash; частично закрученным. Качественный чай имеет яркий и&nbsp;насыщенный аромат. Если запах тусклый или посторонний, это может указывать на&nbsp;низкое качество или неправильное хранение.

          </p>
          <p className="A_Text">
            После заваривания оцените вкус чая. Он&nbsp;должен быть чистым, без горечи и&nbsp;посторонних привкусов, оставлять приятное послевкусие и&nbsp;быть многогранным. Старайтесь покупать чай, упакованный недавно, и&nbsp;храните его в&nbsp;герметичных контейнерах вдали от&nbsp;света и&nbsp;влаги.<br/> <br/>
            Покупайте чай в&nbsp;специализированных магазинах или у&nbsp;проверенных поставщиков, которые могут дать рекомендации по&nbsp;выбору. <br/>  <br/>

          </p>
        </div>
      </div>
      <div className=" W_Container O_Fact">
        <div className="W_Fact">
          <div className="M_Fact">
            <div className="A_Text">
              Чайные листья, собранные весной, считаются наиболее ценными. Они насыщены питательными веществами, что делает чай более ароматным и&nbsp;вкусным.
            </div>
          </div>
        </div>
        <div className="W_SocailsImg">
          <div className="A_PreImg">
            <img alt="" src="" />
          </div>
          <a className="A_Socials" href="https://t.me/zavarka_tg" target={'_blank'}>больше фактов в TG</a>
        </div>
      </div>
 {/*     <div className="C_ArticlePic W_Container">
        <div className="M_ArticlePic">
          <div className="A_PreImg">
            <img alt="" src="../images/teaCardImg.png" />
          </div>
          <p className="A_Text">
            <span>Платформа для всех,</span> кто хочет разбираться в&nbsp;чае,
            уважает культуру чаепития или любит готовить напитки в&nbsp;кругу
            близких и&nbsp;наедине с&nbsp;собой.`
          </p>
        </div>
        <div className="M_ArticlePic">
          <div className="A_PreImg">
            <img alt="" src="../images/teaCardImg.png" />
          </div>
          <p className="A_Text">
            <span>Платформа для всех,</span> кто хочет разбираться в&nbsp;чае,
            уважает культуру чаепития или любит готовить напитки в&nbsp;кругу
            близких и&nbsp;наедине с&nbsp;собой.
          </p>
        </div>
        <div className="M_ArticlePic">
          <div className="A_PreImg">
            <img alt="" src="../images/teaCardImg.png" />
          </div>
          <p className="A_Text">
            <span>Платформа для всех,</span> кто хочет разбираться в&nbsp;чае,
            уважает культуру чаепития или любит готовить напитки в&nbsp;кругу
            близких и&nbsp;наедине с&nbsp;собой.
          </p>
        </div>
        <div className="M_ArticlePic">
          <div className="A_PreImg">
            <img alt="" src="../images/teaCardImg.png" />
          </div>
          <p className="A_Text">
            <span>Платформа для всех,</span> кто хочет разбираться в&nbsp;чае,
            уважает культуру чаепития или любит готовить напитки в&nbsp;кругу
            близких и&nbsp;наедине с&nbsp;собой.
          </p>
        </div>
      </div>*/}
      <div className="W_ArticleText W_Container">
        <p className="A_Text">
          Выбор качественного чая требует внимания к&nbsp;деталям. Читая этикетки, оценивая внешний вид и&nbsp;аромат чайных листьев, а&nbsp;также проверяя свежесть продукта, вы&nbsp;сможете найти действительно качественный чай и&nbsp;наслаждаться его вкусом и&nbsp;ароматом.
        </p>
      </div>
    </>
  )
}

export default S_Article2