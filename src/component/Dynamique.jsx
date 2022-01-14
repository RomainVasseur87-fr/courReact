import React, { Fragment } from "react";


let obj ={
    premier(props) {
        return <div>Nom : {props.val}</div>;
    },
    second(props) {
        return <div>prenom : {props.val}</div>;
    }
        
}

export const Dynamique = (props) => {
    const Choice = obj[props.type]
    return (
        <Fragment>
            <h3> ceci est le composant dynamique </h3>
            <Choice val={props.val} />
        </Fragment>
    )
};

export default Dynamique;