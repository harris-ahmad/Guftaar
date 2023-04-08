import './navbar_client.css'
import profile from "../images/Test Account.png";
import home from "../images/Home.png";
import fire from "../images/Fire.png";
import {Link, Route, Router} from 'react-router-dom'
import LandingPage from './landing_page';
import DropdownNavbar from './navbar_dropdown';
import { useNavigate } from 'react-router-dom';


function NavbarClient(){
    const navigate = useNavigate();

    function GoBack(){
        navigate("/client/dashboard")
    }

    return(
        <nav>
            <ul className='nav-items-list'>
                <li className='guftaar-logo nav-item'><a onClick={GoBack}>Guftaar</a></li>
                <li className='nav-item'> <a className='nav-anchor' href='./dailyActivities'>daily activities</a></li>
                <li className='nav-item'> <a className='nav-anchor' href='./speechTechniques'>speech techniques</a></li>
                <li className='nav-item'><a className='nav-anchor' href='./quickPractice'>quick practice</a></li>
                <li className='nav-item'><a className='nav-anchor' href='./coaches'>coaches</a></li>
                <li className='nav-item'><a className='nav-anchor' href='./courses'>courses</a></li>
                <div>
                    <img src={fire} className='navbar-img-fire'/>
                    <span className='streak-value'>50</span>
                </div>

                <div className='navbar-icons'>    
               <img src={home} className='navbar-img-home' onClick={GoBack}/>
                </div>

                <DropdownNavbar />
                
            </ul>
        </nav>
    )
}

export default NavbarClient; 