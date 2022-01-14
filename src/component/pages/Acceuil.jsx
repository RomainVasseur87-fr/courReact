import React, { Fragment } from 'react';
import Exemple1 from '../Exemple1';
import Recuperateur from '../Recuperateur';
import Dynamique from '../Dynamique';
import ListOfThings from '../ListOfThings';
import Stateless from '../Stateless';
import Recette from '../Recette/Recette';
import Controlled from '../Controlled';
import ComposantFonction from '../ComposantFonction';


export const Acceuil =(props)=>{
    let kiwi = {
        couleur:"verte",
        forme:"ovoîde",
        gout:"delicieux"
    }
    return(
        <Fragment>
            <h1> Page Acceuil </h1>
            <div>
                <Exemple1 />
                <p>ajout des infos aux composants enfants</p>
                <Exemple1>rajouter un truc </Exemple1>
                <Recuperateur nom="romain" info="poulet" />
                <Exemple1 children="rajouter un truc " />
                <Dynamique type="second" val="Romain" />
                <ListOfThings nbFois={10}/>
                <Exemple1 />
                <Exemple1 element={<Stateless truc={kiwi} />} />
                <Recette />
                <Controlled />
                <ComposantFonction debutCompte={10} />
            </div>

        </Fragment>
    )
};

export default  Acceuil;
