/**
 * Date utilities for Via Fidei app
 * Handles habit scheduling, completion tracking, and time zone management
 */

import { format, startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, isWithinInterval, isSameDay, addDays, addWeeks, addMonths, addYears } from 'date-fns';
import { HabitFrequency } from '@/types/Habit';

/** Get current date in YYYY-MM-DD format */
export function getCurrentDateString(): string {
  return format(new Date(), 'yyyy-MM-dd');
}

/** Convert Date to YYYY-MM-DD format */
export function dateToString(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

/** Convert YYYY-MM-DD string to Date */
export function stringToDate(dateString: string): Date {
  return new Date(dateString + 'T00:00:00');
}

/** Get the start and end dates for a habit's current period */
export function getHabitPeriod(frequency: HabitFrequency, referenceDate: Date = new Date()): { start: Date; end: Date } {
  switch (frequency) {
    case 'daily':
      return {
        start: startOfDay(referenceDate),
        end: endOfDay(referenceDate),
      };
    case 'weekly':
      return {
        start: startOfWeek(referenceDate, { weekStartsOn: 1 }), // Monday start
        end: endOfWeek(referenceDate, { weekStartsOn: 1 }),
      };
    case 'monthly':
      return {
        start: startOfMonth(referenceDate),
        end: endOfMonth(referenceDate),
      };
    case 'yearly':
      return {
        start: startOfYear(referenceDate),
        end: endOfYear(referenceDate),
      };
    default:
      throw new Error(`Unknown frequency: ${frequency}`);
  }
}

/** Check if a date is in the current period for a habit */
export function isInCurrentPeriod(date: Date, frequency: HabitFrequency, referenceDate: Date = new Date()): boolean {
  const { start, end } = getHabitPeriod(frequency, referenceDate);
  return isWithinInterval(date, { start, end });
}

/** Get the next reset date for a habit */
export function getNextResetDate(frequency: HabitFrequency, referenceDate: Date = new Date()): Date {
  switch (frequency) {
    case 'daily':
      return addDays(startOfDay(referenceDate), 1);
    case 'weekly':
      return addWeeks(startOfWeek(referenceDate, { weekStartsOn: 1 }), 1);
    case 'monthly':
      return addMonths(startOfMonth(referenceDate), 1);
    case 'yearly':
      return addYears(startOfYear(referenceDate), 1);
    default:
      throw new Error(`Unknown frequency: ${frequency}`);
  }
}

/** Format a period label for display (e.g., "This Week", "March 2025") */
export function formatPeriodLabel(frequency: HabitFrequency, referenceDate: Date = new Date()): string {
  const { start } = getHabitPeriod(frequency, referenceDate);
  
  switch (frequency) {
    case 'daily':
      return format(start, 'EEEE, MMMM d');
    case 'weekly':
      return `Week of ${format(start, 'MMM d')}`;
    case 'monthly':
      return format(start, 'MMMM yyyy');
    case 'yearly':
      return format(start, 'yyyy');
    default:
      return '';
  }
}

/** Get relative time labels (e.g., "Today", "Yesterday", "Monday") */
export function getRelativeTimeLabel(date: Date, referenceDate: Date = new Date()): string {
  if (isSameDay(date, referenceDate)) {
    return 'Today';
  }
  
  const yesterday = addDays(referenceDate, -1);
  if (isSameDay(date, yesterday)) {
    return 'Yesterday';
  }
  
  const tomorrow = addDays(referenceDate, 1);
  if (isSameDay(date, tomorrow)) {
    return 'Tomorrow';
  }
  
  // If within the current week, show day name
  const { start: weekStart, end: weekEnd } = getHabitPeriod('weekly', referenceDate);
  if (isWithinInterval(date, { start: weekStart, end: weekEnd })) {
    return format(date, 'EEEE');
  }
  
  // Otherwise show date
  return format(date, 'MMM d');
}

/** Calculate streak length for a list of completion dates */
export function calculateStreak(completionDates: string[], frequency: HabitFrequency, endDate: Date = new Date()): number {
  if (completionDates.length === 0) return 0;
  
  // Sort dates in descending order
  const sortedDates = completionDates
    .map(dateStr => stringToDate(dateStr))
    .sort((a, b) => b.getTime() - a.getTime());
  
  let streak = 0;
  let currentCheckDate = endDate;
  
  for (const completionDate of sortedDates) {
    if (isInCurrentPeriod(completionDate, frequency, currentCheckDate)) {
      streak++;
      // Move to previous period
      currentCheckDate = getPreviousPeriodDate(frequency, currentCheckDate);
    } else {
      break;
    }
  }
  
  return streak;
}

/** Get a date in the previous period */
function getPreviousPeriodDate(frequency: HabitFrequency, referenceDate: Date): Date {
  switch (frequency) {
    case 'daily':
      return addDays(referenceDate, -1);
    case 'weekly':
      return addWeeks(referenceDate, -1);
    case 'monthly':
      return addMonths(referenceDate, -1);
    case 'yearly':
      return addYears(referenceDate, -1);
    default:
      throw new Error(`Unknown frequency: ${frequency}`);
  }
}

/** Calculate completion rate percentage */
export function calculateCompletionRate(completedPeriods: number, totalPeriods: number): number {
  if (totalPeriods === 0) return 0;
  return Math.round((completedPeriods / totalPeriods) * 100);
}
