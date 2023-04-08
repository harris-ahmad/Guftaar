import './quick_practice.css'
import NavbarClient from './client_navbar';
import cross from "../images/cross.svg";
import mic from "../images/microphone.svg";
import { useNavigate } from 'react-router-dom';

function Quick_Practice(){
    const navigate = useNavigate();
    function GoBack(){
        navigate("/client/dashboard")
    }

    return(
      <div className='quickBack'>
       <NavbarClient />
       <h3 className='titlequestion'>Quick Practice</h3>  
        <img className="gobackcross"src={cross} onClick={GoBack}/>
        <h3 className='please'>Click on the microphone to record and submit</h3>
        <div className='paragraphBack'>
            <h3 className='paragraphtext'>hello hey hi this is some random text that you can try and say goodluck i am just trying to make it longer to test if it gets kharab or not i am failing everything lol issok dr zafar hates me</h3>
        </div>
        <div className='iconback'>
        <img src={mic} className='recordingmic'></img>
        </div>
       
      </div>
    );
}

export default Quick_Practice;