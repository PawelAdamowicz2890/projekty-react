import React from 'react';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <h1 className='cent'>Kreator postaci</h1>
      <div className='cent cl w'>
        <div className='fl sp p'>
          imię:
        </div>
        <div className='fl sp'>
          <input type='text' id='inpIm'></input>
        </div>
      </div>
      <div className='cent cl w'>
        <div className='fl spc l'>
          rasa:
        </div>
        <div className='fl spc'>
          człowiek
          <input type='radio' id='rdcz' name='race' defaultChecked onChange={wzr}></input>
        </div>
        <div className='fl spc'>
          elf
          <input type='radio' id='rdel' name='race' onChange={wzr}></input>
        </div>
        <div className='fl spc'>
          goblin
          <input type='radio' id='rdgb' name='race' onChange={wzr}></input>
        </div>
      </div>
      <div className='cent cl w'>
        <div className='fl sp p'>
          klasa:
        </div>
        <div className='fl sp'>
          <select id='selKl'className='inp'>
            <option value="mag" >Mag</option>
            <option value="wojownik" >Wojownik</option>
            <option value="tank" >Tank</option>
          </select>
        </div>
      </div>
      <div className='cent cl w'>
        <div className='fl sp l2'>
          czy dorosły:
        </div>
        <div className='fl sp'>
          <input type='checkbox' id='chkDor'></input>
        </div>
      </div>
      <div className='cent cl w'>
        <div className='fl sp p'>
          wzrost:
        </div>
        <div className='fl sp' id="inpwz">
          <input type='number'  min='160' max='200' className='inp' value='160'></input>
        </div>
      </div>
      <div className='cent cl w'>
        <div className='fl spc l'>
          siła:
        </div>
        <div className='fl spc'>
          <input type='number' id='inpS' className='inpsh' min='0' max='100' onChange={zmienmoc} value='50'></input>
        </div>
        <div className='fl spc'>
          moc:
        </div>
        <div className='fl spc'>
          <input type='number' id='inpM' className='inpsh' min='0' max='100' onChange={zmiensile} value='50'></input>
        </div>
        
        <button onClick={gen}>Generuj</button>
      </div>
      <div id='post' className='cent h'></div>
    </React.StrictMode>
  );
}
function zmienmoc()
{
  let si = document.getElementById('inpS').value;
  let mo = 100 - si;
  document.getElementById('inpM').value = mo;
}
function zmiensile()
{
  let mo = document.getElementById('inpM').value;
  let si = 100 - mo;
  document.getElementById('inpS').value = si;
}
function wzr()
{
  let input;
  if(document.getElementById("rdcz").checked)
  {
    input = "<input type='number'  min='160' max='200' className='inp' value='160'></input>"
    document.getElementById("inpwz").innerHTML= input;
  }
  if(document.getElementById("rdel").checked)
  {
    input = "<input type='number'  min='190' max='230' className='inp' value='190'></input>"
    document.getElementById("inpwz").innerHTML= input;
  }
  if(document.getElementById("rdgb").checked)
  {
    input = "<input type='number'  min='120' max='160' className='inp' value='120'></input>"
    document.getElementById("inpwz").innerHTML= input;
  }
  
}
function gen()
{
  let im = document.getElementById('inpIm').value
  let rasa
  let doroslosc
  if(document.getElementById('rdcz').checked)
  {
    rasa = 'człowiek'
  }
  else if(document.getElementById('rdel').checked)
  {
    rasa = 'elf'
  }
  else if(document.getElementById('rdgb').checked)
  {
    rasa = 'goblin'
  }
  let klasa = document.getElementById('selKl').value
  if(document.getElementById('chkDor').checked)
  {
    doroslosc = 'dorosły'
  }
  else
  {
    doroslosc = 'dziecko'
  }
  let sila = document.getElementById('inpS').value
  let moc = document.getElementById('inpM').value
  if(im.length > 0)
  {
    let post = "<h3>Wygenerowana postać</h3><p>Imię: "+im+"</p><p>Rasa: "+rasa+"</p><p>Klasa: "+klasa+"</p><p>Wiek: "+doroslosc+"</p><p>Siła: "+sila+"</p><p>Moc: "+moc+"</p>"
    document.getElementById('post').innerHTML= post;
  }
}
export default App;
