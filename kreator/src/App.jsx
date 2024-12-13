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
          <input type='number'  min='160' max='200' className='inp'></input>
        </div>
      </div>
      <div className='cent cl w'>
        <div className='fl spc l'>
          siła:
        </div>
        <div className='fl spc'>
          <input type='number' id='inpS' className='inpsh'></input>
        </div>
        <div className='fl spc'>
          moc:
        </div>
        <div className='fl spc'>
          <input type='number' id='inpM' className='inpsh'></input>
        </div>
        
        <button onClick={gen}>Generuj</button>
      </div>
    </React.StrictMode>
  );
}
function wzr()
{
  let input;
  if(document.getElementById("rdcz").checked)
  {
    input = "<input type='number'  min='160' max='200' className='inp'></input>"
    document.getElementById("inpwz").innerHTML= input;
  }
  if(document.getElementById("rdel").checked)
  {
    input = "<input type='number'  min='190' max='230' className='inp'></input>"
    document.getElementById("inpwz").innerHTML= input;
  }
  if(document.getElementById("rdgb").checked)
  {
    input = "<input type='number'  min='120' max='160' className='inp'></input>"
    document.getElementById("inpwz").innerHTML= input;
  }
  
}
function gen()
{

}
export default App;
