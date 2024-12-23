
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_logo}>
        <span className={styles.nav_span}>Fashion App</span>
      </div>
      <ul className={styles.Menu}>
        <li className={styles.link}>
          <Link to="./" className={styles.link}>Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="./Shop" className={styles.link}>Shop</Link>
        </li>
        <li className={styles.link}>
          <Link to="./Customer_care" className={styles.link}>Customer Care</Link>
        </li>
        <li className={styles.link}>
          <Link to="./AboutUs" className={styles.link}>About Us</Link>
        </li>
      </ul>
      <div className={styles.navIcons}>
        <button>Login</button>
        <button>Search</button>
        <button>Bag</button>
      </div>
    </nav>
  );
};

export default Navbar;



