import React, { Fragment, useState } from 'react';

    export const AjoutUtilisateur =(props)=>{
        const [utilisateur, setUtilisateur] = useState({
            nom:"",
            prenom:"",
            age:0
        })

        const handleChangeNom = (e) =>{
            setUtilisateur({
                ...utilisateur,nom:e.target.value
            })
        }
        const handleChangePrenom = (e) =>{
            setUtilisateur({
                ...utilisateur,prenom:e.target.value
            })
        }
        const handleChangeAge = (e) =>{
            setUtilisateur({
                ...utilisateur,age:e.target.value
            })
        }

        const handleSubmit = (e)=> {
            e.preventDefault();
            e.stopPropagation();
            props.ajouterUtilisateur(utilisateur)
        }

        return(
            <Fragment>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            nom : 
                            <input name='nom'
                            type="text"
                            onChange={handleChangeNom}
                            placeholder="enter un nom :"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            prenom : 
                            <input name='prenom'
                            type="text"
                            onChange={handleChangePrenom}
                            placeholder="enter un prenom :"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            age : 
                            <input name='age'
                            type="number"
                            onChange={handleChangeAge}
                            placeholder="enter un age :"
                            />
                        </label>
                    </div>
                    <button type="submit" value="submit"> validaton du formulaire</button>
                </form>

            </Fragment>
        )
    };

    export default AjoutUtilisateur;