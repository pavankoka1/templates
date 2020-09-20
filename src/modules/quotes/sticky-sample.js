import React from 'react';
import styles from './sticky-sample.module.scss';

function Index() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header} />
            <div className={styles.content} />
        </div>
    )
}

export default Index;