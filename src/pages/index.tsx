import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import NotFound from './not-found';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
