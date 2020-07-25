import React from 'react';
import styles from './index.module.scss';
import { useSpring,animated } from 'react-spring';

//3a4052

const Video = () => {

    const springs = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 0})
            await next({opacity: 1, text: 'Pavan Koka', scale: 1})
            await next({opacity: 0, text: 'Pavan Koka', scale: 0.92})
            await next({opacity: 1, text: 'Web Developer', scale: 1})
            await next({opacity: 0, text: 'Web Developer', scale: 0.92})
            await next({opacity: 1, text: 'L O S E R', scale: 1})
            await next({opacity: 0, text: 'L O S E R', scale: 0.92})
        },
        from: { opacity: 0, text: '', scale: 0.92},
        config: { mass: 5, tension: 350, friction: 40, duration: 2000 },
    })
    return (
        <div className={styles.wrapper}>
            <div className={styles.video}>
                <video
                    src={require('assets/videos/video.mov')}
                    autoPlay
                    // loop
                    muted
                />
            </div>
            <animated.div className={styles.content} style={{ 
                opacity: springs.opacity,
                transform: springs.scale.interpolate( s => `scale(${s})`)
            }}>{springs.text}</animated.div>
        </div>
    )
};

export default Video;