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
import { projectsHeader, projectTitle, projectContainer, projectDescriptionContainer, projectDescription, projectLinks, projectLink } from '../styles/portfolio.module.css'

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
    
    return (     
            <div className='projects'>
                <span className={`js-scroll ${projectsHeader}`}>Projects</span>
                <div className={`js-scroll line`}/>
                <div className={projectContainer}>
                      <Slider slideImages={reactorImages} />
                    <div className={projectDescriptionContainer}>
                      <span className={`js-scroll ${projectTitle}`}>Reactor</span>
                      <span className={`js-scroll ${projectDescription}`}>
                        A full-stack photo sharing social media app built using MongoDB, Express, React and NodeJS. Routing handled with
                        React Router v6. Requests to API handled with Axios. Images are hosted on Cloudinary, front-end and back-end are both deployed on Heroku.  
                      </span>
                      <div className={`js-scroll ${projectLinks}`}>
                        <div className={projectLink}>Site</div>
                        <div className={projectLink}>Github</div>
                      </div>     
                    </div>
                </div>
                <div className={`js-scroll line`} />
                <div className={projectContainer}>
                  <Slider slideImages={spotifyImages} />
                    <div className={projectDescriptionContainer}>
                      <span className={`js-scroll ${projectTitle}`}>Spotify Clone</span>
                      <span className={`js-scroll ${projectDescription}`}>
                        An in-depth reproduction of the Spotify web application, built using Express, React and NodeJS in combination with
                        Axios and the Spotify API. Routing handled with React Router v6.
                      </span>   
                      <div className={`js-scroll ${projectLinks}`}>
                        <div className={projectLink}>Github</div>
                      </div>    
                    </div>
                </div>
                </div>
    )
}
