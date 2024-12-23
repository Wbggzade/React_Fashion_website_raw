
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Styles from './Carousel.module.css';






const CarouselSlider = () =>{

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



   
  

    return(
    <Carousel responsive={responsive}>
    <div className={Styles.card}>
      <h2>Item 1</h2>
      <button>View</button>
    </div>
    <div className={Styles.card} ><h2>
     Item 2
    </h2>
    <button>View</button>
    </div>
    <div className={Styles.card}><h2>Item 3</h2>
    <button>View</button>
    </div>
    <div className={Styles.card}><h2>Item 5</h2>
    <button>View</button>
    </div>
    </Carousel>


    );
  };



export default CarouselSlider ;
