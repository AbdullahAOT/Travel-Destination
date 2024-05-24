import React from 'react';
import Tours from "../Tours/Tours.js";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cities from "../Cities/Cities.js";

function HomeRoutes(){
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/city/:cityID' element={<Cities></Cities>}></Route>
        </Routes>
    </Router>
    );
}

function Home() {
    return(
        <>
        <Header></Header>
        <Tours></Tours>
        <Footer></Footer>
        </>
    );
}

export default HomeRoutes;