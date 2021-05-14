// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>Skills Page 👋</h1>

      <p className={styles.extra}>These are my areas of experience.</p>
      <div>
        <h4>Languages</h4>
        <p>HTML, CSS, Javascript, Python, Swift</p>
      </div>
      <div>
        <h4>Libraries and Frameworks</h4>
        <p>React.js, Node.js, Express.js, D3.js</p>
      </div>
      <div>
        <h4>Database</h4>
        <p>PostgreSQL, Sequelize, ORM, MongoDB, Mongoose, ODM</p>
      </div>
      <div>
        <h4>Other</h4>
        <p>Adobe CC - Photoshop & Premiere, Apple Logic Pro X</p>
      </div>
    </div>
  )
}