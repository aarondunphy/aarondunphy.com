module.exports = {
  siteMetadata: {
    title: `Aaron Dunphy`,
    description: `Full Stack Developer based in Leigh-on-Sea, UK. Laravel & JavaScript.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `markdown-pages`,
            path: `${__dirname}/src/posts`,
        },
    },
    `gatsby-transformer-remark`,
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Open Sans\:400,700`
          ],
          display: 'swap'
        }
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`
  ],
}
