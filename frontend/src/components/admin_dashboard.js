import React from 'react';
import si from "../images/staricon.png"
import ei from "../images/editicon.png"
import "./admin_dashboard.css"
import addEmployee from './add_employee';
import NavbarAdmin from './navbar_admin';

function Dashboard() {
  return (
    <div className="dashboard-container">
       <NavbarAdmin />
      <div className="coachbox">
        <h2>30</h2>
        <p>coaches</p>
      </div>
      <div className="adminbox">
        <h2>2</h2>
        <p>admins</p>
      </div>
      <div className="userbox">
        <h2>150</h2>
        <p>users</p>
      </div>
      <div className="empbox">
        <h2>add employee</h2>
        <a href='addEmployee'><button class="circlebutton">
          <span class="plusicon">+</span>
        </button></a>
      </div>
      <div className="heading">
        <h1>Administrator Centre</h1>
      </div>
      <div className="reviewbox">
        <h1>Top Coaches</h1>
        <ul class="names">
          <li>Emaan Atique</li>
          <li>Romessa Shah</li>
          <li>Arfa Imran</li>
          <li>Hamza Ali </li>
        </ul>
        <div className="row1">
        <h3 className='icon1text'>5</h3>
        <img src={si} alt="StarIcon" className='staricon1'></img>
        <button type="button" className='editbutton'>
        <img src={ei} alt="EditIcon" className='editicon1' />
        </button>
        </div>
        <div className='row2'>
        <h3 className='icon2text'>4</h3>
        <img src={si} alt="StarIcon" className='staricon2'></img>
        <button type="button" className='editbutton'>
        <img src={ei} alt="EditIcon" className='editicon2' />
        </button>
        </div>
        <div className='row3'>
        <h3 className='icon3text'>4</h3>
        <img src={si} alt="StarIcon" className='staricon3'></img>
        <button type="button" className='editbutton'>
        <img src={ei} alt="EditIcon" className='editicon3' />
        </button>        
        <div className='row4'>
        <h3 className='icon4text'>3.5</h3>
        <img src={si} alt="StarIcon" className='staricon4' />
        <button type="button" className='editbutton'>
        <img src={ei} alt="EditIcon" className='editicon4' />
        </button>

        </div>


        </div>
        <p className='ratingtext'> rating</p>
        <p className='edittext'> edit</p>
        <button class="viewbutton">view all</button>
        <button class="readbutton">read reviews</button>
      </div>
    </div>
  );
}

export default Dashboard;
