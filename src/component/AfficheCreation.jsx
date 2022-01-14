import React, { Fragment, useState } from "react";
import Creation from "./Creation";

export const AfficheCreation =(props)=>{
    let [affiche, setAffiche] = useState(true);

    const handleClick = (e)=>{
        e.stopPropagation()
        setAffiche(!affiche)
    }
    return(
        <Fragment>
            {affiche && <Creation affiche={affiche} />}
            <button type="button" onClick={handleClick}> magie </button>
        </Fragment>
    )
};

export default AfficheCreation