// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>Project Page 👋</h1>

      <p className={styles.extraGreen}>Here's a list of my projects!</p>
      <h2>Recent Projects:</h2>
      <div>
        <h3>Festival Disparity</h3>
        <h5>D3.js Data Visualization of Gender in Music Festivals</h5>
        <ul>
            <li>Studied D3.js to learn dataset mapping and animating datapoints in an SVG window with unique visualization.</li>
            <li>Incorporated vanilla Javascript to enable user interaction on the site through easily manipulated inputs.</li>
            <li>Used the Observable site and programming language to see data change in real-time and add transparency to the coding process.</li>
        </ul>
      </div>
      <Image 
        src='/Festival-Laptop.jpg'
        alt='trip tracker app'
        height={292}
        width={503}
      />
      <div>
        <h3>Trip Tracker</h3>
        <h5>a full MERN stack application allowing users to create a trip-planning board</h5>
        <ul>
            <li>Worked with a group of four to manage project scope, using Git collaboration to achieve a cohesive end goal.</li>
            <li>Built React components to efficiently render site information, providing the user with a logical website flow.</li>
            <li>Enabled user login with hashed encryption, employing RESTful routing to maintain trip planning details.</li>
            <li>Produced an in-depth schema in Mongo.</li>
        </ul>
      </div>
      <Image 
        src='/TripTracker-Laptop.jpg'
        alt='trip tracker app'
        height={292}
        width={503}
      />
      <div>
        <h3>The Cocktail Cabinet</h3>
        <h5>Web app utilizing EJS, Express, Sequelize, and Node.js to create a user cocktail profile.</h5>
        <ul>
            <li>Created a user login system, storing encrypted information in cookies and SQL.</li>
            <li>Utilized TheCocktailDB API to pull unique JSON information and objects.</li>
            <li>Coded the site through Sequelize, accessing specific routes focusing on User input pulled from PostgreSQL and the API, following RESTful routing</li>
            <li>Implemented Express to link the front-end user experience to the back-end database.</li>
        </ul>
      </div>
      <Image 
        src='/Cocktail-Laptop.jpg'
        alt='trip tracker app'
        height={292}
        width={503}
      />
      <div>
        <h3>Farkle!</h3>
        <h5>Web game built in vanilla JS for the dice game Farkle.</h5>
        <ul>
            <li>Developed complex game logic to code multiple game states in JavaScript based on a combination of user selection inputs and randomization.</li>
            <li>Linked visual representation of the game to JavasScript using DOM manipulation.</li>
        </ul>
      </div>
      <Image 
        src='/Farkle-Laptop.jpg'
        alt='trip tracker app'
        height={292}
        width={503}
      />
    </div>
  )
}