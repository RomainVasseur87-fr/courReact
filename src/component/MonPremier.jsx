import React, {Fragment} from 'react';

export class MonPremier extends React.Component {

    handleClick = (e) => {
        alert("bonjour");
    }

    render() {
        return (
            <Fragment>
                <h1> ceci est mon premier composant </h1>
                <button onClick={this.handleClick}> Bonjour à vous </button>
            </Fragment>
        )
    }
}

export default MonPremier;