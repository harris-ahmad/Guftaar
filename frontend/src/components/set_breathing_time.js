import './set_breathing_time.css'
import cross from "../images/cross.svg";
import DailyActivities from "./daily_activities";
import timer from "../images/setTime.svg";
import React, { useState } from 'react';


function SetBreathingTime() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className='breathingBackGround'>
           <h3 className='titlequestion'>Breathing Exercise</h3>  
           <a href='./'><img className="gobackcross"src={cross}/></a>
           <h1 className='whichquestion'>Select the time duration for this activity</h1>
           <div className='timerBack'>
           <img className='clockpic' src={timer}/>

        <select className="timeDropdown" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select Time Duration</option>
            <option value="1">1 minute</option>
            <option value="2">2 minutes</option>
            <option value="3">3 minutes</option>
        </select>
           </div>
        </div>
    );
}

export default SetBreathingTime