import { Feather } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="pl-16">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Feather className="w-7 h-7 text-amber-900" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold">
                                    Pustak<span className="text-amber-400">Ghar</span>
                                </span>
                                <div className="text-xs text-amber-300 -mt-1 italic">Literary Haven</div>
                            </div>
                        </div>
                        <p className="text-amber-200 leading-relaxed italic">
                            Empowering students across India with free, high-quality educational resources and proven literary methodologies that illuminate the path to knowledge.
                        </p>
                    </div>

                    <div className= "pl-16">
                        <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-book mr-2"></i>
                                Study Materials
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-video mr-2"></i>
                                Video Lectures
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-sheet-plastic mr-2"></i>
                                Previous Papers
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-medal mr-2"></i>
                                Success Stories
                            </Link>
                        </div>
                    </div>

                    <div className= "pl-16">
                        <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Literary Subjects
                        </h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-book-open mr-2"></i>
                                Classical Literature
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-pen-nib mr-2"></i>
                                Modern Poetry
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-quote-left mr-2"></i>
                                Literary Criticism
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className ="fa-solid fa-feather-pointed mr-2"></i>
                                Creative Writing
                            </Link>
                        </div>
                    </div>

                    <div className="pl-16">
                        <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Support
                        </h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-circle-question mr-2"></i>
                                Help Center
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-headset mr-2"></i>
                                Contact Us
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i class="fa-solid fa-shield-halved mr-2"></i>
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-scroll mr-2"></i>
                                Terms of Service
                            </Link>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-2 pl-16">
                            <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Socials
                            </h4>

                            <a href="https://github.com/kushagra0333/pustak-ghar" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github text-2xl text-amber-300 hover:text-white transition-colors"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in text-2xl text-amber-300 hover:text-white transition-colors"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter text-2xl text-amber-300 hover:text-white transition-colors"></i>
                            </a>
                    </div>
                    

                </div>

                <div className="border-t border-amber-800 mt-12 pt-8">
                    <div className="text-center">
                        <p className="text-amber-300 mb-2">
                            © {new Date().getFullYear()} PustakGhar. Crafted with ❤️ for students across India.
                        </p>
                        <p className="text-amber-400 text-sm italic">
                            &quot;Knowledge is the lamp that illuminates the path to wisdom&quot; - Ancient Sanskrit Proverb
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer