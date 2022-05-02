import * as React from "react"
import Layout from "../components/Layout"
import { container, greeting, contactDetails, contactDetailsItem } from '../styles/contact.module.css'

const ContactPage = () => {
  return (
    <Layout>
      <div className={container}>
        <h1 className={greeting}>Hello</h1>
        <ul className={contactDetails}>
          <li className={contactDetailsItem}>0426 221 594</li>
          <li className={contactDetailsItem}>jamesokeeffe50@gmail.com</li>
          <li className={contactDetailsItem}><a href='https://github.com/Jamesokay' target='_blank'>github</a></li>
        </ul>
      </div>
    </Layout>
  )
}

export default ContactPage
