import React from 'react'
import styles from './projects.module.scss'

function Projects() {
  return (
    <div id='projects' className={styles.wrapper}>
        <div className={styles.content}>
            <p className={styles.title}>Byjus Future School Web Application</p>
            <p className={styles.date}>Aug 2021 - Present</p>
            <div className={styles.description}>
                <p>Byjus Future School is developed using NextJS</p>
                <p>I've established socket connection using socket-io, used event listeners in Web-socket for real-time communication between student and tutor.</p>
                <p>It has both server-side and client-side rendering pages.</p>
                <p>Application was built using ReactJS, NextJS, NodeJS, Redux, Saga</p>
            </div>
            <div style={{margin: '24px 0'}}>
                <p className={styles.title}>Toppr Codr Web Application</p>
                <p className={styles.date}>Sept 2020 - Dec 2020</p>
                <div className={styles.description}>
                    <p>Toppr-Codr is a web application for kids aged 6 - 18</p>
                    <p>Toppr-Doubts is developed using NextJS</p>
                    <p>I've established socket connection using socket-io, used event listeners in Web-socket for real-time communication between student and tutor.</p>
                    <p>Live one-to-one interface is made using Whereby api</p>
                    <p>It has both server-side and client-side rendering pages.</p>
                    <p>Application was built using ReactJS, NextJS, NodeJS, Redux, Saga</p>
                </div>
            </div>
            <p className={styles.title}>Toppr Main Web Application</p>
            <p className={styles.date}>Nov 2019 - Aug 2020</p>
            <div className={styles.description}>
                <p>Toppr-Doubts is considered as one of the key features of Toppr</p>
                <p>I've established socket connection using NodeJS and used event listeners in Web-socket for communication between student and tutor.</p>
                <p>It's made using both React class and functional based components including hooks and life-cycle components</p>
                <p>Once a session is complete, a review is gonna happen for each closed doubt and verified by the higher authority</p>
                <p>Used all three types of props passing... Parent, Store and Router</p>
                <p>Application was built using ReactJS, NodeJS, Redux, Saga</p>
            </div>
        </div>
        <div className={styles.logo}>Projects</div>
    </div>
  )
}

export default Projects