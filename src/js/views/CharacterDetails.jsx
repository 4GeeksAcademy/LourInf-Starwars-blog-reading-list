import React /* { useContext }*/ from "react"; //1. Import hook useContext
//import { Context } from "../store/appContext.js" //2.Import Context
import { Link } from "react-router-dom"; //import Link

export const CharacterDetails = () =>{
    /*  const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "#"; */
    
    
    return(
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "40rem" }}>
                <img src="#" className="card-img" alt="character image" />
                    <div className="card-body d-flex flex-column col-11">
                        <h5 className="card-title">Name of Character</h5>
                        <p className="card-text">Characteristic nr1 API</p>
                        <p className="card-text">Characteristic nr2 API</p>
                        <p className="card-text">Characteristic nr3 API</p>
                        
                        <Link to= "/"><button className="btn btn-outline-secondary">Go back </button></Link>
                       
                    </div>
             </div>
    )
}
