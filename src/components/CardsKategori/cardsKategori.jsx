import React from 'react'
import style from "./cardsKategori.module.scss"



function cardsKategori(props) {
  return (
    <div style={{backgroundImage: `url(${props.image})`}} className={style.cardsKategoriDiv}><p>{props.title}</p></div>
  )
}

export default cardsKategori