'use client'

import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { Check, IndianRupee } from 'lucide-react'

interface PricingTier {
  breed: string
  price: string
  features: string[]
  note: string
}

const pricingTiers: PricingTier[] = [
  {
    breed: 'Cane Corso',
    price: '₹35,000 - ₹60,000',
    features: [
      'Pedigree documentation',
      'Vaccination records',
      'Health certificate',
      'Deworming treatments',
      'Initial food supply',
      'Training guide',
      'Lifetime support',
    ],
    note: 'Price varies based on age, lineage, and gender',
  },
  {
    breed: 'Siberian Husky',
    price: '₹25,000 - ₹45,000',
    features: [
      'Pedigree documentation',
      'Vaccination records',
      'Health certificate',
      'Deworming treatments',
      'Initial food supply',
      'Grooming guide',
      'Lifetime support',
    ],
    note: 'Price varies based on eye color and coat quality',
  },
  {
    breed: 'Saint Bernard',
    price: '₹30,000 - ₹50,000',
    features: [
      'Pedigree documentation',
      'Vaccination records',
      'Health certificate',
      'Deworming treatments',
      'Initial food supply',
      'Care guide',
      'Lifetime support',
    ],
    note: 'Price varies based on size and markings',
  },
]

export function PricingInfo() {
  return (
    <section className="py-16 md:py-16 bg-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in honest pricing with no hidden costs. All our puppies come with complete documentation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <AnimatedSection key={tier.breed} delay={idx * 100} className="">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.breed}</h3>
                  <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary">
                    <IndianRupee size={28} />
                    {tier.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground text-center mb-6 italic">
                  {tier.note}
                </p>

                <AnimatedButton
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="w-full"
                >
                  Inquire Now
                </AnimatedButton>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">What is Included in the Price</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              {[
                {
                  title: 'Documentation',
                  items: ['Pedigree certificate', 'Vaccination card', 'Health clearance'],
                },
                {
                  title: 'Health Guarantee',
                  items: ['Veterinary checkup', 'Deworming treatments', 'Initial vaccinations'],
                },
                {
                  title: 'Support',
                  items: ['Food starter pack', 'Care guide book', 'Lifetime WhatsApp support'],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="font-bold text-primary mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

