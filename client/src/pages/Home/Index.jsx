import React from 'react'
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
import Header from './Header'
import Home from './Home'
import User from './User'
import LandInspectorLogin from './LandInspectorLogin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Index() {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
        <Header />
        <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/welcome' element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/landinspectorlogin" element={<LandInspectorLogin />} />
        </Routes>
        </Router>
    </div>
  )
}