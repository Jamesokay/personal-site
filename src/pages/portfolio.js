import React from 'react'
import Layout from '../components/Layout'
import { container, topPanel, titleContainer, title, titleSub, videoContainer, quote, text, features, featureBox, featureImage, featureTextBox, featureText } from '../styles/portfolio.module.css'

export default function Portfolio() {
    
  React.useEffect(() => {
    const scrollElements = document.querySelectorAll(".js-scroll");
    var throttleTimer;

    const throttle = (callback, time) => {
      if (throttleTimer) return;

      throttleTimer = true;
      setTimeout(() => {
        callback();
        throttleTimer = false;
      }, time);
    }

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.05)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener('scroll', () => {
      throttle(handleScrollAnimation, 250);
    })

    return function cleanUp() {
      window.removeEventListener('scroll', () => {
        throttle(handleScrollAnimation, 250);
      })
    }
  }, [])


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
              
                <h1 className='js-scroll featuresHeading'>Features</h1> 
                <div className='js-scroll line' />
                <div className={featureBox}>
                  <h2 className='js-scroll featureTitle'>Recently Played</h2>
                  <div className='js-scroll featureBody'>  
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
                <div className='js-scroll line' />
                <div className={featureBox}>
                  <h2 className='js-scroll featureTitle'>Dynamic Colour Grab</h2>
                  <div className='js-scroll featureBody'>  
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
                <div className='js-scroll line' />
                <div className={featureBox}>
                  <h2 className='js-scroll featureTitle'>Web Player</h2>
                  <div className='js-scroll featureBody'>  
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
              
            </div>
          </div>
        </Layout>
    )
}
