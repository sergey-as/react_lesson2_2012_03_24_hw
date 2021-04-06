import React from 'react';

export function Checkbox({visible}) {
    return (
        <div>
            <input type="checkbox" name="visible" checked={visible}/>
              <label htmlFor="visible">{visible ? 'visible' : 'hidden'}</label>
        </div>
);
}

export default Checkbox;
