// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'
const React = require('react')
const { SocialIcon } = require('react-social-icons')


export default function Contact() {
  return (
    <div>
      <h1>Reach Out</h1>

      <p className={styles.extraGreen}>Reach out, I'd love to chat with you!</p>

      <div>
        <SocialIcon url="https://linkedin.com/in/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#009999" />
        <p>Connect on LinkedIn</p>
      </div>
      <div>
        <SocialIcon url="https://www.formalparka.com" target="_blank" rel="noreferrer noopener" bgColor="#ff9999" />
        <p>Formal Parka (design website)</p>
      </div>
      <div>
        <SocialIcon url="https://github.com/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#009999" />
        <p>Github Portfolio</p>
      </div>
      <div>
        <SocialIcon url="mailto:chrisdavidspicer@gmail.com" target="_blank" rel="noreferrer noopener" bgColor="#ff9999" />
        <p>Get in touch through email</p>
      </div>
    </div>
  )
}