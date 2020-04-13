import React from 'react'
import Image from './image'

const ContentMedia = props => (
  <section
    className={`o-row  o-row--n  o-row--${props.space}`}
    data-bg-color="tertiary"
    id={props.sectionId}
  >
    <div className="o-container">
      <div className={`o-media  o-media--${props.alignment}`}>
        <div
          className="o-media__body  o-media__elem  o-col  o-col--flush-6  mq-desk--full--flush"
          data-anim="fade-in-left"
        >
          <h1>{props.heading}</h1>
          {props.children}
        </div>

        <div
          className="o-media__elem  o-col  o-col--flush-6  mq-desk--full--flush"
          data-t-color="quaternary"
          data-anim="fade-in-right"
        >
          <Image
            className="o-media__img"
            alt={props.imageAlt}
            filename={props.imageFileName}
          />
        </div>
      </div>
    </div>
  </section>
)

export default ContentMedia
