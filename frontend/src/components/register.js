import { useState } from "react";
import './form_content.css'
import reg from "../images/register.svg"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register(props){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [age, setAge] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passwordRegex = /^(?=.*\d).{8,}$/;
        if (email === ""){
            document.getElementById('email').style.borderColor = "crimson";
            document.getElementById('email').style.borderWidth = "2px";
            document.getElementById('email').placeholder = "Last name required";
        }
        else if(!email.match(mailformat)){
            document.getElementById('email').style.borderColor = "crimson";
            document.getElementById('email').style.borderWidth = "2px";
            document.getElementById('error-text-email').textContent = "Invalid email";
            document.getElementById('error-text-email').style.paddingBottom  = "2%";
            document.getElementById('error-text-email').style.display = "block"
        }
        if (pass === ""){
            document.getElementById('password').style.borderColor= "crimson";
            document.getElementById('password').style.borderWidth = "2px";
            document.getElementById('password').placeholder = "Password required";
        }
        else if (!passwordRegex.test(pass)){
            document.getElementById('password').style.borderColor = "crimson";
            document.getElementById('password').style.borderWidth = "2px";
            document.getElementById('error-text-pass').textContent = "Password must be at least 8 characters long, with a number.";
            document.getElementById('error-text-pass').style.display  = "block";
        }
        if (fname === ""){
            document.getElementById('fname').style.borderColor = "crimson";
            document.getElementById('fname').style.borderWidth = "2px";
            document.getElementById('fname').placeholder = "First name required";
        }
        if (lname === ""){
            document.getElementById('lname').style.borderColor = "crimson";
            document.getElementById('lname').style.borderWidth = "2px";
            document.getElementById('lname').placeholder = "Last name required";
        }
        if (!age){
            document.getElementById('age').style.borderColor = "crimson";
            document.getElementById('age').style.borderWidth = "2px";
            document.getElementById('age').placeholder = "Age required";
        }
        else if (age < 13){
            document.getElementById('age').className = "error-control-r";
            document.getElementById('error-text-age').textContent = "To use Guftaar, you must be 13+.";
            document.getElementById('error-text-age').style.paddingBottom  = "2%";
            document.getElementById('error-text-age').style.display  = "block";
        }

        const newUser = {
            firstName: fname,
            lastName: lname,
            age: age,
            email: email,
            password: pass,
          };
      
          axios
            .post("http://localhost:4000/client/register", newUser, {
              headers: { "Content-Type": "application/json; charset=UTF-8" },
            })
            .then((response) => {
              navigate("/client/login");
            })
            .catch((err) => {
              console.log(err);
              window.location.reload();
            });
    
    }

    const navigate = useNavigate();
    function Toggle(){
        navigate("/client/login")
    }
    
    return(
        <div className="client-bg">
        <div className="main-container">
            <div className="img-container">
                <h1 className="welcome-heading">Welcome to Guftaar</h1>
                <img src={reg} className='reg-img' />      
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form"> 
                    <label for="fname">First name</label>
                    <input value={fname} className="input-field" onChange={(e)=> setFname(e.target.value)} type="text" placeholder="Enter your name" id="fname" name="fname"></input>
                    <label for="lname">Last name</label>
                    <input value={lname} className="input-field" onChange={(e)=> setLname(e.target.value)} type="text" placeholder="Enter your surname" id="lname" name="lname"></input>
                    <label for="age">Age</label>
                    <input value={age} className="input-field" onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter your age" id="age" name="age"></input>
                    <span id={"error-text-age"} className={"et"}></span>
                    <label for="email">Enter your email</label>
                   
                    <input value={email} className="input-field" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <span id={"error-text-email"} className={"et"}></span>
                    <label for="password">Enter your password</label>
                    
                    <input type="password" className="input-field" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="Enter password" id="password" name="password"></input>
                    <span id={"error-text-pass"} className={"et"}></span>
                    <button type="submit" className="reg-btn">Register</button>
                    <button className="form-button" onClick={Toggle}> Already have an account? Login here </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register;