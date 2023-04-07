import Si from "../images/change_pw.svg"
import './update_pw.css'
import { useState } from "react";

function ChangePassword(){
    const [cpass, setCPass] = useState("");
    const [pass_o, setPass] = useState("");

    var passwordRegex = /^(?=.*\d).{8,}$/;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass_o === ""){
            document.getElementsByClassName('input-field-c')[0].style.borderColor = "crimson";
            document.getElementsByClassName('input-field-c')[0].placeholder = "Password required";
        }
        else if (!passwordRegex.test(pass_o)){
            document.getElementsByClassName('input-field-c')[0].style.borderColor = "crimson";
            document.getElementById('pass_o').textContent = "Password must have 8+ characters, with a number.";
            document.getElementById('pass_o').style.color = "crimson";
            document.getElementById('pass_o').style.display = "block"
            document.getElementById('pass_o').style.paddingBottom = "4%"
        }
        if (cpass === ""){
            document.getElementsByClassName('input-field-c')[1].style.borderColor = "crimson";
            document.getElementsByClassName('input-field-c')[1].placeholder = "Password required";
        }
        else if (cpass !== pass_o){
            document.getElementsByClassName('input-field-c')[1].style.borderColor = "crimson";
            document.getElementById('cpass').textContent = "Both passwords do not match.";
            document.getElementById('cpass').style.color = "crimson"
        }

    }

    return (
        <div className="upper"> 
        <div id="center-div">
            <div class="img-container"> 
                <img src={Si} class="change-pw-image"/>
            </div>
            <div className="form-container">
                <h1 id="form-heading">Update Password</h1>
                <form>
                    <label> New Password</label>
                    <input placeholder="Enter new password" className="input-field-c" onChange={(e)=> setPass(e.target.value)}></input>
                    <span id="pass_o" style={{paddingBottom:"10px"}}></span>
                    <label> Confirm New Password</label>
                    <input placeholder="Re-enter password" className="input-field-c" onChange={(e)=> setCPass(e.target.value)}></input>
                    <span id="cpass"></span>
                    <div className="btn-container">
                        <button type="submit" className="btn" onClick={handleSubmit}>Confirm</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ChangePassword; 