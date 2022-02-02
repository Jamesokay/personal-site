import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
          <div className='navLinks'>
            <Link to="/" activeClassName="active">Home</Link>
            <Link to="/portfolio" activeClassName="active">Portfolio</Link>
            <Link to="/contact" activeClassName="active">Contact</Link>
          </div>          
        </nav>
    )
}
