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


function Quote() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
            setQuote(quote.content)
        }
      )
      .catch(err => console.log(err));
  }, []);

  function NoStuttering(){
    // alert("called")
}
  function Moderate(){
}
  function Extreme(){
}
  function Course(){
    navigate("/courses")
}

  return (
    <div className="client-bg">
      <div>
        <h6 className='welcome'>Emaan's Dashboard</h6>
      </div>
        <div className="quoteback">
        <img className="qu"src={qu}/>
        <h6 className='top'>Strength Statements</h6>
        <p className='text'>{quote}</p>  
        </div>
        <p className='logtext'> How was your stuttering today?</p>
        <div className='log'>
          <div className='circleBack'></div>
          <img className='happy'src={happy} onClick={NoStuttering}/> 
       
        <div className='circleBack2'></div>
        <img className='meh'src={moderate} onClick={Moderate}/>

        <div className='circleBack3'></div>
        <img className='sad'src={extreme} onClick={Extreme}/>

        </div>
        <p className='support'>Guided Speech Support</p>
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
          <img className='arrow2'src={arrow}/>
          </div>

          <div className='quickPractice'>
          <div className='rectangle2'></div>
          <h6 className='activitytext'>Quick Practice</h6>
          <img className='icon'src={mic}></img>
          <img className='arrow2'src={arrow}/>
          </div>
          <a className='progress'>View Progress</a>
        </div>
      
     
    </div>
  );
}

export default Quote;
