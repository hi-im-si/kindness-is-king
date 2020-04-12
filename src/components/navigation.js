import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const ListLink = props => (
  <li className="c-nav__item">
    <AnchorLink className={`c-nav__link`} to={props.to}>
      {props.children}
    </AnchorLink>
  </li>
)

const Nav = () => (
  <nav className="c-nav" role="navigation" aria-label="Main Navigation">
    <ul id="navigation" className="c-nav__list">
      <ListLink to="/#cause">For a Great Cause</ListLink>
      <ListLink to="/#making">Making Of</ListLink>
      <ListLink to="/#sponsors">Sponsors</ListLink>
    </ul>
  </nav>
)

export default Nav
