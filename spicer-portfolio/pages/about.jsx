// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>About Page 👋</h1>

      <p className={styles.extraGreen}>A Variety of Experience, A Unique Approach</p>


    </div>
  )
}