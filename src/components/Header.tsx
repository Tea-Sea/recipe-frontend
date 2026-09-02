import { Link, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import Logo from './../../src/assets/TestLogo.svg?react';



const Header: React.FC = () => {

  const location = useLocation();

  const apiUrl = import.meta.env.VITE_GO_API_URL;

   const logout = async () => {
      try {
        const res = await fetch(`${apiUrl}/logout`, {
          method: "POST",
          credentials: "include",
        });
        if (res.status === 200) {
            window.location.href = "/login";
            return;
        }
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
      } catch (err: any) {
        console.log("error logging out :(")
      }};

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
            <HeaderButton to='/recipes'>Recipes</HeaderButton>
          </li>
          <li>
           <HeaderButton to='/random'>Random</HeaderButton>
          </li>
        </ul>
      <button className='bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-1 px-2 mb-2 mt-6 mx-1 rounded-xl transition-colors'onClick={logout}>LOGOUT</button>
      </nav>
    </header>
  );
};

export default Header;