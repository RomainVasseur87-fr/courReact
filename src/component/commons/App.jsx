// 1. faire l'import de react
import React from "react";

//  6. import de la peinture
import './App.css';
//  7. immport de mes autres composants
import Routing from '../commons/Routing';
import pages from './mesConstantes';

//  2. creer ma class composant
export class App extends React.Component{
    // 3. doit posseder la fonction render() pour faire du rendu
    render(){
        // 4. return un rendu html
        return (
            <div>
                <h1>Bonjour voici le composant APP </h1>
                <Routing pages={pages} />
            </div>
        );
    };
};

// 5. export de ma class
export default App;