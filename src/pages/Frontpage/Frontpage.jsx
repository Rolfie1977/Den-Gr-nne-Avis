import React, { useEffect, useState } from "react";
import style from "./Frontpage.module.scss";
import heroBillede from "../../assets/herobillede.jpg";
import Cards from "../../components/Cards/cards";
import CardsKategori from "../../components/CardsKategori/cardsKategori";
import axios from "axios";

function Frontpage() {
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4242/products")

			.then((response) => {
				setData(response.data.data);

				console.log(response.data);
			})

			.catch((error) => {alert(error)});

		axios
			.get("http://localhost:4242/categories")

			.then((response) => {
				setData2(response.data.data);

				console.log(response.data);
			})

			.catch((error) => {alert(error)});
	}, []);

	return (
		<section className={style.mainArea}>
			<hr></hr>
			<h2>Udvalgte produkter</h2>
			<article className={style.produktArticle}>
				{/* En mapping som vælger de 6 føreste items i data via en ternary operator */}
				{data.map((item, index) =>
					index < 6 ? <Cards image={item.image} title={item.name} /> : null
				)}
			</article>

			<hr></hr>
			{/* Template string bruges til at hente det importeret billede */}
			<article
				className={style.heroArticle}
				style={{ backgroundImage: `url(${heroBillede})` }}
			>
				<h1> Den Grønne Avis</h1>
				<p>
					Vi går forest i kampen om klimaet ved at give 2 kr. til klima-venlige
					formål, hver gang du handler brugt på Den Grønne Avis
				</p>
			</article>
			<hr />

			<h2>Populære Kategorier</h2>
			<article className={style.kategoriArticle}>
				{data2.map((item, index) =>
					index < 6 ? (
						<CardsKategori
							image={item.category_image}
							title={item.name}
							kat={item.slug}
						/>
					) : null
				)}
			</article>

			<hr></hr>

			<article className={style.donationArticle}>
				<div>
					<h3>Donationer til Dato</h3>
					<p>Sammen med dig har vi siden starten indsamlet:</p>

					<p className={style.donationNum}>452.231.50 kr</p>

					<p>Tak fordi du handler brugt, med omtanke for klimaet</p>
				</div>

				<div>
					<h3>Donationer i år</h3>
					<p>Sammen med dig har vi siden starten indsamlet:</p>

					<p className={style.donationNum}>112.542.75 kr</p>

					<p>Tak fordi du handler brugt, med omtanke for klimaet</p>
				</div>
			</article>
		</section>
	);
}

export default Frontpage;
