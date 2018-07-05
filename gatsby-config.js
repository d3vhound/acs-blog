require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Alisha Cruz Serrano',
    description:
    'The life of a fit soprano.'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:600,700`,
          `IBM Plex Sans\:300,600`,
        ]
      }
    },
    `gatsby-plugin-react-next`,
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
  ],
}
