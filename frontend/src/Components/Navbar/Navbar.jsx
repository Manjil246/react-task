import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navDiv'>
      <nav>
        <img src="https://pbs.twimg.com/media/EEQwacJU8AIbJPG.jpg" alt="Pokemon"/>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adduser">Add User</Link></li>
            <li><Link to="/listusers">List All Users</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
