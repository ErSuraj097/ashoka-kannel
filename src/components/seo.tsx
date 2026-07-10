import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
}

export function SEO({
  title,
  description,
  keywords,
  image = '/images/logos/ashoka-kennel-logo.png',
  url = window.location.href,
}: SEOProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = title

    // 2. Helper to set/update meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
      if (element) {
        element.setAttribute('content', contentValue)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        element.setAttribute('content', contentValue)
        document.head.appendChild(element)
      }
    }

    // Update standard meta tags
    setMetaTag('name', 'description', description)
    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }

    // Update Open Graph (Facebook) meta tags
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:image', image)
    setMetaTag('property', 'og:url', url)

    // Update Twitter meta tags
    setMetaTag('property', 'twitter:title', title)
    setMetaTag('property', 'twitter:description', description)
    setMetaTag('property', 'twitter:image', image)
    setMetaTag('property', 'twitter:url', url)
  }, [title, description, keywords, image, url])

  return null
}
