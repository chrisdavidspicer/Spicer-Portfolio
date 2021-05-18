// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Playlist() {
  return (
    <div>
      <h1>Latest Hits</h1>

      <p className={styles.extraGreen}>Some recent songs I've coded to</p>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" style={{"width": "100%", "max-width": "660px", "overflow": "hidden", "background": "transparent"}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/full-mood/pl.u-9N9L24WuvxNM8"></iframe>

    </div>
  )
}

