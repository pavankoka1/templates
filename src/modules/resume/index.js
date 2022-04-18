import React from 'react'

import Header from './header'
import Home from './home'
import Education from './education'
import Experience from './experience'
import Projects from './projects'

import styles from './index.module.scss';

function Resume() {
  return (
    <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
            {/* <p className={styles.header}></p> */}
            <Home />
            <Education />
            <Experience />
            <Projects />
        </div>
    </div>
  )
}

export default Resume