import React from 'react'
import Layout from '../components/Layout'
import { container } from '../styles/portfolio.module.css'

export default function portfolio() {
    return (
        <Layout>
          <div className={container}>
            <span>Here are my projects</span>
          </div>
        </Layout>
    )
}
