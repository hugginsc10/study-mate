import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StudyScreenRouteProp } from '../types';

type Props = {
  route: StudyScreenRouteProp;
};

const StudyScreen: React.FC<Props> = ({ route }) => {
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