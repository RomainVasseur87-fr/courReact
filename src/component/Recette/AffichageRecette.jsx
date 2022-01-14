import React, {Fragment} from 'react';
import AffichageList from '../commons/AffichageList';

    export const AffichageRecette = (props) => {
        return (
            <Fragment>
                <h1> ceci est un composant fils : AffichageRecette  </h1>
                <h4>Recette : {props.nom}</h4>
                <AffichageList nomList="liste des ingredients" liste={props.ingredients} />
                <AffichageList nomList="liste des etapes" liste={props.etapes} />
            </Fragment>
        )
    }

    export default AffichageRecette;