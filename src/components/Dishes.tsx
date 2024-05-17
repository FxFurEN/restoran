const Dishes = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Наше <span className="text-orange-500">Меню</span></h2>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="w-1/3">
            <img src="pizza.jpg" alt="Pizza" className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-wrap w-2/3">
            <div className="w-1/3 p-2">
              <img src="../../public/burger.jpg" alt="Burger" className="w-full h-auto object-cover" />
            </div>
            <div className="w-1/3 p-2">
              <img src="../../public/burger.jpg" alt="Burger" className="w-full h-auto object-cover" />
            </div>
            <div className="w-1/3 p-2">
              <img src="../../public/burger.jpg" alt="Burger" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
