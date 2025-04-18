import React from 'react';
import './App.css';
import './css/bootstrap.css';
function App() {
  return (
    <React.StrictMode>
      <form>
        <div className="form-group s"> 
          <label htmlFor="inpIm">imię</label> 
          <input type="text" className="form-control" id="inpIm" />
        </div>
        <div className="form-group s">  
          <label htmlFor="inpNazw">nazwisko</label> 
          <input type="text" className="form-control" id="inpNazw" />
        </div>
        <div className="form-group s">  
          <label htmlFor="inpMail">email</label> 
          <input type="email" className="form-control" id="inpMail" />
        </div>
        <div className="form-group s">  
          <label htmlFor="inpPass">hasło</label> 
          <input type="password" className="form-control" id="inpPass" />
        </div>
        <div className="form-group s">  
          <label htmlFor="inpPass2">Powtórz hasło</label> 
          <input type="password" className="form-control" id="inpPass2" />
        </div>
        <div className="form-check s">  
          <label className="form-check-label" htmlFor="checkB">zapoznałem się z regulaminem</label>
          <input className="form-check-input" type="checkbox"value=""id="checkB"/>  
        </div> 
      </form>
      <button type="button" className="btn btn-primary s" onClick={Sprawdz}>zatwierdź</button>
    </React.StrictMode>
  );
}
function Sprawdz()
{
  let im = document.getElementById('inpIm').value;
  let nazw = document.getElementById('inpNazw').value;
  let mail = document.getElementById('inpMail').value;
  let pass = document.getElementById('inpPass').value;
  let pass2 = document.getElementById('inpPass2').value;
  
  let er = "błąd";
  if(im === "")
    er= er + " nie podano imienia,";
  if(nazw === "")
    er= er + " nie podano nazwiska,";
  if(mail === "")
    er= er + " nie podano maila,";
  else
    if(mail.indexOf('@') === -1)
      er= er + " mail nie zawiera @,";
  if(pass === "")
    er= er + " nie podano hasła,";
  if(pass2 === "")
    er= er + " nie podano hasła ponownie,";
  if(pass != pass2 && pass != "" && pass2 != "")
    er= er + " podane hasła nie są takie same,";
  if(document.getElementById('checkB').checked == false)
    er = er + " nie zapoznałeś się z regulaminem";
  if(er != "błąd")
    alert(er);
  else
    alert("dane poprawne")
}
export default App;
