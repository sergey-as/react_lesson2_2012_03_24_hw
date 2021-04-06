import React from 'react';

export function Checkbox({user, funcHide}) {

    return (
        <div>
            <input onClick={funcHide} type="checkbox" name="visible" defaultChecked={true}/>
            <label htmlFor="visible">{user.visible ? 'visible' : 'hidden'}</label>
        </div>
    );
}

export default Checkbox;
