import styles from "./Home.module.css";
import Banner from '../Components/Banner/Banner.jsx';
import GridCards from "../Components/Grid_Cards/GridCards.jsx";
import CarouselSlider from "../Components/Carousel/CarouselSlider.jsx";

const Home = () => {
  return  <div className={styles.home}>
  <h1>Welcome to the Fashion App</h1>
  <p>This is some sample content on the homepage.</p>
  
  <Banner />
  <GridCards />
  <CarouselSlider />
</div>;
};

export default Home;
