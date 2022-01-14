import React, { Fragment } from "react";

export class Recuperateur extends React.Component{

    constructor(props){
        super(props);
        this.state={
            nom:this.props.nom,
            info:this.props.info,
        }
    };

    render(){
        return(
            <Fragment>
                {/* appel des informations fournis par le parent directement
                (independant de l'etat du composant) */}
                <p> quand {this.props.nom} a faim il mange du {this.props.info}</p>
                {/* appel des informations fournis par le parent stocké localement
                (dependant de l'etat du composant) */}
                <p> quand {this.state.nom} a faim il mange du {this.state.info}</p>

            </Fragment>
        )
    }
};

export default Recuperateur;