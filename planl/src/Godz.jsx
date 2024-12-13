import React from "react";
import './Godz.css'

function Godz(props)
{
    return(
        <React.StrictMode>
            <tr>
                <td className='b'>{props.go.nr}</td>
                <td className="be">{props.go.godz}</td>
                <td>
                    <b>{props.go.ponPr1}</b> {props.go.ponN1} {props.go.ponS1}<br></br>
                    <b>{props.go.ponPr2}</b> {props.go.ponN2} {props.go.ponS2}
                </td>
                <td>
                    <b>{props.go.wtoPr1}</b> {props.go.wtoN1} {props.go.wtoS1}<br></br>
                    <b>{props.go.wtoPr2}</b> {props.go.wtoN2} {props.go.wtoS2}
                </td>
                <td>
                    <b>{props.go.sroPr1}</b> {props.go.sroN1} {props.go.sroS1}<br></br>
                    <b>{props.go.sroPr2}</b> {props.go.sroN2} {props.go.sroS2}
                </td>
                <td>
                    <b>{props.go.czwPr1}</b> {props.go.czwN1} {props.go.czwS1}<br></br>
                    <b>{props.go.czwPr2}</b> {props.go.czwN2} {props.go.czwS2}
                </td>
                <td>
                    <b>{props.go.piPr1}</b> {props.go.piN1} {props.go.piS1}<br></br>
                    <b>{props.go.piPr2}</b> {props.go.piN2} {props.go.piS2}
                </td>
            </tr>
        </React.StrictMode>
    );
}
export default Godz;