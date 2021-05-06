// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>Project Page 👋</h1>

      <p className={styles.extraGreen}>Here's a list of my projects!</p>
      {/* loading an image locally */}
    </div>
  )
}