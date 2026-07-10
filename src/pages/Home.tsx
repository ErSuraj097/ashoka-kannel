import { useRef, useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  Heart,
  Truck,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'

import { HeroSlider } from '@/components/hero-slider'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { SEO } from '@/components/seo'
import { OrganizationSchema, FAQPageSchema } from '@/components/structured-data'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + arrivals.length) % arrivals.length : null))
    }
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % arrivals.length : null))
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    let isHovered = false

    const handleMouseEnter = () => {
      isHovered = true
    }
    const handleMouseLeave = () => {
      isHovered = false
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    const interval = setInterval(() => {
      if (isHovered || !container) return

      const isEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
      if (isEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }, 3000)

    return () => {
      clearInterval(interval)
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const arrivals = [
    {
      name: 'Mr. Abhishek Pareek',
      location: 'Bhopal',
      image: '/images/testimonials/husky-vikram-chandigarh.jpg',
    },
   
      {
      name: 'Miss. Aishwarya Pathi',
      location: 'Hyderabad',
      image: '/images/testimonials/cane-corso-sneha-hyderabad.jpg',
    },  
     {
      name: 'Mr. Zain Kidwai',
      location: 'Lucknow',
      image: '/images/testimonials/client-zain-lucknow.jpg',
    },
 
    {
      name: 'Mr. Chichi Malya',
      location: 'Surat',
      image: '/images/testimonials/husky-priya-mumbai.jpg',
    },
    {
      name: 'Mr. Ajmende Nagar',
      location: 'Noida',
      image: '/images/testimonials/cane-corso-rajesh-delhi.jpg',
    },
    {
      name: 'Mr. Saurabh Verma',
      location: 'Narwana',
      image: '/images/testimonials/saint-bernard-amit-ahmedabad.jpg',
    },
    {
      name: 'Mr. Angshumoli Roy',
      location: 'Kolkata',
      image: '/images/testimonials/saint-bernard-anjali-pune.jpg',
    },
  ]

  const breeds = [
    {
      id: 'cane-corso',
      name: 'Cane Corso',
      subtitle: 'Italian Mastiff',
      description: 'Powerful and loyal companions',
      link: '/breeds/cane-corso',
      image: '/images/cane_corso/Cane-Corso-big.jpg',
    },
    {
      id: 'siberian-husky',
      name: 'Siberian Husky',
      subtitle: 'Arctic Warriors',
      description: 'Energetic and beautiful dogs',
      link: '/breeds/siberian-husky',
      image: '/images/s_h/s_husky2.jpg',
    },
    {
      id: 'saint-bernard',
      name: 'Saint Bernard',
      subtitle: 'Gentle Giants',
      description: 'Known for rescue abilities',
      link: '/breeds/saint-bernard',
      image: '/images/gallery/saint-bernard/saint-bernard-st.jpg',
    },
  ]

  const features = [
    { title: '15+ Years Experience', description: 'Professional breeders since 2011', icon: Award },
    { title: 'Quality Guarantee', description: 'Health, temperament, genetics', icon: ShieldCheck },
    { title: 'Pan-India Delivery', description: 'Safe nationwide delivery', icon: Truck },
    { title: 'Family Raised', description: 'Raised with love and care', icon: Heart },
  ]

  return (
    <>
      <SEO
        title="Ashoka Kennel - Premium Dog Breeder in India | Cane Corso, Husky, St. Bernard"
        description="Ashoka Kennel is the leading certified professional dog breeder in India since 2011. Offering top-quality Cane Corso, Siberian Husky, and Saint Bernard puppies with safe pan-India delivery."
        keywords="dog breeder India, buy Cane Corso India, Siberian Husky puppies, Saint Bernard breeder, premium puppies India, Kaithal Haryana kennel, Ashoka Kennel, certified dog breeder"
      />
      <OrganizationSchema />
      <FAQPageSchema />

      {/* HERO */}
      <section className="relative h-[40vh] md:h-[85vh] flex items-center overflow-hidden">
        <HeroSlider />

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0}>
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Sparkles size={18} className="text-accent" />
                  <span className="text-sm font-semibold text-accent">Premium Quality Dogs</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
                  Welcome to <br />
                  <span
                    className="
                      block
                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r from-white via-accent to-white
                      drop-shadow-[0_8px_30px_rgba(255,255,255,0.35)]
                      [text-shadow:_0_4px_20px_rgba(0,0,0,0.8)]
                    "
                  >
                    Ashoka Kennel
                  </span>
                </h1>

                <p
                  className="
                    mt-6
                    text-xl md:text-2xl
                    font-bold
                    text-white
                    leading-relaxed
                    max-w-2xl
                    drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]
                  "
                >
                  Premium Dog Breeder in India
                  <span className="text-accent font-extrabold"> Since 2011</span>, <br />
                  Based in <span className="font-extrabold underline decoration-accent/60">Kaithal, Haryana</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <AnimatedButton variant="primary" size="lg" href="/breeds">
                    Explore Our Dogs <ArrowRight size={20} />
                  </AnimatedButton>

                  <AnimatedButton
                    variant="outline"
                    size="lg"
                    href="/contact"
                    className="border-white text-white hover:bg-white hover:text-slate-900"
                  >
                    Contact Us
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div> */}
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-20  pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mt-10 py-4 px-6 md">
              Welcome to Ashoka Kennel
            </h2>
            <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto ">
              Ashoka Kennel is among the top dog breeders in India, known for premium quality Cane Corso (Italian Mastiff), Siberian Husky, Saint Bernard, and more.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full text-center border border-border/50">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <feature.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="mt-12">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Call Us</p>
                    <a href="tel:+919896969810" className="font-bold text-lg hover:underline">+91 98969 69810</a>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email Us</p>
                    <a href="mailto:info@ashokakennel.com" className="font-bold text-lg hover:underline">info@ashokakennel.com</a>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Visit Us</p>
                    <p className="font-bold text-lg">Kaithal, Haryana</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* QUICK BREEDS SPOTLIGHT */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Top Breeds</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exceptional quality puppies raised with premium healthcare and genetic lineage
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {breeds.map((breed, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <a href={breed.link}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer border border-border/40">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={breed.image}
                        alt={breed.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-semibold text-sm bg-primary/80 px-3 py-1 rounded-full">
                          {breed.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {breed.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{breed.description}</p>
                      <div className="inline-flex items-center gap-2 text-primary font-semibold">
                        View Details <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT ARRIVALS (SLIDER) */}
      <section className="py-20 bg-slate-50 text-black overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col mb-12 gap-4">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black">Recent Arrivals</h2>
              
              {/* Slider Controls */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => scroll('left')}
                  className="p-3 rounded-full bg-orange-700 border border-orange-700 hover:bg-slate-700 hover:border-slate-600 transition-all text-white shadow-lg"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-3 rounded-full bg-orange-700 border border-orange-700 hover:bg-slate-700 hover:border-slate-600 transition-all text-white shadow-lg"
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <p className="text-sm md:text-xl text-slate-400 max-w-2xl">
              Our premium puppies happily delivered to their new families across India
            </p>
          </div>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {arrivals.map((arrival, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="flex-shrink-0 w-[380px] snap-start group cursor-pointer"
              >
                <div className="relative overflow-hidden  ">
                  <img
                    src={arrival.image}
                    alt={arrival.name}
                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/gallery/french-mastiff/french-mastiff-top.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent  group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Caption Details */}
                  <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                    <h4 className="text-white font-bold text-lg tracking-tight leading-tight group-hover:text-accent transition-colors duration-200">
                      {arrival.name}
                    </h4>
                    <span className="text-slate-400 text-sm mt-1 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      From: {arrival.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX / SLIDESHOW MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Slider Content Wrapper */}
              <div className="relative max-w-5xl w-full flex items-center justify-center">
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Image Details */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center max-w-[90vw]"
                >
                  <img
                    src={arrivals[lightboxIndex].image}
                    alt={arrivals[lightboxIndex].name}
                    className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl bg-black"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/gallery/french-mastiff/french-mastiff-top.jpg'
                    }}
                  />

                  {/* Details Footer */}
                  <div className="mt-4 text-center">
                    <h4 className="text-white font-extrabold text-lg tracking-tight">
                      {arrivals[lightboxIndex].name}
                    </h4>
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-1 block">
                      Delivered to {arrivals[lightboxIndex].location}
                    </span>
                  </div>
                </motion.div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
                  aria-label="Next Image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Indicator Dot Counters */}
              <div className="absolute bottom-6 flex items-center gap-1.5 text-white/55 text-sm font-semibold">
                <span>{lightboxIndex + 1}</span> / <span>{arrivals.length}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* QUICK CTA */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
            <AnimatedSection className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Perfect Companion?</h2>
              <p className="text-lg md:text-lg opacity-90 max-w-3xl mx-auto">
                Contact us today to discuss which premium puppy is perfect for your family.
              </p>
              <div className="flex justify-center pt-6">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold shadow-lg px-10"
                >
                  Contact Us Now <ArrowRight size={20} className="ml-2" />
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
