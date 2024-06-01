import { useState } from "react";
import ReservationModal from "./ReservationModal";
import { Button } from "antd";

const BlackBlock = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  
  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <h2 className="text-4xl text-orange-500 font-bold">Отпразднуйте в одном из самых лучших ресторанов.</h2>
          <p className="text-white text-xl mt-4">Вкусные бизнес-ланчи по вкусной цене! 1800тг.</p>
        </div>
        <Button className="bg-orange-500 text-black border-0" onClick={showModal}>ЗАКАЗ СТОЛИКА</Button>
      </div>
      <ReservationModal visible={modalVisible} onCancel={handleCancel} />
    </section>
  );
};

export default BlackBlock;
