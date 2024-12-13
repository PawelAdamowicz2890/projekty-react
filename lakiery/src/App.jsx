import './App.css';
import React, {useState} from 'react';
import czerw from './img/czerwony.jpg';
import fiol from './img/fioletowy.jpg';
import zloty from './img/zloty.jpg';
import wszystkie from './img/wszystkie.jpg';
import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import c1 from './img/c1.jpg';
import c2 from './img/c2.jpg';
import z1 from './img/z1.jpg';
import z2 from './img/z2.jpg';
import Lakier from './Lakier';

function App() {
  const lakiery =[
    {plik: f1, odcien: "fioletowy", nazwa: "No Risk No story", cena: 27.29, reklama: "Oszczedzasz 33%"},
    {plik: f2, odcien: "fioletowy", nazwa: "Moony Whispers", cena: 38.99, reklama: "Mój wybór Kasia Kot"},
    {plik: c1, odcien: "czerwony", nazwa: "Alizee", cena: 27.29, reklama: "Oszczedzasz 33%"},
    {plik: c2, odcien: "czerwony", nazwa: "Mysterious Tale", cena: 32.99, reklama: "GET THE LOOK"},
    {plik: z1, odcien: "złoty", nazwa: "Top Glow Gold", cena: 29.99, reklama: "XMAS Trend"},
    {plik: z2, odcien: "złoty", nazwa: "Sparkling kiss", cena: 27.99, reklama: "XMAS Trend"},
  ]
  const [lakiery2, setLakiery2] = useState(lakiery.slice())
  const [koszyk, setKoszyk] = useState(0);
  const [laki, setLaki] = useState({plik: "", odcien: "", nazwa: "", cena: 0, reklama: ""})
  return (
    <React.StrictMode>
      <h1 className='cent'>grafiki i inspiracja ze strony: NEONAIl.pl</h1>
      <h3>Koszyk: {koszyk}</h3>
      <p className='marg'>wybierz odcień:</p>
      <img src={fiol} alt='fioletowy' className='hov' onClick={wybFiol}/>
      <img src={czerw} alt='czerwony' className='hov'onClick={wybCzerw}/>
      <img src={zloty} alt='złoty' className='hov'onClick={wybZlot}/>
      <img src={wszystkie} alt='wszystkie' className='hov'onClick={wybWszyst}/>
      {lakiery2.map((l) => <Lakier key={l.plik} lak={l} fun={() => {
        alert("Dodano do koszyka: "+ l.nazwa);
        setKoszyk(koszyk+1);
      }}/>)}
    </React.StrictMode>
  );
  function wybFiol()
  {
    const w =[];
    for(var i = 0; i< lakiery.length; i++)
    {
      if(lakiery[i].odcien == "fioletowy")
      {
        setLaki(lakiery[i])
        w.push(lakiery[i])
      }
    }
    setLakiery2(w);
    console.log(lakiery2)
    console.log(lakiery)
  }
  function wybWszyst()
  {
    const w = lakiery;
    setLakiery2(w)
    console.log(lakiery2)
    console.log(lakiery)
  }
  function wybCzerw()
  {
    const w =[];
    for(var i = 0; i< lakiery.length; i++)
    {
      if(lakiery[i].odcien == "czerwony")
      {
        setLaki(lakiery[i])
        w.push(lakiery[i])
      }
    }
    setLakiery2(w);
    console.log(lakiery2)
    console.log(lakiery)
  }
  function wybZlot()
  {
    const w =[];
    for(var i = 0; i< lakiery.length; i++)
    {
      if(lakiery[i].odcien == "złoty")
      {
        setLaki(lakiery[i])
        w.push(lakiery[i])
      }
    }
    setLakiery2(w);
    console.log(lakiery2)
    console.log(lakiery)
  }
}

export default App;
