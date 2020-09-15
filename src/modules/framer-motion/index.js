import React from 'react';
import cx from 'classnames';
import Dots from './dots';
import ImageZoom from './image-zoom';
import styles from './index.module.scss';

function FramerMotion() {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={styles.slider}>
                <Dots />
                <div className={styles.emptyDiv} />
            </div>
            <ImageZoom />
            {/* <div className={styles.emptyPage}></div> */}
        </div >
    )
}

export default FramerMotion;
