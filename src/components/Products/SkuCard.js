import React from 'react'

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(0)
  let numberFormat = new Intl.NumberFormat(['en-GB'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price).replace(/\.00/g, '')
}

const SkuCard = ({ sku, stripePromise }) => {
  const redirectToCheckout = async (event, sku, quantity = 1) => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku, quantity }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  return (
    <div className="c-product">
      <div className="c-product__row">
        <p
          className="c-product__price  t-font-beta  u-text-bolder"
          data-anim="fade-in-up"
        >
          {formatPrice(sku.price, sku.currency)}
        </p>
      </div>

      <div className="c-product__row">
        <p
          className="c-product__description  t-font-epsilon  u-text-bolder"
          data-anim="fade-in-left"
          data-anim-delay="2"
        >
          Limited edition letterpress print. Printed in movable wood & metal
          type in an edition of 125. All profits donated to the NHS Covid-19
          support Charity.
        </p>
        <button
          className="c-product__btn  c-btn  c-btn--primary"
          onClick={event => redirectToCheckout(event, sku.id)}
          data-anim="fade-in-right"
          data-anim-delay="2"
        >
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  )
}

export default SkuCard
