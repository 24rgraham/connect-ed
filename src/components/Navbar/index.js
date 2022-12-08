import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navContents'>
        <ul>
        <li><button className='navBtn'><Link to="/">Home</Link></button></li>
        </ul>
      </div>
    </div>
  )
}
