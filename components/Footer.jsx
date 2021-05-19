// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

const React = require('react')
const { SocialIcon } = require('react-social-icons')

export default function Footer() {
  return (
      <div className={styles.iconFooter}>
        <hr />
        <div className={styles.footerIcons}>
        
            <div className={styles.socialIcon}>
            <SocialIcon url="https://linkedin.com/in/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#009999" style={{ height: 35, width: 35 }} />
            </div>

            <div className={styles.socialIcon}>
            <SocialIcon url="mailto:chrisdavidspicer@gmail.com" target="_blank" rel="noreferrer noopener" bgColor="#ff9999" style={{ height: 35, width: 35 }} />
            </div>

            <div className={styles.socialIcon}>
            <SocialIcon url="https://github.com/chrisdavidspicer" target="_blank" rel="noreferrer noopener" bgColor="#009999" style={{ height: 35, width: 35 }} />
            </div>

        </div>
    </div>
  )
}