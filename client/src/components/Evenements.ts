export interface Evenement {
	id: number;
	name: string;
	description: string;
	lieu: string;
	date: string;
}

export const events: Evenement[] = [
	{
		id: 1,
		name: "Musée du Liège et du Bouchon ",
		description:
			"Si le Périgord n'a pas son musée de la charentaise, il pourrait se vanter de ses liens avec le liège et l'artisanat traditionnel.",
		date: "samedi 7 décembre 2024",
		lieu: "Mézin",
	},
	{
		id: 2,
		name: "Créer votre propre poterie préhistorique",
		description:
			"Dans l’esprit des objets trouvés à Lascaux, un atelier où les visiteurs fabriquent des poteries à l’ancienne ou des bijoux en os et pierre.",
		date: "dimanche 8 décembre 2024",
		lieu: Bergerac,
	},
	{
		id: 3,
		name: "Initiation à la fabrication de sabots ou de chaises rustiques",
		description:
			"En écho à l’artisanat traditionnel périgourdin, apprenez à concevoir vos sabots pour être au chaud.",
		date: "mercredi 11 décembre 2024",
		lieu: "Coux et Bigaroque-Mouzens",
	},
	{
		id: 4,
		name: "Atelier de fauconnerie décalé",
		description:
			"Apprenez à manipuler des oiseaux de proie tout en explorant des histoires liées à la chasse médiévale.",
		date: "jeudi 12 décembre 2024",
		lieu: "Lamonzie St-Martin",
	},
	{
		id: 5,
		name: "Une après-midi mots fléchés",
		description:
			"Un moment ludique et convivial autour de la résolution de mots fléchés, parfait pour les amateurs de jeux de lettres.",
		date: "dimanche 15 décembre 2024",
		lieu: "MJC de Saint Meard de Gurçon",
	},
];

export default Evenement;
