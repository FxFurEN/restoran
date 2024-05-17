import { MenuOutlined, PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-cover h-screen" style={{ backgroundImage: "url('../../public/bg.jpg')" }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <img src="../../public/logo.png" alt="Logo" className="h-12" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="menu.html" className="text-white text-lg font-bold hover:text-red-500">МЕНЮ</a>
            <a href="about.html" className="text-white text-lg font-bold hover:text-red-500">О НАС</a>
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
            <a href="bron.html" className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700">ЗАБРОНИРОВАТЬ СТОЛ</a>
          </div>
          <button className="md:hidden text-white text-2xl">
            <MenuOutlined />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
