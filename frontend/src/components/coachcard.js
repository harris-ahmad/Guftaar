import './coach_dashboard_carousel.css'
import proficon from "../images/proficon.png"

function CoachCard (props){
    return (
        <div className='clientbox'>
        <div className='circularbox'>
        <img src={proficon} alt="ProfIcon" className='proficon' />
        </div>
        <h3 className='clienttext'> {props.client}</h3>
    </div>
    );
}
export default CoachCard;
