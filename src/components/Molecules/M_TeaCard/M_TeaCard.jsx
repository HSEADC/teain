import React from 'react'
import A_Text from '../../Atoms/A_Text/A_Text'
import W_CardTitle from '../../Wrappers/W_CardTitle/W_CardTitle'
import './M_TeaCard.css'
import classNames from 'classnames'

const M_TeaCard = ({ className, imgPath, top_name, bottom_name }) => {
  if (!top_name || !bottom_name) {
    console.log('M_TeaCard: top_name or bottom_name is not defined')
    return null
  }

  return (
    <div className={classNames('M_TeaCard', className)}>
      <img alt="" src={imgPath} />
      <W_CardTitle>
        <A_Text className={'A_CardTitleHelios'}>{top_name}</A_Text>
        <A_Text className={'A_CardTitleVlas'}>{bottom_name}</A_Text>
      </W_CardTitle>
    </div>
  )
}

export default M_TeaCard
