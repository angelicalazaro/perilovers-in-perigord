import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LoginPage.css";
import MovingImage from "../components/MovingImage";
import Charentaise from "../assets/images/Charentaise-removebg-preview.png";
import photoTemoignage from "../assets/images/elderlyWoman.jpg";
import macarena from "../assets/images/macarena.webp";
import asereje from "../assets/images/macarena.webp";

const imageUrls = [Charentaise, Charentaise, Charentaise, Charentaise];

const LoginPage: React.FC = () => {
	const [localUserName, setLocalUserName] = useState<string>(""); // Nom d'utilisateur
	const [password, setPassword] = useState<string>(""); // Mot de passe
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // État de connexion
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Validation des champs
		if (localUserName.trim() && password.trim()) {
			setIsLoggedIn(true);
			alert(`Bienvenue, ${localUserName}!`);
			navigate("/"); // Redirection vers la page d'accueil

			// Réinitialisation des champs
			setLocalUserName("");
			setPassword("");
		} else {
			alert("Veuillez remplir tous les champs !");
		}
	};

	return (
		<>
			<div className="moving_img" style={{ height: "100vh", width: "100vw" }}>
				{imageUrls.map((url, index) => (
					<MovingImage key={index} src={url} />
				))}
			</div>

			<div className="body">
				<div className="container">
					{/* Colonne gauche */}
					<div className="left-column">
						<section className="logoLoginPage">
							<img
								src="./src/assets/images/logo_perilove.png"
								alt="logoPerilove"
							/>
						</section>
						<div className="card-t">
							<h3>Témoignage Périlover</h3>
							<img className="photoT" src={photoTemoignage} alt="Témoignage" />
							<p>
								Grâce à Périlove, j'ai trouvé l'amour de ma vie en portant mes
								charentaises !
							</p>
						</div>
					</div>

					{/* Colonne centrale */}
					<div className="center-column">
						<section className="slogan">
							<h2>No 1</h2>
							<h3 className="typemachine">
								Des sites de rencontre pour Périgordins et Périgordines
							</h3>
							<p className="freePage">
								C'est gratuit, Périlove Aventures garantit un algorithme
								intelligent pour trouver ton âme sœur.
							</p>
						</section>
						<div className="formulaire">
							<form onSubmit={handleSubmit}>
								<div className="label1">
									<p className="membre">Je suis déjà membre</p>
									<label htmlFor="identifiant">Courriel</label>
									<input
										type="text"
										id="identifiant"
										placeholder="username"
										value={localUserName}
										onChange={(e) => setLocalUserName(e.target.value)}
										required
									/>
								</div>
								<div className="label2">
									<label htmlFor="password">Mot de passe</label>
									<input
										type="password"
										id="password"
										placeholder="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>
								<button type="submit" className="Homebutton">
									Connect
								</button>
							</form>

							{/* Affichage conditionnel pour indiquer si l'utilisateur est connecté */}
							{isLoggedIn && (
								<p className="welcomeMessage">Vous êtes connecté !</p>
							)}
						</div>
					</div>

					{/* Colonne droite */}
					<div className="right-column">
						<div className="ringtone-card">
							<h3>Aserejé</h3>
							<img src={asereje} alt="Aserejé" />
							<p>Écoute la chanson iconique et télécharge-la !</p>
							<button type="button" className="download-button">
								Télécharger
							</button>
						</div>
						<div className="ringtone-card">
							<h3>La Macarena</h3>
							<img src={macarena} alt="La Macarena" />
							<p>Danse sur *La Macarena* avec cette sonnerie !</p>
							<button type="button" className="download-button">
								Télécharger
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
