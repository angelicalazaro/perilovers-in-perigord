import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LoginPage.css";
import MovingImage from "../components/MovingImage";
import Charentaise from "../assets/images/Charentaise-removebg-preview.png";

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
			<div style={{ height: "100vh", width: "100vw" }}>
				{imageUrls.map((url, index) => (
					<MovingImage key={index} src={url} />
				))}
			</div>
			<section className="loginPage">
				<section>
					<section className="logoLoginPage">
						<img
							src="./src/assets/images/logo_perilove.png"
							alt="logoPerilove"
						/>
					</section>
					<section>
						<h2>No 1</h2>
						<h3>Des sites de rencontre pour Périgordins et Périgordines</h3>
						<p className="freePage">
							C'est gratuit, Périlove Aventures garantis un algorithme
							intelligent pour trouver votre âme sœur
						</p>
					</section>
					<figure>
						<img src="../assets/images/elderlyWoman.jpg" alt="old_woman" />
					</figure>
					<p className="pubSonnerie">Téléchargez les meilleures sonneries</p>
					<p className="aserejé">Aserejé</p>
					<p className="la-macarena">La macarena</p>

					<div className="formulaire">
						<form onSubmit={handleSubmit}>
							<div className="label1">
								<label htmlFor="identifiant">Username</label>
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
								<label htmlFor="password">Password</label>
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
					<h4>Le test périgordien</h4>
					<p>
						Es tu un vrai PériLover? Aimes-tu vraiment les chaussons et les
						charantaises ? Test 100% scientific
					</p>
				</section>
			</section>
		</>
	);
};

export default LoginPage;
