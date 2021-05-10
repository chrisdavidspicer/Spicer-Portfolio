import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Spicer - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {/* meta tag seo */}
      </Head>
      <h1>Chris Spicer</h1>
      <Image 
        src='/Chris.jpg'
        alt='Chris Spicer picture'
        height={400}
        width={300}
      />
      <p>Software engineer focused on creativity and design.</p>
    </div>
  )
}
