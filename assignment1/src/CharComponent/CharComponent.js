import React from 'react';

const charComponent = (props) => {
    const inlineStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };
    return (
        <div className="charComponentOutput">
            <p style={inlineStyle}>{props.textCharacter}</p>
        </div>
    )
};

export default charComponent;