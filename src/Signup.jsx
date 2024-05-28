import React from 'react'
import {database } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Signup() {
    const navigate=useNavigate();
    const handlesignup=(e)=>{
        e.preventDefault()
        if(!e.target.email.value || !e.target.password.value){
            
            toast.error("please enter email and password",{position:"top-center",autoClose:2000})
        return}
        const email=e.target.email.value
        const password=e.target.password.value
        createUserWithEmailAndPassword(database,email,password).then((data)=>{
            console.log(data)
            navigate("/signin")
            toast.success("Signup successfully",{position:"top-center",autoClose:2000})
        }).catch((err)=>{
            toast.error("mail id already exists please signin",{
                position:"top-center",
                autoClose:2000
            })
            // alert(err.code)
            navigate("/Signin")
        })
    }
  return (
    <div className='py-10 text-center mt-12'>
        <h1 className='text-3xl font-bold text-sky-400'>Signup</h1>
        <br />
    <form  onSubmit={(e)=>handlesignup(e)}>
    <input type="text" placeholder='Enter Email' name='email' className='py-2 border-2 border-black w-[20%]' />
          <br />
          <br />
          <input type="password" name='password' placeholder='Enter Password' className='py-2 border-2 border-black w-[20%]' />
          <br />
          <br />
          <button className='py-2 border-2  w-[20%] bg-blue-400 text-lg font-semibold'>signup</button>
          <br />
          <p>if you have an account please go to <span onClick={()=>navigate('/Signin')} className='text-blue-400  cursor-pointer'>signin</span></p>

    </form>
    </div>
  )
}

export default Signup
