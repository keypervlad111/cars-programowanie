import { useState, useEffect } from "react";
import "./AddTabela.css"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddTabela({arr, addCar, EditCar}) {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false)
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        marka: '',
        model: '',
        rocznik: ''
    })

    useEffect(()=>{
        if(id != 'dodaj'){
            // Edycja
            setEditMode(true)
            arr.forEach(element => {
                if(element.id == id){
                    const {marka, model, rocznik} = element
                    setFormData({marka, model, rocznik})
                }
            })
        }
    },[])

    function handelFormChange(event) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(){
        const {marka, model, rocznik} = formData
        if(editMode) {
            // Edycja samochodu
            EditCar({id: id, marka, model, rocznik})
            navigate("/tabela")
        } else {
            // Dodanie samochodu
            addCar({marka, model, rocznik})
            navigate("/tabela")
        }
    }

    return (
        <div>
            <h1>Dodaj Samochod</h1>
            <div className="input_add">Marka: <input name="marka" type="text" onChange={handelFormChange} value={formData.marka} /></div>
            <div className="input_add">Model: <input name="model"type="text" onChange={handelFormChange} value={formData.model} /> </div>
            <div className="input_add">Rocznik: <input name="rocznik" type="text" onChange={handelFormChange} value={formData.rocznik} /></div>
            <button onClick={handleSubmit} className="btn btn-outline-dark">{editMode ? "Zmien" : "Dodaj"}</button>
        </div>
    )
}

export default AddTabela;