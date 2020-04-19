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
      shippingAddressCollection: {
        allowedCountries: ['GB'],
      },
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  return (
    <div className="c-product">
      <div className="c-product__row">
        <p
          className="c-product__price  t-font-gamma  u-text-bolder"
          data-anim="fade-in-up"
        >
          SOLD OUT
        </p>
      </div>

      <div className="c-product__row">
        <p
          className="c-product__description  t-font-epsilon  u-text-bolder"
          data-anim="fade-in-left"
          data-anim-delay="2"
        >
          {sku.product.metadata.description}
        </p>
      </div>
    </div>
  )
}

export default SkuCard
