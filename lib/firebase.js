// Firebase initialization and exports
// This file expects environment variables to be set in .env.local

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const requiredKeys = ["apiKey", "projectId", "appId"]
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const missing = requiredKeys.filter((k) => !firebaseConfig[k])
if (missing.length) {
  const msg = `Missing Firebase env vars: ${missing.join(", ")}.\n` +
    `Ensure NEXT_PUBLIC_FIREBASE_* values are set in .env.local and restart 'npm run dev'.`
  // eslint-disable-next-line no-console
  console.error(msg)
  throw new Error(`Firebase configuration incomplete: ${missing.join(", ")}`)
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const isGoogleSignInReady = Boolean(firebaseConfig.authDomain);

export default app;


