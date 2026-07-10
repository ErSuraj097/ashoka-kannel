'use client'

import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { Breadcrumb } from '@/components/breadcrumb'
import { SEO } from '@/components/seo'
import { BreadcrumbSchema } from '@/components/structured-data'

export default function Breeds() {
  const breeds = [
    {
      id: 'cane-corso',
      name: 'Cane Corso',
      subtitle: 'Italian Mastiff',
      description:
        'The Cane Corso is an imposing Italian breed known for its muscular build, intelligence, and loyalty. These dogs are excellent family protectors with a calm and confident demeanor.',
      characteristics: ['Powerful', 'Intelligent', 'Loyal', 'Protective', 'Gentle with Family'],
      image: '/public/images/cane_corso/Cane-Corso-big.jpg',
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
      image: '/images/s_h/s_husky2.jpg',
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
      image: '/images/gallery/saint-bernard/saint-bernard-st.jpg',
      history:
        'Named after the Great St. Bernard Pass in the Alps, these dogs were bred by monks to rescue travelers. Their rescue instinct and gentle nature make them perfect family dogs.',
    },
    // {
    //   id: 'french-mastiff',
    //   name: 'French Mastiff',
    //   subtitle: 'Dogue de Bordeaux',
    //   description:
    //     'The French Mastiff, also known as Dogue de Bordeaux, is a powerful and muscular breed from France. Known for their impressive size and loyal, affectionate nature with their families.',
    //   characteristics: ['Protective', 'Loyal', 'Courageous', 'Affectionate', 'Calm'],
    //   image: '/images/gallery/french-mastiff/french-mastiff-top.jpg',
    //   history:
    //     'One of the oldest French breeds, the Dogue de Bordeaux has been used for guarding, hunting, and as a war dog. Despite their intimidating appearance, they are gentle giants at heart.',
    // },
    // {
    //   id: 'golden-retriever',
    //   name: 'Golden Retriever',
    //   subtitle: "Golden Companion",
    //   description:
    //     'Golden Retrievers are one of the most popular dog breeds worldwide, known for their friendly temperament, intelligence, and beautiful golden coat. Excellent family pets and working dogs.',
    //   characteristics: ['Friendly', 'Intelligent', 'Devoted', 'Patient', 'Trustworthy'],
    //   image: '/images/banners/owner-banner.jpg',
    //   history:
    //     'Developed in Scotland in the 19th century, Golden Retrievers were bred for retrieving game from water and land. They excel as service dogs, therapy dogs, and loving family companions.',
    // },
    // {
    //   id: 'doberman',
    //   name: 'Doberman Pinscher',
    //   subtitle: 'Elegant Guardian',
    //   description:
    //     'Dobermans are sleek, powerful dogs known for their loyalty, intelligence, and protective nature. They excel as guard dogs and family protectors while being affectionate companions.',
    //   characteristics: ['Loyal', 'Intelligent', 'Alert', 'Courageous', 'Energetic'],
    //   image: '/images/gallery/cane-corso/cane-corso-puppy.jpg',
    //   history:
    //     'Developed in Germany by Karl Friedrich Louis Dobermann in the 1890s, this breed was created to be a versatile working dog. Today, they serve as excellent guard jobs, police jobs, and loyal family pets.',
    // },
  ]

  return (
    <div className="bg-background text-foreground">
      <SEO
        title="Premium Dog Breeds in India - Cane Corso, Husky, St. Bernard | Ashoka Kennel"
        description="Explore the best selection of premium dog breeds in India. Certified breeder of healthy, purebred Cane Corso, Siberian Husky, Saint Bernard, and more."
        keywords="dog breeds India, buy Cane Corso India, buy Siberian Husky, Saint Bernard price India, premium puppies, French Mastiff India, Doberman, Golden Retriever"
      />
      <BreadcrumbSchema
        items={[
          { label: 'Home', url: '/' },
          { label: 'Our Breeds', url: '/breeds' },
        ]}
      />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
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
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border/40">
                  {/* Image Side */}
                  <div
                    className={`relative h-full overflow-hidden ${
                      idx % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" /> */}
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
          <section className="py-10 bg-primary text-primary-foreground rounded-3xl mx-4 md:mx-0 mt-16">
            <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
              <h2 className="text-4xl font-bold">Interested in a Specific Breed?</h2>
              <p className="text-lg text-primary-foreground/90">
                Contact us today to discuss availability and find your perfect companion.
              </p>
              <AnimatedButton
                variant="primary"
                size="lg"
                href="/contact"
                className="bg-white text-red-500 text-primary hover:bg-white/90"
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
