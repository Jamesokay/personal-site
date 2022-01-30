import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { container, textContainer, imageContainer, quote, citation, bodyText } from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={textContainer}>
        <span className={quote}>"Here is a truly magnificent quotation, one that suggests I think deeply about things."</span>
        <span className={citation}>— A Profound Thinker</span>
        <span className={bodyText}>
         At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
         praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
         excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
         officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </span>
        </div>
        <div className={imageContainer}>
        <StaticImage alt="Me" src="../images/me.jpeg" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
