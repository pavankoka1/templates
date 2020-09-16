import React from "react";
import { animated } from 'react-spring';

const Cross = props => {

    return (
        <svg width="25" height="25" fill='#fff' {...props}>
            <rect
                x='12'
                width="1"
                height="25"
            />
            <rect
                x={props.isPlus ? '2' : '0'}
                y={props.isPlus ? '8' : '12'}
                width={props.isPlus ? '20' : '25'}
                height="1"
            />
        </svg>
    );
};

export default Cross;