import React from "react";
import "./css/bootstrap.css"
import "./Kurs.css"
function Kurs(props)
{
    
    function Wypisz()
    {
        var imn = document.getElementById("inputImNazw").value;
        var nr = document.getElementById("inputNr").value;
        if(nr == "" || imn == "")
        {
            console.log("brak danych");
            return;
        }
        console.log(imn);
        if(props.kr.length < nr || nr==0)
            console.log("brak danych")
        else
            console.log(props.kr[nr-1].kurs);
    }
    return(
        <React.StrictMode>
            <div>
                <ol>
                    {props.kr.map((k) => <li key={k.nr}>{k.kurs}</li>)}
                </ol>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="inputImNazw">Imię i nazwisko:</label>
                    <input type="text" className="form-control bg-lightblue" id="inputImNazw" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputNr">Numer kursu:</label>
                    <input type="number" className="form-control" id="inputNr" />
                </div><br></br>
                <button type="button" className="btn btn-primary btn-gradient" onClick={Wypisz}>Zapisz do kursu</button>
            </form>
        </React.StrictMode>
    );
}
export default Kurs;