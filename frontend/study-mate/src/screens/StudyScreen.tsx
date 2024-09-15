import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StudyScreenProps } from '../types';

const StudyScreen: React.FC<StudyScreenProps> = ({ route }) => {
  const { deckId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Screen</Text>
      <Text>Studying Deck ID: {deckId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default StudyScreen;