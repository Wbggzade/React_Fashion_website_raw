import styles from './AboutUs.module.css'; // Import CSS module for AboutUs styling

const AboutUs = () => {
  return (
    <div className={styles.aboutSection}>
      {/* First Design Section - Image on the left, Text on the right */}
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src="./public/124-1246858_creative-about-us-hd-png-download.png" alt="About Us" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1>About Us</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum,
            eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque
            voluptates sit deleniti autem error eos totam nisi neque.
          </p>
          <div className={styles.skills}>
            <span>Web Design</span>
            <span>Photoshop &amp; Illustrator</span>
            <span>Coding</span>
          </div>
        </div>
      </div>

      {/* New Div Section with Bio Text */}
      <div className={styles.bioSection}>
        <p className={styles.bioText}>
          Born near Pristina, Kosovo’s capital, Teuta is one of nine children who grew up with humble beginnings.
          With a mother who focused on being a stay-at-home parent and a father who worked as a teacher, at an early age,
          she taught herself to create clothing from old garments and scrap pieces for her siblings and herself.
          She continued making pieces and wearing them through middle school and high school, garnering endless compliments
          and requests from her friends and siblings. She always had the dream in mind to one day open her own boutique selling her handmade designs.
        </p>
      </div>

      {/* Second Design Section - Reverse: Image on the right, Text on the left */}
      <div className={styles.innerContainerReverse}>
        <div className={styles.textContainerReverse}>
          <h1>About Us</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum,
            eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque
            voluptates sit deleniti autem error eos totam nisi neque.
          </p>
          <div className={styles.skills}>
            <span>Web Design</span>
            <span>Photoshop &amp; Illustrator</span>
            <span>Coding</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="./public/124-1246858_creative-about-us-hd-png-download.png" alt="About Us" className={styles.image} />
        </div>
      </div>

      {/* New Div Section with Bio Text (same as above) */}
      <div className={styles.bioSection}>
        <p className={styles.bioText}>
          Born near Pristina, Kosovo’s capital, Teuta is one of nine children who grew up with humble beginnings.
          With a mother who focused on being a stay-at-home parent and a father who worked as a teacher, at an early age,
          she taught herself to create clothing from old garments and scrap pieces for her siblings and herself.
          She continued making pieces and wearing them through middle school and high school, garnering endless compliments
          and requests from her friends and siblings. She always had the dream in mind to one day open her own boutique selling her handmade designs.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;

