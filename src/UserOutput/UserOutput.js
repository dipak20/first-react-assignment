import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>I've proud of all the traditions of my country.</p>
        </div>
    )
}

export default userOutput;