import { useState } from "react";
import { Modal } from "antd";

const ReservationModal = ({ visible, onCancel }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
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
    >
      <p>Введите свои данные для бронирования:</p>
    </Modal>
  );
};

export default ReservationModal;
