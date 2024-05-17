import { useState } from "react";
import { MenuOutlined, PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ReservationModal from "./ReservationModal"; 
import { Button } from "antd";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <header className="bg-cover h-screen" style={{ backgroundImage: "url('../../public/bg.jpg')" }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <img src="../../public/logo.png" alt="Logo" className="h-12" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#menu" className="text-white text-lg font-bold hover:text-red-500">МЕНЮ</a>
            <a href="#about" className="text-white text-lg font-bold hover:text-red-500">О НАС</a>
            <Link to="/reviews" className="text-white text-lg font-bold hover:text-red-500">ОТЗЫВЫ</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-white">
                <ShoppingCartOutlined className="h-8"/>
            </Link>
            <div className="text-white">
            <PhoneOutlined />
              <a href="tel:+77713735436" className="font-bold hover:text-red-500">+7 771 373 54 36</a>
            </div>
            <Button className="bg-orange-500 text-black border-0" onClick={showModal}>ЗАБРОНИРОВАТЬ СТОЛ</Button>
          </div>
          <button className="md:hidden text-white text-2xl">
            <MenuOutlined />
          </button>
        </div>
      </div>
      <ReservationModal visible={modalVisible} onCancel={handleCancel} />
    </header>
  );
};

export default Header;
