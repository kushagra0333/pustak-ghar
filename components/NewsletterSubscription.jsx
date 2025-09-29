'use client'
import React, { useState } from 'react'
import { Mail, Send, CheckCircle, BookOpen, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Clear previous errors
    setError('')
    
    // Validate email
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    // Check if already subscribed
    const existingSubscribers = JSON.parse(localStorage.getItem('pustakghar_newsletter_subscribers') || '[]')
    const emailExists = existingSubscribers.some(subscriber => subscriber.email.toLowerCase() === email.toLowerCase())
    
    if (emailExists) {
      setError('This email is already subscribed to our newsletter')
      return
    }

    setIsSubmitting(true)

    // Simulate API call delay
    setTimeout(() => {
      // Store subscriber email in localStorage
      const newSubscriber = {
        email: email.trim().toLowerCase(),
        subscriptionDate: new Date().toISOString(),
        id: Date.now()
      }
      
      existingSubscribers.push(newSubscriber)
      localStorage.setItem('pustakghar_newsletter_subscribers', JSON.stringify(existingSubscribers))
      
      // Show success state
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail('')
      
      // Reset success state after 4 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 4000)
    }, 1000)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (error) {
      setError('') // Clear error when user starts typing
    }
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {isSubscribed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center z-10 border-2 border-emerald-400"
          >
            <div className="text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <CheckCircle className="w-7 h-7 text-emerald-600" />
              </motion.div>
              <h4 className="text-lg font-bold mb-1">Welcome to Our Literary Circle!</h4>
              <p className="text-sm opacity-90">You'll receive our weekly digest soon</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
            <Mail className="w-5 h-5 text-amber-900" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-amber-400 flex items-center">
              Literary Digest
              <Sparkles className="w-4 h-4 ml-1 text-yellow-400" />
            </h4>
            <p className="text-xs text-amber-300 -mt-1 italic">Weekly inspiration delivered</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-amber-200 text-sm leading-relaxed">
          Join 5,000+ literary enthusiasts receiving our weekly digest with new materials, events, and inspiring stories.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 rounded-xl border-2 ${
                error 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-amber-400 focus:border-yellow-500'
              } focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-200 bg-amber-50/10 text-white placeholder-amber-300 text-sm backdrop-blur-sm`}
              disabled={isSubmitting}
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs font-medium mt-1"
              >
                {error}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-amber-900 px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none group"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-amber-900 border-t-transparent rounded-full mr-2"
                />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                Subscribe to Digest
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  )
}

export default NewsletterSubscription
