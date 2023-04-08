import './navbar_client.css'
import profile from "../images/Test Account.png";
import home from "../images/Home.png";
import fire from "../images/Fire.png";
import {Link, Route, Router} from 'react-router-dom'
import LandingPage from './landing_page';
import DropdownNavbar from './navbar_dropdown';


function NavbarClient(){

    return(
        <nav>
            <ul className='nav-items-list'>
                <li className='guftaar-logo nav-item'><a href='./dashboard'>Guftaar</a></li>
                <li className='nav-item'> <a className='nav-anchor' href='./DailyActivities'>daily activities</a></li>
                <li className='nav-item'> <a className='nav-anchor' href='./SpeechTechniques'>speech techniques</a></li>
                <li className='nav-item'><a className='nav-anchor' href='./QuickPractice'>quick practice</a></li>
                <li className='nav-item'><a className='nav-anchor' href='./Coaches'>coaches</a></li>
                <li className='nav-item'><a className='nav-anchor' href='./Courses'>courses</a></li>
                <div>
                    <img src={fire} className='navbar-img-fire'/>
                    <span className='streak-value'>50</span>
                </div>

                <div className='navbar-icons'>    
                <a href='./dashboard'><img src={home} className='navbar-img-home'/></a>
                </div>

                <DropdownNavbar />
                
            </ul>
        </nav>
    )
}

export default NavbarClient; 