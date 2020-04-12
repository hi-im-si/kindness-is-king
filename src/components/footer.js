import React from 'react'
import Image from '../components/Image'

const Footer = () => (
  <footer className="c-footer" data-bg-color="secondary" id="sponsors">
    <div className="o-container">
      <section>
        <header
          className="o-row  o-row--m  u-border-bottom  u-pb-20"
          data-anim="fade-in-up"
        >
          <h3>Created in Collaboration with:</h3>
        </header>
        <div className="c-img-grid" data-anim="fade-in-up-stagger">
          <a
            href="https://www.gfsmith.com/"
            className="c-img-grid__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="c-img-grid__media  c-img-grid__media--sml"
              alt="GF Smith"
              filename="gf-smith-brand.png"
            />
          </a>
          <a
            href="http://pinchedpost.co.uk/"
            className="c-img-grid__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="c-img-grid__media  c-img-grid__media--lrg"
              alt="Pinched Post"
              filename="pinched-post-brand.png"
            />
          </a>
          <button
            onClick={() => {
              window.location.href = 'mailto:si@hi-im-si.com'
            }}
            className="c-img-grid__item"
          >
            <Image
              className="c-img-grid__media  c-img-grid__media--med"
              alt="Hi I'm Si"
              filename="hi-im-si-brand.png"
            />
          </button>
        </div>
      </section>
    </div>
  </footer>
)

export default Footer
