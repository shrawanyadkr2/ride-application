import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password
    })

    console.log(userData);
    setEmail('');
    setPassword('');

  }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
          <p className='text-center'>new here? <Link to='/UserSignup' className='text-blue-600'>Create Account</Link></p>
        </form>
      </div>

      <div>
        <Link to='/captainlogin' className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-3  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin