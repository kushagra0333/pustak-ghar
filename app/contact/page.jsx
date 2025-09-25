"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="min-h-screen p-8 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto leading-relaxed">
              Have questions about our literary resources? Need help with your studies? 
              We're here to support your educational journey every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-amber-200 dark:border-amber-600 animate-slide-up">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-700 rounded-br-3xl flex items-center justify-center transform -translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300">
                <i className="fa-solid fa-envelope text-white text-2xl"></i>
              </div>
              
              <div className="p-8 pl-16">
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                  Send us a Message
                </h2>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        Your Name
                      </label>
                      <div className="relative">
                        <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-amber-400"></i>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 dark:border-amber-600 rounded-xl bg-white dark:bg-gray-700 text-amber-900 dark:text-amber-100 placeholder-amber-500 dark:placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        Email Address
                      </label>
                      <div className="relative">
                        <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-amber-400"></i>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 dark:border-amber-600 rounded-xl bg-white dark:bg-gray-700 text-amber-900 dark:text-amber-100 placeholder-amber-500 dark:placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        Your Message
                      </label>
                      <div className="relative">
                        <i className="fa-solid fa-message absolute left-3 top-4 text-amber-600 dark:text-amber-400"></i>
                        <textarea
                          placeholder="Tell us how we can help you with your studies..."
                          rows="5"
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 dark:border-amber-600 rounded-xl bg-white dark:bg-gray-700 text-amber-900 dark:text-amber-100 placeholder-amber-500 dark:placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 resize-none"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white font-medium py-3 px-6 rounded-xl hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 animate-bounceIn">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <i className="fa-solid fa-check text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-amber-700 dark:text-amber-200 leading-relaxed mb-6">
                      Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up delay-200">
              {/* Contact Details Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-address-book text-rose-600"></i>
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-600 to-pink-700 rounded-xl flex items-center justify-center shadow-md">
                      <i className="fa-solid fa-envelope text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Email Us</p>
                      <p className="text-amber-900 dark:text-amber-100 font-semibold">support@pustakghar.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-600 to-pink-700 rounded-xl flex items-center justify-center shadow-md">
                      <i className="fa-solid fa-clock text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Response Time</p>
                      <p className="text-amber-900 dark:text-amber-100 font-semibold">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-600 to-pink-700 rounded-xl flex items-center justify-center shadow-md">
                      <i className="fa-solid fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Academic Support</p>
                      <p className="text-amber-900 dark:text-amber-100 font-semibold">Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-circle-question text-rose-600"></i>
                  Common Questions
                </h3>
                
                <div className="space-y-4">
                  {[
                    "How can I access study materials?",
                    "Are the resources completely free?",
                    "How often is content updated?",
                    "Can I suggest new topics?"
                  ].map((question, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-amber-800 dark:text-amber-200 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors duration-300">
                          {question}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-amber-200 dark:border-amber-600">
                  <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                    Can't find what you're looking for? Send us a message and we'll be happy to help!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}