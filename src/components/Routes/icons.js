import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Cross } from 'shared';
import { motion } from 'framer-motion';
import styles from './icons.module.scss';

const icons = [
    {
        id: 1,
        icon: 'harry.png',
    },
    {
        id: 2,
        icon: 'harry.png',
    },
    {
        id: 3,
        icon: 'harry.png',
    },
    {
        id: 4,
        icon: 'harry.png',
    },
    {
        id: 5,
        icon: 'harry.png',
    },
    {
        id: 6,
        icon: 'harry.png',
    },
];

function Icons({ classNames }) {
    const [hide, setHide] = useState(true);

    function handleClick(e) {
        e.stopPropagation();
        setHide(val => !val);
    }

    const _classNames = cx(classNames, styles.wrapper);
    return (
        <div className={_classNames}>
            <motion.div
                className={styles.toggler}
                onClick={handleClick}
                animate={{
                    rotate: hide ? 0 : 45,
                }}
            >
                <Cross showPlus={hide} />
            </motion.div>
            <div className={styles.icons}>
                {
                    icons.map(icon => (
                        <NavLink
                            to={'/resume'}
                        >
                            <motion.img
                                key={`${icon.id}-${icon.icon}`}
                                src={require(`assets/images/nav-icons/${icon.icon}`)}
                                height={50}
                                width={50}
                                className={styles.icon}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    y: !hide ? 70 * icon.id : 0,
                                    opacity: !hide ? 1 : 0,
                                }}
                                transition={{
                                    stiffness: 100,
                                }}
                                whileHover={{
                                    scale: 2,
                                    x: '25%',
                                }}
                            />
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

Icons.propTypes = {
    classNames: PropTypes.string,
}

export default Icons;