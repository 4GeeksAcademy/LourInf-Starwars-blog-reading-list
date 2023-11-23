import React, { useContext }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Characters = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "#";
    
    
    return(
        <div>
            <h1>Characters</h1>
            <div className="card mb-3" style={{ width: "25rem" }}>
                <img src="#" className="card-img" alt="character image" />
                    <div className="card-body">
                        <h5 className="card-title">Name of character</h5>
                        <p className="card-text">Something about Character</p>
                        <p className="card-text">Something about Character</p>
                        <button className="btn btn-outline-secondary me-4">Learn more!</button>
                        <button className="btn btn-outline-warning">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
             </div>
        </div>
    )
}

