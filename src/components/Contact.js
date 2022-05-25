import * as React from "react"
import { greeting, contactDetails, contactDetailsItem, contactDetailsLink, footer } from '../styles/contact.module.css'

export default function Contact() {
  return (
      <div className='contactSection'>
        <h1 className={`js-scroll ${greeting}`}>Hello</h1>
        <ul className={`js-scroll ${contactDetails}`}>
          <li className={contactDetailsItem}>0426 221 594</li>
          <li className={contactDetailsItem}>jamesokeeffe50@gmail.com</li>
          <li className={contactDetailsItem}><a className={contactDetailsLink} href='https://github.com/Jamesokay' target='_blank'>GitHub</a></li>
          <li className={contactDetailsItem}><a className={contactDetailsLink} href='https://www.linkedin.com/in/james-o-keeffe-283881170/' target='_blank'>LinkedIn</a></li>
        </ul>
        <div className={footer}>
          © James O'Keeffe
        </div>
      </div>
  )
}
