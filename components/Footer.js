import { Feather } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
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

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Study Materials
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Video Lectures
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Previous Papers
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Success Stories
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Literary Subjects
                        </h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Classical Literature
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Modern Poetry
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Literary Criticism
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Creative Writing
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-amber-400">
                            Support
                        </h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Help Center
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="block text-amber-200 hover:text-white transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
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