import React, { useState } from 'react'
import { database } from './firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [joke,setJoke]=useState("");
    const navigate = useNavigate();
    const handlesignout = () => {
        signOut(database).then((val) => {
            navigate("/signin");

        })

    }


    async function getdata() {
        try {
            // jokecontaiener.innerText = "Updating..."
            // tell.diaabled = true;
            // tell.innerText = "Loading..."


            let res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=", {
                method: 'GET',
                headers: { 'X-Api-Key': 'W6JUsiZ+oO92iv6NMDplgg==J4DLSl4RBvlZnGvv' },
                contentType: 'application/json',
            });
            let data = await res.json();
            console.log(data);
            setJoke(data[0].joke);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        
            <div className=' flex justify-end'>
                <h1 className='text-3xl font-bold text-sky-400'>Welcome to the joke page try some jokes...</h1>
                <button onClick={handlesignout} className='py-2 border-2  w-[20%] bg-blue-400 text-lg font-semibold '>Signout</button>

            </div>

            <div className='shadow-2xl py-24 w-[90%] m-auto bg-sky-300 mt-24 text-center'>

                <h1 className='text-2xl font-semibold'>{joke}</h1>
                <br />
                <button onClick={getdata} className='py-2 border-2  w-[20%] bg-blue-700 text-lg font-semibold'>tell me a joke</button>

                
            </div>
        </>
    )
}

export default Home
