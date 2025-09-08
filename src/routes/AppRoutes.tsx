import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import Error from '../pages/Error';

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}