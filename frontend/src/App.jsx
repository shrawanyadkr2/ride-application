import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
// import userLogin from './pages/UserLogin';
import UserLogin from './pages/userLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/Captainlogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/usersignup' element={<UserSignup />} />
        <Route path='/captainlogin' element={<CaptainLogin />} />
        <Route path='/captainsignup' element={<CaptainSignup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
