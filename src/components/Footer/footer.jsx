import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './footer.module.scss'

function footer() {
  return (
    <footer>
      <div className={style.leftDiv}> 
        <h3>Nyhedsbrev</h3>
        <p>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev
        og få de seneste klima opdateringer direkte i din indbakke</p>
        <form action="">
            <input type="email" placeholder="Indtast din email" />
            <button>Tilmeld</button>
        </form>

      </div>
      <div className='middleDiv'>
        
      <h3>Kontakt</h3>
        <p>Redningen 32
2210 Vinterby Øster
+45 88229422
dga@info.dk</p> </div>
     <div className={style.rightDiv}> 
        
     <h3>FN' Verdensmål</h3>
        <p>Vi støtter på organisatorisk plan op om FN´s verdensmål
og har derfor besluttet at en del af overskuddet går
direkte til verdensmål nr. 13; Klimahandling</p>

<NavLink to="">Læs mere om verdensmålene her</NavLink>

         </div>
    </footer>
  )
}

export default footer