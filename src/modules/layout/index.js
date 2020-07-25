import React, { useState, useLayoutEffect } from 'react';
import Navbar from 'components/Navbar';
import cx from 'classnames';
import TopBar from 'components/Navbar/topBar';
import StickyBar from 'components/Navbar/stickyBar';
import styles from './index.module.scss';

function Layout(props) {

    // const [isSticky, setSticky] = useState(false);

    // useLayoutEffect(() => {
    //     window.addEventListener('scroll', handleScroll, true);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [])

    // function handleScroll() {
    //     const y = window.scrollY;
    //     const s = y >= 70 ? true : false;
    //     setSticky(s);
    // }

    return (
        <div>
            {/* <Navbar isSticky={isSticky} /> */}
            <TopBar />
            <StickyBar />
            {props.children}
        </div>
    )
}

export default Layout;