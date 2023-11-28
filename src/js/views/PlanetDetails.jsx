import React, { useContext, useEffect } from "react";  //1. Import hook useContext (so we are able to import useParams)
import { Link, useParams }  from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js"; //2. Import Context
import { Spinner } from "../component/Spinner.jsx";

export const PlanetDetails = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    
    //get back the param of the url
    const params = useParams();
    console.log(params);
   
    useEffect(()=>{
        async function fetchData() {
            const response = await actions.getPlanetDetails(params.planetId);
            console.log(store.planetDetails); 
            console.log(store.planetDetails.properties); 
        }
          fetchData();
    }, [])

    const urlImg = "https://starwars-visualguide.com/assets/img/planets/";
    const handleError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    return(
        <div className="mt-5 pt-5">
        <h1 className="text-center mt-4">Planet Details</h1> 
            <div className="card m-auto mt-4 d-flex flex-row bg-dark text-white" style={{ width: "60rem" }}>
            <img src={`${urlImg}${params.planetId}.jpg`} onError={handleError} className="card-img" alt="planet image" />
                    <div className="card-body d-flex flex-column col-11">

                    <h3 className="card-title text-center mb-4 text-warning">{store.planetDetails.name}</h3> 
                    {!store.planetDetails ? 
                            <Spinner />
                        :
                        <div className="text-center flex-grow-1">
                        <p><strong> Diameter: </strong> {store.planetDetails.diameter}</p>
                        <p><strong> Climate: </strong> {store.planetDetails.climate}</p>
                        <p><strong> Gravity: </strong> {store.planetDetails.gravity}</p>
                        <p><strong> Orbital Period: </strong> {store.planetDetails.orbital_period}</p>
                        <p><strong> Population: </strong> {store.planetDetails.population}</p>
                        <p><strong> Rotation Period: </strong> {store.planetDetails.rotation_period}</p>
                        <p><strong> Surface Water: </strong> {store.planetDetails.surface_water}</p>
                        <p><strong> Terrain: </strong> {store.planetDetails.terrain}</p>
            </div>
                        }
                        
                            <Link to="/planets" className="btn btn-outline-secondary">
                                Go back
                            </Link> 
                    </div>
             </div>
        </div>
    )
}

