import React, { useEffect } from "react";
import "./love.css";


export default function Love()  {
    useEffect(() => {
		document.title = "LOVE";  
	}, []);

	return (
        <div className= "love">
            <div class="wrapper">
                <input type="checkbox" id="titit1"/>
                <label for="titit1">I</label>
                <input type="checkbox" id="titit2"/>
                <label for="titit2">love</label>
                <input type="checkbox" id="titit3"/>
                <label for="titit3">you</label>
            </div>
            <button>Made by Ajay-o-s With 💖</button>
            <span>(Click on words)</span>
        </div>
	);
};

