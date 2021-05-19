// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Skills() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <div className={styles.headerImg}>
          <Image 
                src='/headers/block/knowledge.png'
                alt='Knowledge and tools Text'
                height={50}
                width={701}
          />
        </div>

        <div>
          <h4>Languages</h4>
          <div className={styles.allIcons}>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/HTML.png'
              alt='HTML logo'
              height={50}
              width={50}
              />
              <p>HTML5</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/CSS.png'
              alt='CSS logo'
              height={50}
              width={50}
              />
              <p>CSS3</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Javascript.png'
              alt='Javascript logo'
              height={50}
              width={50}
              />
              <p>JavaScript</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Python.png'
              alt='Python logo'
              height={50}
              width={50}
              />
              <p>Python</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Swift.png'
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
              src='/logos/React.png'
              alt='React logo'
              height={50}
              width={50}
              />
              <p>React.js</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Node.png'
              alt='Node logo'
              height={50}
              width={50}
              />
              <p>Node.js</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Express.png'
              alt='Express logo'
              height={50}
              width={50}
              />
              <p>Express.js</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/D3.png'
              alt='D3 logo'
              height={50}
              width={50}
              />
              <p>D3.js</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Next.png'
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
              src='/logos/PostgreSQL.png'
              alt='PostgreSQL logo'
              height={50}
              width={50}
              />
              <p>PostgreSQL</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Sequelize.png'
              alt='Sequelize logo'
              height={50}
              width={50}
              />
              <p>Sequelize</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/MongoPink.png'
              alt='MongoDB logo'
              height={50}
              width={50}
              />
              <p>MongoDB</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Mongoose.png'
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
              src='/logos/Premiere.png'
              alt='Premiere logo'
              height={50}
              width={50}
              />
              <p>Adobe CC - Premiere</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Photoshop.png'
              alt='Photoshop logo'
              height={50}
              width={50}
              />
              <p>Adobe CC - Photoshop</p>
            </div>
            <div className={styles.socialIcon}>
              <Image 
              src='/logos/Logic.png'
              alt='Logic logo'
              height={50}
              width={50}
              />
              <p>Apple - Logic Pro X</p>
            </div>

          </div>
          
        </div>
      
      </div>
    
    </div>
  )
}