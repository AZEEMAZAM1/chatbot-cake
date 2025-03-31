import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TypingIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.dot}>•</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 8,
  },
  bubble: {
    flexDirection: 'row',
    backgroundColor: '#E5E5EA',
    padding: 10,
    borderRadius: 12,
  },
  dot: {
    fontSize: 20,
    color: '#666',
    marginHorizontal: 2,
  },
});

export default TypingIndicator;