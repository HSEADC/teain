import React, { useEffect, useState } from 'react'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'
import base from '../../../airtable'
import '../../../index.css'

import img from '../../../images/articles/article_image_1.png'


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
        <h1 className="A_Title2Helios animate__animated animate__fadeInUp ">Как правильно заваривать чай разной ферментации?</h1>
        <div className="W_TitleLeadLeft">
          <p className="A_Lead">
            Заваривание чая&nbsp;&mdash; это искусство, которое требует знания и&nbsp;терпения. В&nbsp;этой статье мы&nbsp;разберем, как правильно заваривать чай различных типов ферментации, чтобы максимально раскрыть их&nbsp;вкус и&nbsp;аромат.
          </p>
          <ul className="A_List">
            <li>Зеленый чай</li>
            <li>Черный чай</li>
            <li>Улун</li>
            <li>Белый чай</li>
            <li>Пуэр</li>
          </ul>
        </div>

        <div className="Q_TitleImage animate__animated animate__fadeInUp">
          <img alt="" src={img} />
        </div>
      </div>
      <div className=" W_Container O_ArticleInfo">
        <h2 className="A_Title3Helios">Мои рекомендации</h2>
        <div className="C_ArticleCont">
          <p className="A_Text">
            Зеленый чай&nbsp;&mdash; минимально ферментированный, сохраняющий свежий вкус и&nbsp;антиоксиданты. Чтобы заварить зеленый чай правильно, нагрейте воду до&nbsp;70-80&deg;C, используйте одну чайную ложку (2-3&nbsp;г) на&nbsp;чашку (250&nbsp;мл) и&nbsp;настаивайте 2-3&nbsp;минуты. <br/> <br/>
            Черный чай&nbsp;&mdash; полностью ферментированный, с&nbsp;насыщенным вкусом. Для заваривания черного чая используйте кипяток (90-100&deg;C), одну чайную ложку (2-3&nbsp;г) на&nbsp;чашку и&nbsp;настаивайте 3-5&nbsp;минут.

          </p>
          <p className="A_Text">
            Улун&nbsp;&mdash; частично ферментированный чай, сочетающий свойства зеленого и&nbsp;черного чая. Заваривайте улун при температуре 80-90&deg;C, используя одну чайную ложку (2-3&nbsp;г) на&nbsp;чашку, и&nbsp;настаивайте 3-4&nbsp;минуты.<br/> <br/>
            Белый чай&nbsp;&mdash; минимально обработанный, с&nbsp;деликатным вкусом. Для белого чая вода должна быть нагрета до&nbsp;60-70&deg;C, пропорция&nbsp;&mdash; две чайные ложки (3-4&nbsp;г) на&nbsp;чашку, время заваривания&nbsp;&mdash; 4-5&nbsp;минут. <br/>  <br/>
            Пуэр&nbsp;&mdash; ферментированный и&nbsp;выдержанный чай, бывает сырой (шен) и&nbsp;зрелый (шу). Для пуэра используйте кипяток (100&deg;C), одну чайную ложку (3-4&nbsp;г) на&nbsp;чашку, и&nbsp;настаивайте 2-3 минуты для первого настоя, затем 30&nbsp;секунд до&nbsp;1&nbsp;минуты для последующих.

          </p>
        </div>
      </div>
      <div className=" W_Container O_Fact">
        <div className="W_Fact">
          <div className="M_Fact">
            <div className="A_Text">
              Многие чайные эксперты рекомендуют &laquo;промывать&raquo; чайные листья перед основным завариванием. Это очищает листья и&nbsp;раскрывает их&nbsp;аромат.
            </div>
          </div>
        </div>
        <div className="W_SocailsImg">
          <div className="A_PreImg">
            <img alt="" src="../images/teaCardImg.png" />
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
          Заваривание чая требует правильного выбора температуры воды, времени настаивания и&nbsp;пропорций. Экспериментируйте и&nbsp;наслаждайтесь чашкой прекрасно заваренного чая каждый день.
        </p>
      </div>
    </>
  )
}

export default S_Article