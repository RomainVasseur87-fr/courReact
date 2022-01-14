// import de react et des hook useState et useEffect
import React, { Fragment, useState, useEffect } from 'react';

export const Compteur2 = (props) => {
    let [compteur1, setCompteur1] = useState(0);
    let [compteur2, setCompteur2] = useState(0);

    // fonction pour incrementer le compteur 1
    const handleClic1 = (e) => {
        e.stopPropagation();
        setCompteur1(++compteur1);
    }
    // fonction pour incrementer le compteur 2
    const handleClic2 = (e) => {
        e.stopPropagation();
        setCompteur2(++compteur2);
    };

    useEffect ( () => {
        console.log("création !")
    }, []);

    useEffect ( () => {
        console.log(`compteur1 : ${compteur1} ; compteur2 : ${compteur2}`)
    }, [compteur1]);

    useEffect( () => {
        document.title = `compteur1 : ${compteur1} ; compteur2 : ${compteur2}`;
    }, [compteur2]);

    useEffect ( () => {
        return () => {
            console.log("destruction !")
        }
    }, []);

    return (
        <Fragment>
            <div>
                <h3> ceci est mon composant compteur2</h3>
                <p> compteur 1 : {compteur1} ; compteur 2 :{compteur2}</p>
                <button type="button" onClick={handleClic1}> bouton 1 clique moi dessus ! </button>
                <button type="button"  onClick={handleClic2}> bouton 2 clique moi dessus ! </button>
            </div>
        </Fragment>
    )
}
        

export default Compteur2;