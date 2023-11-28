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
        <div>
        <h1 className="text-center mt-3">Planet Details</h1> 
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "60rem" }}>
            <img src={`${urlImg}${params.planetId}.jpg`} onError={handleError} className="card-img" alt="planet image" />
                    <div className="card-body d-flex flex-column col-11">

                    <h3 className="card-title text-center mb-4 text-warning">{store.planetDetails.name}</h3> 
                    {!store.planetDetails ? 
                            <Spinner />
                        :
                        <div className="text-center flex-grow-1">
                        <p><strong> Model: </strong> {store.planetDetails.model}</p>
                        
                        
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

