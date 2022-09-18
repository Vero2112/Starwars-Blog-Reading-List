import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites.id)
	return (
		<nav className="navbar navbar-light mb-3 text-end" id="navbar">
			<div className="col-6">
				<Link to="/">
					<span className="navbar-brand ms-2 mb-0 h1  ">

						<img src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"

							width="60px"></img>

					</span>
				</Link>
			</div>

			<div className="col-5 me-5 text-end">
			<div className="btn-group ">
				<button
					// className="btn btn-outline-light me-2"
					className="btn btn-outline-light me-2 dropdown-toggle"
					type="button"
					id="dropdownMenuClickableInside"
					data-bs-toggle="dropdown"
					data-bs-auto-close="outside"
					aria-expanded="false"
					onClick={() => {
						actions.listarFavorites();
					}}
				>
					Favorites
					<span className="text-light">{" "}{"("}{actions.numFavorites()}{")"}</span>
				</button>
				<ul
					className="dropdown-menu dropdown-menu-dark me-5"
					aria-labelledby="dropdownMenuClickableInside"
				>
					{store.favorites.map((favorite) => {
						console.log("favorite:", favorite);
						return (
							<>
								<li index={favorite.id}>
									<a className="dropdown-item" >
										{favorite.name}{" "}{favorite.id}
										<button
											onClick={() => actions.deleteFavorites(favorite.name)}
											className="btn text-white fa fa-trash ms-2"
										></button>
									</a>
								</li>
							</>
						);
					})}
				</ul>
				</div>
			</div>
		</nav>
	);
};
