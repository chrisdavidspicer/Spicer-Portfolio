// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Projects() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <div className={styles.headerImg}>
          <Image 
                src='/headers/block/work.png'
                alt='Interesting Work Text'
                height={50}
                width={676}
          />
        </div>

        <div className={styles.projectCard}>
          <a href="https://chrisdavidspicer.github.io/p4-FestivalDisparity/" target="_blank">
            <h3>Festival Disparity</h3>
          </a>
          
          <div>
            <h5>D3.js Data Visualization of Gender in Music Festivals</h5>
            <a href="https://chrisdavidspicer.github.io/p4-FestivalDisparity/" target="_blank">
              <Image 
                src='/projects/Festival-Laptop.png'
                alt='Festival app'
                height={275}
                width={473}
              />
            </a>
            <p className={styles.paragraph} >I used the Observable site and the D3.js framework to map a dataset to an interactive SVG window, with unique data visualization. More info at <a href="https://www.bookmorewomen.com" target="_blank">BookMoreWomen.com</a></p>
          </div>

          <hr />
        </div>


        <div className={styles.projectCard}>
          <a href="https://triptracker.netlify.app/" target="_blank">
            <h3>Trip Tracker</h3>
          </a>
          <h5>A full MERN stack application for user-created trip-planning boards</h5>
          <a href="https://triptracker.netlify.app/" target="_blank">
            <Image 
              src='/projects/TripTracker-Laptop.png'
              alt='Trip Tracker app'
              height={275}
              width={473}
            />
          </a>
          <p className={styles.paragraph}>Our team of four worked together to create a React app allowing a user to login and access their trip information, utilizing version control and RESTful routing.</p>
          <hr />
        </div>

        <div className={styles.projectCard}>
          <a href="https://cocktail-cabinet-project2.herokuapp.com/" target="_blank">
            <h3>The Cocktail Cabinet</h3>
          </a>
          <h5>Web app utilizing EJS, Express, Sequelize, and Node.js to create a user cocktail profile.</h5>
          <a href="https://cocktail-cabinet-project2.herokuapp.com/" target="_blank">
            <Image 
              src='/projects/Cocktail-Laptop.png'
              alt='Cocktail app'
              height={275}
              width={473}
            />
          </a>
          <p className={styles.paragraph} >The Cocktail Cabinet is a full stack app, working with TheCocktailDB API to display unique cocktails and recipes. It uses a PostgreSQL database on the backend to store user preferences and hashed passwords.</p>
          <hr />
        </div>

        <div className={styles.projectCard}>
          <a href="https://chrisdavidspicer.github.io/" target="_blank">
            <h3>Farkle!</h3>
          </a>
          <h5>Web game built in vanilla JS for the dice game Farkle.</h5>
          <a href="https://chrisdavidspicer.github.io/" target="_blank">
            <Image 
              src='/projects/Farkle-Laptop.png'
              alt='Farkle app'
              height={275}
              width={473}
            />
          </a>  
          <p className={styles.paragraph} >This game was built from the ground up, developing complex game logic in JavaScript based on a combination of user-selected inputs and randomization.</p>
        </div>
      </div>
    </div>
  )
}