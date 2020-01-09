module.exports = {
  siteMetadata: {
    title: `Nathan Thomas`,
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
        icon: `src/images/Twitter_Logo_White.png` // This path is relative to the root of the site.
      }
    },
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
    {
      resolve: `gatsby-plugin-compile-es6-packages`, // Adds .jsx file support
      options: {
        modules: [`query-string`]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // precachePages: [`/about-us/`, `/projects/*`] // To be updated to pre-cache pages/files
      }
    },
    'gatsby-plugin-nullish-coalescing-operator',
    '@bumped-inc/gatsby-plugin-optional-chaining',
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/
      }
    }
  ]
};
