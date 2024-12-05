import "./App.css";
import img from "./assets/images/sau1teur.gif";
import Header from "./components/header.tsx";

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
				Cherchez-moi ! <img src="./assets/images/sau1teur.gif" />
				{/* //ne marche pas pour l'instant */}
				<h2></h2>
			</div>
			{/* <footer>
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
