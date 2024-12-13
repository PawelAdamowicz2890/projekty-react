import React from 'react';
import './App.css';
import capri from './img/capriciosa.png';
import napole from './img/napoletana.png';
import wiejska from './img/wiejska.png';
import promo from './img/promo.png';
import Pizza from './Pizza';
const pizze = [
  {nr: 1, nazwa: "Capriciosa", rozmiar: "Duża 42 cm", sklad: "ciasto, sos pomidorowy, ser, szynka, pieczarki, oregano", cena: 47.60, obr: capri},
  {nr: 2, nazwa: "Napoletana", rozmiar: "Duża 42 cm", sklad: "ciasto, sos pomidorowy, ser, salami, oliwki zielone, papryczki jalapenos, oregano", cena: 48.50, obr: napole},
  {nr: 3, nazwa: "Wiejska", rozmiar: "Duża 42 cm", sklad: "ciasto, sos pomidorowy, ser, kiełbasa, ogórki konserwowe, cebula biała, czosnek, oregano", cena: 48.50, obr: wiejska},
  {nr: 4, nazwa: "2 x pizza 42cm za 80 zł", rozmiar: "Duża 42 cm", sklad: "Kup 2 x Pizze 42cm za 80zł (10 pizz do wyboru).Oferta dostępna przez cały tydzień.", cena: 80, obr: promo}
]
function App() {
  return (
    <React.StrictMode>
      <h1 className='cent'>Pizzeria</h1>
      {pizze.map((p) => <Pizza key={p.nr} pi={p}/>)}
    </React.StrictMode>
  );
}

export default App;
