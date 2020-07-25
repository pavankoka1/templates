import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import * as easings from 'd3-ease';
import styles from './topBar.module.scss';

function TopBar() {

    const [toggle, setToggle] = useState(false);

    function handleEnter() {
        setToggle(true);
    }

    function handleLeave() {
        setToggle(false);
    }

    return(
        <div className={styles.wrapper}>
            <strong className={styles.link}>KOKA</strong>
            <h1 className={styles.heading} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <Transition
                    items={toggle}
                    from={toggle => ({ position: 'absolute', opacity: 0, left: '50%', transform: 'translate(-50%, -40%)', color: toggle ? '#ED636D' : 'unset' })}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    config={item => ({ easing: easings.easePolyIn })}
                >
                    {toggle =>
                        toggle
                        ? props => <div style={props}>Alfred calls back to Bruce's father quote - The Dark Knight</div>
                        : props => <div style={props}>Why Do We Fall, Sir? So That We Can Learn To Pick Ourselves Up</div>
                    }
            </Transition>
            </h1>
            <div className={styles.icons}>
                <img src={require('assets/images/icons/instagram.png')} className={styles.icon} alt='icon' />
                <img src={require('assets/images/icons/twitter.png')} className={styles.icon} alt='icon' />
                <img src={require('assets/images/icons/facebook.png')} className={styles.icon} alt='icon' />
            </div>
        </div>
    )
}

export default TopBar;