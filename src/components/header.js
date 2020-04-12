import PropTypes from 'prop-types'
import React from 'react'
import Nav from './navigation'

const Header = ({ siteTitle }) => (
  <header className="c-header  c-header--sticky  js-header" role="banner">
    <div className="c-header__container">
      <div className="c-header__nav  c-header__nav--secondary">
        <Nav />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
