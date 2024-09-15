import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Deck: { deckId: string };
  Study: { deckId: string };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type DeckScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Deck'>;
export type DeckScreenRouteProp = RouteProp<RootStackParamList, 'Deck'>;

export type StudyScreenRouteProp = RouteProp<RootStackParamList, 'Study'>;