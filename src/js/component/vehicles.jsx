import React, { useEffect, useState, useContext } from "react";
import Card from "./card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//create your first component
const Vehicles = () => {

    const { id } = useParams();
    const [vehicleCards, obtenerVehicleCards] = useState([]);
    const { store, actions } = useContext(Context);
    const URL = "https://www.swapi.tech/api/vehicles";
    const getVehicle = () => {
        return fetch(`${URL}`);
    }

    const getVehicleCards = async () => {
        getVehicle()
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const vehicles = data.results;

                console.log("soy las cards de todos los vehicles: ", data.results);
                actions.setVehicles(vehicles);
                let cardsVehicles = vehicles.map((vehicle) => {
                    return (
                        <div key={vehicle.uid}>
                            <Card
                               
                                name={vehicle.name}
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                // route={"/construction"}
                                route={vehicle.uid}
                            />
                        </div>
                    );

                });

                obtenerVehicleCards(cardsVehicles);


            })
            .catch((e) => {
                console.error(e);

            });

    };



    useEffect(() => {
        getVehicleCards();

    }, []);
    return (
        <>
            <div className="container fluid">


                <div className="text-white"><h3> Vehicles</h3></div>
                <div className="card-group">

                    {vehicleCards}

                </div>

                <div className="border-top-danger d-flex justify-content-center">

                    <Link to="/">
                        <button className="btn btn-outline-light mt-5">Back!</button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Vehicles;