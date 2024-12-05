import { Outlet } from "react-router-dom";
import "./App.css";

import img from "./assets/images/sau1teur.gif";

import Header from "./components/header.tsx";

import EvenementsList from "./components/EvenementsList";
import { events } from "./components/Evenements";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";




function App() {
	return (
		<>

			<header>
				<Header />
			</header>
			<script
				async
				src="https://cse.google.com/cse.js?cx=b2615d1ca9908476e"
			></script>
			<div className="gcse-search">

			<h3>

				Cherchez-moi ! <img src="./assets/images/sau1teur.gif" />

				{/* //ne marche pas pour l'instant */}{" "}
			</h3>
			<div>
				<script
					async
					src="https://cse.google.com/cse.js?cx=b2615d1ca9908476e"
				></script>
        <Outlet />
				<h2></h2>

			</div>

			{/* <footer>

			<div className="gcse-search"></div>
			{/* <main><Outlet /> */}
			<button>Se déconnecter</button>
			<button>Vous êtes le xème visiteur de notre site !</button>
			<img src="../assets/images/pub_charantaises.png" />
			<h2>Nos événements</h2>
			<EvenementsList evenements={events} />
			<main></main>
			<footer>

				<p className="liens_footer">
					<a href="https://myspace.com/">myspace </a>
					<a href="https://myspace.com/"> skyblog </a>
					<a href="https://myspace.com/"> latinchat </a>
					<a href="https://myspace.com/"> caramail </a>
					<a href="https://myspace.com/"> wanadoo </a>
					<a href="https://myspace.com/"> msn</a>
				</p>
			</footer> */}
		</>
	);
}

export default App;
