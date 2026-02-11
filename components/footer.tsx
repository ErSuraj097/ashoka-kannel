'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-accent">Ashoka</span>Kennel
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Professional dog breeders since 2011, dedicated to providing quality companions
              across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/breeds', label: 'Our Breeds' },
                { href: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Our Breeds</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/breeds/cane-corso', label: 'Cane Corso' },
                { href: '/breeds/siberian-husky', label: 'Siberian Husky' },
                { href: '/breeds/saint-bernard', label: 'Saint Bernard' },
              ].map((breed) => (
                <li key={breed.href}>
                  <Link
                    href={breed.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {breed.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919953002000"
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    +919953002000
                  </a>
                  <a
                    href="tel:+919896969810"
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    +919896969810
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@ashokakennel.com"
                  className="text-background/80 hover:text-accent transition-colors duration-300"
                >
                  info@ashokakennel.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-background/80">
                  NH152, Opp. Jio Petrol Pump<br />
                  Village Keorak Kaithal, Haryana 136027
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © 2016-2026 Ashoka Kennel. All rights reserved. | Trusted by dog lovers across India.
          </p>
        </div>
      </div>
    </footer>
  )
}
