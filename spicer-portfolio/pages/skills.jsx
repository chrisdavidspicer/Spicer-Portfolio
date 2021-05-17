// import the image component from nxt
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Skills() {
  return (
    <div>
      <h1>Knowledge & Tools</h1>

      <p className={styles.extra}>These are my areas of experience.</p>
      <div>
        <h4>Languages</h4>
        <p>HTML, CSS, Javascript, Python, Swift</p>
        <Image 
        src='/HTML.png'
        alt='HTML logo'
        height={50}
        width={50}
        />
        <Image 
        src='/CSS.png'
        alt='CSS logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Javascript.png'
        alt='Javascript logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Python.png'
        alt='Python logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Swift.png'
        alt='Swift logo'
        height={50}
        width={50}
        />
      </div>
      <div>
        <h4>Libraries and Frameworks</h4>
        <p>React.js, Node.js, Express.js, D3.js</p>
        <Image 
        src='/React.png'
        alt='React logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Node.png'
        alt='Node logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Express.png'
        alt='Express logo'
        height={50}
        width={50}
        />
        <Image 
        src='/D3.png'
        alt='D3 logo'
        height={50}
        width={50}
        />
      </div>
      <div>
        <h4>Database</h4>
        <p>PostgreSQL, Sequelize, MongoDB, Mongoose</p>
        <Image 
        src='/PostgreSQL.png'
        alt='PostgreSQL logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Sequelize.png'
        alt='Sequelize logo'
        height={50}
        width={50}
        />
        <Image 
        src='/MongoPink.png'
        alt='Mongo logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Mongoose.png'
        alt='Mongoose logo'
        height={50}
        width={50}
        />
      </div>
      <div>
        <h4>Other</h4>
        <p>Adobe CC - Premiere & Photoshop, Apple Logic Pro X</p>
        <Image 
        src='/Premiere.png'
        alt='Premiere logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Photoshop.png'
        alt='Photoshop logo'
        height={50}
        width={50}
        />
        <Image 
        src='/Logic.png'
        alt='Logic logo'
        height={50}
        width={50}
        />
      </div>
    </div>
  )
}