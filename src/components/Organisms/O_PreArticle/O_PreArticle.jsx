import React from 'react'
import A_Text from '../../Atoms/A_Text/A_Text'
import A_Link from '../../Atoms/A_Link/A_Link'
import './O_PreArticle.scss'

const O_PreArticle = ({translated_name="виды чая", right_text="Все классические чаи можно разделить только на&nbsp;пять видов по&nbsp;степени ферментации. Задача организации, в&nbsp;особенности&nbsp;же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации.", link="https://www.google.com", link_text="Как правильно заваривать чай разной ферментации?"}) => {
  return (
      <div className="O_PreArticle">
        {translated_name &&   <A_Text className="A_Title2Helios">{translated_name}</A_Text>}

        <div className="W_TextLink">
          {right_text && <A_Text className="A_Text">{ right_text}</A_Text>}
          {link_text &&   <A_Link className="A_Link" href={link && link}>
            {link_text}
          </A_Link>}

        </div>
      </div>
  )
}

export default O_PreArticle