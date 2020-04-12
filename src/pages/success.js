import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContentMedia from '../components/contentmedia'
import { Link } from 'gatsby'

const SuccessPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContentMedia
      sectionId="success"
      alignment="reverse"
      space="tb"
      imageFileName="kindness-poster.png"
      imageAlt="Kindness is King Poster"
      heading="Success!"
    >
      <p>Thank you for your purchase and contributing to a worthy cause.</p>
      <p>
        <Link to="/" className="u-text-link  u-text-bold">
          Go back Home
        </Link>
      </p>
    </ContentMedia>
  </Layout>
)

export default SuccessPage
