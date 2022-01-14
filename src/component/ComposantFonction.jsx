import React, { Fragment, useState } from "react";

// export class CompoFonction extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             etat:"valeur"
//         }
//     }
//     render(){
//         return (
//             <Fragment>
//                 <p> ceci est mon composant fonction</p>
//                 <p> il a cette vleur stocké dans son etat : {this.state.etat}</p>
//             </Fragment>
//         )
//     }
// };

export const ComposantFonction =(props)=>{
    //  definis l'etat via un hook
    let [etat, setEtat] = useState("Valeur");
    let [compteur, setCompteur] = useState(props.debutCompte);

    //  fonction qui permet de modifier mon etat
    const handleClick = (e) =>{
        e.stopPropagation();
        setEtat("Bonjour")
    };
    const handleCompteur =(e)=>{
        e.stopPropagation();
        setCompteur(++compteur)
    };

    /*
     ++compteur => je fais compteur + 1 et j'enregistre compteur
     compteur++ => j'enregistre compteur et j'ajoute +1
    */


    return (
        <Fragment>
            <p> ceci est mon composant fonction</p>
            <p> il a cette vleur stocké dans son etat : {etat}</p>
            <button onClick={handleClick} >click ici </button>
            <div>
                <p> ceci est le compteur :{compteur}</p>
                <button onClick={handleCompteur}> incremente moi </button>
            </div>
        </Fragment>
    )
}

export default ComposantFonction; 

/*
  les hooks :
  NE sont PAS obligatoire!
  servent à gerer l'etat des composants stateless (= composants fonctions)
  servent à gerer le cycle de vie des composants (creation / modification / destruction)
   le mot "useTrucs"
    pour gerer l'etat : useState

*/