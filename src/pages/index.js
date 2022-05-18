import React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import myHead from '../images/myHead.png'
import { container, navBar, navOption, containerMid, containerMidLeft, containerSmall, containerSmallTextBox, containerSmallText, containerSmallTextLarge, textContainer, photoContainer, quote } from '../styles/home.module.css'
import scrollTo from 'gatsby-plugin-smoothscroll'

const IndexPage = () => {

    React.useEffect(() => {
      const scrollElements = document.querySelectorAll('.js-scroll');
      var throttleTimer;

      const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;
        setTimeout(() => { 
          callback()
          throttleTimer = false;
        }, time)
      }

      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend)
      }

      const displayScrollElement = (element) => {
        element.classList.add('scrolled')
      }

      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el, 1.2)) {
            displayScrollElement(el)
          }
      })}

      window.addEventListener('scroll', () => {
        throttle(handleScrollAnimation, 250)
      })

      return function cleanUp() {
        window.removeEventListener('scroll', () => {
        throttle(handleScrollAnimation, 250)
      })
    }
  }, [])

  return (
    <Layout>
      <div className={container}>
        <div className={navBar}>
          <span>James O'Keeffe</span>
          <div>
            <span className={navOption} onClick={() => scrollTo('.projects')}>Portfolio</span>
            <span className={navOption} onClick={() => scrollTo('.contactSection')}>Contact</span>
          </div>
        </div>
        <div className={textContainer}>
          <span className={quote}>
            Full-stack developer creating web applications 
            that are both functional and elegant
          </span>
        </div>
        <div className={containerMid}>
         <div className={containerMidLeft}> 
          <div className={containerSmall}>
            <div className='js-scroll line' />
            <div className={`js-scroll ${containerSmallTextBox}`}>
              <span className={containerSmallText}>Location</span>
              <span className={containerSmallTextLarge}>Perth, WA</span>
            </div>
          </div>
          <div className={containerSmall}>
            <div className='js-scroll line' />
            <div className={`js-scroll ${containerSmallTextBox}`}>
              <span className={containerSmallText}>Github</span>
              <span className={containerSmallTextLarge}>Jamesokay</span>
            </div>
          </div>
         </div>

          <img src={myHead} className={`js-scroll ${photoContainer}`} alt='' />
        </div>
        <Portfolio />
        </div>
        <Contact />    
    </Layout>
  )
}

export default IndexPage
