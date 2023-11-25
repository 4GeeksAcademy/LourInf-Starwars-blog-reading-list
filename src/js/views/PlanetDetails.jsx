import React, {useContext} from "react";  //1. Import hook useContext (so we are able to import useParams)
import { Link, useParams }  from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js"; //2. Import Context

export const PlanetDetails = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions

    //get back the param of the url
    const params = useParams();
    console.log(params);
    actions.getPlanetDetails(params.planetId);
   
    return(
        <div>
        <h1 ></h1> 
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "40rem" }}>
                <img src="#" className="card-img" alt="character image" />
                    <div className="card-body d-flex flex-column col-11">
                        <h3 className="card-title">NAME</h3>            {/*DOESNT WORK!! IF I PUT store.planetDetails.properties.name IT BREAKS*/}
                        <p className="card-text">Description</p>
                        <p className="card-text">Characteristic nr2 API</p>
                        <p className="card-text">Characteristic nr3 API</p>
                        <Link to= "/characters" className="btn btn-outline-secondary">Go back </Link>
                       
                    </div>
             </div>
        </div>
    )
}

