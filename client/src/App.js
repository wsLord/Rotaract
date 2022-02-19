import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/homepage";
import PhotoGallery from "./components/photoGallery";
import Payment from "./components/payment";
import aboutUs from "./components/aboutUs";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/gallery" component={PhotoGallery} />
					<Route path="/donate" component={Payment} />
					<Route path="/about" component={aboutUs} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
