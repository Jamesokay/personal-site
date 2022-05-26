import React from 'react'
import { activeSlide, inactiveSlide, slideImage } from '../styles/slider.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from "gatsby"



export default function ReactorContent({ activeIndex }) {


    return (
        <StaticQuery
          query ={ graphql `
            query {
            reactorImages: allFile(filter: {relativeDirectory: {eq: "reactor"}, extension: {eq: "png"}}) {
              edges {
                node {
                  id
                  base
                  childImageSharp {
                    gatsbyImageData(width: 865, height: 445, quality: 70)
                  }
                }
              }
             }
            }
          `}
          render={data => (
            data.reactorImages.edges.map(({node}, index) => (
              <div key={node.id} className={index === activeIndex ? activeSlide : inactiveSlide}>
                <GatsbyImage 
                  image={node.childImageSharp.gatsbyImageData}
                  className={slideImage} 
                  alt='Reactor images' 
                />
              </div>
            ))  
          )}           
        /> 
    )
}

