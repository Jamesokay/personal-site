import React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { container, navBar, navOption, textContainer, photoContainer, quote } from '../styles/home.module.css'

const IndexPage = () => {

    function scrollTo(pageLocation) {
      pageLocation.scrollIntoView({ behavior: "smooth" });
    }

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

      const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop > (window.innerHeight || document.documentElement.clientHeight))
      }

      const displayScrollElement = (element) => {
        element.classList.add('scrolled')
      }

      const hideScrollElement = (element) => {
        element.classList.remove('scrolled')
      }

      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el, 1.3)) {
            displayScrollElement(el)
          } else if (elementOutofView(el)) {
            hideScrollElement(el)
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
            <span className={navOption} onClick={() => scrollTo(document.querySelector('.projects'))}>Portfolio</span>
            <span className={navOption} onClick={() => scrollTo(document.querySelector('.contactSection'))}>Contact</span>
          </div>
        </div>
        <div className={textContainer}>
          <span className={quote}>
            Full-stack developer creating web applications 
            that are both functional and elegant
          </span>
        </div>
        <div className={`js-scroll ${photoContainer}`} />
        <Portfolio />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
