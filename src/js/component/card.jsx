import React, { useContext} from "react";
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
	return (
		<>

			<div className={clase + " m-1 text-white border-white "} id="cardHome">

				<Link to={props.route}>
					<img
						className="card-img-top"
						// src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180d86b44a0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180d86b44a0%22%3E%3Crect%20width%3D%22276%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22102.1937484741211%22%20y%3D%22106.24000034332275%22%3E276x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E "
						style={{ width: 18 + "rem", height: 25 + "rem"}}
						src={props.src}
						alt="Card image cap"></img>
				</Link>

				<div className="card-body d-flex justify-content-between">
					<h4 className="card-title mt-2">{props.name}</h4>

					{/* <p className="card-text">
						{props.key1} {props.value1}
					</p>
					<p className="card-text">
						{props.key2} {props.value2}
					</p> */}

					<button
						className="btn btn-lg bg-transparent"
						id="boton"
						onClick={() => {
							actions.saveFavorite(props.name, props.id, props)
						  }}
						role="button">
						<i className="fa fa-heart text-danger" />
					</button>
					

				</div>
				


				{/* <div className="card-img-overlay text-end">
					<button
						className="btn btn-lg bg-transparent ms-1 justify-content-md-end"
						id="boton"
						href="/favoritos"
						role="button">
						<i className="fa fa-heart text-danger" />
					</button>
				</div> */}



				
				
			</div>

		</>
	);
};

Card.propTypes = {
	name: propTypes.string,
	src: propTypes.string,
	id: propTypes.string,
	value1: propTypes.string,
	value2: propTypes.string,
	key1: propTypes.string,
	key2: propTypes.string,
	route: propTypes.string,
};
export default Card;