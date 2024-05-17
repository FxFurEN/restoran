const History = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Наша <span className="text-orange-500">История</span></h2>
          <p className="text-gray-600 mt-4">История создания грузинского ресторана началась в сердце Тбилиси...</p>
        </div>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <span className="text-4xl font-bold text-orange-500">93</span>
            <p className="text-gray-600">Напитки</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-orange-500">206</span>
            <p className="text-gray-600">Еда</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-orange-500">71</span>
            <p className="text-gray-600">Закуски</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
