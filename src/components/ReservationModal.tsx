import { useState } from "react";
import { Modal, Input, Button, notification, Form, Card } from "antd";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ReservationFormValues {
  fullName: string;
  phone: string;
  email: string;
  numOfPeople: number;
}

const ReservationModal = ({ visible, onCancel }: { visible: boolean; onCancel: () => void }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values: ReservationFormValues) => {
    setConfirmLoading(true);
    const { fullName, phone, email, numOfPeople } = values;

    const { data, error } = await supabase
      .from('delivery_table')
      .insert([
        { full_name: fullName, phone, email, num_of_people: numOfPeople }
      ]);

    if (error) {
      notification.error({
        message: 'Ошибка',
        description: 'Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.',
      });
      console.error('Error inserting data:', error);
    } else {
      notification.success({
        message: 'Успешно',
        description: 'Ваш столик успешно забронирован.',
      });
      console.log('Data inserted successfully:', data);
    }

    setConfirmLoading(false);
    onCancel();
  };

  return (
    <Modal
      title="Забронировать стол"
      visible={visible}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={() => form.submit()} loading={confirmLoading} className="bg-orange-500 text-black border-0">
          Забронировать
        </Button>
      ]}
    >
      <Card className="w-full rounded-lg">
        <Form
          form={form}
          name="reservationForm"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            name="fullName"
            label="ФИО"
            rules={[{ required: true, message: 'Пожалуйста, введите ваше ФИО!' }]}
          >
            <Input placeholder="Введите ваше ФИО" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Номер телефона"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона!' }]}
          >
            <Input placeholder="Введите ваш номер телефона" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Почта"
            rules={[{ required: true, message: 'Пожалуйста, введите вашу почту!' }]}
          >
            <Input placeholder="Введите вашу почту" />
          </Form.Item>

          <Form.Item
            name="numOfPeople"
            label="Количество человек"
            rules={[
              { required: true, message: 'Пожалуйста, введите количество человек!' },
              {
                validator: (_, value) => 
                  value && value >= 1 && value <= 10
                  ? Promise.resolve()
                  : Promise.reject(new Error('Количество человек должно быть от 1 до 10!'))
              }
            ]}
          >
            <Input type="number" min={1} max={10} placeholder="Введите количество человек" />
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  );
};

export default ReservationModal;
