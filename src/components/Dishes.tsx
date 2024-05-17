import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
};

const Dishes = () => {
  const dishes = ['pizza.jpg', 'pizza.jpg', 'pizza.jpg', 'pizza.jpg'];

  const carouselItems = dishes.map((dish, index) => (
    <div key={index}>
      <img src={dish} alt={`Dish ${index}`} style={contentStyle} />
    </div>
  ));
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Наше <span className="text-orange-500">Меню</span></h2>
        <div className="mt-8">
          <Carousel slidesToShow={3} dots={false} autoplay autoplaySpeed={2000}>
            {carouselItems}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
