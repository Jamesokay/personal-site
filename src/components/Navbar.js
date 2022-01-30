import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
          <span className='navTitle'>James O'Keeffe</span>
          <div className='navLinks'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>          
        </nav>
    )
}
