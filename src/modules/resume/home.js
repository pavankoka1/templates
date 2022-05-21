import React from 'react'
import { motion } from 'framer-motion'
import DP from 'assets/images/resume/dp.jpg'
import ZIGZAG from 'assets/images/resume/zigzag.png'
import HOGWARDS_LOGO from 'assets/images/resume/hogwards-logo.png'

import styles from './home.module.scss'

function Home() {
  return (
    <div id='home' className={styles.wrapper}>
        <img src={DP} alt='dp' className={styles.image} />
        <div className={styles.content}>
            <p className={styles.title}>Hello <br />I'm Pavan<br />Koka</p>
            <p className={styles.description}>Am web developer who is an expert in UI/UX development. For the past 3 years, have been designing and developing websites, using a keen eye for interactive design to develop pixel-perfect code that translates static design concepts into engaging digital experiences. Main areas of focus are in HTML/CSS (Sass), JavaScript, ReactJS and NextJS.</p>
        </div>
        <motion.img
          src={ZIGZAG} 
          className={styles.zigzag} 
          alt='zigzag'
          animate={{
            x: ['18%', '50%', '18%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            type: 'spring', 
            stiffness: 1,
            ease: 'easeOut',
          }}
        />
        <motion.img
          src={HOGWARDS_LOGO}
          className={styles.hogwards} 
          alt='hogwards'
          animate={{
            x: ['0%', '4%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            type: 'spring', 
            stiffness: 1,
            ease: 'easeOut',
            damping: 0,
          }}
        />
    </div>
  )
}

export default Home