import React,  { useContext }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { BtnLearnMore } from "../component/BtnLearnMore.jsx";


export const Characters = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
        
    return(
        <div>
            <h1 className="text-warning m-3 text-center">Characters</h1>
            <div className= "container d-flex flex-wrap align-items-row">
            {store.characters.map((character, index) => {
                  
                  return (
                    
                    <div key={character.uid} className="card m-3 bg-dark text-white rounded" style={{ width: "25rem"}}>
                    <img src= {`${urlImg}${character.uid}.jpg`} onError={handleError} className="card-img" alt="character image" />
                    <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">{`Gender: ${character.gender}`}</p>             {/*DOESNT WORK!! same for the 3 <p> */}
                        <p className="card-text">{`Height: ${character.height}`}</p>
                        <p className="card-text">{`Homeworld: ${character.homeworld}`}</p>
                        <BtnLearnMore />
                        <span className="btn btn-outline-warning" onClick={() => actions.addFavorites({type: "character", name: character.name})}>           {/*DOESNT WORK!! NOT SURE HOW TO DO IT */}
                        <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                    </div>
                    )
                })
            }
        </div> 
        </div>
        );
        };