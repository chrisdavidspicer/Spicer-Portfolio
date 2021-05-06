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

      <Image 
        src='https://app.box.com/shared/static/f4smabc114afiwpdvscbfl5oor827mbp.jpg'
        alt='a magnificent creature'
        height={400}
        width={300}
      />
      <h1>This is the homepage of my portfolio! 👋</h1>
    </div>
  )
}
