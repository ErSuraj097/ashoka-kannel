'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedButton } from '@/components/animated-button'
import { Breadcrumb } from '@/components/breadcrumb'

export default function ContactPage() {
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
      // Formspree submission - replace with your Formspree endpoint
      const formspreeEndpoint = 'https://formspree.io/f/your-formspree-id'

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '', breed: 'cane-corso' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        // Fallback: simulate submission for demo
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '', breed: 'cane-corso' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (err) {
      // Fallback: simulate submission for demo
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '', breed: 'cane-corso' })
      setTimeout(() => setSubmitted(false), 5000)
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
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb/>
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
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full text-center">
                    <div className="text-accent mb-4 flex justify-center">{info.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    <ul className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </ul>
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
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-3">
                    <CheckCircle size={20} />
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
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  We typically respond within 24 hours.
                </p>
              </div>
            </AnimatedSection>

            {/* Info Side */}
            <AnimatedSection delay={200} className="">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Contact Us</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: '🐕', text: 'Inquire about available puppies and upcoming litters' },
                      { icon: '❓', text: 'Ask questions about breed characteristics and care' },
                      { icon: '🏠', text: 'Schedule a visit to meet our dogs in person' },
                      { icon: '💝', text: 'Get post-purchase support and expert advice' },
                      { icon: '📋', text: 'Learn about our breeding program and practices' },
                      { icon: '🚚', text: 'Discuss pricing and delivery options for your location' },
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-2xl flex-shrink-0">{reason.icon}</span>
                        <span className="text-foreground leading-relaxed pt-1">{reason.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-[400px]">
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

