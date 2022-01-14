import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const User = (props) => {
    return(
        <Fragment>
            <p>nom : {props.nom}</p>
            <p>prenom : {props.prenom}</p>
            <p>age:{props.age}</p>

        </Fragment>
    )
};
// utilisation de proptypes pour "pseudo"typer mes variables
//  surtout informatif pour les developpers
User.propTypes={
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string,
    age: PropTypes.number
}

// validateur de types
User.propTypes={
    //  prend en param : nom de l'attribut, props, nom du composant
    nom : function(props, nom, composant) {
        if ( typeof props[nom] == 'number' ) {
            return new Error(`Prop invalide ${nom} pour ${composant}`);
        }
    }
}

User.defaultProps={
    nom:"bidouille",
    prenom:"bob",
    age:42
}

export default  User;