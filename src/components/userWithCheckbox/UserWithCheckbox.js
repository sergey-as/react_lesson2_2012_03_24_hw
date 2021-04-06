import React from 'react';
import {User} from "../user/User";
import {Checkbox} from "../checkbox/Checkbox";

export function UserWithCheckbox({user}) {
    console.log(user);
    return (
        <div>
            <User user={user}/>
            <Checkbox visible={user.visible}/>
        </div>
    );
}

export default UserWithCheckbox;
