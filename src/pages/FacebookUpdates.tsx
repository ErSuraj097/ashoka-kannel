import { AnimatedSection } from '@/components/animated-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { SEO } from '@/components/seo'
import { BreadcrumbSchema } from '@/components/structured-data'
import { Facebook, ExternalLink } from 'lucide-react'

export default function FacebookUpdates() {
  return (
    <div className="bg-background text-foreground">
      <SEO
        title="Facebook Updates - Live Feed | Ashoka Kennel"
        description="Stay updated with the latest news, daily activities, and puppy updates from Ashoka Kennel's official Facebook feed."
        keywords="Ashoka Kennel Facebook, dog breeder updates, Facebook page Ashoka Kennel, buy Cane Corso updates"
      />
      <BreadcrumbSchema
        items={[
          { label: 'Home', url: '/' },
          { label: 'Facebook Updates', url: '/updates' },
        ]}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <Breadcrumb />
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <Facebook className="w-12 h-12 text-primary" /> Live Facebook Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay connected with our daily kennel life, happy client reviews, and premium puppy news.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feed Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <AnimatedSection className="w-full max-w-7xl flex flex-col items-center">
            {/* Direct Link Button */}
            <a
              href="https://www.facebook.com/ashokapets1/?ref=embed_page#"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5"
            >
              Visit Our Facebook Page <ExternalLink size={18} />
            </a>

            {/* Embedded Live Feed */}
            <div className="w-full max-w-7xl  overflow-hidden rounded-3xl border border-border bg-card shadow-2xl p-2 h-[600px]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fashokapets1&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Ashoka Kennel Facebook Page Feed"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
