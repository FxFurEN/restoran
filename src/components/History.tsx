import React from "react";

const History = () => {
  return (
    <section id="about" className="my-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          
          <div className="lg:flex lg:items-center lg:justify-between mt-8">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold">Наша <span className="text-orange-500">История</span></h2>
              <p className="text-gray-600 mt-4 text-left lg:text-xl">История создания грузинского ресторана началась в сердце Тбилиси,
                когда молодой грузинский повар, по имени Давид, вернувшись из путешествия по всему свету, 
                был вдохновлен разнообразием кулинарных традиций. Он решил создать место, 
                где можно было бы насладиться аутентичной грузинской кухней в уютной и гостеприимной атмосфере. 
                С помощью своей семьи и друзей, Давид открыл свой первый ресторан "хачапури гриль хаус", 
                где каждое блюдо было приготовлено с любовью и воспоминаниями о родной Грузии.
                Благодаря своему таланту и преданности качеству, ресторан быстро стал популярным среди местных жителей и туристов, 
                превратившись в символ грузинской гостеприимности и кулинарного мастерства.</p>
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
            <div className="hidden lg:block lg:w-1/3 lg:ml-8">
              <img src="/3.jpg" alt="История ресторана" className="rounded-lg w-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
