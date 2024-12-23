
import styles from "./Grid_Cards.module.css" ;


   const GridCards = () => {

    return (
        
        
          <div className={styles.container}>
            <div className={styles.cards}>
              <div className={styles.card_item}>
                <div className={styles.card_image}>
                  
                </div>
                <div className={styles.card_info}>
                  <h2 className={styles.card_title}>Exploring around</h2>
                  <p className={styles.card_intro}>
                    
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.cards}>
              <div className={styles.card_item}>
                <div className={styles.card_image}>
                  
                </div>
                <div className={styles.card_info}>
                  <h2 className={styles.card_title}>A new trail </h2>
                  <p className={styles.card_intro}>
                    
                  </p>
                </div>
              </div>
                </div>
                <div className={styles.cards}>
              <div className={styles.card_item}>
                <div className={styles.card_image}>
                  
                </div>
                <div className={styles.card_info}>
                  <h2 className={styles.card_title}>Discovery </h2>
                  <p className={styles.card_intro}></p>
                </div>
                </div>
                </div>
                </div>
    );
   };




export default GridCards ;
