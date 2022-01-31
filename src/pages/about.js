import * as React from 'react'
import Layout from '../components/Layout'
import { container, titleContainer, title, bodyContainer, bodyText } from '../styles/about.module.css'

const AboutPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={titleContainer}>
          <span className={title}>James O'Keeffe</span>
        </div>

        <div className={bodyContainer}>
          <span className={bodyText}>
          I am a full-stack developer passionate about creating web applications 
          that are both functional and elegant. I believe that software development 
          is an art, one in which ambitious ideas are realised through the medium of 
          well-written code. My goal is to work with other like-minded developers, 
          and to continue honing my abilities within a collaborative environment.
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage