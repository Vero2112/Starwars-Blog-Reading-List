import React, { useEffect, useState } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import Personajes from "../component/personajes.jsx";
import Planetas from "../component/planetas.jsx";

//create your first component
const Home = () => {

	return (
		<>
			<div className="container fluid">
				<div className="row ">
					
					
						<ul className="nav nav-pills justify-content-center m-3" id="pills-tab" role="tablist">
							{/* <!-- INICIO BOTON DE FORMATO 1 --> */}
							<li className="nav-item" role="presentation">
								<button className="btn btn-outline-primary border-white" id="pills-home-tab" data-bs-toggle="pill"
									data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
									aria-selected="true"> Characters
									
								</button>
							</li>
							{/* <!-- FIN BOTON DE FORMATO 1 -->
									<!-- INICIO BOTON DE FORMATO 2 --> */}
							<li className="nav-item" role="presentation">
								<button className="btn btn-outline-primary border-white" id="pills-profile-tab"
									data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
									aria-controls="pills-profile" aria-selected="false">Planets
									
								</button>
							</li>
							{/* <!-- FIN BOTON DE FORMATO 2 --> */}
						</ul>
					
					
				</div>


			</div>

			<div className="tab-content" id="pills-tabContent">
				<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
					<Personajes />
				</div>
				<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
					<Planetas />
				</div>
			</div>
		</>
	);
};

export default Home;
