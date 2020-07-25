import React from 'react';
import Menu from './Menu';
import Search from './Search';
import { useInView } from "react-intersection-observer";
import styles from './stickyBar.module.scss';

function StickyBar() {
    const [ref, inView] = useInView({
        threshold: 0
    });
    return (
        <>
            <div ref={ref} />
            <div className={styles.wrapper}>
                <Menu />
                <Search
                    isSticky={!inView}
                />
                <span className={styles.submit}>Submit your site!</span>
            </div>
        </>
    )
}

export default StickyBar;