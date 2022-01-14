import React from "react";
import './Exemple1.css';

const nom="Vasseur";

export class Exemple1 extends React.Component{
    state={
        prenom:"Romain",
        age:458
    }
    
    editText = (event) => {
          
        //  fonction qui permet de changer l'etat d'un composant
        this.setState( {prenom:event.target.value} )

    }

    render(){
        return(
            <div id="jaune">
                <h2> ceci est mon composant exemple 1</h2>
                <p> bonjour Monsieur {nom} {this.state.prenom}</p>
                <p> et j'ai {this.state.age} ans </p>
                <div>
                    {/* utilisation d'ecoute d'evenement pour evoyer des infos */}
                    <input type="text" onChange={ (event) => { this.editText(event) } } ></input>
                </div>
            </div>

        )
    }
};

export default Exemple1;