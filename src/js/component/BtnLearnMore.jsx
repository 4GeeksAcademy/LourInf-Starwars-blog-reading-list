import React, { useContext }  from "react"; //1. Import hook useContext
import { Link } from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js" //2.Import Context


export const BtnLearnMore = () => {
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "#";
    
    const handleGetDetails = () => {
        actions.getCharacterDetails("1");
    }

    return (
        <>
            <Link to="/characters/:characterId">
                <button className="btn btn-outline-secondary me-4" onClick={handleGetDetails}>Learn more!</button>
            </Link>
        </>
    );
};