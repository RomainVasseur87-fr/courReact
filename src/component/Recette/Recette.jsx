import React, {Fragment} from 'react';
import AffichageRecette from './AffichageRecette';

export const Recette =(props) => {
    //  ajout indirect des valeurs à transmettre au composant fils
    let etapes = ['decouper', 'emincer', 'tout rater', 'recommencer en pleurant']

    return (
        <Fragment>
            <AffichageRecette 
                // ajout direct des valeurs à transmettre au composant fils
                nom="touskireste"
                ingredients={['oignons', 'sucre', 'poivrons']}
                etapes={etapes} />
        </Fragment>
    );
}

export default Recette;