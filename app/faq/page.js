'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            question: "How can I access study materials on PustakGhar?",
            answer: "You can access study materials by navigating to our extensive library through the Search section. Browse by subject, author, or topic to find textbooks, reference materials, and study guides. All materials are organized in an easy-to-navigate format with search and filter options to help you find exactly what you need for your studies."
        },
        {
            question: "Are video lectures available offline?",
            answer: "Currently, our video lectures are available for streaming online through our platform. We're working on implementing offline download functionality for premium users, which will allow you to download selected video lectures for offline viewing. Stay tuned for updates on this feature in upcoming releases."
        },
        {
            question: "Does PustakGhar provide previous year papers?",
            answer: "Yes! PustakGhar offers an extensive collection of previous year examination papers for various courses and subjects. You can find these in our dedicated 'Previous Papers' section, organized by year, subject, and examination board. This helps students practice and understand exam patterns effectively."
        },
        {
            question: "Is the platform free to use, or are there premium features?",
            answer: "PustakGhar offers both free and premium tiers. Basic access to our study materials library and some video lectures is completely free. Premium features include unlimited access to all video content, offline downloads, personalized study plans, expert mentorship, and advanced progress tracking tools. Check our pricing page for detailed information."
        },
        {
            question: "How can I track my learning progress?",
            answer: "Our platform includes a comprehensive progress tracking system. You can monitor your reading progress, completed video lectures, quiz scores, and study time through your personalized dashboard. The system provides insights into your learning patterns, suggests areas for improvement, and helps you set and achieve study goals."
        },
        {
            question: "Can I get guidance from literary experts or mentors?",
            answer: "Absolutely! PustakGhar connects you with experienced literary experts and academic mentors. Premium users can schedule one-on-one sessions, participate in group discussions, and receive personalized feedback on their academic progress. Our mentors are available to guide you through complex topics and provide career advice in literary and academic fields."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pt-20">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
                            <HelpCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                        Frequently Asked <span className="text-rose-700">Questions</span>
                    </h1>
                    <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                        Find quick answers to common questions about PustakGhar's features, 
                        study materials, and platform usage. Can't find what you're looking for? 
                        Feel free to contact our support team.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                            >
                                <h3 className="text-lg font-semibold text-amber-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openItems[index] ? (
                                        <ChevronUp className="w-5 h-5 text-rose-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-rose-600" />
                                    )}
                                </div>
                            </button>

                            {/* Answer Content */}
                            {openItems[index] && (
                                <div className="px-6 pb-5 border-t border-amber-100 animate-slide-up">
                                    <div className="pt-4">
                                        <p className="text-amber-800 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 border border-rose-200">
                        <h2 className="text-2xl font-bold text-rose-800 mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-rose-700 mb-6 max-w-md mx-auto">
                            Our support team is here to help you with any additional questions or concerns about PustakGhar.
                        </p>
                        <button className="bg-gradient-to-r from-rose-600 to-pink-700 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
