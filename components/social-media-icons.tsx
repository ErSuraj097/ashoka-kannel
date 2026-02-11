'use client'

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ashokakennel',
    icon: Facebook,
    color: 'hover:bg-blue-600',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ashoka_kennel',
    icon: Instagram,
    color: 'hover:bg-pink-600',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@ashokakennel',
    icon: Youtube,
    color: 'hover:bg-red-600',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ashokakennel',
    icon: Twitter,
    color: 'hover:bg-sky-500',
  },
]

export function SocialMediaIcons() {
  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col gap-3">

      {/* verticle lime */}
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color}`}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  )
}
