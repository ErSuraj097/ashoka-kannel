'use client'

import { ChevronRight, Home } from 'lucide-react'
import { useState, useEffect } from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: typeof Home
}

export function Breadcrumb() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname)
    }
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      return { label, href }
    }),
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={item.href || index} className="flex items-center">
          {index > 0 && <ChevronRight size={16} className="mx-2" />}
          {item.href && index < breadcrumbs.length - 1 ? (
            <a
              href={item.href}
              className="hover:text-primary transition-colors duration-200 flex items-center gap-1"
            >
              {item.icon && <item.icon size={14} />}
              {item.label}
            </a>
          ) : (
            <span className="text-foreground font-medium">
              {item.icon && <item.icon size={14} className="inline mr-1" />}
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
