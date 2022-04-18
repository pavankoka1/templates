import React, { useState } from 'react'
import { motion } from 'framer-motion'

const lineStyles = {height: '3px', backgroundColor: '#7a5932', borderRadius: '5px'};

function ResumeHamburger({ handleHeaderToggle }) {
    const [widths, setWidths]=useState([25, 17, 30]);
    const [showCross, setShowCross] = useState(false);

    function handleEnter() {
        const newWidths = [30, 30, 30];

        setWidths(newWidths)
    }

    function handleLeave() {
        const newWidths = [25, 17, 30];

        setWidths(newWidths)
    }

    function handleClick() {
        setShowCross(flag => !flag)
        handleHeaderToggle()
    }

    return <div 
                onMouseEnter={handleEnter} 
                onMouseLeave={handleLeave} 
                onClick={handleClick}
                style={{width: '30px', height: '21px'}} 
            >
                <motion.p
                    style={lineStyles}
                    animate={{
                        width: showCross ? 30 : widths[0],
                        rotate: showCross ? 45 : 0,
                        y: showCross ? 10 : 0,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                />
                <motion.p
                    style={lineStyles}
                    animate={{
                        width: widths[1],
                        y: 6,
                        opacity: showCross ? 0 : 1,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                />
                <motion.p
                    style={lineStyles}
                    animate={{
                        width: showCross ? 30 : widths[2],
                        y: showCross ? 4 : 12,
                        rotate: showCross ? -45 : 0,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                />
            </div>
}

export default ResumeHamburger;