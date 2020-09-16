import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Circles from './circles';
import styles from './dots.module.scss';

const width = window.innerWidth;
const height = window.innerHeight;
const initialX = width / 2 - 5;
const initialY = height / 2 - 5;
const formation = [
    {
        x: initialX - 20,
        y: initialY,
    },
    {
        x: initialX - 20,
        y: initialY - 10,
    },
    {
        x: initialX - 20,
        y: initialY - 20,
    },
    {
        x: initialX - 20,
        y: initialY - 30,
    },
    {
        x: initialX - 20,
        y: initialY - 40,
    },
    {
        x: initialX - 20,
        y: initialY + 10,
    },
    {
        x: initialX - 20,
        y: initialY + 20,
    },
    {
        x: initialX - 20,
        y: initialY + 30,
    },
    {
        x: initialX - 20,
        y: initialY + 40,
    },
    {
        x: initialX - 2,
        y: initialY - 8,
    },
    {
        x: initialX + 6,
        y: initialY - 16,
    },
    {
        x: initialX + 14,
        y: initialY - 24,
    },
    {
        x: initialX + 22,
        y: initialY - 32,
    },
    {
        x: initialX + 30,
        y: initialY - 40,
    },
    {
        x: initialX - 10,
        y: initialY,
    },
    {
        x: initialX - 2,
        y: initialY + 8,
    },
    {
        x: initialX + 6,
        y: initialY + 16,
    },
    {
        x: initialX + 14,
        y: initialY + 24,
    },
    {
        x: initialX + 22,
        y: initialY + 32,
    },
    {
        x: initialX + 30,
        y: initialY + 40,
    },
];

const initialPosition = [
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
    {
        x: initialX,
        y: initialY,
    },
];

function Dots() {

    const [positions, setPositions] = useState(initialPosition);
    const [hideText, setHide] = useState(false);
    const [mounted, setMount] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            handleClick();
        }, 500);
        setMount(true);
    }, []);

    function getRandomX() {
        return Math.floor(Math.random() * width / 4);
    }

    function getRandomY() {
        return Math.floor(Math.random() * height);
    }

    function handleClick() {
        if (mounted && !hideText) {
            handleFormation();
            setHide(true);
            return;
        }
        const positionsArr = [];
        for (let i = 0; i < 10; i++) {
            const xPos = getRandomX();
            const yPos = getRandomY();
            positionsArr.push({ x: xPos, y: yPos });
            positionsArr.push({ x: width - xPos, y: yPos });
        }
        setHide(false);
        setPositions(positionsArr);
    }

    function handleFormation() {
        setHide(true);
        setPositions(formation);
    }

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <Circles />
            <motion.p
                className={styles.title}
                initial={{
                    x: '-50%',
                    y: -200,
                }}
                animate={{
                    x: '-50%',
                    y: '-50%',
                    opacity: hideText ? 0 : 1,
                }}
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
                                x: position.x,
                                y: position.y,
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
        </div >

    )
}

export default Dots;