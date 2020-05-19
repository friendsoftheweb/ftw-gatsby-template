module.exports = {
  siteMetadata: {
    title: 'Wordpress Gatsby Test'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        parser: require('postcss-scss'),
        postCssPlugins: [require('autoprefixer')]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true
      }
    }
  ]
};
