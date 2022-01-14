import React, { Fragment, useState } from "react";
import Compteur2 from './Compteur2';

export const AfficheCompteur =(props)=>{
    let [affiche, setAffiche] = useState(true);

    const handleClick = (e)=>{
        e.stopPropagation()
        setAffiche(!affiche)
    }
    return(
        <Fragment>
            {affiche && <Compteur2 />}
            <button type="button" onClick={handleClick}> disparition/apparition </button>
        </Fragment>
    )
};

export default AfficheCompteur