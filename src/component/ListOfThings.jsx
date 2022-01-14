import React from "react";
import Repeat from "./Repeat";

export const ListOfThings = (props) =>{
    return (
        <Repeat nbFois={props.nbFois}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    )
};

export default ListOfThings