import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  useEffect(() => {
    setActive(location.pathname)
  }, [location.pathname])
  

  return (
    <div className='navDiv'>
      <nav>
        <img src="https://c4.wallpaperflare.com/wallpaper/696/177/76/pokemon-pokeball-red-wallpaper-preview.jpg" alt="Pokemon"/>
        <ul>
            <li><Link to="/" className={active==="/"?"active":""}>Home</Link></li>
            <li><Link to="/adduser" className={active==="/adduser"?"active":""}>Add User</Link></li>
            <li><Link to="/listusers" className={active==="/listusers"?"active":""}>List All Users</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
