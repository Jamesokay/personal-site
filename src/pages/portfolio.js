import React from 'react'
import Layout from '../components/Layout'
import reactorSS1 from '../images/reactorSS1.png'
import spotifySS1 from '../images/spotifySS1.png'
import { container, projects, projectContainer, reactorContainer, spotifyContainer, projectTitle, spotifyText, projectImage, projectImageContainer, projectDescriptionContainer, projectDescription } from '../styles/portfolio.module.css'

export default function Portfolio() {
    
  // React.useEffect(() => {
  //   const scrollElements = document.querySelectorAll(".js-scroll");
  //   var throttleTimer;

  //   const throttle = (callback, time) => {
  //     if (throttleTimer) return;

  //     throttleTimer = true;
  //     setTimeout(() => {
  //       callback();
  //       throttleTimer = false;
  //     }, time);
  //   }

  //   const elementInView = (el, dividend = 1) => {
  //     const elementTop = el.getBoundingClientRect().top;

  //     return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
  //   };

  //   const elementOutofView = (el) => {
  //     const elementTop = el.getBoundingClientRect().top;

  //     return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
  //   };

  //   const displayScrollElement = (element) => {
  //     element.classList.add("scrolled");
  //   };

  //   const hideScrollElement = (element) => {
  //     element.classList.remove("scrolled");
  //   };

  //   const handleScrollAnimation = () => {
  //     scrollElements.forEach((el) => {
  //       if (elementInView(el, 1.05)) {
  //         displayScrollElement(el);
  //       } else if (elementOutofView(el)) {
  //         hideScrollElement(el)
  //       }
  //     })
  //   }

  //   window.addEventListener('scroll', () => {
  //     throttle(handleScrollAnimation, 250);
  //   })

  //   return function cleanUp() {
  //     window.removeEventListener('scroll', () => {
  //       throttle(handleScrollAnimation, 250);
  //     })
  //   }
  // }, [])


    return (
        <Layout>           
          <div className={container}>
            <div className={projects}>
                <div className={`${projectContainer} ${reactorContainer}`}>
                      <div className={projectImageContainer}>
                        <img className={projectImage} src={reactorSS1} alt='the reactor feed' />
                      </div>
                    <div className={projectDescriptionContainer}>
                      <span className={projectTitle}>Reactor</span>
                      <span className={projectDescription}>
                        A full-stack photo sharing social media app built using MongoDB, Express, React and NodeJS. Routing handled with
                        React Router v6. Requests to API handled with Axios. Images are hosted on Cloudinary, front-end and back-end are both deployed on Heroku.  
                      </span>     
                    </div>
                </div>
                <div className={`${projectContainer} ${spotifyContainer}`}>
                      <div className={projectImageContainer}>
                        <img className={projectImage} src={spotifySS1} alt='the spotify homepage' />
                      </div>
                    <div className={projectDescriptionContainer}>
                      <span className={`${projectTitle} ${spotifyText}`}>Spotify Clone</span>
                      <span className={`${projectDescription} ${spotifyText}`}>
                        An in-depth reproduction of the Spotify web application, built using Express, React and NodeJS in combination with
                        Axios and the Spotify API. Routing handled with React Router v6. Achieves same functionality as the official Spotify site, featuring the Recently Played grid,
                        Recommendations based on user's listening, the search feature, user libraries, user playlist creation, as well as a web player, allowing users to stream music in the browser.
                      </span>     
                    </div>
                </div>
                </div>
          </div>
        </Layout>
    )
}
