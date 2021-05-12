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

      <div>
        <SocialIcon url="https://linkedin.com/in/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#708090" />
        <p>Connect with me on LinkedIn</p>
      </div>
      <div>
        <SocialIcon url="https://www.formalparka.com" target="_blank" rel="noreferrer noopener" bgColor="#708090" />
        <p>My design website, Formal Parka</p>
      </div>
      <div>
        <SocialIcon url="https://github.com/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#708090" />
        <p>Github Portfolio</p>
      </div>
      <div>
        <SocialIcon url="mailto:chrisdavidspicer@gmail.com" target="_blank" rel="noreferrer noopener" bgColor="#708090" />
        <p>Send me an email</p>
      </div>
    </div>
  )
}