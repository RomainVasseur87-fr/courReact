import React, { Fragment,useState, useEffect } from "react";

export const Creation =(props)=>{
    let [compteur, setCompteur]=useState(0);

    // la creation de mon composant
    useEffect( () => {
        console.log("it's alive !! ")
    }, []);

    const handleClik =(e)=> {
        setCompteur(++compteur);
    }

    // verification de la mise à jour de l'etat du composant
    useEffect( ()=> {
        console.log("MAJ du composant CREATION");
    }, [compteur]);

    //  verification de la destruction d'un composant
    useEffect( ()=>{
        return () =>{
            console.log( "A  mort les composants ! ");
        }
    }, []);

    return(
        <Fragment>
            <div>
                <h3> ceci est mon composant creation </h3>
                <p> coucou </p>
                <p> l'affichage est a : {props.affiche && "True"}</p>
                <p> j'en suis à {compteur}</p>
                <button type="button" onClick={handleClik}>le boutton </button>
            </div>

        </Fragment>
    )
};

export default Creation