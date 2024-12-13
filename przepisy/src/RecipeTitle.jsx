import React from "react";
import './RecipeTitle.css';

function RecipeTitle(props)
{
    if(props.recipe.rating >3.5)
    {
        return(
            <React.StrictMode>
                <h1 className="green">{props.recipe.recipeName}</h1>
                <p className="green">Ocena: {props.recipe.rating} &emsp;&emsp; Liczba ocen: {props.recipe.ratingCount}</p>
            </React.StrictMode>
        );
    }
    if(props.recipe.rating <= 3.5)
    {
        return(
            <React.StrictMode>
                <h1 className="red">{props.recipe.recipeName}</h1>
                <p className="red">Ocena: {props.recipe.rating} &emsp;&emsp; Liczba ocen: {props.recipe.ratingCount}</p>
            </React.StrictMode>
        );
    }
    
}

export default RecipeTitle;