import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle, Dog, HelpCircle, Home, Heart, ClipboardList, Truck } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { SEO } from '@/components/seo'
import { BreadcrumbSchema } from '@/components/structured-data'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    breed: 'cane-corso',
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      // Simulate Formspree submission / fallback demo
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '', breed: 'cane-corso' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      details: ['+91 99530 02000', '+91 98969 69810'],
      link: 'tel:+919896969810',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      details: ['info@ashokakennel.com', 'chawla@ashokakennel.com'],
      link: 'mailto:info@ashokakennel.com',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Address',
      details: ['NH152, Opp. Jio Petrol Pump', 'Village Keorak Kaithal, Haryana 136027'],
      link: 'https://maps.google.com/?q=NH152+Kaithal+Haryana',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Hours',
      details: ['Mon - Sun: 9:00 AM - 6:00 PM', 'Available for appointments'],
      link: '#',
    },
  ]

  return (
    <div className="bg-background text-foreground">
      <SEO
        title="Contact Ashoka Kennel - Certified Dog Breeders in Kaithal Haryana"
        description="Get in touch with Ashoka Kennel. Contact details, phone numbers, location address, and inquiry form for premium Cane Corso, Husky, and Saint Bernard puppies."
        keywords="contact Ashoka Kennel, dog breeder phone number, Ashoka Kennel location, Kaithal Haryana breeder contact"
      />
      <BreadcrumbSchema
        items={[
          { label: 'Home', url: '/' },
          { label: 'Contact', url: '/contact' },
        ]}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Have questions about our dogs? Want to inquire about availability? We would love to hear
              from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="">
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full text-center">
                    <div className="text-accent mb-4 flex justify-center">{info.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection delay={0} className="">
              <div className="bg-white border border-border/40 rounded-2xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>Thank you for your message. We will get back to you soon.</span>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  {/* Breed Interest */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Interested Breed</label>
                    <select
                      name="breed"
                      value={formData.breed}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                    >
                      <option value="cane-corso">Cane Corso</option>
                      <option value="siberian-husky">Siberian Husky</option>
                      <option value="saint-bernard">Saint Bernard</option>
                      <option value="no-preference">No Preference</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interest, any questions you have, or preferred timeline..."
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info Side */}
            <AnimatedSection delay={200} className="">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Contact Us</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: <Dog className="w-6 h-6 text-primary" />, text: 'Inquire about available puppies and upcoming litters' },
                      { icon: <HelpCircle className="w-6 h-6 text-primary" />, text: 'Ask questions about breed characteristics and care' },
                      { icon: <Home className="w-6 h-6 text-primary" />, text: 'Schedule a visit to meet our dogs in person' },
                      { icon: <Heart className="w-6 h-6 text-primary" />, text: 'Get post-purchase support and expert advice' },
                      { icon: <ClipboardList className="w-6 h-6 text-primary" />, text: 'Learn about our breeding program and practices' },
                      { icon: <Truck className="w-6 h-6 text-primary" />, text: 'Discuss pricing and delivery options for your location' },
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{reason.icon}</div>
                        <span className="text-foreground leading-relaxed pt-0.5">{reason.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-border/40 rounded-2xl p-8">
                  <h4 className="font-bold text-lg mb-3">Response Time</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to responding to all inquiries promptly. During business hours
                    (9 AM - 6 PM), you can expect a response within a few hours. Calls placed
                    outside business hours will be addressed the next business day.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-2xl p-8">
                  <h4 className="font-bold text-lg mb-3">Quick Response via WhatsApp</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For fastest response, reach out to us on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919896969810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Kennel</h2>
            <p className="text-xl text-muted-foreground">
              Located in Kaithal, Haryana. Schedule an appointment to meet our dogs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100} className="">
            <div className="bg-white border border-border/40 rounded-2xl overflow-hidden shadow-sm h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.5!2d76.4!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912154f2e9e8e91%3A0x1c2e9f9f9f9f9f9f!2sKaithal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ashoka Kennel Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
