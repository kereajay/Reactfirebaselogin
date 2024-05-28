import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div>
            <nav>
                <ul type="none" className='flex gap-20 text-xl font-semibold py-4 bg-sky-400'>
                    <li><Link to="/Signup">SignUP</Link></li>
                    <li><Link to="/Signin">SignIn</Link></li>
                </ul>
            </nav>
        </div>
      
    </div>
  )
}

export default Header
