'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/breeds', label: 'Breeds' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/updates', label: 'Updates' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-white/95 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <Link
  to="/"
  className="group flex items-center gap-1 flex-shrink-0"
>
  {/* Logo */}
  <div className="relative flex-shrink-0">
    <img
      src="/images/logos/ashoka-kennel-logo.png"
      alt="Ashoka Kennel Logo"
      className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Brand */}
  <div className="-ml-6 flex flex-col">
    <h1 className="text-2xl md:text-3xl font-extrabold leading-none tracking-tight">
      <span className="text-red-600 transition-colors duration-300 group-hover:text-red-700">
        Ashoka
      </span>
      <span className="text-orange-500 ml-1">Kennel</span>
    </h1>

    <span className="mt-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
      Premium Dog Breeder
    </span>

    {/* Decorative line */}
    <div className="mt-2 h-0.5 w-20 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400"></div>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  relative px-4 py-2
                  font-semibold text-foreground
                  transition-all duration-300 ease-out
                  hover:text-primary hover:-translate-y-[1px]

                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-full
                  after:bg-gradient-to-r after:from-primary after:to-accent
                  after:rounded-full
                  after:origin-left after:scale-x-0
                  after:transition-transform after:duration-500 after:ease-out

                  hover:after:scale-x-100

                  ${
                    isActive(item.href)
                      ? `
                        text-primary
                        after:scale-x-100
                        after:shadow-[0_0_12px_rgba(255,255,255,0.6)]
                      `
                      : ''
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
