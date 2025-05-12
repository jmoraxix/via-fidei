import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

/**
 * History Screen - Shows past performance and analytics for habits
 * Features:
 * - Time period selection (week, month, year)
 * - Completion rate trends
 * - Habit statistics and insights
 */
export default function HistoryScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">History</ThemedText>
          <ThemedText type="subtitle">Track your spiritual journey</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.content}>
          <ThemedText>
            This screen will show your habit history and progress analytics.
          </ThemedText>
          <ThemedText style={styles.placeholder}>
            • Past performance for all habits{'\n'}
            • Completion rate trends{'\n'}  
            • Personal reflection insights{'\n'}
            • Time period comparisons
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 16,
    marginTop: 48,
  },
  content: {
    padding: 16,
  },
  placeholder: {
    marginTop: 16,
    opacity: 0.7,
  },
});
