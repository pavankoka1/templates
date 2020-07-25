import React from 'react';
import TopBar from './topBar';
import StickyBar from './stickyBar';
import cx from 'classnames';
import styles from './index.module.scss';

function Navbar({ isSticky }) {

    return(
        <div className={cx(styles.wrapper, {[styles.sticky]: isSticky})}>
            { !isSticky && <TopBar /> }
            <StickyBar isSticky={isSticky} />
        </div>
    )
}

export default Navbar;