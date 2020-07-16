module.exports = {
  siteMetadata: {
    title: `Zielone Technologie`,
    description: `Rachunki za prąd za 0zł z panelami słonecznymi`,
    author: `@MarcinL`,
  },
  siteMetadata: {
    siteUrl: `https://www.zielonetechnologie.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zielone Tchnologie`,
        short_name: `ZT`,
        start_url: `/`,
        background_color: `#2b2b2b`,
        theme_color: `#2b2b2b`,
        display: `minimal-ui`,
        icon: `src/images/gtech-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-91684421-2",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-91684421-2`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
