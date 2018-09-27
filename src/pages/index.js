import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design & code react apps</h1>
        <p>This is a test course for learning React code. This is based on Design & Code course.</p>
        <Link to="/page-2/">Leading somewhere</Link>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
