import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnmorePlaneta = () => {

    const { store, actions } = useContext(Context);

    const { id } = useParams();
    const URL = "https://www.swapi.tech/api/planets";
    const getPlanetaURL = (id) => {
        return fetch(`${URL}/${id}`);
    }
    console.log("id: ", id);

    const getPlanetaInfo = async () => {

        getPlanetaURL(id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const planeta = data.result.properties;
                const descripcion = data.result;
                console.log("soy la data del planeta: ", data.result.description);
                actions.setPlanetaDetalle(planeta);
                actions.setPlanetaDescripcion(descripcion);
            })
            .catch((e) => {
                console.error(e);

            });

    };

    useEffect(() => {
        getPlanetaInfo();
    }, []);



    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
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
                                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                        alt="Card image cap"
                                        onError={(e) => {
                                            e.target.onerror = null
                                            e.target.src = "https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"
                                        }}
                                    ></img>
                                </div>
                                <div className="col-6 m-3">
                                    <h1 className="card-title">
                                        <p className="card-text">{!store.planetaDetalle.name ? <span>Loading...</span> : store.planetaDetalle.name}</p>

                                    </h1>

                                    <p>{!store.setPlanetaDescripcion ? <span>Loading...</span> : store.setPlanetaDescripcion}</p>
                                    <div className="d-flex">
                                        <p> <strong>Name: </strong>  {!store.planetaDetalle.name ? <span>Loading...</span> : store.planetaDetalle.name}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Diameterr: </strong>   {!store.planetaDetalle.diameter ? <span>Loading...</span> : store.planetaDetalle.diameter}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Rotation period: </strong>  {!store.planetaDetalle.rotation_period ? <span>Loading...</span> : store.planetaDetalle.rotation_period}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Orbital period: </strong>  {!store.planetaDetalle.orbital_period ? <span>Loading...</span> : store.planetaDetalle.orbital_period}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p> <strong>Gravity:  </strong>  {!store.planetaDetalle.gravity ? <span>Loading...</span> : store.planetaDetalle.gravity}</p>
                                    </div>

                                    <div className="d-flex">
                                        <p>  <strong>Population: </strong> {!store.planetaDetalle.name ? <span>Loading...</span> : store.planetaDetalle.name}</p>
                                    </div>

                                </div>
                            </div>

                      
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-top-danger d-flex justify-content-center">

                <Link to="/planetas">
                    <button className="btn btn-outline-light">Back!</button>
                </Link>

            </div>

        </>
    )
};

export default LearnmorePlaneta