import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import React, { useEffect, useState } from "react";
import Home from "./pages/Home.js";
import Search from "./search/Search.js";
//import Love from "./pages/love.js";

function App() {
  return (
    <div className="App">
    	<Router>
			<Switch>
				{ /*<Route path="/love" component={Love} />*/}
				<Route path="/search" component={Search} />
				<Route component={Home} />
			</Switch>
  		</Router>
    </div>
  );
}

export default App;
