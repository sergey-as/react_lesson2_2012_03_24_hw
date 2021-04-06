import React from 'react';
import './User.css';

export function User({user}) {
    // console.log(user);
    return (
        <div className={`user${user.visible ? '' : ' hide'}`}>
            <h3>name {user.name.toUpperCase()}</h3>
            <h4>age {user.age}</h4>
            <h4>status {user.status.toString()}</h4>
        </div>
    );
}

export default User;
