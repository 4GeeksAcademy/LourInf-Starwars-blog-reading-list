import React from "react"; 
import { Link, useParams }  from "react-router-dom"; //import Link

export const CharacterDetails = () =>{
    
    //get back the param of the url
    const params = useParams();
    console.log(params);
    
    return(
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "40rem" }}>
                <img src="#" className="card-img" alt="character image" />
                    <div className="card-body d-flex flex-column col-11">
                        <h5 className="card-title">Name of Character</h5>
                        <p className="card-text">Characteristic nr1 API</p>
                        <p className="card-text">Characteristic nr2 API</p>
                        <p className="card-text">Characteristic nr3 API</p>
                        
                        <Link to= "/characters"><button className="btn btn-outline-secondary">Go back </button></Link>
                       
                    </div>
             </div>
    )
}
