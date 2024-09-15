import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HomeScreenNavigationProp } from '../types';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Study Mate!</Text>
      <Button
        title="Go to Deck"
        onPress={() => navigation.navigate('Deck', { deckId: '1' })}
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

export default HomeScreen;