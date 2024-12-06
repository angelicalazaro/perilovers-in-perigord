import { Outlet } from "react-router-dom";
import "./App.css";
// import img from “./assets/images/sau1teur.gif”;

import EvenementsList from "./components/EvenementsList";
import { events } from "./components/Evenements";
import Home from "./pages/Home.tsx";
// import Home from “./pages/Home”;
// import LoginPage from “./pages/LoginPage”;

function App() {
	return (
		<>
			<main>
				<Outlet />
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
			</main>
			<footer>
				<p className="liens_footer">
					<a href="https://myspace.com/">myspace </a>
					<a href="https://myspace.com/"> skyblog </a>
					<a href="https://myspace.com/"> latinchat </a>
					<a href="https://myspace.com/"> caramail </a>
					<a href="https://myspace.com/"> wanadoo </a>
					<a href="https://myspace.com/"> msn</a>
				</p>
			</footer>
		</>
	);
}
export default App;
