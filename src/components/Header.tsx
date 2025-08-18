import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header: React.FC = () => {
  return (
    <header className='bg-blue-200'>
      <nav>
        <Link to="/" className='left-0 font-bold'>
          RECIPE BOOK PLACEHOLDER
        </Link>
        <ul className='justify-center inline-flex mr-14 mt-10 space-x-6 w-full uppercase text-base font-semibold text-black'>
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