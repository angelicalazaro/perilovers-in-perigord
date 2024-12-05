// import Vichy from "../assets/images/Vichy.jpg";
import "../CSS/header.css";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<header>
				<img src={Logo} alt="Logo_Périlove" id="Logo" />
				<nav className="NavBar">
					<button type="button" className="boutons_du_footer">
						<Link to="/profils" >
							Nos membres
						</Link>
					</button>
					<button type="button" className="boutons_du_footer">
						Nos événements
					</button>
					<button type="button" className="boutons_du_footer">
						Livre d'or
					</button>
					<button type="button" className="boutons_du_footer">
						Forum
					</button>
					<button type="button" className="boutons_du_footer">
						FAQ
					</button>
					<button type="button" className="boutons_du_footer">
						Aidez-moi !
					</button>
				</nav>

				{/* <img src={Vichy} alt="VichyBackground" id="vichy_background" /> */}
			</header>
		</>
	);
}

export default Header;
