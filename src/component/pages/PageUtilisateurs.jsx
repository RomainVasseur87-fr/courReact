import React, { Fragment } from 'react';
import AfficheUtilisateurs from '../formulaire/AfficheUtilisateurs';

export const PageUtilisateurs =(props)=>{
    return(
        <Fragment>
            <h1> Page Utilisateurs </h1>
            <div>
                <AfficheUtilisateurs />
            </div>

        </Fragment>
    )
};

export default  PageUtilisateurs;