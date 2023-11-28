import React,  { useContext, useState }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"; //import Link


export const Characters = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions

    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
       
    return(
        <div className="mt-5 pt-5">
            <h1 className="text-warning m-3 text-center">Characters</h1>
            <div className= "container d-flex flex-wrap align-items-row">
            {store.characters.map((character, index) => {
        
                  
                  return (
                    
                    <div key={character.uid} className="card m-3 bg-dark text-white" style={{ width: "18rem"}}>
                    <img src= {`${urlImg}${character.uid}.jpg`} onError={handleError} className="card-img" alt="character image" />
                    <div className="card-body">
                    <h5 className="card-title mt-2 mb-4">{character.name}</h5>
                    {/* <p className="card-text"> {character.description}</p> */}      
                        {/* <p className="card-text">{`Height: ${character.result.properties.height}`}</p>  */}
                        {/* <p className="card-text">{`Birth year: ${character.result.properties.birth_year}`}</p> */}
                        <div className="d-flex justify-content-between">
                        <Link to={`/characters/${character.uid}`} className="btn btn-outline-secondary me-4">Learn more! </Link>
                        <span className="btn btn-outline-warning" onClick={() => actions.addFavorites({ type: character.type, name: character.name })}> 
                        <FontAwesomeIcon icon={faHeart} />
                        </span>
                        </div>

                    </div>
                    </div>
                    )
                })
            }
        </div> 
        </div>
        );
        };