import React, { Fragment } from 'react';
import Compteur1 from '../Compteur1';
import AfficheCompteur from '../etatCompteur/AfficheCompteur';

export const PageCompteurs =(props)=>{
    return(
        <Fragment>
            <h1> Page Compteurs </h1>
            <Compteur1 />
            <div>
                <AfficheCompteur />
            </div>

        </Fragment>
    )
};

export default  PageCompteurs;