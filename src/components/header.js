import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import ThemeSwitch from './ThemeSwitch'
import { useEffect } from 'react'

const Header = ({ siteTitle, title }) => {
  useEffect(() => {
    if (document !== 'undefined') {
      document.title = title ? `${title} | ${siteTitle}` : siteTitle
    }
  }, [siteTitle, title])
  return (
    <div
      style={{
        background: `rgb(125, 88, 158)`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#222`,
              textDecoration: `none`,
              fontWeight: '300',
              backgroundColor: 'inherit',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <ThemeSwitch preserveRasters />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
