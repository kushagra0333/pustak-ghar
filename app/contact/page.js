'use client'
import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Update handleSubmit to use environment variables
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: 'Pustak Ghar Team',
        from_email: formData.email,
        to_email: 'kushagrapandey0333@gmail.com',
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      )

      setStatus('Message sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setStatus(''), 5000)
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
      console.error('EmailJS Error:', error.text || error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="pt-4 text-4xl font-bold text-amber-900 mb-4">Contact Us</h1>
          <p className="text-amber-800 italic">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 animate-slide-up delay-100">
          {status && (
            <div className={`mb-6 p-4 rounded-lg text-center ${
              status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {status}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-amber-900 font-medium mb-2">First Name</label>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Last Name</label>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Email Address</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Subject</label>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Message</label>
              <textarea 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-black w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:from-amber-700 hover:to-orange-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 animate-slide-up delay-200">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-amber-900 font-bold mb-2">Phone</h3>
            <p className="text-amber-700">+91 9310022664</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center ">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-amber-900 font-bold mb-2 ">Email</h3>
            <p className="text-amber-700">kushagrapandey0333@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-amber-900 font-bold mb-2">Location</h3>
            <p className="text-amber-700">Gijhore Sector 53, Noida, Uttar Pradesh</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage