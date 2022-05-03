import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
          <div className='navLinks'>
            <Link to="/" activeClassName="active">Home</Link>
          </div>          
        </nav>
    )
}
