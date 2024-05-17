const Header = () => {
  return (
    <header className="bg-cover h-screen" style={{ backgroundImage: "url('bg.jpg')" }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <img src="../assets/logo.png" alt="Logo" className="h-12" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="menu.html" className="text-white text-lg font-bold hover:text-red-500">МЕНЮ</a>
            <a href="about.html" className="text-white text-lg font-bold hover:text-red-500">О НАС</a>
            <a href="otzivi.html" className="text-white text-lg font-bold hover:text-red-500">ОТЗЫВЫ</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="cart.html">
              <img src="cart.png" alt="Cart" className="h-8" />
            </a>
            <div className="text-white">
              <img src="phone.png" alt="Phone" className="inline-block h-8 mr-2" />
              <a href="tel:+77713735436" className="font-bold hover:text-red-500">+7 771 373 54 36</a>
            </div>
            <a href="bron.html" className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700">ЗАБРОНИРОВАТЬ СТОЛ</a>
          </div>
          <button className="md:hidden">
            <img src="../assets/burger.jpg" alt="Burger Menu" className="h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
