import React from 'react'
import classNames from 'classnames'
import './M_Banner.css'

const M_Banner = ({ className, imgPath }) => {
  console.log(imgPath)
  return (
    <div
      style={ imgPath && { backgroundImage: `url(${imgPath})` }}
      className={classNames('M_Banner', className)}
    ></div>
  )
}

export default M_Banner
