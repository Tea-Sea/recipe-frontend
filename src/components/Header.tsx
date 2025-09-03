import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import logo from './../../public/TestLogo.png'

const Header: React.FC = () => {
  return (
    <header className='bg-blue-200 h-15 px-3'>
      <nav className='flex h-full items-end'>
        <Link to="/" className='items-center'>
          <img src={logo} alt='CBA CookBook' width="40" height='40'/>
        </Link>
        <ul className='flex flex-1 justify-center space-x-6 pb-2'>
          <li>
           <HeaderButton to='/'>Home</HeaderButton>
          </li>
          <li>
            <HeaderButton to='/recipes'>Recipes</HeaderButton>
          </li>
          <li>
            <HeaderButton to="/error"> Error</HeaderButton>
          </li>
          <li>
            <HeaderButton to="/error"> TESTING</HeaderButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;