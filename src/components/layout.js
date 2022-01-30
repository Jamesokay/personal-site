import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

