import './daily_activities.css'
import cross from "../images/cross.svg";
import Dashboard from './client_dashboard';
import breathing from "../images/breathing.png";
import syllable from "../images/syllable.png";
import link from "../images/link.svg";

function daily_activities(){
return(
    <div className='dailyBack'>
         <h3 className='titlequestion'>Daily Activities</h3>  
         <a href='Dashboard'><img className="gobackcross"src={cross}/></a>
         <h1 className='whichquestion'>Which activity do you want to play?</h1>

         <div className='syllableBack'>
         <img className='syllablepic' src={syllable}/>
         <h3 className= 'categorysc'>Syllable Counting</h3>
         </div>

         <div className='breathingBack'>
         <img className='breathingpic' src={breathing}/>
         <h3 className= 'categorybe'>Breathing Exercise</h3>
         </div>

         <div className='linkBack'>
         <img className='linkpic' src={link}/>
         <h3 className= 'categoryll'>Link Later Voice Progression</h3>
         </div>

    </div>
);
}

export default daily_activities;