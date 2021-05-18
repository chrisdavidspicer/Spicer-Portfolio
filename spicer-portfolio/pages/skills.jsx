// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.headerImg}>
        <Image 
              src='/headers/KnowledgeAndTools.png'
              alt='Knowledge and tools Text'
              height={100}
              width={492}
        />
        {/* <h1>Knowledge & Tools</h1> */}

        {/* <p>My areas of experience.</p> */}

      </div>
      <div>
        <h4>Languages</h4>
        <div className={styles.allIcons}>
          <div className={styles.socialIcon}>
            <Image 
            src='/HTML.png'
            alt='HTML logo'
            height={50}
            width={50}
            />
            <p>HTML5</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/CSS.png'
            alt='CSS logo'
            height={50}
            width={50}
            />
            <p>CSS3</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Javascript.png'
            alt='Javascript logo'
            height={50}
            width={50}
            />
            <p>JavaScript</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Python.png'
            alt='Python logo'
            height={50}
            width={50}
            />
            <p>Python</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Swift.png'
            alt='Swift logo'
            height={50}
            width={50}
            />
            <p>Swift</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Libraries and Frameworks</h4>
        <div className={styles.allIcons}>
          <div className={styles.socialIcon}>
            <Image 
            src='/React.png'
            alt='React logo'
            height={50}
            width={50}
            />
            <p>React.js</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Node.png'
            alt='Node logo'
            height={50}
            width={50}
            />
            <p>Node.js</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Express.png'
            alt='Express logo'
            height={50}
            width={50}
            />
            <p>Express.js</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/D3.png'
            alt='D3 logo'
            height={50}
            width={50}
            />
            <p>D3.js</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Next.png'
            alt='Next logo'
            height={50}
            width={50}
            />
            <p>Next.js</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Database</h4>
        <div className={styles.allIcons}>
          <div className={styles.socialIcon}>
            <Image 
            src='/PostgreSQL.png'
            alt='PostgreSQL logo'
            height={50}
            width={50}
            />
            <p>PostgreSQL</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Sequelize.png'
            alt='Sequelize logo'
            height={50}
            width={50}
            />
            <p>Sequelize</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/MongoPink.png'
            alt='MongoDB logo'
            height={50}
            width={50}
            />
            <p>MongoDB</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Mongoose.png'
            alt='Mongoose logo'
            height={50}
            width={50}
            />
            <p>Mongoose</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Other</h4>
        <div className={styles.allIcons}>
          <div className={styles.socialIcon}>
            <Image 
            src='/Premiere.png'
            alt='Premiere logo'
            height={50}
            width={50}
            />
            <p>Adobe CC - Premiere</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Photoshop.png'
            alt='Photoshop logo'
            height={50}
            width={50}
            />
            <p>Adobe CC - Photoshop</p>
          </div>
          <div className={styles.socialIcon}>
            <Image 
            src='/Logic.png'
            alt='Logic logo'
            height={50}
            width={50}
            />
            <p>Apple - Logic Pro X</p>
          </div>
        </div>
      </div>
    </div>
  )
}