"use client";
import React from "react";

const PrivacyPolicyPage = () => {
    const sections = [
        {
            title: "Information We Collect",
            content:
                "Pustak Ghar collects minimal information necessary to provide our services. This includes basic usage analytics, such as pages visited and books accessed, to help us improve the platform. We do not collect personal information unless voluntarily provided through contact forms or user registration. Any information collected is used solely to enhance your reading experience and maintain our digital library.",
            number: "1",
        },
        {
            title: "How We Use Your Information",
            content:
                "The information we collect is used exclusively to improve our services, understand user preferences, and maintain the quality of our digital library. We use anonymous analytics to track popular books and study materials to better curate our collection. We never use your information for advertising purposes or share it with third-party advertisers.",
            number: "2",
        },
        {
            title: "Information Sharing and Disclosure",
            content:
                "We do not sell, rent, or share your personal information with third parties for commercial purposes. We may share anonymized, aggregated data for research purposes to promote literacy and education in India. We will only disclose personal information if required by law or to protect the rights and safety of our users and platform.",
            number: "3",
        },
        {
            title: "Data Security",
            content:
                "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Our platform uses secure connections and follows industry best practices for data protection. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
            number: "4",
        },
        {
            title: "Cookies and Tracking Technologies",
            content:
                "Pustak Ghar uses essential cookies to ensure the proper functioning of our website, including remembering your theme preferences (light/dark mode) and maintaining your reading session. We use minimal analytics cookies to understand how users interact with our platform. You can control cookie settings through your browser preferences.",
            number: "5",
        },
        {
            title: "Third-Party Services",
            content:
                "Our platform may contain links to external websites or integrate with third-party services for enhanced functionality. We are not responsible for the privacy practices of these external services. We encourage you to review the privacy policies of any third-party websites or services that you access through our platform.",
            number: "6",
        },
        {
            title: "Children's Privacy",
            content:
                "Pustak Ghar is committed to protecting the privacy of children. Our platform is designed to be educational and safe for users of all ages. We do not knowingly collect personal information from children under 13 without parental consent. If we become aware of such collection, we will take steps to delete the information promptly.",
            number: "7",
        },
        {
            title: "Your Rights and Choices",
            content:
                "You have the right to access, update, or delete any personal information you have provided to us. You can opt out of non-essential data collection by adjusting your browser settings. For any privacy-related requests or concerns, please contact us using the information provided below, and we will respond promptly to address your needs.",
            number: "8",
        },
        {
            title: "Changes to This Privacy Policy",
            content:
                "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify users of significant changes by posting the updated policy on our website with a new effective date. Your continued use of Pustak Ghar after any changes constitutes acceptance of the updated Privacy Policy.",
            number: "9",
        },
    ];

    const keyPrinciples = [
        "🔒 Data Minimization",
        "🛡️ Security First",
        "🎯 Purpose Limitation",
        "👤 User Control",
        "📚 Educational Focus",
        "🤝 Transparency",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <main className="min-h-screen p-8 pt-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent">
                                Privacy Policy
                            </span>
                        </h1>
                        <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto leading-relaxed">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Pustak Ghar.
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
                                Privacy Principles
                            </span>
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {keyPrinciples.map((principle, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-600 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 dark:hover:border-rose-500 group"
                                >
                                    <span className="text-amber-900 dark:text-amber-100 font-medium group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors duration-300">
                                        {principle}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-600 shadow-lg">
                        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4 text-center">
                            Questions About Our Privacy Policy?
                        </h3>
                        <p className="text-amber-700 dark:text-amber-200 text-center leading-relaxed mb-6">
                            If you have any questions or concerns about how we handle your privacy, please don't hesitate to contact us. 
                            We're committed to transparency and will gladly address any privacy-related inquiries.
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

export default PrivacyPolicyPage;