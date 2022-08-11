import { BrowserRouter as Router, Switch } from "react-router-dom";
//import React, { useEffect, useState } from "react";
import Home from "./home.js";

function App() {
	const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
  const ev = {
	width: width,
	height: height
  }
  return (
    <div className="App">
    	<Router>
    		<div className="app-content">
    			<Switch>
        			<Home ev={ev}  />
      			</Switch>
    		</div>
  		</Router>
    </div>
  );
}

export default App;
