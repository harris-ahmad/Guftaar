import './coach_dashboard_carousel.css'
import proficon from "../images/proficon.png"
import CoachCard from './coachcard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CoachCarousel (){
    const [clientsN, setClients] = useState([]);

    useEffect(() => {
            const fetchInfo = async function () {
              const clients = await axios.post(
                "http://localhost:4000/coach/getClients", {email: localStorage.getItem("email")}
              );

              const set = (Object.values(clients.data))
              const newArr = Array.from(set);
              setClients(newArr)
            };
            fetchInfo();
          }, []);
    return (
    <div class="container">
    {Object.keys(clientsN).length > 0 ? Object.keys(clientsN).map((key, index) => (
        <CoachCard client={clientsN[key].clientName} />
    )) : <div></div>}
    </div>
        
    );
}
export default CoachCarousel;
