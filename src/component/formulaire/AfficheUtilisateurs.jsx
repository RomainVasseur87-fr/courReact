import React, { Fragment, useState } from 'react';
import InfoUtilisateur from '../formulaire/InfoUtilisateur';
import AjoutUtilisateur from '../formulaire/AjoutUtilisateur';
import propTypes from 'prop-types';

export const AfficheUtilisateurs =(props)=>{

    const [listUtilisateurs, setListUtilisateurs] = useState([]);

    const handleAjoutUtilisateur = (utilisateur)=>{
        setListUtilisateurs([...listUtilisateurs,utilisateur]);
    };
    const handleEffacer =(e)=> {
        e.stopPropagation();
        setListUtilisateurs([]);
    }

    return(
        <Fragment>
            <h3> ceci est le composant Affichage utilisateurs </h3>
            {console.log(listUtilisateurs)}
            <div>
                {listUtilisateurs.map( (utilisateur, index) =>{
                    return (
                        <div key={index}>
                            <InfoUtilisateur utilisateur={utilisateur}/>
                        </div>
                    )
                })}
            </div>
            <AjoutUtilisateur ajouterUtilisateur={handleAjoutUtilisateur}/>
            <button onClick={handleEffacer}> effacer </button>
        </Fragment>
    )
};

AfficheUtilisateurs.propTypes={
    listUtilisateurs : propTypes.array
};

export default AfficheUtilisateurs;
