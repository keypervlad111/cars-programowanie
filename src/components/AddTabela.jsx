import { useState } from "react";
import "./AddTabela.css"

function AddTabela() {
    const [marka, setMarka] = useState("")
    return (
        <div>
            <h1>Dodaj Samochod</h1>
            <div className="input_add">Marka: <input type="text" onChange={event => setMarka(event.target.value)} /></div>
            <div className="input_add">Model: <input type="text" onChange={event => setMarka(event.target.value)} /> </div>
            <div className="input_add">Rocznik: <input type="number" onChange={event => setMarka(event.target.value)} /></div>
            <button className="btn btn-outline-dark">Dodaj</button>
        </div>
    )
}

export default AddTabela;