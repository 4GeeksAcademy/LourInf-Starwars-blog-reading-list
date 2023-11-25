import React, { useContext }  from "react"; //1. Import hook useContext
import { Link } from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js" //2.Import Context


export const BtnLearnMore = (id) => {
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "#";

    return (
        <>
            <Link to={`/characters/${id}`} className="btn btn-outline-secondary me-4">Learn more! </Link>
        </>
    );
};