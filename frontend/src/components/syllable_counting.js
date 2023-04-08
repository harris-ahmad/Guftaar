import { useState } from "react";
import "./syllable.css"
import NavbarClient from "./client_navbar";
import cross from "../images/cross.svg";
import ProgressBar from "@ramonak/react-progress-bar";


const SyllableCounting = () => {
    const [quesInd, setQuesInd] = useState(0);
    const [markedAns, setMarkedAns] = useState(new Array(3));
    const isQuesEnd = quesInd === 2;

    // const quesList = [question:]

    return (
        <div className="activity-bg"> 
        <NavbarClient/>
        <div className="topbar">
        <div className="status"> {quesInd+1} of 3</div>
        <h3 className="titleL">Syllable Counting Activity</h3>
        <a href="./">
          <img className="gobackcross" src={cross} />
        </a>
        </div>
        <h2 className = "progl"> Progress</h2>
        <h1 className='titleQ'> How many syllables are in the following word?</h1>
        <ProgressBar className="prog"
            completed={quesInd+1}
            bgColor="linear-gradient(90deg, #726CF8 0%, #E975A8 100%)"
            height="50px"
            width=""
            isLabelVisible={false}
            baseBgColor="rgba(114, 108, 248, 0.2)"
            labelColor=""
            animateOnRender
            maxCompleted={3}
    />
    <h1> {}</h1>
        
            
        </div>
    );
}

export default SyllableCounting;