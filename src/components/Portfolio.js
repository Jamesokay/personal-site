import React from 'react'
import reactorFeed from '../images/reactorFeed.png'
import reactorLogin from '../images/reactorlogin.png'
import reactorPost from '../images/reactorPost.png'
import reactorProfile from '../images/reactorProfile.png'
import reactorUpload from '../images/reactorUpload.png'
import spotify1 from '../images/spotify1.png'
import spotify2 from '../images/spotify2.png'
import spotify3 from '../images/spotify3.png'
import spotify4 from '../images/spotify4.png'
import spotify5 from '../images/spotify5.png'
import Slider from './Slider'
import { projects, projectsHeader, projectTitle, projectContainer, projectDescriptionContainer, projectDescription, projectLinks, projectLink, line } from '../styles/portfolio.module.css'

export default function Portfolio() {

  const reactorImages = [
    {
        desc: 'The Reactor login page',
        url: reactorLogin
    },
    {
        desc: 'The Reactor feed',
        url: reactorFeed
    },
    {
        desc: 'The Reactor post page',
        url: reactorPost
    },
    {
        desc: 'The Reactor profile page',
        url: reactorProfile
    },
    {
      desc: 'The Reactor upload page',
      url: reactorUpload
    }
]

const spotifyImages = [
  {
      desc: 'The Spotify home page',
      url: spotify1
  },
  {
      desc: 'The Spotify playlist page',
      url: spotify2
  },
  {
      desc: 'The Spotify Pixies page',
      url: spotify3
  },
  {
      desc: 'The Spotify search page',
      url: spotify4
  },
  {
    desc: 'The Spotify Grimes page',
    url: spotify5
  }
]
    
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
            <div className={projects}>
                <span className={projectsHeader}>Projects</span>
                <div className={line} />
                <div className={projectContainer}>
                      <Slider slideImages={reactorImages} />
                    <div className={projectDescriptionContainer}>
                      <span className={projectTitle}>Reactor</span>
                      <span className={projectDescription}>
                        A full-stack photo sharing social media app built using MongoDB, Express, React and NodeJS. Routing handled with
                        React Router v6. Requests to API handled with Axios. Images are hosted on Cloudinary, front-end and back-end are both deployed on Heroku.  
                      </span>
                      <div className={projectLinks}>
                        <span className={projectLink}>Visit site</span>
                        <span className={projectLink}>Github repo</span>
                      </div>     
                    </div>
                </div>
                <div className={line} />
                <div className={projectContainer}>
                  <Slider slideImages={spotifyImages} />
                    <div className={projectDescriptionContainer}>
                      <span className={projectTitle}>Spotify Clone</span>
                      <span className={projectDescription}>
                        An in-depth reproduction of the Spotify web application, built using Express, React and NodeJS in combination with
                        Axios and the Spotify API. Routing handled with React Router v6.
                      </span>   
                      <div className={projectLinks}>
                        <span className={projectLink}>Github repo</span>
                      </div>    
                    </div>
                </div>
                <div className={line} />
                </div>
    )
}
