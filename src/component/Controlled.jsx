import React, { Fragment } from "react";
import CustomInput from "./CustomInput";

export class Controlled extends React.Component {
    //  besoin de l'eta de mon composant
    constructor(props) {
        super(props);
        this.state = {
            ville: "Bouraque"
        }
    }

    handleChange = (e) => {
        this.setState({
            ville: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("notre ville selectionnée est :", this.state.ville);
        console.log("recuperation de mon input : ", this.recupDeMaRef.value);
        // this.setState({
        //     ville: this.recupDeMaRef.value
        // });
        e.stopPropagation();
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput
                        label=" entrer une ville magnifique :"
                        ville={this.state.ville}
                        maRefCustom={input => this.recupDeMaRef = input}
                        handleChange={this.handleChange}
                    />
                    <input type="submit" value="submit" />
                </form>
            </Fragment>
        )
    }
};

export default Controlled;