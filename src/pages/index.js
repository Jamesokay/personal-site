import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. And I never got caught neither.</p>
      <StaticImage
        alt="Prison Mike"
        src="https://static.wikia.nocookie.net/theoffice/images/9/96/Prisonmike.png/revision/latest?cb=20100327171549"
      />
    </Layout>
  )
}

export default IndexPage
