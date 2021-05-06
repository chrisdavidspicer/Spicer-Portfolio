// built in link component
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
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
    </nav>
  )
}