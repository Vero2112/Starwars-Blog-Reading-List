import React, { useEffect, useState, useContext } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
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
                    // let cardsPlanetas = planetas.map((planeta, index) => {

                    // console.log("uid: ", planeta.uid)
                    getPlaneta(planeta.uid)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        const planetas = data.result.properties;
                        // console.log("soy la data de todos los planetas: ", data);
                        // console.log("soy los detalles de todos los planetas: ", data.result.properties);
                        console.log("soy los detalles rotation_period de todos los planetas: ", data.result.properties.rotation_period);
                        actions.setPlanetaDetalle(planetas);
                    })
                    .catch((e) => {
                        console.error(e);
        
                    });
                    return (
                        <div key={planeta.uid}>
                            <Card
                            // key={planeta.uid}
                                name={planeta.name}
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E "
                                key1="Gravity: "
                                key2="Rotation period: "
                                value1="{store.planetasInfo.value1}"
                                value2={store.planetaDetalle.rotation_period}
                                route={"learnmoreplaneta/" + planeta.uid}
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


                <div><h3> Planetas</h3></div>
                <div className="card-group">

                    {planetasCards}

                </div>


            </div>
        </>
    );
};

export default Planetas;