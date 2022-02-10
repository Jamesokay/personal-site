import React from 'react'

export default function FadeInSection({children}) {
    const domRef = React.useRef()
    const [isVisible, setVisible] = React.useState(false)
  
    React.useEffect(() => {
      const current = domRef.current

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
      }

      const observerCallback = entries => {
        if (entries[0].isIntersecting) {
            setVisible(true)      
            observer.unobserve(current)
          }
      }

      const observer = new IntersectionObserver(observerCallback, options)
      
      observer.observe(current)
      
      return () => observer.unobserve(current)
    }, [])
  
    return (
        <div ref={ domRef } className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>{ children }</div>
    )
}