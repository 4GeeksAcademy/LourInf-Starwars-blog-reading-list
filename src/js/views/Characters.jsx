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
       
            return (
                <div className="mt-5 pt-5">
                    <h1 className="text-warning m-3 text-center">Characters</h1>
                    <div className="container">
                        <div className="row">
                        {store.characters.map((character, index) =>{

                         return (

                         <div key={character.uid} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 m-5">
                            <div className="card m-3 bg-dark text-white" style={{ width: '18rem' }}>
                                   <img src={`${urlImg}${character.uid}.jpg`} onError={handleError} className="card-img-top" alt="character image" />
                                  <div className="card-body">
                                         <h5 className="card-title mt-2 mb-4">{character.name}</h5>   
                                   <div className="d-flex justify-content-between">
                                          <Link to={`/characters/${character.uid}`} className="btn btn-outline-secondary me-4">Learn more! </Link>
                                          <span className="btn btn-outline-warning" onClick={() => actions.addFavorites({ type: character.type, name: character.name })}>
                                              <FontAwesomeIcon icon={faHeart} />
                                         </span>
                                      </div>
                                 </div>
                                 </div>
                                </div>
                                  
                            )
                        })
                        }
                     </div>
                    </div>
                </div>
            );
        };