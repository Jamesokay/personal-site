import React from 'react'
import Layout from '../components/Layout'
import FadeInSection from '../components/FadeInSection'
import { container, topPanel, titleContainer, title, titleSub, videoContainer, quote, text, features, featuresHeading, featureBox, featureTitle, featureBody, featureImage, featureTextBox, featureText } from '../styles/portfolio.module.css'

export default function portfolio() {
    return (
        <Layout>       
          <div className={titleContainer}>
            <h1 className={title}>Spotify Clone</h1>
            <span className={titleSub}>Built using React</span>
          </div>      
          <div className={container}>
            <div className={topPanel}>
              <div className={videoContainer} />
              <div className={text}>
                <p className={quote}>Look at this eye-grabbing and relevant bit of text</p>
                <br />
                <p>
                   Here is some text describing the development process, 
                   not in too much detail though as I'm going to save the more in-depth account (potentially) for lower down
                   on the page. For the time being, all I really need is a bit of body text to, I suppose, 'complete' the composition.
                </p>
              </div>
            </div>      
            <div className={features}>
              <FadeInSection>
                <h1 className={featuresHeading}>Features</h1> 
              </FadeInSection>
              <FadeInSection>
                <div className={featureBox}>
                  <h2 className={featureTitle}>Recently Played</h2>
                  <div className={featureBody}>  
                    <div className={featureImage} />
                    <div className={featureTextBox}>
                      <span className={featureText}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                    labore et dolore magnam aliquam quaerat voluptatem.
                      </span>     
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className={featureBox}>
                  <h2 className={featureTitle}>Dynamic Colour Grab</h2>
                  <div className={featureBody}>  
                    <div className={featureImage} />
                    <div className={featureTextBox}>
                      <span className={featureText}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                    labore et dolore magnam aliquam quaerat voluptatem.
                      </span>     
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className={featureBox}>
                  <h2 className={featureTitle}>Web Player</h2>
                  <div className={featureBody}>  
                    <div className={featureImage} />
                    <div className={featureTextBox}>
                      <span className={featureText}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                    labore et dolore magnam aliquam quaerat voluptatem.
                      </span>     
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </Layout>
    )
}
