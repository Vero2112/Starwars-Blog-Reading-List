import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Categorias = () => {
    const URLdata = "https://starwars-visualguide.com/assets/img/categories";
    const estilo = { width: 20 + "rem", height: 15 + "rem" }
    return (

        <div className="container fluid ">

            <div className="row justify-content-center">
                <div className="col-3 m-3"> <h3 className="text-white">Planets </h3>
                    <Link to="/planetas">
                        <img className="card-img-top" src={`${URLdata}/planets.jpg`} style={estilo}></img>
                    </Link>
                </div>

                <div className="col-3 m-3"><h3 className="text-white">Characters </h3>
                    <Link to="/personajes">
                        <img className="card-img-top" src={`${URLdata}/character.jpg`} style={estilo}></img>
                    </Link>
                </div>

                <div className="col-3 m-3"><h3 className="text-white">Starships </h3>
                    <Link to="/starships">
                        <img className="card-img-top" src={`${URLdata}/starships.jpg`} style={estilo}></img>
                    </Link>
                </div>

            </div>

            <div className="row justify-content-center">

                <div className="col-3 m-3"><h3 className="text-white">Vehicles </h3> 
                <Link to="/construction">
                <img className="card-img-top" src={`${URLdata}/vehicles.jpg`} style={estilo}></img>
                </Link>
                </div>


                <div className="col-3 m-3"><h3 className="text-white">Films </h3> 
                <Link to="/construction">
                <img className="card-img-top" src={`${URLdata}/films.jpg`} style={estilo}></img>
                </Link>
                </div>

                <div className="col-3 m-3"><h3 className="text-white">Species </h3>
                <Link to="/construction">
                <img className="card-img-top" src={`${URLdata}/species.jpg`} style={estilo}></img> 
                </Link>
                </div>

            </div>


        </div>
    )
};


export default Categorias