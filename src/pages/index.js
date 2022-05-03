import * as React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { container, navBar, navOption, textContainer, photoContainer, quote } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={navBar}>
          <span>James O'Keeffe</span>
          <div>
            <span className={navOption}>Nav1</span>
            <span className={navOption}>Nav2</span>
          </div>
        </div>
        <div className={textContainer}>
          <span className={quote}>
            Full-stack developer creating web applications 
            that are both functional and elegant
          </span>
        </div>
        <div className={photoContainer} />
        <Portfolio />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
