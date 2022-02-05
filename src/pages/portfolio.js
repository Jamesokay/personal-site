import React from 'react'
import Layout from '../components/Layout'
import { container, topPanel, titleContainer, title, titleSub, videoContainer, video, quote, text, features, featureBox, featureTitle, featureImage, featureTextBox, featureText } from '../styles/portfolio.module.css'

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
            <h1 className={titleSub}>Features</h1>
            
            <div className={featureBox}>
              <div className={featureImage} />
              <div className={featureTextBox}>
              <p className={featureTitle}>Feature Title</p>
              <span className={featureText}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
              labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
              quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
              nulla pariatur?
              </span>
              
              </div>
            </div>

            <div className={featureBox}>
              <div className={featureImage} />
              <div className={featureTextBox}>
              <p className={featureTitle}>Feature Title</p>
              <span className={featureText}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
              labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
              quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
              nulla pariatur?
              </span>
              
              </div>
            </div>

            <div className={featureBox}>
              <div className={featureImage} />
              <div className={featureTextBox}>
              <p className={featureTitle}>Feature Title</p>
              <span className={featureText}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
              labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
              quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
              nulla pariatur?
              </span>
              
              </div>
            </div>

          </div>

          </div>
        </Layout>
    )
}
