import React, { Fragment } from "react";

export const Repeat = (props) =>{
    // preparation de ma liste d'elements
    let items = []
    //  parcours pour la remplir avec boucle for
    for (let i= 0; i < props.nbFois; i++) {
        //  ajout dans ma liste en recuperant ma fonction children herité du parent
        items.push(props.children(i))
        // recuperation de la fonction children par le parent : 
        // (index) => <div key={index}>This is item {index} in the list</div>
    }

    return (
        <Fragment>
            <p>info : {props.nbFois}</p>
            <div>
                {items}
            </div>
        </Fragment>
    )
};

export default Repeat;