module.exports = {
  siteMetadata: {
    title: 'Alisha Cruz Serrano',
    description:
    'The life of a vocally trained soprano.'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '03a51mny6sed',
        accessToken: '09e90ae1ee9df2950a1ccbc392634fbd6a7050f9f5a0f30ab88f08f07d1eb2e1'
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
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
  ],
}
