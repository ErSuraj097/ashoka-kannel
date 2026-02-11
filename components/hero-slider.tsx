'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Slide {
  image: string
  title: string
  subtitle: string
  effect: 'fade' | 'zoom' | 'slide-left' | 'slide-up' | 'flip' | 'blur'
  photographer?: string
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80',
    title: 'Ashoka Kennel',
    subtitle: 'Premium Quality Dogs',
    effect: 'fade',
    photographer: 'Unsplash',
  },
  {
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1920&q=80',
    title: 'Powerful Breeds',
    subtitle: 'Strong & Loyal Companions',
    effect: 'zoom',
    photographer: 'Unsplash',
  },
  {
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1920&q=80',
    title: 'Champion Lineage',
    subtitle: 'Best Bloodlines in India',
    effect: 'slide-left',
    photographer: 'Unsplash',
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1920&q=80',
    title: 'Family Raised',
    subtitle: 'Loved from Day One',
    effect: 'slide-up',
    photographer: 'Unsplash',
  },
  {
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=1920&q=80',
    title: 'Healthy Puppies',
    subtitle: 'Vaccinated & Dewormed',
    effect: 'blur',
    photographer: 'Unsplash',
  },
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
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection('next')
      setCurrentSlide((prev: number) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // const goToSlide = (index: number) => {
  //   setDirection(index > currentSlide ? 'next' : 'prev')
  //   setCurrentSlide(index)
  //   setIsAutoPlaying(false)
  //   setTimeout(() => setIsAutoPlaying(true), 5000)
  // }

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
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className=" h-[90vh]"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
          </div>
        )
      })}
{/* 
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <button
          onClick={() => {
            setDirection('prev')
            setCurrentSlide((prev: number) => (prev - 1 + slides.length) % slides.length)
          }}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <button
          onClick={() => {
            setDirection('next')
            setCurrentSlide((prev: number) => (prev + 1) % slides.length)
          }}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

