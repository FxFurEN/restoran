import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Rate, Form, Input, Button, Spin, notification } from "antd";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { createClient } from "@supabase/supabase-js";

const { TextArea } = Input;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ReviewsPage = () => {
  const [form] = Form.useForm();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [averageRating, setAverageRating] = useState(0); // Добавляем состояние для средней оценки

  const fetchReviews = async () => {
    const { data, error } = await supabase.from('reviews').select('*');
    if (error) {
      console.error('Error fetching reviews:', error.message);
    } else {
      setReviews(data);
      calculateAverageRating(data); // Вызываем функцию вычисления средней оценки при получении отзывов
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const calculateAverageRating = (data) => {
    if (data.length === 0) {
      setAverageRating(0);
      return;
    }

    const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
    const avgRating = totalRating / data.length;
    setAverageRating(avgRating);
  };

  const handleFinish = async (values) => {
    setLoading(true);
    const { rating, comment } = values;
    const { error } = await supabase.from('reviews').insert([{ rating: parseFloat(rating), comment }]);
    console.log(rating, comment);
    
    if (error) {
      console.error('Error inserting review:', error.message);
      notification.error({
        message: 'Ошибка добавления отзыва',
        description: 'Произошла ошибка при добавлении отзыва. Пожалуйста, повторите попытку позже.',
      });
    } else {
      fetchReviews();
      notification.success({
        message: 'Отзыв добавлен',
        description: 'Ваш отзыв был успешно добавлен. Спасибо за ваш отзыв!',
      });
      form.resetFields();
    }
    
    setLoading(false);
  };
  
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="flex items-center text-orange-500 hover:text-orange-700">
          <ArrowLeftOutlined className="mr-2" />
          На главную
        </Link>
      </div>
      <h2 className="text-4xl font-bold text-center mb-8">Отзывы</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Средняя оценка: {averageRating.toFixed(1)}</p>
        <Rate disabled allowHalf defaultValue={averageRating} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...reviews].map((review) => (
          <div key={review.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Avatar icon={<UserOutlined />} />
                <span className="ml-3 text-lg font-semibold">Пользователь</span>
              </div>
              <Rate allowHalf disabled value={review.rating} />
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Оставить отзыв</h3>
        <Form form={form} onFinish={handleFinish} layout="vertical">
          <Form.Item name="rating" label="Оценка">
            <Rate allowHalf />
          </Form.Item>
          <Form.Item name="comment" label="Комментарий">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>Отправить</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ReviewsPage;
