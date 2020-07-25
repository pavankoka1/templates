import React from 'react';
import { Layout } from 'modules';
import Background3d from './components/3d-background';
import Cards from './components/cards';
import ScrollEffect from './components/scrollEffect';
import styles from './index.module.scss';

const Home = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <Background3d />
                <Cards />
                <ScrollEffect />
            </div>
        </Layout>
    )
}

export default Home;