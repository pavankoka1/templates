import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './image-zoom.module.scss';

const width = window.innerWidth;
const height = window.innerHeight;

function ImageZoom() {
    const wrapperRef = useRef(null);
    const [scaleImage, setImageScaling] = useState(1);
    const [top, setTop] = useState(height / 5);
    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        if (wrapperRef.current) {
            const top = window.scrollY - wrapperRef.current.offsetTop;
            const wrapperHeight = wrapperRef.current.offsetHeight;

            if (top >= 0 && top < wrapperHeight * 2 / 3) {
                const scale = parseFloat((Math.floor((top / (wrapperHeight / 2)) * 20) / 20).toFixed(2));
                setTop(top);
                if (scaleImage !== scale + 1) {
                    setImageScaling(scale + 1.00);
                }
            } else if (top > wrapperRef.current.offsetTop / 2) {
                setTop(wrapperHeight + height);
                setImageScaling(2);
            } else {
                setTop(height / 5);
                setImageScaling(1);
            }
            // else if (top > 0.4 * height) {
            //     setTop(height / 2);
            //     setImageScaling(2);
            // } 
        }
    }

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <div
                className={styles.container}
                style={{
                    position: wrapperRef.current && top > 0 && top < height * 2 && top !== wrapperRef.current.offsetTop + height && top !== height / 5 ? 'fixed' : 'relative'
                }}
            >
                <motion.img
                    src={require('assets/images/dobby.png')}
                    className={styles.image}
                    style={{
                        marginTop: wrapperRef.current && top < height * 2 && top !== wrapperRef.current.offsetTop + height && top !== height / 5 ? '0' : top,
                        opacity: scaleImage * 0.4 + 0.2,
                    }}
                    animate={{
                        // y: top,
                        scale: scaleImage,
                    }}
                    transition={{
                        duration: 0.5,
                        stiffness: 80,
                    }}
                />
            </div>
        </div>
    )
}

export default ImageZoom;