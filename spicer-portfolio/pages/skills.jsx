// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>Skills Page 👋</h1>

      <p className={styles.extraGreen}>These are my areas of experience.</p>
      
    </div>
  )
}