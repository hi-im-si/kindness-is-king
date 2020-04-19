import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Skus from './Products/Skus'

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "bg.png" }) {
          ...fluidImage
        }
        poster: file(relativePath: { eq: "poster_sold_out.png" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="c-hero  o-flex-media">
        <Img
          className="o-flex-media__item"
          style={{ position: 'absolute' }}
          fluid={data.hero.childImageSharp.fluid}
        />

        <div className="c-hero__body">
          <div className="c-hero__content" data-anim="fade-in-up">
            <Img
              className="c-hero__image"
              fluid={data.poster.childImageSharp.fluid}
            />
            <Skus />
          </div>
        </div>
      </div>
    )}
  />
)

export default Hero
