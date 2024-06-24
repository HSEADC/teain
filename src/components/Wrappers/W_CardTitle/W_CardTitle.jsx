import React from 'react'
import classNames from 'classnames'
import './W_CardTitle.css'

const W_CardTitle = ({ children, className }) => {
  return <div className={classNames('W_CardTitle', className)}>{children}</div>
}

export default W_CardTitle
