import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnmorePersonaje = () => {
  // const [datos, obtenerDatos] = useState({});
  // const [loading, setLoading] = useState(false);
  const { store, actions } = useContext(Context);

  const { id } = useParams();
  const URL = "https://www.swapi.tech/api/people";
  const getPersonajeURL = (id) => {
    return fetch(`${URL}/${id}`);
  }
  console.log("id: ", id);

  const getPersonajeDetalle = async () => {
    // try {
    //   // setLoading(true);
    //   const res = await getPersonajeURL(id);
    //   const data = await res.json();
    //   actions.setPersonajeDetalle(data.result.properties);
    //   console.log("setCharacterInfo(): ", data.result.properties);
    // } catch (err) {
    //   console.log(err);
    // }

    getPersonajeURL(id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const personaje = data.result.properties;

        console.log("soy la data del personaje: ", data.result.properties);
        actions.setPersonajeDetalle(personaje);
      })
      .catch((e) => {
        console.error(e);

      });
  };

  useEffect(() => {
    getPersonajeDetalle();

    // fetch("https://www.swapi.tech/api/people/1/", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",

    //   },
    // })

    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {

    //     obtenerDatos(data.result.properties);
    //     console.log("soy la data: ", data);
    //     console.log("soy la data propiedades: ", data.result.properties);
    //     console.log("soy la data detalle: ", data.result.properties.height);
    //     console.log("soy la data mensaje: ", data.message);
    //     let an_obj = data.result.properties;
    //     console.log(Object.keys(an_obj));

    //   })
    //   .catch((e) => {
    //     console.error(e);

    //   });



  }, []);



  return (
    <>
      <div className="container-fluid d-flex justify-content-center">

        <div className="card mb-3 ms-5 me-5 w-75 bg-transparent text-white"  >
          <div className="row g-0">
            <div className="card-body d-flex">
              <div className="col-6">
                <img
                  className="img-fluid"
                  style={{ width: 40 + "rem", height: 40 + "rem", margin: "auto" }}
                  src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                >
                </img>
              </div>
              <div className="col-6 m-3">
                <h1 className="card-title">
                  <p className="card-text">{!store.personajeDetalle.name ? <span>Loading...</span> : store.personajeDetalle.name}</p>
                </h1>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex">
                  <p> <strong>Name: </strong>  {!store.personajeDetalle.name ? <span>Loading...</span> : store.personajeDetalle.name}</p>
                </div>

                <div className="d-flex">
                  <p> <strong>Birth year: </strong>   {!store.personajeDetalle.birth_year ? <span>Loading...</span> : store.personajeDetalle.birth_year}</p>
                </div>

                <div className="d-flex">
                  <p> <strong>Gender: </strong>  {!store.personajeDetalle.gender ? <span>Loading...</span> : store.personajeDetalle.gender}</p>
                </div>

                <div className="d-flex">
                  <p> <strong>Height: </strong>  {!store.personajeDetalle.height ? <span>Loading...</span> : store.personajeDetalle.height}</p>
                </div>

                <div className="d-flex">
                  <p> <strong>Skin color:  </strong>  {!store.personajeDetalle.skin_color ? <span>Loading...</span> : store.personajeDetalle.skin_color}</p>
                </div>

                <div className="d-flex">
                  <p>  <strong>Eye color: </strong> {!store.personajeDetalle.eye_color ? <span>Loading...</span> : store.personajeDetalle.eye_color}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-danger d-flex justify-content-center">

        <Link to="/">
          <button className="btn btn-outline-light">Back Home!</button>
        </Link>

      </div>

    </>
  )
};

export default LearnmorePersonaje