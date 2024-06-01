import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import App from './App';
import ReviewsPage from './pages/Reviews/ReviewsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} /> 
            <Route path='/reviews' element={<ReviewsPage />} />
         </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
