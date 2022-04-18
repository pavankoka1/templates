import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hamburger from 'shared/ResumeHamburger'
import styles from './header.module.scss'

const links = [
    {
        id: 'Home',
        href: '#home'
    },
    {
        id: 'Education',
        href: '#education'
    },
    {
        id: 'Experience',
        href: '#experience'
    },
    {
        id: 'Projects',
        href: '#projects'
    }
]

function Header() {
    const [showHeader, setShowHeader] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <Hamburger handleHeaderToggle={() => setShowHeader(flag => !flag)} />
            </div>
            <motion.div
                className={styles.links}
                animate={{
                    y: showHeader ? 0 : -78,
                }}
                transition={{
                    duration: 0.4,
                }}
            >
                {links.map(link => (
                    <a id={link.id} href={link.href} className={styles.link}>{link.id}</a>
                ))}
            </motion.div>
        </div>
    )
}

export default Header