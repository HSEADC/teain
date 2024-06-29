import React from 'react'
import classNames from 'classnames'
import './A_Link.css'

const A_Link = ({ className, children, href, blank }) => {
  return (
    <a
      href={href}
      target={blank ? '_blank' : '_self'}
      className={classNames('A_Link', className)}
      dangerouslySetInnerHTML={{ __html: children }}
    ></a>
  )
}

export default A_Link
