import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { container, textContainer, name, image, quote, italic } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <h1 className={name}>James O'Keeffe</h1>
        <div className={textContainer}>
          <StaticImage className={image} src='../images/myface.jpg' alt='Photo of me' />
          <span className={quote}>
            Full-stack developer passionate about creating web applications 
            that are both <span className={italic}>functional</span> & <span className={italic}>elegant</span>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
