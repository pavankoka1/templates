import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'modules';
import Folder from './components/folder';
import Background3d from './components/3d-background';
import Cards from './components/cards';
import ScrollEffect from './components/scrollEffect';
import ImageTransition from './components/ImageTransition';
import { FramerMotion } from 'modules';

import authActions from 'redux/actions/auth';

import styles from './index.module.scss';

const Home = ({ user, dispatch }) => {
    console.log({ user, dispatch });

    const {
        setUserDetail
    } = authActions;

    useEffect(() => {
        dispatch(setUserDetail({ name: 'It\'s me koka' }));
    }, [])
    return (
        <FramerMotion />
        // <Folder />
        // <Layout>
        //     <div className={styles.wrapper}>
        //         <Background3d />
        //         <ImageTransition />
        //         {/* <Cards />
        //         <ScrollEffect /> */}
        //     </div>
        // </Layout>
    )
}

const mapStateToProps = ({
    auth: {
        user,
    },
}) => {
    return {
        user,
    };
}

export default connect(mapStateToProps, undefined)(Home);