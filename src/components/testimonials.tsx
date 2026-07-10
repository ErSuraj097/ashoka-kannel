'use client'

import { AnimatedSection } from '@/components/animated-section'
import { Star, Quote, ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface Testimonial {
  id: number
  name: string
  location: string
  breed: string
  rating: number
  text: string
  date: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    breed: 'Cane Corso',
    rating: 5,
    text: 'Got our Cane Corso puppy from Ashoka Kennel last year. The team was extremely professional and provided all health records. Our dog is healthy, well-trained, and a beloved member of our family. Highly recommend!',
    date: 'December 2024',
    photo: '/images/testimonials/cane-corso-rajesh-delhi.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai',
    breed: 'Siberian Husky',
    rating: 5,
    text: 'I was nervous about getting a puppy online, but Ashoka Kennel made the process seamless. They sent regular updates and photos. My Husky arrived healthy and happy. The delivery was prompt and professional.',
    date: 'November 2024',
    photo: '/images/testimonials/husky-priya-mumbai.jpg',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad',
    breed: 'Saint Bernard',
    rating: 5,
    text: 'We got our Saint Bernard puppy for our children. The team at Ashoka Kennel was patient and answered all our questions. They helped us choose the right breed for our family. Our gentle giant is wonderful with the kids!',
    date: 'October 2024',
    photo: '/images/testimonials/saint-bernard-amit-ahmedabad.jpg',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    breed: 'Cane Corso',
    rating: 5,
    text: 'Excellent kennel with genuine care for the dogs. Visited their facility and was impressed by the hygiene and living conditions. Our Corso is now 2 years old and still as healthy as when we got him.',
    date: 'September 2024',
    photo: '/images/testimonials/cane-corso-sneha-hyderabad.jpg',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Chandigarh',
    breed: 'Siberian Husky',
    rating: 5,
    text: 'Best decision was getting our Husky from Ashoka Kennel. They provided detailed guidance on grooming and exercise needs. The post-purchase support has been amazing. Will definitely recommend!',
    date: 'August 2024',
    photo: '/images/testimonials/husky-vikram-chandigarh.jpg',
  },
  {
    id: 6,
    name: 'Anjali Mehta',
    location: 'Pune',
    breed: 'Saint Bernard',
    rating: 5,
    text: 'Our Saint Bernard is the sweetest dog ever! The team helped us understand the breed requirements. They even helped with initial training tips. Great experience overall.',
    date: 'July 2024',
    photo: '/images/testimonials/saint-bernard-anjali-pune.jpg',
  },
]

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll every 3 seconds if not hovered
  useEffect(() => {
    if (!carouselRef.current || isHovered) return

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = 400
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  // Manual scroll function
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const scrollAmount = 400
    carouselRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + arrows */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Real stories from families who found their perfect companions at Ashoka Kennel
              </p>
            </div>

            <div className="flex justify-center md:justify-end gap-3">
              <button
                onClick={() => scroll('left')}
                className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-2 pb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="group h-full bg-white/90 backdrop-blur rounded-3xl p-8 border border-border/50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <Quote size={18} className="text-primary/10 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                <p className="italic mb-6">"{t.text}"</p>

                <div className="flex items-center gap-4 border-t border-border/60 pt-4 mt-auto">
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.location} - {t.breed}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Delivery CTA */}
        <AnimatedSection delay={300} className="mt-12 text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Need Custom Delivery</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us for delivery to remote locations or special requirements
            </p>
            <a
              href="tel:+919896969810"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone size={20} />
              Call for Custom Quote
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
