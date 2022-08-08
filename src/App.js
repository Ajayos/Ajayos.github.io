import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import React, { useEffect, useState } from "react";
import Home from "./home.js";


function App() {
  return (
    <div className="App">
    	<Router>
    		<div className="app-content">
    			<Switch>
        			<Route component={ Home } />
      			</Switch>
    		</div>
  		</Router>
    </div>
  );
}

export default App;
