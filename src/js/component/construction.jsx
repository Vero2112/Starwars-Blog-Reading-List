import React, { useEffect, useState, useContext } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//create your first component
const Construction = () => {

    return (
        <>
            <div className="container fluid">


                <div className="position-absolute top-50 start-50 translate-middle text-white container">
                    <h3> Cooming soon...</h3>
                </div>
               
    
            </div>
        </>
    );
};

export default Construction;