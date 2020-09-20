import React, { useEffect, useRef, useState } from 'react';
import { AnimateText } from 'utils';
import ImagesText from './images-text';
import ImagesContainer from './images-container';
import TextToImage from './text-to-image';
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
    const TextToImgRef = useRef(null);
    const [maskSize, setMaskSize] = useState(50);
    const [bgSize, setBgSize] = useState(50);
    const [activeId, setId] = useState(0);
    const [showEndText, setEndText] = useState(false);
    const maskScalingHeight = 4 * height;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
    }, [])

    function handleScroll() {
        const top = window.scrollY;
        const id = parseInt((top - 100) / (height / 2)) + 1;
        if (top > 100) {
            if (id !== activeId) {
                setId(id);
            }
        } else {
            setId(0);
        }

        if (TextToImgRef.current) {
            const top = window.scrollY - TextToImgRef.current.offsetTop;

            if (top + height > TextToImgRef.current.clientHeight - 10) {
                setEndText(true);
            } else {
                setEndText(false);
            }

            if (top > 0) {
                const exponentialInc = ((10 ** (top / maskScalingHeight) - 1) / 9);
                const maskSize = 50 + exponentialInc * 6000;
                // const bgSize = 50 + (top / maskScalingHeight) * 50;

                // console.log(exponentialInc, maskSize);
                if (maskSize < 175) {
                    const exponentialInc = ((100 ** (maskSize / 175) - 1) / 99);
                    const bgSize = 50 + exponentialInc * 50;
                    setBgSize(bgSize)
                } else {
                    setBgSize(100);
                }
                setMaskSize(maskSize);
                // setBgSize(bgSize);
            } else {
                setMaskSize(50);
                setBgSize(50);
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.firstFold}>
                <div className={styles.stickyContainer}>
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
            </div>
            <div className={styles.secondFold} ref={TextToImgRef}>
                <div className={styles.stickyContainer}>
                    <AnimateText
                        visible={showEndText}
                        text={['Until', 'the', 'end']}
                        duration={1.5}
                        y={0}
                        classNames={styles.endText}
                        wordClassNames={styles.word}
                    />
                    <TextToImage
                        maskSize={maskSize}
                        bgSize={bgSize}
                    />
                </div>
            </div>
        </div>
    )
}

export default Quotes;