// import de react et des hook useState et useEffect
import React, {Fragment} from 'react';

export class Compteur1 extends React.Component{
    state={
        compteur1:0,
        compteur2:0
    }
    
    
    // fonction pour incrementer le compteur 1
    cliquer1 = (event) => {
        this.setState({
            compteur1: 1 + this.state.compteur1
        });
    }
    // fonction pour incrementer le compteur 2
    cliquer2 = (event) => { 
        this.setState({
            compteur2: 1 + this.state.compteur2
        });
    }
    
    render (){
        return (
            <Fragment>
                <div>
                    <p> compteur 1 : {this.state.compteur1} ; compteur 2 :{this.state.compteur2}</p>
                    <button onClick={this.cliquer1}> bouton 1 clique moi dessus ! </button>
                    <button onClick={this.cliquer2}> bouton 2 clique moi dessus ! </button>
                </div>
            </Fragment>
        )
    }
        
}

export default Compteur1;