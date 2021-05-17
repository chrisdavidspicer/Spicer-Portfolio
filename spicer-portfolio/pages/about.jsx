// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <h1>Learn More</h1>

      <p className={styles.extraGreen}>A Variety of Experience, A Unique Approach</p>
      <p>I am a design-focused Full-Stack developer that is looking for a new opportunity in engineering work within the creative industry. My experiences as an entrepreneur, a designer, and a musician give me a broad perspective that connects communication, creativity, and technology. Solving problems with a novel approach really interests me, especially when I can be a part of an inclusive project and team. I’m eager to learn methods to bring great ideas to life, to build projects that help bridge gaps between groups, and learn what I can from teammates.</p>

    </div>
  )
}