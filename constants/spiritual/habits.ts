/**
 * Spiritual habits and devotions constants
 * Contains predefined spiritual practices organized by category
 */

import { HabitCategory, HabitFrequency } from '@/types/Habit';

/** Interface for a devotion template */
export interface DevotionTemplate {
  id: string;
  name: string;
  category: HabitCategory;
  description: string;
  suggestedFrequency: HabitFrequency;
  estimatedDuration?: string; // e.g., "5-10 minutes"
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

/** Prayer-related devotions */
export const PRAYER_DEVOTIONS: DevotionTemplate[] = [
  {
    id: 'rosary',
    name: 'The Rosary',
    category: 'prayer',
    description: 'Traditional Catholic prayer focusing on the mysteries of Christ and Mary',
    suggestedFrequency: 'daily',
    estimatedDuration: '15-20 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'divine-mercy-chaplet',
    name: 'Divine Mercy Chaplet',
    category: 'prayer',
    description: 'Prayer revealed to St. Faustina, prayed for God\'s mercy',
    suggestedFrequency: 'daily',
    estimatedDuration: '5-10 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'morning-prayer',
    name: 'Morning Prayer',
    category: 'prayer',
    description: 'Start your day with praise and thanksgiving',
    suggestedFrequency: 'daily',
    estimatedDuration: '5-15 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'evening-prayer',
    name: 'Evening Prayer',
    category: 'prayer',
    description: 'End your day with reflection and gratitude',
    suggestedFrequency: 'daily',
    estimatedDuration: '5-15 minutes',
    difficulty: 'beginner',
  },
];

/** Scripture-related devotions */
export const SCRIPTURE_DEVOTIONS: DevotionTemplate[] = [
  {
    id: 'daily-gospel',
    name: 'Daily Gospel Reading',
    category: 'scripture',
    description: 'Read the daily Gospel from the liturgical calendar',
    suggestedFrequency: 'daily',
    estimatedDuration: '5-10 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'bible-chapter',
    name: 'Bible Chapter Reading',
    category: 'scripture',
    description: 'Read one chapter from the Bible each day',
    suggestedFrequency: 'daily',
    estimatedDuration: '10-15 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'scripture-meditation',
    name: 'Scripture Meditation',
    category: 'scripture',
    description: 'Meditate deeply on a selected Bible passage',
    suggestedFrequency: 'daily',
    estimatedDuration: '15-30 minutes',
    difficulty: 'intermediate',
  },
];

/** Mass and Worship devotions */
export const MASS_WORSHIP_DEVOTIONS: DevotionTemplate[] = [
  {
    id: 'daily-mass',
    name: 'Daily Mass Attendance',
    category: 'mass_worship',
    description: 'Attend weekday Mass when possible',
    suggestedFrequency: 'daily',
    estimatedDuration: '30-45 minutes',
    difficulty: 'intermediate',
  },
  {
    id: 'sunday-mass',
    name: 'Sunday Mass',
    category: 'mass_worship',
    description: 'Weekly obligation for Catholics',
    suggestedFrequency: 'weekly',
    estimatedDuration: '60-90 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'adoration',
    name: 'Eucharistic Adoration',
    category: 'mass_worship',
    description: 'Spend time in prayer before the Blessed Sacrament',
    suggestedFrequency: 'weekly',
    estimatedDuration: '30-60 minutes',
    difficulty: 'intermediate',
  },
];

/** Service-oriented devotions */
export const SERVICE_DEVOTIONS: DevotionTemplate[] = [
  {
    id: 'corporal-works-mercy',
    name: 'Corporal Works of Mercy',
    category: 'service',
    description: 'Practice works of charity to help others',
    suggestedFrequency: 'weekly',
    estimatedDuration: 'Varies',
    difficulty: 'beginner',
  },
  {
    id: 'volunteering',
    name: 'Parish/Community Volunteering',
    category: 'service',
    description: 'Volunteer time for parish or community service',
    suggestedFrequency: 'weekly',
    estimatedDuration: '1-3 hours',
    difficulty: 'beginner',
  },
];

/** Traditional devotions */
export const TRADITIONAL_DEVOTIONS: DevotionTemplate[] = [
  {
    id: 'first-friday',
    name: 'First Friday Devotion',
    category: 'devotions',
    description: 'Monthly devotion to the Sacred Heart of Jesus',
    suggestedFrequency: 'monthly',
    estimatedDuration: '30-60 minutes',
    difficulty: 'intermediate',
  },
  {
    id: 'first-saturday',
    name: 'First Saturday Devotion',
    category: 'devotions',
    description: 'Monthly devotion to the Immaculate Heart of Mary',
    suggestedFrequency: 'monthly',
    estimatedDuration: '30-60 minutes',
    difficulty: 'intermediate',
  },
  {
    id: 'novena',
    name: 'Novena Prayer',
    category: 'devotions',
    description: 'Nine-day prayer to various saints or devotions',
    suggestedFrequency: 'yearly',
    estimatedDuration: '10-30 minutes daily',
    difficulty: 'intermediate',
  },
];

/** Personal spiritual practices */
export const PERSONAL_DEVOTIONS: DevotionTemplate[] = [
  {
    id: 'spiritual-reading',
    name: 'Spiritual Reading',
    category: 'personal',
    description: 'Read spiritual books, lives of saints, or spiritual writings',
    suggestedFrequency: 'daily',
    estimatedDuration: '15-30 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'examination-conscience',
    name: 'Examination of Conscience',
    category: 'personal',
    description: 'Daily reflection on your actions and relationship with God',
    suggestedFrequency: 'daily',
    estimatedDuration: '5-10 minutes',
    difficulty: 'beginner',
  },
  {
    id: 'spiritual-journal',
    name: 'Spiritual Journaling',
    category: 'personal',
    description: 'Write reflections on your spiritual journey',
    suggestedFrequency: 'daily',
    estimatedDuration: '10-15 minutes',
    difficulty: 'beginner',
  },
];

/** All devotions combined */
export const ALL_DEVOTIONS: DevotionTemplate[] = [
  ...PRAYER_DEVOTIONS,
  ...SCRIPTURE_DEVOTIONS,
  ...MASS_WORSHIP_DEVOTIONS,
  ...SERVICE_DEVOTIONS,
  ...TRADITIONAL_DEVOTIONS,
  ...PERSONAL_DEVOTIONS,
];

/** Category labels for UI */
export const CATEGORY_LABELS: Record<HabitCategory, string> = {
  prayer: 'Prayer',
  scripture: 'Scripture',
  mass_worship: 'Mass & Worship',
  service: 'Service',
  devotions: 'Devotions',
  personal: 'Personal',
};

/** Frequency labels for UI */
export const FREQUENCY_LABELS: Record<HabitFrequency, string> = {
  daily: 'Daily',
  weekly: 'Weekly',
  monthly: 'Monthly',
  yearly: 'Yearly',
};
