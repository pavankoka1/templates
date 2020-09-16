import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './circles.module.scss';

const width = window.innerWidth;
const height = window.innerHeight;

const initCircles = [
    {
        x: 0,
        y: 0,
    },
    {
        x: 0,
        y: 0,
    },
    {
        x: 0,
        y: 0,
    }
];

function Circles() {
    const [circles, setCircles] = useState(initCircles);

    function handleMouseMove({ clientX: x, clientY: y }) {
        const cx = width / 2;
        const cy = height / 2;
        const circles = [
            {
                x: (x - cx) * 40 / cx,
                y: (y - cy) * 40 / cy,
            },
            {
                x: (x - cx) * 24 / cx,
                y: (y - cy) * 24 / cy,
            },
            {
                x: (x - cx) * 6 / cx,
                y: (y - cy) * 6 / cy,
            }
        ];
        setCircles(circles);
    }

    return (
        <div className={styles.wrapper} onMouseMove={handleMouseMove}>
            {
                circles.map((circle, i) => (
                    <motion.div
                        className={styles[`circle${i + 1}`]}
                        animate={{
                            x: -300 - 25 * i + circle.x,
                            y: -300 - 25 * i + circle.y,
                        }}
                    />
                ))
            }
        </div>
    )
}

export default Circles;