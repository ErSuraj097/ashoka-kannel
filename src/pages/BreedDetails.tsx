'use client'

import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone, Mail, Heart, Shield, Activity, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { Breadcrumb } from '@/components/breadcrumb'
import { SEO } from '@/components/seo'
import { BreedPageSchema, BreadcrumbSchema } from '@/components/structured-data'
import { galleryItems } from './Gallery'
import { motion, AnimatePresence } from 'framer-motion'

const breedDetailsData: Record<
  string,
  {
    name: string
    subtitle: string
    description: string
    image: string
    temperament: string[]
    size: string
    lifespan: string
    origin: string
    suitability: string[]
    healthConsiderations: string[]
    grooming: string
    exercise: string
    training: string
    price: string
  }
> = {
  'cane-corso': {
    name: 'Cane Corso',
    subtitle: 'Italian Mastiff',
    description: 'The Cane Corso is an imposing Italian breed known for intelligence, loyalty, and strength. These majestic dogs make excellent family protectors with a calm and confident demeanor.',
      image: '/public/images/cane_corso/Cane-Corso-big.jpg',
    temperament: ['Confident', 'Intelligent', 'Protective', 'Loyal', 'Gentle', 'Calm'],
    size: '24-27 inches (60-68 cm) tall, 90-110 lbs (41-50 kg)',
    lifespan: '10-11 years',
    origin: 'Italy',
    suitability: ['Experienced Owners', 'Active Families', 'Large Homes', 'Secure Yards'],
    healthConsiderations: [
      'Hip dysplasia',
      'Elbow dysplasia',
      'Heart conditions',
      'Demodectic mange',
    ],
    grooming: 'Minimal grooming required. Short coat needs occasional brushing. Weekly brushing is sufficient.',
    exercise: 'Requires 1-2 hours of daily exercise and mental stimulation. Daily walks and play sessions recommended.',
    training: 'Intelligent and eager to please, responds well to positive reinforcement training. Early socialization is essential.',
    price: '₹35,000 - ₹60,000',
  },
  'siberian-husky': {
    name: 'Siberian Husky',
    subtitle: 'Arctic Athlete',
    description: 'Siberian Huskies are energetic, friendly dogs with striking appearance and pack mentality. Known for their beautiful eyes and incredible endurance.',
      image: '/images/s_h/s_husky2.jpg',
    temperament: ['Energetic', 'Friendly', 'Outgoing', 'Loyal', 'Mischievous', 'Intelligent'],
    size: '20-23 inches (51-60 cm) tall, 35-60 lbs (16-27 kg)',
    lifespan: '12-14 years',
    origin: 'Siberia, Russia',
    suitability: ['Active Families', 'Cold Climates', 'Experienced Owners', 'Open Spaces'],
    healthConsiderations: ['Hip dysplasia', 'Progressive retinal atrophy', 'Hypothyroidism', 'Zinc deficiency'],
    grooming: 'Regular brushing required, especially during shedding season. Heavy shedders that blow coat twice a year.',
    exercise: 'Requires 1.5-2 hours of vigorous daily exercise. Love running and cold weather. Best suited for active owners.',
    training: 'Intelligent but independent. Consistent, firm training needed from experienced owners. May be stubborn at times.',
    price: '₹25,000 - ₹45,000',
  },
  'saint-bernard': {
    name: 'Saint Bernard',
    subtitle: 'Gentle Giant',
    description: 'Saint Bernards are large, powerful dogs with gentle and patient nature. Originally bred as rescue dogs in the Alps, they are excellent family companions.',
      image: '/images/gallery/saint-bernard/saint-bernard-st.jpg',
    temperament: ['Gentle', 'Patient', 'Friendly', 'Loyal', 'Protective', 'Intelligent'],
    size: '26-35 inches (66-90 cm) tall, 120-180 lbs (55-82 kg)',
    lifespan: '8-10 years',
    origin: 'Switzerland, Alps',
    suitability: ['Families', 'Therapy Dogs', 'Calm Owners', 'Cold Climates', 'Large Homes'],
    healthConsiderations: ['Hip dysplasia', 'Elbow dysplasia', 'Heart conditions', 'Bloat', 'Entropion'],
    grooming: 'Regular brushing required. Some shedding, especially during seasonal changes. Daily brushing during heavy shedding.',
    exercise: 'Moderate exercise needed. Enjoys walks and cool weather. Not suitable for hot climates or intense exercise.',
    training: 'Intelligent and eager to please. Responds well to positive reinforcement and socialization. Can be stubborn.',
    price: '₹30,000 - ₹50,000',
  },
  // 'french-mastiff': {
  //   name: 'French Mastiff',
  //   subtitle: 'Dogue de Bordeaux',
  //   description: 'The French Mastiff, also known as Dogue de Bordeaux, is a powerful and muscular breed from France. Known for their impressive size and loyal, affectionate nature.',
  //   image: '/images/gallery/french-mastiff/french-mastiff-top.jpg',
  //   temperament: ['Protective', 'Loyal', 'Courageous', 'Affectionate', 'Calm', 'Devoted'],
  //   size: '23-27 inches (58-69 cm) tall, 90-110 lbs (41-50 kg)',
  //   lifespan: '5-8 years',
  //   origin: 'France',
  //   suitability: ['Experienced Owners', 'Families', 'Guard Dogs', 'Large Homes', 'Secure Yards'],
  //   healthConsiderations: ['Hip dysplasia', 'Heart conditions', 'Bloat', 'Skin allergies', 'Joint issues'],
  //   grooming: 'Short coat requires minimal grooming. Weekly brushing is sufficient. Regular cleaning of wrinkles needed.',
  //   exercise: 'Moderate exercise needed. Daily walks and play sessions recommended. Avoid intense exercise in hot weather.',
  //   training: 'Strong-willed but intelligent. Early socialization and consistent training essential. Responds well to positive reinforcement.',
  //   price: '₹40,000 - ₹70,000',
  // },
  // 'golden-retriever': {
  //   name: 'Golden Retriever',
  //   subtitle: 'America\'s Favorite',
  //   description: 'Golden Retrievers are one of the most popular dog breeds worldwide, known for their friendly temperament, intelligence, and beautiful golden coat.',
  //   image: '/images/banners/owner-banner.jpg',
  //   temperament: ['Friendly', 'Intelligent', 'Devoted', 'Patient', 'Trustworthy', 'Gentle'],
  //   size: '21.5-24 inches (55-61 cm) tall, 55-75 lbs (25-34 kg)',
  //   lifespan: '10-12 years',
  //   origin: 'Scotland',
  //   suitability: ['Families', 'Children', 'Active Owners', 'First-time Owners', 'Therapy Work'],
  //   healthConsiderations: ['Hip dysplasia', 'Elbow dysplasia', 'Heart conditions', 'Cancer', 'Skin allergies'],
  //   grooming: 'Regular brushing required, especially during shedding seasons. Weekly brushing recommended. Occasional bathing.',
  //   exercise: 'High energy dogs needing 1-2 hours of daily exercise. Love swimming, fetching, and outdoor activities.',
  //   training: 'Highly intelligent and eager to please. Easy to train with positive reinforcement. Excel in obedience and agility.',
  //   price: '₹25,000 - ₹50,000',
  // },
  // 'doberman': {
  //   name: 'Doberman Pinscher',
  //   subtitle: 'Elegant Guardian',
  //   description: 'Dobermans are sleek, powerful dogs known for their loyalty, intelligence, and protective nature. They excel as guard dogs and family protectors.',
  //   image: '/images/gallery/cane-corso/cane-corso-puppy.jpg',
  //   temperament: ['Loyal', 'Intelligent', 'Alert', 'Courageous', 'Energetic', 'Affectionate'],
  //   size: '24-28 inches (61-71 cm) tall, 60-100 lbs (27-45 kg)',
  //   lifespan: '10-13 years',
  //   origin: 'Germany',
  //   suitability: ['Experienced Owners', 'Active Families', 'Guard Dogs', 'Security Work', 'Large Homes'],
  //   healthConsiderations: ['Hip dysplasia', 'Heart conditions', 'Von Willebrand disease', 'Bloat', 'Thyroid issues'],
  //   grooming: 'Short coat requires minimal grooming. Weekly brushing is sufficient. Occasional bathing.',
  //   exercise: 'High energy dogs needing 1-2 hours of daily exercise. Love running, hiking, and mental stimulation activities.',
  //   training: 'Highly intelligent and trainable. Early socialization essential. Excel in obedience, protection sports, and agility.',
  //   price: '₹35,000 - ₹60,000',
  // },
}

export default function BreedDetails() {
  const { breedId } = useParams<{ breedId: string }>()
  const id = breedId ? breedId.toLowerCase() : ''
  const breed = breedDetailsData[id]
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Filter gallery items for this breed
  const breedImages = galleryItems.filter(
    (item) => item.breed === id || item.category === id
  )

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex !== null) {
      const nextIndex = (lightboxIndex - 1 + breedImages.length) % breedImages.length
      setLightboxIndex(nextIndex)
      setSelectedImage(breedImages[nextIndex].image)
    }
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex !== null) {
      const nextIndex = (lightboxIndex + 1) % breedImages.length
      setLightboxIndex(nextIndex)
      setSelectedImage(breedImages[nextIndex].image)
    }
  }

  if (!breed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Breed Not Found</h1>
          <p className="text-muted-foreground mb-8">The breed you are looking for does not exist.</p>
          <Link
            to="/breeds"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to Breeds
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background text-foreground">
      <SEO
        title={`${breed.name} Puppies for Sale in India | Ashoka Kennel`}
        description={`Adopt healthy, premium purebred ${breed.name} puppies from Ashoka Kennel. Read about size, temperament, origin, and price of ${breed.name} in India.`}
        keywords={`${breed.name} India, buy ${breed.name} puppy, ${breed.name} price in India, ${breed.name} breeder, Ashoka Kennel ${breed.name}`}
        image={breed.image}
      />
      <BreedPageSchema breed={id} />
      <BreadcrumbSchema
        items={[
          { label: 'Home', url: '/' },
          { label: 'Our Breeds', url: '/breeds' },
          { label: breed.name, url: `/breeds/${id}` },
        ]}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          {/* <Link
            to="/breeds"
            className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6"
          >
            <ChevronLeft size={20} />
            Back to Breeds
          </Link> */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                {breed.subtitle}
              </span>
              {/* <span className="hidden md:inline text-muted-foreground">•</span>
              <span className="text-accent font-bold">{breed.price}</span> */}
            </div>
            <h1 className="text-5xl font-bold mb-4">{breed.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{breed.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <AnimatedSection delay={100} className="">
              <div className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm h-fit sticky top-24">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: Activity, label: 'Size', value: breed.size },
                    { icon: Heart, label: 'Lifespan', value: breed.lifespan },
                    { icon: MapPin, label: 'Origin', value: breed.origin },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon size={14} className="text-primary" />
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          {item.label}
                        </p>
                      </div>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>

                <AnimatedButton
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="w-full"
                >
                  Inquire Now
                </AnimatedButton>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield size={16} className="text-green-500" />
                    <span>Health guarantee included</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content Side */}
            <AnimatedSection delay={200} className="md:col-span-2">
              <div className="space-y-8">
                {/* Tabs */}
                <div className="flex gap-4 border-b border-border overflow-x-auto pb-px">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'care', label: 'Care Guide' },
                    { id: 'health', label: 'Health' },
                    { id: "images", label: "Images"}
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-primary border-b-2 border-primary -mb-px'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Temperament</h2>
                      <div className="flex flex-wrap gap-3">
                        {breed.temperament.map((trait) => (
                          <span
                            key={trait}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4">Best Suited For</h2>
                      <ul className="space-y-3">
                        {breed.suitability.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="text-accent text-xl leading-none flex-shrink-0">✓</span>
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary rounded-2xl p-6">
                      <h3 className="font-bold text-lg mb-3">Why Choose a {breed.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {breed.name}s are known for their exceptional qualities and make wonderful companions
                        for the right families. With proper training, socialization, and care, they will
                        become loyal members of your family for years to come.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'care' && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Heart className="text-primary" size={24} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-4">Grooming Needs</h2>
                          <p className="text-foreground leading-relaxed">{breed.grooming}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <Activity className="text-accent" size={24} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-4">Exercise Requirements</h2>
                          <p className="text-foreground leading-relaxed">{breed.exercise}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-500/10 p-3 rounded-lg">
                          <Shield className="text-green-500" size={24} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-4">Training Tips</h2>
                          <p className="text-foreground leading-relaxed">{breed.training}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'health' && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm">
                      <h2 className="text-2xl font-bold mb-4">Health Considerations</h2>
                      <p className="text-muted-foreground mb-6">
                        While generally healthy, {breed.name}s may be prone to certain health conditions.
                        Regular veterinary care is essential.
                      </p>
                      <ul className="space-y-3 mb-6">
                        {breed.healthConsiderations.map((condition) => (
                          <li key={condition} className="flex items-start gap-3">
                            <span className="text-accent text-xl leading-none flex-shrink-0">•</span>
                            <span className="text-foreground">{condition}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        Regular veterinary checkups and preventive care are essential for the
                        health and longevity of your dog.
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <Shield className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <h3 className="font-bold text-green-800 mb-2">Our Health Guarantee</h3>
                          <p className="text-green-700 text-sm leading-relaxed">
                            All our puppies come with a comprehensive health guarantee including
                            vaccination records, health certificates, and veterinary clearance.
                            We ensure your puppy is healthy before delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'images' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h2 className="text-2xl font-bold mb-4">{breed.name} Gallery</h2>
                    {breedImages.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {breedImages.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setSelectedImage(img.image)
                              setLightboxIndex(idx)
                            }}
                            className="relative  overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300  cursor-pointer group bg-slate-900"
                          >
                            <img
                              src={img.image}
                              alt={img.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = breed.image
                              }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-white text-xs font-semibold">{img.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No gallery images found for this breed.</p>
                    )}
                  </div>
                )}

                {/* Lightbox Slideshow Modal */}
                <AnimatePresence>
                  {selectedImage && lightboxIndex !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => {
                        setSelectedImage(null)
                        setLightboxIndex(null)
                      }}
                      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm p-4"
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => {
                          setSelectedImage(null)
                          setLightboxIndex(null)
                        }}
                        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
                        aria-label="Close Lightbox"
                      >
                        <X size={24} />
                      </button>

                      {/* Slider Wrapper */}
                      <div className="relative max-w-5xl w-full flex items-center justify-center">
                        {/* Prev Button */}
                        <button
                          onClick={handlePrev}
                          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft size={28} />
                        </button>

                        {/* Image details */}
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
                            src={selectedImage}
                            alt={breedImages[lightboxIndex].title}
                            className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl bg-black"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = breed.image
                            }}
                          />
                          <div className="mt-4 text-center">
                            <h4 className="text-white font-extrabold text-lg tracking-tight">
                              {breedImages[lightboxIndex].title}
                            </h4>
                            <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-1 block">
                              {breed.name}
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

                      {/* Counter */}
                      <div className="absolute bottom-6 flex items-center gap-1.5 text-white/55 text-sm font-semibold">
                        <span>{lightboxIndex + 1}</span> / <span>{breedImages.length}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex justify-center">
        <div className="w-full max-w-6xl mx-4 md:mx-auto my-16 md:my-16 py-20 md:py-16 bg-primary text-primary-foreground rounded-3xl shadow-2xl">
          <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Ready to Bring Home a {breed.name}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us today to learn more about availability and get your questions answered.
              We are happy to help you find your perfect companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919896969810"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} />
                Call Us
              </a>
              <a
                href="mailto:info@ashokakennel.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
