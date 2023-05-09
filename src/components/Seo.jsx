import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title != "" ? title + " - " + defaultTitle : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <script src="https://assets.adobedtm.com/6a4249cd0a2c/785de09de161/launch-70d67a6a40a8.min.js"></script>
      {children}
    </>
  )
}