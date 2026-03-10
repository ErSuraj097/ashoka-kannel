'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home, LucideIcon } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: LucideIcon
}

export function Breadcrumb() {
  const pathname = usePathname()

  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label =
        segment.charAt(0).toUpperCase() +
        segment.slice(1).replace(/-/g, ' ')

      return { label, href }
    }),
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={item.href || index} className="flex items-center">
          {index > 0 && <ChevronRight size={16} className="mx-2" />}

          {item.href && index < breadcrumbs.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors duration-200 flex items-center gap-1"
            >
              {item.icon && <item.icon size={14} />}
              {item.label}
            </Link>
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
