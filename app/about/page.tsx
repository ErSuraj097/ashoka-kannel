'use client'

import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { Breadcrumb } from '@/components/breadcrumb'
import { FAQ } from '@/components/faq'
import { Award, Users, MapPin, Heart, Shield, Clock, Star, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    {
      number: '15+',
      label: 'Years of Excellence',
      description: 'Dedicated to responsible breeding since 2011',
    },
    {
      number: '1000+',
      label: 'Happy Families',
      description: 'Satisfied customers across pan-India',
    },
    {
      number: '3',
      label: 'Premium Breeds',
      description: 'Cane Corso, Siberian Husky, Saint Bernard',
    },
    {
      number: '5000+',
      label: 'Deliveries',
      description: 'Safe and happy deliveries across India',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Love and Care',
      description: 'Every dog is bred and raised with utmost love and personal attention from birth.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We prioritize quality over quantity, ensuring only the best dogs are bred.',
    },
    {
      icon: Users,
      title: 'Family Focus',
      description: 'All our dogs are family-raised with extensive socialization and training.',
    },
    {
      icon: MapPin,
      title: 'Pan-India Service',
      description: 'We safely deliver dogs across India with proper care and health guarantees.',
    },
    {
      icon: Shield,
      title: 'Health Priority',
      description: 'Rigorous health screening and genetic testing for all our breeding dogs.',
    },
    {
      icon: Clock,
      title: 'Lifetime Support',
      description: 'Our relationship with you does not end at delivery. We offer lifetime support.',
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Ashoka Kennel</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Dedicated to breeding quality dogs with exceptional temperament, health, and pedigree
              for families across India since 2011.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0} className="">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ashoka Kennel was established in 2011 with a passion for breeding healthy,
                  well-tempered dogs. What started as a small family venture has grown into a
                  trusted name in dog breeding across India.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission has always been simple: to provide families with exceptional
                  companions that are not only beautiful but also healthy and emotionally balanced.
                  Every dog bred at Ashoka Kennel is born out of meticulous planning and genuine
                  love for the breed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in responsible breeding practices, which includes rigorous health
                  screening, genetic testing, and ensuring proper socialization from birth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} className="">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl h-96 flex items-center justify-center">
                {/* <div className="text-8xl">🏡</div> */}
                <img src="/owner-banner.jpg" alt="" />

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognized across India for breeding quality dogs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Ashoka Kennel
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Breeding Philosophy */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center">Our Breeding Philosophy</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-primary">Health First</h3>
                <ul className="space-y-4">
                  {[
                    'Rigorous health screening before breeding',
                    'Genetic testing to prevent hereditary issues',
                    'Regular veterinary check-ups',
                    'Vaccination and deworming protocols',
                    'Proper nutrition for mother and puppies',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-primary">Socialization and Training</h3>
                <ul className="space-y-4">
                  {[
                    'Family-raised puppies from day one',
                    'Early exposure to various environments',
                    'Basic obedience training',
                    'Hand-selected families for placement',
                    'Ongoing support and guidance',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA */}
      {/* CTA */}
<section className="flex justify-center">
  <div className="
    w-full
    max-w-6xl
    mx-4 md:mx-auto
    my-16 md:my-20
    py-16
    bg-primary
    text-primary-foreground
    rounded-3xl
    shadow-2xl
  ">
    <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Join Our Family
      </h2>

      <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
        Experience the joy of a well-bred, healthy companion from Ashoka Kennel.
      </p>

      <AnimatedButton
        variant="primary"
        size="lg"
        href="/contact"
        className="
          bg-white
          text-primary
          font-bold
          px-8 py-4
          rounded-xl
          shadow-lg
          text-red-500
          hover:bg-white/90
          hover:scale-105
          transition-all duration-300
        "
      >
        Get In Touch
      </AnimatedButton>
    </AnimatedSection>
  </div>
</section>

    </div>
  )
}

