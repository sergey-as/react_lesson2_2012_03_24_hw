import React from 'react';
import './User.css';

function User({user}) {
    return (
        <div className="user">
            <h3>name {user.name.toUpperCase()}</h3>
            <h4>age {user.age}</h4>
            <h4>status {user.status.toString()}</h4>
        </div>
    );
}

export default User;
