import { Carousel } from 'antd';
import { useState, useEffect } from 'react';

const contentStyle: React.CSSProperties = {
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center', 
  padding: '25px',
  background: '#e69138',
};

const Dishes = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); 
      } else {
        setSlidesToShow(3); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dishes = Array.from({ length: 35 }, (_, index) => `${index + 1}.jpg`);

  const carouselItems = dishes.map((dish, index) => (
    <div key={index}>
      <img src={`/menu/${dish}`} alt={`Dish ${index}`} style={contentStyle}/>
    </div>
  ));

  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Наше <span className="text-orange-500">Меню</span></h2>
        <div className="mt-8">
          <Carousel slidesToShow={slidesToShow} autoplay autoplaySpeed={3000} infinite>
            {carouselItems}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
