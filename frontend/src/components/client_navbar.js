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
            <ul>
                <li className='guftaar-logo'><a>Guftaar</a></li>
                <li>daily activities</li>
                <li>speech techniques</li>
                <li>quick practice</li>
                <li>coaches</li>
                <li>courses</li>
                <div>
                    <img src={fire} className='navbar-img-fire'/>
                    <span className='streak-value'>50</span>
                </div>

                <div className='navbar-icons'>    
                    <img src={home} className='navbar-img-home'/>
                </div>

                <DropdownNavbar />
                
            </ul>
        </nav>
    )
}

export default NavbarClient; 