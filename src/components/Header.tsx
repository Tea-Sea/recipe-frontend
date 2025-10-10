import { Link, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import Logo from './../../src/assets/TestLogo.svg?react';



const Header: React.FC = () => {

  const location = useLocation();

  return (
    <header className=' z-20 bg-blue-200 h-15'>
      <nav className='flex h-full items-end'>
        <Link
        to="/"
        className='items-center'
        onClick={() => {
          if (location.pathname === '/') window.location.reload();
        }}
        >
          <Logo role="img" aria-label="Cookbook Logo" width={60} height={60} viewBox="190 0 270 750" preserveAspectRatio="xMidYMid meet" className='hover:fill-gray-500 fill-gray-700 transition-all duration-300'></Logo>
        </Link>
        <ul className='flex flex-1 justify-center space-x-6 pb-2'>
          <li>
           <HeaderButton to='/'>Home</HeaderButton>
          </li>
          <li>
            <HeaderButton to='/recipes'>Recipes</HeaderButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;