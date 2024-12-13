import React from 'react';
import './App.css';
import Godz from './Godz';
const pla =[
  {nr: 1, godz: "8:00 - 8:45", ponPr1: "J.POL", ponN1: "AB", ponS1: "212", ponPr2: "", ponN2: "", ponS2: "",
    wtoPr1: "J.POL", wtoN1: "AB", wtoS1: "212", wtoPr2: "", wtoN2: "", wtoS2: "",
    sroPr1: "", sroN1: "", sroS1: "", sroPr2: "", sroN2: "", sroS2: "",
    czwPr1: "matematyka", czwN1: "BW", czwS1: "515", czwPr2: "", czwN2: "", czwS2: "",
    piPr1: "", piN1: "", piS1: "", piPr2: "", piN2: "", piS2: "",
  },
  {nr: 2, godz: "8:50 - 9:35", ponPr1: "TiDA-1/2", ponN1: "MA", ponS1: "213", ponPr2: "TiDA-2/2", ponN2: "KY", ponS2: "415",
    wtoPr1: "matematyka", wtoN1: "BW", wtoS1: "515", wtoPr2: "", wtoN2: "", wtoS2: "",
    sroPr1: "r_matematyka", sroN1: "BW", sroS1: "515", sroPr2: "", sroN2: "", sroS2: "",
    czwPr1: "J.POL", czwN1: "AB", czwS1: "212", czwPr2: "", czwN2: "", czwS2: "",
    piPr1: "r_angielski-Ja1", piN1: "GM", piS1: "003", piPr2: "j.angielski-Ja2", piN2: "SE", piS2: "209",
  },
  {nr: 3, godz: "9:40 - 10:25", ponPr1: "TiDA-1/2", ponN1: "MA", ponS1: "213", ponPr2: "TiDA-2/2", ponN2: "KY", ponS2: "415",
    wtoPr1: "PAWEB-1/2", wtoN1: "MA", wtoS1: "213", wtoPr2: "PAWEB-2/2", wtoN2: "KY", wtoS2: "415",
    sroPr1: "j.angielski-Ja1", sroN1: "GM", sroS1: "205", sroPr2: "j.angielski-Ja2", sroN2: "SE", sroS2: "209",
    czwPr1: "PrTiDA-1/2", czwN1: "MA", czwS1: "213", czwPr2: "PrTiDA-2/2", czwN2: "KY", czwS2: "415",
    piPr1: "PrAWEB-1/2", piN1: "MA", piS1: "213", piPr2: "PrAWEB-2/2", piN2: "KY", piS2: "415",
  },
  {nr: 4, godz: "10:45 - 11:30", ponPr1: "matematyka", ponN1: "BW", ponS1: "106", ponPr2: "", ponN2: "", ponS2: "",
    wtoPr1: "PAWEB-1/2", wtoN1: "MA", wtoS1: "213", wtoPr2: "PAWEB-2/2", wtoN2: "KY", wtoS2: "415",
    sroPr1: "PrAM-1/2", sroN1: "MA", sroS1: "213", sroPr2: "PrAM-2/2", sroN2: "GJ", sroS2: "415",
    czwPr1: "PrTiDA-1/2", czwN1: "MA", czwS1: "213", czwPr2: "PrTiDA-2/2", czwN2: "KY", czwS2: "415",
    piPr1: "PrAWEB-1/2", piN1: "MA", piS1: "213", piPr2: "PrAWEB-2/2", piN2: "KY", piS2: "415",
  },
  {nr: 5, godz: "11:35 - 12:20", ponPr1: "j.angielski-Ja1", ponN1: "GM", ponS1: "003", ponPr2: "r_angielski-Ja2", ponN2: "SE", ponS2: "209",
    wtoPr1: "wf-w1", wtoN1: "WB", wtoS1: "sg2", wtoPr2: "wf-w2", wtoN2: "PR", wtoS2: "sg1",
    sroPr1: "PrAM-1/2", sroN1: "MA", sroS1: "213", sroPr2: "PrAM-2/2", sroN2: "GJ", sroS2: "415",
    czwPr1: "wf-w1", czwN1: "WB", czwS1: "sg4", czwPr2: "wf-w2", czwN2: "PR", czwS2: "sg3",
    piPr1: "PrAWEB-1/2", piN1: "MA", piS1: "213", piPr2: "PrAWEB-2/2", piN2: "KY", piS2: "415",
  },
  {nr: 6, godz: "12:25 - 13:10", ponPr1: "wf-w1", ponN1: "WB", ponS1: "sg4", ponPr2: "wf-w2", ponN2: "PR", ponS2: "sg3",
    wtoPr1: "R/E", wtoN1: "MI", wtoS1: "106", wtoPr2: "", wtoN2: "", wtoS2: "",
    sroPr1: "PrAM-1/2", sroN1: "MA", sroS1: "213", sroPr2: "PrAM-2/2", sroN2: "GJ", sroS2: "415",
    czwPr1: "R/E", czwN1: "MI", czwS1: "105", czwPr2: "", czwN2: "", czwS2: "",
    piPr1: "PrAWEB-1/2", piN1: "MA", piS1: "213", piPr2: "PrAWEB-2/2", piN2: "KY", piS2: "415",
  },
  {nr: 7, godz: "13:15 - 14:00", ponPr1: "zaj. wych", ponN1: "BA", ponS1: "402", ponPr2: "", ponN2: "", ponS2: "",
    wtoPr1: "", wtoN1: "", wtoS1: "", wtoPr2: "", wtoN2: "", wtoS2: "",
    sroPr1: "PrAM-1/2", sroN1: "MA", sroS1: "213", sroPr2: "PrAM-2/2", sroN2: "GJ", sroS2: "415",
    czwPr1: "", czwN1: "", czwS1: "", czwPr2: "", czwN2: "", czwS2: "",
    piPr1: "", piN1: "", piS1: "", piPr2: "", piN2: "", piS2: "",
  },
]
function App() {
  return (
    <React.StrictMode>
      <div className='tytul'>
        <span>5M 5M pr</span>
      </div>
      <table className='tab'>
        <tr className='b'>
          <th>Nr</th>
          <th>Godz</th>
          <th>Poniedziałek</th>
          <th>Wtorek</th>
          <th>Środa</th>
          <th>Czwartek</th>
          <th>Piątek</th>
        </tr>
        {pla.map((p) => <Godz key={p.nr} go={p}/>)}
      </table>
    </React.StrictMode>
  );
}

export default App;
