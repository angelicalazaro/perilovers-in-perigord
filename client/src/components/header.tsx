// import Vichy from "../assets/images/Vichy.jpg";
import "../CSS/header.css";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<header>
				<Link to="/">
					<img src={Logo} alt="Logo_Périlove" id="Logo" />
				</Link>
				<nav className="NavBar">
					<button type="button" className="boutons_du_footer">
						<Link to="/profils">
							Nos membres{" "}
							<img src="https://www.smiley-lol.com/smiley/heureux/coeurtendu.gif" />
						</Link>
					</button>

					<button type="button" className="boutons_du_footer">
						<Link to="/">
							Nos événements{" "}
							<img src="https://www.smiley-lol.com/smiley/expressifs/communiquer/expressif07.gif" />
						</Link>
					</button>

					<button type="button" className="boutons_du_footer">
						<img
							src="https://code.divshot.com/geo-bootstrap/img/test/new.gif"
							alt="new"
						/>
						Livre d'or{" "}
						<img src="https://www.smiley-lol.com/smiley/expressifs/communiquer/blah1.gif" />
					</button>
					<button type="button" className="boutons_du_footer">
						Forum{" "}
						<img src="https://www.smiley-lol.com/smiley/ordinateurs/ordi1fun.gif" />
					</button>
					<button type="button" className="boutons_du_footer">
						FAQ{" "}
						<img src="https://www.smiley-lol.com/smiley/expressifs/communiquer/secret02.gif" />
					</button>
					<button type="button" className="boutons_du_footer">
						Aidez-moi !{" "}
						<img src="https://www.smiley-lol.com/smiley/halloween-peur/peurblanc.gif" />
					</button>
				</nav>

				{/* <img src={Vichy} alt="VichyBackground" id="vichy_background" /> */}
			</header>
		</>
	);
}

export default Header;
