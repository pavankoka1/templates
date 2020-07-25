import React, {useState} from 'react';
import ReactCompare from 'react-compare-image';
import Batman from 'assets/images/batman.jpg';
import Ironman from 'assets/images/ironman.jpg';
import styles from './index.module.scss';

const Compare = () => {

    const [hover, setHover] = useState(true);

    const handleHoverClick = () => {
        setHover(val => !val);
    }

    return (
        <div className={styles.wrapper} onClick={handleHoverClick}>
            <ReactCompare
                leftImage={Batman}
                rightImage={Ironman}
                sliderLineColor='lightGray'
                handleSize={32}
                leftImageCss={{
                    height: '100vh',
                    overflow: 'hidden',
                }}
                rightImageCss={{
                    height: '100vh',
                    overflow: 'hidden',
                }}
                hover={hover}
            />
        </div>
    )
}

export default Compare;
