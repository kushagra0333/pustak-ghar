'use client'
import React, { useState } from 'react'
import { MessageCircle, Send, X, CheckCircle, Star, BookHeart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required'
    } else if (formData.feedback.trim().length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call delay
    setTimeout(() => {
      // Save to localStorage
      const timestamp = new Date().toISOString()
      const feedbackEntry = {
        ...formData,
        timestamp,
        id: Date.now()
      }
      
      const existingFeedback = JSON.parse(localStorage.getItem('pustakghar_feedback') || '[]')
      existingFeedback.push(feedbackEntry)
      localStorage.setItem('pustakghar_feedback', JSON.stringify(existingFeedback))
      
      // Reset form and show success
      setFormData({ name: '', email: '', feedback: '' })
      setIsSubmitting(false)
      setShowSuccess(true)
      
      // Hide success message after 4 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
    }, 1000)
  }

  const handleCancel = () => {
    setFormData({ name: '', email: '', feedback: '' })
    setErrors({})
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-700 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-rose-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full border-2 border-amber-400 shadow-sm mb-6">
            <BookHeart className="w-5 h-5 text-amber-900 mr-2" />
            <span className="text-amber-900 font-bold text-sm">
              Share Your Literary Journey
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="text-amber-900 block">
              Feedback &
            </span>
            <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto font-medium italic">
            "Your voice shapes our literary sanctuary. Share your thoughts and help us preserve India's rich heritage together."
          </p>
        </div>

        {/* Feedback Form */}
        <div className="relative">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-4 border-amber-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 opacity-50 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-rose-200 to-pink-200 opacity-50 rounded-tl-full"></div>

            {/* Success Message */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center z-20 border-4 border-emerald-400"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                      Submitted Successfully!
                    </h3>
                    <p className="text-emerald-700 font-medium italic">
                      Thank you for your valuable feedback. Your words help us grow our literary community.
                    </p>
                    <div className="flex justify-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-600 to-pink-700 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900">
                  Share Your Experience
                </h3>
                <p className="text-amber-700 italic text-sm">
                  Help us improve our literary haven
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-amber-900 font-semibold text-lg">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.name 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-amber-300 focus:border-rose-500'
                    } focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-200 bg-amber-50/50 text-amber-900 placeholder-amber-600`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-sm font-medium"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-amber-900 font-semibold text-lg">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-amber-300 focus:border-rose-500'
                    } focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-200 bg-amber-50/50 text-amber-900 placeholder-amber-600`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-sm font-medium"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Feedback Field */}
              <div className="space-y-2">
                <label htmlFor="feedback" className="block text-amber-900 font-semibold text-lg">
                  Share Your Feedback <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.feedback 
                      ? 'border-red-400 focus:border-red-500' 
                      : 'border-amber-300 focus:border-rose-500'
                  } focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-200 bg-amber-50/50 text-amber-900 placeholder-amber-600 resize-none`}
                  placeholder="Tell us about your experience with Pustak Ghar. How has our platform helped your literary journey? What improvements would you suggest?"
                ></textarea>
                {errors.feedback && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm font-medium"
                  >
                    {errors.feedback}
                  </motion.p>
                )}
                <p className="text-amber-600 text-sm italic">
                  Minimum 10 characters required
                </p>
              </div>

              {/* Form Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex-1 bg-gradient-to-r from-rose-600 to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Feedback
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 sm:flex-none border-2 border-amber-700 text-amber-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-100 transition-colors flex items-center justify-center"
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel
                </button>
              </div>
            </form>

            {/* Footer Quote */}
            <div className="mt-8 pt-6 border-t border-amber-300 text-center">
              <p className="text-amber-700 italic font-medium">
                "Every reader's voice adds a new verse to our literary symphony"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
