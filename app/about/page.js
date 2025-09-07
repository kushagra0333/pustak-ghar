"use client";
import React from "react";

const AboutPage = () => {
    const sections = [
        {
            title: "Overview",
            content:
                "Pustak Ghar is an open-source initiative dedicated to promoting Indian literature and reading culture by building a digital library of freely accessible Hindi and regional language books. Our mission is to preserve literary heritage by curating, digitizing, and organizing books, poems, stories, and educational resources into a structured, user-friendly platform for readers, students, and literature enthusiasts.",
            number: "1",
        },
        {
            title: "Project Goals",
            content:
                " Our primary goal is to build a platform that emulates the experience of a traditional library while leveraging modern technology to reach a global audience. We aim to systematically organize diverse literary content into intuitive categories including Books, Poems, Stories, and Educational Resources, making it easy for users to discover and engage with valuable literary works. The platform will feature an aesthetically pleasing design inspired by literary traditions, incorporating warm and inviting visual elements that evoke the comfort of reading spaces. Furthermore, we are committed to ensuring mobile-first accessibility and responsive design, guaranteeing that our digital library remains accessible and user-friendly across all devices and for people of all abilities.",
            number: "2",
        },
        {
            title: "Our Mission",
            content:
                "Our mission is to preserve literary heritage by curating, digitizing, and organizing books, poems, stories, and educational resources into a structured, user-friendly platform for readers, students, and literature enthusiasts.",
            number: "3",
        },
        {
            title: "Our Vision",
            content:
                "Creating a comprehensive digital archive of Indian literature that celebrates our rich literary heritage and makes it accessible to future generations.",
            number: "4",
        },
    ];

    const features = [
        "📖 Book Categories",
        "📱 Responsive Design",
        "🌐 Open Contributions",
        "📚 Digital Library",
        "🔍 Advanced Search",
        "✨ Interactive Tools",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
            <main className="min-h-screen p-8 pt-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-black mb-8 text-center">
                        <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent">
                            Pustak Ghar
                        </span>
                    </h1>

                    <section className="space-y-6">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-amber-200"
                            >
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-700 rounded-br-3xl flex items-center justify-center transform -translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300">
                                    <span className="text-white text-2xl font-bold">
                                        {section.number}
                                    </span>
                                </div>
                                <div className="p-8 pl-24">
                                    <h2 className="text-2xl font-bold text-amber-900 mb-3">
                                        {section.title}
                                    </h2>
                                    <p className="text-amber-700 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-rose-600 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </section>

                    <section className="grid md:grid-cols-2 gap-6 mt-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border-2 border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 group"
                            >
                                <span className="text-amber-900 font-medium group-hover:text-rose-700 transition-colors duration-300">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
