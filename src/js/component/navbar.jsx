import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-2 mb-0 h1">
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" width="60px"></img>

				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-2">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
