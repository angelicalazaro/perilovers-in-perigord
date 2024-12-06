import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<main>
				<Outlet />
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
