import React from 'react';
import "./coach_dashboard.css";
import phonei from "../images/phoneicon.png"
import infoi from "../images/infoicon.png"
// import NavbarCoach from './coach_navbar';
import Carousel from './coach_dashboard_carousel';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

function Dashboard() {
  return (
    <div className="admin-dashboard-bg">
       {/* <NavbarCoach /> */}
       <div className='welcome-heading'>
        Welcome, Harris
       </div>
       <div className='second-heading'>
        Upcoming Meetings
       </div>
       <div className='meetingbox1'>
        <h2 className='meetingname1'>Emaan Atique</h2>
        <img src={phonei} alt="PhoneIcon" className='phoneicon1' />
        <p className='meetingstext1'> meetings</p>
        <p className='time1'>01</p>
        <p className='time2'>:</p>
        <p className='time3'>59</p>
       </div>
       <div className='meetingbox2'>
        <h2 className='meetingname2'>Salman Rehman</h2>
        <img src={phonei} alt="PhoneIcon" className='phoneicon2' />
        <p className='meetingstext2'> meetings</p>
        <p className='time4'>01</p>
        <p className='time5'>:</p>
        <p className='time6'>59</p>
        <button className='viewallbutton'>view all</button>
       </div>
       <div className='third-heading'>
       Your Clients
       <button type="button" className='infoicon'>
       <img src={infoi} alt="InfoIcon" className='infoicon' />
        </button>
       </div>
       <div className='meetingscroll'>
        <button className='addnotesbutton'>+ add notes</button> 
        </div>
        <Carousel />
    </div>
  );
}

export default Dashboard;
