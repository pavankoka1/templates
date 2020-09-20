import React from 'react';
import PropTypes from 'prop-types';
import styles from './text-to-image.module.scss';

function TextToImage({ maskSize, bgSize }) {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.overlay}
                style={{
                    WebkitMaskSize: `${maskSize}vmin`,
                    maskSize: `${maskSize}vmin`,
                    backgroundSize: `${bgSize}% ${bgSize}%`,
                }}
            />
        </div>
    )
}

TextToImage.propTypes = {
    maskSize: PropTypes.number,
    bgSize: PropTypes.number,
}

export default TextToImage;