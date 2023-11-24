import React from "react";
import { Link } from "react-router-dom"; //import Link

export const BtnFavorites = () =>{

    return(
        <div className="dropdown">
  <button className="btn btn-outline-warning fs-5 dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false">
    Favorites <span className="badge text-warning bg-secondary">4</span>
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="#">Action</Link></li>
    <li><Link className="dropdown-item" to="#">Another action</Link></li>
    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
  </ul>
</div>
    )
}


