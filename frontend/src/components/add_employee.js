import './add_employee.css'
import cross from "../images/cross.svg";
import dashboard from './admin_dashboard'
import admin from "../images/adminadd.png";
import coach from "../images/coachadd.png";


function add_employee(){
    return (

    <div className='employeeBack'>
            <h3 className='titlequestion'>Add Employee</h3>
            <img className="gobackcross"src={cross}/>
            <h1 className='whichquestion'>Which employee type are you creating an account for?</h1>
            <div className='adminBack'>
                <h3 className= 'category'>Administrator</h3>
                <img className='adminpic' src={admin}/>
            </div>
            <div className='coachBack'>
            {/* <img className='coachpic' src={coach}/> */}
            <h3 className= 'category'>Coach</h3>
            </div>
    </div>

    );

}

export default add_employee;