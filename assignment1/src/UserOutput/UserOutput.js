import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="mainOutput">
            <p>First paragraph from UserOutput. The username value from props is {props.username}.</p>
            <p>Second paragraph from UserOutput.</p>
        </div>
    )
};

export default userOutput;