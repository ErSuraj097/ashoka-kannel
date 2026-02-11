'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { Breadcrumb } from '@/components/breadcrumb'
import Link from 'next/link'
import Image from 'next/image'

interface GalleryItem {
  breed: string
  title: string
  image: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    breed: 'cane-corso',
    title: 'Champion Cane Corso',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    category: 'cane-corso',
  },
  {
    breed: 'siberian-husky',
    title: 'Siberian Husky Pack',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&q=80',
    category: 'siberian-husky',
  },
  {
    breed: 'saint-bernard',
    title: 'Gentle Saint Bernard',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80',
    category: 'saint-bernard',
  },
  {
    breed: 'cane-corso',
    title: 'Young Cane Corso',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80',
    category: 'cane-corso',
  },
  {
    breed: 'siberian-husky',
    title: 'Playful Husky',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80',
    category: 'siberian-husky',
  },
  {
    breed: 'saint-bernard',
    title: 'Saint Bernard Family',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&q=80',
    category: 'saint-bernard',
  },
  {
    breed: 'cane-corso',
    title: 'Powerful Build',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80',
    category: 'cane-corso',
  },
  {
    breed: 'siberian-husky',
    title: 'Snowy Adventure',
    image: 'https://images.unsplash.com/photo-1517423568366-697503b558a3?w=800&q=80',
    category: 'siberian-husky',
  },
  {
    breed: 'saint-bernard',
    title: 'Rescue Training',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80',
    category: 'saint-bernard',
  },
  {
    breed: 'cane-corso',
    title: 'Alert Guardian',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80',
    category: 'cane-corso',
  },
  {
    breed: 'siberian-husky',
    title: 'Blue Eyes',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&q=80',
    category: 'siberian-husky',
  },
  {
    breed: 'saint-bernard',
    title: 'Mountain Hero',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&q=80',
    category: 'saint-bernard',
  },
]

const filters = [
  { value: 'all', label: 'All Dogs' },
  { value: 'cane-corso', label: 'Cane Corso' },
  { value: 'siberian-husky', label: 'Siberian Husky' },
  { value: 'saint-bernard', label: 'Saint Bernard' },
]

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredItems =
    selectedFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter)

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Browse our collection of beautiful dogs and happy families from Ashoka Kennel
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 sticky top-20 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedFilter === filter.value
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-white text-foreground border-2 border-border hover:border-primary'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <AnimatedSection
                key={`${item.title}-${idx}`}
                delay={idx % 6 === 0 ? 0 : (idx % 6) * 50}
                className=""
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                        {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 capitalize">
                      {item.breed.replace('-', ' ')}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No images found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Experience Ashoka Kennel</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our gallery showcases the beautiful dogs we have had the pleasure of breeding and the
              happy moments they create with their families.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Would you like to meet any of these wonderful companions in person? Get in touch with
              us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/breeds"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Breeds
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

