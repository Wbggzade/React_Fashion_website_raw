
import styles from './Banner.module.css';


const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.quote_box}>
        <span className={styles.quote}>Anything here</span>
         <button onClick={()=> alert('Button Clicked')}>Click me </button>


      </div>
    </div>
  );
};

export default Banner;

