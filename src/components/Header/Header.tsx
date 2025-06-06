import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          RECIPE BOOK PLACEHOLDER
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" className={styles.navItem}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/error" className={styles.navItem}>
              Error
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
