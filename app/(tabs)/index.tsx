import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

/**
 * Habits Screen - Main screen for tracking daily spiritual practices
 * Features:
 * - List of all active habits
 * - Quick completion actions ("Done!" button)
 * - Visual progress indicators
 * - Create new habit functionality
 * - Empty state for first-time users
 */
export default function HabitsScreen() {
  // Mock data for demonstration - will be replaced with Firebase data
  const habits = [];

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Via Fidei</ThemedText>
          <ThemedText type="subtitle">Walk your faith, one habit at a time</ThemedText>
        </ThemedView>
        
        {habits.length === 0 ? (
          // Empty state for first-time users
          <ThemedView style={styles.emptyState}>
            <IconSymbol size={64} name="cross.fill" color="#666" />
            <ThemedText type="title" style={styles.emptyTitle}>
              Start your spiritual journey
            </ThemedText>
            <ThemedText style={styles.emptySubtitle}>
              Create your first habit to begin tracking your faith practices
            </ThemedText>
            <TouchableOpacity style={styles.createButton}>
              <IconSymbol size={20} name="plus" color="#fff" />
              <ThemedText style={styles.createButtonText}>
                Create Your First Habit
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        ) : (
          // Habits list (for when user has habits)
          <ThemedView style={styles.content}>
            {/* Will be populated with habit cards */}
            <TouchableOpacity style={styles.addButton}>
              <IconSymbol size={20} name="plus" color="#007AFF" />
              <ThemedText style={styles.addButtonText}>Add New Habit</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
    marginTop: 48,
  },
  emptyTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 32,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 12,
    borderStyle: 'dashed',
    gap: 8,
  },
  addButtonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
