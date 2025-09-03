import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header: React.FC = () => {
  return (
    <header className='bg-blue-200'>
      <nav className='flex content-center justify-center relative mb-2 mt-5'>
        <Link to="/" className='absolute left-0 font-bold'>
          CBACookbook
        </Link>
        <ul className='justify-center flex space-x-6 text-base font-semibold text-black'>
          <li>
           <HeaderButton to='/'>Home</HeaderButton>
          </li>
          <li>
            <HeaderButton to='/recipes'>Recipes</HeaderButton>
          </li>
          <li>
            <HeaderButton to="/error"> Error</HeaderButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;