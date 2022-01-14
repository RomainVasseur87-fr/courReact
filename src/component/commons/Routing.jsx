import React, { Fragment } from "react";
//  importer les outils pour faire du routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Acceuil from "../pages/Acceuil";
import PageUtilisateurs from "../pages/PageUtilisateurs";
import PageCompteurs from "../pages/PageCompteurs";
import PageUseEffect from "../pages/PageUseEffect";
import Page404 from "../pages/Page404";
import NavBar from "./NavBar";


//  BrowserRouter (=Router) => permet de definir tous le routing de mon application
//  Routes (=Switch) => doit contenir toutes les routes react pour rendre la navigation possble.
//  Route => definir une destination pour react

/**
 *  à quoi sert se composant
 * @param {*} props contient quoi (et type? ) 
 * @returns une vue
 */
export const Routing =(props)=> {
    return(
        <Fragment>
            {/* doit contenir tous le routing de mon apllication */}
            <Router>
                {/* les liens vers mes differents destinations */}
                <NavBar pages={props.pages} />
                {/* les differentes routes pour y acceder à ces destinations */}
                <Routes>
                    {/* <Redirection : utilisation de <Navigate to="" /> */}
                    <Route path="/" element={<Navigate to="/acceuil"/> } />
                    {/* balise Route doit contenir un attribut "path" pour cibler une destination 
                    et un attribut element contenant le composant page de destination*/}
                    {/* page qui est ciblé : composant react*/}
                    <Route path="/acceuil" element={<Acceuil />}/> 
                    <Route path="/utilisateurs" element={<PageUtilisateurs />}/>
                    <Route path="/compteurs" element={<PageCompteurs />}/>
                    <Route path="/effect" element={<PageUseEffect />}/>
                    <Route path="*" element={<Page404 />} />
                    {/* <Route path="/users" element={<Users />}>
                         <Route path="/:id" element={<UserProfile />} />
                    </Route> */}
                </Routes>
            </Router>
        </Fragment>
    )
};

export default  Routing