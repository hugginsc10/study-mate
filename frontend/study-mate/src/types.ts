import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Deck: { deckId: string };
  Study: { deckId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

export type HomeScreenProps = RootStackScreenProps<'Home'>;
export type DeckScreenProps = RootStackScreenProps<'Deck'>;
export type StudyScreenProps = RootStackScreenProps<'Study'>;