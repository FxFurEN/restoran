import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center', 
};

const Cook = () => {
  const employees = Array.from({ length: 3 }, (_, index) => `${index + 1}.jpg`);

  const carouselItems = employees.map((employee, index) => (
    <div key={index}>
      <img src={`/employee/${employee}`} alt={`Cook ${index + 1}`} style={contentStyle}/>
    </div>
  ));

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Наши <span className="text-orange-500">Повара</span></h2>
        <div className="mt-8">
          <Carousel slidesToShow={3} autoplay autoplaySpeed={3000} infinite>
            {carouselItems}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Cook;
