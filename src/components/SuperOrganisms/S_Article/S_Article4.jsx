import React, { useEffect, useState } from 'react'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'
import base from '../../../airtable'
import '../../../index.css'

import img from '../../../images/articles/article_image_4.jpg'


const S_Article4 = () => {


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
        <h1 className="A_Title2Helios animate__animated animate__fadeInUp ">Чайные смеси: Как создать свой уникальный вкус</h1>
        <div className="W_TitleLeadLeft">
          <p className="A_Lead">
            Создание собственной чайной смеси&nbsp;&mdash; это увлекательный процесс, который позволяет экспериментировать с&nbsp;различными вкусами и&nbsp;ароматами. В&nbsp;этой статье мы&nbsp;расскажем, как правильно подбирать ингредиенты и&nbsp;создавать уникальные чайные композиции, которые порадуют вас и&nbsp;ваших близких.
          </p>
          <ul className="A_List">
            <li>Мята</li>
            <li>Ягоды</li>
            <li>Гибискус</li>
            <li>Имбирь</li>
            <li>Лаванда</li>
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
            Чайные смеси&nbsp;&mdash; это отличный способ разнообразить своё чаепитие и&nbsp;найти новые любимые вкусы. Смешивая различные виды чая и&nbsp;добавляя к&nbsp;ним травы, специи, фрукты и&nbsp;цветы, можно создать напиток, который будет соответствовать вашим личным предпочтениям. Начните с&nbsp;выбора базового чая. Это может быть черный, зеленый, белый, улун или пуэр. Каждый из&nbsp;них имеет свои уникальные свойства и&nbsp;вкус, которые станут основой вашей смеси. Например, черный чай даст крепкий и&nbsp;насыщенный вкус, а&nbsp;зеленый чай&nbsp;&mdash; легкий и&nbsp;освежающий. <br/> <br/>

          </p>
          <p className="A_Text">
            При создании чайных смесей важно находить баланс между ингредиентами. Начните с&nbsp;небольших порций и&nbsp;постепенно добавляйте новые компоненты, чтобы не&nbsp;переборщить. Пробуйте разные сочетания, пока не&nbsp;найдете идеальный для себя вкус. Вот несколько примеров рецептов для вдохновения. Освежающий мятный чай на&nbsp;основе зеленого чая с&nbsp;добавлением мяты и&nbsp;лимонной цедры подарит освежающий, легкий вкус с&nbsp;цитрусовыми нотками. Пряный имбирный чай с&nbsp;черным чаем, имбирем, корицей и&nbsp;кардамоном будет согревающим и&nbsp;пряным, с&nbsp;легкой сладостью. Цветочный чай с&nbsp;лавандой и&nbsp;розовыми лепестками на&nbsp;основе белого чая создаст нежный, цветочный, расслабляющий вкус. Ягодный чай с&nbsp;гибискусом и&nbsp;сушеными ягодами на&nbsp;основе улуна предложит яркий, фруктовый вкус с&nbsp;кислинкой.<br/> <br/>
            Лапсанг сушонг – черный чай из Китая с ярким копченым вкусом. Листья сушат над дымом сосновых костров, что придает ему уникальный аромат. Этот чай хорошо сочетается с крепкими сырами и мясными блюдами. Заваривайте лапсанг сушонг при температуре 90-100°C в течение 4-5 минут.<br/>  <br/>

          </p>
        </div>
      </div>
      <div className=" W_Container O_Fact">
        <div className="W_Fact">
          <div className="M_Fact">
            <div className="A_Text">
              Знаете ли вы, что многие известные чайные бренды начали свою деятельность именно с создания уникальных смесей? Это показывает, насколько важен индивидуальный подход к подбору ингредиентов и созданию неповторимых вкусов.
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
          Создание собственной чайной смеси&nbsp;&mdash; это творческий и&nbsp;увлекательный процесс, который позволяет экспериментировать и&nbsp;находить новые вкусовые сочетания. Используя различные виды чая, травы, специи, фрукты и&nbsp;цветы, вы&nbsp;можете создать напиток, идеально подходящий именно вам. Экспериментируйте, наслаждайтесь процессом и&nbsp;делитесь своими открытиями с&nbsp;близкими!
        </p>
      </div>
    </>
  )
}

export default S_Article4