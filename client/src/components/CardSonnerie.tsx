interface CardProps {
	title: string;
	image: string;
	description: string;
	buttonText?: string;
}

const Card: React.FC<CardProps> = ({
	title,
	image,
	description,
	buttonText,
}) => {
	return (
		<div className="ringtone-card">
			<h3>{title}</h3>
			<img src={image} alt={title} />
			<p>{description}</p>
			{buttonText && (
				<button type="button" className="download-button">
					{buttonText}
				</button>
			)}
		</div>
	);
};

export default Card;
