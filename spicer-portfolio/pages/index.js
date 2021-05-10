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
        src='https://app.box.com/shared/static/f4smabc114afiwpdvscbfl5oor827mbp.jpg'
        alt='a magnificent creature'
        height={400}
        width={300}
      />
      <p>Software engineer focused on creativity and design.</p>
    </div>
  )
}
