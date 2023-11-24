import React /*, { useContext }*/  from "react"; //1. Import hook useContext
//import { Context } from "../store/appContext.js" //2.Import Context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { BtnLearnMore } from "../component/BtnLearnMore.jsx";


export const Planets = () =>{
    /*  const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "#"; */
    
    
    return(
        <div>
           <h1 className="text-warning m-3 text-center">Planets</h1>
            <div className="card m-3 bg-dark text-white" style={{ width: "25rem" }}>
                <img src="#" className="card-img" alt="planet image" />
                    <div className="card-body">
                        <h5 className="card-title">Name of Planet</h5>
                        <p className="card-text">Something about Planet</p>
                        <p className="card-text">Something about Planet</p>
                        <BtnLearnMore />
                        <button className="btn btn-outline-warning">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
             </div>
        </div>
    )
}
