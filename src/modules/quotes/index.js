import React, { useEffect, useState } from 'react';
import ImagesText from './images-text';
import ImagesContainer from './images-container';
import styles from './index.module.scss';

const height = window.innerHeight;
const width = window.innerWidth;

const quotes = [
    {
        id: 1,
        css: {
            background: `url(https://cutewallpaper.org/21/professor-severus-snape-wallpapers/Harry-Potter-Quotes-Snape-Wallpaper-Best-Quotes-Collection.png)`,
            backgroundSize: 'cover',
        },
        name: 'Severus Snape',
        quote: 'Always',
    },
    {
        id: 2,
        css: {
            background: `url(https://wallpapercave.com/wp/wp2036270.jpg)`,
            backgroundSize: 'cover',
            alignSelf: 'center',
        },
        name: 'Sirius Black',
        quote: `We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are`,
    },
    {
        id: 3,
        css: {
            background: `url(https://i.dailymail.co.uk/i/newpix/2018/08/21/14/0B4C5EB5000005DC-0-image-a-22_1534857371265.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignSelf: 'flex-end',
        },
        name: 'Albus Dumbledore',
        quote: 'Have you grown to care for the boy, after all?',
    },
]

function Quotes() {
    const [activeId, setId] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
    }, [])

    function handleScroll() {
        const top = window.scrollY;
        const id = parseInt((top - 100) / (height / 4)) + 1;
        if (top > 100) {
            if (id !== activeId) {
                setId(id);
            }
        } else {
            setId(0);
        }
    }

    return (
        <div className={styles.wrapper}>
            <ImagesText
                activeId={activeId}
                quotes={quotes}
            />
            <ImagesContainer
                width={height / 4}
                activeId={activeId}
                quotes={quotes}
            />
        </div>
    )
}

export default Quotes;