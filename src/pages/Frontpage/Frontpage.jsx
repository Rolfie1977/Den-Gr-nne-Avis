import React from 'react'
import style from './Frontpage.module.scss'
import heroBillede from "../../assets/herobillede.jpg"

function Frontpage() {
  return (
    <section className = {style.mainArea}>

        <hr></hr>
        <h2>Udvalgte produkter</h2>
        <article>
            placeholder
        </article>

        <hr></hr>
{/* Template string bruges til at hente det importeret billede */}
      <article className={style.heroArticle} style={{backgroundImage: `url(${heroBillede})`}}> 
          <h1> Den Grønne Avis</h1>
          <p>Vi går forest i kampen om klimaet ved at give 2 kr. til
klima-venlige formål, hver gang du handler brugt på Den
Grønne Avis
</p>
        </article>
        <hr />


        <h2>
          Populære Kategorier
        </h2>
        <article>

          placeholder
        </article>

        <article className={style.donationArticle} >
          <div>
            <h3>Donationer til Dato</h3>
            <p>Sammen med dig har vi siden starten indsamlet:</p>

            <p className= {style.donationNum}>452.231.50 kr</p>

            <p>Tak fordi du handler brugt, med omtanke for klimaet</p>


          </div>

          <div>
          <h3>Donationer til Dato</h3>
            <p>Sammen med dig har vi siden starten indsamlet:</p>

            <p className={style.donationNum}>112.542.75 kr</p>

            <p>Tak fordi du handler brugt, med omtanke for klimaet</p>

          </div>
        </article>
    </section>
  )
}

export default Frontpage