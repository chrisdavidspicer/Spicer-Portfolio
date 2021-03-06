// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'
const React = require('react')
const { SocialIcon } = require('react-social-icons')

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <div className={styles.headerImg}>
          <Image className={styles.headerImg}
                src='/headers/block/reach.png'
                alt='Reach Out Text'
                height={50}
                width={373}
          />
          <p>I'd love to chat with you, let's connect!</p>
        </div>
        <div className={styles.allIcons}>
          <div className={styles.socialIcon}>
            <SocialIcon url="https://linkedin.com/in/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#009999" />
            <p>LinkedIn</p>
          </div>
          
          <div className={styles.socialIcon}>
            <SocialIcon url="https://www.formalparka.com" target="_blank" rel="noreferrer noopener" bgColor="#ff9999"  />
            <p>Design Site</p>
          </div>

          <div className={styles.socialIcon}>
            <SocialIcon url="https://github.com/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#009999" />
            <p>Github</p>
          </div>

          <div className={styles.socialIcon}>
            <SocialIcon url="mailto:chrisdavidspicer@gmail.com" target="_blank" rel="noreferrer noopener" bgColor="#ff9999" />
            <p>Email</p>
          </div>

        </div>

      </div>

    </div>
    
  )
}