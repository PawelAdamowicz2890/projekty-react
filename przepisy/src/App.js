import React, {useState} from 'react';
import './App.css';
import IngredientList from './IngredientList';
import RecipeTitle from './RecipeTitle';
import StepsList from './StepsList';
const steps =[
  {nr: 1, krok: "wsyp mąkę; dodaj jajko, sól i wodę", fin: 0},
  {nr: 2, krok: "mikserem wymieszaj do jednolitej masy", fin: 0},
  {nr: 3, krok: "wlej chochelkę mazi na rozgrzaną patelnię", fin: 0},
  {nr: 4, krok: "usmaż", fin: 0},
  {nr: 5, krok: "dodaj marmoladę", fin: 0},
];

const ingredients = [
  {nr: 1, skladnik: "mąka", prepared: 0},
  {nr: 2, skladnik: "jajko", prepared: 1},
  {nr: 3, skladnik: "sól", prepared: 0},
  {nr: 4, skladnik: "woda", prepared: 1},
  {nr: 5, skladnik: "marmolada", prepared: 0},
]
const pancake = {
  id: 1,
  recipeName: "Naleśnik",
  rating: 4.2,
  ratingCount: 100,
  ingredientList: ingredients,
  stepsList: steps
}
function App() {
  return (
    <React.StrictMode>
      <RecipeTitle recipe={pancake} />
      <IngredientList ingredients={pancake.ingredientList} />
      <StepsList steps={pancake.stepsList} />
      <label>Krok 1</label>
      <input type='checkbox' id="k1" onClick={Uko}></input>
    </React.StrictMode>
  );
}
function Uko()
{
  if(document.getElementById('k1').checked == true)
  {
    steps[0].fin = 1;
  }
  else
  {
    steps[0].fin = 0;
  }
  console.log(steps[0].fin);
}

export default App;
