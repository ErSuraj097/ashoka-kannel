'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { Breadcrumb } from '@/components/breadcrumb'

export default function BreedsPage() {
  const breeds = [
    {
      id: 'cane-corso',
      name: 'Cane Corso',
      subtitle: 'Italian Mastiff',
      description:
        'The Cane Corso is an imposing Italian breed known for its muscular build, intelligence, and loyalty. These dogs are excellent family protectors with a calm and confident demeanor.',
      characteristics: ['Powerful', 'Intelligent', 'Loyal', 'Protective', 'Gentle with Family'],
      image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800&q=80',
      history:
        'Originating from Italy, the Cane Corso descends from Roman war dogs. The breed was nearly extinct but has been revived to become a beloved family companion.',
    },
    {
      id: 'siberian-husky',
      name: 'Siberian Husky',
      subtitle: 'Arctic Athlete',
      description:
        'Siberian Huskies are energetic, friendly, and striking dogs bred for sledding in harsh Arctic conditions. Known for their beautiful eyes and pack mentality, they are excellent for active families.',
      characteristics: ['Energetic', 'Friendly', 'Intelligent', 'Athletic', 'Pack-Oriented'],
      image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&q=80',
      history:
        'Bred by the Chukchi people of Siberia for sledding and companionship, Huskies have been part of Arctic expeditions and remain beloved family dogs worldwide.',
    },
    {
      id: 'saint-bernard',
      name: 'Saint Bernard',
      subtitle: 'Gentle Giant',
      description:
        'Saint Bernards are large, powerful dogs with a gentle and patient nature. Originally bred as rescue dogs in the Alps, they are excellent family companions and therapy dogs.',
      characteristics: ['Gentle', 'Patient', 'Loyal', 'Rescue-Oriented', 'Family-Friendly'],
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80',
      history:
        'Named after the Great St. Bernard Pass in the Alps, these dogs were bred by monks to rescue travelers. Their rescue instinct and gentle nature make them perfect family dogs.',
    },
    {
      id: 'french-mastiff',
      name: 'French Mastiff',
      subtitle: 'Dogue de Bordeaux',
      description:
        'The French Mastiff, also known as Dogue de Bordeaux, is a powerful and muscular breed from France. Known for their impressive size and loyal, affectionate nature with their families.',
      characteristics: ['Protective', 'Loyal', 'Courageous', 'Affectionate', 'Calm'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
      history:
        'One of the oldest French breeds, the Dogue de Bordeaux has been used for guarding, hunting, and as a war dog. Despite their intimidating appearance, they are gentle giants at heart.',
    },
    {
      id: 'golden-retriever',
      name: 'Golden Retriever',
      subtitle: 'America\'s Favorite',
      description:
        'Golden Retrievers are one of the most popular dog breeds worldwide, known for their friendly temperament, intelligence, and beautiful golden coat. Excellent family pets and working dogs.',
      characteristics: ['Friendly', 'Intelligent', 'Devoted', 'Patient', 'Trustworthy'],
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80',
      history:
        'Developed in Scotland in the 19th century, Golden Retrievers were bred for retrieving game from water and land. They excel as service dogs, therapy dogs, and loving family companions.',
    },
    {
      id: 'doberman',
      name: 'Doberman Pinscher',
      subtitle: 'Elegant Guardian',
      description:
        'Dobermans are sleek, powerful dogs known for their loyalty, intelligence, and protective nature. They excel as guard dogs and family protectors while being affectionate companions.',
      characteristics: ['Loyal', 'Intelligent', 'Alert', 'Courageous', 'Energetic'],
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80',
      history:
        'Developed in Germany by Karl Friedrich Louis Dobermann in the 1890s, this breed was created to be a versatile working dog. Today, they serve as excellent guard dogs, police dogs, and loyal family pets.',
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb/>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Breeds</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover our carefully selected dog breeds, each with their unique characteristics
              and qualities. All our dogs are bred with love and care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Breeds Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {breeds.map((breed, idx) => (
              <AnimatedSection 
                key={breed.id} 
                delay={idx * 100} 
                direction={idx % 2 === 0 ? 'left' : 'right'}
                className=""
              >
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  {/* Image Side */}
                  <div
                    className={`relative h-96 overflow-hidden ${
                      idx % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <Image
                      src={breed.image}
                      alt={breed.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  </div>

                  {/* Content Side */}
                  <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="p-8 md:p-12">
                      <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-widest">
                        {breed.subtitle}
                      </p>
                      <h2 className="text-4xl font-bold mb-4 text-primary">{breed.name}</h2>

                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {breed.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Key Characteristics</h3>
                        <div className="flex flex-wrap gap-2">
                          {breed.characteristics.map((char) => (
                            <span
                              key={char}
                              className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* <p className="text-muted-foreground mb-8 leading-relaxed">
                        <strong>History:</strong> {breed.history}
                      </p> */}

                      <AnimatedButton
                        variant="primary"
                        size="lg"
                        href={`/breeds/${breed.id}`}
                      >
                        Learn More <ArrowRight size={20} />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground rounded-3xl mx-4 md:mx-0 mt-16">
        <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl font-bold">Interested in a Specific Breed?</h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us today to discuss availability and find your perfect companion.
          </p>
          <AnimatedButton
            variant="primary"
            size="lg"
            href="/contact"
            className="bg-white  text-red-500 text-primary hover:bg-white/90"
          >
            Contact Us <ArrowRight size={20} />
          </AnimatedButton>
        </AnimatedSection>
      </section>
        </div>
        
      </section>

      
    </div>
  )
}
