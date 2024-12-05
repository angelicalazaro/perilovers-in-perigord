import img from "../assets/images/pub_charantaises.png";
import EvenementsList from "../components/EvenementsList";
import { events } from "../components/Evenements";
import React, { useState, useEffect } from "react";
import "../components/Home.css";
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
				<p className="visitor">Visiteurs : {visitorCount}</p>
			</div>
			<h2>Nos événements</h2>
			<EvenementsList evenements={events} />
		</>
	);
}

export default Home;
