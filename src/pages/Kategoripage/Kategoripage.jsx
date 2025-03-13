import React, { useEffect, useState } from 'react'
import CardsKategoriPage2 from '../../components/CardsKategoriPage2/CardsKategoriPage2'
import axios from 'axios'

    

function Kategoripage() {

const [currentKategori, setCurrentKategori] = useState("camping")

const [data, setData] = useState([])
useEffect(() => {

  // henter dynamisk den nuværende kategori fra API via currentKategori hooket
  axios .get(`http://localhost:4242/products/category/${currentKategori}`)
  
  .then((response) => {
    console.log(response.data.data);
// For at få fat i API data, skal jeg igennem 2 data keys
    setData(response.data.data)
    
  })
  .catch((error) => {

    alert("Ingen produkter i denne kategori")
    
  })
//  Her er min currentKategori. Når den den ændrer sig ved tryg på katergori links, så vil useEffect blive genindlæst.
}, [currentKategori])


  return (
    <section>
<hr />
<h2>Alle Kategorier</h2>
<ul>
  {/* anonym function */}
<li value=""onClick={()=>{setCurrentKategori("camping")}}>Camping</li>
            <li value=""onClick={()=>{setCurrentKategori("elektronik")}}>Elektronik</li>
            <li value=""onClick={()=>{setCurrentKategori("have-og-byg")}}>Have og byg</li>
            <li value=""onClick={()=>{setCurrentKategori("toej-og-mode")}}>Tøj og mode</li>
            <li value=""onClick={()=>{setCurrentKategori("cykler")}}>Cykler</li>
            <li value=""onClick={()=>{setCurrentKategori("biler")}}>Biler</li>
            <li value=""onClick={()=>{setCurrentKategori("hobby")}}>Hobby</li>
            <li value=""onClick={()=>{setCurrentKategori("mobil-og-telefoni")}}>Mobil og telefoni</li>
            <li value=""onClick={()=>{setCurrentKategori("musik-instrumenter")}}>Musik instrumenter</li>
            <li value=""onClick={()=>{setCurrentKategori("billede-og-lyd")}}>Billede og lyd</li>
            <li value=""onClick={()=>{setCurrentKategori("scootere-og-knallerter")}}>Scooter og knallerter</li>
            <li value=""onClick={()=>{setCurrentKategori("boeger-og-blade")}}>Bøger og Blade</li>
            <li value=""onClick={()=>{setCurrentKategori("diverse")}}>Diverse</li>
</ul>

<article>

{
  data.map((item)=>(  
    <CardsKategoriPage2

image={item.image}
price={"pris: "+item.price+ " kr"}
title={item.name}
text={item.description}


/>
    
  ))
}

</article>

    </section>
  )}
export default Kategoripage