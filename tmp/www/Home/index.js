import { React, useState } from "react";
import "../../css/home.css";


function Home() {
 
	return (
		<div className="home">
      


		    <div className="search_one"/>
        <div className="search_two"/> 
          <input 
            type="text"
            placeholder="Search..." 
            className="search"
            />
        <div className="search__icon" />
        <div className="Microphone__icon" /> 

		</div>
	);
};

export default Home;
