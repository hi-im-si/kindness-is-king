<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Kindness is King
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/12756308-8621-4784-9b4f-90e45a4fc772/deploy-status)](https://app.netlify.com/sites/vibrant-edison-b4c94e/deploys)

Kindness is King is a site dedicated to the hardworking NHS staff during the COVID-19 Pandemic. All proceeds generated through the site via the sale of the Kindness is King print will be donated to [NHS Charities Together](https://uk.virginmoneygiving.com/charity-web/charity/displayCharityCampaignPage.action?charityCampaignUrl=NHSCharitiesCOVID19)

## Setup
* First, you must enable client-only Checkout in your Stripe Dashboard: https://dashboard.stripe.com/account/checkout/settings
* Next, create a product and SKU from the Stripe Dashboard: https://dashboard.stripe.com/test/products

### Run locally
* `git clone https://github.com/hi-im-si/kindness-is-king.git`
* Make a copy of the example .env file: `cp .env.example .env.development`
* Add your Stripe API keys to the newly created `.env.development` file.
* run `npm install`
* run `gatsby develop`


#### Ref: This is a Gatsby e-commerce example based on https://www.gatsbyjs.org/tutorial/ecommerce-tutorial/