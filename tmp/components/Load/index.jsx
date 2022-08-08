import React from "react";
import "../../css/loader.css";

const Loader = ({ done }) => {
	return (
		<div className="loader">
			<div className={`loader__progress ${done ? "loader__progress--done" : ""}`} />
			<h1 className="loader_2"> Ajay o s</h1>
		</div>
	);
};

export default Loader;
