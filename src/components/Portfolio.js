import React from 'react'
import Slider from './Slider'
import { projectsHeader, projectTitle, projectContainer, projectDescriptionContainer, projectDescription, italic, projectLinks, projectLink } from '../styles/portfolio.module.css'

export default function Portfolio() {

    
    return (     
            <div className='projects'>
                <span className={`js-scroll ${projectsHeader}`}>Projects</span>
                <div className={`js-scroll line`}/>
                <div className={projectContainer}>
                      <Slider content='reactor' />
                    <div className={projectDescriptionContainer}>
                      <span className={`js-scroll ${projectTitle}`}>Reactor</span>
                      <span className={`js-scroll ${projectDescription}`}>
                        A <span className={italic}>MERN</span> stack social media app allowing users to upload, share, like and comment on photos. 
                        Back-end API built using <span className={italic}>Express, Node, MongoDB</span> and <span className={italic}>Mongoose</span>. 
                        Requests to API are handled with <span className={italic}>Axios</span>, 
                        and routing is handled with <span className={italic}>React Router v6</span>. 
                        Front-end built with <span className={italic}>React</span> and <span className={italic}>Material UI</span>.
                        Images are hosted and optimized for performance using <span className={italic}>Cloudinary SaaS</span>. 
                      </span>
                      <div className={`js-scroll ${projectLinks}`}>
                        <a className={projectLink} href='https://github.com/Jamesokay/reactor' target='_blank'>Github</a>
                      </div>     
                    </div>
                </div>
                <div className={`js-scroll line`} />
                <div className={projectContainer}>
                  <Slider content='spotify' />
                    <div className={projectDescriptionContainer}>
                      <span className={`js-scroll ${projectTitle}`}>Spotify Clone</span>
                      <span className={`js-scroll ${projectDescription}`}>
                        An in-depth reproduction of the Spotify web application for desktop, 
                        built using <span className={italic}>Express, React, Node</span> and  
                        <span className={italic}> Axios</span> in combination with the <span className={italic}>Spotify API</span>. 
                        Routing handled with <span className={italic}>React Router v6</span>.
                      </span>   
                      <div className={`js-scroll ${projectLinks}`}>
                        <a className={projectLink} href='https://github.com/Jamesokay/spotifyclone' target='_blank'>Github</a>
                      </div>    
                    </div>
                </div>
                </div>
    )
}
