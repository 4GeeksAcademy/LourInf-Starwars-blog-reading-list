import React, {useContext} from "react";
import { Context } from "../store/appContext.js"

export const Favorites = () =>{
    const { store, actions } = useContext(Context);

    const handleAdd = () => {
        actions.addFavorites ("item1")
    }

    const handleRemove = () => {

    }

    return(
        <div>
            <h1>Favorites</h1> 
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
      </div>
    )
}


