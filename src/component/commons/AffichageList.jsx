import React, { Fragment } from "react";

export const AffichageList =(props)=>{
    return(
        <Fragment>
            <h4> {props.nomList}</h4>
            <ul>
                {props.liste.map( (element, i) =>
                    <li key={i}>{element}</li>
                )}
            </ul>
        </Fragment>
    )
};

export default AffichageList;