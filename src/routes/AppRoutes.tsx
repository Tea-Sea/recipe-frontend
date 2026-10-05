import { Routes, Route } from 'react-router-dom';
import Random from '../pages/Random';
import Recipes from '../pages/Recipes';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import ProtectedRoute from './ProtectedRoute'
import { Navigate } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/recipes" replace />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/random" element={<Random />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}