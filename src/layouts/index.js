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
        content="The life of a fit soprano."
      />
      <meta
        property="og:title"
        content="Alisha Cruz Serrano"
      />
      <meta
        property="og:description"
        content="The life of a fit soprano."
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Alisha Cruz Serrano" />
      <meta name="twitter:description" content="The life of a fit soprano" />
      <meta name="twitter:image:src" content="https://res.cloudinary.com/devhound/image/upload/v1530790462/twitter-og_mdtrmk.png" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Alisha Cruz Serrano" />
      <meta property="og:url" content="https://www.alishacruzserrano.com" />
      <meta name="og:image" content="https://res.cloudinary.com/devhound/image/upload/v1530790462/alisha-og_xavnm6.png" />
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
