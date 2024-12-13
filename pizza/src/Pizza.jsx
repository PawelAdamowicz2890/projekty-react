import React from "react";
import './Pizza.css'

function Pizza(props)
{
    return(
        <React.StrictMode>
            <div className="pizza">
                <div className="imgp">
                    <img src={props.pi.obr} alt={props.pi.nazwa}></img>
                </div>
                <div className="p2">
                    <h2>{props.pi.nazwa}</h2>
                    <p>{props.pi.rozmiar} - {props.pi.cena.toFixed(2)} zł</p>
                    <p className="gray">{props.pi.sklad}</p>
                    <h3 className="org">+ 2 Sosy Gratis do każdej pizzy</h3>
                </div>
            </div>
        </React.StrictMode>
    );
}
export default Pizza;