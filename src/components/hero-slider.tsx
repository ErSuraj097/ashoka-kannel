'use client'

import { useState, useEffect } from 'react'

interface Slide {
  image: string
  title: string
  subtitle: string
  effect: 'fade' | 'zoom' | 'slide-left' | 'slide-up' | 'flip' | 'blur'
  photographer?: string
}

const slides: Slide[] = [
  {
    image: '/images/banners/owner-banner.jpg',
    title: 'Healthy Puppies',
    subtitle: 'Vaccinated & Dewormed',
    effect: 'blur',
    photographer: 'Unsplash',
  },
  {
    image: '/images/banners/hero-cane-corso.jpg',
    title: 'Ashoka Kennel',
    subtitle: 'Premium Quality Dogs',
    effect: 'fade',
    photographer: 'Unsplash',
  },
  {
    image: '/images/banners/hero-husky.jpg',
    title: 'Powerful Breeds',
    subtitle: 'Strong & Loyal Companions',
    effect: 'zoom',
    photographer: 'Unsplash',
  },
  {
    image: '/images/banners/hero-saint-bernard.jpg',
    title: 'Champion Lineage',
    subtitle: 'Best Bloodlines in India',
    effect: 'slide-left',
    photographer: 'Unsplash',
  },
  {
    image: '/images/banners/hero-family-raised.jpg',
    title: 'Family Raised',
    subtitle: 'Loved from Day One',
    effect: 'slide-up',
    photographer: 'Unsplash',
  },
  // {
  //   image: '/images/banners/owner-banner.jpg',
  //   title: 'Healthy Puppies',
  //   subtitle: 'Vaccinated & Dewormed',
  //   effect: 'blur',
  //   photographer: 'Unsplash',
  // },
]

const effectClasses: Record<string, string> = {
  fade: 'transition-all duration-1000 ease-in-out',
  zoom: 'transition-all duration-1000 ease-in-out',
  'slide-left': 'transition-all duration-700 ease-out',
  'slide-up': 'transition-all duration-700 ease-out',
  flip: 'transition-all duration-700 ease-in-out',
  blur: 'transition-all duration-700 ease-in-out',
}

const activeEffectClasses: Record<string, string> = {
  fade: 'opacity-100 scale-100',
  zoom: 'opacity-100 scale-100 blur-0',
  'slide-left': 'opacity-100 translate-x-0',
  'slide-up': 'opacity-100 translate-y-0',
  flip: 'opacity-100 rotate-0 scale-100',
  blur: 'opacity-100 blur-0',
}

const inactiveEffectClasses: Record<string, string> = {
  fade: 'opacity-0 scale-100',
  zoom: 'opacity-0 scale-110 blur-2xl',
  'slide-left': 'opacity-0 -translate-x-20',
  'slide-up': 'opacity-0 translate-y-20',
  flip: 'opacity-0 rotate-12 scale-90',
  blur: 'opacity-0 blur-2xl',
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getEffectClass = (effect: string, isActive: boolean) => {
    const baseClasses = `absolute inset-0 ${effectClasses[effect] || effectClasses.fade}`
    const stateClasses = isActive 
      ? (activeEffectClasses[effect] || activeEffectClasses.fade)
      : (inactiveEffectClasses[effect] || inactiveEffectClasses.fade)
    return `${baseClasses} ${stateClasses}`
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        
        return (
          <div
            key={index}
            className={getEffectClass(slide.effect, isActive)}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" /> */}
          </div>
        )
      })}

      {/* Navigation Arrows */}
      {/* <button
        onClick={handlePrev}
        className="absolute right-4 bottom-2  z-30 p-3 rounded-full bg-slate-950/40 text-white backdrop-blur-md border border-white/10 hover:bg-slate-950/60 transition-all duration-300 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/40 text-white backdrop-blur-md border border-white/10 hover:bg-slate-950/60 transition-all duration-300 group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button> */}

      {/* Indicator Points (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => {
          const isActive = index === currentSlide
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                isActive ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/70 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
