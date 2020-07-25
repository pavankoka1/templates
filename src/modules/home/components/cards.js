import React, { useState, useLayoutEffect } from 'react';
import { animated } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import * as easings from 'd3-ease';
import cx from 'classnames';
import styles from './cards.module.scss';

const cards = [
    {
        image: 'pic1',
        key: 1,
    },
    {
        image: 'pic2',
        key: 2,
    },
    {
        image: 'pic3',
        key: 3,
    },
]

function Cards() {

    const [top, setTop] = useState(0);
    const [items, set] = useState([]);
    const [text, setText] = useState('');

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    function handleScroll() {
        const y = window.scrollY;
        if (y >= 100) {
            setText('Web Developer');
            set(cards);
        } else {
            setText('Web Developer');
            set(cards);
        }
    }

    return (
        <div className={styles.wrapper}>
            <img className={cx(styles.emoji, styles.anime1)} src="https://img.icons8.com/emoji/32/000000/smiling-face-with-heart-eyes.png" alt='emoji' />
            <img className={cx(styles.emoji, styles.anime2)} src="https://img.icons8.com/emoji/32/000000/smiling-face-with-heart-eyes.png" alt='emoji' />
            <img className={cx(styles.emoji, styles.anime3)} src="https://img.icons8.com/emoji/32/000000/smiling-face-with-heart-eyes.png" alt='emoji' />
            <div className={styles.text}>Web Developer</div>
            {/* <div className={styles.cards}>{
                // <Transition
                //     items={items}
                //     keys={item => item.key}
                //     from={{ transform: 'translate3d(0,40px,200px)', opacity: 0 }}
                //     enter={{ transform: 'translate3d(0,0px,200px)', opacity: 1 }}
                //     leave={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
                //     trail={100}
                //     config={{ duration: 800, easing: easings.easePolyOut }}
                // >
                //     {item => props => (
                //         <animated.div className={styles.card} style={props}>
                //             <img src={require(`assets/images/koka/${item.image}.jpg`)} alt='pic' />
                //         </animated.div>
                //     )}
                // </Transition>
                // cards.map(card => (
                //     <div className={styles.card}>
                //         <img src={require(`assets/images/koka/pic1.svg`)} alt='pic' />
                //     </div>
                // ))
            }</div> */}
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img className={cx(styles.left)} src={require('assets/images/kiss.jpg')} alt='kiss' />
                </div>
                <div className={styles.card}>
                    <img className={cx(styles.right)} src={require('assets/images/kiss.jpg')} alt='kiss' />
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {

}

export default Cards;