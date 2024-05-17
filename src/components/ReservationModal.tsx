import { useState } from "react";
import { Modal, Input, Button, Empty } from "antd";

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
      title="Забронировать стол"
      open={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleOk} loading={confirmLoading} className="bg-orange-500 text-black border-0">
          Забронировать
        </Button>
      ]}
    >
      <div>
        <h2 className="text-xl font-bold">Оставьте свои контакты для того, чтобы мы могли свами связаться:</h2>
        <Input
          placeholder="Ваше ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ReservationModal;
