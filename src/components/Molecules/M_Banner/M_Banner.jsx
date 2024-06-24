import React from 'react'
import classNames from 'classnames'

const M_Banner = ({ className, imgPath }) => {
  return (
    <div
      style={{ backgroundImage: imgPath }}
      className={classNames('M_Banner', className)}
    ></div>
  )
}

export default M_Banner
