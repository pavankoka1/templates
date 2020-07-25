import React from 'react';
import {
    Hamburger
} from 'shared';
import styles from './Menu.module.scss';

function Menu(props) {
    return(
        <div className={styles.wrapper}>
            <Hamburger className={styles.svg}/>
            <span className={styles.title}>Menu</span>
        </div>
    )
}

export default Menu;