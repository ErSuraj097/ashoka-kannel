export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'Ashoka Kennel',
    description: 'Premium dog breeder in India specializing in Cane Corso, Siberian Husky, and Saint Bernard puppies',
    url: 'https://ashokakennel.com',
    logo: 'https://ashokakennel.com/logo.png',
    image: 'https://ashokakennel.com/og-image.jpg',
    telephone: '+919896969810',
    email: 'info@ashokakennel.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NH152, Opp. Jio Petrol Pump, Village Keorak',
      addressLocality: 'Kaithal',
      addressRegion: 'Haryana',
      postalCode: '136027',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '₹25,000 - ₹60,000',
    paymentAccepted: 'Cash, Bank Transfer, UPI',
    currenciesAccepted: 'INR',
    areaServed: {
      '@type': 'Place',
      name: 'India',
    },
    sameAs: [
      'https://www.facebook.com/ashokakennel',
      'https://www.instagram.com/ashokakennel',
      'https://wa.me/919896969810',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreedPageSchema({ breed }: { breed: string }) {
  const breedInfo: Record<string, any> = {
    'cane-corso': {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Cane Corso Puppy',
      description: 'Premium Cane Corso puppies from verified breeders in India',
      brand: {
        '@type': 'Brand',
        name: 'Ashoka Kennel',
      },
      category: 'Pets',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        priceRange: '₹35,000 - ₹60,000',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Ashoka Kennel',
        },
      },
    },
    'siberian-husky': {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Siberian Husky Puppy',
      description: 'Premium Siberian Husky puppies from verified breeders in India',
      brand: {
        '@type': 'Brand',
        name: 'Ashoka Kennel',
      },
      category: 'Pets',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        priceRange: '₹25,000 - ₹45,000',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Ashoka Kennel',
        },
      },
    },
    'saint-bernard': {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Saint Bernard Puppy',
      description: 'Premium Saint Bernard puppies from verified breeders in India',
      brand: {
        '@type': 'Brand',
        name: 'Ashoka Kennel',
      },
      category: 'Pets',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        priceRange: '₹30,000 - ₹50,000',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Ashoka Kennel',
        },
      },
    },
  }

  const schema = breedInfo[breed]
  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { label: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://ashokakennel.com${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema() {
  const faqs = [
    {
      question: 'How do I reserve a puppy',
      answer: 'You can reserve a puppy by contacting us through our website, phone, or WhatsApp.',
    },
    {
      question: 'Do you provide delivery across India',
      answer: 'Yes, we provide safe and secure delivery across India.',
    },
    {
      question: 'What health guarantees do you provide',
      answer: 'All our puppies come with a comprehensive health guarantee including documentation.',
    },
    {
      question: 'Can I visit the kennel before purchasing',
      answer: 'Absolutely, we welcome potential buyers to visit our kennel in Kaithal, Haryana.',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

