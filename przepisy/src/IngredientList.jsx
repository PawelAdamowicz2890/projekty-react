import React from "react";
import './IngredientList.css'

function IngredientList(props)
{
    return(
        <React.StrictMode>
            <ol>
                {props.ingredients.map((i) => 
                i.prepared == 1 ?
                (<li key={i.nr} className="prepared">{i.skladnik}</li>) 
                :
                (<li key={i.nr}>{i.skladnik}</li>))}
            </ol>
        </React.StrictMode>
    )
}

export default IngredientList;