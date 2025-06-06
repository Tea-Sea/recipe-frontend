import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Recipes from '../pages/Recipes/Recipes';
import Error from '../pages/Error/Error';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}