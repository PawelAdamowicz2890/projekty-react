import React from "react";
import './css/bootstrap.css'
import './Form.css'

function Form()
{
    return(
        <React.StrictMode>
            <form>
                <div className="form-group">
                    <label htmlFor="inputIm">Imię</label>
                    <input type="text" className="form-control mt-2" id="inputIm"></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="inputNazw">Nazwisko</label>
                    <input type="text" className="form-control mt-2" id="inputNazw"></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="inputMai">Email</label>
                    <input type="email" className="form-control mt-2" id="inputMai"></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="inputPass">Hasło</label>
                    <input type="password" className="form-control mt-2" id="inputPass"></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="inputPass2">Powtórz hasło</label>
                    <input type="password" className="form-control mt-2" id="inputPass2"></input>
                </div>
                <div className="form-check mt-3"> 
                    <label className="form-check-label" htmlFor="checkB">Zapoznałem się z regulaminem</label>
                    <input className="form-check-input" type="checkbox" value="" id="checkB" />
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={Sprawdz}>Zatwierdź</button>
            </form>
        </React.StrictMode>
    );
}
function Sprawdz()
{
    let im = document.getElementById('inputIm').value;
    let nazw = document.getElementById('inputNazw').value;
    let mail = document.getElementById('inputMai').value;
    let pass = document.getElementById('inputPass').value;
    let pass2 = document.getElementById('inputPass2').value;
    let chk = document.getElementById('checkB');
    if(im == "")
    {
        console.log("Nie podano imienia!");
        return;
    }
    if(nazw == "")
    {
        console.log("Nie podano nazwiska!");
        return;
    }
    if(mail == "")
    {
        console.log("Nie podano maila!");
        return;
    }
    if(pass == "")
    {
        console.log("Nie podano hasła!");
        return;
    }
    if(pass == "")
    {
        console.log("Nie podano podano hasła ponownie!");
        return;
    }
    if(!mail.includes('@'))
    {
        console.log("Mail nie zawiera @!");
        return;
    }
    if(pass != pass2)
    {
        console.log("Hasła nie są takie same!");
        return;
    }
    if(!chk.checked)
    {
        console.log("Nie zapoznałeś się z regulaminem!");
        return;
    }
    console.log("Pomyślna rejestracja!");
}
export default Form;