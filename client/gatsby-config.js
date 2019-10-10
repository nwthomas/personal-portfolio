module.exports = {
  siteMetadata: {
    title: `Nathan Thomas' Portfolio`,
    description: `This is the portfolio site for Nathan Thomas, software engineer, musician, amateur musician, and Italian food fan.`,
    author: `@nwthomas_`
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-flow`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
