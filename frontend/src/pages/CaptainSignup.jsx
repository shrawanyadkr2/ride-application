import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [userData,setUserData] = useState({});
  
  
    const submitHandler=(e)=>{
      e.preventDefault();
      setUserData({
        fullName:{
          firstName:firstname,
          lastName:lastname
        },
        email:email,
        password:password
      })
      
      setEmail('')
      setFirstname('')
      setLastname('')
      setPassword('')
    }
  return (
    <div>
      <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
          <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />

          <form onSubmit={(e) => {
            submitHandler(e)
          }} >


            <h3 className='text-base font-medium mb-2'>What is your Name</h3>
            <div className='flex gap-4 mb-6'>
              <input
                required
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-3 border  text-base placeholder:sm'
                type="text"
                value={firstname}
                onChange={(e)=>{
                  setFirstname(e.target.value)
                }}
                placeholder='firstname' />
              <input
                required
                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-3 border  text-base placeholder:sm'
                type="text"
                value={lastname}
                onChange={(e)=>{
                  setLastname(e.target.value)
                }}
                placeholder='lastname' />

            </div>

            <h3 className='text-base font-medium mb-2'>What is your Email</h3>
            <input
              required
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)

              }}
              
              className='bg-[#eeeeee] mb-6 rounded px-4 py-3 border w-full text-base placeholder:sm'
              type="email"
              placeholder='example@gmail.com' />


            <h3 className='text-base font-medium mb-2'>Enter password</h3>


            <input
              required

              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}

              className='bg-[#eeeeee] mb-6 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
              type="password"
              placeholder='Example#76637' />


            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-3  w-full text-base placeholder:sm'>login</button>
            <p className='text-center'>Already have an account? <Link to='/CaptainLogin' className='text-blue-600'>Login here</Link></p>
          </form>
        </div>

        <div>
          <p className='text-[10px] leading-tight '>impedit. Quos exercitationem temporibus, odit minima eveniet magnam sit inventore quis iste deleniti accusamus ipsam accusantium aut doloribus sunt?</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup