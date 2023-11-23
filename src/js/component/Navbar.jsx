import React, { useContext } from "react"; //1. Import hook useContext
import { Link } from "react-router-dom";
import starwarsLogo from '../../img/starwars_logo.png';
import { BtnFavorites } from "./BtnFavorites.jsx";
import { Context } from "../store/appContext.js" //2.Import Context

export const Navbar = () => {
	const  {store, actions } = useContext (Context); //3. destructuring store & actions

	return (
		<nav className="navbar navbar-light bg-light ms-4 me-4">
			<Link to= "/" className="navbar-brand">
				<span><img src={ starwarsLogo } alt="starwars logo" width="100" height="150"/></span>
			</Link>
			<Link to= "/characters" className="nav-link">Characters</Link>
			<Link to= "/planets" className="nav-link">Planets</Link>
			<div className="ml-auto">
			<Link to= "/favorites"><BtnFavorites /></Link>
				
			</div>
		</nav>
	);
};
