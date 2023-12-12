
import { BsFillFileExcelFill, BsPencilSquare } from "react-icons/bs";
import "./Tabela.css"
import { useNavigate } from "react-router-dom";

function Tabela({ arr, deleteCar }) {
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
                        <th colSpan="2"><button onClick={() => (navigate("/tabela/add/dodaj"))} className="btn_add_samochody">&#43;</button></th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(car => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.marka}</td>
                            <td>{car.model}</td>
                            <td>{car.rocznik}</td>
                            <td><BsFillFileExcelFill onClick={() => deleteCar(car.id)} className="icons" /></td>
                            <td><BsPencilSquare onClick={() => (navigate("/tabela/add/"+ car.id))} className="icons" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Tabela;