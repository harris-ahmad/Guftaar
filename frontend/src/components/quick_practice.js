import './quick_practice.css'
import NavbarClient from './client_navbar';
import cross from "../images/cross.svg";
import mic from "../images/microphone.svg";
import { useNavigate } from 'react-router-dom';
import { ReactMicRecord } from 'react-mic-record';
import { useState, useEffect, useRef } from "react";

function Quick_Practice(){
    const navigate = useNavigate();
    function GoBack(){
        navigate("/client/dashboard")
    }

    function SpeechText({ text, speed }) {
        const [highlightedLength, setHighlightedLength] = useState(0);
      
        useEffect(() => {
          let timer;
          if (highlightedLength < text.length+1) {
            timer = setTimeout(() => {
              setHighlightedLength((prevLength) => prevLength + 1);
            }, speed);
          }else {
            setHighlightedLength(0); 
          }
          return () => clearTimeout(timer);
        }, [highlightedLength, speed, text.length]);
      
        return (
          <div className="shaded-text">
            <span className="highlighted">{text.slice(0, highlightedLength)}</span>
            {text.slice(highlightedLength)}
          </div>
        );
      }
    return(
      <div className='quickBack'>
       <NavbarClient />
       <h3 className='titlequestion2'>Quick Practice</h3>  
        <img className="gobackcross2"src={cross} onClick={GoBack}/>
        <h3 className='please2'>Follow the highlighted text practice your speech</h3>
        <div className='paragraphBack'>
        <SpeechText text="Zander was proud of his new costume. He was excited to wear it for the play on Friday night. The bones looked like a real skeleton, the eyes were beady and red, and the claws were long and sharp.He thought it would be fun to scare his Mom, so he walked quietly down the hall toward the kitchen. Suddenly, he screamed Ahhhhhhh! He saw his reflection in the mirror and forgot he was wearing his costume."speed={100} />
        </div>
          </div>
    );
}

export default Quick_Practice;