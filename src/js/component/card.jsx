import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
//create your first component
const Card = (props) => {
	const clase = props.forzarHeight
		? "card text-center h-100"
		: "card text-center";
	const { store, actions } = useContext(Context);
	const favorites = store.favorites
	const card = { name: props.name, id: props.id, src: props.route }
	const favoriteInList = favorites.find((favorite) => {
		return favorite.name === card.name
	})
	let favInListClassName = favoriteInList === undefined ? transparentHeart : redHeart
	const [buttonClassName, setButtonClassname] = useState(favInListClassName)
	const transparentHeart = "fa fa-heart "
	const redHeart = "fa fa-heart text-danger"

	const addOrDeleteFavorites = () => {
		if (favoriteInList != undefined) {
			actions.deleteFavorites(card.name);
			setButtonClassname(transparentHeart)
		}
		else if (favoriteInList === undefined) {		
			actions.saveFavorite(card.name, card.id, card.src)
			setButtonClassname(redHeart)
		}

	}
	const validacion = () => {
		return favorites.find((favorite) => {
			return favorite.name === props.name
		})
	}
	return (
		<>

			<div className={clase + " m-1 text-white border-dark "} id="cardHome">

				<Link to={props.route}>
					<img
						className="card-img-top"					
						style={{ width: 18 + "rem", height: 25 + "rem" }}
						src={props.src}
						alt="Card image cap"
						onError={(e) => {
							e.target.onerror = null
							e.target.src = "https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"
						}}
					>
					</img>
				</Link>

				<div className="card-body d-flex justify-content-between ">
					<h4 className="card-title mt-2">{props.name}</h4>

					<button
						className={"btn btn-lg bg-transparent"}
						id={props.id}
					>
						<i
							className={"fa fa-heart " + (validacion() ? redHeart : transparentHeart)}
							onClick={() => { addOrDeleteFavorites(card) }}
						/>

					</button>


				</div>

			</div>

		</>
	);
};

Card.propTypes = {
	name: propTypes.string,
	src: propTypes.string,
	id: propTypes.string,
	type: propTypes.string,
	route: propTypes.string,
};
export default Card;