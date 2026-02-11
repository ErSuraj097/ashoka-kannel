'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  const contactInfo = [
    {
      icon: <Phone size={14} />,
      label: '+91 98969 69810',
      href: 'tel:+919896969810',
    },
    {
      icon: <Mail size={14} />,
      label: 'info@ashokakennel.com',
      href: 'mailto:info@ashokakennel.com',
    },
    {
      icon: <MapPin size={14} />,
      label: 'Kaithal, Haryana',
      href: 'https://maps.google.com/?q=Kaithal+Haryana',
    },
  ]

  const socialLinks = [
    {
      icon: <Facebook size={16} />,
      href: 'https://facebook.com/ashokakennel',
      label: 'Facebook',
    },
    {
      icon: <Instagram size={16} />,
      href: 'https://instagram.com/ashokakennel',
      label: 'Instagram',
    },
    {
      icon: <Youtube size={16} />,
      href: 'https://youtube.com/ashokakennel',
      label: 'YouTube',
    },
  ]

  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Contact Info - Left Side */}
          <div className="hidden md:flex items-center gap-6 py-2">
            {contactInfo.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Social Links - Right Side */}
          <div className="flex items-center gap-4 ml-auto py-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

