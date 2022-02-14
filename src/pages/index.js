import * as React from 'react'
import Layout from '../components/Layout'
import { container, textContainer, quote, italic } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
          <span className={quote}>
            I'm James, a full-stack developer creating web applications 
            that are both <span className={italic}>functional</span> & <span className={italic}>elegant</span>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
