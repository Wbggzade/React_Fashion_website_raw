
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Fashion App. All rights reserved.</p>
      <div className={styles.social_links}>
        <a href="#!" className={styles.social_icon}>Facebook</a>
        <a href="#!" className={styles.social_icon}>Instagram</a>
        <a href="#!" className={styles.social_icon}>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;