import './add_employee.css'
import cross from "../images/cross.svg";
import admin from "../images/adminadd.png";
import coach from "../images/coachadd.png";
import Dashboard from './admin_dashboard';


function add_employee(){
    return (

    <div className='employeeBack'>
            <h3 className='titlequestion'>Add Employee</h3>
            <a href='Dashboard'><img className="gobackcross"src={cross}/></a>
            <h1 className='whichquestion'>Which employee type are you creating an account for?</h1>
            <div className='adminBack'>
                <h3 className= 'categorya'>Administrator</h3>
                <img className='adminpic' src={admin}/>
            </div>
            <div className='coachBack'>
            <img className='coachpic' src={coach}/>
            <h3 className= 'categoryc'>Coach</h3>
            </div>
    </div>

    );

}

export default add_employee;