import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Content from '../components/content'
import ContentMedia from '../components/contentmedia'

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `kindness is king`,
        `NHS`,
        `COVID-19`,
        `charity`,
        `letterpress`,
        `pinched post`,
      ]}
    />
    <Hero />
    <Content
      sectionId="cause"
      heading="For a great cause..."
      headingSize="t-font-alpha"
    >
      <p className="t-font-delta">
        The NHS dedicated staff and volunteers have gone over and above any
        expectations. They are working tirelessly to save lives, working day and
        night, staying away from their own loved ones to treat as many people as
        possible. We have chosen the{' '}
        <a
          className="u-text-link"
          href="https://uk.virginmoneygiving.com/charity-web/charity/displayCharityCampaignPage.action?charityCampaignUrl=NHSCharitiesCOVID19"
          target="_blank"
          rel="noopener noreferrer"
        >
          NHS Charities Together
        </a>{' '}
        to benefit from the profits raised from the sale of the Kindness is King
        limited edition letterpress poster. The money will be used to fund
        well-being packs for staff and volunteers, the costs of travel, parking
        and accommodation as well as other items to support the staff and
        volunteers well-being.
      </p>
    </Content>
    <ContentMedia
      sectionId="making"
      alignment="default"
      space="t"
      imageFileName="kindness-poster.png"
      imageAlt="Kindness is King Poster"
    >
      <p className="t-font-delta">
        The Kindness is King print is letterpress printed onto 270gsm turquoise
        Colourplan by G.F Smith, using moveable wood and metal type. Each print
        was hand-fed into the press multiple times to underpin the design with
        white for maximum vibrancy of the colours. Blue and pink were then
        applied directly to the inking system to create a gradated colour, (a
        process called split fountain). The charm of this type of colour
        printing means no two prints are ever exactly the same.
      </p>
    </ContentMedia>
    <ContentMedia
      alignment="reverse"
      space="tb"
      imageFileName="letterpress.png"
      imageAlt="Letterpressing"
    >
      <p className="t-font-delta">
        Pinched Post is a graphic design studio with a real love for
        craftsmanship. This edition was designed and printed at Pinched Post’s
        studio in Leamington Spa, UK using their collection of letterpress
        equipment.{' '}
        <a
          className="u-text-link  u-text-bold"
          href="http://pinchedpost.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          pinchedpost.co.uk
        </a>
      </p>
    </ContentMedia>
  </Layout>
)

export default IndexPage
