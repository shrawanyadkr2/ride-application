import { useState } from "react"
import React  from 'react'
import { Link } from "react-router-dom";


const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password
    })

    console.log(userData);
    setEmail('');
    setPassword('');

  }
  return (
    <div>

      <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
          <img className='w-16 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }} >
            <h3 className='text-lg font-medium mb-2'>What is your Email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='example@gmail.com' />


            <h3 className='text-lg font-medium mb-2'>Enter password</h3>


            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
              type="password"
              placeholder='Example#76637' />


            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-3  w-full text-lg placeholder:text-base'>login</button>
            <p className='text-center'>Join Fleet? <Link to='/CaptainSignup' className='text-blue-600'>Register as Captain</Link></p>
          </form>
        </div>

        <div>
          <Link to='/UserLogin' className='bg-[#d5622d] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-3  w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
      </div>
    </div>
  )
}

export default Captainlogin