import { useState } from "react";
import './form_content.css'
import Si from '../images/sign_in.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props){

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [e_error, setE_error] = useState(false)
    const [e_pass, setE_pass] = useState(false)


    const validation = (e) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let e_flag = false;

        
        if (email === ""){
            e_flag = true;
            document.getElementById('email').className = "error-control";
            document.getElementById('email').placeholder = "Email required";
        }
        else if(!email.match(mailformat)){
            e_flag = true;
            document.getElementById('error-text').textContent = "Invalid email";
        }
        else{
            document.getElementById('email').className = "input";
            document.getElementById('email').placeholder = "";
            document.getElementById('error-text').textContent = "";
        }

        if (pass == ""){
            e_flag = true;
            document.getElementById('password').className = "error-control";
            document.getElementById('password').placeholder = "Password required";
        }
        else{
            document.getElementById('password').className = "input";
            document.getElementById('password').placeholder = "";

        }
        if (e_flag){
            console.log("error")
            return false;
        }
        else{
            return true;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let flag = validation();
        if (flag){
            axios.post("http://localhost:3001/api/client/login/", {email:email, password:pass}).then((response) => {
            if (response.data.message === "success"){
                    navigate("/client/dashboard")
                }
                else if (response.data.message === "failure"){
                    
                    document.getElementById('error-text-p').textContent = "Login failed!";
                }
            })
        }
        else{
            //pass
        }
        navigate("/client/dashboard")

    }

    const navigate = useNavigate();
    function Toggle(){
        navigate("/client/register")
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
                <span id="error-text-p"></span>
                <button type="submit" className="buttonL">Log In</button>
            </form>
            <button  className="form-buttonl" onClick={Toggle}> New to Guftaar? Register here. </button>
        </div>
        </div>
    )
}

export default Login;