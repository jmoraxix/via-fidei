/**
 * Habit type definitions for Via Fidei app
 * Defines the structure of habit data and related types
 */

/** Available frequency options for habits */
export type HabitFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

/** Categories for organizing spiritual practices */
export type HabitCategory = 
  | 'prayer' 
  | 'scripture' 
  | 'mass_worship' 
  | 'service' 
  | 'devotions' 
  | 'personal';

/** Main habit interface */
export interface Habit {
  /** Unique identifier for the habit */
  id: string;
  /** Firebase user ID who owns this habit */
  userId: string;
  /** Display name for the habit */
  name: string;
  /** Category this habit belongs to */
  category: HabitCategory;
  /** How often this habit should be performed */
  frequency: HabitFrequency;
  /** When this habit was created */
  createdAt: Date;
  /** Whether this habit is currently active */
  isActive: boolean;
  /** Optional description or notes about the habit */
  description?: string;
  /** Target count per frequency period (default: 1) */
  targetCount?: number;
}

/** Habit completion record */
export interface HabitCompletion {
  /** Unique identifier for this completion */
  id: string;
  /** ID of the habit this completion belongs to */
  habitId: string;
  /** Firebase user ID who performed this completion */
  userId: string;
  /** Date when this was completed (YYYY-MM-DD format) */
  date: string;
  /** How many times completed (for over-achievement) */
  count: number;
  /** Timestamp when this completion was recorded */
  completedAt: Date;
  /** Optional notes about this specific completion */
  notes?: string;
}

/** Statistics for a habit */
export interface HabitStats {
  /** Habit ID these stats belong to */
  habitId: string;
  /** Current completion count for the current period */
  currentCount: number;
  /** Target count for the current period */
  targetCount: number;
  /** Current streak in days */
  currentStreak: number;
  /** Longest streak achieved */
  longestStreak: number;
  /** Total completions all time */
  totalCompletions: number;
  /** Completion rate as percentage (0-100) */
  completionRate: number;
}
