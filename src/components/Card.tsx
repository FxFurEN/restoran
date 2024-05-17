import { LikeOutlined } from "@ant-design/icons";

type CardProps = {
  title: string;
  span: string;
  description: string;
};

const Card = ({title, span, description }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center"> {/* Добавляем классы flex и items-center */}
            <LikeOutlined className="text-orange-500 text-3xl" />
        </div>
        <h2 className="text-xl font-semibold mt-4">{title} <span className="text-orange-500">{span}</span></h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
