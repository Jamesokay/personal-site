import React from 'react'
import Layout from '../components/Layout'
import { container, titleContainer, title, titleSub, video, quote, text } from '../styles/portfolio.module.css'

export default function portfolio() {
    return (
        <Layout>
          <div className={titleContainer}>
            <h1 className={title}>Spotify Clone</h1>
            <span className={titleSub}>Built using React</span>
          </div>
          <div className={container}>
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
          <p className={quote}>Look at this eye-grabbing and relevant bit of text</p>
          <br />
          <p>Here is some text describing the development process, 
            not in too much detail though as I'm going to save the more in-depth account (potentially) for lower down
            on the page. For the time being, all I really need is a bit of body text to, I suppose, 'complete' the composition.
          </p>
          </div>
          </div>
        </Layout>
    )
}
