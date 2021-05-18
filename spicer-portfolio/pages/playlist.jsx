// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Playlist() {
  return (
    <div>
        <div className={styles.headerImg}>
            <Image 
                src='/headers/LatestHits.png'
                alt='Latest Hits Text'
                height={100}
                width={404}
            />
            {/* <h1>Latest Hits</h1> */}

            <p>Recent songs I've coded to</p>
        </div>
        <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" height="450" style={{"width": "100%", "max-width": "660px", "overflow": "hidden", "background": "transparent"}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/full-mood/pl.u-9N9L24WuvxNM8"></iframe>

    </div>
  )
}

