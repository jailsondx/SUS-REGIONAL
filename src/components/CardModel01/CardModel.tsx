import './CardModel.css';

interface CardModelProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CardModel: React.FC<CardModelProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="card-model">
      <img src={imageSrc} alt={title} className="card-model-image" />
      <h3 className="card-model-title">{title}</h3>
      <p className="card-model-description">{description}</p>
    </div>
  );
};

export default CardModel;