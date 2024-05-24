import React from 'react';
import { useParams } from "react-router-dom";
import citiesData from "../../Data/db.json";
import Header from "../Header/Header";
import "./Cities.css";

function Cities() {
    let { cityID } = useParams();
    let resultCity = citiesData.filter(city => city.id === cityID);

    return (
        <div className="container">
            <Header />
            {resultCity.length > 0 ?
                <div className="city-info">
                    <h3>{resultCity[0].info}</h3>
                </div>
                :
                <h1 className="error-message">Page not found</h1>
            }
        </div>
    );
}

export default Cities;
