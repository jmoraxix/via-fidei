/**
 * User type definitions for Via Fidei app
 * Defines the structure of user data stored in Firestore
 */

export interface UserPreferences {
  /** User's preferred language for the app */
  language: 'en' | 'es';
  /** Whether to receive push notifications */
  notifications: boolean;
  /** User's preferred theme (future feature) */
  theme?: 'light' | 'dark' | 'system';
}

export interface User {
  /** Firebase Authentication UID */
  uid: string;
  /** User's email address */
  email: string;
  /** When the user account was created */
  createdAt: Date;
  /** User preferences and settings */
  preferences: UserPreferences;
  /** Optional display name */
  displayName?: string;
  /** When the user last logged in (for analytics) */
  lastLoginAt?: Date;
}
