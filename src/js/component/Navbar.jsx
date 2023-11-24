import React, { useContext } from "react"; //1. Import hook useContext
import { Link } from "react-router-dom";
import starwarsYellow from '../../img/starwars_yellow.png';
import { BtnFavorites } from "./BtnFavorites.jsx";
import { Context } from "../store/appContext.js" //2.Import Context

export const Navbar = () => {
	const  {store, actions } = useContext (Context); //3. destructuring store & actions

	return (
		<nav className="navbar bg-dark ps-3 pe-3">
			<Link to= "/" className="navbar-brand">
				<span><img src={ starwarsYellow } alt="starwars logo" width="120" height="80"/></span>
			</Link>
			<Link to= "/characters" className="nav-link text-decoration-none text-secondary fs-4">Characters</Link>
			<Link to= "/planets" className="nav-link text-decoration-none text-secondary fs-4">Planets</Link>
			<div className="ml-auto">
			<Link to= "/favorites"><BtnFavorites /></Link>
				
			</div>
		</nav>
	);
};
