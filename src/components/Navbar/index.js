import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navContents'>
        <ul>
          <li><button className='navBtn'><Link to="/">Home</Link></button></li>  
          <li><button className='navBtn'><Link to="/login">Login</Link></button></li>  
          <li><button className='navBtn'><Link to="/projects">Projects</Link></button></li>
          <li><button className='navBtn'><Link to="/create">New Project</Link></button></li>
          <li><button className='navBtn'><Link to="/search">Search</Link></button></li>

        </ul>
      </div>
    </div>
  )
}
