import React from 'react'
import style from "./cards.module.scss"



function cards(props) {
  return (
    <div style={{backgroundImage:`url(${props.image})`}} className={style.cardsDiv}><p> {props.title} </p>
    
    </div>
  )
}

export default cards