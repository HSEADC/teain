import React from 'react'
import './A_Text.css'

const A_Text = ({ children, className }) => {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    ></span>
  )
}

export default A_Text
