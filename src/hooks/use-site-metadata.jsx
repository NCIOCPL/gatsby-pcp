import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          slogan
          description
          siteUrl
          footerLinks {
          	name
          	link
          }
          iconLinks {
          	name
          	link
          	height
          	width
          }
          menuLinks {
          	name
          	link
          	sublinks {
          		name
          		link
          	}
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
