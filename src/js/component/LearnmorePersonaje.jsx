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

        <div className="card mb-3 ms-5 me-5 w-75 "  >

          <div className="row g-0">

            <div className="card-body d-flex">

              <div className="col-6">
                <img className="img-fluid" width={800} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"></img>
              </div>
              <div className="col-6 m-3">
                <h5 className="card-title">

                  {store.personajeDetalle.name}

                </h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div></div>
            {/* </div> */}
            <div className="card-footer d-flex">


              <div className="col-2">
                <p>Name</p>
                <p>{store.personajeDetalle.name}</p>
              </div>

              <div className="col-2">
                <p>Birth year</p>
                <p>{store.personajeDetalle.birth_year}</p>
              </div>

              <div className="col-2">
                <p>Gender</p>
                <p>{store.personajeDetalle.gender}</p>
              </div>

              <div className="col-2">
                <p>Height</p>
                <p>{store.personajeDetalle.height}</p>
              </div>

              <div className="col-2">
                <p>Skin color</p>
                <p>{store.personajeDetalle.skin_color}</p>
              </div>

              <div className="col-2">
                <p>Eye color</p>

                <p>{store.personajeDetalle.eye_color}</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-danger d-flex justify-content-center">

        <Link to="/">
          <button className="btn btn-primary">Back Home!</button>
        </Link>

      </div>

    </>
  )
};

export default LearnmorePersonaje