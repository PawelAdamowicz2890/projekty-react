import React from 'react';
import "./css/bootstrap.css"
import './Film.css';

function Film() {
  return (
    <React.StrictMode>
      <form>
        <div className='form-group mt-3'>
          <label htmlFor='inputTyt'>Tytuł filmu</label>
          <input type='text' className='form-control mt-2 bg-primary-subtle' id='inputTyt'></input>
        </div>
        <div className='form-group mt-3'>
          <label htmlFor='selKat'>Rodzaj</label>
          <select className='form-control mt-2' id='selKat'>
            <option></option>
            <option value={1}>Komedia</option>
            <option value={2}>Obyczajowy</option>
            <option value={3}>Sensacyjny</option>
            <option value={4}>Horror</option>
          </select>
        </div>
          <button type="button" className="btn btn-primary mt-3" onClick={Dodaj}>Dodaj</button>
      </form>
    </React.StrictMode>
  );
}
function Dodaj(){
  let tyt = document.getElementById('inputTyt').value;
  let rodz = document.getElementById('selKat').value;
  console.log("tytuł: "+tyt+"; rodzaj: "+rodz);
}
export default Film;
