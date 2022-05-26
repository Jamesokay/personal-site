import React from 'react'
import reactorFeed from '../images/reactorFeed.png'
import reactorLogin from '../images/reactorLogin.png'
import reactorPost from '../images/reactorPost.png'
import reactorProfile from '../images/reactorProfile.png'
import reactorUpload from '../images/reactorUpload.png'
import spotify1 from '../images/spotify1.png'
import spotify2 from '../images/spotify2.png'
import spotify3 from '../images/spotify3.png'
import spotify4 from '../images/spotify4.png'
import spotify5 from '../images/spotify5.png'
import { activeSlide, inactiveSlide, slideImage } from '../styles/slider.module.css'

export default function SlideContent({ activeIndex, content }) {

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

    return content === 'reactor'? (
        <>
          {reactorImages.map((slide, index) => (
              <div key={index} className={index === activeIndex ? activeSlide : inactiveSlide}>
                  <img className={slideImage} src={slide.url} alt={slide.desc} width={865} height={445} />
              </div>
          ))}
                    
        </>
    )
    :
    (
        <>
        {spotifyImages.map((slide, index) => (
            <div key={index} className={index === activeIndex ? activeSlide : inactiveSlide}>
                <img className={slideImage} src={slide.url} alt={slide.desc} width={865} height={445} />
            </div>
        ))}              
      </> 
    )
}
