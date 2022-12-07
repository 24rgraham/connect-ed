import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
        <li><Link to="/">Home</Link></li>
        </ul>
    </div>
  )
}
