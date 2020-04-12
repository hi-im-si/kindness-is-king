import React from 'react'

const Content = props => (
  <div
    className="o-row  o-row--n"
    data-bg-color="primary"
    data-t-color="secondary"
    id={props.sectionId}
  >
    <div className="o-container  o-container--med">
      <div className="c-content">
        <div className="c-content__inner" data-anim="fade-in-up-stagger">
          <h1 className={props.headingSize}>{props.heading}</h1>
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

export default Content
