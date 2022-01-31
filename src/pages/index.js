import * as React from 'react'
import Layout from '../components/Layout'
import { container, textContainer, quote, citation, wordPop } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
          <span className={quote}>"Art is the 
          <span className={wordPop}> elimination </span> 
          of the unnecessary."</span>
          <span className={citation}>— Pablo Picasso</span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
