import './App.css';
import React from 'react';

function Lakier(props)
{
    return(
        <React.StrictMode>
            <div className='hov w'>
                <img src={props.lak.plik} alt={props.lak.nazwa} />
                <div className='fr dl'>
                    <h3 className='cent'>{props.lak.nazwa}</h3>
                    <p className='cent'>odcień: {props.lak.odcien}</p>
                    <p className='cent bold'>Cena: {props.lak.cena} zł</p>
                    <p className='cent bg'>{props.lak.reklama}</p>
                    <button className='cent' onClick={props.fun}>Dodaj do koszyka</button>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default Lakier;