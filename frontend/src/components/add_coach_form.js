import './add_coach_form.css'
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import cross from "../images/cross.svg";
import NavbarAdmin from './navbar_admin';

function AdminForm(){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [cpass, setCPass] = useState("")

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState()
    const [qual, setQual] = useState("")
    const [exp, setExp] = useState()
    

    const navigate = useNavigate();

    function shift(){
        navigate("/admin/addEmployee")
    }
    const options = [
        'Male', 'Female'
      ];
    const options2 = [
        'No experience', '1 year', '2 years', '3 years', '4 years', '5+ years'
      ];
      
    const handleSubmit =(e) => {
        validate()
    }
    function validate(){
        if (fname == ""){
            document.getElementById('fname').style.borderColor = "crimson";
            document.getElementById('fname').style.borderWidth = "2px";
            document.getElementById('fname').placeholder = "First name required";
        }
        else{
            document.getElementById('fname').style.borderColor = "";
            document.getElementById('fname').style.borderWidth = "";
        }
        if (lname == ""){
            document.getElementById('lname').style.borderColor = "crimson";
            document.getElementById('lname').style.borderWidth = "2px";
            document.getElementById('lname').placeholder = "Last name required";
        }
        else{
            document.getElementById('lname').style.borderColor = "";
            document.getElementById('lname').style.borderWidth = "";
        }
        if (!gender){
            document.getElementById("error-text-gen").textContent = "Gender required"
            document.getElementById("error-text-gen").style.textDecorationColor = "crimson"
        }
        else{
            document.getElementById("error-text-gen").textContent = ""
            document.getElementById("error-text-gen").style.textDecorationColor = ""
        }
        if (!age){
            document.getElementById('age').style.borderColor = "crimson";
            document.getElementById('age').style.borderWidth = "2px";
            document.getElementById('age').placeholder = "Age required";
        }
        else if (age < 20){
            document.getElementById('age').className = "error-control-r";
            document.getElementById('error-text-age').textContent = "A coach must be 20+.";
            document.getElementById('error-text-age').style.paddingBottom  = "2%";
            document.getElementById('error-text-age').style.display  = "block";
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passwordRegex = /^(?=.*\d).{8,}$/;
        if (email === ""){
            document.getElementById('email').style.borderColor = "crimson";
            document.getElementById('email').style.borderWidth = "2px";
            document.getElementById('email').placeholder = "Email required";
        }
        else if(!email.match(mailformat)){
            document.getElementById('email').style.borderColor = "crimson";
            document.getElementById('email').style.borderWidth = "2px";
            document.getElementById('error-text-email').textContent = "Invalid email";
            document.getElementById('error-text-email').style.paddingBottom  = "2%";
            document.getElementById('error-text-email').style.display = "block"
        }
        else{
            document.getElementById('email').style.borderColor = "";
            document.getElementById('email').style.borderWidth = "";
            document.getElementById('error-text-email').textContent = "";
            document.getElementById('error-text-email').style.paddingBottom  = "";
            document.getElementById('error-text-email').style.display = ""
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
        else{
            document.getElementById('password').style.borderColor = "";
            document.getElementById('password').style.borderWidth = "";
            document.getElementById('error-text-pass').textContent = "";
        }
        if (qual == ""){
            document.getElementById('qual').style.borderColor= "crimson";
            document.getElementById('qual').style.borderWidth = "2px";
            document.getElementById('qual').placeholder = "Qualification required";
        }
        else{
            document.getElementById('qual').style.borderColor= "";
            document.getElementById('qual').style.borderWidth = "";
        }
        if (!exp){
            document.getElementById("error-text-exp").textContent = "Experience required"
            document.getElementById("error-text-exp").style.textDecorationColor = "crimson"
        }
        else{
            document.getElementById("error-text-exp").textContent = ""
            document.getElementById("error-text-exp").style.textDecorationColor = ""
        }
        if (cpass === ""){
            document.getElementById('cpassword').style.borderColor= "crimson";
            document.getElementById('cpassword').style.borderWidth = "2px";
            document.getElementById('cpassword').placeholder = "Password required";
        }
        else if (cpass!=pass){
            document.getElementById('cpassword').style.borderColor = "crimson";
            document.getElementById('cpassword').style.borderWidth = "2px";
            document.getElementById('error-text-cpass').textContent = "Passwords do not match.";
            document.getElementById('error-text-cpass').style.display  = "block";
        }
        else{
            document.getElementById('cpassword').style.borderColor = "";
            document.getElementById('cpassword').style.borderWidth = "";
            document.getElementById('error-text-cpass').textContent = "";
            document.getElementById('error-text-cpass').style.display  = "";
        }
    }
      

    return(
    <div className="formbg">
         <NavbarAdmin />
        {/* <div className="formAdmin" >
            <div className="ftext">
            <h3 className='Name'> Guftaar</h3></div>
            <p className="create"> Add Coach</p>
            <p className="details"> Fill in the details below</p>      
            <img className="back"src={cross} onClick={shift}/>     
            <div classname="fcontent">
                <label for="fname"  className="lf" >First name</label>
                <input value={fname} className="input-field-add" onChange={(e)=> setFname(e.target.value)} type="text" placeholder="Enter your name" id="fname" name="fname"></input>
                <label for="lname" className="ls">Last name</label>
                <input value={lname} className="input-field-add" onChange={(e)=> setLname(e.target.value)} type="text" placeholder="Enter your surname" id="lname" name="lname"></input>
                <label for="gender" className="l">Gender</label>
                <Dropdown  className="gen" 
                options={options} 
                onChange={(e)=>{
                    setGender(e.value);
                    }}  
                value={gender}  
                placeholder="Choose your gender"  id="gender" name="gender" ></Dropdown>
                <span id={"error-text-gen"} className={"et"}></span>
                <label for="email" className="l" >Email</label>                
                <input value={email} className="input-field-add" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email"></input>
                <span id={"error-text-email"} className={"et"}></span>

                <label for="age" className="l">Age</label>
                <input value={age}  className="input-field-add" onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter your age" id="age" name="age"></input>
                <span id={"error-text-age"} className={"et"}></span>
                <label for="qual" className="l">Qualification</label>
                <input value={qual} className="input-field-add" onChange={(e)=> setQual(e.target.value)} type="text" placeholder="Enter your qualification" id="qual" name="qual"></input>
                <label for="exp" className="l">Past Experience</label>
                <Dropdown  className="exp" 
                options={options2} 
                onChange={(e)=>{
                    setExp(e.value);
                    }}  
                value={exp}  
                placeholder="Choose your years of experience" ></Dropdown>
                <span id={"error-text-exp"} className={"et"}></span>       
                <label for="password" className="l">Enter your password</label>
                
                <input type="password" className="input-field-add" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="Enter password" id="password" name="password"></input>
                <span id={"error-text-pass"} className={"et"}></span>
                <label for="cpassword" className="l">Confirm your password</label>    
                <input type="password" className="input-field-add" value={cpass} onChange={(e)=> setCPass(e.target.value)} placeholder="Confirm password" id="cpassword" name="cpassword"></input>

                <span id={"error-text-cpass"} className={"et"}></span>
                <button type="submit" className="buttonL" onClick={handleSubmit}>Create Account</button>

            </div >
        </div> */}
        <div className='center-container'>
            {/* <div className="ftext"> */}
            <div className='form-header'>
                <h3 className='guftaar-name'> Guftaar</h3>
                <p className='create'> Add Coach</p>
                <p className='details'> Fill in the details below</p> 
            </div>
            <div className='form-content-employee'>
                <div className='form-row-1'>
                    <div className='input-row-1'>
                        <label for="fname"  className="lf" >First name</label>
                        <input value={fname} className="input-field-add" onChange={(e)=> setFname(e.target.value)} type="text" placeholder="Enter your name" id="fname" name="fname"></input>
                    </div>
                    <div className='input-row-1'>
                        <label for="lname" className="lf">Last name</label>
                        <input value={lname} className="input-field-add" onChange={(e)=> setLname(e.target.value)} type="text" placeholder="Enter your surname" id="lname" name="lname"></input>
                    </div>
                    <div className='input-row-1'>
                        <label for="gender" className="lf lf-pad">Gender</label>
                        <Dropdown className="gen" 
                        options={options} 
                        onChange={(e)=>{
                            setGender(e.value);
                            }}  
                        value={gender}  
                        placeholder="Choose your gender"  id="gender" name="gender" ></Dropdown>
                        <span id={"error-text-gen"} className={"et"}></span>
                    </div>
                </div>
                <div className='form-row-1'>
                    <div className='input-row-2'>
                        <label for="email" className="lf lef-pad-2" >Email</label>                
                        <input value={email} className="input-field-add" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email"></input>
                        <span id={"error-text-email"} className={"et"}></span>
                    </div>
                    <div className='input-row-2'>
                        <label for="age" className="lf lef-pad-2">Age</label>
                        <input value={age}  className="input-field-add" onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter your age" id="age" name="age"></input>
                        <span id={"error-text-age"} className={"et"}></span>
                    </div>
                </div>
                <div className='form-row-1'>
                    <div className='input-row-2'>
                        <label for="qual" className="lf lef-pad-2">Qualification</label>
                        <input value={qual} className="input-field-add" onChange={(e)=> setQual(e.target.value)} type="text" placeholder="Enter your qualification" id="qual" name="qual"></input>
                    </div>
                    <div className='input-row-2'>
                        <label for="exp" className="lf lef-pad-2">Past Experience</label>
                        {/* <Dropdown  className="exp" 
                        options={options2} 
                        onChange={(e)=>{
                            setExp(e.value);
                            }}  
                        value={exp}  
                        placeholder="Choose your years of experience" ></Dropdown>
                        <span id={"error-text-exp"} className={"et"}></span>   */}

                        {/* NEEDS TO BE CHANGED */}
                        <input value={qual} className="input-field-add" onChange={(e)=> setQual(e.target.value)} type="text" placeholder="Enter your years of experience" id="qual" name="qual"></input>
                    </div>
                </div>
                <div className='form-row-1'>
                    <div className='input-row-2'>
                        <label for="password" className="lf lef-pad-2">Enter your password</label>
                        <input type="password" className="input-field-add" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="Enter password" id="password" name="password"></input>
                        <span id={"error-text-pass"} className={"et"}></span>
                    </div>
                    <div className='input-row-2'>
                        <label for="cpassword" className="lf lef-pad-2">Confirm your password</label>    
                        <input type="password" className="input-field-add" value={cpass} onChange={(e)=> setCPass(e.target.value)} placeholder="Confirm password" id="cpassword" name="cpassword"></input>
                        <span id={"error-text-cpass"} className={"et"}></span>
                    </div>
                </div>
                <div className='form-row-1'>
                    <button type="submit" className="buttonL" onClick={handleSubmit}>Create Account</button>
                </div>
            </div>
            {/* </div> */}
            {/* <h1>Test</h1> */}
        </div>
    </div>
    )
}

export default AdminForm;