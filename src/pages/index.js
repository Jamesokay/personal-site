import * as React from 'react'
import Layout from '../components/Layout'
import { container, textContainer, quote } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
          <span className={quote}>
            I am a full-stack developer passionate about creating web applications 
            that are both functional and elegant
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
