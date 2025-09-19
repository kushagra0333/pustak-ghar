'use client'

import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { auth } from '@/lib/firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { googleProvider } from '@/lib/firebase'

const AuthContext = createContext({
  user: null,
  loading: true,
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  signInWithGoogle: async () => {},
  logout: async () => {},
  updateDisplayName: async () => {}
})

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const signInWithEmail = useCallback((email, password) => signInWithEmailAndPassword(auth, email, password), [])
  const signUpWithEmail = useCallback(async (email, password, displayName) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    if (displayName) {
      await updateProfile(cred.user, { displayName })
    }
    return cred
  }, [])
  const signInWithGoogle = useCallback(() => signInWithPopup(auth, googleProvider), [])
  const logout = useCallback(() => signOut(auth), [])
  const updateDisplayName = useCallback(async (newName) => {
    if (!auth.currentUser) return
    await updateProfile(auth.currentUser, { displayName: newName })
    setUser({ ...auth.currentUser, displayName: newName })
  }, [])

  const value = useMemo(() => ({
    user,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    logout,
    updateDisplayName
  }), [user, loading, signInWithEmail, signUpWithEmail, signInWithGoogle, logout, updateDisplayName])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


