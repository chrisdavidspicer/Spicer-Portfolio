// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'


export default function About() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <div className={styles.headerImg}>
          <Image 
                src='/headers/block/learn.png'
                alt='Learn More Text'
                height={50}
                width={435}
          />
          <p>A Variety of Experience, A Unique Approach</p>
          <Image
            src='/drawings/drawings.png'
            alt='drawing of drum, fruit, and computer'
            height={150}
            width={421}
          />
        </div>

        <p className={styles.paragraph}>I am a design-focused Full-Stack developer that is looking for a new opportunity in engineering work within the creative industry. My experiences as a musician, an entrepreneur (previously owning a fresh fruit market), and a designer give me a broad perspective that connects communication, creativity, and technology. Solving problems with a novel approach really interests me, especially when I can be a part of an inclusive project and team. I’m eager to learn methods to bring great ideas to life, to build projects that help bridge gaps between groups, and learn what I can from teammates.</p>
        <a href="https://app.box.com/shared/static/4wqk1w08rue01snfdnwqm01vu3gtsnbz.pdf" target="_blank" className={styles.resumeButton}>Download Resume</a>
      </div>
    </div>
  )
}