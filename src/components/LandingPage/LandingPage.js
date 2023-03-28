import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

export function LandingPage(){
    const navigate = useNavigate(); 


    return (
        <div>
            <button onClick={() => navigate("/login_c")}>Client</button>
            <button onClick={() => navigate("/login_i")}>Coach</button>
            <button onClick={() => navigate("/login_a")}>Admin</button>
        </div>
    )
}