'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
               <Link to="/" className="flex-shrink-0 group flex items-center">
            {/* <div className="relative w-16 h-24 rounded-full overflow-hidden gap-4">
              <img
                src="/images/logos/ashoka-kennel-logo.png"
                alt="Ashoka Kennel Logo"
                className="absolute inset-0 w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div> */}
            {/* Brand */}
  <div className=" flex flex-col">
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
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated to ethical breeding and raising premium Cane Corso, Siberian Husky, and Saint Bernard puppies. Professional breeders since 2011.
            </p>
            {/* <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/ashokapets1/?ref=embed_page#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/40"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ashokakennel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/40"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div> */}
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8 md:gap-4">
            <div className="space-y-4">
              <h4 className="font-bold text-base text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-accent after:rounded">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm pt-2">
                {[
                  // { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/breeds', label: 'Our Breeds' },
                  { href: '/gallery', label: 'Gallery' },
                  // { href: '/updates', label: 'Updates' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-base text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-accent after:rounded">
                Our Breeds
              </h4>
              <ul className="space-y-3 text-sm pt-2">
                {[
                  { href: '/breeds/cane-corso', label: 'Cane Corso' },
                  { href: '/breeds/siberian-husky', label: 'Siberian Husky' },
                  { href: '/breeds/saint-bernard', label: 'Saint Bernard' },
                ].map((breed) => (
                  <li key={breed.label}>
                    <Link
                      to={breed.href}
                      className="text-slate-400 hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {breed.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-accent after:rounded">
              Contact
            </h4>
            <ul className="space-y-4 text-sm pt-2">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-accent flex-shrink-0 mt-1" />
                <div className="flex ">
                  <a
                    href="tel:+919953002000"
                    className="text-slate-400 hover:text-accent transition-colors duration-200"
                  >
                    +91 99530 02000
                  </a>, 
                  <a
                    href="tel:+919896969810"
                    className="text-slate-400 px-4 hover:text-accent transition-colors duration-200"
                  >
                    +91 98969 69810
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-accent flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@ashokakennel.com"
                  className="text-slate-400 hover:text-accent transition-colors duration-200"
                >
                  info@ashokakennel.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-slate-400 leading-relaxed">
                  NH152, Opp. Jio Petrol Pump
                  Village Keorak, Kaithal
                  Haryana 136027
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2016-2026 Ashoka Kennel. All rights reserved.</p>
          <p>Certified Purebred Dog Breeder • Trusted Nationwide Delivery</p>
          <p className="hover:text-accent transition-colors font-medium">
            Crafted & Secured by{' '}
            <a
              href="https://jethat.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-slate-400 hover:text-accent transition-colors"
            >
              JetHat
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
