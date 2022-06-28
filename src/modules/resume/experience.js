import React, { useState } from 'react'
import { Zoom } from '@mui/material'
import styles from './experience.module.scss'

const experience = [
    {
        title: 'Toppr Pvt Ltd',
        role: 'Senior Software Engineer',
        date: 'Aug 2021 - Present',
        description: [
            'I was re‐hired by Toppr due to my past work experience over there by offering a Senior Software Engineer Role.',
            "I'm currently building a website from scratch using NextJS which merges top features of byjus and toppr into one Application.",
            "I've dealt with Authentication, Redirections, Login flow, Repo setup, Styling options, Redux, Reducers, Sagas, Static variables, Helpers, server file, interceptors, proxy configuration for the Byjus Future School Web Application.",
            "I've worked on Webview for Byju's future school app which squashes top features of byjus and toppr under one roof using Swig Templates and MathJax for both IOS and Android.",
        ],
    },
    {
        title: 'Innovaccer',
        role: 'SDE - I',
        date: 'Dec 2020 - Aug 2021',
        description: [
            "I've developed few pages on client side using React, Redux and Thunks.",
            "I've learned to use Typescript and implemented in all the repositories.",
            "Mostly I've dealt with bugs, small features, add-ons to the stable version of the builds.",
        ],
    },
    {
        title: 'Toppr Pvt Ltd',
        role: 'Software Engineer',
        date: 'Jun 2007 - Mar 2012',
        description: [
            "I've developed real-time communication between tutor and student using sockets which is called as toppr-doubts.",
            "I've worked on all webview screens of Toppr-Ask using Swig Templates and MathJax to render the html wrapped content.",
            'Toppr-Ask is an application that attracts traffic and using server side rending for effective googlebot crawling.',
            "I've worked in developing multiple pages, search results page, question upload ... etc.",
        ],
    },
]

function Experience() {
    const [selected, setSelected] = useState(-1)

    return (
        <div id="experience" className={styles.wrapper}>
            <div className={styles.logo}>Experience</div>
            <div className={styles.content}>
                {experience.map((card, id) => (
                    <div
                        className={styles.item}
                        key={`experince-card-${id}`}
                        onMouseEnter={() => setSelected(id)}
                        onMouseLeave={() => setSelected(-1)}
                    >
                        {card.role}
                        <Zoom in={selected === id}>
                            <div className={styles.card}>
                                <p className={styles.title}>{card.title}</p>
                                <p className={styles.role}>{card.role}</p>
                                <p className={styles.date}>{card.date}</p>
                                <div className={styles.description}>
                                    {card.description.map((point) => (
                                        <p>{point}</p>
                                    ))}
                                </div>
                            </div>
                        </Zoom>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
