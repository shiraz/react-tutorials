import React from 'react';

const validationComponent = (props) => {

    const style1 = {
        color: 'red'
    };

    const style2 = {
        color: 'chartreuse'
    };
    let customJsx;
    const textLength = props.textLength;
    let message = '';
    if (textLength >= 5) {
        message = 'Text long enough.';
        customJsx = <p style={style2}>{message}</p>
    }
    else {
        message = 'Please enter text.';
        customJsx = <p>{message}</p>;
    }
    if (textLength < 5) {
        message = 'Text too short.';
        customJsx = <p style={style1}>{message}</p>
    }
    return (
        <div className="validationComponentOutput">
            {customJsx}
        </div>
    )
};

export default validationComponent;