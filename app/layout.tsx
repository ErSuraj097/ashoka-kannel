import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { TopBar } from '@/components/top-bar'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { WhatsAppButton } from '@/components/whatsapp-button'
// import { SocialMediaIcons } from '@/components/social-media-icons'
import { OrganizationSchema } from '@/components/structured-data'
import { SocialMediaIcons } from "@/components/social-media-icons"


const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ashoka Kennel - Premium Dog Breeder in India | Cane Corso, Siberian Husky, Saint Bernard',
    template: '%s | Ashoka Kennel',
  },
  description: 'Top quality dog breeder in India specializing in Cane Corso, Siberian Husky, and Saint Bernard. Professional breeder since 2011 with nationwide delivery. Family-raised puppies with health guarantees.',
  keywords: ['dog breeder India', 'Cane Corso', 'Siberian Husky', 'Saint Bernard', 'premium dogs', 'family pets', 'nationwide delivery', 'Kaithal Haryana', 'pet puppies', 'kennel'],
  authors: [{ name: 'Ashoka Kennel' }],
  creator: 'Ashoka Kennel',
  publisher: 'Ashoka Kennel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ashokakennel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ashoka Kennel - Premium Dog Breeder in India',
    description: 'Professional dog breeder since 2011. Premium Cane Corso, Siberian Husky, and Saint Bernard puppies with nationwide delivery.',
    url: 'https://ashokakennel.com',
    siteName: 'Ashoka Kennel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashoka Kennel - Premium Dog Breeder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashoka Kennel - Premium Dog Breeder in India',
    description: 'Professional dog breeder since 2011. Premium Cane Corso, Siberian Husky, and Saint Bernard puppies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${_geist.className} font-sans antialiased flex  flex-col min-h-screen`}>
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SocialMediaIcons />
        <ScrollToTop />
      </body>
    </html>
  )
}

