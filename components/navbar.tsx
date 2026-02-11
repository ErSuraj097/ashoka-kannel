'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/breeds', label: 'Breeds' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Owner Name */}
          <Link href="/" className="flex-shrink-0 group flex items-center ">
            <div className="relative w-16 h-24 rounded-full overflow-hidden gap-4 ">
              <Image
                src="/logo.png"
                alt="Ashoka Kennel Logo"
                fill
                className="object-cover  rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold leading-none">
                <span className="text-primary group-hover:text-accent transition-colors">
                  Ashoka
                </span>
                <span className="text-accent">Kennel</span>
              </h1>
              <span className="text-xs text-muted-foreground tracking-wider">
                Premium Dog Breeder
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
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
                href={item.href}
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
