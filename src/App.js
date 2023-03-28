import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { ClientLogin} from './components/ClientLogin/ClientLogin'; 
import { CoachLogin } from './components/CoachLogin/CoachLogin'
import { AdminLogin } from './components/AdminLogin/AdminLogin'

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login_c" element={ <ClientLogin />} />
          <Route path="/login_i" element={ <CoachLogin />} />
          <Route path="/login_a" element={ <AdminLogin />} />
        </Routes>
      </div>
  );
}

export default App;
