import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className='pageContainer'>
      <div className='page'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}