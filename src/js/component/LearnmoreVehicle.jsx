import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnmoreVehicle = () => {

    const { store, actions } = useContext(Context);

    const { id } = useParams();
    const URL = "https://www.swapi.tech/api/vehicles";
    const getStarshipURL = (id) => {
        return fetch(`${URL}/${id}`);
    }
    console.log("id: ", id);

    const getStarshipInfo = async () => {

        getStarshipURL(id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const starship = data.result.properties;
                const descripcion = data.result;
                console.log("soy la data del starship: ", data.result.description);
                actions.setStarshipDetalle(starship);
                actions.setStarshipDescripcion(descripcion);
            })
            .catch((e) => {
                console.error(e);

            });

    };

    useEffect(() => {
        getStarshipInfo();
    }, []);



    return (
        <>
            <div className="container-fluid d-flex justify-content-center container">
                <div className="card mb-3 ms-5 me-5 w-75 bg-transparent text-white" >

                    <div className=" ">

                        <div className="row g-0">

                            <div className="card-body d-flex">

                                <div className="col-6">
                                    <img
                                        className="img-fluid"
                                        width={600}
                                        height={400}
                                        // style={{ width: 50 + "%", height: 150 + "%"}}
                                        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                                        alt="Card image cap"
                                        onError={(e) => {
                                            e.target.onerror = null
                                            e.target.src = "https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"
                                        }}
                                    ></img>
                                </div>
                                <div className="col-6 m-3">
                                    <h1 className="card-title">
                                        <p className="card-text">{!store.starshipDetalle.name ? <span>Loading...</span> : store.starshipDetalle.name}</p>

                                    </h1>

                                    
                                    <div className="d-flex">
                                        <p> <strong>Name: </strong>  {!store.starshipDetalle.name ? <span>Loading...</span> : store.starshipDetalle.name}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Model: </strong>   {!store.starshipDetalle.model ? <span>Loading...</span> : store.starshipDetalle.model}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Passengers: </strong>  {!store.starshipDetalle.passengers ? <span>Loading...</span> : store.starshipDetalle.passengers}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Consumables: </strong>  {!store.starshipDetalle.consumables ? <span>Loading...</span> : store.starshipDetalle.consumables}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Starship class:  </strong>  {!store.starshipDetalle.starship_class ? <span>Loading...</span> : store.starshipDetalle.starship_class}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p>  <strong>Length: </strong> {!store.starshipDetalle.length ? <span>Loading...</span> : store.starshipDetalle.length}</p>
                                    </div>

                                </div>
                            </div>

                      
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-top-danger d-flex justify-content-center">

                <Link to="/starships">
                    <button className="btn btn-outline-light">Back!</button>
                </Link>

            </div>

        </>
    )
};

export default LearnmoreVehicle