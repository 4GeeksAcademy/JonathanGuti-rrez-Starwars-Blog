import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import StarwarsCharacters from "./views/StarwarsCharacters";
import StarwarsPlanets from "./views/StarwarsPlanets";
import StarwarsVehicles from "./views/StarwarsVehicles";
import CharacterDetails from "./views/CharactersDetails";
import PlanetsDetails from "./views/PlanetsDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/StarwarsCharacters/:id" element={<CharacterDetails />} />


						<Route path="/StarwarsPlanets/:id" element={<PlanetsDetails />} />
						<Route path="/StarwarsVehicles" element={<StarwarsVehicles />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
