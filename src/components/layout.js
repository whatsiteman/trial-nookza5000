import React from "react"
import PropTypes from "prop-types"
import "../scss/core.scss"
import "../scss/style.scss"

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
