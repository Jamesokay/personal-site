import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <div className='footer'>
        <span className='footerContent'>Here is some trial text for my footer</span>
      </div>
    
    </div>
  )
}