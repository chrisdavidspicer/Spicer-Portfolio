// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'
var React = require('react')
var { SocialIcon } = require('react-social-icons')


export default function About() {
  return (
    <div>
      <h1>Contact Page 👋</h1>

      <p className={styles.extraGreen}>Reach out, I'd love to chat with you!</p>
      <SocialIcon url="https://linkedin.com/in/chrisdavidspicer" bgColor="#708090" />
      <SocialIcon url="https://www.formalparka.com" bgColor="#708090" />
      <SocialIcon url="https://github.com/chrisdavidspicer" bgColor="#708090" />
      <SocialIcon url="mailto:chrisdavidspicer@gmail.com" bgColor="#708090" />
    </div>
  )
}