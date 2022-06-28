import React, { useState } from 'react'
import cx from 'classnames'
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import Modal from 'react-modal';
import CROSS from 'assets/images/resume/cross.svg'
import { educationDetails } from 'modules/resume/constants'
import styles from './stackToModal.module.scss'

function Animation() {
    const [selectedId, setSelectedId] = useState(-1);
    
    function handleLayoutClick(index) {
        if(index === selectedId) {
            setSelectedId(-1)
        } else {
            setSelectedId(index)
        }
    }

    return (
        <AnimateSharedLayout type="crossfade">
            <div className={styles.cardsWrapper}>
                <AnimatePresence>
                    {educationDetails.map((item, index) => (
                        <motion.div
                            id={item.id}
                            layoutId={item.id}
                            className={cx(styles.card, selectedId === index ? styles.selected : null)}
                            whileHover={{
                                scale: 1.04,
                                x: 20,
                            }}
                            style={{}}
                            animate={{
                                // x: selectedId === index  ? 100 : 0,
                                // y: selectedId === index ? ((1 - selectedId) * 100) : 0,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            onClick={() => handleLayoutClick(index)}
                            // onMouseEnter={() => setSelectedId(index)}
                            // onMouseLeave={() => setSelectedId(-1)}
                        >
                            {selectedId === index ? (
                                <motion.div 
                                    className={styles.cardModal}
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                    onClick={e => e.stopPropagation()}
                                >
                                    <img src={CROSS} className={styles.close} alt='cross' onClick={() => setSelectedId(-1)} />
                                    <p className={styles.title}>{item.college}</p>
                                    <p className={styles.date}>{item.date}</p>
                                    <div className={styles.description}>
                                        {item.desc.map(desc => <p>{desc}</p>)}
                                    </div>
                                </motion.div>
                            ) : <p className={styles.title}>{item.id}</p>}
                            
                        </motion.div>
                    ))}
                </AnimatePresence>
                
            </div>
        </AnimateSharedLayout>
  )
}

export default Animation