import pub_charantaises from "../assets/images/pub_charantaises.png";
import EvenementsList from "../components/EvenementsList";
import { events } from "../components/Evenements";
import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import Header from "../components/header";

function Home() {
	const [visitorCount, setVisitorCount] = useState(10245); // Déplacez VisitorCounter ici
	useEffect(() => {
		// Simulation d'une augmentation du nombre de visiteurs
		const interval = setInterval(() => {
			setVisitorCount(
				(prevCount) => prevCount + Math.floor(Math.random() * 5) + 1,
			);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<header>
				<Header />
			</header>

			<div>
				<p className="visitor">
					Visiteurs : {visitorCount}{" "}
					<img
						src="https://www.smiley-lol.com/smiley/energique/sautillant.gif"
						alt="test"
					/>
				</p>
			</div>
			<div className="banniere">
				<div className="texte-defilant">
					N°1 des sites de rencontre pour Périgordins et Périgordins{" "}
					<img
						src="https://www.smiley-lol.com/smiley/drague/amour/emotlove28.gif"
						alt="test"
					/>
				</div>
			</div>
			<img
				src="../assets/images/pub_charantaises.png"
				alt="charantaise forever"
			/>
			<h2>Nos événements</h2>
			<div id="events">
				<EvenementsList evenements={events} />
			</div>
		</>
	);
}

export default Home;
