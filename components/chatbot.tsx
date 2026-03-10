'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What breeds do you offer?",
    answer: "We specialize in Cane Corso, Siberian Husky, and Saint Bernard puppies. All our dogs are purebred and comes with proper documentation."
  },
  {
    question: "Do you provide delivery across India?",
    answer: "Yes! We provide safe and secure delivery across all major cities in India. Puppies are transported in air-conditioned vehicles with proper care."
  },
  {
    question: "What is the price range?",
    answer: "Our puppies start from ₹25,000 depending on breed, age, and pedigree. Contact us for current availability and pricing."
  },
  {
    question: "Do you offer health guarantee?",
    answer: "Yes, all our puppies come with a health guarantee. We provide vaccination records and health certificates."
  },
  {
    question: "How can I book a puppy?",
    answer: "You can contact us via WhatsApp at +91 9896969810 or fill out our contact form. We require a booking fee to reserve a puppy."
  },
  {
    question: "Are the puppies vaccinated?",
    answer: "Yes, all puppies are vaccinated according to their age schedule and dewormed. We provide complete vaccination records."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="font-medium text-sm">{question}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <p className="pb-3 text-sm text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919896969810', '_blank')
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 p-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 "
        aria-label="Open chat"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Options */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-50 w-64 bg-white rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4">
            <h3 className="text-white font-semibold">How can we help?</h3>
            <p className="text-white/80 text-sm">Choose an option below</p>
          </div>
          <div className="p-2 space-y-2">
            <button
              onClick={() => setShowChat(!showChat)}
              className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-medium text-sm">Chat with us</p>
                <p className="text-xs text-gray-500">FAQ & common questions</p>
              </div>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full p-3 text-left bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366]" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-xs text-gray-500">Chat on WhatsApp</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-24 left-8 z-50 w-80 h-96 bg-white rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex justify-between items-center">
            <div>
              <h3 className="text-white font-semibold">Ashoka Kennel Support</h3>
              <p className="text-white/80 text-xs">We usually reply within minutes</p>
            </div>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-white/80">
              <X size={20} />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-primary" size={16} />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">Hi there! 👋 Welcome to Ashoka Kennel. How can I help you today?</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Common Questions:</p>
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="p-3 border-t bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={handleWhatsAppClick}
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

