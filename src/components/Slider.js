import SlideContent from './SlideContent'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { sliderContainer, sliderImageContainer, dotsContainer, dot, activeDot } from '../styles/slider.module.css'



export default function Slider({ content }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const ref = useRef()
    const [inView, setInView] = useState(false)
    const slideImages = [0, 1, 2, 3, 4]
    const len = slideImages.length - 1
    
    // Maybe extract this, could then be used for checking whether to load photo immediately or not
    useEffect(() => {
      const slider= ref.current
      const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true)
            } else {
              setInView(false)
            }
          }, { rootMargin: '-200px' }
      );

      slider && observer.observe(slider);

      return () => observer.unobserve(slider);
  }, []);
    
    useEffect(() => {     
      if (!inView) return
      
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [activeIndex, len, inView])

    return (
        <div className={sliderContainer} ref={ref}>
        <div className={sliderImageContainer}>
          <SlideContent activeIndex={activeIndex} content={content} />
        </div>
          <div className={dotsContainer}>
          {slideImages.map((slide, index) => (
              <span 
                key={index}
                className={activeIndex === index ? `${dot} ${activeDot}` : dot}
                onClick={() => setActiveIndex(index)}
                onKeyDown={() => setActiveIndex(index)}
              />
           ))}           
          </div>
        </div>
    )
}
