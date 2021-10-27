module.exports = {
  siteMetadata: {
    title: `aziz ramos`,
    description: `Bored thinker, designer, and creative developer`,
    author: `Aziz Ramos`,
    image: `https://not-ansari.s3.us-east-2.amazonaws.com/social-media/social-media-bg.jpg`,
    siteUrl: `http://www.notansari.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@babel/plugin-transform-classes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4ths913quwq9`,
        accessToken: `1PFXdAdKPKDJ2WLkjuzKxggF-y0DCNCgaFmm6M3N5JQ`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
