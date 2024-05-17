import { Link } from "react-router-dom";
import { Avatar, Rate } from "antd";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const ReviewsPage = () => {
  // Заглушечные отзывы для примера
  const reviews = [
    { id: 1, avatar: <Avatar icon={<UserOutlined />} />, rating: 4, comment: "Отличное заведение, всегда вкусно и уютно." },
    { id: 2, avatar: <Avatar icon={<UserOutlined />} />, rating: 5, comment: "Прекрасное место, обязательно приду снова!" },
    { id: 3, avatar: <Avatar icon={<UserOutlined />} />, rating: 3, comment: "Неплохое место, но цены могли бы быть ниже." },
    { id: 4, avatar: <Avatar icon={<UserOutlined />} />, rating: 5, comment: "Отличный сервис и атмосфера, рекомендую!" },
    { id: 5, avatar: <Avatar icon={<UserOutlined />} />, rating: 4, comment: "Хорошее место, порадовала кухня." },
    { id: 6, avatar: <Avatar icon={<UserOutlined />} />, rating: 4, comment: "Все было великолепно, спасибо!" },
    { id: 7, avatar: <Avatar icon={<UserOutlined />} />, rating: 5, comment: "Отличное качество еды, приятное обслуживание." },
    { id: 8, avatar: <Avatar icon={<UserOutlined />} />, rating: 4, comment: "Понравилось, приду еще раз." },
    { id: 9, avatar: <Avatar icon={<UserOutlined />} />, rating: 5, comment: "Идеальное место для вечернего отдыха." },
    { id: 10, avatar: <Avatar icon={<UserOutlined />} />, rating: 4, comment: "Хороший выбор блюд, есть что попробовать." },
  ];
  

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="flex items-center text-orange-500 hover:text-orange-700">
          <ArrowLeftOutlined className="mr-2" />
          На главную
        </Link>
      </div>
      <h2 className="text-4xl font-bold text-center mb-8">Отзывы</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {review.avatar}
                <span className="ml-3 text-lg font-semibold">Пользователь</span>
              </div>
              <Rate disabled defaultValue={review.rating} />
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
