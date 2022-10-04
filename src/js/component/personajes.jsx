import React, { useEffect, useState, useContext } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";
//create your first component
const Personajes = () => {

	const [personajesCards, obtenerpersonajesCards] = useState([]);
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(false);

	// const URL = "https://www.swapi.tech/api/people";

	// const getCharacters = () => {
	// 	return fetch(URL);
	// };
	// const getCharacter = (id) => {
	// 	return fetch(`${URL}/${id}`);
	// }
	useEffect(() => {

		setLoading(true);
		// fetch("https://www.swapi.tech/api/people/1/", {
		// 	method: "GET",
		// 	headers: {
		// 		"Content-Type": "application/json",

		// 	},
		// })

		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((data) => {

		// 		obtenerDatos(data.result.properties);
		//         console.log("data" , data);
		// 		console.log("soy los detalles de las propiedades", data.result.properties );

		// 	})
		// 	.catch((e) => {
		// 		console.error(e);

		// 	});


		fetch("https://www.swapi.tech/api/people", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",

			},
		})

			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const personajes = data.results;

				console.log("soy la data.results: ", data.results);
				
				actions.agregarPersonajes(personajes);
				let cardsPersonajes = personajes.map((personaje) => {
					// console.log("uid: ", personaje.uid)
					// {!store.personaje.name ? <span>Loading...</span> : store.personaje.name}
					return (
						// <div className="row row-cols-2 row-cols-md-4">

						<div key={personaje.uid} className="h-25">


							<Card
								// name={!personaje.name ? <span>Loading...</span> : personaje.name}
								name={personaje.name}
								src={`/characters/${personaje.uid}`}
								id={personaje.uid}
								route={personaje.uid}
								type="characters"
							/>
						</div>


					);

				});

				obtenerpersonajesCards(cardsPersonajes);


			})
			.catch((e) => {
				console.error(e);

			}).finally(() => {
				setLoading(false);
			});


	}, []);
	return (
		<>
			<div className="container fluid">


				<div className="text-white"><h3> Characters</h3></div>
				<div className="card-group">

					{loading ? <Loading />
					: personajesCards}

				</div>

				{/* <div> <h3>Planetas </h3>  </div>
				<div className="card-group h-50">


					<Card
						name="Card title"
						src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E "
						info1={datos.name}
						info2={datos.hair_color}
						info3={datos.eye_color}
					/>

					<Card
						name="Card title"
						src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E "
						info1="shdhdsh"
						info2="shdhdsh"
						info3="shdhdsh"
					/>

					<Card
						name="Card title"
						src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E "
						info1="shdhdsh"
						info2="shdhdsh"
						info3="shdhdsh"
					/>

					<Card
						name="Card title"
						src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E "
						info1="shdhdsh"
						info2="shdhdsh"
						info3="shdhdsh"
					/>
				</div> */}

				<div className="border-top-danger d-flex justify-content-center">

					<Link to="/">
						<button className="btn btn-outline-light mt-5">Back!</button>
					</Link>

				</div>


			</div>
		</>
	);
};

export default Personajes;