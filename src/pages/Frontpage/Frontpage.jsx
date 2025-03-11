import React from 'react'
import style from './Frontpage.module.scss'

function Frontpage() {
  return (
    <div className = {style.mainArea}>

        <hr></hr>
        <h2>Udvalgte produkter</h2>
        <div>
            placeholder
        </div>

        <hr></hr>

        <div> 
          <h1> Den Grønne Avis</h1>
          <p>Vi går forest i kampen om klimaet ved at give 2 kr. til
klima-venlige formål, hver gang du handler brugt på Den
Grønne Avis
</p>
        </div>
        <hr />


        <h2>
          Populære Kategorier
        </h2>
        <div>

          placeholder
        </div>

        <div>
          <div>
            <h3>Donationer til Dato</h3>
            <p>Sammen med dig har vi siden starten indsamlet:</p>

            <p className="donationNum">452.231.50 kr</p>

            <p>Tak fordi du handler brugt, med omtanke for klimaet</p>


          </div>

          <div>
          <h3>Donationer til Dato</h3>
            <p>Sammen med dig har vi siden starten indsamlet:</p>

            <p className="donationNum">112.542.75 kr</p>

            <p>Tak fordi du handler brugt, med omtanke for klimaet</p>

          </div>
        </div>
    </div>
  )
}

export default Frontpage