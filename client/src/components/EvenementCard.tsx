import type { Evenement } from "./Evenements";
import { useState } from "react";
import "../CSS/Home.css";

interface EvenementCardProps {
	evenement: Evenement;
}

function EvenementCard({ evenement }: EvenementCardProps) {
	const [inscrit, setInscrit] = useState(false);

	return (
		<>
			<div className="card-container">
				<figure className="card">
					<img src={evenement.picture} alt="TG" />
					<h3>{evenement.name}</h3>
					<p>
						{evenement.description} <br />
						Lieu : {evenement.lieu} <br/>
						Date : {evenement.date}
					</p>{" "}
					<button
						type="button"
						className="bouttonInscrit"
						onClick={() => setInscrit(!inscrit)}
					>
						{inscrit ? "Je suis inscrit(e) " : "Je m'inscris"}
					</button>
				</figure>
			</div>
		</>
	);
}

export default EvenementCard;
