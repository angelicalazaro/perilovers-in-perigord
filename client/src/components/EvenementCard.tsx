import type { Evenement } from "./Evenements";
import { useState } from "react";

interface EvenementCardProps {
	evenement: Evenement;
}

function EvenementCard({ evenement }: EvenementCardProps) {
	const [inscrit, setInscrit] = useState(false);

	return (
<<<<<<< HEAD
		<figure className="card">
			{" "}
			{/* Appliquez uniquement la classe 'card' ici */}
			<img src={evenement.picture} alt={evenement.name} />
			<h3>{evenement.name}</h3>
			<p>
				{evenement.description} <br />
				Lieu {evenement.lieu} <br />
				{evenement.date}
			</p>
			<button className="bouttonInscrit" onClick={() => setInscrit(!inscrit)}>
				{inscrit ? "Je suis inscrit(e)" : "Je m'inscris"}
			</button>
		</figure>
=======
		<>
			<div className="card-container">
				<figure className="card">
					<img src={evenement.picture} />
					<h3>{evenement.name}</h3>
					<p>
						{evenement.description} <br />
						Lieu : {evenement.lieu} <br />
						Date : {evenement.date}
					</p>{" "}
					<button
						className="bouttonInscrit"
						onClick={() => setInscrit(!inscrit)}
					>
						{inscrit ? "Je suis inscrit(e) " : "Je m'inscris"}
					</button>
				</figure>
			</div>
		</>
>>>>>>> ec3f3fcb9d3fb45a370d7d2b002dfe7cbf2f7db4
	);
}

export default EvenementCard;
