import React from 'react'
import style from "./CardsKategoriPage2.module.scss"


function CardsKategoriPage2(props) {
    // React fracment sættes ind
  return ( <div> 
    <div style={{backgroundImage:`url(${props.image})`}} className={style.cardsDiv}><p>{props.price}</p></div>

    <p> {props.title} </p>


   <p>{props.text}</p>

   

    </div>
  )
}

export default CardsKategoriPage2