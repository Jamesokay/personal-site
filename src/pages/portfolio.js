import React from 'react'
import Layout from '../components/Layout'
import { container, title, titleSub, video, quote, text } from '../styles/portfolio.module.css'

export default function portfolio() {
    return (
        <Layout>
          <div className={container}>
          <span className={title}>Spotify Clone</span>
          <span className={titleSub}>Built using React</span>
           <iframe
            className={video}
            src="https://www.youtube.com/embed/v1YyBj7rhF0"
            title="Spotify Clone"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
           />
          
          
          <div className={text}>
          <p className={quote}>"Here is an eye-grabbing and relevant quote"</p>
          <br />
          <p>Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process 
          Here is some text describing the development process Here is some text describing the development process</p>
          </div>
          </div>
        </Layout>
    )
}
