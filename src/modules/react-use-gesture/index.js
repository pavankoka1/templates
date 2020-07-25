import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import styles from './index.module.scss';

function ReactUseGesture() {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

    const bind = useDrag(({ down, movement }) => {
        set({ xy: down ? movement : [0, 0] })
    })

    return(
        <div className={styles.wrapper}>
            <animated.div
                {...bind()}
                style={{
                    transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
                }}
                className={styles.card}
            />
        </div>
    )
}

export default ReactUseGesture;