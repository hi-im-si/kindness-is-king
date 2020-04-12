import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Skus = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          skus: allStripeSku(sort: { fields: [price] }) {
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <div>
          {skus.edges.map(({ node: sku }) => (
            <SkuCard key={sku.id} sku={sku} stripePromise={stripePromise} />
          ))}
        </div>
      )}
    />
  )
}

export default Skus
