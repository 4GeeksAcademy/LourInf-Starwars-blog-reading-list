import React, {useContext} from "react";  //1. Import hook useContext
import { Context } from "../store/appContext.js"; //2. Import Context

export const BtnFavorites = () =>{
  const  {store, actions } = useContext (Context); //3. destructuring store & actions

  const handleDelete = (name) => {
    actions.removeFavorites(name);
};

  return (
    <div className="dropdown">
      <button className="btn btn-outline-warning fs-5 dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false">
        Favorites <span className="badge text-warning bg-secondary">{store.favorites.length}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-lg-end">
        {store.favorites.length === 0 ? (
          <li className="text-secondary"> No Favorites </li>
        ) : (
          store.favorites.map((item, id) => (
            <li key={id} className="d-flex p-1">
             <span className="dropdown-item">{item.type} - {item.name}</span>
              <button className="btn" onClick={() => handleDelete(item.name)}>
                <i className="fa fa-trash text-warning"></i>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
 }