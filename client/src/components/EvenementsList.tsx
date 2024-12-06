import EvenementCard from "./EvenementCard";
import type { Evenement } from "./Evenements";

import "../CSS/Home.css";

interface EvenementListProps {
	evenements: Evenement[];
}

function EvenementsList({ evenements }: EvenementListProps) {
	return (
		<div className="card-container">
			{evenements.map((evenement: Evenement) => (
				<EvenementCard key={evenement.id} evenement={evenement} />
			))}
		</div>
	);
}

export default EvenementsList;
