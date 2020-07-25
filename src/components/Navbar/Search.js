import React, { useEffect, useState } from 'react';
import Login from './Login';
import { animated } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import * as easings from 'd3-ease';
import styles from './Search.module.scss';

const text = [
    {text: 'k', key: 1, duration: 800},
    {text: 'o', key: 2, duration: 600},
    {text: 'k', key: 3, duration: 400},
    {text: 'a', key: 4, duration: 200},
];

function Search({ isSticky }) {
    const [items, set] = useState([]);

    useEffect(() => {
        set(isSticky ? text : []);
    }, [isSticky]);

    return(
        <div className={styles.wrapper}>
            <img 
                src={require('assets/images/icons/search.svg')}
                alt='search icon'
            />
            <div className={styles.text}>
                <Transition
                    items={items} keys={item => item.key}
                    from={item => ({ transform: 'translate3d(0,-60px,0)', opacity: 0 })}
                    enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                    leave={{ transform: 'translate3d(0,-60px,0)', opacity: 0 }}
                    trail={200}
                    config={item => ({ duration: item.duration, easing: easings.easePolyOut })}
                >
                    {item => props => <animated.div style={props}>{item.text}</animated.div>}
                </Transition>
            </div>
            <Login />
        </div>
    )
}

export default Search;
