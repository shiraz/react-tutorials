import React from 'react';

const userInput = (props) => {

    const style = {
        color: 'yellow',
        background: 'red',
        fontSize: '46px',
        border: '8px solid blue'
    };

    return (
        <div className="mainInput">
            <input style={style} onChange={props.changed} type="text" value={props.username}/>
        </div>
    )
};

export default userInput;