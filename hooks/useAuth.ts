/**
 * Authentication hook for Via Fidei app
 * Manages user authentication state and provides auth methods
 */

import { useState, useEffect } from 'react';
import { 
  User as FirebaseUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';
import { User, UserPreferences } from '@/types/User';

interface AuthState {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    firebaseUser: null,
    loading: true,
    error: null,
  });

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        if (firebaseUser) {
          // Fetch or create user document in Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          let userData: User;
          if (userDoc.exists()) {
            userData = userDoc.data() as User;
          } else {
            // Create new user document with default preferences
            const defaultPreferences: UserPreferences = {
              language: 'en',
              notifications: true,
            };
            
            userData = {
              uid: firebaseUser.uid,
              email: firebaseUser.email!,
              createdAt: new Date(),
              preferences: defaultPreferences,
              displayName: firebaseUser.displayName || undefined,
              lastLoginAt: new Date(),
            };
            
            await setDoc(doc(db, 'users', firebaseUser.uid), userData);
          }
          
          setState({
            user: userData,
            firebaseUser,
            loading: false,
            error: null,
          });
        } else {
          setState({
            user: null,
            firebaseUser: null,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setState(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }));
      }
    });

    return unsubscribe;
  }, []);

  /**
   * Sign up a new user with email and password
   */
  const signUp = async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User creation will be handled by the auth state listener
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Sign up failed',
      }));
      throw error;
    }
  };

  /**
   * Sign in an existing user with email and password
   */
  const signIn = async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User sign in will be handled by the auth state listener
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Sign in failed',
      }));
      throw error;
    }
  };

  /**
   * Sign out the current user
   */
  const signOutUser = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await signOut(auth);
      // User sign out will be handled by the auth state listener
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Sign out failed',
      }));
      throw error;
    }
  };

  /**
   * Send password reset email
   */
  const resetPassword = async (email: string) => {
    setState(prev => ({ ...prev, error: null }));
    
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Password reset failed',
      }));
      throw error;
    }
  };

  /**
   * Update user preferences
   */
  const updatePreferences = async (preferences: Partial<UserPreferences>) => {
    if (!state.user) return;
    
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const updatedUser = {
        ...state.user,
        preferences: { ...state.user.preferences, ...preferences },
      };
      
      await setDoc(doc(db, 'users', state.user.uid), updatedUser);
      
      setState(prev => ({
        ...prev,
        user: updatedUser,
        loading: false,
      }));
    } catch (error) {
      console.error('Error updating preferences:', error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Update failed',
      }));
      throw error;
    }
  };

  return {
    user: state.user,
    firebaseUser: state.firebaseUser,
    loading: state.loading,
    error: state.error,
    isAuthenticated: !!state.user,
    signUp,
    signIn,
    signOut: signOutUser,
    resetPassword,
    updatePreferences,
  };
}
