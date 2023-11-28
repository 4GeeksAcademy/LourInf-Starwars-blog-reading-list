import React, {useContext, useEffect} from "react";  //1. Import hook useContext (so we are able to import useParams)
import { Link, useParams }  from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js"; //2. Import Context
import { Spinner } from "../component/Spinner.jsx";

export const StarshipDetails = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions

    //get back the param of the url
    const params = useParams();
    console.log(params);
   

    useEffect(()=>{
        async function fetchData() {
            const response = await actions.getStarshipDetails(params.starshipId);
            console.log(store.starshipDetails); 
            console.log(store.starshipDetails.properties); 
        }
          fetchData();
    }, [])

    
    const urlImg = "https://starwars-visualguide.com/assets/img/starships/";
    const handleError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };


    return(
        <div>
        <h1 className="text-center mt-3">Starship Details</h1> 
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "60rem" }}>
            <img src={`${urlImg}${params.starshipId}.jpg`} onError={handleError} className="card-img" alt="planet image" />
                    <div className="card-body d-flex flex-column col-11">

                    <h3 className="card-title text-center mb-4 text-warning">{store.starshipDetails.name}</h3> 
                    {!store.starshipDetails ? 
                            <Spinner />
                        :
                        <div className="text-center flex-grow-1">
                        <p><strong> Model: </strong> {store.starshipDetails.model}</p>
                        
                        
                        </div>
                        }
                        
                            <Link to="/starships" className="btn btn-outline-secondary">
                                Go back
                            </Link> 
                    </div>
             </div>
        </div>
    )
}
