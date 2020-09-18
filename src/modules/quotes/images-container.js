import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './images-container.module.scss';

function ImagesContainer({ width, quotes, activeId }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.images}>
                {quotes.map(item => (
                    <div
                        key={item.css.background}
                        className={cx(styles.img, { [styles.dead]: item.id !== activeId }, { [styles.active]: item.id === activeId })}
                        style={item.css}
                    />
                ))}
            </div>
            <div className={styles.overlay}></div>
        </div>
    )
}

ImagesContainer.propTypes = {
    width: PropTypes.number,
    activeId: PropTypes.number,
    quotes: PropTypes.array,
}

export default ImagesContainer;