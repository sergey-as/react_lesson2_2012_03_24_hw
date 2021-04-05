import React from 'react';

export function Checkbox(props) {
    return (
        <div>
            <input type="checkbox" name="hide" checked={props.checked}/>
              <label htmlFor="hide">{props.hide}</label>
        </div>
);
}

export default Checkbox;
