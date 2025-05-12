import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

/**
 * Share Screen - Export and share spiritual progress
 * Features:
 * - Select specific habits to include in share
 * - Choose time period (last week, month, year)
 * - Export in multiple formats (text, future: PDF)
 * - Social sharing integration
 */
export default function ShareScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Share</ThemedText>
          <ThemedText type="subtitle">Inspire others with your journey</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.content}>
          <ThemedText>
            Share your spiritual progress and inspire others in their faith journey.
          </ThemedText>
          <ThemedText style={styles.placeholder}>
            • Select habits to include{'\n'}
            • Choose time period (week/month/year){'\n'}
            • Export as text or PDF{'\n'}
            • Share on social media{'\n'}
            • Generate progress reports
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
