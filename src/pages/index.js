import * as React from 'react'
import Layout from '../components/Layout'
import { container, textContainer, quote, citation, wordPop } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
          <span className={quote}>ART IS THE <span className={wordPop}> ELIMINATION </span> OF THE UNNECESSARY</span>
          <br/>
          <span className={citation}>— PABLO PICASSO</span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
