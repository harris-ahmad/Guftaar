import React from 'react';
import "./coach_dashboard.css";
import phonei from "../images/phoneicon.png"
import infoi from "../images/infoicon.png"
import NavbarCoach from './coach_navbar';
import Carousel from './coach_dashboard_carousel';
import Calendar from './calendar'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Dashboard() {
  const [name, setName] = useState("");
  const [meetingDetails, setMeetingDetails] = useState([]);
  const navigate = useNavigate()
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let display = false

  useEffect(() => {
    const fetchData = async function () {
      let toSend = { email: localStorage.getItem("email") };
      let result2 = await axios.post(
        "http://localhost:4000/coach/getName",
        toSend
      );
      setName(result2.data.firstName)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async function () {
      let toSend = { email: localStorage.getItem("email") };
      setIsLoading(true);
      let result2 = await axios.post(
        "http://localhost:4000/coach/getMeetings",
        toSend
      );
      if (result2.data.length === 0) {
        // alert("No meetings found.");
      } else {
        let meetingDetailsArray = result2.data;

        setMeetingDetails(meetingDetailsArray);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (!localStorage.getItem("coachtoken")){
    return (
      <div>
        <h1> Not Authorized</h1>
      </div>
    )
  }
  else{

  return (
    <div className="admin-dashboard-bg">
       <NavbarCoach />
       <div className='welcome-heading'>
        Welcome, {name}
       </div>
       <div className='second-heading'>
        Upcoming Meetings
       </div>
       <div className='meeting-container'>

  {Object.keys(meetingDetails).length > 0 ? (
    Object.keys(meetingDetails).map((key, index) => (
      <div key={index} className='meeting-box'>
        <h6 className='subtext1'>Coaching with {meetingDetails[key].clientName} on {new Date(meetingDetails[key].date).toISOString().substring(0, 10)} at {new Date(meetingDetails[key].date).toISOString().substr(11, 5)} </h6>
        <img src={phonei} alt={`PhoneIcon-${index}`} className={`phoneicon1`} />
      </div>
    ))
  ) : (
    <div className='meeting-box'>
        <h6 className='subtext3'> No upcoming meetings</h6>
      </div>
  )}
  
</div>
    
       <div className='third-heading'>
       Your Clients
       <button type="button" className='infoicon'>
       <img src={infoi} alt="InfoIcon" className='infoicon' />
        </button>
       </div>
       <div className='meetingscroll'>
        <button className='addnotesbutton' onClick={() => {navigate("/coach/notes")}}>+ add notes</button> 
        </div>
        <Carousel />
        <Calendar/>
    </div>
  );
}
}

export default Dashboard;
