import React from 'react'

export default function FadeInSection({children}) {
    const domRef = React.useRef()
    const [isVisible, setVisible] = React.useState(false)
  
    React.useEffect(() => {
      const test = domRef.current
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setVisible(true)      
          observer.unobserve(test)
        }
      })
      
      observer.observe(domRef.current)
      
      return () => observer.unobserve(test)
    }, [])
  
    return (
        <div ref={ domRef } className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>{ children }</div>
    )
}