import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          RECIPE BOOK PLACEHOLDER
        </Link>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/error">
              Error
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;