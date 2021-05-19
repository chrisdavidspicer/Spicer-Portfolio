import styles from '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/ifo1asu.css"/>

      <div className={styles.pageContainer}>
        <Navbar />
        
        <Component {...pageProps} />
        
        <div className={styles.push}></div>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
