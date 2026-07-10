import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function WhatsAppButton() {
  const phoneNumber = '919896969810'
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show tooltip automatically after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group flex-shrink-0"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
      </a>

      {/* Tooltip Popup */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            className="relative bg-white border border-slate-200 text-slate-800 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 pr-8 min-w-[200px]"
          >
            {/* Tooltip Left Arrow Tail */}
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-white border-l border-b border-slate-200" />

            <div className="text-left">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Online Support</p>
              <p className="text-sm font-extrabold text-slate-900 leading-tight mt-0.5">Chat with us! 🐾</p>
            </div>

            {/* Close Tooltip Button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close message prompt"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

