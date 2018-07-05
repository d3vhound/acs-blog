import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteTitle from '../components/SiteTitle'
import Menu from '../components/Menu'
import '../assets/css/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      {/* <link rel="icon" href={} /> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="The life of a vocally trained soprano."
      />
      <meta
        property="og:title"
        content="Alisha Cruz Serrano"
      />
      <meta
        property="og:description"
        content="The life of a puerto rican soprano"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Alisha Cruz Serrano" />
      <meta property="og:url" content="https://www.acs.com" />
    </Helmet>
    <Menu />
    
    <div className="body-content">
      {children()}
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
