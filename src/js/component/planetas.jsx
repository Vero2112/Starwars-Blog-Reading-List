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
                    // // let cardsPlanetas = planetas.map((planeta, index) => {

                    // // console.log("uid: ", planeta.uid)
                    // getPlaneta(planeta.uid)
                    // .then((res) => {
                    //     return res.json();
                    // })
                    // .then((data) => {
                    //     const planetas = data.result.properties;
                    //     // console.log("soy la data de todos los planetas: ", data);
                    //     // console.log("soy los detalles de todos los planetas: ", data.result.properties);
                    //     console.log("soy los detalles rotation_period de todos los planetas: ", data.result.properties.rotation_period);
                    //     actions.setPlanetaDetalle(planetas);
                    // })
                    // .catch((e) => {
                    //     console.error(e);

                    // });
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

    const getPlaneta = (id) => {
        return fetch(`${URL}/${id}`);
    }
    // console.log("id: ", id);

    // const getPlanetaInfo = async () => {

    //     getPlaneta(id)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             const planetas = data.result.properties;

    //             console.log("soy la data de todos los planetas: ", data.result.properties);
    //             actions.setPlanetaDetalle(planetas);
    //         })
    //         .catch((e) => {
    //             console.error(e);

    //         });

    // };

    useEffect(() => {
        getPlanetasCards();

    }, []);
    return (
        <>
            <div className="container fluid">


                <div className="text-white"><h3> Planetas</h3></div>
                <div className="card-group">

                    {planetasCards}

                </div>

                <div className="border-top-danger d-flex justify-content-center">

                    <Link to="/">
                        <button className="btn btn-outline-light">Back!</button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Planetas;