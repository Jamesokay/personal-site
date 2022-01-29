import * as React from 'react'
import { Link } from 'gatsby'
import { container, siteHeaderText, navBar, navLinks, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <nav className={navBar}>
        <h1 className={siteHeaderText}>James O'Keeffe</h1>
        <ul className={navLinks}>
          <li>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkText}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout
