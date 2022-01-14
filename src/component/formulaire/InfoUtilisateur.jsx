import React, { Fragment } from 'react';

export const InfoUtilisateur =(props)=>{
    return(
        <Fragment>
            <ul>
                <li>{props.utilisateur.nom}</li>
                <li>{props.utilisateur.prenom}</li>
                <li>{props.utilisateur.age}</li>
            </ul>
        </Fragment>
    )
};

export default InfoUtilisateur;