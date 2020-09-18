import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './images-text.module.scss';

function ImagesText({ activeId, quotes }) {
    return (
        <div className={styles.container}>
            {
                quotes.map(item => {
                    const selected = item.id === activeId;

                    return (
                        <div className={styles.text}>
                            <motion.p
                                className={styles.quote}
                                animate={{
                                    opacity: selected ? 1 : 0
                                }}
                                transition={{
                                    duration: selected ? 3 : 0,
                                    delay: selected ? 0.3 : 0,
                                    stiffness: 300,
                                }}
                            >
                                {item.quote}
                            </motion.p>
                            <motion.p
                                className={styles.name}
                                animate={{
                                    opacity: selected ? 1 : 0,
                                    y: selected ? 40 : 75,
                                }}
                                transition={{
                                    duration: selected ? 2 : 0,
                                    delay: selected ? 2 : 0,
                                    stiffness: 300,
                                }}
                            >
                                - {item.name}
                            </motion.p>
                        </div>
                    )
                })
            }
        </div>
    )
}

ImagesText.propTypes = {
    activeId: PropTypes.number,
    quotes: PropTypes.array,
}

export default ImagesText;