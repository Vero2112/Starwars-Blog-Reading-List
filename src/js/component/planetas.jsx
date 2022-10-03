import React, { useEffect, useState, useContext } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//create your first component
const Planetas = () => {

    const { id } = useParams();
    const [planetasCards, obtenerplanetasCards] = useState([]);
    const { store, actions } = useContext(Context);
    const URL = "https://www.swapi.tech/api/planets";
    const getPlanetas = () => {
        return fetch(`${URL}`);
    }

    const getPlanetasCards = async () => {
        getPlanetas()
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const planetas = data.results;

                console.log("soy las cards de todos los planetas: ", data.results);
                actions.agregarPlanetas(planetas);
                let cardsPlanetas = planetas.map((planeta) => {
                    return (
                        <div key={planeta.uid}>
                            <Card
                                // key={planeta.uid}
                                name={planeta.name}
                                src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
                                key1="Gravity: "
                                key2="Rotation period: "
                                value1="{store.planetasInfo.value1}"
                                value2={store.planetaDetalle.rotation_period}
                                route={planeta.uid}
                            />
                        </div>
                    );

                });

                obtenerplanetasCards(cardsPlanetas);


            })
            .catch((e) => {
                console.error(e);

            });

    };



    useEffect(() => {
        getPlanetasCards();

    }, []);
    return (
        <>
            <div className="container fluid">


                <div className="text-white"><h3> Planets</h3></div>
                <div className="card-group">

                    {planetasCards}

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

export default Planetas;