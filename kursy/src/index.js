import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Kurs from './Kurs';
const kursy = [
  {nr:1, kurs: "Programowanie w C#"},
  {nr:2, kurs: "Angular dla początkujących"},
  {nr:3, kurs: "Kurs Django"}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Liczba kursów: {kursy.length}</h2>
    <Kurs kr={kursy}/>
  </React.StrictMode>
);

