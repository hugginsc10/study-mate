import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DeckScreenProps } from '../types';

const DeckScreen: React.FC<DeckScreenProps> = ({ navigation, route }) => {
  const { deckId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deck Screen</Text>
      <Text>Deck ID: {deckId}</Text>
      <Button
        title="Start Study"
        onPress={() => navigation.navigate('Study', { deckId })}
      />
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

export default DeckScreen;