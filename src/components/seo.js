/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "address": {
  "@type": "PostalAddress",
  "addressLocality": "Zielona Góra",
  "addressRegion": "",
  "postalCode":"65-019",
  "streetAddress": "ul. Dworcowa nr 6"
  },
  "description": "Zielone Technologie - Rachunki za prąd za 0zł z panelami słonecznymi",
  "name": "Fotowoltaika - montaż i doradztwo - ZieloneTechnologie Zielona Góra",
  "telephone": "+48694163440",
  "image": "http://zielonetechnologie.net/static/logo-5b84b763ae763f2761a732fceb60d761.svg",
  "url": "http://zielonetechnologie.net",
  "sameAs" : [
  "https://twitter.com/ZieloneTechnol1",
  "https://www.facebook.com/Zielone-Technologie-Fotowoltaika-175358080800397"
  ],
  "geo": {
  "@type": "GeoCoordinates",
  "latitude": "51.9464957",
  "longitude": "15.5074844",
  }
}

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: `TuhExIbAFt1RlqKpgoL6_opjyp1gceAxINmFt4e4Bn0`
        },
      ].concat(meta)}
    >
       <script type="application/ld+json">
         {
           `{
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "address": {
            "@type": "PostalAddress",
            "addressLocality": "Zielona Góra",
            "addressRegion": "",
            "postalCode":"65-019",
            "streetAddress": "ul. Dworcowa nr 6"
            },
            "description": "Zielone Technologie - Rachunki za prąd za 0zł z panelami słonecznymi",
            "name": "Fotowoltaika - montaż i doradztwo - ZieloneTechnologie Zielona Góra",
            "telephone": "+48694163440",
            "image": "http://zielonetechnologie.net/static/logo-5b84b763ae763f2761a732fceb60d761.svg",
            "url": "http://zielonetechnologie.net",
            "sameAs" : [
            "https://twitter.com/ZieloneTechnol1",
            "https://www.facebook.com/Zielone-Technologie-Fotowoltaika-175358080800397"
            ],
            "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.9464957",
            "longitude": "15.5074844",
            }
          }`
         }
         </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
