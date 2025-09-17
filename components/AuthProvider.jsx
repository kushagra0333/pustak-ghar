'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
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

  const value = useMemo(() => ({
    user,
    loading,
    signInWithEmail: (email, password) => signInWithEmailAndPassword(auth, email, password),
    signUpWithEmail: async (email, password, displayName) => {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      if (displayName) {
        await updateProfile(cred.user, { displayName })
      }
      return cred
    },
    signInWithGoogle: () => signInWithPopup(auth, googleProvider),
    logout: () => signOut(auth),
    updateDisplayName: async (newName) => {
      if (!auth.currentUser) return
      await updateProfile(auth.currentUser, { displayName: newName })
      // Trigger state update so UI reflects the change immediately
      setUser({ ...auth.currentUser, displayName: newName })
    }
  }), [user, loading])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


