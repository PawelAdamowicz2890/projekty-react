import React from "react";
import './IngredientList.css'

function StepsList(props)
{
    return(
        <React.StrictMode>
            <ol>
                {props.steps.map((i) => 
                i.fin == 1 ?
                (<li key={i.nr} className="prepared">{i.krok}</li>) 
                :
                (<li key={i.nr}>{i.krok}</li>))}
            </ol>
        </React.StrictMode>
    );
}

export default StepsList;