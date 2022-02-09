import * as React from 'react'
import Layout from '../components/Layout'
import { container, textContainer, quote, italic } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
          <span className={quote}>
            I am a full-stack developer passionate about creating web applications 
            that are both <span className={italic}>functional</span> and <span className={italic}>elegant</span>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
