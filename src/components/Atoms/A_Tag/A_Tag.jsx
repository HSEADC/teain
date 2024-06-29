import React from 'react'
import './A_Tag.scss'
import A_Text from '../A_Text/A_Text'
import classNames from 'classnames'

const A_Tag = ({ children, className, active, href, size = "s", green, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href || '#'}
      className={classNames('A_Tag', className, { active }, `A_Tag-${size}`)}
      onClick={handleClick}
    >
      <A_Text className={green && !active ? 'A_Text-lightGreen' : undefined}>{children}</A_Text>
    </a>
  )
}

export default A_Tag
