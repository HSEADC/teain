import React, { useEffect, useState } from 'react'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'
import base from '../../../airtable'

const S_Article = () => {


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
        <h1 className="A_Title2Helios">Что такое пуэр на самом деле?</h1>
        <div className="W_TitleLeadLeft">
          <p className="A_Lead">
            Все классические чаи можно разделить только на&nbsp;пять видов
            по&nbsp;степени ферментации. Задача организации,
            в&nbsp;особенности&nbsp;же постоянно.
          </p>
          <ul className="A_List">
            <li>Список</li>
            <li>Примерно какие-то слова</li>
            <li>ПРимерно еще слова</li>
            <li>Еше какой-то пункт</li>
            <li>Пункт</li>
            <li>ПРимер слов</li>
          </ul>
        </div>

        <div className="Q_TitleImage">
          <img alt="" src="../images/media/puerh/image.png" />
        </div>
      </div>
      <div className="O_ArticleInfo">
        <h2 className="A_Title3Helios">история</h2>
        <div className="C_ArticleCont">
          <p className="A_Text">
            Платформа для всех, кто хочет разбираться в&nbsp;чае, уважает культуру
            чаепития или любит готовить напитки в&nbsp;кругу близких
            и&nbsp;наедине. <br /><br />
            Повседневная практика показывает, что постоянный количественный рост
            и&nbsp;сфера нашей активности требуют определения и&nbsp;уточнения
            дальнейших направлений развития. Равным образом начало повседневной
            работы по&nbsp;формированию позиции требуют от&nbsp;нас анализа форм
            развития. С&nbsp;другой стороны рамки и&nbsp;место обучения кадров
            позволяет оценить значение направлений прогрессивного развития.
          </p>
          <p className="A_Text">
            Повседневная практика показывает, что постоянный количественный рост
            и&nbsp;сфера нашей активности требуют определения и&nbsp;уточнения
            дальнейших направлений развития. Равным образом начало повседневной
            работы по&nbsp;формированию позиции требуют от&nbsp;нас анализа форм
            развития. С&nbsp;другой стороны рамки и&nbsp;место обучения кадров
            позволяет оценить значение направлений прогрессивного развития.
            <br /><br />
            Равным образом начало повседневной работы по&nbsp;формированию позиции
            требуют от&nbsp;нас анализа форм развития. С&nbsp;другой стороны рамки
            и&nbsp;место обучения кадров позволяет оценить значение направлений
            прогрессивного развития.
          </p>
        </div>
      </div>
      <div className="O_Fact">
        <div className="W_Fact">
          <div className="M_Fact">
            <div className="A_Text">
              Повседневная практика показывает, что постоянный количественный рост
              и&nbsp;сфера нашей активности требуют определения и&nbsp;уточнения
              дальнейших направлений развития. Равным образом начало повседневной
              работы по&nbsp;формированию позиции требуют от&nbsp;нас анализа форм
              развития. С&nbsp;другой стороны рамки и&nbsp;место обучения кадров
              позволяет оценить значение направлений прогрессивного развития.
            </div>
          </div>
        </div>
        <div className="W_SocailsImg">
          <div className="A_PreImg">
            <img alt="" src="../images/teaCardImg.png" />
          </div>
          <a className="A_Socials" href="#">больше фактов в VK</a>
        </div>
      </div>
      <div className="C_ArticlePic">
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
      </div>
      <div className="W_ArticleText">
        <p className="A_Text">
          Повседневная практика показывает, что постоянный количественный рост
          и&nbsp;сфера нашей активности требуют определения и&nbsp;уточнения
          дальнейших направлений развития. Равным образом начало повседневной
          работы по&nbsp;формированию позиции требуют от&nbsp;нас анализа форм
          развития. С&nbsp;другой стороны рамки и&nbsp;место обучения кадров
          позволяет оценить значение направлений прогрессивного развития.
        </p>
      </div>
    </>
  )
}

export default S_Article