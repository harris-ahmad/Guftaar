import React, { useState, useEffect } from 'react';
import './client_dashboard.css'
import qu from "../images/quote.svg"
import phone from "../images/phone.svg"
import course from "../images/course.svg"
import arrow from "../images/arrow.svg"
import happy from "../images/happy.svg"
import moderate from "../images/moderate.svg"
import extreme from "../images/extreme.svg"
import { useNavigate } from 'react-router-dom';
import fire from "../images/fire.svg";
import volume from "../images/volume.svg";
import mic from "../images/mic.svg";
import dailyActivities from './daily_activities';
import NavbarClient from './client_navbar';
import axios from "axios";

function Quote() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState('');
  const [firstName, setFirstName] = useState("");
  const email = localStorage.getItem("email")

  useEffect(() => {
    const fetchData = async function () {
      let result = await axios.get("http://api.quotable.io/random");
      let toSend = { email: localStorage.getItem("email") };
      setQuote(result.data.content);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async function () {
      let toSend = { email: localStorage.getItem("email") };
      let result2 = await axios.post(
        "http://localhost:4000/client/getFirstName",
        toSend
      );
      setFirstName(result2.data.firstName);
    };
    fetchData();
  }, []);


  function NoStuttering(){
    axios.post('http://localhost:3000/client/moodlog', {email:email, mood: "NoStuttering"})
}
  function Moderate(){
    axios.post('http://localhost:3000/client/moodlog', {email:email, mood: "Moderate"})
}
  function Extreme(){
    axios.post('http://localhost:3000/client/moodlog', {email:email, mood: "Extreme"})
}
  function Course(){
    navigate("/courses")
}

  return (
    <div className="client-bg">
      <NavbarClient />
      <div className='mainwelcome'>
        <h6 className='welcome'>{firstName}'s Dashboard</h6>
      </div>
        <div className="quoteback">
        <img className="qu"src={qu}/>
        <h6 className='top1'>Strength Statements</h6>
        <p className='text1'>{quote}</p>  
        </div>
       
        <div className='log'>
        <p className='logtext1'> How was your stuttering today?</p>
          <div className='circleBack'></div>
          <img className='happy'src={happy} onClick={NoStuttering}/> 
       
        <div className='circleBack2'></div>
        <img className='meh'src={moderate} onClick={Moderate}/>

        <div className='circleBack3'></div>
        <img className='sad'src={extreme} onClick={Extreme}/>

        </div>
        <p className='support1'>Guided Speech Support</p>
        <div className='gbox1'>  
        <img className='phone'src={phone}/>
        <h6 className='subtext'>Coaching With Harris</h6>
        <h6 className='detail'>Meetings</h6>
        </div>

        <div className='gbox2'>  
        <img className='course'src={course}/>
        <h6 className='subtext'>Stammer and Social Settings</h6>
        <h6 className='detail'>Courses</h6>
        <img className='arrow'src={arrow}/>
        </div>

        <div>
          <div className='dailyTasks'>
            <div className='rectangle'></div>
            <h6 className='activitytext'>Daily Activities</h6>
            <img className='icon'src={fire}></img>
            <a href='dailyActivities'><img className='arrow2'src={arrow}/></a>
          </div>

          <div className='speechTechniques'>
          <div className='rectangle2'></div>
          <h6 className='activitytext'>Speech Techniques</h6>
          <img className='icon'src={volume}></img>
          <a href='speechTechniques'><img className='arrow2'src={arrow}/></a> 
          </div>

          <div className='quickPractice'>
          <div className='rectangle2'></div>
          <h6 className='activitytext'>Quick Practice</h6>
          <img className='icon'src={mic}></img>
          <a href='quickPractice'><img className='arrow2'src={arrow}/></a>
          <h6 className='progress'>View Progress</h6>
          </div>
        </div>

    </div>
  );
}

export default Quote;
