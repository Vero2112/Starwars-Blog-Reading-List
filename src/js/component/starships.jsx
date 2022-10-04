import React, { useEffect, useState, useContext } from "react";
import Card from "./card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//create your first component
const Starship = () => {

    const { id } = useParams();
    const [starshipCards, obtenerStarshipCards] = useState([]);
    const { store, actions } = useContext(Context);
    const URL = "https://www.swapi.tech/api/starships";
    const getStarship = () => {
        return fetch(`${URL}`);
    }

    const getStarshipCards = async () => {
        getStarship()
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const starships = data.results;

                console.log("soy las cards de todos los starships: ", data.results);
                actions.agregarStarships(starships);
                let cardsStarships = starships.map((starship) => {
                    return (
                        <div key={starship.uid}>
                            <Card
                               
                                name={starship.name}
                                src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                                // route={"/construction"}
                                route={starship.uid}
                                id={starship.uid}
                            />
                        </div>
                    );

                });

                obtenerStarshipCards(cardsStarships);


            })
            .catch((e) => {
                console.error(e);

            });

    };



    useEffect(() => {
        getStarshipCards();

    }, []);
    return (
        <>
            <div className="container fluid">


                <div className="text-white"><h3> Starship</h3></div>
                <div className="card-group">

                    {starshipCards}

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

export default Starship;