import React, { useEffect, useState } from 'react'
import CardsKategoriPage2 from '../../components/CardsKategoriPage2/CardsKategoriPage2'
import axios from 'axios'
    

function Kategoripage() {

const [data, setData] = useState([])
useEffect(() => {
  axios .get('http://localhost:4242/products/category/cykler')
  
  .then((response) => {
    console.log(response.data);

    setData(response.data)
    
  })
  .catch((error) => {

    alert(error)
    
  })
 
}, [])


  return (
    <section>
<hr />
<h2>Alle Kategorier</h2>
<ul>
<li value="">Camping</li>
            <li value="">Elektronik</li>
            <li value="">Have og byg</li>
            <li value="">Tøj og mode</li>
            <li value="">Cykler</li>
            <li value="">Biler</li>
            <li value="">Hobby</li>
            <li value="">Mobil og telefoni</li>
            <li value="">Musik instrumenter</li>
            <li value="">Billede og lyd</li>
            <li value="">Scooter og knallerter</li>
            <li value="">Bøger og blade</li>
            <li value="">Diverse</li>
</ul>

<article>

<CardsKategoriPage2/>
</article>

    </section>
  )}
export default Kategoripage