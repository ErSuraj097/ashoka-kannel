'use client'

import { AnimatedSection } from '@/components/animated-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I reserve a puppy',
    answer:
      'You can reserve a puppy by contacting us through our website, phone, or WhatsApp. We require a advance booking fee to reserve your puppy. Once reserved, we will keep you updated with photos and videos until your puppy is ready to join your family.',
  },
  {
    question: 'Do you provide delivery across India',
    answer:
      'Yes! We provide safe and secure delivery across India. We use verified transport partners and ensure your puppy travels in air-conditioned vehicles with proper care. Delivery charges vary based on location. We also offer door-to-door delivery for most cities.',
  },
  {
    question: 'What health guarantees do you provide',
    answer:
      'All our puppies come with a comprehensive health guarantee. This includes documentation of all vaccinations, deworming treatments, and health certificates from certified veterinarians. We also provide guidance on ongoing care and nutrition.',
  },
{
    question: 'Can I visit the kennel before purchasing',
    answer:
      'Absolutely. We welcome potential buyers to visit our kennel in Kaithal, Haryana. We recommend scheduling an appointment so we can give you proper attention and show you around. You will be able to meet our parent dogs and see the living conditions.',
  },
  {
    question: 'What age can I take the puppy home',
    answer:
      'Puppies are ready to go to their new homes at 8-12 weeks of age. This ensures they have received proper socialization with their mother and littermates, and have been adequately vaccinated and dewormed.',
  },
  {
    question: 'Do you provide post-purchase support',
    answer:
      'Yes, we provide lifetime post-purchase support! Our team is always available to answer questions about nutrition, training, health, and general care. We want to ensure your puppy grows up to be a happy and healthy companion.',
  },
  {
    question: 'What payment methods do you accept',
    answer:
      'We accept bank transfers, UPI payments, and cash (for local pickups). For out-of-town deliveries, we recommend bank transfers for security and documentation purposes.',
  },
  {
    question: 'Are the puppies registered',
    answer:
      'Our puppies come with proper documentation including vaccination records, health certificates, and breed information. While we primarily focus on quality breeding rather than show registrations, we can provide guidance on registration processes if needed.',
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about adopting your new companion
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-white rounded-2xl px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}

