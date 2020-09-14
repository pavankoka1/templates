import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';

function FramerMotion() {

    const [positions, setPositions] = useState([{ x: 50, y: 50 }]);

    // useEffect(() => {
    //     setInterval(() => {
    //         handleClick();
    //     }, 1000);
    // }, [])

    function handleClick() {
        const positionsArr = [];
        for (let i = 0; i < 10; i++) {
            const xPos = getRandom();
            const yPos = getRandom();
            positionsArr.push({ x: xPos, y: yPos });
            positionsArr.push({ x: 100 - xPos, y: yPos });
        }
        setPositions(positionsArr);
    }

    function getRandom() {
        return Math.floor(Math.random() * 100);
    }

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <motion.p
                className={styles.title}
                whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 8px rgb(255, 255, 255)',
                }}
            >
                Pavan Koka
            </motion.p>
            <div className={styles.dotsContainer}>
                {
                    positions.map(position => (
                        <motion.p
                            className={styles.dot}
                            animate={{
                                x: `${position.x}vw`,
                                y: `${position.y}vh`,
                            }}
                            transition={{
                                // duration: 0.2,
                                type: 'spring',
                                stiffness: 150,
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FramerMotion;
