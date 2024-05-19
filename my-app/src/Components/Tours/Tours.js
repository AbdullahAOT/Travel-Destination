import React from 'react';
import './Tours.css';
import toursData from "../../Data/db.json";

function Tours() {
    return (
        <div class="toursDiv">
            {toursData.map(mapData => (
            <div>
                <p>{mapData.name}</p> <br></br>
                <img src={mapData.image} alt={mapData.name}/>
            </div>
        ))}
        </div>
    );
}

export default Tours;