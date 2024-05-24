import React, { useState } from 'react';
import './Tours.css';
import toursData from "../../Data/db.json";

function Tours() {
    const [tourButtons, setTourButtons] = useState(Array(toursData.length).fill(false));

    function tourButtonClicked(index) {
        setTourButtons(prevButtons => {
            const newButtons = [...prevButtons];
            newButtons[index] = !newButtons[index];
            return newButtons;
        });
    }

    return (
        <div className="toursDiv">
            {toursData.map((tour, index) => (
                <div key={index}>
                    <p>{tour.name}</p> <br />
                    <img src={tour.image} alt={tour.name} />
                    <p>{tourButtons[index] ? tour.info : tour.info.substring(0, 60)+"..."}</p>
                    <button onClick={() => tourButtonClicked(index)}>
                        {tourButtons[index] ? "See Less" : "See More"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Tours;
