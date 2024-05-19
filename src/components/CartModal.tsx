import { useState } from "react";
import { Modal, Input, Button, Card, Form, Select, notification } from "antd";
import { createClient } from "@supabase/supabase-js";

const { Option } = Select;

const supabase = createClient("https://waccszgdudorjiexqdno.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhY2NzemdkdWRvcmppZXhxZG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNDc4MDMsImV4cCI6MjAzMTcyMzgwM30.xo0EOC0iTdQqiHsVs5FPJc-bvl7I2Vmv_y0tRgaKMRc");

const ReservationModal = ({ visible, onCancel }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    setConfirmLoading(true);
    const { snack, fullName, phone, address } = values;

    const { data, error } = await supabase
      .from('delivery_orders')
      .insert([
        { snack, full_name: fullName, phone, address }
      ]);

    if (error) {
      notification.error({
        message: 'Ошибка',
        description: 'Произошла ошибка при отправке заказа. Пожалуйста, попробуйте снова.',
      });
      console.error('Error inserting data:', error);
    } else {
      notification.success({
        message: 'Успешно',
        description: 'Ваш заказ успешно отправлен.',
      });
      console.log('Data inserted successfully:', data);
    }

    setConfirmLoading(false);
    onCancel();
  };

  return (
    <Modal
      title="Заказать доставку"
      visible={visible}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={() => form.submit()} loading={confirmLoading} className="bg-orange-500 text-black border-0">
          Отправить заказ
        </Button>
      ]}
    >
      <Card className="w-full rounded-lg">
        <Form
          form={form}
          name="deliveryForm"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            name="snack"
            label="Выберите закуску"
            rules={[{ required: true, message: 'Пожалуйста, выберите закуску!' }]}
          >
            <Select placeholder="Выберите закуску">
              <Option value="khachapuri">Хачапури</Option>
              <Option value="khinkali">Хинкали</Option>
              <Option value="lobio">Лобио</Option>
              <Option value="badrijani">Бадриджани</Option>
              <Option value="pkhali">Пхали</Option>
              <Option value="satsivi">Сациви</Option>
              <Option value="chakhokhbili">Чахохбили</Option>
              <Option value="mtsvadi">Мцвади</Option>
              <Option value="chashushuli">Чашушули</Option>
              <Option value="odjahuri">Оджаури</Option>
              <Option value="kubdari">Кубдари</Option>
              <Option value="achma">Ачма</Option>
              <Option value="churchkhela">Чурчхела</Option>
              <Option value="tkemali">Ткемали</Option>
              <Option value="suluguni">Сулугуни</Option>
            </Select>
          </Form.Item>

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
            name="address"
            label="Адрес"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш адрес!' }]}
          >
            <Input.TextArea placeholder="Введите ваш адрес" />
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  );
};

export default ReservationModal;
