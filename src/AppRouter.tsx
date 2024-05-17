import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import App from './App';
import ReviewsPage from './pages/Reviews/ReviewsPage';
import CartPage from './pages/Cart/CartPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} /> 
            <Route path='/reviews' element={<ReviewsPage />} />
            <Route path='/cart' element={<CartPage />} />
         </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
