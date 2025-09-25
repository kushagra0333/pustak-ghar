'use client'
import { Feather, Menu, X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-amber-300 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                                <Feather className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold text-amber-900 tracking-wide">
                                    Pustak<span className="text-rose-700">Ghar</span>
                                </span>
                                <div className="text-xs text-amber-700 font-medium -mt-1 italic">Literary Haven</div>
                            </div>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-amber-800 hover:text-rose-700 transition-colors font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/search-book"
                                className="text-amber-800 hover:text-rose-700 transition-colors font-medium"
                            >
                                Search
                            </Link>
                            <Link
                                href="/about"
                                className="text-amber-800 hover:text-rose-700 transition-colors font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href="/faq"
                                className="text-amber-800 hover:text-rose-700 transition-colors font-medium"
                            >
                                FAQ
                            </Link>
                            <button className="bg-gradient-to-r from-rose-600 to-pink-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                                Begin Journey
                            </button>
                        </nav>

                        <button
                            className="md:hidden p-2 text-amber-800"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 md:hidden">
                    <div className="pt-20 px-6">
                        <nav className="flex flex-col space-y-6">
                            <Link
                                href="/"
                                className="text-xl text-amber-800 hover:text-rose-700"
                            >
                                Home
                            </Link>
                            <Link
                                href="/search-book"
                                className="text-xl text-amber-800 hover:text-rose-700"
                            >
                                Search
                            </Link>
                            <Link
                                href="/about"
                                className="text-xl text-amber-800 hover:text-rose-700"
                            >
                                About
                            </Link>
                            <Link
                                href="/faq"
                                className="text-xl text-amber-800 hover:text-rose-700"
                            >
                                FAQ
                            </Link>
                            <button className="bg-gradient-to-r from-rose-600 to-pink-700 text-white py-3 rounded-full text-lg">
                                Begin Journey
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
