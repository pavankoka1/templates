import React from 'react'
import StackToModal from 'utils/stackToModal'
import styles from './education.module.scss'

function Education() {
    return (
        <div id='education' className={styles.wrapper}>
                <div className={styles.content}>
                    <StackToModal />
                </div>
            <div className={styles.logo}>Education</div>
        </div>
    )
}

export default Education