import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './index.module.scss'

const content = [
    {
        id: 'random-1',
        text: 'lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-2',
        text: '1 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-3',
        text: '2 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-4',
        text: '3 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-5',
        text: '4 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-6',
        text: '5 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-7',
        text: '6 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-8',
        text: '7 lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    },
    {
        id: 'random-9',
        text: 'lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice, lorem ipsum text random for practice',
    }
]

function Interview() {
    const [active, setActive] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            if(active < content.length - 2) {
                setActive(val => {
                    if(val < content.length - 2)
                        return val + 1
                    else return 1
                })
            } else {
                setActive(1)
            }  
        }, 200)

        return () => clearInterval(timer);
    }, [])

    function handleDown() {
        if(active < content.length - 2) {
            setActive(val => val + 1)
        } else {
            setActive(1)
        }        
    }

    function handleUp() {
        if(active === 1) {
            setActive(content.length - 2)
        } else {
            setActive(val => val - 1)
        }
    }

    
  return (
    <div className={styles.wrapper}>
        {active}
        <p className={styles.button} onClick={handleUp}>up</p> 
        <div className={styles.carouselWrapper}>
            <div className={styles.card} onClick={() => setActive(val => val - 1)}>{content[active - 1].text}</div>
            <div className={cx(styles.card, styles.active)}>{content[active].text}</div>
            <div className={styles.card} onClick={handleDown}>{content[active + 1].text}</div>
        </div>
        <p className={styles.button} onClick={() => setActive(val => val + 1)}>down</p>
    </div>
  )
}

export default Interview