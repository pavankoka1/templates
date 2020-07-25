import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import VisibilitySensor, {TouchScrollable} from 'react-visibility-sensor';
import ScrollLock from 'react-scroll-lock';
import styles from './index.module.scss';
import { Controller, Scene } from 'react-scrollmagic';
import { TweenLite, Power3 } from 'gsap';

const ScrollAnimation = () => {

    const textRef = useRef(null);
    const [scrollLock, setScrollLock] = useState(false);
    const [isMounted, setMount] = useState(false);
    let animationRef = useRef(null);
    let animation = null;

    // useEffect(() => {
    //     // if(!isMounted) {
    //     //     setMount(true);
            
    //     // }
    //     TweenLite.to(animationRef, 1, {
    //         x: 100, 
    //         y: 100,
    //         ease: Power3.easeOut,
    //     });
    // }, [])

    useEffect(() => {
        Aos.init({duration: 1000});
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        // if(textRef.current)
        //     console.log(textRef.current.scrollHeight, textRef.current.scrollTop, window.pageYOffset)
    }

    const handleTextVisibility = (visible) => {
        if(visible) {
            // setScrollLock(true);
            console.log('in it');
            // console.log(window.scrollY);
        }
        console.log(visible)
    }

    return (
        <div className={styles.wrapper} onScroll={handleScroll}>
            <div className={styles.emptyPage}>Scroll down</div>
            <div className={styles.boxs}>
                <div data-aos='fade-up' className={styles.box}></div>
                <div data-aos='fade-down' className={styles.box}></div>
                <div data-aos='fade-right' className={styles.box}></div>
                <div data-aos='fade-left' className={styles.box}></div>
                <div data-aos='zoom-in' className={styles.box}></div>
            </div>
            {/* <TouchScrollable isActive={scrollLock}></TouchScrollable> */}
            <VisibilitySensor onChange={handleTextVisibility}>
                <div className={styles.textAnimation} ref={textRef}>
                    <div className={styles.insideDiv}>Chill it's just Chaos</div>
                </div>
            </VisibilitySensor>
            <div className={styles.emptyPage}>Scroll up</div>
            <Controller>
                <Scene duration={10000} pin>
                    <div className={styles.scrollMagic}>Sticky Example</div>
                </Scene>
            </Controller>
        </div>
    )
};

export default ScrollAnimation;