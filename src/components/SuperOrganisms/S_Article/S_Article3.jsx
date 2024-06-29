import React, { useEffect, useState } from 'react'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'
import base from '../../../airtable'
import '../../../index.css'

import img from '../../../images/articles/article_image_3.jpg'


const S_Article3 = () => {


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
        <h1 className="A_Title2Helios animate__animated animate__fadeInUp ">Экзотические чаи, которые стоит попробовать</h1>
        <div className="W_TitleLeadLeft">
          <p className="A_Lead">
            Мир чая разнообразен и&nbsp;полон удивительных вкусов и&nbsp;ароматов. В&nbsp;этой статье мы&nbsp;расскажем о&nbsp;редких и&nbsp;необычных сортах чая, которые стоит попробовать каждому любителю этого напитка.
          </p>
          <ul className="A_List">
            <li>Белый пуэр</li>
            <li>Желтый чай</li>
            <li>Чай из бергамота</li>
            <li>Лапсанг сушонг</li>
            <li>Габа чай</li>
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
            Белый пуэр&nbsp;&mdash; редкий вид пуэра, сочетающий особенности белого и&nbsp;пуэр чая. Его производят из&nbsp;молодых листьев и&nbsp;почек, подвергая минимальной ферментации и&nbsp;долгому процессу созревания. Этот чай отличается мягким и&nbsp;сладковатым вкусом с&nbsp;легкими цветочными нотками. Заваривайте белый пуэр при температуре 80-90&deg;C, настаивая 3-4&nbsp;минуты. <br/> <br/>
            Желтый чай&nbsp;&mdash; один из&nbsp;самых редких и&nbsp;дорогих видов чая, производимый в&nbsp;Китае. Процесс производства напоминает зеленый чай, но&nbsp;с&nbsp;дополнительным этапом &laquo;желтения&raquo;, придающим уникальный вкус и&nbsp;аромат. Желтый чай имеет легкий, сладковатый вкус с&nbsp;нотками орехов и&nbsp;цветов. Заваривайте его при температуре 70-80&deg;C&nbsp;в течение 2-3&nbsp;минут.

          </p>
          <p className="A_Text">
            Чай из&nbsp;бергамота, также известный как Эрл Грей, представляет собой черный чай, ароматизированный маслом бергамота&nbsp;&mdash; цитрусового фрукта. Этот чай популярен в&nbsp;Европе и&nbsp;отличается освежающим цитрусовым вкусом с&nbsp;легкой горчинкой. Заваривайте чай из&nbsp;бергамота при температуре 90-100&deg;C&nbsp;в течение 3-5&nbsp;минут.<br/> <br/>
            Лапсанг сушонг – черный чай из Китая с ярким копченым вкусом. Листья сушат над дымом сосновых костров, что придает ему уникальный аромат. Этот чай хорошо сочетается с крепкими сырами и мясными блюдами. Заваривайте лапсанг сушонг при температуре 90-100°C в течение 4-5 минут.<br/>  <br/>

          </p>
        </div>
      </div>
      <div className=" W_Container O_Fact">
        <div className="W_Fact">
          <div className="M_Fact">
            <div className="A_Text">
              Желтый чай когда-то был доступен только китайским императорам и&nbsp;назывался &laquo;императорским чаем&raquo; из-за сложного процесса производства и&nbsp;редкости.
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
          Экзотические чаи предлагают удивительные вкусы и&nbsp;ароматы, которые могут разнообразить ваше чаепитие и&nbsp;подарить новые впечатления. Попробуйте белый пуэр, желтый чай, чай из&nbsp;бергамота, лапсанг сушонг и&nbsp;Габа чай, чтобы открыть для себя новые грани этого удивительного напитка. Заваривайте чай правильно и&nbsp;наслаждайтесь каждым глотком!
        </p>
      </div>
    </>
  )
}

export default S_Article3