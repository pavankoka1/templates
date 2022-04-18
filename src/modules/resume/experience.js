import React from 'react'
import styles from './experience.module.scss'

function Experience() {
  return (
    <div id='experience' className={styles.wrapper}>
        <div className={styles.logo}>Experience</div>
        <div className={styles.content}>
            <p className={styles.title}>Toppr Pvt Ltd</p>
            <p className={styles.role}>SENIOR SOFTWARE ENGINEER</p>
            <p className={styles.date}>Aug 2021 - Present</p>
            <div className={styles.description}>
                <p>I was re‐hired by Toppr due to my past work experience over there by offering a Senior Software Engineer Role.</p>
                <p>I'm currently building a website from scratch using NextJS which merges top features of byjus and toppr into one Application.</p>
                <p>I've dealt with Authentication, Redirections, Login flow, Repo setup, Styling options, Redux, Reducers, Sagas, Static variables, Helpers, server file, interceptors, proxy configuration for the Byjus Future School Web Application.</p>
                <p>I've worked on Webview for Byju's future school app which squashes top features of byjus and toppr under one roof using Swig Templates and MathJax for both IOS and Android.</p>
            </div>
            <div style={{margin: '24px 0'}}>
                <p className={styles.title}>Innovaccer</p>
                <p className={styles.role}>SDE - I</p>
                <p className={styles.date}>Dec 2020 - Aug 2021</p>
                <div className={styles.description}>
                    <p>I've developed few pages on client side using React, Redux and Thunks.</p>
                    <p>I've learned to use Typescript and implemented in all the repositories.</p>
                    <p>Mostly I've dealt with bugs, small features, add-ons to the stable version of the builds.</p>
                </div>
            </div>
            <p className={styles.title}>Toppr Pvt Ltd</p>
            <p className={styles.role}>Software Engineer</p>
            <p className={styles.date}>Jun 2007 - Mar 2012</p>
            <div className={styles.description}>
                <p>I've developed real-time communication between tutor and student using sockets which is called as toppr-doubts.</p>
                <p>I've worked on all webview screens of Toppr-Ask using Swig Templates and MathJax to render the html wrapped content.</p>
                <p>Toppr-Ask is an application that attracts traffic and using server side rending for effective googlebot crawling.</p>
                <p>I've worked in developing multiple pages, search results page, question upload ... etc.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience