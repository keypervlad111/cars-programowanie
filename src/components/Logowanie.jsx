import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logowanie.css"

function Logowanie() {
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState({
        error: null
    })

    const navigate = useNavigate();

    function check() {
        if (login == "login" && pass == "pass") {
            setError(error => ({
                ...error,
                error: null
            }))
            navigate("/tabela");
        } else {
            setError(error => ({
                ...error,
                error: 1
            }))
        }
    }

    return (
        <div className="main_container">
            <h1>Logowanie</h1>
            <div className="name_input">Login: <input type="text" onChange={event => setLogin(event.target.value)} /> </div>
            <div className="name_input">Haslo: <input type="text" onChange={event => setPass(event.target.value)} /></div>
            <button className="btn btn-outline-dark" onClick={check}>Zaloguj</button>
            {error.error && <div className="error_logIn">Masz blad w loginie lub hasle</div>}
        </div>
    )
}

export default Logowanie;