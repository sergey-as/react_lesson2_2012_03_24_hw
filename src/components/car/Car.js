import React from 'react';
import './Car.css';

export function Car({car}) {
    return (
        <div className="car">
            <h1>model {car.model.toUpperCase()}</h1>
            <h2>year {car.year}</h2>
            <h2>power {car.power}</h2>
            <h2>color {car.color}</h2>
        </div>
    );
}

export default Car;
