'use client'
import { Feather, Menu, X } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@/components/AuthProvider'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [newName, setNewName] = useState('');
    const [saving, setSaving] = useState(false);
    const { user, logout, updateDisplayName } = useAuth()
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (!isProfileOpen) return
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isProfileOpen])

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
                            {user ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 text-amber-800 hover:bg-amber-50">
                                        <span>{user.displayName || user.email}</span>
                                    </button>
                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white border border-amber-200 rounded-xl shadow-lg p-2 z-50">
                                            <button onClick={() => { setIsEditOpen(true); setIsProfileOpen(false); setNewName(user.displayName || ''); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-amber-50 text-amber-900">Edit profile</button>
                                            <button onClick={logout} className="w-full text-left px-3 py-2 rounded-lg hover:bg-amber-50 text-rose-700">Logout</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link href="/login" className="bg-gradient-to-r from-rose-600 to-pink-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                                    Login
                                </Link>
                            )}
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
                                href="#about"
                                className="text-xl text-amber-800 hover:text-rose-700"
                            >
                                About
                            </Link>
                            {user ? (
                                <>
                                    <button onClick={() => setIsEditOpen(true)} className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-3 rounded-full text-lg">
                                        Edit profile
                                    </button>
                                    <button onClick={logout} className="bg-gradient-to-r from-rose-600 to-pink-700 text-white py-3 rounded-full text-lg">
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link href="/login" className="bg-gradient-to-r from-rose-600 to-pink-700 text-white py-3 rounded-full text-lg">
                                    Login
                                </Link>
                            )}
                        </nav>
                    </div>
                </div>
            )}

            {/* Edit Profile Modal */}
            {isEditOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
                        <h3 className="text-xl font-semibold text-amber-900">Edit profile</h3>
                        <p className="text-amber-700 text-sm mt-1">Update your display name as you want it to appear.</p>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-amber-800">Display name</label>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-amber-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-black placeholder-amber-500/80"
                                placeholder="e.g. Asha Verma"
                            />
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <button onClick={() => setIsEditOpen(false)} className="px-4 py-2 rounded-lg border border-amber-300 text-amber-800 hover:bg-amber-50">Cancel</button>
                            <button
                                onClick={async () => {
                                    setSaving(true)
                                    try {
                                        await updateDisplayName(newName.trim())
                                        setIsEditOpen(false)
                                    } finally {
                                        setSaving(false)
                                    }
                                }}
                                disabled={saving || !newName.trim()}
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-pink-700 text-white disabled:opacity-60"
                            >
                                {saving ? 'Saving…' : 'Save changes'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar