import React, { useState, useRef, useEffect, Component } from 'react';
import { TweenLite, TimelineLite } from 'gsap';
import styles from './index.module.scss';
import cx from 'classnames';

const GsapAnimations = () => {

    let boxRef = useRef(null);
    let boxRefs = useRef(new Array(5));
    const [boxAnimation, setBoxAnimation] = useState(new TimelineLite({paused: true}));
    const [boxAnimations, setBoxAnimations] = useState(new TimelineLite({paused: true}));
    const [isMounted, setMount] = useState(false);

    useEffect(() => {
        if(!isMounted && boxRef) {
            setMount(true);

            boxAnimation
                .to(boxRef, 4, {x: 500, rotation: 720})
                .to(boxRef, 4, {y: 500, rotation: 0})
                .to(boxRef, 4, {x: 0, rotation: 720})
                .to(boxRef, 4, {y: 0, rotation: 0});

            boxAnimations
                .staggerTo(boxRefs.current, 1.5, {x: 500, autoAlpha: 1}, -0.02)
                .staggerTo(boxRefs.current, 1, {x: 0, autoAlpha: 1}, -0.02);
        }
    }, [])

    console.log(boxRef);

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttons}>
                <p className={styles.button} onClick={() => boxAnimation.play()}>play</p>
                <p className={styles.button} onClick={() => boxAnimation.pause()}>pause</p>
                <p className={styles.button} onClick={() => boxAnimation.reverse()}>reverse</p>
                <p className={styles.button} onClick={() => boxAnimation.restart().pause()}>reset</p>
            </div>
            <p className={styles.box} ref={ref => boxRef = ref}></p>
            <div className={styles.buttons}>
                <p className={styles.button} onClick={() => boxAnimations.play()}>play</p>
                <p className={styles.button} onClick={() => boxAnimations.pause()}>pause</p>
                <p className={styles.button} onClick={() => boxAnimations.reverse()}>reverse</p>
                <p className={styles.button} onClick={() => boxAnimations.restart().pause()}>reset</p>
            </div>
            {
                [1, 2, 3, 4, 5].map( (index) => (
                    <p id={index} className={cx(styles.box, {[styles.absolute]: index !== 0})} ref={ref => boxRefs.current[index] = ref}></p>
                ))
            }
        </div>
    )
}

export default GsapAnimations;
