import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './backgroundAnimation.module.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Background3d() {

    const elementRef = useRef(null);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [rotate, setRotate] = useSpring(() => ({ val: 0, config: { mass: 5, tension: 350, friction: 40 } }));

    function handleMouseMove({ clientX: x, clientY: y }) {
        // set({ xys: calc(x, y) })
        const props = elementRef.current.getBoundingClientRect();

        const elementX = props.left + 100;
        const elementY = props.top + 100;
        console.log(x, y, elementX, elementY);
        let angle = Math.atan((elementX - x) / (y - elementY)) * (180 / Math.PI);
        if (y > elementY) {
            angle += 180;
        }
        console.log(angle);
        setRotate({ val: angle + 180 });
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.card}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
            >
                <animated.img
                    ref={elementRef}
                    src={require('assets/images/droplet.jfif')}
                    // style={{ transform: props.xys.interpolate(trans) }}
                    style={{ transform: rotate.val.interpolate(val => `rotate(${val}deg)`) }}
                    alt='baby'
                    className={styles.baby}
                />
            </div>
        </div>
    )
}

export default Background3d;