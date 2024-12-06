interface TestimonialCardProps {
	image: string;
	text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, text }) => {
	return (
		<div className="card left-card">
			<h3>Témoignage Périlover</h3>
			<img className="photoT" src={image} alt="Témoignage" />
			<p>{text}</p>
		</div>
	);
};

export default TestimonialCard;
