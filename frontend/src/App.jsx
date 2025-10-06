import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Start from "./pages/Start";
// import userLogin from './pages/UserLogin';
import UserLogin from './pages/userLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/Captainlogin';
import Start from './pages/Start';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/usersignup' element={<UserSignup />} />
        <Route path='/captainlogin' element={<CaptainLogin />} />
        <Route path='/captainsignup' element={<CaptainSignup />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
