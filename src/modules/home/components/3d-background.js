import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './backgroundAnimation.module.scss';

const calc = (x, y, s) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, s];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Background3d() {

    const elementRef = useRef(null);
    const [onBaby, setOnBaby] = useState(false);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], top: 0, config: { mass: 5, tension: 350, friction: 40 } }));
    const [rotate, setRotate] = useSpring(() => ({ val: 0, config: { mass: 5, tension: 350, friction: 40 } }));

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    function handleScroll() {
        set({ top: -window.scrollY / 3 })
    }

    function handleMouseMove({ clientX: x, clientY: y }) {
        set({ xys: calc(x, y, onBaby ? 1.25 : 1) })
        console.log(onBaby);
        const props = elementRef.current.getBoundingClientRect();

        const elementX = props.left + 50;
        const elementY = props.top + 50;
        let angle = Math.atan((elementX - x) / (y - elementY)) * (180 / Math.PI);
        if (y > elementY) {
            angle += 180;
        }
        setRotate({ val: angle + 180 });
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.card}
                onMouseMove={handleMouseMove}
            >
                <animated.img
                    ref={elementRef}
                    src={require('assets/images/droplet.jfif')}
                    // style={{ transform: props.xys.interpolate(trans) }}
                    style={{ transform: rotate.val.interpolate(val => `rotate(${val}deg)`) }}
                    alt='globe'
                    className={styles.globe}
                />
                {/* <div className={styles.videoWrapper}>
                    <animated.video
                        className={styles.video}
                        style={{ transform: props.xys.interpolate(trans) }}
                        src={require('assets/videos/baby.mp4')}
                        autoPlay
                        loop
                        muted
                    />
                </div> */}
                {/* <img
                    className={styles.fishGif}
                    src='https://www.animatedimages.org/data/media/194/animated-fish-image-0354.gif'
                    alt='fish'
                /> */}
                <animated.div style={{ transform: props.top.interpolate(top => `translateY(${top}px)`) }}>
                    <animated.img
                        className={styles.baby}
                        style={{ transform: props.xys.interpolate(trans) }}
                        src={require('assets/images/baby-in-hands.png')}
                        alt='fish'
                        onMouseEnter={() => setOnBaby(true)}
                        onMouseLeave={() => setOnBaby(false)}
                    />
                </animated.div>
                <div
                    className={styles.rain}
                />
                <img
                    className={styles.birdGif}
                    src={require('assets/images/bird.gif')}
                    alt='bird'
                />
            </div>
        </div>
    )
}

export default Background3d;