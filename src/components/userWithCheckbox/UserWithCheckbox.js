import React from 'react';
import {User} from "../user/User";
import {Checkbox} from "../checkbox/Checkbox";

export function UserWithCheckbox({user, funcHide}) {
    // console.log(user);
    return (
        <div>
            <User user={user}/>
            <Checkbox user={user} funcHide={funcHide}/>
        </div>
    );
}

export default UserWithCheckbox;
