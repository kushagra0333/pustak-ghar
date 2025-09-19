"use client";
import React from "react";

const TermsOfServicePage = () => {
    const sections = [
        {
            title: "Acceptance of Terms",
            content:
                "By accessing and using Pustak Ghar, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. These terms apply to all users, including visitors, registered users, and contributors to our digital library.",
            number: "1",
        },
        {
            title: "Description of Service",
            content:
                "Pustak Ghar is a digital library platform dedicated to promoting Indian literature and reading culture. We provide free access to Hindi and regional language books, educational resources, study materials, and literary content. Our service is designed to preserve and share literary heritage while maintaining respect for intellectual property rights.",
            number: "2",
        },
        {
            title: "User Responsibilities",
            content:
                "Users are responsible for their conduct while using our platform. You agree not to upload, share, or distribute content that infringes on copyright, is harmful, offensive, or violates any applicable laws. Users must respect the intellectual property rights of authors and publishers represented in our digital library.",
            number: "3",
        },
        {
            title: "Intellectual Property",
            content:
                "All content on Pustak Ghar, including but not limited to text, graphics, logos, and software, is protected by copyright and other intellectual property laws. While we provide free access to literary works, users must respect the rights of original authors and publishers. Commercial use of content requires explicit permission from copyright holders.",
            number: "4",
        },
        {
            title: "Privacy and Data Protection",
            content:
                "We are committed to protecting your privacy and personal information. Any data collected is used solely to improve our services and user experience. We do not sell or share personal information with third parties without consent, except as required by law. For detailed information, please refer to our Privacy Policy.",
            number: "5",
        },
        {
            title: "Content Guidelines",
            content:
                "All content submitted to Pustak Ghar must align with our mission of promoting educational and literary excellence. We reserve the right to review, moderate, or remove content that does not meet our quality standards or violates these terms. Users contributing content must ensure they have the right to share such materials.",
            number: "6",
        },
        {
            title: "Limitation of Liability",
            content:
                "Pustak Ghar is provided 'as is' without warranties of any kind. We strive to maintain accurate and up-to-date content but cannot guarantee the completeness or accuracy of all materials. Users access and use the platform at their own risk, and we shall not be liable for any damages arising from the use of our services.",
            number: "7",
        },
        {
            title: "Modifications to Terms",
            content:
                "We reserve the right to modify these Terms of Service at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of the modified terms. We encourage users to regularly review these terms to stay informed of any updates.",
            number: "8",
        },
    ];

    const keyPoints = [
        "📚 Free Educational Access",
        "🔒 Privacy Protection",
        "⚖️ Copyright Compliance", 
        "🤝 Community Guidelines",
        "🛡️ User Safety",
        "📝 Content Quality Standards",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <main className="min-h-screen p-8 pt-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent">
                                Terms of Service
                            </span>
                        </h1>
                        <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto leading-relaxed">
                            Please read these terms carefully before using Pustak Ghar. By accessing our platform, you agree to comply with these terms and conditions.
                        </p>
                        <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                    </div>

                    <section className="space-y-6">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-amber-200 dark:border-amber-600"
                            >
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-700 rounded-br-3xl flex items-center justify-center transform -translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300">
                                    <span className="text-white text-2xl font-bold">
                                        {section.number}
                                    </span>
                                </div>
                                <div className="p-8 pl-24">
                                    <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                                        {section.title}
                                    </h2>
                                    <p className="text-amber-700 dark:text-amber-200 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-rose-600 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </section>

                    <section className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-8">
                            <span className="bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
                                Key Principles
                            </span>
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {keyPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-600 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 dark:hover:border-rose-500 group"
                                >
                                    <span className="text-amber-900 dark:text-amber-100 font-medium group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors duration-300">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-600 shadow-lg">
                        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4 text-center">
                            Questions About Our Terms?
                        </h3>
                        <p className="text-amber-700 dark:text-amber-200 text-center leading-relaxed mb-6">
                            If you have any questions about these Terms of Service, please don't hesitate to contact us. 
                            We're here to help clarify any concerns you may have about using Pustak Ghar.
                        </p>
                        <div className="text-center">
                            <a 
                                href="/contact" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <i className="fa-solid fa-envelope mr-2"></i>
                                Contact Us
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default TermsOfServicePage;