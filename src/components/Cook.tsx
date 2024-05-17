const Cook = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Наши <span className="text-orange-500">Повара</span></h2>
        <div className="mt-8 flex justify-around">
          <img src="../../public/1c.jpg" alt="Cook 1" className="w-1/3 h-auto object-cover" />
          <img src="../../public/2c.jpg" alt="Cook 2" className="w-1/3 h-auto object-cover" />
          <img src=".../../public/3c.jpg" alt="Cook 3" className="w-1/3 h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Cook;
