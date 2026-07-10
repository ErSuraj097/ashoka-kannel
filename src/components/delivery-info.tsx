'use client'

import { AnimatedSection } from '@/components/animated-section'
import { Truck, MapPin, Clock, Shield } from 'lucide-react'

export function DeliveryInfo() {
  const deliveryFeatures = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Safe Transportation',
      description: 'Air-conditioned vehicles with proper ventilation and comfortable crates for your puppy',
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: 'Pan-India Coverage',
      description: 'We deliver to all major cities and towns across India within 3-7 days',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Real-Time Updates',
      description: 'Track your puppy journey with live location updates and photos',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Health Safety',
      description: 'Puppy travels with health certificate and required documentation',
    },
  ]

  const estimatedDelivery = [
    { region: 'Delhi NCR', time: 'Same day / Next day' },
    { region: 'Punjab, Haryana, UP', time: '1-2 days' },
    { region: 'Rajasthan, Gujarat', time: '2-3 days' },
    { region: 'Maharashtra', time: '2-4 days' },
    { region: 'South India', time: '3-5 days' },
    { region: 'Northeast India', time: '5-7 days' },
  ]

  return (
    <section className="py-16 md:py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Delivery Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe and comfortable delivery for your new companion, no matter where you are in India
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryFeatures.map((feature, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all text-center h-full">
                <div className="text-accent mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={200} className="">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Estimated Delivery Times
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {estimatedDelivery.map((item) => (
                <div
                  key={item.region}
                  className="flex items-center justify-between p-4 bg-secondary rounded-xl"
                >
                  <span className="font-semibold">{item.region}</span>
                  <span className="text-primary font-semibold">{item.time}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              Delivery times may vary based on weather conditions and transportation availability
            </p>
          </div>
        </AnimatedSection>

 
      </div>
    </section>
  )
}

