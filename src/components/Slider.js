import SlideContent from './SlideContent'
import React from 'react'
import { useState, useEffect } from 'react'
import { sliderContainer, sliderImageContainer, dotsContainer, dot, activeDot } from '../styles/slider.module.css'



export default function Slider({ slideImages }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const len = slideImages.length - 1
    
    useEffect(() => {
        
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [activeIndex, len])

    return (
        <div className={sliderContainer}>
        <div className={sliderImageContainer}>
          <SlideContent activeIndex={activeIndex} slideImages={slideImages} />
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
