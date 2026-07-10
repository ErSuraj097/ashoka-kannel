import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TopBar } from '@/components/top-bar'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SocialMediaIcons } from '@/components/social-media-icons'
import { ScrollToTop } from '@/components/scroll-to-top'
import { WhatsAppButton } from '@/components/whatsapp-button'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Breeds from '@/pages/Breeds'
import BreedDetails from '@/pages/BreedDetails'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import FacebookUpdates from '@/pages/FacebookUpdates'

function AppContent() {
  const [loading, setLoading] = useState(true)

  // Initial mount loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  // Show loader on page route change
  // useEffect(() => {
  //   setLoading(false)
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 1)
  //   return () => clearTimeout(timer)
  // }, [location.pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center text-white"
          >
            <div className="relative flex flex-col items-center">
              {/* Custom Spin Frame */}
              <div className="w-24 h-24 rounded-full border-4 border-t-red-600 border-r-orange-500 border-b-yellow-400 border-l-transparent animate-spin mb-6" />

              {/* Logo centering */}
              <div className="absolute -top-6 rounded-full flex items-center justify-center ">
                <img
                  src="/images/logos/ashoka-kennel-logo.png"
                  alt="Loading Logo"
                  className="w-36 object-contain animate-pulse"
                />
              </div>

              {/* Text */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text"
              >
                Ashoka Kennel
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-slate-400 uppercase tracking-[0.2em] mt-2"
              >
                Premium Quality Breeding
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-background text-foreground flex flex-col min-h-screen">
        <TopBar />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breeds/:breedId" element={<BreedDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updates" element={<FacebookUpdates />} />
          </Routes>
        </main>

        <Footer />
        <SocialMediaIcons />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
