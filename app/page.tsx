'use client'

import {
  ArrowRight,
  Sparkles,
  Award,
  Heart,
  Truck,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { HeroSlider } from '@/components/hero-slider'
import { Testimonials } from '@/components/testimonials'
import { PricingInfo } from '@/components/pricing-info'
import { DeliveryInfo } from '@/components/delivery-info'

export default function Home() {
  const breeds = [
    {
      name: 'Cane Corso',
      subtitle: 'Italian Mastiff',
      description: 'Powerful and loyal companions',
      link: '/breeds/cane-corso',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    },
    {
      name: 'Siberian Husky',
      subtitle: 'Arctic Warriors',
      description: 'Energetic and beautiful dogs',
      link: '/breeds/siberian-husky',
      image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&q=80',
    },
    {
      name: 'Saint Bernard',
      subtitle: 'Gentle Giants',
      description: 'Known for rescue abilities',
      link: '/breeds/saint-bernard',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80',
    },
    {
      name: 'French Mastiff',
      subtitle: 'Powerful Guardian',
      description: 'Impressive size with loyalty',
      link: '/breeds/french-mastiff',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80',
    },
    {
      name: 'Golden Retriever',
      subtitle: "America's Favorite",
      description: 'Friendly family companions',
      link: '/breeds/golden-retriever',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80',
    },
    {
      name: 'Doberman',
      subtitle: 'Elegant Guardian',
      description: 'Sleek and powerful dogs',
      link: '/breeds/doberman',
      image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&q=80',
    },
  ]

  const features = [
    { title: '15+ Years Experience', description: 'Professional breeders since 2011', icon: Award },
    { title: 'Quality Guarantee', description: 'Health, temperament, genetics', icon: ShieldCheck },
    { title: 'Pan-India Delivery', description: 'Safe nationwide delivery', icon: Truck },
    { title: 'Family Raised', description: 'Raised with love and care', icon: Heart },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <HeroSlider />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0}>
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
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

            {/* Right column - can add hero image/video/form later */}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-20 -mt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-white rounded-md py-10 px-6">
              Welcome to Ashoka Kennel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
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
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Call Us</p>
                    <p className="font-bold text-lg">+91 98969 69810</p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email Us</p>
                    <p className="font-bold text-lg">info@ashokakennel.com</p>
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

      {/* OUR BREEDS */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Breeds</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully bred dogs with exceptional lineage
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {breeds.map((breed, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <Link href={breed.link}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={breed.image}
                        alt={breed.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
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
                        Learn More <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PricingInfo />
      <DeliveryInfo />
      <Testimonials />

      {/* Optional strong final CTA - uncomment if desired */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <AnimatedSection className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Find Your Perfect Companion?</h2>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Contact us today to discuss which premium puppy is perfect for your family.
              </p>
              <div className="flex justify-center pt-6">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold shadow-lg px-10"
                >
                  Get in Touch <ArrowRight size={20} className="ml-2" />
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}
    </div>
  )
}