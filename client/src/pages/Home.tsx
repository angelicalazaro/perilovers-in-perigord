import EvenementsList from "../components/EvenementsList";
import { events } from "../components/Evenements";
import { useState, useEffect } from "react";
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

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cse.google.com/cse.js?cx=b2615d1ca9908476e";
		script.async = true;
		document.body.appendChild(script);

		// Nettoyage
		return () => {
			document.body.removeChild(script);
		};
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

			<div className="gcse-search">
				<img
					src="https://gifcities.org/assets/search.gif"
					alt="Recherche"
					style={{ width: "30px", height: "30px", cursor: "pointer" }}
				/>
			</div>

			<h2 id="nos_events" className="rainbow">
				<span className="text">Nos événements</span>
			</h2>
			<div id="events">
				<EvenementsList evenements={events} />
			</div>
		</>
	);
}

export default Home;
