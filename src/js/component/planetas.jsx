import React, { useEffect, useState, useContext } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";

//create your first component
const Planetas = () => {

    const { id } = useParams();
    const [planetasCards, obtenerplanetasCards] = useState([]);
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);

    const URL = "https://www.swapi.tech/api/planets";
    const getPlanetas = () => {
        return fetch(`${URL}`);
    }

    const getPlanetasCards = async () => {
        setLoading(true);
        getPlanetas()
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const planetas = data.results;



                console.log("soy las cards de todos los planetas: ", data.results);
                actions.agregarPlanetas(planetas);
                let cardsPlanetas = planetas.map((planeta) => {
                    // console.log("planeta.name: ", planeta.name);
                    const planetaname = planeta.name
                    return (
                        <div key={planeta.uid}>
                            <Card
                                // key={planeta.uid}
                                name={planeta.name}
                                // src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
                                type="planets"
                                src={`/planets/${planeta.uid}`}
                                id={planeta.uid}
                            />
                        </div>
                    );

                });

                obtenerplanetasCards(cardsPlanetas);


            })
            .catch((e) => {
                console.error(e);

            }).finally(() => {
                setLoading(false);
            });

    };



    useEffect(() => {
        getPlanetasCards();

    }, []);
    return (
        <>
            <div className="container fluid">

                {/* <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Search...</label>
                </div> */}

                <label for="exampleDataList" className="form-label">Datalist example</label>
                <div className="d-flex">
                    <input className="form-control w-25 justify-content position-relative top-0 start-50 translate-middle-x" type="url" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." >
                        {/* <i class="fa fa-search" aria-hidden="true"></i> */}

                    </input>

                    <button
                        className="ms-5"
                    // onClick={`/${favorite.type}/${favorite.id}`}
                    >
                        <i class="fa fa-search" aria-hidden="true"></i>

                    </button>

                </div>
                <datalist id="datalistOptions">
                    {store.favorites.map((favorite) => {
                        console.log("favoritedatalist:", favorite);
                        // console.log("favorite url  :", favorite.id);
                        return (
                            // href={`/${favorite.type}/${favorite.id}`} 

                            <option value={favorite.name}></option>
                            

                        );
                    })}
                </datalist>

                <div className="text-white"><h3> Planets </h3></div>
                <div className="card-group">

                    {loading ? <Loading />
                        : planetasCards}

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