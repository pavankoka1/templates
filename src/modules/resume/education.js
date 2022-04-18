import React from 'react'
import styles from './education.module.scss'

function Education() {
  return (
    <div id='education' className={styles.wrapper}>
        <div className={styles.content}>
            <p className={styles.title}>IIIT Gwalior</p>
            <p className={styles.date}>Jun 2014 - May 2019</p>
            <div className={styles.description}>
                <p>A+ Grade in core subjects like C, OOPS, DS, Algorithms.</p>
                <p>Developed and hosted websites for college fests Aurora2016, Infotsav2018.</p>
                <p>Won 6 gold medals, 2 silver medals in Chess and served as captain for 4years.</p>
                <p>Won 3 gold medals, 3 silver medals in Table Tennis.</p>
            </div>
            <div style={{margin: '24px 0'}}>
                <p className={styles.title}>Narayana Junior College</p>
                <p className={styles.date}>Apr 2012 - May 2014</p>
                <div className={styles.description}>
                    <p>Graduated with 98.7% in board exams.</p>
                    <p>State Rank 1912 in EAMCET 2014 - AP</p>
                    <p>All India Rand 19,712 in JEE-Mains exam 2014 - ALL INDIA EXAM</p>
                    <p>All India Rand 14,523 in JEE-Advanced exam 2014 - ALL INDIA EXAM</p>
                </div>
            </div>
            <p className={styles.title}>Narayana Junior College</p>
            <p className={styles.date}>Jun 2007 - Mar 2012</p>
            <div className={styles.description}>
                <p>10th CGPA - 9.0 under Secondary School Certificate Board</p>
                <p>9th rank in Science Olympiad Foundation in 2010</p>
                <p>2nd rank in National Science Olympiad in 2010</p>
                <p>6th rank in National Science Olympiad in 2011</p>
                <p>5th rank in National Science Olympiad in 2012</p>
                <p>50th rank in Science Olympiad Foundation in 2012</p>
            </div>
        </div>
        <div className={styles.logo}>Education</div>
    </div>
  )
}

export default Education