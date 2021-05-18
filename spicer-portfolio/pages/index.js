import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Spicer - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {/* meta tag seo */}
      </Head>
      <div className={styles.headerImg}>
        <Image 
            src='/headers/ChrisSpicer.png'
            alt='Chris Spicer Text'
            height={100}
            width={388}
        />
      {/* <h1>Chris Spicer</h1> */}
      
      <div>
        <Image 
        src='/Chris.jpg'
        alt='Chris Spicer picture'
        height={400}
        width={300}
        />
      </div>
      </div>
      
      <p>Software engineer focused on creativity and design.</p>
    </div>
  )
}
