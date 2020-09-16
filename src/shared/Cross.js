import React from "react";

const Cross = props => {

    return (
        <svg width="25" height="25" fill='#fff' {...props}>
            <rect
                x='12'
                width="1"
                height="25"
            />
            <rect
                x={props.showPlus ? '2' : '0'}
                y={props.showPlus ? '8' : '12'}
                width={props.showPlus ? '20' : '25'}
                height="1"
            />
        </svg>
    );
};

export default Cross;