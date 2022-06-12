import React from "react";
import Cardgroup from "../component/cardgroup.jsx";
import "../../styles/home.css";

//create your first component
const Home = () => {
	return (
	<>
		<div className="card-group">
		<Cardgroup/><Cardgroup/><Cardgroup/><Cardgroup/>
		</div>
		<div className="card-group">
		<Cardgroup/><Cardgroup/><Cardgroup/><Cardgroup/>
		</div> 
	</>
	);
};

export default Home;
