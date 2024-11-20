import React from 'react'
import "./UpArrowButton.scss";

export default function UpArrowButton({IconComponent, top, left, onClick}) {
  return (
    <div className='main-down-arrow' style={{left: left, top: top}} onClick={onClick}>
      {IconComponent && <IconComponent/>}
    </div>
  )
}
