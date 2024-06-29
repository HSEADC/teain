import React, { useEffect, useState } from 'react'
import A_Text from '../../Atoms/A_Text/A_Text'
import W_CardTitle from '../../Wrappers/W_CardTitle/W_CardTitle'
import './M_TeaCard.scss'
import classNames from 'classnames'
import base from '../../../airtable'
import img from '../../../images/tea_image.png'

const M_TeaCard = ({ className, id, imgPathStor, top_nameS, bottom_nameS }) => {
  const [top_name, setTopName] = useState(top_nameS)
  const [bottom_name, setBottomName] = useState(bottom_nameS)
  const [imgPath, setImgPath] = useState(imgPathStor)
  const [name, setName] = useState('')
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    if (id) {
      base('tea').find(id, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }

        console.log(record.get('new'))


        setTopName(record.get('top_name'))
        setBottomName(record.get('bottom_name'))
        setImgPath(record.get('image')[0].url)
        setName(record.get('name'))
        setIsNew(record.get('new'))

        console.log(record.get('new'))
      });
    }
  }, [id])


  if (!top_name || !bottom_name) {
    console.log('M_TeaCard: top_name or bottom_name is not defined')
    return null
  }

  return (
    <a href={`typesoftea/teaCard.html?item=${name}`} className={classNames('M_TeaCard', className, isNew && 'M_TeaCard-new')}>
      <img alt={top_name} src={imgPath} onError={(e) => e.target.src = img} />
      <W_CardTitle>
        <A_Text className={'A_CardTitleHelios'}>{top_name}</A_Text>
        <A_Text className={'A_CardTitleVlas'}>{bottom_name}</A_Text>
      </W_CardTitle>
    </a>
  )
}

export default M_TeaCard
