type CardProps = {
  image: string;
  title: string;
  span: string;
  description: string;
};

const Card = ({ image, title, span, description }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <h2 className="text-xl font-semibold mt-4">{title} <span className="text-orange-500">{span}</span></h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
