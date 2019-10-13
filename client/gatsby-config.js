module.exports = {
  siteMetadata: {
    title: `Nathan Thomas' Portfolio`,
    description: `This is the portfolio site for Nathan Thomas, software engineer, musician, amateur musician, and Italian food fan.`,
    author: `@nwthomas_`
  },
  plugins: [
    // Configures Node-SASS
    'gatsby-plugin-sass',
    // Configures the Gatsby file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Adds a Gatsby manifest to all pages
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Twitter_Logo_White.png` // This path is relative to the root of the site.
      }
    },
    // Turns on Gatsby support for flow
    `gatsby-plugin-flow`,
    // Configures Sentry support in React/Gatsby
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.REACT_APP_SENTRY_DNS,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
        name: process.env.REACT_APP_SENTRY_NAME
      }
    },
    // Adds .jsx file support
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`query-string`]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
