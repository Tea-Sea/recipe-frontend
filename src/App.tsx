import AppRoutes from './routes/AppRoutes';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App
