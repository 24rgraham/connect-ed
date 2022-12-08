import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navContents'>
        <ul>
          <li><button className='navBtn'><Link to="/">Home</Link></button></li>
          {/* The below link will eventually moved to associate with an individual project page captured by id, this is for testing */}
          <li><button className='navBtn'><Link to="/project">Individual Project</Link></button></li>
          <li><button className='navBtn'><Link to="/mypage">Projects</Link></button></li>
        </ul>
      </div>
    </div>
  )
}
