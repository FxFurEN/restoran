import Header from './components/Header';
import Card from './components/Card';
import History from './components/History';
import BlackBlock from './components/BlackBlock';
import Dishes from './components/Dishes';
import Cook from './components/Cook';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <section className="my-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Почему выбирают <span className="text-orange-500">Нас</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Натуральные продукты" 
              span="Eco" 
              description="Продукты использованные в ресторане на 100% натуральные и без ГМО." 
            />
            <Card 
              title="Авторские рецепты" 
              span="Recipes" 
              description="Наши повара предлагают вам отведать лучшие грузинские блюда по авторским рецептам." 
            />
            <Card 
              title="Уникальные вина" 
              span="Wines" 
              description="У нас широкий ассортимент уникальных грузинских вин, которые можно попробовать только у нас." 
              />
            </div>
          </div>
        </section>
        <History />
        <BlackBlock />
        <Dishes />
        <Cook />
        <Footer />
      </div>
    );
  };
  
  export default App;