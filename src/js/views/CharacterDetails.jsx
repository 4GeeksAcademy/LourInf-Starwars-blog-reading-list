import React, {useContext, useEffect} from "react";  //1. Import hook useContext (so we are able to import useParams)
import { Link, useParams }  from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js"; //2. Import Context
import { Spinner } from "../component/Spinner.jsx";


export const CharacterDetails = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions

    //get back the param of the url
    const params = useParams();
    console.log(params);
    
    useEffect(()=>{
        async function fetchData() {
            const response = await actions.getCharacterDetails(params.characterId);
            console.log(store.characterDetails); 
            console.log(store.characterDetails.properties); 
        }
          fetchData();
    }, [])
    
   //useEffect(() => {
    //    actions.getCharacterDetails(params.characterId);   
    //}, [])
    

    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    return(
        <div>
        <h1 className="text-center mt-3">Character Details</h1> 
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "60rem" }}>
                <img src={`${urlImg}${params.characterId}.jpg`} onError={handleError} className="card-img" alt="character image" />
                    <div className="card-body d-flex flex-column col-11">
                        <h3 className="card-title text-center mb-4 text-warning">{store.characterDetails.name}</h3> 

                        {!store.characterDetails ? 
                            <Spinner />
                        :
                        <div className="text-center flex-grow-1">
                        <p><strong> Birth Year: </strong> {store.characterDetails.birth_year}</p>
                        <p><strong> Gender: </strong> {store.characterDetails.gender}</p>
                        <p><strong> Eye Color: </strong> {store.characterDetails.eye_color}</p>
                        <p><strong> Hair Color: </strong> {store.characterDetails.hair_color}</p>
                        <p><strong> Height: </strong>{store.characterDetails.height}</p>
                        <p><strong> Mass: </strong> {store.characterDetails.mass}</p>
                        <p><strong> Skin Color: </strong>{store.characterDetails.skin_color}</p>
                        </div>
                        }
                        
                            <Link to="/characters" className="btn btn-outline-secondary">
                                Go back
                            </Link> 
                    </div>
             </div>
        </div>
    )
}

