import { useState } from "react";
import { MenuOutlined, PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ReservationModal from "./ReservationModal"; 
import CartModal from "./CartModal";
import { Button } from "antd";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleCart, setModalVisibleCart] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const showModalCart = () => {
    setModalVisibleCart(true);
  };

  const handleCancelCart = () => {
    setModalVisibleCart(false);
  };

  return (
    <header className="bg-cover h-screen" style={{ backgroundImage: "url('../../public/bg.jpg')" }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <img src="../../public/logo.png" alt="Logo" className="h-12 mr-4" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#menu" className="text-white text-lg font-bold hover:text-red-500">МЕНЮ</a>
            <a href="#about" className="text-white text-lg font-bold hover:text-red-500">О НАС</a>
            <Link to="/reviews" className="text-white text-lg font-bold hover:text-red-500">ОТЗЫВЫ</Link>
            <a href="#contact" className="text-white text-lg font-bold hover:text-red-500">КОНТАКТЫ</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button type="text" className="flex pt-5 items-center" onClick={showModalCart}>
                <ShoppingCartOutlined className="h-8 text-white" color="#fff"/>
            </Button>
            <div className="text-white flex items-center">
              <PhoneOutlined className="mr-2" />
              <a href="tel:+77713735436" className="font-bold hover:text-red-500">+7 771 373 54 36</a>
            </div>
            <Button className="bg-orange-500 text-black border-0" onClick={showModal}>ЗАБРОНИРОВАТЬ СТОЛ</Button>
          </div>
          <button className="md:hidden text-white text-2xl">
            <MenuOutlined />
          </button>
        </div>
        <div className="text-center mt-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Добро пожаловать в GRILL HOUSE</h1>
          <p className="mt-4 text-lg md:text-2xl text-white">Лучшие блюда грузинской кухни прямо к вашему столу</p>
        </div>
      </div>
      <ReservationModal visible={modalVisible} onCancel={handleCancel} />
      <CartModal visible={modalVisibleCart} onCancel={handleCancelCart} />
    </header>
  );
};

export default Header;
