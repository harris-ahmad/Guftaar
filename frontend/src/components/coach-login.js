import { useState } from "react";
import './form_content.css'
import Si from '../images/sign_in.svg'
import { useNavigate } from 'react-router-dom';


const handleSubmit = (e) => {
    e.preventDefault();

}

function CoachLogin(props){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [e_error, setE_error] = useState(false)
    const [e_pass, setE_pass] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (email === ""){
            console.log(e_error);
            setE_error(true);
            document.getElementById('email').className = "error-control";
            document.getElementById('email').placeholder = "Email required";
        }
        else if(!email.match(mailformat)){
            document.getElementById('error-text').textContent = "Invalid email";
        }
        if(email.match(mailformat)){
            document.getElementById('error-text').textContent = "";
        }
        if (pass == ""){
            setE_pass(true)
            document.getElementById('password').className = "error-control";
            document.getElementById('password').placeholder = "Password required";
        }

    }


    return(
        <div className="client-bg">
        <div className="form-content-login">
            <h2> Login</h2>
            <img id="login" src={Si}/>
            <form className="login-form" onSubmit={handleSubmit}> 
                
                <label for="email">Email</label>
                <input value={email} className={'input'} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder={"Enter your email"} id="email" name="email" title="test"></input>
                <span id="error-text"></span>
                <label for="password"> Password</label>
                <input type="password" className={'input'} value={pass} onChange={(e)=> {setPass(e.target.value)}} placeholder={"Enter your password"}  id="password" name="password"></input>
                <button type="submit" className="buttonL">Log In</button>
            </form>
        </div>
        </div>
    )
}

export default CoachLogin;