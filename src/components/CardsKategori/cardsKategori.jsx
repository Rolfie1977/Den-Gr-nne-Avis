import React from 'react'
import style from "./cardsKategori.module.scss"
import { NavLink } from 'react-router-dom'



function cardsKategori(props) {
  return (

    
   <NavLink to= {`/kategori/${props.kat}`}> <div style={{backgroundImage: `url(${props.image})`}} className={style.cardsKategoriDiv}><p>{props.title}</p></div>
   </NavLink>)
}

export default cardsKategori