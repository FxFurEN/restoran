import { useState } from "react";
import { Modal, Input, Button, Empty, Card, Form, Select } from "antd";

const { Option } = Select;

const ReservationModal = ({ visible, onCancel }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); 
  const [email, setEmail] = useState(""); 

  const handleOk = () => {
    // Здесь можно добавить логику для обработки бронирования
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      onCancel();
    }, 2000);
  };

  const handleCancel = () => {
    onCancel(); 
  };

  return (
    <Modal
      title="Заказать доставку"
      open={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleOk} loading={confirmLoading} className="bg-orange-500 text-black border-0">
           Отправить заказ
        </Button>
      ]}
    >
        <Card className="w-full rounded-lg">
            <Form
            name="deliveryForm"
            layout="vertical"
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
