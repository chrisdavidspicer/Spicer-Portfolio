// built in link component
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/about'>
        <a>About</a>
      </Link>

      <Link href='/skills'>
        <a>Skills</a>
      </Link>

      <Link href='/projects'>
        <a>Projects</a>
      </Link>

      <Link href='/contact'>
        <a>Contact</a>
      </Link>

      <Link href='/playlist'>
        <a>Playlist</a>
      </Link>
    </nav>
  )
}