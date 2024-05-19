import { useState } from "react";
import { Modal, Input, Button, notification, Form, Card } from "antd";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://waccszgdudorjiexqdno.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhY2NzemdkdWRvcmppZXhxZG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNDc4MDMsImV4cCI6MjAzMTcyMzgwM30.xo0EOC0iTdQqiHsVs5FPJc-bvl7I2Vmv_y0tRgaKMRc");

const ReservationModal = ({ visible, onCancel }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    setConfirmLoading(true);
    const { fullName, phone, email } = values;

    const { data, error } = await supabase
      .from('delivery_table')
      .insert([
        { full_name: fullName, phone, email }
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
        </Form>
      </Card>
    </Modal>
  );
};

export default ReservationModal;
