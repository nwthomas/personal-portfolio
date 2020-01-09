module.exports = {
  siteMetadata: {
    title: `Nathan Thomas`,
    description: `This is the portfolio site for Nathan Thomas, software engineer, musician, amateur musician, and Italian food fan.`,
    author: `@nwthomas_`
  },
  plugins: [
    // manifest data
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

    // sass
    'gatsby-plugin-sass',

    // sharp
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // filesystem source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },

    // sentry error tracking
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.REACT_APP_SENTRY_DNS,
        // optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
        name: process.env.REACT_APP_SENTRY_NAME
      }
    },

    // es6 packages for .jsx support
    {
      resolve: `gatsby-plugin-compile-es6-packages`, // Adds .jsx file support
      options: {
        modules: [`query-string`]
      }
    },

    // Offline support
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // precachePages: [`/about-us/`, `/projects/*`] // To be updated to pre-cache pages/files
      }
    },

    // javascript nullish coalescing and optional chaining support
    'gatsby-plugin-nullish-coalescing-operator',
    '@bumped-inc/gatsby-plugin-optional-chaining',

    // tslint
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/
      }
    },

    // typescript
    `gatsby-plugin-typescript`,

    // typescript type checking
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker'
  ]
};
