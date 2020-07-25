import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

function Login() {
    return(
        <div className={styles.wrapper}>
            <span className={styles.text}>Want a crazy ride?</span>
            <strong className={styles.register}>Register / Log in</strong>
        </div>
    )
}

export default Login;