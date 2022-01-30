import * as React from "react"
import Layout from "../components/Layout"
import { container } from '../styles/contact.module.css'

const ContactPage = () => {
  return (
    <Layout>
      <div className={container}>
        <span>Here is my contact information.</span>
      </div>
    </Layout>
  )
}

export default ContactPage
