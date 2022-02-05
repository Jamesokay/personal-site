import React from 'react'
import Layout from '../components/Layout'
import { container, topPanel, titleContainer, title, titleSub, videoContainer, video, quote, text, features, featureBox, featureImage, featureTextBox, featureText } from '../styles/portfolio.module.css'

export default function portfolio() {
    return (
        <Layout>
         
          <div className={titleContainer}>
            <h1 className={title}>Spotify Clone</h1>
            <span className={titleSub}>Built using React</span>
          </div>
          <div className={container}>


        <div className={topPanel}>
          <div className={videoContainer}>
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
          </div>
          
          
          
          <div className={text}>
          <p className={quote}>Look at this eye-grabbing and relevant bit of text</p>
          <br />
          <p>Here is some text describing the development process, 
            not in too much detail though as I'm going to save the more in-depth account (potentially) for lower down
            on the page. For the time being, all I really need is a bit of body text to, I suppose, 'complete' the composition.
          </p>
          </div>
        </div>
          
          <div className={features}>
            <div className={featureBox}>
              <div className={featureImage} />
              <div className={featureTextBox}> 
              <span className={featureText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
              </span>
              
              </div>
            </div>

            <div className={featureBox}>
              <div className={featureImage} />
              <div className={featureTextBox}> 
              <span className={featureText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
              </span>
              
              </div>
            </div>

            <div className={featureBox}>
              <div className={featureImage} />
              <div className={featureTextBox}> 
              <span className={featureText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
              </span>
              
              </div>
            </div>

          </div>

          </div>
        </Layout>
    )
}
