import { useState } from "react";
import { BsFillFileExcelFill, BsPencilSquare } from "react-icons/bs";
import "./Tabela.css"
import { useNavigate } from "react-router-dom";
import AddTabela from "./AddTabela";

function Tabela() {
    const [arr, setArr] = useState([
        { id: 1, marka: "Audi", model: "A6", rocznik: 2000 },
        { id: 2, marka: "Seat", model: "Ibiza", rocznik: 2010 },
        { id: 3, marka: "BMW", model: "e46", rocznik: 2000 }
    ])
    const navigate = useNavigate();
    return (
        <div>
            <h1>Samochody</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Rocznik</th>
                        <th colspan="2"><button onClick={() => (navigate("/tabela/add"))} className="btn_add_samochody">&#43;</button></th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(car => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.marka}</td>
                            <td>{car.model}</td>
                            <td>{car.rocznik}</td>
                            <td><BsFillFileExcelFill onClick={() => (navigate("/tabela/add/"+ car.id))} className="icons" /></td>
                            <td><BsPencilSquare className="icons" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Tabela;