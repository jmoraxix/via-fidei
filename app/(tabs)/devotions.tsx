import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

/**
 * Devotions Screen - Browse catalog of spiritual activities
 * Features:
 * - Categorized list of spiritual practices
 * - Search functionality for finding specific devotions
 * - "Start This Habit" button integration
 * - Description and frequency suggestions
 */
export default function DevotionsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Devotions</ThemedText>
          <ThemedText type="subtitle">Discover spiritual practices</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.content}>
          <ThemedText>
            Explore a comprehensive catalog of Christian devotions and spiritual practices.
          </ThemedText>
          <ThemedText style={styles.placeholder}>
            • Prayer traditions (Rosary, Divine Mercy, etc.){'\n'}
            • Scripture reading plans{'\n'}
            • Mass and worship practices{'\n'}
            • Service opportunities{'\n'}
            • Personal spiritual disciplines
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
