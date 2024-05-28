import React, { useState } from 'react'
import { database } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Signin() {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate();
  const handlesubmit = (e, type) => {
    e.preventDefault()
    if(!e.target.email.value || !e.target.password.value){
            
        toast.error("please enter email and password",{position:"top-center",autoClose:2000})
    return}
    const email = e.target.email.value

    const password = e.target.password.value
  
      signInWithEmailAndPassword(database, email, password).then((data) => {
        console.log(data);
        toast.success("Signin successfull",{position:"top-center",autoClose:2000})
        navigate("/Home");
      })
        .catch((err) => {
          toast.error(`Signin failed ${err}`,{position:"top-center",autoClose:2000})
          
        })

  }
  return (
    <div className='py-10 mt-12'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-sky-400'>Signin</h1>
        <br />
        <form onSubmit={(e) => handlesubmit(e)}>
          <input type="text" placeholder='Enter Email' name='email' className='py-2 border-2 border-black w-[20%]' />
          <br />
          <br />
          <input type="password" name='password' placeholder='Enter Password' className='py-2 border-2 border-black w-[20%]' />
          <br />
          <br />
          <button className='py-2 border-2  w-[20%] bg-blue-400 text-lg font-semibold'>Signin</button>
          <p>Don't have an account? <span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/Signup')}>Signup</span></p>
        </form>
      </div>

    </div>
  )
}

export default Signin
