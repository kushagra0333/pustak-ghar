'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/components/AuthProvider'
import { isGoogleSignInReady } from '@/lib/firebase'

export default function LoginPage() {
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, user } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const friendlyMessage = (code, fallback) => {
    const map = {
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/missing-password': 'Please enter your password.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-credential': 'Incorrect email or password.',
      'auth/user-not-found': 'No account found for this email.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'An account already exists for this email.',
      'auth/operation-not-allowed': 'This sign-in method is disabled by the project.',
      'auth/configuration-not-found': 'Firebase is not configured. Check env vars and restart dev server.'
    }
    return map[code] || fallback || 'Something went wrong'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isSignUp) {
        if (!name.trim()) {
          throw { code: 'auth/invalid-display-name', message: 'Please enter your name.' }
        }
        if (password !== confirmPassword) {
          throw { code: 'auth/passwords-dont-match', message: 'Passwords do not match.' }
        }
        await signUpWithEmail(email, password, name.trim())
      } else {
        await signInWithEmail(email, password)
      }
    } catch (err) {
      const code = err?.code
      // Smart guidance between modes for common cases
      if (!isSignUp && code === 'auth/user-not-found') {
        setIsSignUp(true)
        setError('No account found. Create one to continue.')
      } else if (isSignUp && code === 'auth/email-already-in-use') {
        setIsSignUp(false)
        setError('Account exists. Sign in instead.')
      } else {
        setError(friendlyMessage(code, err?.message))
      }
      // Clear sensitive fields after failure
      setPassword('')
      setConfirmPassword('')
    } finally {
      setLoading(false)
    }
  }

  if (user) {
    return (
      <div className="min-h-[60vh] pt-24 flex items-center justify-center px-4 bg-gradient-to-b from-amber-50 to-white animate-fade-in">
        <div className="max-w-md w-full text-center text-amber-900 animate-slide-up">
          <h2 className="text-2xl font-semibold text-amber-900">You are already logged in</h2>
          <p className="mt-2 text-amber-700">Continue exploring books and materials.</p>
          <Link href="/" className="inline-block mt-6 bg-gradient-to-r from-rose-600 to-pink-700 text-white px-6 py-3 rounded-full">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] pt-24 pb-16 flex items-center justify-center px-4 bg-gradient-to-b from-amber-50 to-white animate-fade-in">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-amber-200 p-8 text-amber-900 animate-slide-up">
        <h1 className="text-3xl font-bold text-amber-900 text-center">{isSignUp ? 'Create account' : 'Welcome back'}</h1>
        <p className="text-center text-amber-700 mt-1">{isSignUp ? 'Join PustakGhar' : 'Sign in to PustakGhar'}</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {isSignUp && (
            <div className="animate-slide-up delay-100">
              <label className="block text-sm font-medium text-amber-800">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-amber-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white text-amber-900 placeholder-amber-500/80"
                placeholder="e.g. Asha Verma"
              />
            </div>
          )}
          <div className="animate-slide-up delay-100">
            <label className="block text-sm font-medium text-amber-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-amber-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white text-amber-900 placeholder-amber-500/80"
              placeholder="you@example.com"
            />
          </div>
          <div className="animate-slide-up delay-200">
            <label className="block text-sm font-medium text-amber-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="mt-1 w-full rounded-xl border border-amber-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white text-amber-900 placeholder-amber-500/80"
              placeholder="••••••••"
            />
          </div>
          {isSignUp && (
            <div className="animate-slide-up delay-300">
              <label className="block text-sm font-medium text-amber-800">Confirm password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="mt-1 w-full rounded-xl border border-amber-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white text-amber-900 placeholder-amber-500/80"
                placeholder="••••••••"
              />
            </div>
          )}

          {error && (
            <div className="text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-4 py-2 text-sm animate-fade-in">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !email || !password || (isSignUp && (!name.trim() || password !== confirmPassword))}
            className="w-full bg-gradient-to-r from-rose-600 to-pink-700 text-white py-3 rounded-xl font-medium hover:shadow-lg disabled:opacity-60 animate-slide-up delay-300"
          >
            {loading ? 'Please wait…' : isSignUp ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="my-6 flex items-center animate-fade-in">
          <div className="flex-1 h-px bg-amber-200" />
          <span className="px-3 text-amber-700 text-sm">or</span>
          <div className="flex-1 h-px bg-amber-200" />
        </div>

        <button
          onClick={async () => {
            setError('')
            setLoading(true)
            try {
              await signInWithGoogle()
            } catch (err) {
              setError(friendlyMessage(err?.code, err?.message))
            } finally {
              setLoading(false)
            }
          }}
          disabled={!isGoogleSignInReady || loading}
          className="w-full border border-amber-300 py-3 rounded-xl font-medium hover:bg-amber-50 disabled:opacity-60 disabled:cursor-not-allowed animate-slide-up delay-300"
        >
          {isGoogleSignInReady ? (loading ? 'Please wait…' : 'Continue with Google') : 'Google sign-in not configured'}
        </button>

        <p className="text-center text-sm text-amber-700 mt-6">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-rose-700 font-semibold">
            {isSignUp ? 'Sign in' : 'Create one'}
          </button>
        </p>
      </div>
    </div>
  )
}


