import './App.css';
import "./fonts/LeagueSpartan-VariableFont_wght.ttf"
import LandingPage from './components/landing_page.js';
import { Routes, Route, Link} from 'react-router-dom';
import CoachLogin from './components/coach-login';
import Login from './components/login';
import Register from './components/register';
import AdminLogin from './components/admin_login';
import Dashboard from './components/client_dashboard';
import ChangePass from './components/change_password';
import AdminDashboard from './components/admin_dashboard';


import {useState} from 'react'

function App() {
  return (
    <div>
    <Routes>
      <Route path = "/">
        <Route index element = {<LandingPage />}/>
        <Route path = "coach">
          <Route path = "login" element={<CoachLogin/>}/>
          </Route> 
        <Route path ="client">
          <Route path = "login" element= {<Login/>}/>
          <Route path = "register" element= {<Register/>}/>
          <Route path = "dashboard" element= {<Dashboard/>}/>
          <Route path = "changePassword" element= {<ChangePass/>}/>
        </Route>
        <Route path = "admin">
          <Route path = "login" element= {<AdminLogin/>}/>
          <Route path = "dashboard" element= {<AdminDashboard/>}/>
          </Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;