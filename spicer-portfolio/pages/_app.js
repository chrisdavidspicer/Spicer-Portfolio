import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/ifo1asu.css"/>


      <Navbar />
      
      <Component {...pageProps} />
      {/* footer here */}
    </>
  )
}

export default MyApp
