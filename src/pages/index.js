import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { container, textContainer, imageContainer, quote, citation } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
        <span className={quote}>"Art is the elimination of the unnecessary."</span>
        <span className={citation}>— Pablo Picasso</span>
        </div>
        <div className={imageContainer}>
        <StaticImage alt="Me" src="../images/picasso.jpeg" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
