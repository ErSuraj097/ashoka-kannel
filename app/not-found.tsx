import Link from 'next/link'
import type { Metadata } from 'next'
import { Home, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | Ashoka Kennel',
  description: 'The page you are looking for does not exist. Return to Ashoka Kennel homepage.',
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="mb-8">
          <span className="text-9xl font-bold text-primary/20">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

