import React from 'react'
import { activeSlide, inactiveSlide, slideImage } from '../styles/slider.module.css'

export default function SlideContent({ activeIndex, slideImages }) {
    return (
        <>
          {slideImages.map((slide, index) => (
              <div key={index} className={index === activeIndex ? activeSlide : inactiveSlide}>
                  <img className={slideImage} src={slide.url} alt={slide.desc} />
              </div>
          ))}
          
            
        </>
    )
}
