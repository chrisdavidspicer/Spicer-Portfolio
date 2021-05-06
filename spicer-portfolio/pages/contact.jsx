// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>Contact Page 👋</h1>

      <p className={styles.extraGreen}>Reach out, I'd love to chat with you!</p>
      {/* loading an image locally */}
    </div>
  )
}