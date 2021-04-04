import React from 'react';
import './Driver.css';

const clickHandler =()=>{

}

function Driver({driver, funcDeleteButton}) {
    return (
        <div className="driver">
            <h3>name {driver.name.toUpperCase()}</h3>
            <h4>age {driver.age}</h4>
            <h4>gender {driver.gender}</h4>
            <h4>experience {driver.experience}</h4>
            <button onClick={funcDeleteButton}>delete</button>
        </div>
    );
}

export default Driver;
