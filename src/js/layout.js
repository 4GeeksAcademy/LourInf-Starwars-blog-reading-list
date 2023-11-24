import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//Setting context
import injectContext from "./store/appContext";
//Views
import { Home } from "./views/Home.jsx";
import { Characters } from "./views/Characters.jsx";
import { CharacterDetails } from "./views/CharacterDetails.jsx";
import { Planets } from "./views/Planets.jsx";
import { File404 } from "./views/File404.jsx";
//Components
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

//create first component
const Layout = () => {
	//basename can be set on the .env file
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/details" element={<CharacterDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/file404" element={<File404 />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
