import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Animation({ classNames, wordClassNames, text, visible, duration = 0.5, y }) {

    return (
        // <div className={classNames}>
        //     {/* {
        //         text.map((word, i) => (
        //             <motion.p
        //                 className={wordClassNames}
        //                 key={`${i}-${word}`}
        //                 animate={{
        //                     opacity: visible ? 1 : 0,
        //                     // y: y,
        //                 }}
        //                 transition={{
        //                     duration: duration,
        //                 }}
        //             >
        //                 {word}
        //             </motion.p>
        //         ))
        //     } */}
        //     <motion.p
        //         // className={wordClassNames}
        //         // key={`${i}-${word}`}
        //         animate={{
        //             opacity: visible ? 1 : 0,
        //             // y: y,
        //         }}
        //         transition={{
        //             duration: duration,
        //         }}
        //     >
        //         {text[0]}
        //     </motion.p>
        // </div>
        <motion.p
            className={classNames}
            // key={`${i}-${word}`}
            animate={{
                opacity: visible ? 1 : 0,
                // y: y,
            }}
            transition={{
                duration: duration,
            }}
        >
            {text[0]}
        </motion.p>
    )
}

Animation.propTypes = {
    visible: PropTypes.bool,
    duration: PropTypes.number,
    y: PropTypes.number,
    classNames: PropTypes.string,
    text: PropTypes.array,
}

export default Animation;