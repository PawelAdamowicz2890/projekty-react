import './App.css';
import React, {useState} from 'react';
const uczniowie = [
  {nr: 1, imie: "Ala", nazwisko: "Kot"}
]
const kursy = [
  {nr: 1, nazwa: "PHP dla początkujących", czas: "16 godzin"},
  {nr: 2, nazwa: "React dla zaawansowanych", czas: "20 godzin"},
  {nr: 3, nazwa: "JavaScript dla orłów", czas: "20 godzin"},
]
function App() {
  const [nr, setNr] = useState(uczniowie.length)
  return (
    <React.StrictMode>
      <p>plik</p>
      imie:&nbsp;
      <input type='text' id='inpIm'></input><br></br>
      nazwisko:&nbsp;
      <input type='text' id='inpNazw'></input>
      <br></br>
      <button onClick={Dodaj}>Dodaj</button>
      <hr></hr>
      {uczniowie.map((u) => <p key={u.nr}>nr: {u.nr}, imie: {u.imie}, nazwisko: {u.nazwisko}</p>)}
      <hr></hr>
      <h1 className='cent'>Oferta kursów</h1>
      <p className='cent'>
        <select id='selK'>
          {kursy.map((k) => <option key={k.nr} value={k.nazwa}>{k.nr}. {k.nazwa}; {k.czas}</option>)}
        </select>
      </p>
      <p className='cent'>imię: <input type='text' id='inpIm2'></input></p>
      <p className='cent'><button onClick={Zapisz}>Zapisz</button></p>
    </React.StrictMode>
  );
  function Dodaj()
  {
    let im = document.getElementById('inpIm').value
    let nazw = document.getElementById('inpNazw').value
    if(im.length === 0 || nazw.length === 0)
      return;
    else
    {
      setNr(nr+1)
      let u = {nr: nr+1, imie: im, nazwisko: nazw};
      uczniowie.push(u);
    }
  }
}
function Zapisz()
{
  let im = document.getElementById('inpIm2').value
  let k = document.getElementById('selK').value
  if(im.length === 0)
    return;
  else
    console.log("imię: "+im+"; nazwa kursu: "+k)

}

export default App;
